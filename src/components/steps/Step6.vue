<template>
  <div>
    <Bg :step="6" :current="current" />
    <AnimalIcons :step="current" />
    <div class="question-box">
      <p>
        {{describe}}
        <i class="arrow"></i>
      </p>
    </div>
    <transition name="fade" v-on:after-enter="afterEnter">
      <div class="parrot" v-if="show && current === 'parrot'" v-bind:class="{on: on}"></div>
    </transition>
    <router-link :to="{path: '../step7/' + current}"><NextButton /></router-link>
  </div>
</template>
<script>
import AnimalIcons from '@/components/AnimalIcons'
import NextButton from '@/components/NextButton'
import Bg from '@/components/Bg'
const describes = {
  parrot: '谢谢你救了我！',
  monkey: '好棒，伐木停止了，可爱的小猴子们又回来觅食了！',
  falcon: '谢谢你，可爱的小伙伴，我又重获自由了',
  panda: '大熊猫，再见啦',
  leopard: '谢谢你啦，我亲爱的伙伴！'
}
export default {
  data () {
    return {
      current: this.$route.params.name,
      describe: describes[this.$route.params.name],
      on: false,
      show: false
    }
  },
  components: {
    AnimalIcons,
    NextButton,
    Bg
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
