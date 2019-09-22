<template>
  <div class="point" v-bind:class="{full: name !== 'parrot'}">
    <RippleIcon v-if="tips" :style="position" />
    <div class="tips-button">下一页</div>
  </div>
</template>
<script>
import RippleIcon from '@/components/RippleIcon'
export default {
  props: {
    tips: Boolean,
    name: String,
    position: Object
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
    &.full {
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      .tips-button {
        display: none;
      }
      .ripple {
        left: 50%;
        top: 60%;
      }
    }
  }
  .tips-button {
    height: 100%;
    width:100%;
    text-indent: -99em;
    overflow: hidden;
    background-size: contain;
    background-image: url(../assets/images/img/plume.png);
    background-repeat: no-repeat;
  }
</style>
