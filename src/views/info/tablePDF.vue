<template>
  <div  id="pdfTest">
      <center>
      <table cellpadding="0" cellspacing="0" align="center" ref="print">
          <caption><h2><strong>学生基本情况登记表</strong></h2></caption>
          <tbody align="center">
              <tr>
                  <td>姓名</td>
                  <td style="min-width: 100px">{{formInline.name}}</td>
                  <td style="max-width: 250px">性别</td>
                  <td>{{formInline.sex}}</td>
                  <td style="min-width: 100px">出生年月</td>
                  <td style="min-width: 100px">{{formInline.birthday}}</td>
              </tr>
               <tr>
                  <td>专业</td>
                  <td>{{formInline.profession}}</td>
                  <td>班级</td>
                  <td style="min-width: 100px">{{formInline.classStudent}}</td>
                  <td>学号</td>
                  <td>{{formInline.studentId}}</td>
              </tr>
               <tr>
                  <td>籍贯</td>
                  <td>{{formInline.hometown}}</td>
                  <td>民族</td>
                  <td>{{formInline.nation}}</td>
                  <td>户籍地</td>
                  <td>{{formInline.hometown}}</td>
              </tr>
              <tr>
                  <td>婚姻状况</td>
                  <td>{{formInline.maritalStatus}}</td>
                  <td>政治面貌</td>
                  <td>{{formInline.politicalStatus}}</td>
                  <td>身份证号</td>
                  <td>{{formInline.number}}</td>
              </tr>
               <tr>
                  <td>主修外语</td>
                  <td>{{formInline.foreignLanguage}}</td>
                  <td>外语等级</td>
                  <td>{{formInline.foreignLanguageLevel}}</td>
                  <td>*辅修外语</td>
                  <td></td>
              </tr>
               <tr>
                  <!-- <td>是否是本行业就业</td>
                  <td colspan="2"></td> -->
                  <td>困难生类别</td>
                  <td  colspan="2">{{formInline.difficultyCategory}}</td>
                  <td  colspan="2">是否是精准扶贫对象</td>
                  <td>{{formInline.help}}</td>
              </tr>
              <!-- <tr>
                  <td>困难生类别</td>
                  <td colspan="5">{{formInline.difficultyCategory}}</td>
              </tr> -->
              <tr>
                  <td rowspan="2">联系方式</td>
                  <td>电子邮件</td>
                  <td>{{formInline.email}}</td>
                  <td colspan="2">qq号码</td>
                  <td>{{formInline.qq}}</td>
              </tr>
              <tr>
                  <td>手机号码</td>
                  <td>{{formInline.phone}}</td>
                  <td colspan="2">*其他联系方式</td>
                  <td></td>
              </tr>
              <tr>
                  <td rowspan="8">学籍信息</td>
                  <td>学历</td>
                   <td>{{formInline.education}}</td>
                  <td>学制</td>
                  <td colspan="2">{{formInline.schoolSystem}}</td>
              </tr>
              <tr>
                  <td>入学时间</td>
                   <td>{{formInline.admissionTime}}</td>
                  <td>毕业时间</td>
                  <td colspan="2">{{formInline.graduationTime}}</td>
              </tr>
               <tr>
                  <td>学位</td>
                   <td>{{formInline.academicDegree}}</td>
                  <td>专业方向</td>
                  <td colspan="2">{{formInline.professDirection}}</td>
              </tr>
               <tr>
                  <td>学习方式</td>
                   <td>{{formInline.learningMethod}}</td>
                  <td>培养方案</td>
                  <td colspan="2">{{formInline.trainingMethod}}</td>
              </tr>
               <tr>
                  <td>城乡生源</td>
                   <td>{{formInline.urbanSource}}</td>
                  <td>生源地区</td>
                  <td colspan="2">{{formInline.sourceArea}}</td>
              </tr>
               <tr>
                  <td>学籍变动</td>
                   <td>{{formInline.changes}}</td>
                  <td colspan="2">生源地区代码</td>
                  <td colspan="1">{{formInline.sourceAreaCode}}</td>
              </tr>
               <tr>
                  <td colspan="2">档案是否在校</td>
                   <td>{{formInline.fileTransferIn}}</td>
                  <td olspan="2">户籍是否在校</td>
                  <td colspan="1">{{formInline.hukouTransferIn}}</td>
              </tr>
               <tr>
                  <td colspan="2">是否是师范生</td>
                   <td colspan="3">{{formInline.teacher}}</td>
              </tr>
              <tr>
                  <td rowspan="3">家庭信息</td>
                  <td>家庭住址</td>
                  <td colspan="5">{{formInline.address}}</td>
              </tr>
              <tr>
                  <td>家庭电话</td>
                  <td colspan="2">{{formInline.familyPhone}}</td>
                  <td>家庭联系人</td>
                  <td>{{formInline.familyContact}}</td>
              </tr>
              <tr>
                  <td colspan="2">户籍所在地派出所</td>
                  <td colspan="1">{{formInline.hukouPoliceStation}}</td>
                  <td>家庭邮编</td>
                  <td>{{formInline.homeZipCode}}</td>
              </tr>
              <tr>
                  <td style="min-width: 100px">期望就业岗位</td>
                  <td colspan="2">{{formInline.expectJob}}</td>
                  <td colspan="2">期望工作薪资</td>
                  <td>{{formInline.expectSalary}}</td>
              </tr>
               <tr>
                  <td>期望工作城市</td>
                  <td colspan="2">{{formInline.expectCity}}</td>
                  <td colspan="2">期望城市代码</td>
                  <td>{{formInline.expectCityCode}}</td>
              </tr>
              <tr>
                  <td>期望就业类型</td>
                  <td colspan="2">{{formInline.expectJobClassificationName}}</td>
                  <td colspan="2">就业类型</td>
                  <td>{{formInline.employmentJobClassificationName}}</td>
              </tr>
               <tr>
                    <td>实际就业岗位</td>
                  <td colspan="2">{{formInline.employmentJob}}</td>
                  <td colspan="2">实际就业城市代码</td>
                  <td>{{formInline.employmentCityCode}}</td>
              </tr>
              <tr>
                    <td>实际就业薪资</td>
                  <td colspan="2">{{formInline.employmentSalary}}</td>
                  <td colspan="2">实际工作城市</td>
                  <td>{{formInline.employmentCity}}</td>
              </tr>

          </tbody>
      </table>
      </center>
  </div>
</template>

<script>
import store from '../.././store/index';
import api from '../.././api/infomation';
import Tool from '../../tool';
export default {
    name:'tablePDF',
    props:{
      formInline:{
        type:Object,

      }
    },
    data(){
        return{
            tableLabelWidth:"120px",
        }
    }
}
</script>

<style  lang="scss" scoped>
body{
    background-color: white; 

}
center{
    padding-bottom: 50px;
}
h2{
    margin-top: 40px;
    margin-bottom: 30px;
    font-weight: 600;
    font-size: 25px;
}
#pdfTest{
    // margin-top: 50px;
     background-color: white;
     width: 100%;
     height: 100%;
     
}
div{
    background-color: white;
}
table{
    align-content: center;
    // width: 50%;
    // height: 70%;
    padding-bottom: 500px;
    font-weight: 500;
    font-size: 16px;
   width: 700px;
   height: 637px;

   
}
td{
    border: black solid 1.5px;
    padding: 0 0 0 0!important;
    margin: 0;
    display:table-cell;
    vertical-align:middle;
    //width: 125px !important;
    
}
thead{
    text-align: center;
}
tr{
    height: 20px;
}

</style>