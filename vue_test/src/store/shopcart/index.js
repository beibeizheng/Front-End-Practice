import { reqCartList, reqDeleteCartById, reqUpdateCheckedById } from "@/api";
import { Promise } from "core-js";

const state = {
    cartList: []
};
const mutations = {
    GETCARTLIST(state, cartList) {
        state.cartList = cartList;
    }

};
const actions = {
    //获取用户购物车的数据
    async getCartList({ commit }) {
        let result = await reqCartList();
        if (result.code == 200) {
            commit("GETCARTLIST", result.data);
        }
    },
    // 删除购物车某一个产品
    async deleteCartListBySkuId({ commit }, skuId) {
        let result = await reqDeleteCartById(skuId);
        if (result.code == 200) {
            return "success";
        } else {
            return Promise.reject(new Error('failed'))
        }
    },
    // 修改购物车某一个产品的选中状态
    async updateCheckedById({ commit }, { skuId, isChecked }) {
        let result = await reqUpdateCheckedById(skuId, isChecked);
        if (result.code == 200) {
            return "success";
        } else {
            return Promise.reject(new Error('failed'));
        }
    },
    // Delete all selected products from the shopping cart
    deleteAllCheckedCart({ dispatch, getters }) {
        let PromiseAll = [];
        getters.cartList.cartInfoList.forEach(item => {
            let promise = item.isChecked == 1 ? dispatch("deleteCartListBySkuId", item.skuId) : '';
            PromiseAll.push(promise);
        });
        return Promise.all(PromiseAll);
    },
    // Modify the Select All function in the shopping cart
    updateAllCartIsChecked({ dispatch, getters }, isChecked) {
        let promiseAll = [];
        state.cartList[0].cartInfoList.forEach((item) => {
            let promise = dispatch("updateCheckedById", {
                skuId: item.skuId,
                isChecked,
            });
            promiseAll.push(promise);
        });
        return Promise.all(promiseAll);
    }

};
const getters = {
    cartList(state) {
        return state.cartList[0] || {}
    },
};


export default {
    state,
    mutations,
    actions,
    getters,
};