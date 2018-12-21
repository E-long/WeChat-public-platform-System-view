<template>
  <div id="Layout">
      <el-container>
          <el-header>
            <Navbar></Navbar>
          </el-header>
          </el-container >
          <el-container>
            <el-aside>
                <div class="container_box">
                    <Sidebar></Sidebar>
                </div>
            </el-aside>
            <el-main>
                <div class="container_box">
                    <AppMain></AppMain>
                </div>
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
.container_box{
    height: calc(100vh - 62px);
    overflow: auto;
}
</style>