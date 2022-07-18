//Configure route file
import Vue from 'vue';

//Introduction of routing components
import VueRouter from 'vue-router';
import routes from "./routes";
import store from "@/store";

//Use the router
Vue.use(VueRouter);



//Configure route
let router = new VueRouter({
    routes,
    scrollBehavior(to, from, savePosition) {
        return { y: 0 };
    }
});
router.beforeEach(async (to, from, next) => {
    let token = store.state.user.token;
    let name = store.state.user.userInfo.name;
    if (token) {
        if (to.path == "/login") {
            next("/home")
        } else {
            if (name) {
                next();
            } else {
                try {
                    await store.dispatch('getUserInfo');
                    next();
                } catch (error) {
                    await store.dispatch('userLogout');
                    next("/login");
                }
            }
        }
    } else {
        let toPath = to.path;
        if (toPath.indexOf('/trade') != -1 || toPath.indexOf('/pay') != -1 || toPath.indexOf('/center') != -1) {
            next('/login?redirect=' + toPath);
        } else {
            next();
        }
    }
})

export default router;