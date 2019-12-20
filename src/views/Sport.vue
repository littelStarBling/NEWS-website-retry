<template>
  <div class="cate-container">
    <div class="each-item" v-bind:key="noticias.name" v-for="noticias in news.articles">
      <div class="image-container">
        <img class="img"  :src="noticias.urlToImage">
      </div>
      <div class="news-title">
        <p>{{ noticias.title }}</p>
      </div>
      <b-button v-b-modal.modal class="btn-sm btn-primary mb-3" v-on:click="newsDetails(noticias)" >Read More</b-button>
    </div>
  </div>
</template> 

<script lang="ts">
// @ is an alias to /src
import NewsDetails from '@/components/NewsDetails.vue'
//import axios libary for API fetching//
import axios from "axios"


export default {
  name: 'sport',
  components: {
    NewsDetails
  },
  data(){
    return {
      news:[],
      newsdetail: Object
      }
  },
  methods: {
  newsDetails(detail:any){
    this.newsdetail= detail
    }
  },
  created(){
    axios.get('https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=e351d24b45df4eb09e93286cca7833c5')
    .then(res => this.news = res.data)
    .catch(err => console.log(err))
  }
}

</script>


<style scoped>
.cate-container {
  margin-top: 7rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

</style>