<template>
  <v-app-bar
    dark
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
        <a href="http://localhost:3000/static/resume.pdf" target="_">Résumé</a>
      </v-tab>
      <!-- Need to Create Blog -->
      <!-- <v-tab>
        <a href="">Blog</a>
      </v-tab> -->
    </v-toolbar-items>

      <v-app-bar-nav-icon 
      id="nav-icon"
      @click="drawer = !drawer"
    ></v-app-bar-nav-icon>

    <v-navigation-drawer  
      v-model="drawer" 
      :right="right"
      color="white"
      absolute
      temporary
      app
      >
    <v-list-item id="title">
        <v-list-item-avatar>
          <v-img src="../assets/tempBG.jpg"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>Michaela Wagner</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    <v-list-item-group>
       <v-list-item>
         <v-icon color="grey"
            >mdi-information-outline</v-icon>
          <a href="#about">
            About
          </a>
      </v-list-item>
      <v-list-item>
        <v-icon color="grey"
            >mdi-briefcase-outline</v-icon>
        <a href="#projects">Projects</a>
      </v-list-item>
      <v-list-item>
        <v-icon color="grey"
            >mdi-email-outline</v-icon>
        <a href="#contact">Contact</a>
      </v-list-item>
      <v-list-item>
        <v-icon color="grey"
            >mdi-file-account-outline</v-icon>
        <a href="http://localhost:3000/static/resume.pdf" target="_">Résumé</a>
      </v-list-item>
      <!-- Need to Create Blog -->
      <!-- <v-list-item>
        <v-icon color="grey"
            >mdi-post-outline</v-icon>
        <a href="">Blog</a>
      </v-list-item> -->
    </v-list-item-group>
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
  },
};
</script>

<style lang="scss" scoped>
#title {
  background: #01579b;
}

.v-tab {
  padding: 0 10px;
}

.v-tab a {
  color: white;
}

.v-list-item {
  text-transform: uppercase;
}

.v-icon {
  margin-right: 10px;
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
