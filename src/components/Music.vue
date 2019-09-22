<template>
  <div class="music-box" @click="bgMusicPlayOrPause('bgMusic')">
    <audio id="bgMusic" :src="musics[name] || musics.bgMusic" :autoplay="!playFlag" preload="auto" loop></audio>
    <div :class="!playFlag ? 'isOff':'isOn'"></div>
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
  'falcon': m3,
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
      playFlag: true,
      clickMusicBtn: false,
      musics
    }
  },
  mounted () {
    this.audioAutoPlay('bgMusic')
    document.addEventListener('visibilitychange', (e) => { // 兼容ios微信手Q
      if (this.clickMusicBtn) { // 点击了关闭音乐按钮
        if (this.playFlag) {
          this.audioAutoPlay('bgMusic')
          this.playFlag = true
        } else {
          this.audioPause('bgMusic')
          this.playFlag = false
        }
        if (e.hidden) {
          this.audioAutoPlay('bgMusic')
          this.playFlag = true
        } else { // 网页被呼起
          this.audioPause('bgMusic')
          this.playFlag = false
        }
      } else { // 未点击关闭音乐按钮
        if (this.playFlag) {
          this.audioPause('bgMusic')
          this.playFlag = false
        } else {
          this.audioAutoPlay('bgMusic')
          this.playFlag = true
        }
        if (e.hidden) {
          this.audioPause('bgMusic')
          this.playFlag = false
        } else { // 网页被呼起
          this.audioAutoPlay('bgMusic')
          this.playFlag = true
        }
      }
    })
    console.log('---->', this.name)
  },
  methods: {
    bgMusicPlayOrPause (id) {
      this.clickMusicBtn = !this.clickMusicBtn
      if (this.playFlag) {
        this.audioPause(id)
        this.playFlag = false
      } else {
        this.audioAutoPlay(id)
        this.playFlag = true
      }
    },
    audioPause (id) {
      const audio = document.getElementById(id)
      audio.pause()
      document.addEventListener('WeixinJSBridgeReady', function () {
        audio.pause()
      }, false)
      document.addEventListener('YixinJSBridgeReady', function () {
        audio.pause()
      }, false)
    },
    audioAutoPlay (id) {
      const audio = document.getElementById(id)
      audio.play()
      document.addEventListener('WeixinJSBridgeReady', function () {
        audio.play()
      }, false)
      document.addEventListener('YixinJSBridgeReady', function () {
        audio.play()
      }, false)
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
