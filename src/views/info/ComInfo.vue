<template>
<div>
  <div class="info-from">
      <el-form :inline="true" :model="formInline" class="demo-form-inline" style="width:auto">
      <el-form-item label="企业名称" label-width="70px">
        <el-input v-model="formInline.name" placeholder="企业名称"></el-input>
      </el-form-item>
      <el-form-item label="薪资待遇" inline="true" label-width="70px">
          <el-input v-model="formInline.salaryMin" placeholder="最低薪资" style="width:208px"></el-input>
          <span style=" font-size: 20px;text-align: center;">~</span>
          <el-input v-model="formInline.salaryMax" placeholder="最高薪资"  style="width:208px;"></el-input>
      </el-form-item>
      </el-form>
      <el-form :inline="true" :model="formInline" class="demo-form-inline" >     
       <el-form-item label="招聘岗位" label-width="70px">
        <el-input v-model="formInline.class" placeholder="招聘岗位"></el-input>
      </el-form-item>
      <el-form-item label="就业地区" label-width="70px">
        <el-input v-model="formInline.city" placeholder="就业地区"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleAdd">新增</el-button>
      </el-form-item>
      <el-form-item>
        <!-- <el-button type="primary" @click="toggleSelection(tableData)" v-if='ButShowChange'>多选</el-button> -->
        <el-button type="primary" @click="ButShow()" v-if='ButShowChange'>多选</el-button>
        <el-button type="primary" @click="DelSelect()" v-if='!ButShowChange'>确认删除</el-button>
      </el-form-item>
    </el-form>

  </div>

   <el-table
    :header-cell-style="cellstyle"
    :cell-style="cellstyle"
    :data="tableData"
    ref="multipleTable"
    :select-on-indeterminate="true"
    highlight-current-row
     @selection-change="handleSelectionChange"
    style="width: 100%"
    min-height="45%">
       <el-table-column
       v-if="!ButShowChange"
      type="selection"
      width="">
    </el-table-column>
     <el-table-column
      type="index"
      width="50">
    </el-table-column>
    <el-table-column
      prop="name"
      label="企业名称"
      width="">
    </el-table-column>
    <el-table-column
      prop="job"
      label="招聘岗位"
      width="">
    </el-table-column>
    <el-table-column
      prop="city"
      label="所在城市"
      width="">
    </el-table-column>
    <el-table-column
      prop="salaryMin"
      label="最低薪资"
      width="">
    </el-table-column>
    <el-table-column
      prop="salaryMax"
      label="最高薪资"
      width="">
    </el-table-column>
      <el-table-column
      prop="phone"
      label="联系电话"
      width="">
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>

  <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="current"
      :page-sizes="[1, 5, 10]"
      :hide-on-single-page="value"
      :page-size="size"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
  </el-pagination>


</div>
</template>

<script>
import api from '../../api/industryInfo';
import htmlToPdf from '../.././utils/htmlToPdf';
export default {
    name:"StuInfo",
    data() {
      return {
        htmlTitle:'学生信息表',
        //表单
        formInline: {
         
        },
        // value:"",
        // 表格的数据
        tableData: [{
          // 企业姓名
          name: '',
          // 招聘岗位
          job:'',
          // 所在城市
          city:'',
          //薪资
          salaryMin:'',
          salatyMax:'',
          //电话
          phone:'',
        }],
        value: true,
        current: 1,
        size: 10,
        total: 1,
        dialogTableVisible: false,
        dialogFormVisible: false,
        formLabelWidth: '90px',
        currentRow: null,
        isALLselect:false,
        //多选的状态转换
        ButShowChange:true,
        multipleTable:[],
        id: '',
        behind: {
          name: this.name,
          job: this.job,
          city: this.city,
          salaryMin: this.salaryMin,
          salaryMax: this.salaryMax,
          phone: this.phone
        }
      }
    },

    created() {
      this.onSubmit()
    },
    methods: {
          //查询
          onSubmit() {
            this.formInline.current = this.current
            this.formInline.size = this.size
            api.search(this.formInline).then(response=>{
              const resp = response.data
              console.log(resp)
              this.tableData = resp.data.list
              this.total = resp.data.totalcount
              this.size = resp.data.size
              this.current = resp.data.current
            }).catch((error) => {})
          },
           //增加
          handleAdd(behind){
            api.add(this.behind).then(response=>{
              console.log(behind)
              //this.onSubmit()
            })
          },

          //编辑
          handleEdit(index, row) {
            console.log(index, row);
          },

          //删除
          handleDelete(index, row) {
            console.log(index, row);
            this.$confirm('你确认删除吗？','提示',{
                confirmButtonText:"确认",
                cancelButtonText:"取消"
            }).then(()=>{
              api.delete(this.id).then(response=>{
              const resp = response.data
              this.$message({
                message:resp,
                type:'success'
              })
              this.onSubmit()
            })
            })
          },

          //改变每页显示数量
          handleSizeChange(val){
            this.size=val
            this.onSubmit()
          },
          //改变当前页
          handleCurrentChange(current){
            this.current=current
            this.onSubmit()
          },
          //打印
          changeVue(){
            const h = this.$createElement;
            this.$notify({
              title: '提示',
              message: h('i', { style: 'color: teal'}, '准备打印，即将跳转PDF预览页'),
              duration: 2000
            });
            setTimeout(function(){
              this.$router.push('/pdfTest');
            }.bind(this),2000);
        },

          cellstyle(row, column, rowIndex, columnIndex){
            return "text-align: center";
          },
          
          //全选
          selectALL(selection,first){
            if(!first){
              this.isAllSelect=!this.isAllSelect;
            }
          },
            toggleSelection(rows) {
              if (rows) {
                rows.forEach(row => {
                  this.$refs.multipleTable.toggleRowSelection(row);
                });
              } else {
                this.$refs.multipleTable.clearSelection();
              }
            },
           handleSelectionChange(val) {
            this.currentRow = val;
          },
          //按钮的变化和多选框的显示
          ButShow(){
            this.ButShowChange=!this.ButShowChange;
            console.log(this.ButShowChange);
          },
          DelSelect(){
              //console.log(this.$refs.multipleTable.selection);
              //获取被选择的行
              this.multipleTable=this.$refs.multipleTable.selection;
              //console.log(this.multipleTable);
              //删除表格中被选择的行
              this.multipleTable.forEach(mul => {
                this.tableData.splice(mul,1);
              });
              this.ButShowChange=!this.ButShowChange;
          },
          CheckboxShow(){
            return !this.ButShowChange;
          }
    },
    components:{

    }
}
</script>

<style lang="scss" scoped>
.info-from{
  margin-top: 5%;
  align-items: center;
  text-align: center;
 
}
.el-input__inner {
  padding:0;
 // width: 178px !important;
}
.el-dialog__body{
  padding-right:0 10px;
}
.el-table-column{
  padding: 25%;
}
.info-from[data-v-0344b368]{
  padding:0 15%;
}
.info-from[data-v-0344b368]{
   text-align: left;
}
// .el-checkbox__inner{
//   display:none !important;
// }
.el-pagination {
    text-align: center; 
}

</style>