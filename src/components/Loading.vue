<template>
  <div class="loading-mask" v-if="show">
    <div class="loading-img">
      <div class="placeholder">
        <svg width="204px" height="120px" viewBox="0 0 204 120" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <path d="M9.09792752,82.5449113 C21.1734001,95.5147305 31.6160234,104.105953 40.4257974,108.318579 C49.2355715,112.531205 64.5487996,116.145916 86.3654819,119.162713 C103.493014,118.84005 115.178728,118.007204 121.422625,116.664173 C132.221041,114.341489 140.277174,109.424208 145.331674,106.576163 C151.32877,103.196997 158.357708,95.830545 162.914451,87.9671982 C164.657666,84.9590177 166.451337,80.2901858 168.295464,73.9607026 L9.09792752,82.5449113 Z" id="Path-2" fill="#FFFFFF"></path>
              <path d="M0.479728432,48.6678013 L154.401764,48.6678013 C157.153923,41.1400648 156.240854,35.113311 151.662556,30.5875399 C147.084259,26.0617687 137.260829,22.7632533 122.192266,20.6919936 C129.008772,14.7849423 134.673146,11.6473114 139.185389,11.279101 C141.737138,11.0708719 147.072065,10.1048125 151.662556,11.279101 C154.013789,11.8805673 157.554414,13.6738305 162.284431,16.6588906 C165.448181,11.2273879 167.952004,7.66175339 169.795899,5.96198692 C172.902953,3.09779733 177.149851,1.84152676 179.74316,1.06847989 C182.21162,0.332649634 186.939615,0.235907239 190.905591,1.06847989 C193.511985,1.61563718 197.645602,3.24680618 203.306442,5.96198692 C196.232769,10.7047083 191.314135,14.6211642 188.550538,17.7113544 C186.257346,20.275549 183.255269,24.110175 181.03541,26.4444736 C174.802719,32.9984753 172.038972,40.054732 172.744167,47.6132438 C172.773603,61.6919982 170.219943,72.9724361 165.083187,81.4545577 C159.946431,89.9366793 151.313832,96.3288503 139.185389,100.631071 C137.384926,103.058844 136.7042,105.309228 137.143211,107.382223 C137.582222,109.455217 139.452048,112.549201 142.752687,116.664173 C129.363643,114.301794 120.442956,111.20781 115.990627,107.382223 C111.538297,103.556635 107.781463,95.7576767 104.720124,83.9853477 L9.09792752,82.5449113 C5.551485,74.5826077 3.21693419,68.6205199 2.09427507,64.658648 C0.971615958,60.696776 0.433433745,55.3664938 0.479728432,48.6678013 Z" id="Path" fill="#002254"></path>
              <circle fill="#FFFFFF" cx="32.5" cy="64.5" r="3.5"></circle>
          </g>
      </svg>
      </div>
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
  z-index: 9;
  text-align: center;
  color: #fff;
  p {
    margin: 0;
    font-size: .9rem
  }
}
  .loading-img {
    position: relative;
    margin: 0 auto;
    width: 120px;
    height: 103px;
    z-index: 0;
  }
  .placeholder {
    position: absolute;
    left: 50%;
    top: 28px;
    transform: translateX(-50%);
    width: 76px;
    margin-left: 2px;
    z-index: 0;
    svg {
      width: 100%;
      height: auto;
    }
  }
 .loading-img {
   margin-top: 30vh;
   margin-bottom: -15px;
   img {
     width: 120px;
     position: relative;
     z-index: 1;
   }
 }
</style>
