import Vue from 'vue'
import App from './App'
import router from './router'
import "../static/js/rem"
import Vant from 'vant';
import 'vant/lib/index.css';


Vue.config.productionTip = false
Vue.use(Vant);
/* eslint-disable no-new */


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false


Vue.use(ElementUI)
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
