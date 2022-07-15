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

// get the data of product details information
export const reqGoodsInfo = (skuId) => requests({ url: `/item/${skuId}`, method: "get" });

// Add data to the shopping cart and get the number of products updated
export const reqAddOrUpdateShopCart = (skuId, skuNum) => requests({ url: `/cart/addToCart/${skuId}/${skuNum}`, method: "post" });


// Get Shopping Cart List Data Interface
export const reqCartList = () => requests({ url: '/cart/cartList', method: "get" });

// Interface for deleting products from the shopping cart
export const reqDeleteCartById = (skuId) => requests({ url: `/cart/deleteCart/${skuId}`, method: "delete" });

// Interface for modifying the selected status of shopping cart products
export const reqUpdateCheckedById = (skuId, isChecked) => requests({ url: `/cart/checkCart/${skuId}/${isChecked}`, method: "get" });

// Interface for receiving verification codes in the registration screen
export const reqGetCode = (phone) => requests({ url: `/user/passport/sendCode/${phone}`, method: "get" });

// Data interface to the registration screen
export const reqUserRegister = (data) => requests({ url: '/user/passport/register', data, method: "post" });

// Data interface to the login page
export const reqUserLogin = (data) => requests({ url: '/user/passport/login', data, method: "post" });

// Data interface for obtaining user information after successful login
export const reqUserInfo = () => requests({ url: '/user/passport/auth/getUserInfo', method: "get" });

// Log out
export const reqLogout = () => requests({ url: '/user/passport/logout', method: "get" });