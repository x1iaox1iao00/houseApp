
import axios from 'axios';
/*封装的请求函数  
api：请求地址
callback：成功回调函数
param：传递的参数，默认为空对象
methods：请求方法，默认get
*/
//服务器地址
export const SERVER_IP='http://172.16.12.254:3333/'
export const SOURCES_IP='http://172.16.12.254:3344/'
export function req(api,callback, params = {}, methods = "get") {
        let reqUrl = SERVER_IP+api;
        // console.log(typeof methods.toLowerCase());
        if (methods.toUpperCase() === 'GET') {
            axios.get(reqUrl, { params }).then(callback)
        } else if(methods.toUpperCase() === 'POST'){
            axios.post(reqUrl, params).then(callback)
        }
}