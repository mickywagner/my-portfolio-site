<template>
    <v-card elevation-2>
        <v-img
              src="@/assets/logo.svg"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            ></v-img>
        <v-card-title>Project Name</v-card-title>
        <v-card-subittle>Short description of the project goes here</v-card-subittle>
    </v-card>
</template>

<script>
export default {
    name: "ProjectCard"
}

</script>

<style lang="scss" scoped>

.v-card {
    margin-top: 10px;
}


</style>