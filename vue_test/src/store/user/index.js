// Login and registration module

import { reqGetCode, reqUserRegister, reqUserLogin, reqUserInfo, reqLogout } from "@/api";
import { setToken, removeToken } from "@/utils/token";

const state = {
    code: "",
    token: localStorage.getItem('TOKEN'),
    userInfo: {},
};
const mutations = {
    GETCODE(state, code) {
        state.code = code;
    },
    USERLOGIN(state, token) {
        state.token = token;
    },
    GETUSERINFO(state, userInfo) {
        state.userInfo = userInfo;
    },
    CLEARUSERINFO(state) {
        state.token = '';
        state.userInfo = {};
        removeToken();
    }

};
const actions = {
    async getCode({ commit }, phone) {
        let result = await reqGetCode(phone);
        if (result.code == 200) {
            commit("GETCODE", result.data);
            return "success"
        } else {
            return Promise.reject(new Error('failed'));
        }
    },

    async userRegister({ commit }, user) {
        let result = await reqUserRegister(user);
        if (result.code == 200) {
            return "success"
        } else {
            return Promise.reject(new Error('failed'));
        }
    },

    async userLogin({ commit }, data) {
        let result = await reqUserLogin(data);
        if (result.code == 200) {
            commit("USERLOGIN", result.data.token);
            setToken(result.data.token);
            return "success"
        } else {
            return Promise.reject(new Error('failed'));
        }
    },

    async getUserInfo({ commit }) {
        let result = await reqUserInfo();
        if (result.code == 200) {
            commit("GETUSERINFO", result.data);
            return "success"
        } else {
            return Promise.reject(new Error('failed'));
        }
    },
    async userLogout({ commit }) {
        let result = await reqLogout();
        if (result.code == 200) {
            commit("CLEARUSERINFO");
            return "success"
        } else {
            return Promise.reject(new Error('failed'));
        }
    },

};

const getters = {}


export default {
    state,
    mutations,
    actions,
    getters,
};