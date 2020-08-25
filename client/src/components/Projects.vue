<template>
    <div class="projects" id="projects">
        <v-app-bar
            dark
            color="light-blue darken-4"
        >
        <v-toolbar-title>Projects</v-toolbar-title>
        </v-app-bar>
        <v-layout class="project-item flex-wrap">
            <v-col>
                <project-card />
                <project-card />
            </v-col>
            <v-col>
                <project-card />
                <project-card />
            </v-col>
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
    display: grid;
    height: 100vh;
    width: 100vw;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 5fr;
}

.project-item {
    padding: 30px;
}



</style>