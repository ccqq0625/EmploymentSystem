<template>
    <div>
        <pro-20172
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
        </pro-20172>
    </div>
</template>

<script>
import Pro20172 from './pro20172'

export default {
    data(){
        return{
            //柱状图2的坐标内容
            Legends: [],
            flag1:false,
            flag2:false,
            flag3:false,
            flag4:false,
            flag5:false,
            flag6:false,
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
    mounted(){
         
      },
    methods:{
        
    },
    components:{Pro20172},


}
</script>

<style lang="">
    
</style>