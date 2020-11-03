import Vue from 'vue';
import App from './App.vue';
import 'element-ui/lib/theme-chalk/index.css';
import {
  Container,
  Header,
  Main,
  Collapse,
  CollapseItem,
  Form,
  FormItem,
  Input,
  Button,
  Message,
  Alert,
  Card,
  Tooltip,
} from 'element-ui';

Vue.use(Container)
  .use(Header)
  .use(Main)
  .use(Collapse)
  .use(CollapseItem)
  .use(Form)
  .use(FormItem)
  .use(Input)
  .use(Button)
  .use(Alert)
  .use(Card)
  .use(Tooltip);

Vue.prototype.$message = Message;

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
