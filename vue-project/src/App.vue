<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <router-link to="/">首页</router-link>
    <router-link to="/test">测试</router-link>
    <router-link v-bind:to="{name:'test1',params:{name:'liwenlong',age:'30'}}">测试1</router-link>
    <router-link to="/test/test2">测试2</router-link>
    <router-link to="/test/testurl/5/zhangsan">URL</router-link>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
