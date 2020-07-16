<template>
  <div class="home">
    <div class="name">
      <h1>Michaela Wagner</h1>
      <p>Full Stack Developer</p>
      <a href="#about"><button>About</button></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style lang="scss" scoped>
.home {
  height: 100vh;
  width: 100vw;
  background: url('../assets/tempBG.jpg');
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 10px double #2c3e50;
  border-collapse: separate;
  font-size: 1.5em;
}

.name {
  text-align: center;
  padding: 10px;
  background: rgba(255, 255, 255, 0.61);
  border: 10px double #2c3e50;
  border-collapse: separate; 
}

button {
  background: #2c3e50;
  padding: 5px;
  text-transform: uppercase;
  border-radius: 5px;
  color: white;
  border: none;
  box-shadow: 1px 1px 5px gray;
  &:hover {
    color: #2c3e50;
    background: white;
  }
  &:focus {
    outline: none;
  }
}


</style>
