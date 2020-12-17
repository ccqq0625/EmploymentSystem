<template>
  <div>
    <h1 class="h">学生就业公司匹配</h1>
     <el-table
    :header-cell-style="cellstyle"
    :cell-style="cellstyle"
    :data="tableData"
    style="width: 100%"
    min-height="45%">
     <el-table-column
      type="index"
      width="100"
      label="序号"
      text-align="center">
    </el-table-column>
    <el-table-column
      prop="studentId"
      label="学号">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="">
    </el-table-column>
    <el-table-column
      prop="profession"
      label="专业"
      width="">
    </el-table-column>
    <el-table-column
      prop="city"
      label="城市"
      width=""
      v-if="false">
    </el-table-column>
    <el-table-column
      prop="job"
      label="岗位"
      width=""
      v-if="false">
    </el-table-column>
    <el-table-column
      prop="salaryMin"
      label="最小值"
      width=""
      v-if="false">
    </el-table-column>
    <el-table-column
      prop="salaryMax"
      label="最大值"
      width=""
      v-if="false">
    </el-table-column>
    <el-table-column
      prop="companys"
      label="公司"
      width=""
      v-if="false">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <!-- <template slot-scope="scope"> -->
        <template slot-scope="scope">
        <!-- <el-button @click="handleClick(scope.row)" type="text" size="small">详情</el-button> -->
        <el-button type="text" @click="getInfo(scope.row.name,scope.row.city,scope.row.job,
        scope.row.salary,scope.row.companys,scope.row)">详情</el-button>
      </template>
    </el-table-column>
  </el-table>
   <el-pagination
       align='center'
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[5,8,10]"
      :page-size="pageSize"
      prev-text="上一页"
      next-text="下一页"
      layout="total, sizes,prev, pager,next, jumper"
      :total="total">
    </el-pagination>

      <div>
      <!-- 详情：弹出框 -->
      <el-dialog title="详情" :visible.sync="dialogFormVisible" id="pdfDom" width="60%">
        <el-button type="primary"  @click="printPdf()" class="btn">打印PDF</el-button>
         <el-collapse
         v-model="activeName">
          <el-collapse-item title="学生期望职位" name="1">
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
              <el-form-item label="姓名:" :label-width="formLabelWidth" prop="name">
                      <el-input v-model="formInline.name" autocomplete="off" disabled></el-input>
                  </el-form-item>
                  <el-form-item label="期望岗位:" :label-width="formLabelWidth" prop="studentId">
                      <el-input v-model="formInline.job" autocomplete="off" disabled></el-input>
                    </el-form-item>
                  <el-form-item label="期望薪资:" :label-width="formLabelWidth" prop="salary">
                  <el-input v-model="formInline.salary" autocomplete="off"   disabled></el-input>
                </el-form-item>
                </el-form>
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                  <el-form-item label="期望城市:" :label-width="formLabelWidth" prop="city"> 
                      <el-input v-model="formInline.city" autocomplete="off" disabled></el-input>
                    </el-form-item>
                </el-form>
          </el-collapse-item>
          <el-collapse-item title="职位匹配结果" name="2">
              <el-table
                  ref="singleTable"
                  :data="MatTableData"
                   max-height="250"
                  style="width: 100%">
                  <el-table-column
                    type="index"
                    width="50">
                  </el-table-column>
                  <!-- 企业的名称 -->
                  <el-table-column
                    property="name"
                    label="企业名称">
                  </el-table-column>
                  <el-table-column
                    prop="job"
                    label="招聘岗位"
                    width="">
                  </el-table-column>
                  <el-table-column
                    property="salary"
                    label="期望薪资"
                    width="">
                  </el-table-column>
                  <el-table-column
                    property="city"
                    label="所在城市"
                    width="">
                  </el-table-column>
                    <el-table-column
                      property="phone"
                      label="联系电话"
                      width="">
                    </el-table-column>
                    <!-- 匹配度 -->
                    <el-table-column
                    property="suitability"
                    sortable
                    label="匹配度(%)"
                    width="">
                  </el-table-column>
                </el-table>
          </el-collapse-item>
        </el-collapse>  
    </el-dialog>
      </div>
  </div>
</template>

<script>
import htmlToPdf from '../.././utils/htmlToPdf';
import api from '../.././api/infomation'
import { AcroFormChildClass } from 'jspdf';
import Tool from '../../tool';
import employmentApi from '@/api/employment'
export default {
    name:"PostMatch",
    components:{
        
    },
    data(){
        return{
            title:'33',
            currentPage:1,
            pageSize:8,
            total:1,
            activeName:['2'],
            dialogFormVisible: false,
            formLabelWidth:'',
            tableData:[],
             formInline: {
               //姓名
                name:'',
                // 学号
                studentId: '',
                // 学生姓名
                name: '',
                // 专业
                profession:'',
                // 工作
                job:'',
                // 就业城市
                city:'',
                // 最小薪资
                salaryMin:'',
                // 最大薪资
                salaryMax:'',
                salary:'',
                // 是否本行业就业
                companys:[]
              },
            MatTableData:[],
            obj:{}
        }
    },
    created(){
      this.fetch()
    },
    methods:{
      handleSizeChange(val) {
        this.pageSize=val
        this.fetch()
      },
      handleCurrentChange(val) {
        this.currentPage=val
        this.fetch()
      },
       cellstyle(row, column, rowIndex, columnIndex){
        return "text-align: center";
      },
      fetch(){
        employmentApi.fetchData(this.pageSize,this.currentPage).then(response=>{
          const resp=response.data
          this.tableData=resp.data.list
          this.total=resp.data.totalCount
          // var arr=new Array()
          //   arr=resp.data.list
          //   for(let i=0;i<res.data.list.length;i++){
          //     arr[i].salary=arr[i].SalaryMin+"~"+arr[i].SalaryMax
          //     this.tableData=arr
          //   }
        })
      },
      getInfo(name,city,job,salary,companys,obj){
        this.dialogFormVisible=true
        this.formInline.name=name
        this.formInline.city=city
        this.formInline.job=job
        this.formInline.salary=salary
        this.MatTableData=companys
        this.obj=obj
         setTimeout(function(){
           Tool.$emit('ALLData',obj);
        },4000); 
      },
      printPdf(){
        const h = this.$createElement;
        this.$notify({
          title: '提示',
          message: h('i', { style: 'color: teal'}, '准备打印，即将跳转PDF预览页'),
          duration: 1000
        });

       setTimeout(function(){
          this.$router.push('/pdf');
        }.bind(this),1000);    
      }
    }
}
</script>

<style lang="scss" scoped>
// .el-table{
//     margin-top: 5%;
// }
.h{
  text-align: center;
  font-size: 28px;
  font-weight: bold;
  margin: 10px 0;
  color:#666699;
}
 .btn{
   position: absolute;
   top: 10px;
   right: 70px;
 }
</style>