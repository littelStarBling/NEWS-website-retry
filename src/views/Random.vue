<!--Still work on it-->
<template>
  <div class="random">
    <div class="container">
      <div class="row mt-5">
        <div class="col-md-12">
          <br/>
          <button class="btn-sm btn-primary mb-3"  onClick="window.location.reload();">Other Random News</button>
          <br/>
          <h3>{{ news.articles[random()].title }}</h3>
          <p>Author: {{ news.articles[random()].author }}</p>
          <p>Published at: {{ news.articles[random()].publishedAt }}</p>
          <img :src="news.articles[random()].urlToImage" alt="">
          <p>{{ news.articles[random()].content }}</p>
          <a target="_blank" :href="news.articles[random()].url">{{ news.articles[random()].url }}</a>
          
        </div>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
// @ is an alias to /src
import axios from "axios"

export default {
  name: 'random',
  data () {
    return {
      news:[],
      }
  },
  methods: {
    random: function (){
      return Math.floor(Math.random()*20)
    }
  },
  created(){
    axios.get('https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=e351d24b45df4eb09e93286cca7833c5')
    .then(res => this.news = res.data)
    .catch(err => console.log(err))
  }
  
}
</script>

<style scoped>
/**center image */
.img-container {
  margin: 2em auto;
  width: 90%;
}
.img {
  width:100%;
}
.col-md-12 {
  margin-top: 5rem;
}

</style>