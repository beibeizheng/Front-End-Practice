//Introduction of routing components

import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'

//Configure route
export default [

    {
        path: '/home',
        component: Home,
        meta: { show: true }
    },
    {
        name: 'search',
        path: '/search/:keyword?',
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
    },
    {
        path: '/detail/:skuid',
        component: Detail,
        meta: { show: true }
    },

]