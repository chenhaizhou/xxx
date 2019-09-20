<template>
  <ol>
    <li v-for="item in items" v-bind:key="item">
      <div class="button" v-on:click="handleSelect(item, $event)">{{item}}</div>
    </li>
  </ol>
</template>
<script>
export default {
  name: 'choose',
  props: {
    items: Array,
    handleChoose: Function
  },
  data () {
    return {
    }
  },
  methods: {
    handleSelect (item, event) {
      event.preventDefault()
      this.$emit('handleChoose', item, event)
    }
  }
}
</script>
<style lang="scss" scoped>
  ol {
    width: 80%;
    margin: 3rem auto 2rem;
    padding: 1.5rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 3rem;
  }
  li {
    position: relative;
    z-index: 0;
    font-family: "FZZHengHei-B-GBK", Arial, Helvetica, sans-serif;
    font-size: 1.6rem;
    list-style: none;
    counter-increment: my;
    color: #69503C;
    .button::before{
      content: counter(my,upper-latin);
      position: absolute;
      left: 35px;
    }
  }
  .button {
    box-sizing: border-box;
    width: 123px;
    height: 40px;
    margin: 0 auto;
    line-height: 40px;
    background-size: contain;
    background-image: url(../assets/images/button.png);
    background-repeat: no-repeat;
    padding-left: 30px;
    text-align: center;
  }
</style>
