<template>
  <div id="home">
    <div class="name">
      <h1>Michaela Wagner</h1>
      <p>Full Stack Developer</p>
      <a href="#about"><button>More About Me!</button></a> 
    </div>
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
  background: url('../assets/jungle.jpg');
  // <a href="https://www.vecteezy.com/free-vector/jungle-background">Jungle Background Vectors by Vecteezy</a>
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5em;
}

.name {
  text-align: center;
  padding: 10px;
  background: rgba(255, 255, 255, 0.61);
  border: 10px double #2c3e50;
  border-collapse: separate; 

  button {
    background: #2c3e50;
    font-size: 1rem;
    padding: 5px 10px;
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
}




</style>
