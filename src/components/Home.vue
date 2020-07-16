<template>
  <div class="home">
    <h1>Michaela Wagner</h1>
    <p>Full Stack Developer</p>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  height: 100vh;
  width: 100vw;
  background: url('../assets/tempBG.jpg');
  background-size: cover;
}

</style>
