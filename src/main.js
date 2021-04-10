import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 引入基础样式
import '@/assets/scss/reset.scss'
import '@/assets/font/iconfont.css'
// 引入公共样式
import '@/assets/scss/common.scss'
// 引入文本编辑器
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
Vue.use(mavonEditor)

import setAxios from './network/index.js'
setAxios()

// 导入axios
import axios from 'axios'
// 全局配置  挂载到vue的原型对象上  这样每个vue组件都可以通过this.$http 使用axios
Vue.prototype.$http = axios;

// 导入
import store from './store/index.js'
// 挂载到Vue实例上，全局可通过this.$store进行调用
Vue.prototype.$store = store


Vue.config.productionTip = false

Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
