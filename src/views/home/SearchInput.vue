<template>
  <div class="search-input">
      
       <el-form :inline="true" class="demo-form-inline">
            <el-form-item label="职业类型" style="left:30px">
                <el-input  placeholder="请输入"/>
            </el-form-item>

            <el-form-item label="理想薪资">
                <el-input  placeholder="请输入"/>
            </el-form-item>
      
            <el-form-item label="待定">
                <el-input  placeholder="请输入"/>
            </el-form-item>
            <el-form-item label="待定">
                <el-input  placeholder="请输入"/>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" >查询</el-button>
            </el-form-item>
       </el-form>
      
      
  </div>
</template>

<script>
export default {
    name:'SearchInput',
    props:{
        // input:String
    },
    data(){
        return{
        //    lab:{
        //        title:["职业类型","理想薪资","其他"],
              
        //    }
        }
    }
}
</script>

<style>


</style>