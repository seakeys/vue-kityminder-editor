<template>
  <div class="minder-editor-container">
    <div id="minder-editor"></div> 
  </div>
</template>

<script>
  const Editor = require('../../editor')
  import '../../../examples/styles/minder.css'
  export default {
    name: 'mind-editor', 
    props: {
      importData: {
        type: Object,
        default:() => {}
      }
    },
    watch: {
      importData (val) { // 监听异步数据
        this.rootData.root = val
        this.minder.importJson(this.rootData)
        this.minder.execCommand('template', 'right')
      }
    },
    data() {
      return {
        minder: null,
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
          root:{}
        },
      };
    },
    mounted() {
      const getId = document.getElementById('minder-editor')
      this.minder = window.editor = new Editor(getId).minder
      this.rootData.root = this.importData
      this.minder.importJson(this.rootData)
      this.minder.execCommand('template', 'right')
      this.$emit('minderHandle',this.minder)
    }
  }
</script>