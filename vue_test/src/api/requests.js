import axios from "axios";
//引入进度条
import nprogress from 'nprogress';
//引入相关进度条的样式
import "nprogress/nprogress.css";

const requests = axios.create({
    baseURL: "/api",
    timeout: 5000,

});
requests.interceptors.request.use(config => {
    //进度条开始
    nprogress.start();
    return config;
});
//响应拦截器：请求数据返回会执行
requests.interceptors.response.use((res) => {
    //res:实质就是项目中发请求、服务器返回的数据
    //进度条结束
    nprogress.done();
    return res.data;
}, (error) => {
    //温馨提示:某一天发请求,请求失败,请求失败的信息打印出来
    console.log("Response failed" + error)
    return Promise.reject(new Error('fail'));
});

export default requests;