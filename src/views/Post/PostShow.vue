<template>
  <div class="post-show">
    <!-- <div>
        <ul>
            <li>
                <div class="show-li">
                    <a class="show-info" href="">
                        <img src="https://img.bosszhipin.com/beijin/mcs/chatphoto/20180228/b5919329a5813e7c5c411febb87bbad4cfcd208495d565ef66e7dff9f98764da.jpg?x-oss-process=image/resize,w_120,limit_0" alt="">
                        <div class="show-text">
                            <h4>名称</h4>
                            <p>行业类型</p>
                        </div>
                    </a>
                </div>
            </li>
        </ul>
    </div> -->
    <el-row :gutter="40">
     <el-col :xs="24" :sm="24" :lg="4" v-for="(item,index) in arr" :key="index">
        <el-card>
            <img src="https://img.bosszhipin.com/beijin/mcs/chatphoto/20180228/b5919329a5813e7c5c411febb87bbad4cfcd208495d565ef66e7dff9f98764da.jpg?x-oss-process=image/resize,w_120,limit_0" class="image">
            <div style="padding: 14px;">
                <span>{{item.name}}</span>
                <div class="bottom clearfix">
         
                <time class="time">{{currentDate}}</time>
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
                 {name:"名称1"},
                 {name:"名称2"},
                 {name:"名称3"},
                 {name:"名称4"},
                 {name:"名称5"},
                 {name:"名称6"},
                 {name:"名称7"},
                 {name:"名称8"},
                 {name:"名称5"},
                 {name:"名称6"},
                 {name:"名称7"},
                 {name:"名称8"},
                 {name:"名称5"},
                 {name:"名称6"},
                 {name:"名称7"},
                 {name:"名称8"},
             ]
        }
    },
    components:{

    }
}
</script>

<style>
/* .post-show{
    margin-top: 20px;
    /* width: 300px; */
    
    /* display: block; */
    

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
    width: 100%;
    display: block;
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