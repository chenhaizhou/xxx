<template>
  <main>
    <router-view></router-view>
    <Music name="bgMusic" :autoPlay="true" />
    <Copyright />
  </main>
</template>
<script>
import Copyright from '@/components/Copyright'
import Music from '@/components/Music'
export default {
  components: {
    Copyright,
    Music
  }
}
</script>
<style lang="scss" scoped>
  main {
    overflow: hidden;
    background-image: url(../assets/images/bg/bg7.png);
  }
  .content-box {
    overflow: hidden;
  }
</style>
