<template>
<div>
  <minder ref="minder" :importData="importData" @exportData="exportData"></minder>
</div>
</template>
<script>

  export default {
    data() {
      return {
        importData: [
                { 
                    "data": { "text": "新闻1", "id": 2, "priority": 1 },
                    "children": [
                        { 
                            "data": { "text": "新闻2", "id": 3, "priority": 1 },
                            "children": [
                                { "data": { "text": "新闻3", "id": 4, "priority": 1 }},
                                { "data": { "text": "网页4", "id": 5, "priority": 1 } },
                                { "data": { "text": "贴吧5", "id": 6, "priority": 2 } },
                                { "data": { "text": "知道6", "id": 7, "priority": 3 } },
                                { "data": { "text": "音乐7", "id": 8, "priority": 4 } }
                            ]
                        },
                        { "data": { "text": "网页8", "id": 9, "priority": 1 } },
                        { "data": { "text": "贴吧9", "id": 10, "priority": 2 } },
                        { "data": { "text": "知道11", "id": 11, "priority": 3 } },
                        { "data": { "text": "音乐12", "id": 12, "priority": 4 } }
                    ]
                },
                { 
                    "data": { "text": "网页32", "id": 13, "priority": 1 },
                    "children": [
                        {"data":{"text":"测试网页","id": 14, "priority": 2 }},
                        {"data":{"text":"测试网页","id": 14, "priority": 2 }},
                        {"data":{"text":"测试网页","id": 14, "priority": 2 }},
                        {"data":{"text":"测试网页","id": 14, "priority": 2 }},
                        {"data":{"text":"测试网页","id": 14, "priority": 2 }},
                    ]
                },
                { 
                    "data": { "text": "贴吧43", "id": 14, "priority": 2 },
                    "children": [
                        {"data":{"text":"测试贴吧","id": 14, "priority": 2 }},
                        {"data":{"text":"测试贴吧","id": 14, "priority": 2 }},
                        {"data":{"text":"测试贴吧","id": 14, "priority": 2 }},
                        {"data":{"text":"测试贴吧","id": 14, "priority": 2 }},
                        {"data":{"text":"测试贴吧","id": 14, "priority": 2 }},
                    ]
                },
                { "data": { "text": "知道45", "id": 15, "priority": 3 } },
                { "data": { "text": "音乐65", "id": 16, "priority": 4 } },
                { "data": { "text": "图片76", "id": 17, "priority": 5 } },
                { "data": { "text": "视频345", "id": 18, "priority": 6 } },
                { "data": { "text": "地图234", "id": 19, "priority": 7 } },
                { "data": { "text": "百科234", "id": 20, "priority": 8 } },
                { "data": { "text": "文档信息234", "id": 12, "hyperlink": "http://www.baidu.com" } }
            ]
      };
    },
    methods:{
      exportData(data) {
        console.log(data)
      }
    }
  };
</script>
