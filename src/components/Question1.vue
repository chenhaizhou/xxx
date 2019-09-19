<template>
  <div>
    <div class="question-box" @click="handleStep">
      <p v-if="step === 1">
        叫声...叫声...<br />
        这个声音应该是金刚鹦鹉的叫声
        <i class="arrow"></i>
      </p>
      <p v-if="step === 2">
        叫声...叫声...<br />
        点击解救金刚鹦鹉
        <i class="arrow"></i>
      </p>
    </div>
    <div class="point">
      <i></i>
      <i></i>
      <i></i>
      <i></i>
    </div>
    <div class="parrot"></div>
    <Music />
  </div>
</template>
<script>
import Music from '../components/Music'
export default {
  data () {
    return {
      step: 1,
      stepCount: 2
    }
  },
  components: {
    Music
  },
  methods: {
    handleStep () {
      if (this.step < this.stepCount) {
        this.step = this.step + 1
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .question-box {
    position: relative;
    z-index: 1;
    width: 70%;
    margin: 2rem auto;
    padding: 1.5rem;
    border: 1px solid #42332F;
    background-color: rgba(255, 255, 255, .7);
    font-size: 1.8rem;
    outline: 5px solid #4e3934;
    p {
      padding: 0;
      margin: 0;
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
  }
  .point {
    position: fixed;
    right: 30vw;
    top: 50vh;
    z-index: 2;
    animation: scale .8s linear infinite;
    i {
      display: block;
      width: 0;
      height: 0;
      font-size: 0;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      &:nth-child(4) {
        width: 20px;
        height: 20px;
        background-color: rgba(255, 255, 255, 1);
      }
      &:nth-child(3) {
        width: 40px;
        height: 40px;
        background-color: rgba(255, 255, 255, .8);
      }
      &:nth-child(2) {
        width: 60px;
        height: 60px;
        background-color: rgba(255, 255, 255, .6);
      }
      &:nth-child(1) {
        width: 80px;
        height: 80px;
        background-color: rgba(255, 255, 255, .3);
      }
    }
  }
  @keyframes scale {
  0% {
    -webkit-transform: scale(1);
  }
  50% {
    -webkit-transform: scale(1.5);
  }
  100% {
    -webkit-transform: scale(1);
  }
}
</style>
