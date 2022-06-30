//Configure route file
import Vue from 'vue';
import VueRouter from 'vue-router';

//Use the router
Vue.use(VueRouter);

//Introduction of routing components
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'

//Configure route
export default new VueRouter({

    routes: [
        {
            path: '/home',
            component: Home,
            meta: { show: true }
        },
        {
            name: 'search',
            path: '/search/:keyword',
            component: Search,
            meta: { show: true }
        },
        {
            path: '/login',
            component: Login,
            meta: { show: false }
        },
        {
            path: '/register',
            component: Register,
            meta: { show: false }
        },

        // Set default open to home page
        {
            path: '*',
            redirect: '/home'
        }

    ]

})