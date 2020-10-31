import Vue from 'vue';
import App from './App.vue';
import 'element-ui/lib/theme-chalk/index.css';
import {
  Collapse,
  CollapseItem,
  Form,
  FormItem,
  Input,
  Button,
  Message,
  Alert,
} from 'element-ui';

Vue.use(Collapse)
  .use(CollapseItem)
  .use(Form)
  .use(FormItem)
  .use(Input)
  .use(Button)
  .use(Alert);

Vue.prototype.$message = Message;

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
