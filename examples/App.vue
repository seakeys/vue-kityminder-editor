<template>
  <div id="app">
    <kityMinder :importJson="importJson" @minder="minderHandle" />
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      importJson: { 
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
  },
  methods: {
    minderHandle (val) {
      console.log(val)
    }
  }
}
</script>

<style>
#minder-container {
  height: 100vh;
}
</style>
