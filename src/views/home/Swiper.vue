<template>
  <div class="swiper">
      <!-- <p>这是轮播图</p> -->
      <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="item in imagesBox" :key="item">
        <!-- <img :src="item.idView" class="image"> -->
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
          // {id:0,idView:require("../../assets/img/@6@MDS[%4BMK69421Q1`4W1.png")},
          // {id:1,idView:require("../../assets/img/CNT_OBUBM01I4PZ(%W_VQ0P.png")},
          // {id:2,idView:require("../../assets/img/icons.png")},
          // {id:3,idView:require("../../assets/img/PKWC~%AL1{(~93JHU%}BM_0.png")}
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
    }
    .el-carousel__item h3 {
    color:red;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: aqua;
    
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: green;
    
  }
</style>