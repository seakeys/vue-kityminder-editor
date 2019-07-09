# vue-kityminder-editor

## use

`npm install vue-kityminder-editor --save`

## main.js
```js
import kityminder from 'vue-kityminder-editor'

Vue.use(kityminder);
```
## **.vue

`<minder ref="minder" :importData="importData" @exportData="exportData"></minder>`

```js
importData:[
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
    }
]
```

For a detailed explanation on how things work, check out the [guide](https://gitee.com/chenhaifei/vue-kityminder.git) and [docs for vue-kityminder](https://gitee.com/chenhaifei/vue-kityminder.git).
