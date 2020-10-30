import Vue from 'vue';
import App from './App.vue';
import { Collapse, CollapseItem } from 'element-ui';

Vue.use(Collapse)
  .use(CollapseItem);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
