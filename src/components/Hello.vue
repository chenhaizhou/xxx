<template>
  <main>
    <article class="hello">
      <section class="content-box">
        <div class="content">
          <h3>活动说明</h3>
          <strong>找呀找呀找朋友，找到一个好朋友~</strong>
          <p>2019年10月4日第88个世界动物日，科普中国网与世界动物保护协会、大自然保护协会、成都大熊猫基地、国际爱护动物基金会、保护国际基金会共同发起“心动WE来•找朋友”主题活动。</p>
          <h3>活动时间</h3>
          <p>活动时间：9月23日-10月8日</p>
          <h3>活动规则：</h3>
          <p>想成为一名保护野生动物的探险家，就要通过寻找线索，点亮图腾。成功收集五个动物图腾的用户，可参与抽奖。中奖用户请留下详细信息，工作人员将于活动结束后三个工作日内与您联系。</p>
          <p>本次活动解释权归主办方所有</p>
        </div>
      </section>
    </article>
    <router-link to="/about" class="button">下一页</router-link>
  </main>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
 main {
   overflow: hidden;
   background-image: url(../assets/images/bg/bg1.png);
 }
 article {
   box-sizing: border-box;
   overflow: hidden;
   width: 80vw;
   height: 60vh;
   padding: 3px;
   margin: 15vh auto auto;
   background-color: #E9DFCF;
   border: 5px solid #42332F;
   border-radius: 10px;
 }
 section {
  box-sizing: border-box;
  height: 100%;
  border: 3px solid #938673;
  border-radius: 5px;
  box-shadow: 0 0 5px 5px rgba(0, 0, 0, .2) inset;
 }
 h3 {
   margin: 1.5rem auto .8rem;
   font-size: 2rem;
   font-weight: bold;
   color: #262624;
 }
 .content {
   box-sizing: border-box;
   height: 100%;
   padding: 1rem;
   font-size: 1.6rem;
   overflow: auto;
   text-align: left;
   color: #46433F;
   p {
     margin: .5rem 0 1.5rem;
   }
   strong {
    color: #1a6825
  }
 }
 .button {
   position: absolute;
   top: 70vh;
   right: 5vw;
   width: 160px;
   height: 166px;
   background-size: contain;
   background-image: url(../assets/images/bag.png);
   background-repeat: no-repeat;
   text-indent: -99em;
 }
</style>
