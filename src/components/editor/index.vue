<template>
  <div class="minder-editor-container">
    <div v-if="importData.data.type !== 'text'" :id="`minder-editor-${index}`"></div>
    <div class="textAre" v-if="importData.data.type === 'text'">
      <span>{{importData.data.text}}</span>
    </div>
  </div>
</template>
<script>
import "../../styles/editor.css"
import Editor from "../../editor"
import "hotbox-ui/less/hotbox.less"
export default {
  name: "mind-editor",
  props: {
    importData: {
      type: Object,
      default: () => {}
    },
    index: [Number]
  },
  data() {
    return {
      minder: null,
      rootData: {
        root: {},
        template: "right",
        theme: "fresh-blue-compat" //fresh-blue-compat
      }
    };
  },
  mounted() {
    if (this.importData.data.type !== "text") {
      const getId = document.getElementById(`minder-editor-${this.index}`);
      this.minder = new Editor(getId).minder;
      this.rootData.root = this.importData;
      this.minder.importJson(this.rootData);
      this.$emit("exportMinder", this.minder)
      this.minder.on("contentchange", e => {
        this.$emit("exportData", this.minder.exportJson().root, this.index);
        setTimeout(() => {
          let heightBox = this.minder._connectContainer.node.parentNode.getBBox().height + 13
          this.minder.getPaper().setHeight(heightBox)
          let getMax = []
          this.minder.getAllNode().forEach (item => { getMax.push(item._globalLayoutTransform.m.f)})
          getMax.sort((a,b) => { return a-b})
          let getHeight = heightBox / 2
          if (Math.abs(getMax[0]) > getMax[getMax.length-1]) { // 顶部太高
              if (Math.abs(getMax[0]) > getHeight) {
                  var dy = getHeight + ((Math.abs(getMax[0]) - getHeight)) + 15
              } else if (Math.abs(getMax[0]) < getHeight) {
                  var dy = getHeight + 5
              }
          } else if (Math.abs(getMax[0]) < getMax[getMax.length-1]) { // 底部太高 
              if (Math.abs(getMax[getMax.length-1]) > getHeight) {
                  var dy = getHeight - (Math.abs(getMax[getMax.length-1]) - getHeight) - 15
              } else {
                  var dy = getHeight - 5
              }
          } else { // 两边对称
              var dy = getHeight
          }
          this.minder._connectContainer.node.parentNode.style.transition = 'all 0.1s' 
          this.minder.getRenderContainer().setTranslate(new kity.Point(12, dy))
      }, 300)
      });
    }
  }
};
</script>
<style lang="less" scoped>
.minder-editor-container {
  line-height: 32px;
  font-size: 16px;
  .km-editor {
    transition: height 0.1s;
    -webkit-transition: height 0.1s;
    background: #fcfcfc !important;
  }
  .textAre {
    color: #333;
    background: #fcfcfc;
  }
}
</style>