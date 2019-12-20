<template>
  <div class="sport">
    <!--Can be better way to write below components -->
    <TechnologyNews></TechnologyNews>
  </div>
</template> 

<script lang="ts">
// @ is an alias to /src
import NewsDetails from '@/components/NewsDetails.vue'
import TechnologyNews from '@/components/TechnologyNews.vue'
//import axios libary for API fetching//
import axios from "axios"


export default {
  name: 'technology',
  components: {
    NewsDetails,
    TechnologyNews,
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