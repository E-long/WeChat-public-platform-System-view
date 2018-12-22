<template>
  <div id="Navbar">
       <el-menu class="navbar" mode="horizontal">
        <!-- <hamburger :toggle-click="toggleSideBar" :is-active="sidebar.opened" class="hamburger-container"/> -->
        <!-- <breadcrumb /> -->
        <el-dropdown class="avatar-container" trigger="click">
          <div class="avatar-wrapper">
            <img :src="user.avatar" class="user-avatar">
            <i class="el-icon-caret-bottom"/>
          </div>
          <el-dropdown-menu slot="dropdown" class="user-dropdown">
            <router-link class="inlineBlock" to="/admin/home">
              <el-dropdown-item>
                {{$t('navbar.home')}}
              </el-dropdown-item>
            </router-link>
            <router-link  to="/user/setting">
              <el-dropdown-item>
                {{$t('navbar.setting')}}
              </el-dropdown-item>
            </router-link>
            <router-link  to="/logout">
              <el-dropdown-item>
                {{$t('navbar.logout')}}
              </el-dropdown-item>
            </router-link>
            
          </el-dropdown-menu>
        </el-dropdown>
      </el-menu>
  </div>
</template>

<script>
import utils from "@/utils";

export default {
  name: 'Navbar',
  data () {
    return {
      user:utils.sessionStorage.get('User')
    }
  }
}
</script>

<style lang="less" scoped>

.navbar {
  height: 50px;
  line-height: 50px;
  border-radius: 0px !important;
  .hamburger-container {
    line-height: 58px;
    height: 50px;
    float: left;
    padding: 0 10px;
  }
  .screenfull {
    position: absolute;
    right: 90px;
    top: 16px;
    color: red;
  }
  .avatar-container {
    height: 50px;
    display: inline-block;
    position: absolute;
    right: 35px;
    .avatar-wrapper {
      cursor: pointer;
      margin-top: 5px;
      position: relative;
      line-height: initial;
      .user-avatar {
        width: 40px;
        height: 40px;
        border-radius: 10px;
      }
      .el-icon-caret-bottom {
        position: absolute;
        right: -20px;
        top: 25px;
        font-size: 12px;
      }
    }
  }
}
</style>
