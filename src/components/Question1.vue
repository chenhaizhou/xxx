<template>
  <div class="full" @click="handleStep">
    <div class="mask" v-if="step === 2 || step === 3"></div>
    <AnimalIcons />
    <div class="question-box" v-show="step === 1">
      <p>
        南美洲的热带雨林里隐藏着一种色彩艳丽的鸟，试着找到它......
      </p>
    </div>
    <div class="full" v-show="step === 2">
      <Panel>
        <div class="img">
          <img src="../assets/images/plume.png" alt="蓝色羽毛" />
        </div>
        <p>
          你找到的这只蓝色的羽毛又大又美，你知道它的主人是谁吗？
        </p>
      </Panel>
      <Choose :items="chooseArrs" v-on:handleChoose="handleChoose" />
    </div>
    <div class="full" v-show="step === 3">
      <Panel>
        <div class="img">
          <img src="../assets/images/plume.png" alt="蓝色羽毛" />
        </div>
        <h4 class="result success" v-show="status">答对了--{{answer}}</h4>
        <h4 class="result fail" v-show="!status">答错了 -- <span>正确答案：{{answer}}</span></h4>
        <p class="describle">
          蓝黄色金刚鹦鹉是色彩最漂亮、体型最大的鹦鹉之一。身长81至91.5厘米，翼展104至114厘米。 它们充满活力，有很强的好奇心。背部和翅膀呈蓝色，部分呈黄色，前额有绿色羽毛，翅膀末端有绿色尖端。蓝黄金刚鹦鹉实行一夫一妻制哟，寿命大约是60年。
        </p>
      </Panel>
      <div class="close" @click="close">关闭</div>
    </div>
    <div class="question-box" v-show="step === 4">
      <p>
        快听<br />这就是金刚鹦鹉的叫声
        <i class="arrow"></i>
      </p>
    </div>
    <div class="question-box" v-show="step === 5">
      <p>
        呀<br />它被违法盗猎者抓起来了
        <i class="arrow"></i>
      </p>
    </div>
    <div class="question-box" v-show="step === 6">
      <p>
        快点击解救金刚鹦鹉吧
        <i class="arrow"></i>
      </p>
    </div>
    <div class="question-box" v-show="step === 7">
      <p>
        谢谢你救了我！
        <i class="arrow"></i>
      </p>
    </div>
    <div class="question-box" v-show="step === 8">
      <p>
        恭喜你获得金刚鹦鹉图腾~
      </p>
    </div>
    <transition name="fade">
      <div class="point" v-show="showTips && step === 1" @click="handleHelp">
        <div class="ripple"></div>
      </div>
    </transition>
    <div class="tips-button">下一页</div>
    <Music />
    
  </div>
</template>
<script>
import Music from '../components/Music'
import Panel from '../components/Panel'
import Choose from '../components/Choose'
import AnimalIcons from '../components/AnimalIcons'

const answerArr = ["金刚鹦鹉", "百灵", "布谷鸟", "雨燕"]

export default {
  data () {
    return {
      step: 1,
      stepCount: 8,
      block: false,
      showTips: false,
      chooseArrs: answerArr,
      answer: answerArr[0],
      status: false
    }
  },
  components: {
    AnimalIcons,
    Music,
    Panel,
    Choose
  },
  methods: {
    handleStep () {
      if (this.step < this.stepCount && !this.block) {
        this.step = this.step + 1
        this.block = this.step === 2
        console.log('---', this.step)
      }
    },
    handleHelp () {
      this.block = true
      this.step = this.step + 1
    },
    afterEnter () {
      this.showTips = true
    },
    handleChoose (item, event) {
      event.preventDefault()
      this.status = item === this.answer
      // this.step = this.step + 1
      this.block = false
      console.log(event, 'ccccc', this.step)
    },
    close (event) {
      event.preventDefault()
      this.step = this.step + 1
    }
  },
  mounted () {
    setTimeout(() => {
      this.showTips = true
    }, 3000)
  }
}
</script>
<style lang="scss" scoped>
  .full {
    position: relative;
    z-index: 1;
    height: 100vh;
    font-size: 1.8rem;
    font-family: "FZZHengHei-B-GBK", Arial, Helvetica, sans-serif;
  }
  .question-box {
    position: relative;
    z-index: 1;
    width: 70%;
    margin: 2rem auto;
    padding: 1.5rem;
    border: 1px solid #42332F;
    background-color: rgba(255, 255, 255, .7);
    font-size: 1.8rem;
    outline: 5px solid #4e3934;
    font-family: "FZZHengHei-B-GBK", Arial, Helvetica, sans-serif;
    p {
      padding: 0;
      margin: 0;
      text-align: center;
    }
  }
  .arrow {
    margin-left: 5px;
    vertical-align: middle;
    border-width: 8px 5px 0 5px;
    border-style: solid;
    line-height: 0;
    font-size: 0;
    border-color: #171A12 transparent transparent transparent;
  }
  .parrot {
    position: fixed;
    top: 25vh;
    right: -15vw;
    z-index: 0;
    width: 272px;
    height: 263px;
    background-size: contain;
    background-image: url(../assets/images/parrot3.png);
    background-repeat: no-repeat;
    transition: right .3s ease-out .5s;
    &.on {
      background-image: url(../assets/images/parrot2.png);
      right: 10vw;
    }
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity 1s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  .point {
    position: fixed;
    bottom: 10vh;
    right: 15vw;
    z-index: 2;
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
  .ripple {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    position:relative;
    background-color: #fff;
    // animation: ripple 1s linear infinite;
    animation: scale .8s linear infinite;
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
  @keyframes ripple {
    0% {
      box-shadow: 0 0 0 .7rem rgba(255,255,255, 0.5);
    }
    100% {
      box-shadow: 0 0 0 4rem rgba(255,255,255, 0);
    }
  }
  a {
    text-decoration: none;
  }
  .button {
    position: fixed;
    bottom: 60px;
    left: 50%;
    display: block;
    width: 120px;
    height: 120px;
    transform: translateX(-50%);
    line-height: 120px;
    text-align: center;
    font-size: 1.8rem;
    color: #fff;
    border: 5px solid #fff;
    border-radius: 50%;
    z-index: 1;
    box-shadow: 0 0 10px 5px #159588 inset, 0 0 3px 3px #159588;
    &::before, &::after {
      content: '';
      position: absolute;
      z-index: 0;
      display: block;
      width: 0;
      height: 0;
      border-width: 14px 14px 14px 0;
      border-style: solid;
      border-color: #fff transparent transparent transparent;
    }
    &::before {
      left: 0;
      top: 75%;
      transform: rotate(15deg);
    }
    &::after {
      top: 10%;
      right: -6px;
      transform: rotate(200deg);
    }
  }
  .tips-button {
    position: fixed;
    bottom: 10vh;
    right: 10vw;
    z-index: 0;
    width: 95px;
    height: 53px;
    text-indent: -99em;
    overflow: hidden;
    background-size: contain;
    background-image: url(../assets/images/plume.png);
    background-repeat: no-repeat;
  }
  .img {
    padding: 1.5rem;
    height: 10vh;
    border: 3px solid #42332F;
    background-color: #fff;
    img {
      max-height: 100%;
    }
  }
  .result {
    margin: 1rem 0;
    text-align: left;
    font-size: 2rem;
    font-weight: normal;
    span {
      font-size: 1.6rem;
    }
  }
  .success {
    color: #497038;
  }
  .fail {
    color: #FB0D29;
  }
  .describle {
    margin-top: .5rem;
    font-family: Arial, Helvetica, sans-serif;
  }
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
  .modal {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: -1;
      background-color: rgba(0, 0, 0, .5);
    }
  }
  .mask {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 0;
      background-color: rgba(0, 0, 0, .5);
  }
</style>
