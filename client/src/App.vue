<template>
  <v-app>
    <v-main>
      <Home />
      <About />
      <Projects />
      <Contact />
    </v-main>
  </v-app>
</template>

<script>
import Home from '@/components/Home';
import About from '@/components/About'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

export default {
  name: 'App',

  components: {
    Home,
    About,
    Projects,
    Contact
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
#app {
  background: rgb(54, 54, 54);
  color: white;
  max-width: 100%;
  overflow-x: hidden;

}
</style>
