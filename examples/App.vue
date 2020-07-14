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
          'data': { 
            'id': 2,
            'text': 'Design project',
            'image': 'http://image.namedq.com/uploads/20191011/18/1570789062-WiOwJhGFDp.jpg',
            'imageSize': { 'width': 200, 'height': 200 }
          },
          'children': [
              { 
                  'data': { 'text': 'Designsy', 'priority': 1, 'id': 3 },
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
              { 'data': { 'text': 'Designsy', 'priority': 2, 'id': 9 } },
              { 'data': { 'text': 'Designsy', 'priority': 3, 'id': 102 } },
              { 'data': { 'text': 'Designsy', 'priority': 4, 'id': 113 } },
              { 'data': { 'text': 'Designsy', 'priority': 5, 'id': 124 } }
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
