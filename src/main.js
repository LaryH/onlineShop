import Vue from "vue";
import router from "@/router/router";
import store from "@/store/store";

import App from "./App";
import TypeNav from "@/components/TypeNav";
import Swiper from "@/components/Swiper";

import "@/mock/mock";
import "swiper/css/swiper.css";
//组件3大步:定义.注册.使用

//全局注册
Vue.component("TypeNav", TypeNav);
Vue.component("Swiper", Swiper);

new Vue({
  // el: "#app",v
  render: (h) => h(App), //  1.注册组件  2.使用组件  3.渲染组件
  // components: {
  //   App,
  // },
  // template: "<App />",
  router,
  store,
}).$mount("#app");
