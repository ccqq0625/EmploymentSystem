<template>
<div>
  <div class="info-from">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="学号" label-width="70px">
        <el-input v-model="formInline.id" placeholder="学号"></el-input>
      </el-form-item>
      <el-form-item label="姓名" label-width="70px">
        <el-input v-model="formInline.name" placeholder="姓名"></el-input>
      </el-form-item>
       <el-form-item label="专业" label-width="70px">
        <el-select v-model="formInline.major" placeholder="选择专业" style="width:178px">
          <el-option label="计算机科学与技术" value="计科"></el-option>
          <el-option label="软件工程" value="软工"></el-option>
          <el-option label="物联网" value="物联网"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="班级" label-width="70px">
        <el-input v-model="formInline.class" placeholder="班级"></el-input>
      </el-form-item>
      </el-form>

      <el-form :inline="true" :model="formInline" class="demo-form-inline" >
        <el-form-item label="就业地区" label-width="70px" style="margin-left: 50px;">
         <el-select v-model="formInline.city" placeholder="请选择" style="width:178px">
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
      <el-form-item label="薪资待遇" inline="true" label-width="70px">
        <el-col :span="11">
          <el-input v-model="formInline.salaryMin" placeholder="最小薪资"></el-input>
        </el-col>
        <el-col :span="1">-</el-col>
        <el-col :span="11">
          <el-input v-model="formInline.salaryMax" placeholder="最大薪资"></el-input>
        </el-col>
      </el-form-item>
      <!-- <el-form-item label="是否本行业就业" label-width="110px">
        <el-select v-model="formInline.sele" placeholder="是/否">
            <el-option label="是" value="Yes"></el-option>
            <el-option label="否" value="No"></el-option>
        </el-select>
      </el-form-item> -->
      <!-- <el-form-item label="公司名称">
        <el-input v-model="formInline.comName" placeholder="公司名称"></el-input>
      </el-form-item>
      <el-form-item> -->
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>

  </div>

   <el-table
    header-cell-style="text-align: center;"
    cell-style="text-align: center;"
    :data="tableData"
    style="width: 100%"
    min-height="45%">
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
      prop="city"
      label="就业地区"
      width="">
    </el-table-column>
    <el-table-column
      prop="salary"
      label="薪资待遇"
      width="">
    </el-table-column>
    <el-table-column
      prop="comName"
      label="就业公司名称"
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

  <!-- 弹出框 -->
  <div>
      <el-dialog title="详细信息" :visible.sync="dialogFormVisible" id="pdfDom" width="80%">
         <el-collapse>
          <el-collapse-item title="基本信息" name="1">
                    <el-form :inline="true" :model="formInline" class="demo-form-inline">
                  <el-form-item label="学号" :label-width="formLabelWidth">
                      <el-input v-model="tableData.id" autocomplete="off"></el-input>
                    </el-form-item>
                  <el-form-item label="姓名" :label-width="formLabelWidth">
                  <el-input v-model="tableData.name" autocomplete="off"></el-input>
                </el-form-item>
                 <el-form-item label="性别" :label-width="formLabelWidth">
                      <el-input v-model="tableData.sex" autocomplete="off"></el-input>
                    </el-form-item>
                </el-form>
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                  <el-form-item label="专业" :label-width="formLabelWidth">
                    <el-input v-model="tableData.major" autocomplete="off"></el-input>
                  </el-form-item>
                    <el-form-item label="就业城市" :label-width="formLabelWidth">
                    <el-input v-model="tableData.city" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="薪资范围" :label-width="formLabelWidth">
                    <el-input v-model="tableData.salary" autocomplete="off"></el-input>
                  </el-form-item>
                </el-form>
                <!-- <el-form :inline="true" :model="formInline" class="demo-form-inline">
                  </el-form> -->
                  <el-form :inline="true" :model="formInline" class="demo-form-inline">
                    <el-form-item label="是否本行业就业" label-width="120px">
                    <el-radio-group>
                      <el-radio label="是"></el-radio>
                      <el-radio label="否"></el-radio>
                    </el-radio-group>
                    </el-form-item>
                    <el-form-item label="是否是师范生" label-width="120px">
                          <el-radio-group>
                            <el-radio label="是"></el-radio>
                            <el-radio label="否"></el-radio>
                          </el-radio-group>
                      </el-form-item>
                      <el-form-item label="是否是精准扶贫对象" label-width="140px">
                    <el-radio-group>
                          <el-radio label="是"></el-radio>
                          <el-radio label="否"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                   
                </el-form>
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                  
                     <el-form-item label="班级" :label-width="formLabelWidth">
                    <el-input v-model="tableData.class" autocomplete="off"></el-input>
                  </el-form-item>
                      <el-form-item label="密码" :label-width="formLabelWidth">
                      <el-input v-model="tableData.password" autocomplete="off"></el-input>
                    </el-form-item>
                      <el-form-item label="籍贯" :label-width="formLabelWidth">
                      <el-input v-model="tableData.hometown" autocomplete="off"></el-input>
                    </el-form-item>
                </el-form>
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                      <el-form-item label="身份证号" :label-width="formLabelWidth">
                        <el-input v-model="tableData.number" autocomplete="off"></el-input>
                      </el-form-item>
                      <el-form-item label="学历" :label-width="formLabelWidth">
                        <el-input v-model="tableData.education" autocomplete="off"></el-input>
                      </el-form-item>
                      <el-form-item label="培养方案" :label-width="formLabelWidth">
                        <el-input v-model="tableData.trainingMethod" autocomplete="off"></el-input>
                      </el-form-item>
                </el-form>
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                      <el-form-item label="学制" :label-width="formLabelWidth">
                        <el-input v-model="tableData.schoolSysyem" autocomplete="off"></el-input>
                      </el-form-item>
                      <el-form-item label="考生号" :label-width="formLabelWidth">
                        <el-input v-model="tableData.candidateNumber" autocomplete="off"></el-input>
                      </el-form-item>
                      <el-form-item label="入学时间" :label-width="formLabelWidth">
                  <el-input v-model="tableData.admissionTime" autocomplete="off"></el-input>
                      </el-form-item>
                </el-form>
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                      <el-form-item label="学制" :label-width="formLabelWidth">
                        <el-input v-model="tableData.schoolSysyem" autocomplete="off"></el-input>
                      </el-form-item>
                       <el-form-item label="毕业时间" :label-width="formLabelWidth">
                        <el-input v-model="tableData.graduationTime" autocomplete="off"></el-input>
                      </el-form-item>
                      <el-form-item label="学籍变动" :label-width="formLabelWidth">
                         <el-input v-model="tableData.changes" autocomplete="off"></el-input>
                      </el-form-item>
                </el-form>
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                   <el-form-item label="学位" :label-width="formLabelWidth">
                      <el-input v-model="tableData.academicDegree" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="学习方式" :label-width="formLabelWidth">
                        <el-input v-model="tableData.learningMethod" autocomplete="off"></el-input>
                      </el-form-item>
                    <el-form-item label="专业方向" :label-width="formLabelWidth">
                      <el-input v-model="tableData.professDirection" autocomplete="off"></el-input>
                    </el-form-item>
                </el-form>
              <el-form :inline="true" :model="formInline" class="demo-form-inline">
                    <el-form-item label="主修外语" label-width="90px">
                      <el-input v-model="tableData.foreignLanguage" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="外语级别" label-width="90px">
                      <el-input v-model="tableData.foreignLanguageLevel" autocomplete="off"></el-input>
                    </el-form-item>
                     <el-form-item label="公司名称" :label-width="formLabelWidth">
                      <el-input v-model="tableData.comName" autocomplete="off"></el-input>
                    </el-form-item>
                </el-form>
                </el-form> 
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                    <el-form-item label="出生日期" :label-width="formLabelWidth">
                      <el-input v-model="tableData.birthday" autocomplete="off"></el-input>
                    </el-form-item>
                   <el-form-item label="户籍派出所" label-width="85px">
                      <el-input v-model="tableData.hukouPoliceStation" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="民族" :label-width="formLabelWidth">
                      <el-input v-model="tableData.nation" autocomplete="off"></el-input>
                    </el-form-item>
                </el-form>    
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                    <el-form-item label="政治面貌" :label-width="formLabelWidth">
                      <el-input v-model="tableData.politicalStatus" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="婚姻状况" :label-width="formLabelWidth">
                  <el-input v-model="tableData.maritalStatus" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="手机号码" :label-width="formLabelWidth">
                      <el-input v-model="tableData.phone" autocomplete="off"></el-input>
                    </el-form-item>
                </el-form>    
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                  <el-form-item label="电子邮件" :label-width="formLabelWidth">
                      <el-input v-model="tableData.email" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="qq号码" :label-width="formLabelWidth">
                      <el-input v-model="tableData.qq" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="城乡生源" :label-width="formLabelWidth">
                    <el-input v-model="tableData.urbanSource" autocomplete="off"></el-input>
                  </el-form-item>
                </el-form> 
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                    <el-form-item label="生源地区" :label-width="formLabelWidth">
                  <el-input v-model="tableData.sourceArea" autocomplete="off"></el-input>
                </el-form-item>
                    <el-form-item label="生源地代码" label-width="95px">
                  <el-input v-model="tableData.sourceAreaCode" autocomplete="off"></el-input>
                </el-form-item>
                 <el-form-item label="家庭住址" :label-width="formLabelWidth">
                  <el-input v-model="tableData.address" autocomplete="off"></el-input>
                </el-form-item>
                </el-form> 
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                  <el-form-item label="家庭邮编" :label-width="formLabelWidth">
                  <el-input v-model="tableData.homeZipCode" autocomplete="off"></el-input>
                </el-form-item>
                    <el-form-item label="家庭联系人" label-width="85px">
                  <el-input v-model="tableData.familyContact" autocomplete="off"></el-input>
                </el-form-item>
                    <el-form-item label="家庭电话" :label-width="formLabelWidth">
                  <el-input v-model="tableData.familyPhone" autocomplete="off"></el-input>
                </el-form-item>
                </el-form> 
                 <el-form :inline="true" :model="formInline" class="demo-form-inline">
                    <el-form-item label="档案是否转入学校">
                    <el-radio-group>
                      <el-radio label="是"></el-radio>
                          <el-radio label="否"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="户籍是否转入学校">
                    <el-radio-group>
                      <el-radio label="是"></el-radio>
                      <el-radio label="否"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item>
                      <el-button type="primary"  @click="changeVue()" style="margin-left:180px">打印PDF</el-button>
                    </el-form-item>
                 </el-form>
          </el-collapse-item>
          <el-collapse-item title="期望工作的信息" name="2">
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
          <el-collapse-item title="实际就业的信息" name="3">
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
                  <el-form-item label="城市代码" :label-width="formLabelWidth">
                  <el-input v-model="tableData.name" autocomplete="off"></el-input>
                </el-form-item>
                </el-form>
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                  <el-form-item label="就业岗位ID" :label-width="formLabelWidth">
                      <el-input v-model="tableData.id" autocomplete="off"></el-input>
                    </el-form-item>
                </el-form>
          </el-collapse-item>
          <el-collapse-item title="学分的信息" name="4">
            <div>暂无</div>
          </el-collapse-item>
        </el-collapse>  
    </el-dialog>
  </div>
</div>
</template>

<script>
import htmlToPdf from '../.././utils/htmlToPdf';
export default {
    name:"info",
    data() {
      return {
        htmlTitle:'学生信息表',
        //表单
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
             // 学号
          id: '111',
          // 学生姓名
          name: '王小虎',
          // 专业
          major:'计算机科学与技术',
          // 班级
          class:'普陀区',
          // 就业城市
          city:'',
          //薪资
          salary:'',
          // 最小薪资
          salaryMin:'8000',
          // 最大薪资
          salaryMax:'10k',
          // 是否本行业就业
          sele:'是',
          // 公司名称
          comName:'某公司',
          // 院校代码
          schoolCode:'',
          // 密码
          password:'',
          // 籍贯
          hometown:'',
          // 身份证号
          number:'',
          // 学历
          education:'',
          // 学院id
          collageId:'',
          // 专业Id
          professionId:'',
          // 班级id
          classId:'',
          //培养方案
          trainingMethod:'',
          // 考生号
          candidateNumber:'',
          // 是否为师范生
          isTeacher:'',
          // 学制
          schoolSysyem:'',
          // 入学时间
          admissionTime:'',
          // 毕业时间
          graduationTime:'',
          // 是否是精准扶贫对象
          isHelp:'',
          // 困难生类别
          difficultyCategory:'',
          // 学籍变动
          changes:'',
          // 学位
          academicDegree:'',
          // 学习方式
          learningMethod:'',
          // 专业方向
          professDirection:'',
          // 主修外语语种
          foreignLanguage:'',
          // 主修外语级别
          foreignLanguageLevel:'',
          // 档案是否转入学校
          isFileTransferIn:'',
          // 户口是否转入学校
          isHukouTransferIn:'',
          // 入学前档案所在单位
          fileUnit:'',
          // 入学前户口所在派出所
          hukouPoliceStation:'',
          // 出生日期
          birthday:'',
          // 性别
          sex:'',
          // 民族
          nation:'',
          // 政治面貌
          politicalStatus:'',
          // 婚姻状况
          maritalStatus:'',
          // 手机号码
          phone:'',
          // 电子邮件
          email:'',
          // qq号码
          qq:'',
          // 城乡生源
          urbanSource:'',
          // 生源地区
          sourceArea:'',
          // 生源地区代码
          sourceAreaCode:'',
          // 家庭住址
          address:'',
          // 家庭邮编
          homeZipCode:'',
          // 家庭联系人
          familyContact:'',
          // 家庭电话
          familyPhone:'',
          // 期望工作id
          expectId:'',
          // 就业工作id
          employmentId:'',
          // 学分表id
          creditID:'',
           },
        //    {
        //   id: '11111',
        //   name: '王小虎',
        //   major:'计算机科学与技术',
        //   city: '普陀区',
        //   salary:'8000-10k',
        //   comName:'某公司',
        // }, 
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
  width: 178px !important;
}
.el-dialog__body{
  padding-right:0 10px;
}
.el-table-column{
  padding: 25px;
}
// s

</style>