
//利用uuid生成未登录用户临时标识符
import { v4 as uuidv4 } from 'uuid';
//封装函数:只能生成一次用户临时身份
let uuid_token;
export const getUUID = () => {
    uuid_token = localStorage.getItem("UUIDTOKEN");
    if (!uuid_token) {
        uuid_token = uuidv4();
        localStorage.setItem("UUIDTOKEN", uuid_token);
    }
    return uuid_token;
}
