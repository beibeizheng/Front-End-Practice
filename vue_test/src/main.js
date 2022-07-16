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