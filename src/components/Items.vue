<template>
  <div class="items">

<!-- First item -->
    <div class="item">
      <div class="row mt-5">
        <div class="col-md-10" >
    <!-- Item -->

            <div class="each-item">
              <div class="image-container">
                <img class="img" :src="newsOne.articles[0].urlToImage">
              </div>
              <br/>
              <strong class="title">{{newsOne.articles[0].title}}</strong>
              <br/>
    <!--Button issue: need to be clicked twice to popup its modal-->
              <b-button v-b-modal.modal-multi-1 class="btn-sm btn-primary mb-3" @click="newsDetails(newsOne.articles[0])">Read more</b-button>
            </div>
            
    <!-- Content of first layer modal -->
            <b-modal id="modal-multi-1" size="lg"ok-only no-stacking>
              <NewsDetails v-bind:newsdetail="newsdetail"></NewsDetails>
              <div class="line"></div>

    <!-- Buttons of relevent news -->

              <h3>Latest Relevents News</h3>
              <div class="relevent-article">
                <h5>{{newsOne.articles[1].title}}</h5>
                <b-button  class="btn-sm btn-primary mb-3"  @click="newsDetails(newsOne.articles[1])" >Read More</b-button>
                <h5>{{newsOne.articles[2].title}}</h5>
                <b-button class="btn-sm btn-primary mb-3"  @click="newsDetails(newsOne.articles[2])" >Read More</b-button>
                <h5>{{newsOne.articles[3].title}}</h5>
                <b-button  class="btn-sm btn-primary mb-3"  @click="newsDetails(newsOne.articles[3])" >Read More</b-button>
              </div>
            </b-modal>
          </div>
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
  name: 'items',
  props : {

      },
  data(){
    return {
      newsOne:[],
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
    axios.get('https://newsapi.org/v2/everything?q=bitcoin&from=2019-10-25&sortBy=publishedAt&apiKey=e351d24b45df4eb09e93286cca7833c5')
    .then(res => this.newsOne = res.data)
    .catch(err => console.log(err))
  }
}

</script>

<style scoped>
.title {
   width:20em;
}
.each-item {
  display: flex;
  align-items:center;
  flex-direction: column;
  padding: 1em;
}
.image-container {
  width:15em;
  height:10em;
  background-color: white;
  margin: 0 auto;
}
.img {
  width:100%;
  height: 100%;
  object-fit: cover;
}
.line {
  margin: 1em auto;
  background-color: gray;
  width: 100%;
  height: 1px;
}

@media screen and (min-width: 600px) {
  .items {
  margin-top: 5em;
  }

}

</style>