<template>
  <div id="home">
    <Nav />
    <div>
      <a href="#about">
        <v-btn
          outlined
          x-large
          dark
        >
            More About Me   
        </v-btn>
      </a>
    </div>
  </div>
</template>

<script>
import Nav from "./Navigation";

export default {
  name: 'Home',
  components: {
    Nav,
  }
}
</script>

<style lang="scss" scoped>
#home {
  height: 100vh;
  width: 100vw;
  background: url('../assets/me.jpg');
  // <a href="https://www.vecteezy.com/free-vector/jungle-background">Jungle Background Vectors by Vecteezy</a>
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.v-app-bar {
  max-height: 60px;
  width: 100vw;
}

.v-btn {
  margin-bottom: 50px;
}




</style>
