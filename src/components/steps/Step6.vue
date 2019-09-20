<template>
  <div>
    <AnimalIcons />
    <div class="question-box">
      <p>
        谢谢你救了我！
        <i class="arrow"></i>
      </p>
    </div>
    <transition name="fade" v-on:after-enter="afterEnter">
      <div class="parrot" v-if="show" v-bind:class="{on: on}"></div>
    </transition>
    <router-link to="step7"><NextButton /></router-link>
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
      on: false,
      show: false
    }
  },
  components: {
    Music,
    AnimalIcons,
    NextButton
  },
  mounted () {
    this.show = true
  },
  methods: {
    afterEnter () {
      this.on = true
    }
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
    &.on {
      background-image: url(../../assets/images/parrot2.png);
      right: 10vw;
    }
  }
  .fade-enter-active, .fade-leave-active {
    position: fixed;
    transition: all 1s;
    right: 10vw;
    background-image: url(../../assets/images/parrot2.png);
  }
  .fade-enter, .fade-leave-to {
    right: -15vw;
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
