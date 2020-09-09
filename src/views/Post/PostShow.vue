<template>
  <div class="post-show">
    <el-row :gutter="40">
     <el-col :xs="24" :sm="24" :lg="6" v-for="(item,index) in arr" :key="index">
        <el-card>
            <img src="https://img.bosszhipin.com/beijin/mcs/chatphoto/20180228/b5919329a5813e7c5c411febb87bbad4cfcd208495d565ef66e7dff9f98764da.jpg?x-oss-process=image/resize,w_120,limit_0" class="image">
            <div style="padding: 14px;">
                <span>{{item.name}}</span>
                <div class="bottom clearfix">
                <!-- <time class="time">{{currentDate}}</time> -->
                <time class="time">热招：<u class="h">{{item.post}}</u>------{{item.salary}}</time>
                <!-- <el-button type="text" class="button">操作按钮</el-button> -->
                </div>
            </div>
        </el-card>
     </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
    name:"PostShow",
    data(){
        return{
             currentDate: new Date(),
             arr:[
                 {name:"名称1",post:"这里是岗位",salary:"15-30k"},
                 {name:"名称2",post:"这里是岗位",salary:"15-30k"},
                 {name:"名称3",post:"这里是岗位",salary:"15-30k"},
                 {name:"名称4",post:"这里是岗位",salary:"15-30k"},
                 {name:"名称5",post:"这里是岗位",salary:"15-30k"},
                 {name:"名称6",post:"这里是岗位",salary:"15-30k"},
                 {name:"名称7",post:"这里是岗位",salary:"15-30k"},
                 {name:"名称8",post:"这里是岗位",salary:"15-30k"},
                 {name:"名称9",post:"这里是岗位",salary:"15-30k"},
                 {name:"名称10",post:"这里是岗位",salary:"15-30k"},
                 {name:"名称11",post:"这里是岗位",salary:"15-30k"},
             ]
        }
    },
    components:{

    }
}
</script>

<style>
.post-show{
    margin-top: 20px;
    
    
     /* display: block; */
    
}
.h{
    color:#00c2b3;
}
.el-col{
    margin-bottom: 5px;
}
.time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 50%;
    display: block;
    margin: 0 auto;

  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
  
  
   
</style>