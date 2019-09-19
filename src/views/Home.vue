<template>
  <div class="home">
    <PreloadImage :imgArr="imgArr" />
    <Hello msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Hello from '@/components/Hello.vue'
import PreloadImage from '@/components/Loading.vue'
import imgList from '@/components/imageList'

export default {
  name: 'home',
  data () {
    return {
      imgArr: imgList
    }
  },
  components: {
    Hello,
    PreloadImage
  }
}
</script>
