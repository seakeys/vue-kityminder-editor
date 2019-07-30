<template>
  <div class="minder-editor-container">
    <div :id="`minder-editor-${index}`"></div>
    <div class="textAre">
      <span>{{text}}</span>
    </div>
  </div>
</template>

<script>
  import '../../../static/kity'
  import '../../../static/kityminder.core'
  import '../../styles/editor.css'
  import Editor from '../../editor'
  import "hotbox-ui/less/hotbox.less";
  export default {
    name: 'mind-editor',
    props: {
      importData: {
        type: Object,
        default:() => {}
      },
      index:[Number],
      text: [String],
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
          template:'right',
          theme:'fresh-blue'
        },
      };
    },
    mounted() {
      const getId = document.getElementById(`minder-editor-${this.index}`);
      this.minder = new Editor(getId).minder;
      this.rootData.root = this.importData
      this.minder.importJson(this.rootData)
      setTimeout(() => {
        let svgBox = getId.children[0].children[1].children[0]
        let svgHeight = svgBox.getBBox().height + 100
        getId.style.height = svgHeight + 'px'
        svgBox.setAttribute("transform", `translate( 170 ${(svgHeight/2)} )`)
      },600)
      this.minder.on('contentchange', (e) => {
        this.$emit('exportData',this.minder.exportJson().root,this.index)
      })
    },
    methods:{
      
    }
  }
</script>
<style lang="less" scoped>
.minder-editor-container{
  .km-editor {
    transition:height 0.1s;
    -webkit-transition:height 0.1s; /* Safari */
    background: #fff !important;
  }
  .textAre{
    width: 900px;
    position: relative;
    padding-bottom: 20px;
    color: #333;
    background: #fff;
    // background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAIAAAACDbGyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowQzg5QTQ0NDhENzgxMUUzOENGREE4QTg0RDgzRTZDNyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowQzg5QTQ0NThENzgxMUUzOENGREE4QTg0RDgzRTZDNyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkMwOEQ1NDRGOEQ3NzExRTM4Q0ZEQThBODREODNFNkM3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkMwOEQ1NDUwOEQ3NzExRTM4Q0ZEQThBODREODNFNkM3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+e9P33AAAACVJREFUeNpisXJ0YUACTAyoAMr/+eM7EGGRZ4FQ7BycEAZAgAEAHbEGtkoQm/wAAAAASUVORK5CYII=') repeat rgb(58, 65, 68);
    span{
      position: absolute;
      left: 50%;
      top: 0;
      margin-left: -300px;
      display: block;
      width: 600px;
      text-align: left;
    }
  }

}
</style>
