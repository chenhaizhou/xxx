<template>
  <div>
    <AnimalIcons />
    <div class="question-box">
      <p>
        呀<br />它被违法盗猎者抓起来了
        <i class="arrow"></i>
      </p>
    </div>
    <transition name="fade">
      <div class="parrot" v-if="showImage"></div>
    </transition>
    <router-link to="step5"><NextButton /></router-link>
    <Music name="parrot" :autoPlay="true" />
  </div>
</template>
<script>
import Music from '@/components/Music'
import AnimalIcons from '@/components/AnimalIcons'
import NextButton from '@/components/NextButton'
export default {
  data () {
    return {
      showImage: false,
      showTips: false
    }
  },
  components: {
    Music,
    AnimalIcons,
    NextButton
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
    transition: opacity 1s;
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
