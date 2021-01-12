<template>
  <div id="app">
    <el-container>
      <el-header v-show="$route.meta.navShow"><navigation></navigation></el-header>
      <el-main><router-view/></el-main>
    </el-container>
  </div>
</template>
<script>
import Navigation from './components/Navigation'
export default {
  name:"App",
  components:{
    Navigation,
  },
  methods:{
    tabClick(){
      console.log("跳转成功");
    }
  }
}
</script>
<style lang="scss">
@import './assets/css/base.css';
@import './assets/css/reset.scss';

#app{
  height: 100%;
  background-color: #E9EEF3;
}
.el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    padding: 0 !important;
    margin: 0 !important;
    height: auto !important;
    border: 0;
   
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    //text-align: center;
    height: 100%;
    padding: 0 !important;
    margin: 0 !important;
 
  }
</style>
