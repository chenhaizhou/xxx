<template>
  <div class="panel-wrapper" v-bind:style="{height: height}">
    <div class="panel-box">
      <slot></slot>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .panel-wrapper {
    position: relative;
    box-sizing: border-box;
    overflow: hidden;
    width: 80vw;
    padding: 3px;
    margin:0 auto;
    background-color: #E9DFCF;
    border: 5px solid #42332F;
    border-radius: 10px;
    z-index: 1;
  }
 .panel-box {
    box-sizing: border-box;
    height: 100%;
    padding: 1.5rem;
    border: 3px solid #938673;
    border-radius: 5px;
    box-shadow: 0 0 5px 5px rgba(0, 0, 0, .2) inset;
  }
</style>
<script>
export default {
  name: 'panel',
  props: {
    height: String
  }
}
</script>
