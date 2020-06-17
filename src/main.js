import Vue from 'vue'
import App from './App.vue'
import router from './router'

import '@/assets/css/reset.css'

require('echarts-extension-amap');

Vue.config.productionTip = false

// router钩子函数设置页面相关meta配置
router.beforeEach((to, from, next) => {
  // title
  window.document.title = to.meta.title === undefined ? '流眸' : to.meta.title;
  next();
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
