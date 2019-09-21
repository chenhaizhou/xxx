<template>
  <div class="wrapper">
    <div class="question-box">
      <p>
        选择想要守护的动物的卡牌
      </p>
    </div>
    <ul class="card-list">
      <li v-for="item in animals" v-bind:key="item">
        <CardBox :name="item" />
      </li>
    </ul>
  </div>
</template>
<script>
import CardBox from '@/components/CardBox'
import { steps } from '@/config/config'
export default {
  data () {
    return {
      animals: steps
    }
  },
  components: {
    CardBox
  }
}
</script>
<style lang="scss" scoped>
  .wrapper {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url(../assets/images/bg/bg7.png);
  }
  .content-box {
    overflow: hidden;
  }
  .question-box {
    margin: -10% auto 4rem;
  }
  .card-list {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
    li {
      margin: 1rem 1.5rem;
      &:nth-child(1) {
        margin-left: 10%;
      }
      &:nth-child(2) {
        margin-right: 10%;
      }
    }
  }
</style>
