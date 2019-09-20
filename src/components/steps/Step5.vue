<template>
  <div>
    <AnimalIcons />
    <div class="question-box">
      <p>
        快点击解救金刚鹦鹉吧
        <i class="arrow"></i>
      </p>
    </div>
    <router-link to="step6"><div class="parrot"><RippleIcon left="60px" /></div></router-link>
    <router-link to="step6"><NextButton /></router-link>
    <Music name="parrot" :autoPlay="true" />
  </div>
</template>
<script>
import Music from '@/components/Music'
import AnimalIcons from '@/components/AnimalIcons'
import NextButton from '@/components/NextButton'
import RippleIcon from '@/components/RippleIcon'
export default {
  data () {
    return {
    }
  },
  components: {
    Music,
    AnimalIcons,
    NextButton,
    RippleIcon
  },
  mounted () {
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
