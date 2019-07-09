/**
 * Created by aresn on 16/6/20.
 */
import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './app';
import minder from '../src/index';

Vue.use(VueRouter);
Vue.use(minder);
// 开启debug模式
Vue.config.debug = true;

// 路由配置
const Home = () => import('./view/index')
const router = new VueRouter({ 
    routes: [
        { path: '/', component: Home }
    ]
})

new Vue({
    router,
    el: '#app',
    components: { App },
    template: '<App/>'
})
