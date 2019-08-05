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
        theme: "fresh-blue"
      }
    };
  },
  mounted() {
    if (this.importData.data.type !== "text") {
      const getId = document.getElementById(`minder-editor-${this.index}`);
      this.minder = new Editor(getId).minder;
      this.rootData.root = this.importData;
      this.minder.importJson(this.rootData);
      setTimeout(() => {
        let svgBox = getId.children[0].children[1].children[0];
        let svgHeight = svgBox.getBBox().height + 100;
        getId.style.height = svgHeight + "px";
        svgBox.setAttribute("transform", `translate( 170 ${svgHeight / 2} )`);
      }, 600);
      this.minder.on("contentchange", e => {
        this.$emit("exportData", this.minder.exportJson().root, this.index);
      });
    }
  }
};
</script>
<style lang="less" scoped>
.minder-editor-container {
  margin-right: 10px;
  .km-editor {
    transition: height 0.1s;
    -webkit-transition: height 0.1s;
    background: #fcfcfc !important;
  }
  .textAre {
    padding-bottom: 20px;
    color: #333;
    background: #fcfcfc;
    display: flex;
    justify-content: center;
    span {
      padding: 0 145px;
      text-align: left;
    }
  }
}
</style>