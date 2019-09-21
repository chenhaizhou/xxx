<template>
  <main v-bind:style="{backgroundImage: `url(${bg})`}">
    <router-view></router-view>
    <Music name="bgMusic" :autoPlay="true" />
    <Copyright />
  </main>
</template>

<script>
import Copyright from '@/components/Copyright'
import Music from '@/components/Music'
import bg2 from '../assets/images/bg/bg2.png'
import bg3 from '../assets/images/bg/bg3.png'
import bg4 from '../assets/images/bg/bg4.png'
import bg5 from '../assets/images/bg/bg5.png'
import bg6 from '../assets/images/bg/bg6.png'
const bg = {
  parrot: bg2,
  monkey: bg3,
  falcon: bg4,
  panda: bg5,
  leopard: bg6
}

export default {
  data () {
    return {
      current: this.$route.params.name,
      bg: bg[this.$route.params.name]
    }
  },
  methods: {
    updateBg () {
      this.bg = bg[this.$route.params.name]
    }
  },
  watch: {
    '$route': 'updateBg'
  },
  components: {
    Copyright,
    Music
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
 main {
   overflow: hidden;
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
