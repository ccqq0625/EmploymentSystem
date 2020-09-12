<template>
  <div>
      <post-views :cityTitles="cityTitles" :industryTitles="industryTitles" :numberTitles="numberTitles"></post-views>
       <post-show></post-show>
  </div>
</template>

<script>
import PostViews from "./PostViews";
import PostShow from "./PostShow";
export default {
    name:'Post',
    data(){
        return{
            cityTitles:["全国","北京","上海","深圳","杭州","广东","城市1","城市2","城市3","城市4","城市5","城市6","城市","城市","城市","城市","城市","城市","城市","城市","城市","城市"],
            industryTitles:["不限","后端开发","移动开发","测试","运维/技术支持","数据","项目管理","硬件开发","通信","电子/半导体","高端技术职位","人工智能","销售技术支持","其他技术支持"],
            numberTitles:["不限","0-20人","20-99人","100-499人","500-999人","1000-9999人","10000人","","","","",""]
        }
    },
    components:{
        PostViews,
        PostShow,
    }
}
</script>

<style>

</style>