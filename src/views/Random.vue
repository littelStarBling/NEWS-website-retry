<!--Still work on it-->
<template>
  <div class="random">
    <div class="container">
      <div class="row mt-5">
        <div class="col-md-12">
          TEST 
<!--interpolation below doesn't work.Have no clud yet-->
          <div>{{news}}</div>
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
      /** The fetched data */
      news:[ ]
      }
  },
  methods: {
  created(){
    axios.get('https://newsapi.org/v2/top-headlines?country=nl&category=entertainment&apiKey=e351d24b45df4eb09e93286cca7833c5')
    .then(res => this.news= res.data)
    .catch(err => console.log(err))
    console.log(this.news)
    }
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

</style>