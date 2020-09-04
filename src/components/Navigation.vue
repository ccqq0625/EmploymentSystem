<template>
  <div class="nav-menu">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect"
        background-color="#409EFF"
        text-color="#fff"
        @click="itemClick"
        >
    <el-menu-item index="1">首页</el-menu-item>
    <el-submenu index="2">
    <template slot="title" path="/home">待定1</template>
    <el-menu-item index="2-1">选项1</el-menu-item>
    <el-menu-item index="2-2">选项2</el-menu-item>
    <el-menu-item index="2-3">选项3</el-menu-item>
    <el-submenu index="2-4">
      <template slot="title">选项4</template>

      <el-menu-item index="2-4-1">选项1</el-menu-item>
      <el-menu-item index="2-4-2">选项2</el-menu-item>
      <el-menu-item index="2-4-3">选项3</el-menu-item>
    </el-submenu>
  </el-submenu>
  <!-- <el-menu-item index="3" disabled>待定</el-menu-item> -->
  <el-menu-item index="3" path="/test">待定2</el-menu-item>
  <el-menu-item index="4">待定3</el-menu-item>
</el-menu>
<div class="line"></div>

  </div>
</template>

<script>
export default {
    name:"Navigation",
    props:{
        path:{
            type:String,
        }
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
        itemClick(){
            this.$router.replace(this.path);
            console.log(this.path);
        }
    }
}
</script>

<style>
.el-menu-demo{
    height: 25;
}
</style>