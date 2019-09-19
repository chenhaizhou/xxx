<template>
  <div class="music-box">
    <div @click="changeOn" :class="isOff?'isOff':'isOn'"></div>
    <audio id="audio" :src="require('../assets/mp3/bg-music.mp3')"></audio>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isOff: true
    }
  },
  components: {},
  created () {},
  mounted () {
    document.addEventListener('touchstart', this.audioAutoPlay, false)
    document.addEventListener('WeixinJSBridgeReady', this.audioAutoPlay, false)
    let oAudio = document.querySelector('#audio')
    oAudio.onended = function () {
      oAudio.load()
      oAudio.play()
    }
  },
  methods: {
    changeOn () {
      let oAudio = document.querySelector('#audio')
      if (this.isOff) {
        oAudio.play()
      } else {
        oAudio.pause()
      }
      this.isOff = !this.isOff
    },
    audioAutoPlay () {
      let audio = document.getElementById('audio')
      this.isOff = false
      audio.play()
      document.removeEventListener('touchstart', this.audioAutoPlay)
    }
  }
}
</script>
<style lang="scss" scoped>
.music-box {
  position: fixed;
  bottom: 2.5rem;
  right: 2rem;
  z-index: 0;
}
.isOn {
  width: 28px;
  height: 28px;
  -webkit-animation: rotating 3s linear infinite;
  animation: rotating 3s linear infinite;
  background: url("../assets/images/play.png") no-repeat;
  background-size: contain;
}
@keyframes rotating {
  from {
    -webkit-transform: rotate(0);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}
@-webkit-keyframes rotating {
  from {
    -webkit-transform: rotate(0);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}
.isOff {
  width: 28px;
  height: 28px;
  background: url("../assets/images/stop.png") no-repeat;
  background-size: contain;
}
</style>
