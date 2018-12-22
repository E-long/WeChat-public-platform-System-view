<template>
  <div class="login">
    <div class="wrap">
      <div class="login-bg"></div>
      <div class="login-slogan">
          <h1 v-html="$t('login.title')">1</h1>
      </div>
      <div class="login-form">
        <div class="title">
          {{$t('login.logIn')}}
        </div>
        <el-form ref="form" :model="form" label-width="0">
            <el-form-item>
              <el-input v-model="form.user"  :placeholder="$t('login.username')" prefix-icon="el-icon-edit"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input v-model="form.password" type="password" :placeholder="$t('login.password')" prefix-icon="el-icon-warning"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input v-model="form.captcha" maxlength="4"  :placeholder="$t('login.captcha')" prefix-icon="el-icon-warning" class="captcha"></el-input>
              <img :src="captcha" class="captcha-img" @click="changeCaptcha">
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">{{$t('login.logIn')}}</el-button>
              <el-button type="info" @click="lang">{{$t('lang')}}</el-button>
            </el-form-item>
        </el-form>
   
      </div>
    </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
import utils from '@/utils'


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
        this.$post('/admin/auth/login',this.form).then(resp=>{
          if(resp.code!=1){
            _this.changeCaptcha()
            _this.$message.error(resp.msg);
          }else{






           _this.$alert(_this.$t('alert.login'), _this.$t('alert.title'), {
                confirmButtonText:_this.$t('button.confirm'),
                callback: action => {
                    utils.sessionStorage.set('User',resp.data)
                    utils.sessionStorage.set('Login',true)
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
     h1{
        line-height: 48px;
        font-size: 28px;
        font-weight: 500;
        text-shadow:1px 1px 3px #333;
        }
}
.login-bg{
  position: absolute;
  z-index: -1;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background-size: cover;
  background-image: url(https://api.dujin.org/bing/1920.php);
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
