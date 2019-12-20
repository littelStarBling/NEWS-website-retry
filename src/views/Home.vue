<template>
  <div class="home-container">
    <div class="home">    
      <Item1></Item1>
      <Item2></Item2>
      <Item9></Item9>
      <item3></Item3>
      <Item4></Item4>
      <Item5></Item5>
      <Item6></Item6>
      <Item7></Item7>
      <Item8></Item8>
      <Item10></Item10>
    </div>
    <Footer></Footer>
  </div>
</template> 

<script lang="ts">
// @ is an alias to /src
import NewsDetails from '@/components/NewsDetails.vue'
import Item1 from '@/components/Item1.vue'
import Item2 from '@/components/Item2.vue'
import Item3 from '@/components/Item3.vue'
import Item4 from '@/components/Item4.vue'
import Item5 from '@/components/Item5.vue'
import Item6 from '@/components/Item6.vue'
import Item7 from '@/components/Item7.vue'
import Item8 from '@/components/Item8.vue'
import Item9 from '@/components/Item9.vue'
import Item10 from '@/components/Item10.vue'
import Footer from '@/components/Footer.vue'
//import axios libary for API fetching//
import axios from "axios"


export default {
  name: 'home',
  components: {
    NewsDetails,
    Item1,
    Item2,
    Item3,
    Item4,
    Item5,
    Item6,
    Item7,
    Item8,
    Item9,
    Item10,
    Footer
  },

}
</script>

<style scoped>
/* 10 Items will display rows on large screen */
@media screen and (min-width: 600px) {
  .home {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  };

}

</style>