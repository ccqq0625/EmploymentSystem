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
    <!-- <el-submenu index="2">
    <template slot="title">待定1</template>
    <el-menu-item index="2-1">选项1</el-menu-item>
    <el-menu-item index="2-2">选项2</el-menu-item>
    <el-menu-item index="2-3">选项3</el-menu-item>
    <el-submenu index="2-4">
      <template slot="title">选项4</template>

      <el-menu-item index="2-4-1">选项1</el-menu-item>
      <el-menu-item index="2-4-2">选项2</el-menu-item>
      <el-menu-item index="2-4-3">选项3</el-menu-item>
    </el-submenu>
  </el-submenu> -->
  <!-- <el-menu-item index="3" disabled>待定</el-menu-item> -->
  <el-menu-item index="/post">企业信息</el-menu-item>
  <el-menu-item index="/postmatch">职业匹配</el-menu-item>
  
   <el-menu-item index="">数据分布</el-menu-item>
   <el-menu-item index="/test">待定3</el-menu-item>
    </div>
    <div></div>
   <div class="menu-but">
        <el-button size="mini" round @click.native="menClick" active-text-color="rgb(93,213,200)">登录</el-button>
        <el-button size="mini" round>注册</el-button>
   </div>
</el-menu>
<div class="line"></div>

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
        console.log(key, keyPath);
        },
        // itemClick(path){
        //     this.$router.replace(path);
        //     console.log(this.path);
        //     this.$emit("tabClick");
        // }
        menClick(){
          this.$router.replace("/login");
          // console.log(path);
        }

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

</style>