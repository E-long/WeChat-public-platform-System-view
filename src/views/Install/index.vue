<template>
  <div class="login">
    <div class="wrap">
      <div class="login-bg"></div>
      <div class="login-slogan" v-html="$t('install.title')"></div>
      <div class="login-form">
        <div class="title">
          {{$t('install.logIn')}}
        </div>
        <el-form ref="form" :model="form" label-width="0">
            <el-form-item>
              <el-input v-model="form.user"  :placeholder="$t('install.username')" prefix-icon="el-icon-edit"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input v-model="form.password" type="password" :placeholder="$t('install.password')" prefix-icon="el-icon-warning"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input v-model="form.repassword" type="password" :placeholder="$t('install.repassword')" prefix-icon="el-icon-warning"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input v-model="form.captcha" maxlength="4"  :placeholder="$t('install.captcha')" prefix-icon="el-icon-warning" class="captcha"></el-input>
              <img :src="captcha" class="captcha-img" @click="changeCaptcha">
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">{{$t('install.logIn')}}</el-button>
              <el-button type="info" @click="lang">{{$t('lang')}}</el-button>
            </el-form-item>
        </el-form>
   
      </div>
    </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie'

export default {
  name: 'login',
  data () {
    return {
      form:{},
      baseCaptcha:'http://api.long.com/admin/auth/getCaptcha',
      captcha:'http://api.long.com/admin/auth/getCaptcha'
    }
  },
  methods: {
    changeCaptcha:function(){
            let captcha=this.baseCaptcha+'?t='+Math.random()
            this.captcha=captcha
    },
    lang:function(){
           let lang=Cookies.get('language')||'zh'
           if(lang=='zh'){
             lang='en'
           }else{
             lang='zh'
           }
          Cookies.set('language', lang);
          this.$i18n.locale=lang

    },
    onSubmit:function(){
      let _this=this;
        this.$post('/install/register',this.form).then(resp=>{
          if(resp.code!=1){
            _this.changeCaptcha()
            _this.$message.error(resp.msg);
          }else{



            utils.sessionStorage.set('User',resp.data)
            utils.sessionStorage.set('Login',true)

           _this.$alert(resp.msg, '消息', {
                confirmButtonText: '确定',
                callback: action => {
                   _this.$router.push(resp.url);
                }})




          }
        })
    }
  },
  created () {

 

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

.wrap{
  height: 100vh;
  display: flex;
  margin: 0 auto;
  max-width: 1080px;
  justify-content: space-around;
  align-items: center;
}
.login-slogan{
  text-align: center;
  color: #fff;
  width: 400px;
  line-height: 48px;
    font-size: 28px;
    font-weight: 500;
    text-shadow:1px 1px 3px #333;
}
.login-bg{
  position: absolute;
  z-index: -1;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background-size: cover;
  background-image: url(https://img.alicdn.com/tfs/TB1zsNhXTtYBeNjy1XdXXXXyVXa-2252-1500.png);
}
.login-form{
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 30px 40px;
  background: #ffffff;
  border-radius: 6px;
  box-shadow: #eeeeee 1px 1px 2px;
  text-align: center;
  .title{
    font-weight: 400;
    line-height: 24px;
    font-size: 16px;
    margin: 0px 0px 20px;
    text-align: center;
    color: #009688;
    letter-spacing: 12px;
  }
  .captcha{
    width: 140px;
  }
  .captcha-img{
    height: 38px;
  }
}
</style>
