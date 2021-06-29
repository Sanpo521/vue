<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App',
    components: {
    }
  }
</script>

<style>
  body{
    margin: 0px;
    padding: 0px;
    min-height: 500px;
  }
  #app {
    margin:0 auto;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
