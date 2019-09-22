<template>
  <div class="container mask">
    <Bg :step="2" :current="current" />
    <AnimalIcons :step="current" />
    <Panel v-if="step === 1">
      <div class="img min">
        <img :src="describes[current].question.img" />
      </div>
      <p class="question">
        {{describes[current].question.text}}
      </p>
    </Panel>
    <Choose :items="describes[current].answerArr" v-on:handleChoose="handleChoose" />
    <router-link :to="{path: '../step2/' + current}" v-bind:style="{pointerEvents: 'none'}"><NextButton /></router-link>
    <Modal :show="showModal">
      <Panel>
        <div class="img full-img">
          <img :src="describes[current].describe.img" />
        </div>
        <h4 class="result success" v-show="status">答对了--{{describes[current].answer}}</h4>
        <h4 class="result fail" v-show="!status">答错了 -- <span>正确答案：{{describes[current].answer}}</span></h4>
        <p class="describle">
          {{describes[current].describe.text}}
        </p>
      </Panel>
      <div slot="close">
        <router-link :to="{path: '../step3/' + current}"><CloseIcon /></router-link>
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
import Bg from '@/components/Bg'
import {
  p1q2,
  p2q2,
  p3q2,
  p4q2,
  p5q2,
  plume,
  food,
  foot,
  falcon,
  stripe
} from '@/components/imageList'
const describes = {
  parrot: {
    question: {
      text: '你找到的这对儿蓝色羽毛又大又美，你知道它的主人是谁吗？',
      img: plume
    },
    describe: {
      text: '蓝黄色金刚鹦鹉是色彩最漂亮、体型最大的鹦鹉之一。身长81至91.5厘米，翼展104至114厘米。 它们充满活力，有很强的好奇心。背部和翅膀呈蓝色，部分呈黄色，前额有绿色羽毛，翅膀末端有绿色尖端。蓝黄金刚鹦鹉实行一夫一妻制哟，寿命大约是60年。',
      img: p1q2
    },
    answerArr: ['金刚鹦鹉', '百灵', '布谷鸟', '雨燕'],
    answer: '金刚鹦鹉'
  },
  monkey: {
    question: {
      text: '原来是松萝，它可是_____的最爱',
      img: food
    },
    describe: {
      text: '杏儿脸，桃腮，酷炫的莫西干发型，加上时下最流行的唇色，滇金丝猴有一张让人过目难忘的脸！它也是少数有笑肌会“微笑”的动物！它们出没于滇藏两省交界的山脉和原始森林之间，是中国特有的物种，总数仅有3000余只，濒危程度堪比国宝大熊猫。',
      img: p2q2
    },
    answerArr: ['伊犁鼠兔', '滇金丝猴', '羊驼', '藏羚羊'],
    answer: '滇金丝猴'
  },
  falcon: {
    question: {
      text: '_____栖息于山地和旷野中，经常在空中盘旋，搜寻地面上的猎物。',
      img: falcon
    },
    describe: {
      text: '红隼常栖于山地森林、低山丘陵、旷野、村庄等。飞翔时两个翅膀会快速扇动，悬停于空中观察，发现猎物后折翅俯冲直扑地面目标。红隼的窝种类多样，但是很简陋，有时会侵占鸦、鹊或鹰的巢。',
      img: p3q2
    },
    answerArr: ['喜鹊', '高山兀鹫', '红隼', '红胸黑雁'],
    answer: '红隼'
  },
  panda: {
    question: {
      text: '这位在竹林深处的朋友是谁？',
      img: stripe
    },
    describe: {
      text: '大熊猫是世界上最可爱的动物之一，它有着圆圆的脸颊，大大的黑眼圈，胖嘟嘟的身体，标志性的内八字行走方式，也有解剖刀般锋利的爪子。大熊猫已在地球上生存了至少800万年，被誉为“活化石”和“中国国宝”。大熊猫在很久很久以前是吃肉的哦，经过进化，现在的大熊猫99％的食物都是竹子了。',
      img: p4q2
    },
    answerArr: ['斑马', '大熊猫', '黑熊', '人行道'],
    answer: '大熊猫'
  },
  leopard: {
    question: {
      text: '这对足迹前后都只有4趾，没有爪的痕迹，它的主人是谁呢？',
      img: foot
    },
    describe: {
      text: '雪豹，鞍子河高山生态系统的顶级捕食者。它的前腿有5趾，拇趾高悬在上，后腿有4趾。爪是它们捕猎时抓取、撕裂和打击的武器。它们的足迹前后都只有4趾，也不会有爪的痕迹，因为在行走时，它的爪子收起来了。足迹是否有爪，是区分猫科动物和犬科动物的最明显特征。',
      img: p5q2
    },
    answerArr: ['雪豹', '北极狐', '灰狼', '黑背胡狼'],
    answer: '雪豹'
  }
}

export default {
  data () {
    return {
      describes,
      current: this.$route.params.name,
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
    CloseIcon,
    Bg
  },
  methods: {
    handleChoose (item, event) {
      event.preventDefault()
      this.status = item === describes[this.$route.params.name].answer
      this.showModal = true
    }
  },
  mounted () {
  }
}
</script>
<style lang="scss" scoped>
  .question {
    font-size: 1.6rem;
    font-family: "FZZHengHei-B-GBK", Arial, Helvetica, sans-serif;
  }
  .img {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    border: 3px solid #69503c;
    background-color: #fff;
    text-align: center;
    overflow: hidden;
    &.min {
      height: 15vh;
      img {
        max-width: 100%;
        max-height: 60%;
      }
    }
    &.full-img {
      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }
    img {
      max-width: 100%;
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
