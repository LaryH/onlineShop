//发送ajax请求模块
//目的是为了对axios进行二次封装

import axios from "axios";
import NProgress from "nprogress";
import "nprogress/nprogress";
import "nprogress/nprogress.css";

const server = axios.create({
  baseURL: "/api", //配置请求基础路径
  timeout: 20000, //请求超时时间
});

//请求和响应拦截器
server.interceptors.request.use((config) => {
  //处理了config
  NProgress.start();
  //返回这个config,请求继续发送,发送的报文信息就是新的config对象
  return config;
});

server.interceptors.response.use(
  (response) => {
    NProgress.done();
    return response.data;
  },
  (error) => {
    NProgress.done();
    alert(error.message);
    return new Promise();
  }
);

export default server;
