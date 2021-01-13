<template>
  <div class="swiper">
      <!-- <p>这是轮播图</p> -->
      <el-carousel :interval="3000" arrow="always">
        <el-carousel-item v-for="item in imagesBox" :key="item">
        <img :src="item.idView" class="image">
      </el-carousel-item>
      </el-carousel>
  </div>
</template>

<script>
export default {
    name:"Swiper",
    data(){
      return{
        imagesBox:[
           {id:0,idView:require("../../assets/img/1.png")},
           {id:1,idView:require("../../assets/img/2.png")},
           {id:2,idView:require("../../assets/img/3.png")},
           {id:3,idView:require("../../assets/img/4.png")}
          ],
        fiveNews: []
      }
}
}
</script>

<style>
    .swiper{
        padding: 0;
        margin: 0;
        width: 100%;
        margin-bottom: 30px;
        height: 400px;
    }
    .el-carousel__container{
      height: 400px;
    }
    .el-carousel__item h3 {
    font-size: 18px;
    line-height: 300px;
    margin: 0;
  }
   .image{
     width: 100%;
     height: 100%;
     background-attachment: fixed;
     background-size: 100%;
   }

</style>