<template>
  <div id="Sidebar">

        <el-collapse-transition >
            <div v-show="sidebar.opened" class="sidebar-warp">
            <el-menu mode="vertical" background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">



                <template v-for="item in Menu"  >
                    <el-submenu :index="item.name" :key="item.id" v-if="item.children.length>0">
                        <template slot="title">
                            {{item.name}}
                        </template>
                        <router-link v-for="child in item.children"  :key='child.id' :to='child.url'>
                        <el-menu-item index="child.name">{{child.name}}</el-menu-item>
                        </router-link>
                    </el-submenu>


                    <router-link v-else :key='item.id' :to='item.url'>
                        <el-menu-item index="item.name" > {{item.name}}</el-menu-item>
                    </router-link>
                </template>
            </el-menu>

            </div>
        </el-collapse-transition>
  </div>
</template>

<script>

import { mapGetters } from "vuex";
import getTrees from "@/components/tree";

export default {
  name: 'Sidebar',
  data () {
      return {
          Menu:[],
          defaultProps: {
          children: 'children',
          label: 'name'
        }
      }
  },
  created () {
    let _this=this;
    this.$get('/admin/Menu').then(resp=>{
        if (resp.code==100) {
            if(_this.$route.name!='MenuSetting')
            {
                _this.$router.push({ path: resp.url })
            }
        }else{
            _this.Menu=getTrees(resp.data,0)
        }
    }) 
  },
   methods: {
    },
  computed: {
     ...mapGetters([
          'sidebar'
        ])
  }

}
</script>

<style lang="less" scoped>
.sidebar-warp{
    position: absolute;
    top: 51px;
    bottom: 0;
    left: 0;
    width: 200px;
    height: calc(100vh - 51px);
    max-height: calc(100vh - 51px);
    overflow-x:hidden;
    overflow-y:auto;
        background: #545c64;
        z-index: 1;

    &::-webkit-scrollbar-track-piece {
        background: #333;
    }
    &::-webkit-scrollbar {
        width: 6px;
    }
    &::-webkit-scrollbar-thumb {
        background: #ccc;
        border-radius: 20px;
    }
    .el-menu{
        border:0 none;
    }
}

</style>
