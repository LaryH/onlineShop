import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Search from "@/pages/Search";

export default [
  //前端路由是路径和组件之间的映射关系
  //后台是路径和函数
  {
    name: "Home",
    path: "/home",
    component: Home,
  },
  {
    name: "Login",
    path: "/login",
    component: Login,
    meta: {
      isHide: true,
    },
  },
  {
    name: "Register",
    path: "/register",
    component: Register,
    meta: {
      isHide: true,
    },
  },
  {
    //指定params参数可传可不传
    name: "Search",
    path: "/search/:keyword?",
    component: Search,
    // props: true, //只能传递params参数
    // props: { name: "Alice" },   //基本不用,只能传递静态参数
    props(route) {
      //把传递过来的params参数和query参数一起映射为组件的属性
      return {
        keyword: route.params.keyword,
        keyword2: route.query.keyword,
      };
    },
  },
  //重定向路由
  {
    path: "/",
    redirect: "/home",
  },
];
