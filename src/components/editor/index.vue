<template>
  <div class="minder-editor-container">
    <div class="tools">
      <imageUpload  :minder='minder' :AccessKey='AccessKey' :SecretKey='SecretKey' :Domain='Domain' :scope='scope' v-if='isImageUpload'/>
      <button @click="exportHandle(0)">导出png图片</button>
      <!-- <button @click="exportHandle(1)">导出pdf格式</button> -->
      <button @click="minder.execCommand('camera', minder.getRoot(), 600);">重新定位</button>
      <button @click="minder.execCommand('zoomIn')">放大</button>
      <button @click="minder.execCommand('zoomOut');">缩小</button>
      <select @change="minder.execCommand('template', rootData.template);" v-model="rootData.template">
        <option v-for="(item, index) in templateList" :key="index" :value="index">{{item}}</option>
      </select>
      <select @change="minder.execCommand('theme', rootData.theme);" v-model="rootData.theme">
        <option v-for="(item, index) in themeList" :key="index" :value="index">{{item}}</option>
      </select>
    </div>
    <div class="tabBar">
      <button v-for="(item, index) in importData" :key="index" :class="{active:navIndex == index}" @click="onChange(index)">{{item.data.text}}</button>
    </div>
    <div id="minder-editor"></div> 
  </div>
</template>

<script>
  const Editor = require('../../editor')
  // import jsPDF from 'jspdf';
  import '../../../examples/styles/minder.css'
  // import "hotbox-ui/less/hotbox.less";
  import imageUpload from '../imageUpload'
  export default {
    name: 'mind-editor',
    props: {
      importData: {
        type: Array,
        default:() => []
      },
      AccessKey:{
          type:String,
          default:''
      },
      SecretKey:{
          type:String,
          default:''
      },
      Domain:{
          type:String,
          default:''
      },
      scope:{
          type:String,
          default:''
      },
      isImageUpload:{
        type:Boolean,
        default:true
      }
    },
    data() {
      return {
        minder: null,
        navIndex:0,
        templateList:{
          'default': '思维导图',
          'tianpan': '天盘图',
          'structure': '组织结构图',
          'filetree': '目录组织图',
          'right': '逻辑结构图',
          'fish-bone': '鱼骨头图'
        },
        themeList: {
					'classic': '脑图经典',
					'classic-compact': '紧凑经典',
					'snow': '温柔冷光',
					'snow-compact': '紧凑冷光',
					'fish': '鱼骨图',
					'wire': '线框',
					'fresh-red': '清新红',
					'fresh-soil': '泥土黄',
					'fresh-green': '文艺绿',
					'fresh-blue': '天空蓝',
					'fresh-purple': '浪漫紫',
					'fresh-pink': '脑残粉',
					'fresh-red-compat': '紧凑红',
					'fresh-soil-compat': '紧凑黄',
					'fresh-green-compat': '紧凑绿',
					'fresh-blue-compat': '紧凑蓝',
					'fresh-purple-compat': '紧凑紫',
					'fresh-pink-compat': '紧凑粉',
					'tianpan':'经典天盘',
					'tianpan-compact': '紧凑天盘'
        },
        rootData:{
          root:{},
          template:'default',
          theme:'snow'
        },
      };
    },
    mounted() {
      const getId = document.getElementById('minder-editor')
      this.minder = window.editor = new Editor(getId).minder;
      this.onChange(0)
      if (window.localStorage.__dev_minder_content) {
        this.minder.importJson(JSON.parse(window.localStorage.__dev_minder_content));
      }
      this.minder.on('contentchange', () => {
        window.localStorage.__dev_minder_content = JSON.stringify(this.minder.exportJson());
        this.importData[this.navIndex] = this.minder.exportJson().root
        this.$emit('exportData',this.importData)
      })
    },
    methods:{
      exportHandle(n) {
        if(n == 0){
          this.minder.exportData('png').then((content) => {
            const ele = document.createElement('a')
            const evt = document.createEvent('HTMLEvents')
            evt.initEvent("click", true, true)
            ele.download = this.rootData.root.data.text || '无标题'
            ele.href = content
            ele.click()
          })
        }else if(n == 1) {
          this.minder.exportData('png').then((content) => {
            var doc = new jsPDF()
            doc.addImage(content, 'PNG', 0, 0, 0, 0);
            doc.save(`${this.rootData.root.data.text || '无标题'}.pdf`);
          })
        }
      },
      onChange(index) {
        this.navIndex = index
        this.rootData.root = this.importData[index]
        this.minder.importJson(this.rootData)
        window.localStorage.__dev_minder_content = JSON.stringify(this.minder.exportJson());
      }
    },
    components:{
      imageUpload
    }
  }
</script>
<style lang="less" scoped>
.active {
  background: red;
  outline: none;
}
.minder-editor-container{
  .tools{
    position: fixed;
    top: 20px;
    right: 20px;
    color: red;
    z-index: 100;
    display: flex;
    button,select{
      margin-left: 8px;
    }
  }
  .tabBar{
    position: fixed;
    top: 50%;
    right: 20px;
    transform: translate(0,-50%);
    z-index: 100;
    display: flex;
    flex-direction: column;
  }

  .tabBar button {
    margin-bottom: 10px;
    cursor: pointer;
  }
}
</style>
