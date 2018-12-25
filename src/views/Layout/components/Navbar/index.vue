<template>
  <div id="Navbar">
       <el-menu class="navbar" mode="horizontal">
        <svg t="1492500959545" @click="toggleSideBar" class="wscn-icon hamburger" :class="{'is-active':sidebar.opened}"  style="margin-left:20px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1691" xmlns:xlink="http://www.w3.org/1999/xlink" width="64" height="64"><path d="M966.8023 568.849776 57.196677 568.849776c-31.397081 0-56.850799-25.452695-56.850799-56.850799l0 0c0-31.397081 25.452695-56.849776 56.850799-56.849776l909.605623 0c31.397081 0 56.849776 25.452695 56.849776 56.849776l0 0C1023.653099 543.397081 998.200404 568.849776 966.8023 568.849776z" p-id="1692"></path><path d="M966.8023 881.527125 57.196677 881.527125c-31.397081 0-56.850799-25.452695-56.850799-56.849776l0 0c0-31.397081 25.452695-56.849776 56.850799-56.849776l909.605623 0c31.397081 0 56.849776 25.452695 56.849776 56.849776l0 0C1023.653099 856.07443 998.200404 881.527125 966.8023 881.527125z" p-id="1693"></path><path d="M966.8023 256.17345 57.196677 256.17345c-31.397081 0-56.850799-25.452695-56.850799-56.849776l0 0c0-31.397081 25.452695-56.850799 56.850799-56.850799l909.605623 0c31.397081 0 56.849776 25.452695 56.849776 56.850799l0 0C1023.653099 230.720755 998.200404 256.17345 966.8023 256.17345z" p-id="1694"></path></svg>

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
import { mapGetters } from "vuex";

export default {
  name: 'Navbar',
  data () {
    return {
      user:utils.sessionStorage.get('User')
    }
  },
  methods: {
    toggleSideBar() {
          this.$store.dispatch('ToggleSideBar')
        }
  },
  computed: {
     ...mapGetters([
          'sidebar'
        ])
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
    .hamburger {
        display: inline-block;
        cursor: pointer;
        width: 20px;
        height: 20px;
        transform: rotate(0deg);
        transition: .38s;
        transform-origin: 50% 50%;
    }
    .hamburger.is-active {
        transform: rotate(90deg);
    }
</style>
