import { reqCategoryList, reqBannerList, reqFloorList } from "@/api";

const state = {
  categoryList: [],
  bannerList: [],
  floorList: [],
};
const mutations = {
  RECEIVECATEGORY(state, categoryList) {
    state.categoryList = categoryList;
  },
  RECEIVEBANNERLIST(state, bannerList) {
    state.bannerList = bannerList;
  },
  RECEIVEFLOORLIST(state, floorList) {
    state.floorList = floorList;
  },
};
const actions = {
  // async/await 写法
  // async getCategoryList({ commit }) {
  //   const reponse = await reqCategoryList();
  //   commit("SETCATEGORY", reponse.data);
  // },

  //通常promise写法
  getCategoryList({ commit }) {
    reqCategoryList().then((response) => {
      commit("RECEIVECATEGORY", response.data);
    });
  },

  async getBannerList({ commit }) {
    const result = await reqBannerList();
    commit("RECEIVEBANNERLIST", result.data);
  },

  async getFloorList(context) {
    const result = await reqFloorList();
    context.commit("RECEIVEFLOORLIST", result.data);
  },
};
const getters = {};

const home = {
  state,
  mutations,
  actions,
  getters,
};

export default home;
