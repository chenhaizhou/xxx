<template>
  <div class="modal" v-if="show">
    <div class="modal-box"><slot></slot></div>
    <slot name="close" v-if="closeSlot"></slot>
    <CloseIcon v-else @click="close" />
  </div>
</template>
<script>
import CloseIcon from '@/components/CloseIcon'
export default {
  name: 'modal',
  props: {
    show: Boolean
  },
  data () {
    return {
      showModal: this.show,
      closeSlot: this.$slots.close
    }
  },
  components: {
    CloseIcon
  },
  methods: {
    close () {
      this.show = false
    }
  },
  mounted () {
  }
}
</script>
<style lang="scss" scoped>
  .modal {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: center;
    overflow: hidden;
    &::before {
      content: '';
      position: absolute;
      right: 0;
      height: 100%;
      bottom: 0;
      top: 0;
      left: 0;
      z-index: -1;
      background-color: rgba(0, 0, 0, .5);
    }
  }
  .modal-box {
    position: relative;
    z-index: 1;
    width: 100%;
  }
</style>
