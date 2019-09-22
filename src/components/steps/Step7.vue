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
      path: this.$route.params.name !== steps[steps.length - 1] ? '../step1/' + getNext(this.$route.params.name) : '/main/card',
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
  
</style>
