import Vue from 'vue'
import App from './App.vue'

// Register global component
import TypeNav from "@/components/TypeNav";
import Carousel from "@/components/Carousel";
import Pagination from "@/components/Pagination";
Vue.component('TypeNav', TypeNav);
Vue.component('Carousel', Carousel);
Vue.component('Pagination', Pagination);

// Register router
import router from '@/router';

// Register store
import store from '@/store';

// import MockServer.js ----mock data
import "@/mock/mockServe";
// import swiper style
import "swiper/css/swiper.css";
// import {reqGetSearchInfo} from "@/api";

// Request all data interfaces in the api folder
import * as API from "@/api";


import { MessageBox } from 'element-ui';

Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;

import VueLazyload from 'vue-lazyload'
import lazyImg from '@/assets/whale.gif';
Vue.use(VueLazyload, {
    loading: lazyImg
});

import "@/plugins/validate";

new Vue({

    render: h => h(App),
    beforeCreate() {
        Vue.prototype.$bus = this;
        Vue.prototype.$API = API;

    },
    router, //Registered Routes
    // registered store
    store
}).$mount('#app');