import Editor from './App.vue'

const MindEditor = {
  Minder: Editor
};

const install = function(Vue) {
  Object.keys(MindEditor).forEach((key) => {
    Vue.component(key, MindEditor[key]);
  });
};

// auto install
if(typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default Object.assign(MindEditor, {install});   // eslint-disable-line no-undef