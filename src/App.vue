<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import utils from '@/utils'
export default {
  name: 'App',
  beforeCreate () {
    let _this=this;
    this.$get('install').then(resp=>{
      if (resp.code!=200) {
        _this.$router.push(resp.url);
      }else{
        utils.sessionStorage.set('Install',true)
      }
    })
  }
}
</script>

<style>
</style>
