<template>
  <div>
    <Bg :step="7" :current="current" />
    <AnimalIcons :step="current" :isLast="isLast" />
    <div class="question-box">
      <p>
        {{describe}}
      </p>
    </div>
    <router-link :to="path"><NextButton /></router-link>
    <router-link :to="path">
      <div class="button-circle" v-if="!isLast">下一站</div>
      <div class="button-circle last" v-else><span>选择<br />守护的动物</span></div>
    </router-link>
  </div>
</template>
<script>
import { steps } from '@/config/config'
import AnimalIcons from '@/components/AnimalIcons'
import NextButton from '@/components/NextButton'
import Bg from '@/components/Bg'
const describes = {
  parrot: '恭喜你，获得金刚鹦鹉图腾',
  monkey: '恭喜你，获得滇金丝猴图腾',
  falcon: '恭喜你，获得红隼图腾',
  panda: '恭喜你，获得大熊猫图腾',
  leopard: '恭喜你，全部图腾已解锁！'
}
const getNext = current => {
  const index = steps.indexOf(current)
  return steps[index + 1]
}
export default {
  data () {
    return {
      current: this.$route.params.name,
      path: this.$route.params.name !== steps[steps.length - 1] ? '../step1/' + getNext(this.$route.params.name) : '/card',
      describe: describes[this.$route.params.name],
      on: false,
      show: false,
      isLast: this.$route.params.name === steps[steps.length - 1]
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
    &.last {
      display: flex;
      font-size: 1.8rem;
      line-height: 1.2;
      align-items: center;
      justify-content: center;
    }
  }
</style>
