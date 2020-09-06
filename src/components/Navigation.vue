<template>
  <div class="nav-menu">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect"
        background-color="#409EFF"
        text-color="#fff"
        :router="true"
        >
    <el-menu-item index="/home">首页</el-menu-item>
    <el-submenu index="2">
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
  </el-submenu>
  <!-- <el-menu-item index="3" disabled>待定</el-menu-item> -->
  <el-menu-item index="/post">企业信息</el-menu-item>
  <el-menu-item index="/test">待定3</el-menu-item>
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
        // itemClick(){
        //     this.$router.replace(this.path);
        //     console.log(this.path);
        //     this.$emit("tabClick");
        // }
    }
}
</script>

<style>

</style>