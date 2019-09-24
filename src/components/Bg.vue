<template>
  <ul class="bg">
    <li v-if="current === 'parrot'">
      <div class="plume"></div>
      <div class="parrot on" v-if="step > 6"></div>
    </li>
    <li v-if="current === 'monkey'">
      <div class="food" v-if="step <= 5"></div>
      <div class="monkey" :class="{'fade-enter': step === 6,'fade-enter-active': delay && step === 6}" v-if="step > 5"></div>
      <div class="chainsaw" :class="{'fade-enter': step === 4,'fade-enter-active': delay && step === 4}" v-if="step > 3 && step < 6"></div>
    </li>
    <li v-if="current === 'falcon'">
      <div class="cage" :class="{shake: step >= 3 && step < 6}"></div>
      <div class="mouse" v-if="step <= 2"></div>
      <div class="falcon" v-if="step <= 2"></div>
      <div class="falcon falcon2" :class="{'fade-enter': step === 6,'fade-enter-active': delay && step === 6}" v-if="step > 5"></div>
    </li>
    <li v-if="current === 'panda'">
      <div class="panda" v-if="step <= 3"></div>
      <div class="panda panda2 fade-enter" :class="{'fade-enter-active': delay}" v-if="step === 4"></div>
      <div class="panda panda2 panda3 fade-enter" :class="{'fade-enter-active': delay}" v-if="step === 5"></div>
      <div class="panda panda5" :class="{'fade-enter': step === 6,'fade-enter-active': delay && step === 6}" v-if="step > 5"></div>
    </li>
    <li v-if="current === 'leopard'">
      <div class="leopard" :class="{'fade-enter': step === 4,'fade-enter-active': delay && step === 4}" v-if="step > 3 && step <= 5"></div>
      <div class="leopard leopard2" :class="{'fade-enter': step === 6,'fade-enter-active': delay && step === 6}" v-if="step > 5"></div>
    </li>
  </ul>
</template>
<script>
export default {
  props: {
    step: Number,
    current: String
  },
  data () {
    return {
      delay: false
    }
  },
  mounted () {
    setTimeout(() => {
      this.delay = true
    }, 1000)
  }
}
</script>
<style lang="scss" scoped>
  .bg {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 0;
    padding: 0;
    margin: 0;
    li {
      height: 100%;
      width: 100%;
    }
  }
  .plume {
    position: fixed;
    bottom: 15vh;
    right: 15vw;
    z-index: 1;
    width: 95px;
    height: 53px;
    background-size: contain;
    background-image: url(../assets/images/img/plume.png);
    background-repeat: no-repeat;
  }
  .parrot {
    position: fixed;
    top: 25vh;
    right: -15vw;
    z-index: 0;
    width: 272px;
    height: 263px;
    background-size: contain;
    background-image: url(../assets/images/parrot3.png);
    background-repeat: no-repeat;
    &.on {
      background-image: url(../assets/images/parrot2.png);
      right: 10vw;
    }
  }
  .food {
    position: absolute;
    left: 50%;
    bottom: 12%;
    width: 93px;
    height: 69px;
    transform: translateX(-50%);
    z-index: 0;
    background: url(../assets/images/img/food.png) center center no-repeat;
    background-size: contain;
  }
  .monkey {
    position: absolute;
    left: 50%;
    bottom: 8%;
    width: 215px;
    height: 136px;
    transform: translateX(-50%);
    z-index: 0;
    background: url(../assets/images/img/monkey.png) center center no-repeat;
    background-size: contain;
  }
  .chainsaw {
    position: absolute;
    left:18%;
    top: 41%;
    width: 50%;
    height: 20vw;
    z-index: 0;
    background: url(../assets/images/img/chainsaw.png) center center no-repeat;
    background-size: contain;
  }
  .cage {
    position: absolute;
    left:50%;
    bottom: 15vh;
    width: 50%;
    height: 20vw;
    transform: translateX(-50%);
    z-index: 0;
    background: url(../assets/images/img/cage.png) center center no-repeat;
    background-size: contain;
    &.shake {
      background-image: url(../assets/images/img/cage2.png);
      animation: shake 1s ease-in-out 2s infinite;
    }
  }
  .mouse {
    position: absolute;
    left: 50%;
    bottom: 15vh;
    width: 15vw;
    height: 15vw;
    transform: translateX(-200%);
    z-index: 0;
    background: url(../assets/images/img/mouse.png) center center no-repeat;
    background-size: contain;
  }
  .falcon {
    position: absolute;
    right: 60%;
    top: 40vh;
    width: 20vw;
    height: 20vw;
    z-index: 0;
    background: url(../assets/images/img/falcon.png) center center no-repeat;
    background-size: contain;
    transform: rotateY(180deg);
    &.falcon2 {
      right: 30%;
      transform: none;
      width: 40vw;
      height: 40vw;
    }
  }
  .panda {
    position: absolute;
    right: 0;
    top: 60%;
    width: 40vw;
    height: 30vw;
    z-index: 0;
    background: url(../assets/images/img/panda2.png) center center no-repeat;
    background-size: contain;
    &.panda2 {
      left: 20%;
      right: auto;
      transform: rotateY(180deg);
      background-image: url(../assets/images/img/panda.png);
    }
    &.panda3 {
      transform: rotateY(180deg) scale(.7);
    }
    &.panda5 {
      background-image: url(../assets/images/img/panda3.png);
    }
  }
  .leopard {
    position: absolute;
    left:50%;
    bottom: 25vh;
    width: 50vw;
    height: 50vw;
    transform: translateX(-40%);
    z-index: 0;
    background: url(../assets/images/img/leopard.png) center center no-repeat;
    background-size: contain;
    &.leopard2 {
      width: 70vw;
      background-image: url(../assets/images/img/leopard2.png);
    }
  }
  @keyframes shake {
    10%, 30%, 50%, 70%, 90% {transform: translateX(-51%);}
    20%, 40%, 60%, 80% {transform: translateX(-49%);}
  }
  div.fade-enter-active, .fade-leave-active {
    transition: opacity 1s;
    opacity: 1;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
