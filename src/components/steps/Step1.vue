<template>
  <div>
    <Bg :step="1" :current="current" />
    <AnimalIcons :step="current" />
    <div class="question-box">
      <p>
        {{describe}}
      </p>
    </div>
    <router-link :to="{path: '../step2/' + current}">
      <NextButton v-if="current === 'parrot'" :tips="true" name="parrot" />
      <NextButton v-else :tips="!!tipPosition[current]" :position="tipPosition[current]" />
    </router-link>
  </div>
</template>
<script>
import AnimalIcons from '@/components/AnimalIcons'
import NextButton from '@/components/NextButton'
import Bg from '@/components/Bg'
const describes = {
  parrot: '南美洲的热带雨林里，隐藏着一种色彩艳丽的鸟，试着找到它......',
  monkey: '咦，有身影闪过，在草丛里留下了什么东西？快捡起来看看~',
  falcon: '看，远处有什么东西飞过来了！',
  panda: '竹林在晃动，里边有个穿黑白T恤的家伙呢',
  leopard: '这里是鞍子河的寂静山林，地上好像有脚印'
}
export default {
  components: {
    AnimalIcons,
    NextButton,
    Bg
  },
  data () {
    return {
      current: this.$route.params.name,
      describe: describes[this.$route.params.name],
      tipPosition: {
        monkey: {
          top: '78%'
        },
        falcon: {
          top: '45%',
          left: '30%'
        },
        panda: {
          top: '60%',
          left: '75%'
        },
        leopard: {
          top: '55%'
        }
      }
    }
  },
  mounted () {
  }
}
</script>
<style lang="scss" scoped>
</style>
