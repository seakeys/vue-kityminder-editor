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
```
