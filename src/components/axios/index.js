import Axios from 'axios'

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
            resolve(resp.data)
        },err=>{
            reject(err)
        })
    })
}