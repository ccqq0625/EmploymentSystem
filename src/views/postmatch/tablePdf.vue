 <template>
    <div  id="pdfTest">
        <center>
        <table cellpadding="0" cellspacing="0" ref="print">
            <caption><h1><strong>就业公司匹配表</strong></h1></caption>
            <tbody align="center">
                <tr style="text-align: center;"><td colspan="6" rowspan="3" style="border: 0; font-size: 27px;">学生期望职位</td></tr>
                <tr></tr>
                <tr></tr>
                <tr>
                    <th style="border: 0;"></th>
                    <th>姓名</th>
                    <th>期望岗位</th>
                    <th>期望薪资</th>
                    <th>期望城市</th>
                </tr>
                <tr>
                    <td style="border: 0;"></td>
                    <td>{{formInline.name}}</td>
                    <td>{{formInline.job}}</td>
                    <td>{{formInline.salary}}</td>
                    <td>{{formInline.city}}</td>
                </tr>
                <tr style="text-align: center;"><td colspan="6" rowspan="3" style="border: 0; font-size:27px;font-weigh:200">职业匹配结果</td></tr>
                <tr></tr>
                <tr></tr>
                <tr>
                    <th>企业名称</th>
                    <th>招聘岗位</th>
                    <th>期望薪资</th>
                    <th>所在城市</th>
                    <th>联系电话</th>
                    <th>匹配度(%)</th>
                </tr>
                <tr v-if="flag"><td colspan="6">无</td></tr>
                <tr v-for="(item,index) in formInline.companys" :key="index">
                    <td>{{item.name}}</td>
                    <td>{{item.job}}</td>
                    <td>{{item.salary}}</td>
                    <td>{{item.city}}</td>
                    <td>{{item.phone}}</td>
                    <td>{{item.suitability}}</td>
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
            flag:false
        }
    },
    mounted(){
        setTimeout(()=>{
                  if(this.formInline.companys.length==0){
            this.flag=true
            console.warn(this.flag)
        }
        },5000)
  
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
h1{
    margin-top: 40px;
    margin-bottom: 30px;
    font-weight: 800;
    font-size: 40px;
}
#pdfTest{
     background-color: white;
     background-size: 100% auto;
     width: 100%;
     height: 100%;
     margin-bottom: 40px;
     
}
div{
    background-color: white;
}
table{
    align-content: center;
    padding-bottom: 500px;
    font-weight: 500;
    font-size: 15px;
   width: 800px;
   height: 637px;
   margin: 0 auto;

   
}
th,td{
    border: black solid 1px;
    padding: 0 0 0 0!important;
    margin: 0;
    display:table-cell;
    vertical-align:middle;
    text-align: center;
    font-size: 15px;
}
thead{
    text-align: center;
}

</style>