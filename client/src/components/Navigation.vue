<template>
  <v-app-bar
    color="light-blue darken-4"
    dark
    shrink-on-scroll
  >
    <v-toolbar-title>Michaela Wagner</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-tab>
        <a href="#projects">Projects</a>
      </v-tab>
      <v-tab>
        <a class="nav-link" href="#contact">Contact</a>
      </v-tab>
      <v-tab>
        <a class="nav-link" href="">Blog</a>
      </v-tab>
      <v-tab>
        <a class="nav-link" href="">Resume</a>
      </v-tab>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<style lang="scss" scoped>


</style>
