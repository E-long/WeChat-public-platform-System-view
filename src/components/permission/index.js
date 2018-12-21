import router from '@/router'
import utils from "@/utils";

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'


router.beforeEach((route, redirect, next) => {
    NProgress.start();
    var loginStatus=utils.sessionStorage.get('Login')||false
    var needLogin=route.meta.login_require;
    if(needLogin){
        if(!loginStatus){
            next('/');
        }
        next();
    }else{
        if(loginStatus){
            next('/admin/home');
        }
        next();

    }
	
});

router.afterEach(route => {
    NProgress.done();
});