<template>
    <div>
        <Pro-2018
        v-if="flag1&&flag2&&flag3&&flag4&&flag5&&flag6" :Legends="Legends" :seriesData="seriesData"
        :datacwx1="datacwx1"
        :Legends2="Legends2" :seriesData2="seriesData2"
        :areaData="areaData"
        :scrollData="scrollData"
        :totalNum="totalNum"
        :employedNum="employedNum"
        :salaryLeg="salaryLeg"
        :salaryData="salaryData"
        >
        </Pro-2018>
    </div>
</template>

<script>
import api from '@/api/screenShow.js'
import Pro2018 from './pro2018.vue'

export default {
    data(){
        return{
            flag1:false,
            flag2:false,
            flag3:false,
            flag4:false,
            flag5:false,
            flag6:false,
            //柱状图2的坐标内容
            Legends: [],
            seriesData:[],
            // 就业类型饼图数据
            datacwx1:[],
            // 考公类型柱状图
            Legends2:[],
            seriesData2:[],
            //右2地区分布
            areaData:[],
            //信息滚动
            scrollData:[],
            // 学院总人数和已就业人数
            totalNum:0,
            employedNum:0,
            // 薪资
            salaryLeg:[],
            salaryData:[],
        }
    },
    mounted:function(){
      this.fecthData()   
      },
    methods:{
         fecthData(){
          api.getToatlData(null,'17',null,null).then(Response=>{
            //console.log("总体");
            const resp0=Response.data.data
            console.log(resp0)
            this.Legends=resp0.listName
            this.seriesData=resp0.listValue
            this.flag4=true
          })
          
          api.getWorkData(null,'17',null,null).then(Response=>{
              //this.Legends1=Response.data.data.listName
              this.datacwx1=Response.data.data.listData
              //this.seriesData1=Response.data.data.listValue
              this.flag5=true
          })

           api.getOfficeData(null,'17',null,null).then(Response=>{
              this.Legends2=Response.data.data.listName
              this.seriesData2=Response.data.data.listValue
              this.flag6=true
          })

            // 薪资
          api.getSalary(null,'17',null,null).then(response => {
             const resp6=response.data.data
            resp6.forEach(e => {
              this.salaryLeg.push(e.name)
            });
            resp6.forEach(e => {
              this.salaryData.push(e.value)
            })
            this.flag2=true
          })

          //调用地区接口
          api.showAreaCount(null,'17',null,null).then(response => {
            const resp4 = response.data
            this.areaData = resp4.data
            this.flag3=true
          })
          // 获取全院总人数和已就业人数
          api.digitalShow(null,'17',null,null,'就业').then(response => {
            const resp5=response.data
            this.totalNum=resp5.data.总人数,
            this.employedNum=resp5.data.就业
            this.flag1=true
           })
      
      },
    },
    components:{Pro2018},


}
</script>

<style lang="">
    
</style>