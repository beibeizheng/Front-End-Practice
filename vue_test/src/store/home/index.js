import { reqCategory } from "@/api";


const state = {
    categoryList: [],
};
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList.slice(0, 16)
    },

};
const actions = {
    async categoryList({ commit }) {
        let result = await reqCategory();
        if (result.code == 200) {
            commit("CATEGORYLIST", result.data);
        }
    },

};
const getters = {};


export default {
    state,
    mutations,
    actions,
    getters,

};