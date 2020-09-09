<template>
  <div class="projects" id="projects">
    <h1>Projects</h1>
    <v-layout class="project-item flex-wrap">
      <v-flex xs12 md6
        v-for="project in projects" :key="project.id">
          <project-card :project="project" />
      </v-flex>
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
  width: 100vw;
  overflow: hidden;
  grid-template-columns: 1fr;
  grid-template-rows: 125px 1fr;
  border-bottom: 1px dotted gray;

  h1 {
    padding-top: 50px;
    text-align: center;
  }
}

.project-item {
  flex-basis: 200px;
  padding: 0 30px 50px 30px;
}


p {
  text-align: center;
}

</style>