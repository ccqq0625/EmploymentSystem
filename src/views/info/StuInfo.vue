<template>
<div>
  <div class="info-from">
      <el-form :inline="true" :model="formInline" class="demo-form-inline" style="width:auto">
      <el-form-item label="学号" label-width="70px">
        <el-input v-model="formInline.studentId" placeholder="学号"></el-input>
      </el-form-item>
      <el-form-item label="姓名" label-width="70px">
        <el-input v-model="formInline.name" placeholder="姓名"></el-input>
      </el-form-item>
       <el-form-item label="专业" label-width="70px">
        <el-select v-model="formInline.profession" placeholder="选择专业" clearable style="width:178px">
          <el-option label="计算机科学与技术" value="计算机科学与技术"></el-option>
          <el-option label="软件工程" value="软件工程"></el-option>
          <el-option label="物联网" value="物联网工程"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="班级" label-width="70px">
        <el-input v-model="formInline.classStudent" placeholder="班级"></el-input>
      </el-form-item>
      </el-form>

      <el-form :inline="true" :model="formInline" class="demo-form-inline" >
        <el-form-item label="就业地区 ">
        <el-input v-model="formInline.city" placeholder="就业地区"></el-input>
      </el-form-item>
      <el-form-item label="薪资待遇" inline="true" label-width="70px">
        <!-- <el-col :span="11"> -->
          <el-input v-model="formInline.salaryMin" placeholder="最小薪资" style="width:208px"></el-input>
        <!-- </el-col> -->
        <!-- <el-col :span="2" style="text-align: center;"> -->
          <span style=" font-size: 20px;text-align: center;">~</span>
          <!-- </el-col> -->
        <!-- <el-col :span="11"> -->
          <el-input v-model="formInline.salaryMax" placeholder="最大薪资"  style="width:208px;"></el-input>
        <!-- </el-col> -->
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="search()">查询</el-button>
        <el-button type="primary" @click="reset()">重置</el-button>
      </el-form-item>
    </el-form>

  </div>
<div>
     <el-table
    :row-style="{height:13+'px'}"
    :cell-style="{padding:13+'px'}"
    :data="tableData"
    highlight-current-row
    style="width: 100%"
    min-height="45%">
    <el-table-column
      type="index"
      label="序号"
      align="center"
      width="100">
    </el-table-column>
    <el-table-column
      prop="studentId"
      align="center"
      label="学号"
      width="">
    </el-table-column>
    <el-table-column
      prop="name"
      align="center"
      label="姓名"
      width="">
    </el-table-column>
    <el-table-column
      prop="profession"
      align="center"
      label="专业"
      width="">
    </el-table-column>
    <el-table-column
      prop="expectSalary"
      align="center"
      label="薪资"
      width="">
    </el-table-column>
    <el-table-column
      prop="expectCity"
      align="center"
      label="就业地区"
      width="">
    </el-table-column>
    <el-table-column
      prop="schoolCode"
      label="院校代码"
      v-if="false">
    </el-table-column>
    <el-table-column
      prop="fileUnit"
      label="档案单位"
      v-if="false">
    </el-table-column>
    <el-table-column
      prop="difficultyCategory"
      label="困难生类别"
      v-if="false">
    </el-table-column>
    <el-table-column
      prop="professionalDirection"
      label="专业方向"
      v-if="false">
    </el-table-column>
     <el-table-column
      prop="teacher"
      label="是否是师范生"
      v-if="false">
    </el-table-column>
    <el-table-column
      prop="help"
      label="是否是精准扶贫对象"
      v-if="false">
    </el-table-column>
    <el-table-column
      prop="fileTransferIn"
      label="档案是否转入学校"
      v-if="false">
    </el-table-column>
    <el-table-column
      prop="hukouTransferIn"
      label="户口是否转入学校"
      v-if="false">
    </el-table-column>
    <el-table-column
      prop="classStudent"
      label="班级"
      v-if="false">
    </el-table-column>
    <el-table-column
      prop="password"
      label="密码"
      v-if="false">
    </el-table-column>
    <el-table-column
      prop="number"
      label="身份证"
      v-if="false">
    </el-table-column>
    <el-table-column
      label="籍贯"
      prop="hukouPoliceStation"
      v-if="false">
    </el-table-column>
      <el-table-column
      label="学历"
      prop="education"
      v-if="false">
    </el-table-column>
    <el-table-column
      label="培养"
      prop="trainingMethod"
      v-if="false">
    </el-table-column>
    <el-table-column
      label="学制"
      prop="schoolSystem"
      v-if="false">
    </el-table-column>
    <el-table-column
      label="考生号"
      prop="candidateNum"
      v-if="false">
    </el-table-column>
    <el-table-column
      label="入学时间"
      prop="admissionTime"
      v-if="false">
    </el-table-column>
    <el-table-column
      label="毕业时间"
      prop="graduationTime"
      v-if="false">
    </el-table-column>
    <el-table-column
      label="学籍变动"
      prop="changes"
      v-if="false">
    </el-table-column>
    <el-table-column
      label="学籍变动"
      prop="academicDegree"
      v-if="false">
    </el-table-column>
    <el-table-column
      label="学习方法"
      prop="learningMethod"
      v-if="false">
    </el-table-column>
    <el-table-column
      label="专业方向"
      prop="professionDirection"
      v-if="false">
    </el-table-column>
    <el-table-column
      label="主修外语"
      prop="foreignLanguage"
      v-if="false">
    </el-table-column>
    <el-table-column
      label="外语级别"
      prop="foreignLanguageLevel"
      v-if="false">
    </el-table-column>
    <el-table-column
      label="公司名称"
      prop="companyName"
      v-if="false">
    </el-table-column>
    <el-table-column
      label="出生日期"
      prop="birthday"
      v-if="false">
    </el-table-column>
    <el-table-column
      label="民族"
      prop="nation"
      v-if="false">
    </el-table-column>
     <el-table-column
      label="政治面貌"
      prop="politicalStatus"
      v-if="false">
    </el-table-column>
     <el-table-column
      label="婚姻状况"
      prop="maritalStatus"
      v-if="false">
    </el-table-column>
     <el-table-column
      label="手机号码"
      prop="phone"
      v-if="false">
    </el-table-column>
     <el-table-column
      label="qq号码"
      prop="qq"
      v-if="false">
    </el-table-column>
     <el-table-column
      label="电子邮件"
      prop="email"
      v-if="false">
    </el-table-column>
     <el-table-column
      label="城乡生源"
      prop="urbanSource"
      v-if="false">
    </el-table-column>
    <el-table-column
      label="生源地区"
      prop="sourceArea"
      v-if="false">
    </el-table-column>
    <el-table-column
      label="生源地代码"
      prop="sourceAreaCode"
      v-if="false">
    </el-table-column>
    <el-table-column
      label="家庭住址"
      prop="address"
      v-if="false">
    </el-table-column>
    <el-table-column
      label="家庭邮编"
      prop="homeZipCode"
      v-if="false">
    </el-table-column>
     <el-table-column
      label="家庭联系人"
      prop="familyContact"
      v-if="false">
    </el-table-column>
    <el-table-column
      label="家庭电话"
      prop="familyPhone"
      v-if="false">
    </el-table-column>

    <!-- 期望就业 -->
     <el-table-column
      label="就业岗位"
      prop="expectJob"
      v-if="false">
    </el-table-column>
    <el-table-column
      label="最低薪资"
      prop="expectSalaryMin"
      v-if="false">
    </el-table-column>
      <el-table-column
      label="最高薪资"
      prop="expectSalaryMax"
      v-if="false">
      </el-table-column>
     <el-table-column
      label="就业城市"
      prop="expectCity"
      v-if="false">
    </el-table-column>
     <el-table-column
      label="城市代码"
      prop="expectCityCode"
      v-if="false">
    </el-table-column>
    
    <!-- 实际就业 -->
    <el-table-column
      label="就业岗位"
      prop="employmentJob"
      v-if="false">
    </el-table-column>
    <el-table-column
      label="就业薪资"
      prop="employmentSalary"
      v-if="false">
    </el-table-column>
    <el-table-column
      label="公司名称"
      prop="employmentName"
      v-if="false">
      </el-table-column>
      <el-table-column
      label="就业城市"
      prop="employmentCity"
      v-if="false">
      </el-table-column>
     <el-table-column
      label="城市代码"
      prop="employmentCityCode"
      v-if="false">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      align="center"
      width="100">
      <template slot-scope="scope">
        <!-- <el-button @click="handleClick(scope.row)" type="text" size="small">详情</el-button> -->
        <el-button type="text" @click="handleClick(scope.row.studentId,scope.row.name,scope.row.sex,scope.row.profession,scope.row.schoolCode
        ,scope.row.fileUnit,scope.row.difficultyCategory,scope.row.professionalDirection,scope.row.teacher,scope.row.help,scope.row.fileTransferIn
        ,scope.row.hukouTransferIn,scope.row.expectCity,scope.row.expectSalary,scope.row.classStudent,scope.row.password,scope.row.number
        ,scope.row.hukouPoliceStation,scope.row.education,scope.row.trainingMethod,scope.row.schoolSystem,scope.row.candidateNumber
        ,scope.row.admissionTime,scope.row.graduationTime,scope.row.changes,scope.row.academicDegree,scope.row.learningMethod
        ,scope.row.professionDirection,scope.row.foreignLanguage,scope.row.foreignLanguageLevel,scope.row.companyName
        ,scope.row.birthday,scope.row.nation,scope.row.politicalStatus,scope.row.maritalStatus,scope.row.phone,scope.row.qq
        ,scope.row.email,scope.row.urbanSource,scope.row.sourceArea,scope.row.sourceAreaCode,scope.row.address,scope.row.homeZipCode
        ,scope.row.familyContact,scope.row.familyPhone,scope.row.expectJob,scope.row.expectSalaryMin,scope.row.expectSalaryMax
        ,scope.row.expectCityCode,scope.row.employmentJob,scope.row.employmentSalary,scope.row.employmentCity
        ,scope.row.employmentCityCode,scope.row.employmentName,scope.row)">详情</el-button>
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
  <!-- 弹出框 -->
  <div>
      <el-dialog title="详细信息" :visible.sync="dialogFormVisible" id="pdfDom" width="80%">
        <el-button type="primary"  @click="changeVue()" class="btn">打印PDF</el-button>
         <el-collapse>
          <el-collapse-item title="基本信息" name="1">
                    <el-form :inline="true" :model="formInline" class="demo-form-inline">
                  <el-form-item label="学号" :label-width="formLabelWidth">
                      <el-input v-model="studentId" autocomplete="off"></el-input>
                    </el-form-item>
                  <el-form-item label="姓名" :label-width="formLabelWidth">
                  <el-input v-model="name" autocomplete="off"></el-input>
                </el-form-item>
                 <el-form-item label="性别" :label-width="formLabelWidth">
                      <el-input v-model="sex" autocomplete="off"></el-input>
                    </el-form-item>
                </el-form>
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                  <el-form-item label="专业" :label-width="formLabelWidth">
                    <el-input v-model="profession" autocomplete="off"></el-input>
                  </el-form-item>
                   <el-form-item label="院校代码" :label-width="formLabelWidth">
                    <el-input v-model="schoolCode" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="档案单位" :label-width="formLabelWidth">
                    <el-input v-model="fileUnit" autocomplete="off"></el-input>
                  </el-form-item>
                </el-form>
                <!-- <el-form :inline="true" :model="formInline" class="demo-form-inline">
                  </el-form> -->
                  <el-form :inline="true" :model="formInline" class="demo-form-inline">
                    <el-form-item label="是否是师范生" v-model="teacher" label-width="180px">
                          <el-radio-group v-model="teacher">
                            <el-radio :label="true">是</el-radio>
                            <el-radio :label="false">否</el-radio>
                          </el-radio-group>
                      </el-form-item>
                      <el-form-item label="是否是精准扶贫对象" v-model="help" label-width="180px">
                    <el-radio-group v-model="help">
                          <el-radio :label="true">是</el-radio>
                          <el-radio :label="false">否</el-radio>
                        </el-radio-group>
                    </el-form-item>
                   
                </el-form>
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                  
                     <el-form-item label="班级" :label-width="formLabelWidth">
                    <el-input v-model="classStudent" autocomplete="off"></el-input>
                  </el-form-item>
                      <!-- <el-form-item label="密码" :label-width="formLabelWidth">
                      <el-input v-model="password" autocomplete="off"></el-input>
                    </el-form-item> -->
                      <el-form-item label="籍贯" :label-width="formLabelWidth">
                      <el-input v-model="hukouPoliceStation" autocomplete="off"></el-input>
                    </el-form-item>
                </el-form>
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                      <el-form-item label="身份证号" :label-width="formLabelWidth">
                        <el-input v-model="number" autocomplete="off"></el-input>
                      </el-form-item>
                      <el-form-item label="学历" :label-width="formLabelWidth">
                        <el-input v-model="education" autocomplete="off"></el-input>
                      </el-form-item>
                      <el-form-item label="培养方案" :label-width="formLabelWidth">
                        <el-input v-model="trainingMethod" autocomplete="off"></el-input>
                      </el-form-item>
                </el-form>
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                      <el-form-item label="学制" :label-width="formLabelWidth">
                        <el-input v-model="schoolSystem" autocomplete="off"></el-input>
                      </el-form-item>
                      <el-form-item label="考生号" :label-width="formLabelWidth">
                        <el-input v-model="candidateNumber" autocomplete="off"></el-input>
                      </el-form-item>
                      <el-form-item label="入学时间" :label-width="formLabelWidth">
                  <el-input v-model="admissionTime" autocomplete="off"></el-input>
                      </el-form-item>
                </el-form>
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                      <el-form-item label="困难生类别" :label-width="formLabelWidth">
                        <el-input v-model="difficultyCategory" autocomplete="off"></el-input>
                      </el-form-item>
                       <el-form-item label="毕业时间" :label-width="formLabelWidth">
                        <el-input v-model="graduationTime" autocomplete="off"></el-input>
                      </el-form-item>
                      <el-form-item label="学籍变动" :label-width="formLabelWidth">
                         <el-input v-model="changes" autocomplete="off"></el-input>
                      </el-form-item>
                </el-form>
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                   <el-form-item label="学位" :label-width="formLabelWidth">
                      <el-input v-model="academicDegree" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="学习方式" :label-width="formLabelWidth">
                        <el-input v-model="learningMethod" autocomplete="off"></el-input>
                      </el-form-item>
                    <el-form-item label="专业方向" :label-width="formLabelWidth">
                      <el-input v-model="professionalDirection" autocomplete="off"></el-input>
                    </el-form-item>
                </el-form>
              <el-form :inline="true" :model="formInline" class="demo-form-inline">
                    <el-form-item label="主修外语" label-width="90px">
                      <el-input v-model="foreignLanguage" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="外语级别" label-width="90px">
                      <el-input v-model="foreignLanguageLevel" autocomplete="off"></el-input>
                    </el-form-item>
                     <!-- <el-form-item label="公司名称" :label-width="formLabelWidth">
                      <el-input v-model="companyName" autocomplete="off"></el-input>
                    </el-form-item> -->
                </el-form>
              
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                    <el-form-item label="出生日期" :label-width="formLabelWidth">
                      <el-input v-model="birthday" autocomplete="off"></el-input>
                    </el-form-item>
                   <el-form-item label="户籍派出所" label-width="85px">
                      <el-input v-model="hukouPoliceStation" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="民族" :label-width="formLabelWidth">
                      <el-input v-model="nation" autocomplete="off"></el-input>
                    </el-form-item>
                </el-form>    
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                    <el-form-item label="政治面貌" :label-width="formLabelWidth">
                      <el-input v-model="politicalStatus" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="婚姻状况" :label-width="formLabelWidth">
                  <el-input v-model="maritalStatus" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="手机号码" :label-width="formLabelWidth">
                      <el-input v-model="phone" autocomplete="off"></el-input>
                    </el-form-item>
                </el-form>    
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                  <el-form-item label="电子邮件" :label-width="formLabelWidth">
                      <el-input v-model="email" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="qq号码" :label-width="formLabelWidth">
                      <el-input v-model="qq" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="城乡生源" :label-width="formLabelWidth">
                    <el-input v-model="urbanSource" autocomplete="off"></el-input>
                  </el-form-item>
                </el-form> 
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                    <el-form-item label="生源地区" :label-width="formLabelWidth">
                  <el-input v-model="sourceArea" autocomplete="off"></el-input>
                </el-form-item>
                    <el-form-item label="生源地代码" label-width="95px">
                  <el-input v-model="sourceAreaCode" autocomplete="off"></el-input>
                </el-form-item>
                 <el-form-item label="家庭住址" :label-width="formLabelWidth">
                  <el-input v-model="address" autocomplete="off"></el-input>
                </el-form-item>
                </el-form> 
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                  <el-form-item label="家庭邮编" :label-width="formLabelWidth">
                  <el-input v-model="homeZipCode" autocomplete="off"></el-input>
                </el-form-item>
                    <el-form-item label="家庭联系人" label-width="85px">
                  <el-input v-model="familyContact" autocomplete="off"></el-input>
                </el-form-item>
                    <el-form-item label="家庭电话" :label-width="formLabelWidth">
                  <el-input v-model="familyPhone" autocomplete="off"></el-input>
                </el-form-item>
                </el-form> 
                 <el-form :inline="true" :model="formInline" class="demo-form-inline">
                    <el-form-item label="档案是否转入学校" label-width="180px">
                      <el-radio-group v-model="fileTransferIn">
                        <el-radio :label="true">是</el-radio>
                        <el-radio :label="false">否</el-radio>
                      </el-radio-group>
                    </el-form-item>
                    <el-form-item label="户籍是否转入学校" label-width="180px">
                    <el-radio-group v-model="hukouTransferIn">
                      <el-radio :label="true">是</el-radio>
                      <el-radio :label="false">否</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    
                 </el-form>
          </el-collapse-item>
          <el-collapse-item title="期望工作的信息" name="2">
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
                  <el-form-item label="就业岗位" :label-width="formLabelWidth">
                      <el-input v-model="expectJob" autocomplete="off"></el-input>
                    </el-form-item>
                  <el-form-item label="最低薪资" :label-width="formLabelWidth">
                  <el-input v-model="expectSalaryMin" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="最高薪资" :label-width="formLabelWidth">
                  <el-input v-model="expectSalaryMax" autocomplete="off"></el-input>
                </el-form-item>
                </el-form>
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                  <el-form-item label="就业城市" :label-width="formLabelWidth">
                      <el-input v-model="expectCity" autocomplete="off"></el-input>
                    </el-form-item>
                  <el-form-item label="城市代码" :label-width="formLabelWidth">
                  <el-input v-model="expectCityCode" autocomplete="off"></el-input>
                </el-form-item>
                </el-form>
          </el-collapse-item>
          <el-collapse-item title="实际就业的信息" name="3">
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
                  <el-form-item label="就业岗位" :label-width="formLabelWidth">
                      <el-input v-model="employmentJob" autocomplete="off"></el-input>
                    </el-form-item>
                  <el-form-item label="就业薪资" :label-width="formLabelWidth">
                  <el-input v-model="employmentSalary" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="公司名称" :label-width="formLabelWidth">
                  <el-input v-model="employmentName" autocomplete="off"></el-input>
                </el-form-item>
              </el-form>
              <el-form :inline="true" :model="formInline" class="demo-form-inline">
                  <el-form-item label="就业城市" :label-width="formLabelWidth">
                      <el-input v-model="employmentCity" autocomplete="off"></el-input>
                    </el-form-item>
                  <el-form-item label="城市代码" :label-width="formLabelWidth">
                  <el-input v-model="employmentCityCode" autocomplete="off"></el-input>
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
import api from '../.././api/infomation'
import { AcroFormChildClass } from 'jspdf';
import Tool from '../../tool';


export default {
    name:"StuInfo",
    data() {
      return {
        htmlTitle:'学生信息表',
        formData: {},
        //表单
        formInline: {
         // 学号
          studentId: '',
          // 学生姓名
          name: '',
          // 专业
          profession:'',
          // 班级
          classStudent:'',
          // 就业城市
          city:'',
          // 最小薪资
          salaryMin:'',
          // 最大薪资
          salaryMax:'',
        },     
        // value:"",
        // 表格的数据
         tableData: [],
         value: '',
         current: 1,
         total: 1,
         size: 5,    
         studentId: '',
         name: '',
         sex: '',
         profession: '',
         classStudent: '',
         password: '',
         hometown:'',
         number:'',
         fileUnit:'',
         difficultyCategory:'',
         professionalDirection:'',
         teacher: false,
         help: false,
         fileTransferIn: false,
         hukouTransferIn: false,
         education:'',
         trainingMethod:'',
         schoolSystem:'',
         candidateNumber:'',
         admissionTime:'',
         graduationTime:'',
         changes:'',
         academicDegree:'',
         learningMethod:'',
         professionDirection:'',
         foreignLanguage:'',
         foreignLanguageLevel:'',
         birthday:'',
         hukouPoliceStation:'',
         nation:'',
         politicalStatus:'',
         maritalStatus:'',
         companyName:'',
         phone:'',
         email:'',
         qq:'',
         schoolCode:'',
         urbanSource:'',
         sourceArea:'',
         sourceAreaCode:'',
         address:'',
         homeZipCode:'',
         familyContact:'',
         familyPhone:'',
         expectCity:'',
         expectCityCode:'',
         expectSalary:'',
         expectSalaryMin:'',
         expectSalaryMax:'',
         expectJob:'',
         employmentJob:'',
         employmentSalary:'',
         employmentName:'',
         employmentCity:'',
         employmentCityCode:'',
         expectCityCode: '',
         dialogTableVisible: false,
         dialogFormVisible: false,
         formLabelWidth: '90px',
         obj:{},
      }
    },
    created(){
      this.submit()
    },

    methods: {
      changeVue(){
         const h = this.$createElement;
        this.$notify({
          title: '提示',
          message: h('i', { style: 'color: teal'}, '准备打印，即将跳转PDF预览页'),
          duration: 1000
        });

       setTimeout(function(){
          this.$router.push('/pdfMain');
        }.bind(this),1000);    
    },

    //手动点击弹出框需要的参数
    handleClick(studentId,name,sex,profession,schoolCode,fileUnit,difficultyCategory,professionalDirection
    ,teacher,help,fileTransferIn,hukouTransferIn,expectCity,expectSalary,classStudent,password,number,hukouPoliceStation
    ,education,trainingMethod,schoolSystem,candidateNumber,admissionTime,graduationTime,changes,academicDegree
    ,learningMethod,professionDirection,foreignLanguage,foreignLanguageLevel,companyName,birthday,nation
    ,politicalStatus,maritalStatus,phone,qq,email,urbanSource,sourceArea,sourceAreaCode,address,homeZipCode
    ,familyContact,familyPhone,expectJob,expectSalaryMin,expectSalaryMax,expectCityCode,employmentJob
    ,employmentSalary,employmentCity,employmentCityCode,employmentName,obj){
         this.dialogFormVisible = true
         this.studentId = studentId
         this.name = name
         this.sex = sex
         this.profession = profession
         this.schoolCode = schoolCode
         this.fileUnit = fileUnit
         this.difficultyCategory = difficultyCategory
         this.professionalDirection = professionalDirection
         this.teacher = teacher
         this.help = help
         this.fileTransferIn = fileTransferIn
         this.hukouTransferIn = hukouTransferIn
         this.expectCity = expectCity
         this.expectSalary = expectSalary
         this.classStudent = classStudent
         this.password = password
         this.number = number
         this.hukouPoliceStation = hukouPoliceStation
         this.education = education
         this.trainingMethod = trainingMethod
         this.schoolSystem = schoolSystem
         this.candidateNumber = candidateNumber
         this.admissionTime = admissionTime
         this.graduationTime = graduationTime
         this.changes = changes
         this.academicDegree = academicDegree
         this.learningMethod = learningMethod
         this.professionDirection = professionDirection
         this.foreignLanguage = foreignLanguage
         this.foreignLanguageLevel = foreignLanguageLevel
         this.companyName = companyName
         this.birthday = birthday
         this.nation = nation
         this.politicalStatus = politicalStatus
         this.maritalStatus = maritalStatus
         this.phone = phone
         this.qq = qq
         this.email = email
         this.urbanSource = urbanSource
         this.sourceArea = sourceArea
         this.sourceAreaCode = sourceAreaCode
         this.address = address
         this.homeZipCode = homeZipCode
         this.familyContact = familyContact
         this.familyPhone = familyPhone
         this.expectJob = expectJob
         this.expectSalaryMin = expectSalaryMin
         this.expectSalaryMax = expectSalaryMax
         this.expectCityCode = expectCityCode
         this.employmentJob = employmentJob
         this.employmentSalary = employmentSalary
         this.employmentCity = employmentCity
         this.employmentCityCode = employmentCityCode
         this.employmentName = employmentName
         this.obj=obj
        // 传输数据
         setTimeout(function(){
           Tool.$emit('ALLData',obj);
        },4000); 
    },

    //点击查询功能
      search(){
        this.formInline.current = 1
        this.formInline.size = this.size     
        api.fetch(this.formInline).then(response=>{
            const res = response.data
            console.log(res)
            this.tableData = res.data.list
            this.total = res.data.totalCount
            this.size = res.data.size
            this.current = res.data.current
            //this.current = 1 当current不是1时，查询不到具体数据
        })
      },

      submit() {
        this.formInline.current = this.current
        this.formInline.size = this.size     
        api.fetch(this.formInline).then(response=>{
            const res = response.data
            console.log(res)
            this.tableData = res.data.list
            this.total = res.data.totalCount
            this.size = res.data.size
            this.current = res.data.current
        })
      },

      //改变每页显示条数
      handleSizeChange(val){
        this.size=val
        this.search()
      },

      //改变当前页
      handleCurrentChange(current){
        this.current=current
        this.submit()
        },

      cellstyle(row, column, rowIndex, columnIndex){
        return "text-align: center";
      },
      reset() {
        this.formInline.studentId = ''
        this.formInline.name = ''
        this.formInline.profession = ''
        this.formInline.classStudent = ''
        this.formInline.city = ''
        this.formInline.salaryMin = ''
        this.formInline.salaryMax = ''
      }
    },
    components:{

    }
}
</script>

<style lang="scss" scoped>
.info-from{
  margin-top: 5%;
  padding:0 5%;
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
// .el-table-column{
//   padding: 25px;
// }
.info-from[data-v-8dbae5ca]{
  text-align: left;
}
.el-pagination {
    text-align: center; 
}
 .btn{
   position: absolute;
   top: 10px;
   right: 70px;
 }

</style>