import router from '@/router'
import utils from "@/utils";

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'


router.beforeEach((route, redirect, next) => {
    NProgress.start();
    var loginStatus=utils.sessionStorage.get('Login')||false
    var installStatus=utils.sessionStorage.get('Install')
    var needLogin=route.meta.login_require;
    if(needLogin&&!loginStatus){
        next('/');
        return false;
    }

    if(route.name=='Install'&&installStatus){
        next('./');
        return false;
    }

    if(route.name=='Login'&&loginStatus){
        next('/admin/home')
        return false;
    }

    next();
	
});

router.afterEach(route => {
    NProgress.done();
});