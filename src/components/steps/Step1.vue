<template>
  <div>
    <AnimalIcons />
    <div class="question-box">
      <p>
        南美洲的热带雨林里隐藏着一种色彩艳丽的鸟，试着找到它......
      </p>
    </div>
    <router-link to="step2"><NextButton :tips="true" /></router-link>
  </div>
</template>
<script>
import AnimalIcons from '@/components/AnimalIcons'
import NextButton from '@/components/NextButton'
export default {
  components: {
    AnimalIcons,
    NextButton
  }
}
</script>
<style lang="scss" scoped>
</style>
