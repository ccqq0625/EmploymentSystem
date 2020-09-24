<template>
  <div>
    <Co32 v-if="flag1&&flag2&&flag3"  :datacwx="datacwx" :Legends="Legends" :seriesData="seriesData" :datacwx1="datacwx1" :Legends1="Legends1" :seriesData1="seriesData1" :datacwx2="datacwx2" :Legends2="Legends2" :seriesData2="seriesData2"></Co32>
  </div>
</template>

<script>
import echarts from 'echarts'
import Co32 from './Co32.vue'
import dataApi from '@/api/dataShow.js'




export default {
  name:'Co32Main',
  components:{Co32},
  data(){
      return {
          datacwx: [],
          Legends: [], 
          seriesData:[],
          datacwx1:[],
          Legends1:[],
          seriesData1:[],
          datacwx2:[],
          Legends2:[],
          seriesData2:[],
          flag1:false,
          flag2:false,
          flag3:false
      }
  },
  mounted(){
      this.fecthData()

  },
  methods:{
      fecthData(){
          dataApi.fecth().then(Response=>{
            const resp=Response.data
            this.datacwx=resp.data.listData
            this.Legends=resp.data.listName
            this.seriesData=resp.data.listValue
            this.flag1=true
          })

          dataApi.workFecth(null,null,'物联网1712').then(Response=>{
            const resp1=Response.data
            this.datacwx1=resp1.data.listData
            this.Legends1=resp1.data.listName
            this.seriesData1=resp1.data.listValue
            this.flag2=true
          })

            dataApi.eduFecth(null,null,'物联网1712').then(Response=>{
            const resp2=Response.data
            this.datacwx2=resp2.data.listData
            this.Legends2=resp2.data.listName
            this.seriesData2=resp2.data.listValue
            this.flag3=true
          })



      },

  }
}
</script>

<style lang="scss" scoped>
</style>