<template>
  <div class="minder">
     <div id="minder-container"></div>
  </div>
</template>

<script>
import 'hotbox-ui/hotbox.css'
import '../assets/kityminder.editor.css'
import 'kityminder-core/dist/kityminder.core.css'
import 'kity'
import 'hotbox-ui'
import 'kityminder-core'
import '../assets/kityminder.editor.js'
export default {
  name: 'kityMinder',
  data() {
    return {
      minder: {}
    }
  },
  props: {
    importJson: {
      type: Object,
      default: () => []
    }
  },
  mounted() {
    this.KMEditor = new window.kityminder.Editor(document.querySelector('#minder-container'))
    this.minder = this.KMEditor.minder
    this.minder.importJson(this.importJson)
    this.$emit('minder', this.minder)
    // this.minder.execCommand('Theme', 'fresh-blue')
    // console.log(this.minder)
  }
}
</script>

<style>
#minder-container {
  height: 100vh;
  width: 100vw;
}
</style>
