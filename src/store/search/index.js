const { reqGoodsListInfo } = require("@/api");

const state = {
  goodsListInfo: [],
};

const getters = {
  goodsList(state) {
    return state.goodsListInfo.goodsList;
  },
  attrsList(state) {
    return state.goodsListInfo.attrsList;
  },
  trademarkList(state) {
    return state.goodsListInfo.trademarkList;
  },
};

const mutations = {
  RECEIVEGOODSLISTINFO(state, goodsListInfo) {
    state.goodsListInfo = goodsListInfo;
  },
};
const actions = {
  async getGoodsListInfo({ commit }, searchParams) {
    const result = await reqGoodsListInfo(searchParams);
    if (result.code === 200) {
      commit("RECEIVEGOODSLISTINFO", result.data);
    }
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
