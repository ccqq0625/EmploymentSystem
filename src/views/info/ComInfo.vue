<template>
<div>
  <div class="info-from">
      <el-form :inline="true" :model="formInline" class="demo-form-inline" style="width:auto">
      <el-form-item label="企业名称" label-width="70px">
        <el-input v-model="formInline.name" placeholder="企业名称"></el-input>
      </el-form-item>
      <el-form-item label="薪资待遇" inline="true" label-width="70px">
          <el-input v-model="formInline.salaryMin" placeholder="最小薪资" style="width:208px"></el-input>
          <span style=" font-size: 20px;text-align: center;">~</span>
          <el-input v-model="formInline.salaryMax" placeholder="最大薪资"  style="width:208px;"></el-input>
      </el-form-item>
      </el-form>

      <el-form :inline="true" :model="formInline" class="demo-form-inline" >
         <!-- <el-form-item label="联系电话" label-width="70px">
        <el-input v-model="formInline.class" placeholder="联系电话"></el-input>
      </el-form-item> -->
     
       <el-form-item label="招聘岗位" label-width="70px">
        <el-input v-model="formInline.class" placeholder="招聘岗位"></el-input>
      </el-form-item>
      <el-form-item label="就业地区" label-width="70px">
         <el-select v-model="formInline.city" placeholder="请选择" style="width:208px">
          <el-option-group
            v-for="group in options"
            :key="group.label"
            :label="group.label">
            <el-option
              v-for="item in group.options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-option-group>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">新增</el-button>
      </el-form-item>
    </el-form>

  </div>

   <el-table
    :header-cell-style="cellstyle"
    :cell-style="cellstyle"
    :data="tableData"
    style="width: 100%"
    min-height="45%">
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
      prop="salary"
      label="薪资待遇"
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


</div>
</template>

<script>
import htmlToPdf from '../.././utils/htmlToPdf';
export default {
    name:"StuInfo",
    data() {
      return {
        htmlTitle:'学生信息表',
        //表单
        formInline: {
         
        },
         options: [{
          label: '热门城市',
          options: [{
            value: 'Shanghai',
            label: '上海'
          }, {
            value: 'Beijing',
            label: '北京'
          }]
        }, {
          label: '城市名',
          options: [{
            value: 'Chengdu',
            label: '成都'
          }, {
            value: 'Shenzhen',
            label: '深圳'
          }, {
            value: 'Guangzhou',
            label: '广州'
          }, {
            value: 'Dalian',
            label: '大连'
          }]
        }],
        // value:"",
        // 表格的数据
         tableData: [
           //key值
           {
          // 企业姓名
          name: 'xxxxxx公司',
          // 招聘岗位
          job:'',
          // 所在城市
          city:'',
          //薪资
          salary:'',
          //电话
          phone:'',
          },
           {
          // 企业姓名
          name: 'aaaaa公司',
          // 招聘岗位
          job:'',
          // 所在城市
          city:'',
          //薪资
          salary:'',
          //电话
          phone:'',
          },
          {
          // 企业姓名
          name: 'bbbbb公司',
          // 招聘岗位
          job:'',
          // 所在城市
          city:'',
          //薪资
          salary:'',
          //电话
          phone:'',
          }
        ],
         dialogTableVisible: false,
        dialogFormVisible: false,
        formLabelWidth: '90px',
      }
    },
    methods: {
          onSubmit() {
            console.log('submit!');
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
          handleEdit(index, row) {
            console.log(index, row);
          },
          handleDelete(index, row) {
            console.log(index, row);
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


</style>