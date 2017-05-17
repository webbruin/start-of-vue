import Vue from 'vue'
import App from './App.vue'
import './assets/css/style.css';

// 路由配置
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import routes from './router.config';
const router = new VueRouter(routes);

//axios配置、安装
import axios from 'axios';
axios.interceptors.request.use((config)=>{
  store.dispatch('showLoading');
  return config;
},(error)=>{
  return Promise.reject(error);
});
axios.interceptors.response.use((response)=>{
  store.dispatch('hideLoading');
  return response;
},(error)=>{
  return Promise.reject(error);
});
Vue.prototype.$http = axios;

//引入状态管理（共享数据流向)
import store from './store';

//引入loading组件（插件）,并安装
import loading from './loading/index';
Vue.use(loading);

//动画
import 'animate.css';

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
});
