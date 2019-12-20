
<!--Item details/Modal content-->
<template>
  <div class="details">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1 class="mt-4">{{ newsdetail.title }}</h1>
                <span>By:</span>{{newsdetail.author}}
            </div>
            <div class="col-md-12">
                <span>Published:</span>{{newsdetail.publishedAt}}
            </div>
            <div class="col-md-12">
              <div class="row img-container col-md-12">
                  <img class="img" :src="newsdetail.urlToImage" >
              </div>
            </div>
        </div>
        <p>{{ newsdetail.content }}</p>
        <br/>
        <span>Read more: </span><a target="_blank" :href="newsdetail.url">{{ newsdetail.url }}</a>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'NewsDetails',
  props : {
    //import to declare the type of newsdetail //
      newsdetail: Object
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*align the image center */
.img-container {
  margin: 2em auto;
  width: 90%;
}
.img {
  width:100%;
  object-fit: cover;

}
</style>
