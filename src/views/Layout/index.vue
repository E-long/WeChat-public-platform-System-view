<template>
  <div id="Layout">
      <el-container>
          <el-header height='51px'>
            <Navbar></Navbar>
          </el-header>
          </el-container >
          <el-container>
            <el-aside>
                <Sidebar></Sidebar>
            </el-aside>
            <el-main>
                <AppMain></AppMain>
            </el-main>
      </el-container>
  </div>
</template>

<script>
import { Navbar, Sidebar, AppMain } from './components'

export default {
  name: 'Layout',
  components: {
    Navbar,
    Sidebar,
    AppMain
  }
}
</script>

<style>
.el-aside{
 height: calc(100vh - 51px);
    overflow: hidden;
}

.el-header{
    padding: 0;
    height: 51px !important;
}
</style>