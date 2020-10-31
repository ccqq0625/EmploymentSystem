<template>
  <div class="nav-menu">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect"
        background-color="rgb(32, 35, 41)"
        text-color="white"
        active-text-color="rgb(93,213,200)"
        :router="true"
        >
    <div class="menu-sel">
    <el-menu-item index="/home">首页</el-menu-item>
    <el-menu-item>待定页</el-menu-item>
  <el-menu-item index="/post">企业信息</el-menu-item>
  
  
   <el-menu-item index="/show">数据分布</el-menu-item>

       <el-submenu>
          <template slot="title">信息查询</template>
          <el-menu-item index="/StuInfo">学生信息</el-menu-item>
          <el-menu-item index="/ComInfo">企业信息</el-menu-item>
        </el-submenu>
    
    <el-menu-item index="/postmatch" @click="reload()">职业匹配</el-menu-item>
    </div>
   
   <div class="menu-but">
        <el-button size="mini" round @click.native="loginClick" active-text-color="rgb(93,213,200)">登录</el-button>
        <el-button size="mini" round @click.native="regClick">注册</el-button>
   </div>
</el-menu>
  </div>

</template>

<script>
export default {
    name:"Navigation",
    props:{
        path:String,
    },
    data() {
      return {
        activeIndex: '1',
       
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        // console.log(key)
        // console.log(keyPath)
        },

       reload(){
         if(this.$router.history.current.path==='/postmatch')
        {
          this.$router.go(0)
        }
       },
        // itemClick(path){
        //     this.$router.replace(path);
        //     console.log(this.path);
        //     this.$emit("tabClick");
        // }
        loginClick(){
          this.$router.replace("/login");
          // console.log(path);
        },
        regClick(){
          this.$router.replace("/register");
        },
    },
  
}
</script>

<style>
.el-menu{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.el-menu-item{
  margin-left: 10px;
}
.menu-sel{
    display: flex;
    align-items: center;
}
.el-submenu__icon-arrow
{
  position: static ! important;
  margin-top: -1px ! important;
}
</style>