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
  },
  {
    name: "Register",
    path: "/register",
    component: Register,
  },
  {
    name: "Search",
    path: "/search",
    component: Search,
  },
  //重定向路由
  {
    path: "/",
    redirect: "/home",
  },
];
