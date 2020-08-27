<template>
  <div id="home">
    <Nav />
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
  // display: flex;
  // align-items: center;
  // justify-content: center;
  // font-size: 1.5em;
}






</style>
