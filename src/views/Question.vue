<template>
  <main>
    <router-view></router-view>
    <Copyright />
  </main>
</template>

<script>
import Copyright from '../components/Copyright'

export default {
  data () {
    return {
      active: 0,
      step: 1
    }
  },
  methods: {
  },
  components: {
    Copyright
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
 main {
   overflow: hidden;
   background-image: url(../assets/images/bg/bg2.png);
 }
 .content-box {
   overflow: hidden;
 }
 .question-box {
    position: relative;
    z-index: 1;
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 5rem;
    margin: 2rem auto;
    padding: 1.5rem;
    border: 1px solid #42332F;
    background-color: rgba(255, 255, 255, .7);
    font-size: 1.8rem;
    outline: 5px solid #4e3934;
    font-family: "FZZHengHei-B-GBK", Arial, Helvetica, sans-serif;
    p {
      padding: 0;
      margin: 0;
      text-align: center;
    }
  }
  .arrow {
    margin-left: 5px;
    vertical-align: middle;
    border-width: 8px 5px 0 5px;
    border-style: solid;
    line-height: 0;
    font-size: 0;
    border-color: #171A12 transparent transparent transparent;
  }
  .mask {
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 0;
      background-color: rgba(0, 0, 0, .5);
    }
  }
</style>
