<template>
  <div class="container mask">
    <AnimalIcons />
    <Panel v-if="step === 1">
      <div class="img">
        <img src="../../assets/images/plume.png" alt="蓝色羽毛" />
      </div>
      <p class="question">
        你找到的这只蓝色的羽毛又大又美，你知道它的主人是谁吗？
      </p>
    </Panel>
    <Choose :items="chooseArrs" v-on:handleChoose="handleChoose" />
    <router-link to="step3" v-bind:style="{pointerEvents: 'none'}"><NextButton /></router-link>
    <Modal :show="showModal">
      <Panel>
        <div class="img">
          <img src="../../assets/images/p1_2.png" alt="蓝色羽毛" />
        </div>
        <h4 class="result success" v-show="status">答对了--{{answer}}</h4>
        <h4 class="result fail" v-show="!status">答错了 -- <span>正确答案：{{answer}}</span></h4>
        <p class="describle">
          蓝黄色金刚鹦鹉是色彩最漂亮、体型最大的鹦鹉之一。身长81至91.5厘米，翼展104至114厘米。 它们充满活力，有很强的好奇心。背部和翅膀呈蓝色，部分呈黄色，前额有绿色羽毛，翅膀末端有绿色尖端。蓝黄金刚鹦鹉实行一夫一妻制哟，寿命大约是60年。
        </p>
      </Panel>
      <div slot="close">
        <router-link to="step3"><CloseIcon /></router-link>
      </div>
    </Modal>
  </div>
</template>
<script>
import AnimalIcons from '@/components/AnimalIcons'
import NextButton from '@/components/NextButton'
import Panel from '@/components/Panel'
import Choose from '@/components/Choose'
import Modal from '@/components/Modal'
import CloseIcon from '@/components/CloseIcon'

const answerArr = ['金刚鹦鹉', '百灵', '布谷鸟', '雨燕']

export default {
  data () {
    return {
      chooseArrs: answerArr,
      answer: answerArr[0],
      block: true,
      status: false,
      step: 1,
      showModal: false
    }
  },
  components: {
    AnimalIcons,
    NextButton,
    Panel,
    Choose,
    Modal,
    CloseIcon
  },
  methods: {
    handleChoose (item, event) {
      event.preventDefault()
      this.status = item === this.answer
      this.showModal = true
      console.log(event, 'ccccc', item)
    }
  }
}
</script>
<style lang="scss" scoped>
  .question {
    font-size: 1.6rem;
    font-family: "FZZHengHei-B-GBK", Arial, Helvetica, sans-serif;
  }
  .img {
    width: 257px;
    height: 109px;
    margin: 0 auto;
    border: 3px solid #69503c;
    background-color: #fff;
    text-align: center;
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
    height: 36vh;
    overflow: auto;
    font-size: 1.6rem;
    font-family: Arial, Helvetica, sans-serif;
  }
</style>
