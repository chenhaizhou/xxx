<template>
  <div>
    <Bg :step="4" :current="current" />
    <AnimalIcons :step="current" />
    <div class="question-box">
      <p>
        <span v-html="describe"></span>
        <i class="arrow"></i>
      </p>
    </div>
    <transition name="fade">
      <div class="parrot" v-if="showImage && current === 'parrot'"></div>
    </transition>
    <router-link :to="{path: '../step5/' + current}"><NextButton :full="true" /></router-link>
  </div>
</template>
<script>
import AnimalIcons from '@/components/AnimalIcons'
import NextButton from '@/components/NextButton'
import Bg from '@/components/Bg'
const describes = {
  parrot: '呀<br />它被违法盗猎者抓起来了',
  monkey: '原来有人正在砍伐树木，破坏了滇金丝猴的家！',
  falcon: '这是故意制造的陷阱，好像有只红隼被捉了！',
  panda: '原来是大熊猫口渴了在喝水',
  leopard: '原来是小雪豹被偷猎者放的捕兽夹困住了。'
}
export default {
  data () {
    return {
      current: this.$route.params.name,
      describe: describes[this.$route.params.name],
      showImage: false,
      showTips: false
    }
  },
  components: {
    AnimalIcons,
    NextButton,
    Bg
  },
  mounted () {
    setTimeout(() => {
      this.showImage = true
    }, 1000)
    setTimeout(() => {
      this.showTips = true
    }, 1000)
  }
}
</script>
<style lang="scss" scoped>
  .parrot {
    position: fixed;
    top: 25vh;
    right: -15vw;
    z-index: 0;
    width: 272px;
    height: 263px;
    background-size: contain;
    background-image: url(../../assets/images/parrot3.png);
    background-repeat: no-repeat;
    transition: show 2s ease-out 1s forwards, right .3s ease-out .5s;
    &.on {
      background-image: url(../../assets/images/parrot2.png);
      right: 10vw;
    }
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity 2s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  @keyframes show {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>
