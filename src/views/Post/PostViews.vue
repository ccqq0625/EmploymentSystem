<template>
  <div>
      <div class="post-select">
          <el-card class="box-card">
                <span>
                    公司地点
                    <a v-for="item in cityTitles" :key="item.label">{{item}}</a>
                </span><br>
                <span>
                    行业类型
                    <a v-for="item in industryTitles" :key="item.label">{{item}}</a>
                </span><br>
                <span>公司规模
                    <a v-for="item in numberTitles" :key="item.label">{{item}}</a>
                </span>

            </el-card>
      </div>
  </div>
</template>

<script>
export default {
    name:"PostViews",
    props:{
        cityTitles:Array,
        industryTitles:Array,
        numberTitles:Array,
    }

}
</script>

<style>

  .box-card {
    font-size: 16px;
    height: auto;
    padding: 0 !important;
    margin: 0 !important;
    /* border:1px solid rgb(80, 76, 76); */
    height: 100px;
  }
  .box-card span{
     
      display: block;
      left: 10px;
      position: absolute;
       margin: 10px;
      padding-top: 5px; 
      padding-bottom: 5px; 


  }
  a{
      text-decoration:none;
      color: black;
      margin: 5px;
      font-size: 14px;
      padding-left:5px;
      padding-right:5px;

  }
  .box-card {
    width:auto;
    left: 0;
    right: 0;
  }
</style>