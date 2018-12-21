// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import i18n from './components/lang'
import {post,get} from './components/axios'
import './components/permission'



import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/common/style/reset.css';

Vue.config.productionTip = false
Vue.use(ElementUI);

Vue.prototype.$post = post
Vue.prototype.$get = get


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})
