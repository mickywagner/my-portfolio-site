<template>
  <div class="projects" id="projects">
    <v-app-bar dark color="light-blue darken-4">
      <v-toolbar-title>Projects</v-toolbar-title>
    </v-app-bar>
    <v-layout class="project-item flex-wrap">
      <v-row
        class="flex-xs-wrap"
        v-for="project in projects" :key="project.id">
          <project-card :project="project" />
      </v-row>
    </v-layout>
    <p>
      Check out more projects on
      <a href="https://github.com/mickywagner">my Github</a>
    </p>
  </div>
</template>

<script>
import ProjectCard from "@/components/ProjectCard";

export default {
  name: "Projects",
  components: {
    ProjectCard,
  },
  data() {
    return {
      projects: [
        {
          id: 1,
          title: "Node/Express Inventory App",
          github: "https://github.com/mickywagner/express-inventory",
          site: "https://wandering-turtle.herokuapp.com/store/itemcopies",
          img: require('../assets/inventoryapp.png'),
        },
        {
          id: 2,
          title: "Picsum",
          github: "https://github.com/mickywagner/picsum-app",
          site: "https://mickywagner.github.io/",
          img: require('../assets/picsum.png'),
        },
        {
          id: 3,
          title: "Vue Library",
          github: "https://github.com/mickywagner/vue-library",
          site: "https://mickywagner.github.io/vue-library/",
          img: require('../assets/library.png'),
        },
        {
          id: 4,
          title: "REST Blog API",
          github: "https://github.com/mickywagner/blog_rest_api/",
          site: "https://mickywagner.github.io/blog_rest_api/",
          img: require('../assets/blog.png'),
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.projects {
  display: grid;
  height: 100vh;
  width: 100vw;
  overflow: auto;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 5fr;
}

.project-item {
  padding: 30px;
}

p {
  text-align: center;
}
</style>