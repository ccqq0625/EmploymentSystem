<template>
  <div class="div">
      <!-- <pdf-test :formInline="formInline" :key="formInline.id"/> -->
       <el-button @click="go" type="primary" class="btn">返回上一页</el-button>
      <table-pdf id="print" ref="print" :formInline="formInline" :key="formInline.studentId"></table-pdf>
  </div>
</template>

<script>
import store from '../.././store/index';
import Tool from '../../tool';
//import pdfTest from './pdfTest';
import tablePdf from './tablePdf'
export default {
    name:'pdf',
    components:{
        //pdfTest,
        tablePdf,
    },
    data(){
        return{
            formLabelWidth:"120px",
           formInline:{},
        }
    },
    mounted(){
           Tool.$on('ALLData',(obj)=> {
                  this.$nextTick(function(){
                    this.formInline=obj;     
                  })
        });

         setTimeout(() => {
            this.$print(this.$refs.print);
        },3000);  
      
    },
    
    methods:{
        go(){
            history.go(-1)
            setTimeout(()=>{
                location.reload()
            },300)
        }
    }
}
</script>

<style scoped>
.pdfDemo{
    align-items: center;
    text-align: center ! important;
    /* padding:20px 70px ! important; */
    background-color: white;
}
.div{
    background-color: white;
}
</style>