<template>
  <div id="app">
    <div style="display:none"><img src='./assets/images/logo2.png' /></div>
    <router-view/>
  </div>
</template>

<style lang="scss">
  @font-face {
    font-family: 'FZZhengHei-B-GBK';
    src: url('./assets/font/FZZCHK--GBK1-0.woff2') format('woff2'),
        url('./assets/font/FZZCHK--GBK1-0.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  html {
    font-size: 62.5%;
  }
  body {
    margin: 0;
    padding: 0;
  }
  ol, ul {
    list-style: none;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  main, .wrapper {
    margin: 0;
    padding: 0;
    height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
  }
  h1, h2, h3, h4 ,h5, h6 {
    font-family: "FZZHengHei-B-GBK", Arial, Helvetica, sans-serif;
  }
  .question-box {
    position: relative;
    z-index: 1;
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 5rem;
    margin: 2rem auto;
    padding: 1.5rem 3rem;
    border: 1px solid #42332F;
    background-color: rgba(255, 255, 255, .7);
    font-size: 1.8rem;
    outline: 3px solid #4e3934;
    font-family: "FZZHengHei-B-GBK", Arial, Helvetica, sans-serif;
    p {
      padding: 0;
      margin: 0;
      text-align: center;
    }
  }
  .button-circle {
    position: fixed;
    bottom: 60px;
    left: 50%;
    display: block;
    width: 100px;
    height: 100px;
    transform: translateX(-50%);
    line-height: 100px;
    text-align: center;
    font-size: 2.6rem;
    font-weight: bold;
    color: #fff;
    border: 5px solid #fff;
    border-radius: 50%;
    z-index: 1;
    box-shadow: 0 0 10px 5px #159588 inset, 0 0 3px 3px #159588;
    background-color: rgba(0, 0, 0, .5);
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
    &.last {
      display: flex;
      font-size: 1.8rem;
      line-height: 1.2;
      align-items: center;
      justify-content: center;
    }
  }
</style>
