<template>
  <div>
      <!-- 轮播图占位 -->
      <swiper/>
      <!-- 输入框 -->
      <div class="search-input"><search-input></search-input></div>

  </div>
</template>

<script>
import Swiper from './Swiper';
import SearchInput from './SearchInput'
export default {
    name:'Home',
    components:{
        Swiper,
        SearchInput,
    }
}
</script>

<style>
.search-input{
    margin-top: 35px;
}
</style>