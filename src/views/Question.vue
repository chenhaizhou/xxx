<template>
  <main>
    <div class="content-box">
      <AnimalIcons />
      <Question1 />
    </div>
    <Copyright />
  </main>
</template>

<script>
import Copyright from '../components/Copyright'
import AnimalIcons from '../components/AnimalIcons'
import Question1 from '../components/Question1'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    Copyright,
    AnimalIcons,
    Question1
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
 main {
   overflow: hidden;
   background-image: url(../assets/images/bg/bg2.png);
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
