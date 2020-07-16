<template>
  <div id="app">
    <Home />
    <About />
  </div>
</template>

<script>

import Home from './components/Home.vue'
import About from './components/About.vue'

export default {
  name: 'App',
  components: {
    Home,
    About
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
