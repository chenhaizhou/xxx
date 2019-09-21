<template>
  <div class="card-wrapper re-item" v-bind:class="{on}" @click="handleClick">
    <div class="card re-item-front">
      <div class="totem" v-html="animals[name].svg"></div>
    </div>
    <div class="re-item-back">
      <div class="content">
        <article class="bg-box">
          <header>
            我是 {{username}}
            <p>是第 {{count}} 位守护{{animals[name].name}}的人</p>
          </header>
          <div class="img">
            <img :src="animals[name].img" :alt="animals[name].name" />
          </div>
          <p class="describe" v-html="animals[name].describe"></p>
          <footer>
            <router-link to="/main/result" class="button-chest">
              点击打开宝箱
            </router-link>
            <div class="qr-code">
              <img src="../assets/images/qr.png" alt="qr code" />
            </div>
          </footer>
        </article>
        <p class="tips">长按图片保存</p>
      </div>
    </div>
  </div>
</template>
<script>
import {
  parrot,
  monkey,
  falcon,
  panda,
  leopard
} from '@/components/animals'
import { p1, p2, p3, p4, p5 } from '@/components/imageList'
export default {
  props: {
    name: String
  },
  data () {
    return {
      animals: {
        parrot: {
          svg: parrot,
          img: p1,
          name: '金刚鹦鹉',
          describe: '美丽的羽毛是自然赋予的华丽，<br />不是人类用来满足自己的私心。'
        },
        monkey: {
          svg: monkey,
          img: p2,
          name: '滇金丝猴',
          describe: '拥有性感而又迷人的烈焰红唇，<br />却是需要亟待保护的高山精灵。'
        },
        falcon: {
          svg: falcon,
          img: p3,
          name: '红隼',
          describe: '在你的心上，自由的飞翔，<br>确认过眼神，在下小盗贼。'
        },
        panda: {
          svg: panda,
          img: p4,
          name: '大熊猫',
          describe: '本靠实力可称霸，<br />偏要卖萌求抱抱。'
        },
        leopard: {
          svg: leopard,
          img: p5,
          name: '雪豹',
          describe: '位于高山的孤独侠客，<br />行踪诡秘的雪山精灵。'
        }
      },
      on: false,
      username: '孙运明',
      count: 12102
    }
  },
  methods: {
    handleClick () {
      this.on = true
    }
  }
}
</script>
<style lang="scss">
  .card-wrapper {
    position: relative;
    width: 86px;
    height: 138px;
    z-index: 0;
    perspective: 500;
  }
  .card {
    border-radius: 5px;
    background: url(../assets/images/card.png) center center no-repeat;
    background-size: contain;
  }
  .totem {
    position: absolute;
    width: 20px;
    height: 20px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    svg {
      width: 100%;
      height: auto;
      g {
        fill: #6E2040;
      }
    }
  }
  .re-item-front,
  .re-item-back {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      perspective: 1000;
      transition: all .5s;
      box-shadow: rgba(50, 50, 50, 0.2) 0 0 15px;
  }
  .re-item-back {
    transform: rotateY(-180deg);
  }
  .on .re-item-front {
    transform: rotateY(-180deg);
  }
  .on .re-item-back {
    transform: rotateY(-360deg);
  }
  .content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: all .5s;
  }
  .bg-box {
    background-color: rgba(255, 255, 255, .5);
  }
  .on {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-image: url(../assets/images/bg/bg7.png);
    background-size: cover;
    background-repeat: no-repeat;
    .re-item-back {
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
    .content {
      position: fixed;
      width: 80vw;
      height: 80vh;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 0;
    }
  }
  .tips {
    margin-top: 3rem;
    font-size: 1.6rem;
    font-family: "FZZHengHei-B-GBK", Arial, Helvetica, sans-serif;
    color: #fff;
    text-align: center;
  }
  article {
    padding: 1rem 0;
    header {
      padding: 1rem 2rem;
      font-size: 2rem;
      font-family: "FZZHengHei-B-GBK", Arial, Helvetica, sans-serif;
      p {
        margin: .5rem;
        font-size: 1.8rem;
      }
    }
    footer {
      display: flex;
      margin: 1rem 2rem;
    }
  }
  .img {
    margin: 0 auto;
    width: 245px;
    height: 195px;
    border: 5px solid #fff;
    img {
      max-width: 100%;
      max-height: 100%;
    }
  }
  .describe {
    padding: 0 2rem;
    text-align: center;
    font-size: 1.6rem;
  }
  .button-chest {
    padding-left: 25%;
    font-size: 1.4rem;
    line-height: 49px;
    flex: 1;
    color: #2c3e50;
    text-decoration: none;
    font-family: "FZZHengHei-B-GBK", Arial, Helvetica, sans-serif;
    background: url(../assets/images/chest.png) 10% 50% no-repeat;
    background-size: 30px 28px;
    border: 3px solid #fff;
    background-color: rgba(255, 255, 255, .5);
  }
  .qr-code {
    width: 55px;
    height: 55px;
    margin-left: 10px;
    img {
      max-width: 100%;
    }
  }
</style>
