//Configure route file
import Vue from 'vue';

//Introduction of routing components
import VueRouter from 'vue-router';
import routes from "./routes"

//Use the router
Vue.use(VueRouter);



//Configure route
export default new VueRouter({
    routes,
    scrollBehavior(to, from, savePosition) {
        return { y: 0 };
    }
})