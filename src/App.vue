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
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
main {
  margin: 0;
  padding: 0;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
}
h1, h2, h3, h4 ,h5, h6 {
  font-family: "FZZHengHei-B-GBK", Arial, Helvetica, sans-serif;
}
</style>
