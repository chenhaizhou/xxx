<template>
  <div id="app">
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
</style>
