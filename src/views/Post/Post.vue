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
            industryTitles:["不限","电子商务","自媒体","医疗健康","汽车生产","计算机软件","广告营销","互联网","电子通信","大数据","其他行业","其他行业","其他行业","其他行业","其他行业","其他行业"],
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