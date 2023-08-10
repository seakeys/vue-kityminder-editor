# vue-kityminder-editor

A Vue.js component for integrating KityMinder mind map editor.

## Installation

Install the package using npm:

```
npm install vue-kityminder-editor
```

## Usage in main.js

Import the CSS and the vue-kityminder-editor component in your main.js file:

```
import 'vue-kityminder-editor/lib/kityMinder.css';
import Vue from 'vue';
import kityMinder from 'vue-kityminder-editor';

Vue.use(kityMinder);

```

## Using the Component in Your Vue File

In your Vue component, use the kityMinder component like this:

```
<template>
  <kityMinder :importJson="importJson" @minder="minderHandle" />
</template>

<script>
export default {
  data() {
    return {
      importJson: {
        // Your JSON data here
      }
    };
  },
  methods: {
    minderHandle(minder) {
      // Handle the minder event here
    }
  }
};
</script>
```

## Sample Test Data

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

Feel free to replace the sample JSON data with your actual mind map data.
