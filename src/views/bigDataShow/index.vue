<template>
    <div>
        <big-screen v-if="flag" :Legends="Legends" :seriesData="seriesData"></big-screen>
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
            flag:false,
            seriesData:[],
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
            this.flag=true
          })

          dataApi.workFecth('计算机工程学院',null,null).then(Response=>{
            const resp1=Response.data
            this.datacwx1=resp1.data.listData
            this.Legends1=resp1.data.listName
            this.seriesData1=resp1.data.listValue
            this.flag2=true
          })

          dataApi.eduFecth('计算机工程学院',null,null).then(Response=>{
            const resp2=Response.data
            this.datacwx2=resp2.data.listData
            this.Legends2=resp2.data.listName
            this.seriesData2=resp2.data.listValue
            this.flag3=true
          })

      },
    },
    components:{BigScreen},


}
</script>

<style lang="">
    
</style>