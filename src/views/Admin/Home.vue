<template>
  <div id="Home">
      home123123123
  </div>
</template>

<script>

export default {
  name: 'Home',
  created () {
      this.$get('/admin/auth/test')
  }
}
</script>

<style>
</style>