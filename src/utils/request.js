import axios from 'axios'
import { Loading } from 'element-ui';
// Loading.service({target:'body'});

// const loading={
//     loaingInstance:null,
//     open:function(){
//         if(this.loaingInstance===null)
//         {
//         this.loaingInstance=Loading.service({
//             target:'.main',
//             text:'正在加载中，请您稍等',
//             background:'rgba(0,0,0,0.5)'
//         })
//     }
//     },
//     close:function(){
//         if(this.loaingInstance!==null)
//         {
//             this.loaingInstance.close()
//         }
//         this.loaingInstance=null

//     }
// }

//axios实例
const request =axios.create({
    baseURL: process.env.NODE_ENV === 'development' ?  process.env.VUE_APP_BASE_API : process.env.VUE_APP_SERVICE_URL,
    timeout:5000
})
//拦截器
// request.interceptors.request.use(config =>{
//     loading.open()
//     return config
// },error =>{
//     loading.close()
//     return Promise.reject(error);
// })

// request.interceptors.response.use(response =>{
//     loading.close()
//     return response
// },error =>{
//     loading.close()
//     return Promise.reject(error);
// })


export default request