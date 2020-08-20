<template>
    <div class="projects" id="projects">
        <h1>Projects</h1>
        <v-layout>
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
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 5fr;
  
    h1 {
        grid-area: "h";
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
    }
}

.project-item {
    grid-area: "pi";
    background: pink;
}


</style>