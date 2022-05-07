import Vue from 'vue';
import antd from 'ant-design-vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'ant-design-vue/dist/antd.css';
import pageHeader from '@/components/page-header.vue';
// import uploadPicture from '@/components/upload-picture.vue';
import '@/assets/css/common.scss';
import mixin from "@/utils/mixin";
import * as echarts from 'echarts'
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
Vue.use(antd)
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.component('page-header', pageHeader);
// Vue.component('upload-picture', uploadPicture);
// 注册
Vue.directive('permission', {
  inserted: function (el, binding, vnode) {
    let userAuthoritys = store.getters.getAuthoriths||[];
    if(userAuthoritys.indexOf(binding.value) <= -1) {
      el.parentNode.removeChild(el);
    }
  },
  update: function () {},
  componentUpdated: function () {},
  unbind: function () {}
})

Vue.mixin(mixin)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
