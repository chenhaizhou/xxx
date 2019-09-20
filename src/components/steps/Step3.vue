<template>
  <div>
    <AnimalIcons />
    <div class="question-box">
      <p>
        快听<br />这就是金刚鹦鹉的叫声
        <i class="arrow"></i>
      </p>
    </div>
    <router-link to="step4"><NextButton :tips="true" /></router-link>
    <Music name="parrot" :autoPlay="true" />
  </div>
</template>
<script>
import Music from '@/components/Music'
import AnimalIcons from '@/components/AnimalIcons'
import NextButton from '@/components/NextButton'
export default {
  components: {
    Music,
    AnimalIcons,
    NextButton
  }
}
</script>
<style lang="scss" scoped>
</style>
