import Vue from "vue";
import App from "./App";

import router from "@/router";

Vue.config.productionTip = false;

//组件3大步:定义.注册.使用

new Vue({
  // el: "#app",v
  render: (h) => h(App), //  1.注册组件  2.使用组件  3.渲染组件
  // components: {
  //   App,
  // },
  // template: "<App />",
  router,
}).$mount("#app");
