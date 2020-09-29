<template>
  <div id="re">
      <!-- 轮播图占位 -->
      <swiper/>
      <!-- 输入框 -->
      <div class="search-input"><search-input></search-input></div>
        <div class="crumbs"><crumbs></crumbs></div>
  </div>
</template>

<script>
import Swiper from './Swiper';
import SearchInput from './SearchInput'
import Crumbs from './Crumbs'
export default {
    name:'Home',
    components:{
        Swiper,
        SearchInput,
        Crumbs,
    }
}
</script>

<style>
/* .search-input{
    margin-top: 35px;
}
.crumbs{
    margin-left: 60px;
    padding: 10px;
    border:1px solid #C0C0C0 ;
    text-align: center;
    font-family: "微软雅黑";
    font-size: 5;
    width: 400px;
} */
#re{
    overflow: hidden;
}
</style>