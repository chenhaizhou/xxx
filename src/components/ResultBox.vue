<template>
  <section>
    <div class="bg-box">
      <div class="header">
        <div class="logo">
          <img src="../assets/images/logo2.png" />
        </div>
        <div class="txt">
          <h1>{{title}}</h1>
          <p>{{describe}}</p>
        </div>
      </div>
      <div class="container" v-if="result && !submitStatus">
        <div class="result">
          <img src="../assets/images/gift.png" />中奖了
        </div>
        <p>
          你将有机会获得由”世界动物保护协会， 大自然保护协会，成都大熊猫繁育研究基地，国际爱护动物基金会，保护国际基金会“提供的官方纪念品。
        </p>
      </div>
      <div v-else class="container">
        <div v-if="submitStatus" class="result success">
          <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="93px" height="95px" viewBox="0 0 930 950" preserveAspectRatio="xMidYMid meet">
            <g fill="#88d05c" stroke="none">
              <path d="M328 923 c-1 -5 -32 -23 -68 -40 -91 -46 -164 -121 -211 -217 -38 -77 -39 -81 -39 -191 0 -107 1 -114 35 -184 20 -40 56 -95 82 -122 49 -52 139 -113 186 -124 15 -4 27 -11 27 -16 0 -5 54 -9 120 -9 73 0 120 4 120 10 0 6 7 10 16 10 33 0 141 66 194 120 33 33 67 79 84 115 15 33 31 68 37 77 12 23 12 223 0 246 -5 9 -23 47 -40 84 -39 84 -121 162 -223 212 -72 35 -75 36 -195 36 -67 0 -123 -3 -125 -7z m219 -210 c39 -18 93 -85 93 -115 0 -30 -24 -20 -45 19 -59 109 -191 110 -263 3 -26 -38 -49 -46 -44 -15 5 29 49 84 86 106 39 24 125 25 173 2z m-267 -304 c0 -57 -1 -60 -22 -57 -20 3 -23 10 -26 61 -3 55 -2 57 23 57 24 0 25 -2 25 -61z m415 1 c0 -46 -3 -55 -19 -58 -25 -5 -36 14 -36 64 0 47 6 56 35 52 17 -3 20 -10 20 -58z"/>
            </g>
          </svg>
          提交成功
        </div>
        <div v-else class="result fail">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="60" height="60" viewBox="0, 0, 400,400">
            <g>
              <path d="M131.868 13.158 C -1.643 62.364,-40.607 236.125,59.436 336.168 C 114.994 391.726,212.911 408.489,282.664 374.383 C 428.375 303.137,428.375 91.866,282.664 21.377 C 243.175 2.273,171.937 -1.610,131.868 13.158 M124.097 127.473 C 127.117 132.308,131.772 136.264,134.442 136.264 C 137.112 136.264,142.877 132.308,147.253 127.473 C 154.937 118.981,167.033 115.474,167.033 121.737 C 167.033 123.418,161.943 130.107,155.722 136.600 L 144.410 148.406 155.722 159.718 C 161.943 165.939,167.033 173.097,167.033 175.624 C 167.033 183.212,155.751 180.819,147.253 171.429 C 142.877 166.593,136.943 162.637,134.066 162.637 C 131.189 162.637,125.255 166.593,120.879 171.429 C 113.194 179.920,101.099 183.427,101.099 177.164 C 101.099 175.483,106.414 168.560,112.910 161.779 L 124.722 149.451 112.910 137.122 C 106.414 130.341,101.099 123.418,101.099 121.737 C 101.099 114.851,119.003 119.316,124.097 127.473 M264.756 127.473 C 267.776 132.308,272.431 136.264,275.101 136.264 C 277.771 136.264,283.536 132.308,287.912 127.473 C 292.288 122.637,298.528 118.681,301.780 118.681 C 310.514 118.681,308.959 129.359,298.901 138.462 C 294.066 142.837,290.110 148.602,290.110 151.272 C 290.110 153.942,294.066 158.598,298.901 161.617 C 308.842 167.825,310.760 180.220,301.780 180.220 C 298.528 180.220,292.288 176.264,287.912 171.429 C 277.790 160.244,273.572 160.373,264.027 172.162 C 258.772 178.651,253.773 180.711,248.338 178.625 C 241.093 175.845,241.508 174.369,252.872 162.507 L 265.381 149.451 253.508 137.058 C 246.978 130.242,242.982 123.319,244.627 121.673 C 250.235 116.065,259.255 118.664,264.756 127.473 M246.962 255.413 C 261.954 263.010,276.923 278.638,276.923 286.692 C 276.923 293.466,264.923 289.913,256.725 280.712 C 252.120 275.543,241.987 268.620,234.207 265.327 C 205.753 253.284,165.777 260.391,147.670 280.712 C 134.191 295.840,123.121 293.267,131.813 277.027 C 148.238 246.336,207.207 235.267,246.962 255.413 " stroke="none" fill="#0e124d" fill-rule="evenodd"></path>
            </g>
          </svg>
          没中奖
        </div>
      </div>
    </div>
  </section>
</template>
<script>
const describes = {
  parrot: '金刚鹦鹉在森林深处为你衔来一份幸运',
  monkey: '滇金丝猴在树林中为你摘下一份幸运',
  falcon: '红隼在蓝天下为你捕捉一份幸运',
  panda: '大熊猫努力卖萌为你赢得一份幸运',
  leopard: '雪豹在雪山深处为你找到一份幸运'
}
export default {
  props: {
    result: Boolean,
    name: String,
    submitStatus: Boolean
  },
  data () {
    return {
    }
  },
  computed: {
    title () {
      return this.result ? '恭喜你' : '很遗憾'
    },
    describe () {
      const defaultText = '守护自然的美丽靠的是心灵而不是物质'
      return this.result ? describes[this.name] : defaultText
    }
  },
  mounted () {
    console.log('++++', this.submitStatus)
  }
}
</script>
<style lang="scss" scoped>
  .bg-box {
    padding: 2rem;
    background-color: rgba(255, 255, 255, .5);
    border-radius: 5px;
    .header {
      display: flex;
      .logo {
        display: flex;
        width: 71px;
        height: 71px;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        border: 3px solid #fff;
        background-color: #062231;
        overflow: hidden;
        img {
          max-width: 100%;
          max-height: 100%;
        }
      }
    }
    h1 {
      margin: 0;
      font-size: 2rem;
      font-weight: normal;
      color: #CC0000;
      font-family: "FZZHengHei-B-GBK", Arial, Helvetica, sans-serif;
    }
    .txt {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 10px;
      p {
        margin: 0;
        font-size: 1.4rem;
        color: #012c4d;
      }
    }
  }
  .container {
    .result {
      margin: 2rem 0;
      font-size: 3rem;
      text-align: center;
      font-family: "FZZHengHei-B-GBK", Arial, Helvetica, sans-serif;
      color: #A00A15;
      &.fail {
        margin: 4rem 0;
        color: #012c4d;
      }
      &.success {
        margin: 4rem 0;
        color: #88d05c;
      }
      img {
        width: 50px;
        height: 53px;
        vertical-align: middle;
        margin-right: 20px;
      }
      svg {
        width: 50px;
        height: 50px;
        vertical-align: middle;
      }
    }
    p {
      margin-bottom: 0;
      font-size: 1.2rem;
      color: #fff;
    }
  }
</style>
