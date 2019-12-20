<template>
  <div class="footer">
      <div class="Category">
        <h5 class="cat">Category</h5>
        <ul>
          <li class="cat"><router-link to="/" class="link">The Latest News</router-link>|</li>
          <li class="cat"><router-link to="/random" class="link">Random News</router-link>|</li>
          <li class="cat"><router-link to="/technology" class="link">Technology</router-link>|</li>
          <li class="cat"><router-link to="/sport" class="link">Sport</router-link></li>
        </ul>
      </div>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src

export default {
  name: 'footer'
}

</script>

<style scoped>
.footer {
  background-color: rgb(32, 32, 41);
  display: flex;
  justify-content: center;
  padding: 2rem;
  color: white;
  margin-top: 5rem;
}
ul {
  list-style: none;
  text-align: left;
}
li {
  float: left;
}
.link {
  padding: 0 2rem;
}
.cat {
  color: rgb(103, 103, 131);
}
</style>
