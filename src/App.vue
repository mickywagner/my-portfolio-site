<template>
  <div id="app">
    <Home />
    <About />
    <Projects />
  </div>
</template>

<script>

import Home from './components/Home.vue'
import About from './components/About.vue'
import Projects from './components/Projects.vue'

export default {
  name: 'App',
  components: {
    Home,
    About,
    Projects
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
