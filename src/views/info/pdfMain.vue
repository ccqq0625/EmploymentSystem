<template>
  <div>
      <!-- <pdf-test :formInline="formInline" :key="formInline.id"/> -->
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
            //countDownNum:10,
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
           }],
           formInline:{},
        }
    },
    mounted(){
           Tool.$on('ALLData',(obj)=> {
            console.log('---PDF')
                  this.$nextTick(function(){
                     
                    //  console.log(obj.hukouTransferIn,"obj.hukouTransferIn")
                    //   console.log(obj.fileTransferIn,"obj.fileTransferIn")
                    //   console.log(obj.help,"obj.help")
                    //   console.log(obj.teacher,"obj.teacher")
                    obj.hukouTransferIn=obj.hukouTransferIn?"是":"否";                   
                    obj.fileTransferIn=obj.fileTransferIn?"是":"否";
                   obj.help=obj.help?"是":"否";
                     obj.teacher= obj.teacher?"是":"否";

                    // if(obj.hukouTransferIn=="是"||obj.hukouTransferIn==true){ obj.hukouTransferIn="是"}
                    // else {obj.hukouTransferIn="否"}

                    //  if(obj.fileTransferIn=="是"||obj.fileTransferIn==true){ obj.fileTransferIn="是"}
                    // else {obj.fileTransferIn="否"}

                    // if(obj.help=="是"||obj.help==true){ obj.fileTransferIn="是"}
                    // else {obj.fileTransferIn="否"}

                    // if(obj.teacher=="是"||obj.teacher==true){ obj.teacher="是"}
                    // else {obj.teacher="否"}
                     this.formInline=obj; 
                    
                  })
                  

          
        });

       
        //  setTimeout(() => {
        //     this.getPdf('#pdfTest', '页面打印成pdf的测试');
        // },9000);  
       // this.$print(this.$refs.print);
         setTimeout(() => {
            this.$print(this.$refs.print);
        },9000);  
      
    },
    created(){
        // let clock=window.setInterval(() => {
        //     this.countDownNum--;
        //     this.messageText='此预览页将在'+this.countDownNum+'秒后关闭并返回上一个页面';
        // },1000);   

         this.$message({
            //dangerouslyUseHTMLString: true,
            //10秒
            duration:3000,
            message:'此预览页将在10秒后关闭并返回上一个页面',
        });
       

        

        //10秒后跳转上一个页面/info
        // setTimeout(function(){
        //   this.$router.push('/info');
        // }.bind(this),10000);


        // console.log("PDF预览页：")
        // console.log(this.$store.state.allDate);

        
        
    },
    
    methods:{
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

</style>