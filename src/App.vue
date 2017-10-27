<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app',
  components:{
  
  }
}
</script>

<style>
    html,body{margin:0px;padding:0px;}
    h1,h2,h3,h4,h5{margin: 0px;}
    input{outline: none;}
    ul,li{margin:0px;padding:0px;list-style: none;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
