<template>
  <div class="loading-mask" v-if="show">
    <div class="loading-img">
      <img src="../assets/images/whale.gif" />
    </div>
    <strong>LOADING...</strong>
    <p>{{ percentage }}%</p>
  </div>
</template>

<script>
export default {
  name: 'PreloadImage',
  props: {
    imgArr: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      loadedCount: 0,
      show: true
    }
  },
  methods: {
    unorderedPreload () {
      this.imgArr.forEach((imgUrl) => {
        const imgObj = new Image()
        imgObj.addEventListener('load', this.imageLoaded)
        imgObj.addEventListener('error', this.imageLoaded)
        imgObj.src = imgUrl
      })
    },
    imageLoaded () {
      this.loadedCount += 1
      if (this.loadedCount >= this.imgArr.length) {
        this.show = false
      }
    }
  },
  computed: {
    percentage () {
      return Math.round((this.loadedCount / this.imgArr.length) * 100)
    }
  },
  created () {
    this.unorderedPreload()
  }
}
</script>
<style lang="scss" scoped>
  .loading-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #2978c9;
  z-index: 0;
  color: #fff;
  p {
    margin: 0;
    font-size: .9rem
  }
}

 .loading-img {
   margin-top: 30vh;
   margin-bottom: -15px;
   img {
     max-width: 30%;
   }
 }
</style>
