<template>
  <div id="app">
     <div id="minder-container"></div>
  </div>
</template>

<script>
import 'kity'
import 'hotbox-ui'
import 'hotbox-ui/hotbox.css'
import 'kityminder-core'
import './assets/kityminder.editor.css'
import './assets/kityminder.editor.js'
export default {
  name: 'app',
  data() {
    return {
      minderData: { 
          'data': { 'text': 'Design project', 'id': 2 },
          'children': [
              { 
                  'data': { 'text': 'Designsy', 'id': 3 },
                  'children': [
                      { 
                        'data': { 'text': 'Designsy', 'id': 4 },
                        'children': [
                          { 'data': { 'text': 'Designsy', 'id': 5 } },
                          { 'data': { 'text': 'Designsy', 'id': 5 } },
                          { 'data': { 'text': 'Designsy', 'id': 5 } },
                        ]
                      },
                      { 'data': { 'text': 'Designsy', 'id': 5 } },
                      { 'data': { 'text': 'Designsy', 'id': 62 } },
                      { 'data': { 'text': 'Designsy', 'id': 73 } },
                      { 'data': { 'text': 'Designsy', 'id': 84 } }
                  ]
              },
              { 'data': { 'text': 'Designsy', 'id': 9 } },
              { 'data': { 'text': 'Designsy', 'id': 102 } },
              { 'data': { 'text': 'Designsy', 'id': 113 } },
              { 'data': { 'text': 'Designsy', 'id': 124 } }
          ]
      }
    }
  },
  mounted() {
    this.KMEditor = new window.kityminder.Editor(document.querySelector('#minder-container'))
    this.minder = this.KMEditor.minder
    this.minder.importJson(this.minderData)
    // this.minder.execCommand('Theme', 'fresh-blue')
    // console.log(this.minder)
  }
}
</script>

<style>
#minder-container {
  height: 100vh;
}
</style>
