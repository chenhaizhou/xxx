<template>
  <div class="point">
    <RippleIcon v-if="tips" />
    <div class="tips-button">下一页</div>
  </div>
</template>
<script>
import RippleIcon from '@/components/RippleIcon'
export default {
  props: {
    tips: Boolean
  },
  components: {
    RippleIcon
  }
}
</script>
<style lang="scss" scoped>
  .point {
    position: fixed;
    bottom: 15vh;
    right: 15vw;
    z-index: 1;
    width: 95px;
    height: 53px;
  }
  .tips-button {
    height: 100%;
    width:100%;
    text-indent: -99em;
    overflow: hidden;
    background-size: contain;
    background-image: url(../assets/images/plume.png);
    background-repeat: no-repeat;
  }
</style>
