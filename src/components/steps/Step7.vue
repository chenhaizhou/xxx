<template>
  <div>
    <AnimalIcons />
    <div class="question-box">
      <p>
        恭喜你获得金刚鹦鹉图腾~
      </p>
    </div>
    <div class="parrot on"></div>
    <router-link to="step7"><NextButton /></router-link>
    <router-link to="/question">
      <div class="button-circle">下一站</div>
    </router-link>
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
  .button-circle {
    position: fixed;
    bottom: 60px;
    left: 50%;
    display: block;
    width: 100px;
    height: 100px;
    transform: translateX(-50%);
    line-height: 100px;
    text-align: center;
    font-size: 2.6rem;
    font-weight: bold;
    color: #fff;
    border: 5px solid #fff;
    border-radius: 50%;
    z-index: 1;
    box-shadow: 0 0 10px 5px #159588 inset, 0 0 3px 3px #159588;
    background-color: rgba(0, 0, 0, .5);
    &::before, &::after {
      content: '';
      position: absolute;
      z-index: 0;
      display: block;
      width: 0;
      height: 0;
      border-width: 14px 14px 14px 0;
      border-style: solid;
      border-color: #fff transparent transparent transparent;
    }
    &::before {
      left: 0;
      top: 75%;
      transform: rotate(15deg);
    }
    &::after {
      top: 10%;
      right: -6px;
      transform: rotate(200deg);
    }
  }
</style>
