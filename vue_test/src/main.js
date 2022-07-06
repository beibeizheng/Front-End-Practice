import Vue from 'vue'
import App from './App.vue'

// Register global component
import TypeNav from "@/components/TypeNav";
Vue.component('TypeNav', TypeNav);

// Register router
import router from '@/router';

// Register store
import store from '@/store';


new Vue({

    render: h => h(App),
    router, //Registered Routes
    // registered store
    store
}).$mount('#app');