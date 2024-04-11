<template>
  <the-top></the-top>
<!--  <img alt="Vue logo" src="./assets/logo.png">-->
<!--  <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  <router-view/>
</template>

<script>

import TheTop from "@/components/TheTop.vue";

export default {
  name: 'App',
  components: {
    TheTop
  }
}
</script>

<style lang="scss">
@import "assets/css/basic.css";
@import "assets/css/admin.css";
@import "assets/css/demo.css";
@import "assets/css/hmstyle.css";
/*#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
</style>
