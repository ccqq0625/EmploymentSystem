<template>
<div>
  <div class="info-from">
      <el-form :inline="true" :model="formInline" class="demo-form-inline" style="width:auto" >
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
        <el-input v-model="formInline.job" placeholder="招聘岗位"></el-input>
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

<!-- 新增按钮的弹出框 -->
  <el-drawer
  :before-close="handleClose"
  :visible.sync="dialog"
  :model="behind"
  direction="ltr"
  :with-header="false"
  custom-class="demo-drawer"
  ref="drawer"
  >
  <div class="demo-drawer__content">
    <el-form :model="behind" ref="behind" :rules="rules">
      <el-form-item label="账号" :label-width="formLabelWidth" prop="username"
      :rules="[
      { required: true, message: '账号不能为空'}]">
        <el-input autocomplete="off" v-model="behind.username"></el-input>
      </el-form-item>
     <el-form-item label="密码" :label-width="formLabelWidth" prop="password"
     :rules="[
      { required: true, message: '密码不能为空'}]">
        <el-input  autocomplete="off" v-model="behind.password"></el-input>
      </el-form-item>
      <el-form-item label="企业名称" :label-width="formLabelWidth" prop="name"
      :rules="[
      { required: true, message: '企业名称不能为空'}]">
        <el-input autocomplete="off" v-model="behind.name"></el-input>
      </el-form-item>
      <el-form-item label="招聘岗位" :label-width="formLabelWidth" prop="job"
      :rules="[
      { required: true, message: '招聘岗位不能为空'}]">
        <el-input autocomplete="off" v-model="behind.job"></el-input>
      </el-form-item>
      <el-form-item label="所在城市" :label-width="formLabelWidth" prop="city"
      :rules="[
      { required: true, message: '所在城市不能为空'}]">
        <el-input autocomplete="off" v-model="behind.city"></el-input>
      </el-form-item>
      <el-form-item label="最小薪资" :label-width="formLabelWidth" prop="salaryMin">
        <el-input autocomplete="off" v-model="behind.salaryMin"></el-input>
      </el-form-item>
      <el-form-item label="最大薪资" :label-width="formLabelWidth" prop="salaryMax">
        <el-input autocomplete="off" v-model="behind.salaryMax"></el-input>
      </el-form-item>
      <el-form-item label="联系电话" :label-width="formLabelWidth" prop="phone"
      :rules="[
      { required: true, message: '电话不能为空'},
      { type: 'number', message: '电话必须为数字值'}]">
        <el-input type="phone" autocomplete="off" v-model.number="behind.phone"></el-input>
      </el-form-item>
    </el-form>
    <div class="demo-drawer__footer">
      <el-button @click="cancelForm">取 消</el-button>
      <el-button type="primary" @click="$refs.drawer.closeDrawer()" :loading="loading1">{{ loading1 ? '提交中 ...' : '确 定' }}</el-button>
    </div>
  </div>
</el-drawer>

<!-- 编辑按钮的弹出框 -->
  <el-drawer
  :before-close="edithandleClose"
  :visible.sync="editdialog"
  direction="ltr"
  :with-header="false"
  custom-class="demo-drawer"
  ref="editdrawer"
  >
  <div class="demo-drawer__content">
    <el-form>
      <el-form-item label="账号" :label-width="formLabelWidth" prop="username">
        <el-input v-model="currenttableData.username"  autocomplete="off"></el-input>
      </el-form-item>
     <el-form-item label="密码" :label-width="formLabelWidth" prop="password">
        <el-input v-model="currenttableData.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="企业名称" :label-width="formLabelWidth" prop="name">
        <el-input v-model="currenttableData.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="招聘岗位" :label-width="formLabelWidth" prop="job">
        <el-input v-model="currenttableData.job" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="所在城市" :label-width="formLabelWidth" prop="city">
        <el-input v-model="currenttableData.city" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="最小薪资" :label-width="formLabelWidth" prop="salaryMin">
        <el-input v-model="currenttableData.salaryMin" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="最大薪资" :label-width="formLabelWidth" prop="salaryMax">
        <el-input v-model="currenttableData.salaryMax" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="联系电话" :label-width="formLabelWidth" prop="phone">
        <el-input v-model="currenttableData.phone" autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <div class="demo-drawer__footer">
      <el-button @click="cancelForm">取 消</el-button>
      <el-button type="primary" @click="$refs.editdrawer.closeDrawer()" :loading="loading">{{ loading ? '修改中 ...' : '确 定' }}</el-button>
    </div>
  </div>
</el-drawer>

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
      :page-sizes="[5, 10, 20]"
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
      //校验
      var salary1 = (rule,value,callback) => {
        if (value === ''){
         callback(new Error('请输入最小薪资'));
        // }
        }
      }

      var salary2 = (rule,value,callback) => {
        if (value === ''){
          callback(new Error('请输入最大薪资'));
        }else if (value <= this.behind.salaryMin){
          callback(new Error('薪资范围有误'));
        }else{
          callback();
        }
      }
      return {
        loading: false,
        loading1: false,
        editdialog: false,
        dialog: false,
        htmlTitle:'学生信息表',
        username:'',
        password:'',
        name: '',
        job: '',
        city: '',
        salaryMin: '',
        salaryMax: '',
        phone: '',
        resp:'',        //表单
        formInline: {
          name: '',
          // 招聘岗位
          job: '',
          // 所在城市
          city: '',
          //薪资
          salaryMin: '',
          salatyMax: '',
          //电话
          phone:'',
        },
        currenttableData: {
          //账号
          username: '',
          //密码
          password: '',
          // 企业姓名
          name: '',
          // 招聘岗位
          job: '',
          // 所在城市
          city: '',
          //薪资
          salaryMin: '',
          salatyMax: '',
          //电话
          phone:'',
        },
        // value:"",
        // 表格的数据
        tableData: [],
        value: false,
        code: null,
        resp:'',
        current: 1,
        total: 1,
        size: 5,
        dialogTableVisible: false,
        //dialogFormVisible: false,
        formLabelWidth: '90px',
        currentRow: null,
        isALLselect:false,
        //多选的状态转换
        ButShowChange:true,
        multipleTable:[],
        id: null,
        behind: {
          username:'',
          password:'',
          name: '',
          job: '',
          city: '',
          salaryMin: '',
          salaryMax: '',
          phone: ''
        },
        rules:{
          salaryMin:[{
            validator: salary1, trigger: 'blur'
          }],
          salaryMax:[{
            validator: salary2, trigger: 'blur'
          }]
        }
      }
    },

    created() {
      this.search()
    },
    methods: {
          //查询
          onSubmit() {
            this.formInline.current = 1
            this.formInline.size = this.size
            api.search(this.formInline).then(response=>{
              const resp = response.data
              console.log(resp)
              this.tableData = resp.data.list
              this.total = resp.data.totalCount
              this.size = resp.data.size
              this.current = resp.data.current
            }).catch((error) => {})
          },
          
          search() {
            this.formInline.current = this.current
            this.formInline.size = this.size
            api.search(this.formInline).then(response=>{
              const resp = response.data
              console.log(resp)
              this.tableData = resp.data.list
              this.total = resp.data.totalCount
              this.size = resp.data.size
              this.current = resp.data.current
            }).catch((error) => {})
          },
           //增加按钮触发
          handleAdd(){
            this.dialog = true
          },

          //获取编辑参数
          handleEdit(index, row) {
            console.log(index, row);
            this.editdialog = true;
            this.currenttableData.name = row.name
            this.currenttableData.phone = row.phone
            this.currenttableData.job = row.job
            this.currenttableData.city = row.city
            this.currenttableData.salaryMax = row.salaryMax
            this.currenttableData.salaryMin = row.salaryMin
            this.currenttableData.phone = row.phone
            this.currenttableData.id = this.tableData[index].id
            //console.log(index, row);
          },

          //删除
          handleDelete(index, row) {
            this.$confirm('你确认删除吗？','提示',{
                confirmButtonText:"确认",
                cancelButtonText:"取消"
            }).then(()=>{
              this.id = this.tableData[index].id
              api.delete(this.id).then(response=>{
              const resp = response.data
              console.log(resp)
              this.$message({
                message: resp.message,
                type:'success'
              })
            })
            })
            //this.onSubmit()
            .then(() => setInterval(() => {
              window.location.reload()
            }, 500));
            
          },
          //改变每页显示数量
          handleSizeChange(val){
            this.size=val
            this.onSubmit()
          },

          //改变当前页
          handleCurrentChange(current){
            this.current=current
            this.search()
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
            this.multipleTable = val;
          },

          //按钮的变化和多选框的显示
          ButShow(){
            this.ButShowChange=!this.ButShowChange;
            console.log(this.ButShowChange);
          },

          //多选并删除
          DelSelect(){
              //console.log(this.$refs.multipleTable.selection);
              //获取被选择的行
              this.multipleTable=this.$refs.multipleTable.selection;
              var delarr = new Array();
              const length = this.multipleTable.length;
              //将集合id放进数组
              let num = new Array()
                for (let i = 0; i < length; i++) {
                delarr.push(this.multipleTable[i].id)
                //num.push({"id":delarr[i]})
                }
              //console.log(this.multipleTable);

              //删除表格中被选择的行
              // this.multipleTable.forEach(mul => {
              //   this.tableData.splice(mul,1);
              // });
              this.ButShowChange=!this.ButShowChange;
              this.$confirm('你确认删除吗？','提示',{
                confirmButtonText:"确认",
                cancelButtonText:"取消"
            }).then(()=>{     
              api.deleteMore(delarr).then(response=>{  
                const res = response.data
              this.$message({
                message: res.message,
                type:'success'
              })
              //this.onSubmit()
            })
            })
          },
          CheckboxShow(){
            return !this.ButShowChange;
          },

          //弹窗关闭效果 增加数据
          handleClose(done) {
              if (this.loading) {
                return;
              }
              this.$confirm('确定要提交表单吗？')
                .then(_ => {
                  this.loading1 = true;
                  api.add(this.behind).then(response=>{
                    this.resp = response.data

                  })
                  this.timer = setTimeout(() => {
                    done();
                    this.$message({
                    message: this.resp.message,
                    type:'success'
                  })
                  this.search()
                    // 动画关闭需要一定的时间
                    setTimeout(() => {
                      this.loading1 = false;
                    }, 400);
                  },300);
                })
                .catch(_ => {})
      },

      // 修改弹窗的关闭效果 修改数据
          edithandleClose(done) {
              if (this.loading) {
                return;
              }
              this.$confirm('确定要修改数据吗？')
                .then(_ => {
                  this.loading = true;
                  api.change(this.currenttableData).then(response=>{
                  this.resp = response.data
                  console.log(res)
                  }).catch((error) => {})
                  this.timer = setTimeout(() => {
                    done();
                    this.$message({
                    message: this.resp.message,
                    type:'success'
                  })
                  this.search()
                    // 动画关闭需要一定的时间
                    setTimeout(() => {
                      this.loading = false;
                    }, 400);
                  }, 500);
                })
                .catch(_ => {});
      },
            cancelForm() {
            this.loading = false;
            this.dialog = false;
            this.editdialog=false;
            clearTimeout(this.timer);
          },
    },
    components:{

    }
}
</script>

<style rel="stylesheet/scss" lang="scss">
:focus{
  outline: 0;
}
</style>

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
.demo-drawer__content{
  padding:45px 25px 45px 15px;
}
.el-drawer__body{
   .el-input__inner{
     margin: 20px !important;
     width: 30px;
   }
      padding: 20px !important;
}
.demo-drawer__footer{
  margin:0 0 0 140px;
  padding-right:0px;
}
</style>