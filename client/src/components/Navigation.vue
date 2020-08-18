<template>
  <v-app-bar
    color="light-blue darken-4"
    dark
    src="@/assets/tempBG.jpg"
    fade-img-on-scroll
    
  >
    <v-toolbar-title>
      <a href="#home">
        Michaela Wagner
      </a>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    
    <v-toolbar-items id="main-nav">
       <v-tab>
        <a href="#about">About</a>
      </v-tab>
      <v-tab>
        <a href="#projects">Projects</a>
      </v-tab>
      <v-tab>
        <a href="#contact">Contact</a>
      </v-tab>
      <v-tab>
        <a href="">Blog</a>
      </v-tab>
      <v-tab>
        <a href="">Resume</a>
      </v-tab>
    </v-toolbar-items>

      <v-app-bar-nav-icon 
      id="nav-icon" 
      @click="drawer = !drawer"
    ></v-app-bar-nav-icon>

    <v-navigation-drawer  
      v-model="drawer" 
      class="light-blue darken-4"
      :expand-on-hover="expandOnHover"
      :right="right"
      :permanent="permanent"
      app
      >
       <v-tab>
        <a href="#about">About</a>
      </v-tab>
      <v-tab>
        <a href="#projects">Projects</a>
      </v-tab>
      <v-tab>
        <a href="#contact">Contact</a>
      </v-tab>
      <v-tab>
        <a href="">Blog</a>
      </v-tab>
      <v-tab>
        <a href="">Resume</a>
      </v-tab>
    </v-navigation-drawer>
  </v-app-bar>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      drawer: false,
      right: true
    }
  }
};
</script>

<style lang="scss" scoped>
a {
  color: white;
}

@media only screen and (min-width: 650px) {
  #nav-icon {
    display: none;
  }
}

@media only screen and (max-width: 650px) {
  #main-nav {
  display: none;
}
}

</style>
