<template>
  <div class="music-box">
    <div @click="changeOn" :class="isOff ? 'isOff':'isOn'"></div>
    <audio id="audio" :src="musics[name] || musics.bgMusic" :autoplay="!isOff"></audio>
  </div>
</template>
<script>
import m0 from '@/assets/mp3/bg-music.mp3'
import m1 from '@/assets/mp3/parrot.mp3'
import m2 from '@/assets/mp3/chainsaw.mp3'
import m3 from '@/assets/mp3/cage.mp3'
import m4 from '@/assets/mp3/drink.mp3'
import m5 from '@/assets/mp3/leopard.mp3'
const musics = {
  'bgMusic': m0,
  'parrot': m1,
  'monkey': m2,
  'falocn': m3,
  'panda': m4,
  'leopard': m5
}
export default {
  props: {
    autoPlay: Boolean,
    name: String
  },
  data () {
    return {
      isOff: true,
      musics
    }
  },
  components: {},
  mounted () {
    const oAudio = document.querySelector('#audio')
    oAudio.onended = function () {
      oAudio.load()
      oAudio.play()
    }
    if (this.autoPlay) {
      this.audioAutoPlay()
    }
  },
  methods: {
    changeOn () {
      const oAudio = document.querySelector('#audio')
      if (this.isOff) {
        oAudio.play()
      } else {
        oAudio.pause()
      }
      this.isOff = !this.isOff
    },
    audioAutoPlay () {
      const audio = document.getElementById('audio')
      this.isOff = false
      audio.play()
    }
  }
}
</script>
<style lang="scss" scoped>
.music-box {
  position: fixed;
  bottom: 2.5rem;
  right: 2rem;
  z-index: 9;
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
