<template>
    <v-card elevation-5>
        <v-img
              :src="project.img"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
            <v-card-title>{{project.title}}</v-card-title>
        </v-img>
        <v-card-actions>
            <v-icon>mdi-github</v-icon> <a :href="project.github">View Github Repo</a>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    name: "ProjectCard",
    props: [
        'project',
    ]
}

</script>

<style lang="scss" scoped>

.v-card {
    margin: 10px;
    flex-shrink: 1;
    flex-grow: 1;
}


</style>