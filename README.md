```
npm i vue-kityminder-editor
```

## main.js
```
import 'vue-kityminder-editor/lib/kityMinder.css'
import kityMinder from 'vue-kityminder-editor'

Vue.use(kityMinder)

```

## 组件中使用

```
<kityMinder :importJson="importJson" @minder="minderHandle" />
```

## 测试数据
```
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
```
