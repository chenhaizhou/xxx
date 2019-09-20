<template>
  <div class="ripple" v-bind:style="{left}"></div>
</template>
<script>
export default {
  props: {
    left: String
  }
}
</script>
<style lang="scss" scoped>
  .ripple {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background-color: #fff;
    animation: show 0s linear 3s forwards, scale .8s linear infinite;
    z-index: 1;
    opacity: 0;
    pointer-events: none;
  }
  .ripple::before,
  .ripple::after{
    content:"";
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    border-radius: 50%;
    animation: ripple 1s linear infinite .5s;
  }
  .ripple::after {
    animation: ripple 1s linear infinite 1s;
  }
  @keyframes show {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes scale {
    0% {
      transform: scale(1);;
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);;
    }
  }
  @keyframes ripple {
    0% {
      box-shadow: 0 0 0 .7rem rgba(255,255,255, 0.5);
    }
    100% {
      box-shadow: 0 0 0 4rem rgba(255,255,255, 0);
    }
  }
</style>
