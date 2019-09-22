<template>
  <div>
    <Bg :step="3" :current="current" />
    <AnimalIcons :step="current" />
    <div class="question-box">
      <p>
        <span v-html="describe"></span>
        <i class="arrow"></i>
      </p>
    </div>
    <router-link :to="{path: '../step4/' + current}"><NextButton /></router-link>
    <div v-bind:style="{pointerEvents: 'none', opacity: 0}">
      <Music id="scene" :name="current" :autoPlay="true" />
    </div>
  </div>
</template>
<script>
import Music from '@/components/Music2'
import AnimalIcons from '@/components/AnimalIcons'
import NextButton from '@/components/NextButton'
import Bg from '@/components/Bg'
const describes = {
  parrot: '快听<br />这就是金刚鹦鹉的叫声',
  monkey: '滇金丝猴为什么会丢掉美味跑掉呢？滋滋滋…滋滋滋…怎么会有这么刺耳的声音',
  falcon: '哗哗哗…哗哗哗…这怎么有个铁网在晃动？',
  panda: '这是什么声音？',
  leopard: '这是雪豹的叫声，<br />发生什么事情了？'
}
export default {
  data () {
    return {
      current: this.$route.params.name,
      describe: describes[this.$route.params.name]
    }
  },
  components: {
    Music,
    AnimalIcons,
    NextButton,
    Bg
  }
}
</script>
<style lang="scss" scoped>
</style>
