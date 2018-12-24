<template>
  <div id="Sidebar">
<el-collapse-transition>
        <div v-show="sidebar.opened" class="sidebar-warp">

        </div>
      </el-collapse-transition>

  </div>
</template>

<script>

import { mapGetters } from "vuex";

export default {
  name: 'Sidebar',
  data () {
      return {

      }
  },
  created () {
    let _this=this;
    this.$get('/admin/nav').then(resp=>{
        if (resp.code==100) {
            if(_this.$route.name!='MenuSetting')
            {
                _this.$router.push({ path: resp.url })
            }
        }else{

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
    width: 180px;
    background-color: #333;
    max-height: calc(100vh - 51px);
    overflow-x:hidden;
    overflow-y:auto;
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
}

</style>