<template>
    <!-- Seconde item -->
    <div class="item">
      <div class="row mt-5">
        <div class="col-md-12" >

    <!-- Item -->
            <div class="each-item">
              <div class="image-container">
                <img class="img" :src="news.articles[0].urlToImage">
              </div>
              <br/>
              <div class="news-title">
                <strong class="title">{{news.articles[0].title}}</strong>
              </div>
              <br/>
              <!--Button issue: need to be clicked twice to popup the modal-->
              <b-button v-b-modal.modal-multi-5 class="btn-sm btn-primary mb-3" @click="newsDetails(news.articles[0])">Read More</b-button>
            </div>
            
    <!-- Content of first layer modal -->
            <b-modal id="modal-multi-5" size="lg"ok-only no-stacking>
              <NewsDetails v-bind:newsdetail="newsdetail"></NewsDetails>
              <div class="line"></div>

    <!-- Buttons of relevent news -->

              <h3>Latest Relevents News</h3>
              <div class="relevent-article">
                <h5>{{news.articles[1].title}}</h5>
                <b-button  class="btn-sm btn-primary mb-3"  @click="newsDetails(news.articles[1])" >Read More</b-button>
                <h5>{{news.articles[2].title}}</h5>
                <b-button class="btn-sm btn-primary mb-3" @click="newsDetails(news.articles[2])" >Read More</b-button>
                <h5>{{news.articles[3].title}}</h5>
                <b-button  class="btn-sm btn-primary mb-3"  @click="newsDetails(news.articles[3])" >Read More</b-button>
              </div>
            </b-modal>
          </div>
        </div>
      </div>
      </div>
    </div>
</template>

<script lang="ts">
// @ is an alias to /src
import NewsDetails from '@/components/NewsDetails.vue'
import axios from "axios"


export default {
  name: 'item5',
  props : {
    
      },
  data(){
    return {
      news:[],
      newsdetail: Object
      }
  },
  components: {
    NewsDetails
  },
  methods: {
  newsDetails(detail:any){
    this.newsdetail= detail
    }
  },
  created(){
    axios.get('https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=e351d24b45df4eb09e93286cca7833c5')
    .then(res => this.news = res.data)
    .catch(err => console.log(err))
  }
}

</script>
<style scoped>

</style>
