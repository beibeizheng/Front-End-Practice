import { reqGetSearchInfo } from "@/api";

// store for search modules
const state = {
    searchList: {}
};
const mutations = {
    GETSEARCHLIST(state, searchList) {
        state.searchList = searchList;
    },
};
const actions = {
    async getSearchList({ commit }, params = {}) {
        let result = await reqGetSearchInfo(params);
        if (result.code == 200) {
            commit("GETSEARCHLIST", result.data);
        }
    },
};
const getters = {
    goodsList(state) {
        // If there is no network, return an empty array
        return state.searchList.goodsList || [];

    },
    trademarkList(state) {
        return state.searchList.trademarkList;
    },
    attrsList(state) {
        return state.searchList.attrsList;
    }
};


export default {
    state,
    mutations,
    actions,
    getters,

};