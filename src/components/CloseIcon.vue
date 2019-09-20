<template>
  <div class="close">关闭</div>
</template>
<style lang="scss" scoped>
  .close {
    position: relative;
    margin: 1rem auto;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    border: 3px solid #42332F;
    background-color: #E9DFCF;
    font-size: 0;
    z-index: 0;
    &::before, &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      z-index: 0;
      margin-top: -2px;
      transform: translateY(-50%);
      display: block;
      width: 100%;
      height:3px;
      overflow: hidden;
      background-color: #42332F;
    }
    &::before {
      transform: rotate(45deg);
    }
    &::after {
      transform: rotate(-45deg);
    }
  }
</style>
