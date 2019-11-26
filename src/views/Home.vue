<template>
  <div class="home">
    <!--Can be better way to write below components -->
    <Items></Items>
    <Item2></Item2>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import NewsDetails from '@/components/NewsDetails.vue'
import Items from '@/components/Items.vue'
import Item2 from '@/components/Item2.vue'
//import axios libary for API fetching//
import axios from "axios"


export default {
  name: 'home',
  components: {
    NewsDetails,
    Items,
    Item2
  },

}
</script>

<style scoped>
/* 10 Items will display rows on large screen */
@media screen and (min-width: 600px) {
  .home {
  display: flex;
  justify-content: center;
  };

}

</style>