<template>
  <div id="home">
    <v-card
      shaped
    >
      <v-card-title>Michaela Wagner</v-card-title>
      <v-card-subtitle>
        Web Developer
      </v-card-subtitle>
      <v-card-actions>
      <a href="#about">
        <v-btn
          color="success"
        >
          More About Me!</v-btn>
      </a> 
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style lang="scss" scoped>
#home {
  height: 100vh;
  width: 100vw;
  // background: url('../assets/jungle.jpg');
  // <a href="https://www.vecteezy.com/free-vector/jungle-background">Jungle Background Vectors by Vecteezy</a>
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5em;
}






</style>
