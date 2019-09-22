<template>
  <div>
    <Bg :step="5" :current="current" />
    <AnimalIcons :step="current" />
    <div class="question-box">
      <p>
        {{describe}}
        <i class="arrow"></i>
      </p>
    </div>
    <router-link :to="{path: '../step6/' + current}"><div class="parrot" v-if="current === 'parrot'"></div></router-link>
    <router-link :to="{path: '../step6/' + current}"><NextButton :tips="true" :position="tipPosition[current]" /></router-link>
  </div>
</template>
<script>
import AnimalIcons from '@/components/AnimalIcons'
import NextButton from '@/components/NextButton'
import RippleIcon from '@/components/RippleIcon'
import Bg from '@/components/Bg'
const describes = {
  parrot: '快点击解救金刚鹦鹉吧',
  monkey: '快出手阻止违规伐木！',
  falcon: '快点打开铁网，把它放出来吧！',
  panda: '它初次见人常用前掌蒙面或把头低下。我们别去打扰它啦',
  leopard: '快打开捕兽夹，把小雪豹解救出来吧'
}
export default {
  data () {
    return {
      current: this.$route.params.name,
      describe: describes[this.$route.params.name],
      tipPosition: {
        parrot: {
          left: 'auto',
          right: '30%',
          top: '50%'
        },
        monkey: {
          top: '45%',
          left: '40%'
        },
        falcon: {
          top: '75%'
        }
      }
    }
  },
  components: {
    AnimalIcons,
    NextButton,
    Bg
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
