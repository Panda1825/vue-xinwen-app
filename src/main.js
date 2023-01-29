import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./style/index.css"
//引入vant
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
//引入amfe-flexible 自动设置rem基准值
import 'amfe-flexible'
import '@/utils/dayjs'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
