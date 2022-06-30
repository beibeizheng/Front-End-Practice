import Vue from 'vue'
import App from './App.vue'

// Register global component
import TypeNav from "@/pages/Home/TypeNav";
Vue.component('TypeNav', TypeNav);

import router from '@/router';
//测试获取数据
import { reqCategory } from '@/api';
reqCategory();


new Vue({

    render: h => h(App),
    router //Registered Routes

}).$mount('#app');