import axios from "axios";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

const server = axios.create({
  baseURL: "/mock",
  timeout: 20000,
});

server.interceptors.request.use((config) => {
  NProgress.start();
  return config;
});

server.interceptors.response.use(
  (response) => {
    NProgress.done();
    return response.data;
  },
  (error) => {
    alert(error.message);
    return new Promise();
  }
);

export default server;
