<template>
  <div id="pdfTest">
      <div class="pdfDemo">
              <el-divider>基本信息</el-divider>
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
                    <el-form-item label="主修外语" :label-width="formLabelWidth">
                      <el-input v-model="tableData.foreignLanguage" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="外语级别" :label-width="formLabelWidth">
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
                   <el-form-item label="户籍派出所" :label-width="formLabelWidth">
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
                    <el-form-item label="生源地代码" :label-width="formLabelWidth">
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
                    <el-form-item label="家庭联系人" :label-width="formLabelWidth">
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
                 </el-form>
          <el-divider>期望工作的相关信息</el-divider>
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
               <el-divider>实际就业的信息</el-divider>
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
          <el-divider>学分相关信息</el-divider>
          <p>暂无</p>
        </div>
  </div>
</template>

<script>
export default {
    name:'pdfTest',
    components:{},
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
            formInline:{
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
        }
    },
    mounted(){
        this.getPdf('#pdfTest', '页面打印成pdf的测试');
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
        setTimeout(function(){
          this.$router.push('/info');
        }.bind(this),10000);

    },
    
    methods:{
    }
}
</script>

<style>
.pdfDemo{
    align-items: center;
    text-align: center;
    padding:20px 70px ! important;
    background-color: white;
}

</style>