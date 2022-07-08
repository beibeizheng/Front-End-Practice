import requests from "./requests";
import mockRequests from "./mockAjax";

export const reqCategory = () => {
    //箭头函数可以在程序任意地方使用,箭头函数返回即为服务器的数据
    //下面箭头函数返回值：返回的是什么? promise,即为返回服务器的数据
    //return关键字，千万别忘记书写，如果忘记书写，你在任意地方获取的都是undeinfed
    return requests({ method: 'get', url: '/product/getBaseCategoryList' });

};

// get banner's data
export const reqGetBannerList = () => mockRequests.get('/banner')
// get floor's data
export const reqFloorList = () => mockRequests.get('/floor')

// get the data of search module
export const reqGetSearchInfo = (params) => requests({ method: 'post', url: '/list', data: params })






