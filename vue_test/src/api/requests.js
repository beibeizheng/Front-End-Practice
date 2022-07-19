import axios from "axios";
//introduce the progress bar
import nprogress from 'nprogress';
// introduce the store
import store from "@/store";
//introduce the style of the progress bar
import "nprogress/nprogress.css";

const requests = axios.create({
    baseURL: "/api",
    timeout: 5000,

});
requests.interceptors.request.use((config) => {
    if (store.state.detail.uuid_token) {
        config.headers.userTempId = store.state.detail.uuid_token;
    }
    if (store.state.user.token) {
        config.headers.token = store.state.user.token;
    }
    //start the progress bar
    nprogress.start();
    return config;
});
///response interceptor: request data return will be executed
requests.interceptors.response.use((res) => {
    //res:In essence, it is the data that is requested in the project and returned by the server
    //end of the progress bar
    nprogress.done();
    return res.data;
}, (error) => {
    //Warm Tips: Send a request on one day, request failed, request failed message printed out
    console.log("Response failed" + error)
    return Promise.reject(new Error('fail'));
});

export default requests;