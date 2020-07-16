<template>
    <div class="projects" id="projects">
        <h1>Projects</h1>
        <!-- Project Grid : Click brings up Modal -->
        <div class="project-item">

        </div>
    </div>
</template>

<script>
export default {
    name: "Projects"
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
        background: lavender;
    }
}

.project-item {
    grid-area: "pi";
    background: pink;
}


</style>