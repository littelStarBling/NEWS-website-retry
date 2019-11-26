<!--The generated navbar component will replace the default router in App.vue-->
<template>
<!--Navbar is fixed on top-->
  <nav class="navbar fixed-top navbar-expand-lg navbar-light  bg-light">
    <div class="nav-item active">
      <router-link to="/" class="nav-link">NEWS</router-link>
    </div>
    <!--The hamburger doesn't work. Even though it is a default code from bootstrap -->
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <router-link to="/random" class="nav-link">Random</router-link>
      </li>
      <li class="nav-item dropdown">
        <b-nav-item-dropdown text="Category" right>
          <!--Page links need to be updated & create those pages-->
          <b-dropdown-item href="#">Technology</b-dropdown-item>
          <b-dropdown-item href="#">Sport</b-dropdown-item>
        </b-nav-item-dropdown>
      </li>
    </ul>
  </div>
</nav>
</template>

<script lang="ts">
export default {
  name: 'Navbar',
  props : {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
