<template>
  <div class="post-show">
    <div>
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
    </div>
  </div>
</template>

<script>
export default {
    name:"PostShow",
    data(){
        return{
             currentDate: new Date(),
        }
    },
    components:{

    }
}
</script>

<style>
.post-show{
    margin-top: 20px;
}
.post-show ul{
    list-style:none;
}
.show-li{
    display: block;
    height: 140px;
    width:284px;
    background-color: #ffffff;
    box-shadow: 5px 5px 20px rgba(0,0,0,0.05);
    position: absolute;
    z-index: 10;
    margin: 20px;
}
.show-info img{
    height:60px;
    width: 60px;
    float: left;
    border-radius: 10px;
    border:solid 1px #f2f5fa;
}
.show-text h4{
    float:right;
    height: 25px;
    padding: 5px;
    line-height: 25px;
    font-size: 16px;
    font-weight: 400;
    /* white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis; */
} 
.show-text p{
    padding: 0px;
    margin: 0px;
    height:40px;
    line-height:41px;
    color:#898e9d;
    font-size:12px;
    display:inline-block;
    /* white-space:nowrap;
    -webkit-tap-highlight-color:transparent; */
}
  
  
  
   
</style>