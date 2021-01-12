<template>
  <div class="div">
      <!-- <pdf-test :formInline="formInline" :key="formInline.id"/> -->
       <el-button @click="go" type="primary" class="btn">返回上一页</el-button>
      <tablePDF id="print" ref="print" :formInline="formInline" :key="formInline.studentId"></tablePDF>
     
  </div>
</template>

<script>
import store from '../.././store/index';
import api from '../.././api/infomation';
import Tool from '../../tool';
//import pdfTest from './pdfTest';
import tablePDF from './tablePDF'
export default {
    name:'pdfMain',
    components:{
        //pdfTest,
        tablePDF,
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
                    obj.hukouTransferIn=obj.hukouTransferIn?"是":"否";                   
                    obj.fileTransferIn=obj.fileTransferIn?"是":"否";
                    obj.help=obj.help?"是":"否";
                    obj.teacher= obj.teacher?"是":"否";
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

<style>
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