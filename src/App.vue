<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style  lang="scss">
html {
  min-height: 100%;
  height:100%;
  width: 100%
}
body {
  margin: 0;
  padding: 0;
  min-height: 100%;
  height:100%;
  width: 100%;
  background-color: #eef1f6;

}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0px;
  padding: 0px;
  height:100%;
  width: 100%;
  min-height: 100%;
}

</style>
