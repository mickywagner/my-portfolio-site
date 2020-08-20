<template>
    <div class="projects" id="projects">
        <v-app-bar
            dark
            color="light-blue darken-4"
        >
        <v-toolbar-title>Projects</v-toolbar-title>
        </v-app-bar>
        <v-layout class="project-item">
            <v-flex xs6>
                <project-card />
                <project-card />
            </v-flex>
            <v-flex xs6 ml-10>
                <project-card />
                <project-card />
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
import ProjectCard from '@/components/ProjectCard'

export default {
    name: "Projects",
    components: {
        ProjectCard
    }
}

</script>

<style lang="scss" scoped>
.projects {
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 5fr;
}

.project-item {
    grid-area: "pi";
    padding: 30px;
}



</style>