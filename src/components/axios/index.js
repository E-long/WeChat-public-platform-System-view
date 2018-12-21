import Axios from 'axios'
import utils from "@/utils";


Axios.interceptors.request.use(function (config) {
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    config.baseURL='http://api.long.com';
    config.withCredentials=true;
    return config;
  })


  export function post(url,data={}){
      
      return new Promise((resolve,reject)=>{
          Axios.post(url,data)
          .then(resp=>{
            if(resp.data.needLogin){
                needLogin()
              }
              resolve(resp.data)
          },err=>{
              reject(err)
          })
      })
  }

  export function get(url,data={}){
    return new Promise((resolve,reject)=>{
        Axios.get(url,data)
        .then(resp=>{
            if(resp.data.needLogin){
                needLogin()
              }
            resolve(resp.data)
        },err=>{
            reject(err)
        })
    })
}


function needLogin() {
    utils.sessionStorage.set('Login',false)
    
}