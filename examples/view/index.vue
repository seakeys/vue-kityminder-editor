<template>
<div>
  <minder ref="minder" 
  :importData="importData"
  @exportData="exportData"
  ></minder>
</div>
</template>
<script>

  export default {
    data() {
      return {
        importData: { 
            "data": { "text": "Design project", "id": 2 },
            "children": [
                { 
                    "data": { "text": "Designsy", "id": 3 },
                    "children": [
                        { 
                          "data": { "text": "Designsy", "id": 4 },
                          "children": [
                            { "data": { "text": "Designsy", "id": 5 } },
                            { "data": { "text": "Designsy", "id": 5 } },
                            { "data": { "text": "Designsy", "id": 5 } },
                          ]
                        },
                        { "data": { "text": "Designsy", "id": 5 } },
                        { "data": { "text": "Designsy", "id": 62 } },
                        { "data": { "text": "Designsy", "id": 73 } },
                        { "data": { "text": "Designsy", "id": 84 } }
                    ]
                },
                { "data": { "text": "Designsy", "id": 9 } },
                { "data": { "text": "Designsy", "id": 102 } },
                { "data": { "text": "Designsy", "id": 113 } },
                { "data": { "text": "Designsy", "id": 124 } }
            ]
        }
      };
    },
    methods:{
      exportData(data) {
        console.log(data)
      }
    }
  };
</script>
