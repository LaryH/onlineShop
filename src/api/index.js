//这个文件是所有接口请求函数的文件
//每一个请求接口数据功能都给它定义成一个函数,以后哪里需要去请求数据,就调用对应的这个接口请求函数就好了
import Ajax from "@/server";
import MockAjax from "@/server/mockAjax";

export const reqCategoryList = () => {
  return Ajax({
    url: "/product/getBaseCategoryList",
    method: "get",
    //params参数写在地址后面/:params
    //传body请求头参数,一般post.put才会有body参数
    data: {},
    //传query参数
    params: {},
  });
};
//请求//banner数据
export const reqBannerList = () => {
  return MockAjax({
    url: "/banner",
    method: "GET",
  });
};
//请求floor数据
export const reqFloorList = () => {
  return MockAjax({
    url: "/floor",
    method: "GET",
  });
};

//请求search数据
export const reqGoodsListInfo = (searchParams) => {
  return Ajax({
    url: "/list",
    method: "POST",
    data: searchParams,
  });
};
