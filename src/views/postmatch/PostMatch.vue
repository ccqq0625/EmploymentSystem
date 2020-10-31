<template>
  <div>
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
      prop="id"
      label="学号"
      width="">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="">
    </el-table-column>
    <el-table-column
      prop="major"
      label="专业"
      width="">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <!-- <el-button @click="handleClick(scope.row)" type="text" size="small">详情</el-button> -->
        <el-button type="text" @click="dialogFormVisible = true">详情</el-button>
      </template>
    </el-table-column>
  </el-table>

      <div>
      <!-- 详情：弹出框 -->
      <el-dialog title="详细信息" :visible.sync="dialogFormVisible" id="pdfDom" width="60%">
         <el-collapse
         v-model="activeName">
          <el-collapse-item title="学生期望职位" name="1">
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
                  <el-form-item label="就业岗位" :label-width="formLabelWidth">
                      <el-input v-model="tableData.id" autocomplete="off"></el-input>
                    </el-form-item>
                  <el-form-item label="就业薪资" :label-width="formLabelWidth">
                  <el-input v-model="tableData.name" autocomplete="off"></el-input>
                </el-form-item>
                </el-form>
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                  <el-form-item label="就业城市" :label-width="formLabelWidth">
                      <el-input v-model="tableData.id" autocomplete="off"></el-input>
                    </el-form-item>
                  <el-form-item label="就业岗位ID" :label-width="formLabelWidth">
                  <el-input v-model="tableData.name" autocomplete="off"></el-input>
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
                    property="job"
                    label="招聘岗位"
                    width="">
                    
                  </el-table-column>
                  <el-table-column
                    property="salary"
                    label="薪资待遇"
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
                    property="MatchScore"
                    sortable
                    label="匹配度"
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


export default {
    name:"PostMatch",
    components:{
        
    },
    data(){
        return{
          activeName:['2'],
          dialogFormVisible: false,
            formLabelWidth:'',
            tableData:[
              //测试对象1
                {
                    // 学号
                    id: '111',
                    // 学生姓名
                    name: 'xxxxxx',
                    // 专业
                    major:'计算机科学与技术',
                },
                //测试对象2
                 {
                    // 学号
                    id: '122',
                    // 学生姓名
                    name: 'yyyyy',
                    // 专业
                    major:'软件工程',
                }
            ],
             formInline: {
                // 学号
                id: '',
                // 学生姓名
                name: '',
                // 专业
                major:'',
                // 班级
                class:'',
                // 就业城市
                city:'',
                // 最小薪资
                salaryMin:'',
                // 最大薪资
                salaryMax:'',
                // 是否本行业就业
                sele:'',
                // 公司名称
                comName:'',
              },
            MatTableData:[
              //测试对象1
              {
                  name:"a公司",
                  MatchScore:88,
              },
              //测试对象2
              {
                  name:"b公司",
                  MatchScore:77,
              },
              //测试对象3
              {
                  name:"b公司",
                  MatchScore:66,
              },
              {
                  name:"b公司",
                  MatchScore:66,
              },
              {
                  name:"b公司",
                  MatchScore:66,
              },
              {
                  name:"b公司",
                  MatchScore:66,
              },
            ]

        }
    },
    methods:{
       cellstyle(row, column, rowIndex, columnIndex){
        return "text-align: center";
      },
    }

}
</script>

<style lang="scss" scoped>
.el-table{
    margin-top: 5%;
}
</style>