<template>
  <ul class="bg">
    <li v-if="current === 'parrot'">
      <div class="parrot on" v-if="step > 6"></div>
    </li>
    <li v-if="current === 'monkey'">
      <div class="food" v-if="step <= 5"></div>
      <div class="monkey" v-if="step > 5"></div>
      <div class="chainsaw" v-if="step > 2 && step < 6"></div>
    </li>
    <li v-if="current === 'falcon'">
      <div class="cage"></div>
      <div class="mouse" v-if="step <= 2"></div>
      <div class="falcon" v-if="step <= 2"></div>
      <div class="falcon falcon2" v-if="step > 5"></div>
    </li>
    <li v-if="current === 'panda'">
      <div class="panda" v-if="step <= 3"></div>
      <div class="panda panda2" v-if="step === 4"></div>
      <div class="panda panda2 panda3" v-if="step === 5"></div>
      <div class="panda panda5" v-if="step > 5"></div>
    </li>
    <li v-if="current === 'leopard'">
      <div class="leopard" v-if="step > 3 && step <= 5"></div>
      <div class="leopard leopard2" v-if="step > 5"></div>
    </li>
  </ul>
</template>
<script>
export default {
  props: {
    step: Number,
    current: String
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
    width: 83px;
    height: 59px;
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
    top: 35%;
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
    right: 30%;
    top: 40vh;
    width: 20vw;
    height: 20vw;
    z-index: 0;
    background: url(../assets/images/img/falcon.png) center center no-repeat;
    background-size: contain;
    transform: rotateY(180deg);
    &.falcon2 {
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
</style>
