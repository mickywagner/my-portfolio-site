<template>
  <nav class="navbar navbar-expand-sm navbar-dark">
    <a class="navbar-brand" href="#">Michaela Wagner</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="#about">
              About <span class="sr-only">(current)</span></a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#projects">Projects</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#contact">Contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="">Blog</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="">Resume</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<style lang="scss" scoped>
.navbar-dark {
    background: #2c3e50;
}

.navbar-brand {
    align-self: flex-start;
}

@media (min-width: 576px) {
    .navbar-expand-sm .navbar-collapse {
    justify-content: flex-end;
}
}


</style>
