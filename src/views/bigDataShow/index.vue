<template>
    <div>
        <big-screen v-if="flag4&&flag5&&flag6" :Legends="Legends" :seriesData="seriesData" :datacwx1="datacwx1" :Legends2="Legends2" :seriesData2="seriesData2"></big-screen>
    </div>
</template>

<script>
import BigScreen from './bigScreen'
import dataApi from '@/api/dataShow.js'

export default {
    data(){
        return{
            //柱状图2的坐标内容
            Legends: [],
            flag4:false,
            flag5:false,
            flag6:false,
            seriesData:[],
            // 就业类型饼图数据
            datacwx1:[],
            // 考公类型柱状图
            Legends2:[],
            seriesData2:[],
        }
    },
    mounted(){this.fecthData()},
    methods:{
         fecthData(){
          dataApi.fecth('计算机工程学院',null,null).then(Response=>{
            const resp=Response.data
            this.datacwx=resp.data.listData
            this.Legends=resp.data.listName
            this.seriesData=resp.data.listValue
            this.flag4=true
          })

          dataApi.workFecth('计算机工程学院',null,null).then(Response=>{
            const resp1=Response.data
            this.datacwx1=resp1.data.listData
            this.Legends1=resp1.data.listName
            this.seriesData1=resp1.data.listValue
            this.flag5=true
          })

          dataApi.eduFecth('计算机工程学院',null,null).then(Response=>{
            const resp2=Response.data
            this.datacwx2=resp2.data.listData
            this.Legends2=resp2.data.listName
            this.seriesData2=resp2.data.listValue
            this.flag6=true
          })

      },
    },
    components:{BigScreen},


}
</script>

<style lang="">
    
</style>