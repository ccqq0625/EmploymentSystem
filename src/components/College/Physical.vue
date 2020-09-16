<template>
<div class="containner">
     <div id="head">
        <h1><strong>2017届体育学院就业情况</strong></h1>
    </div>
    <el-divider></el-divider>
    <div class="bag">
    <el-row class="tac"> 
        <el-col :span="4">
        <el-menu
        :router=true
        default-active="0"
        mode="horizontal"
        class="el-menu-vertical-demo"
        @select="handleSelect"
        text-color="#000000"
        active-text-color="#333399">
            <el-submenu index="1">
                <span slot="title">专业1</span>
                <el-menu-item-group>
                    <el-menu-item index="/College/Phy/Phy1">1班</el-menu-item>
                    <el-menu-item index="1-2">2班</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        <el-menu-item index="2">
            <span slot="title">专业2</span>
        </el-menu-item>
        <el-menu-item index="3">
            <span slot="title">专业3</span>
        </el-menu-item>
        </el-menu>
    </el-col>
    </el-row>
    </div>
    <div id="left">

    </div>
    <div id="right">

    </div>
</div>
</template>

<script>
import echarts from 'echarts'
export default {
    data() {
      return {
    }
    },
    mounted() {
        let this_ = this;
        let myChart = echarts.init(document.getElementById('left'));
        let Chart2 = echarts.init(document.getElementById('right'));
        var weatherIcons = {};
        let option = {
            title: {
            text: '就业情况条形统计图',
            left: 'center'
            },
            xAxis: {
                type: 'category',
                data: ['软工', '计科', '物联网', '待定1', '待定2', '待定3', '待定4'],
                axisTick: {
              alignWithLabel: true
            }
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [210, 230, 180, 80, 70, 110, 130],
                type: 'bar'
            }]
        };
         myChart.setOption(option)
        window.addEventListener('resize',function() {myChart.resize()});


        let option2 = {
            title: {
            text: '就业情况扇形统计图',
            left: 'center'
            },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
            // orient: 'vertical',
            // top: 'middle',
            bottom: 10,
            left: 'center',
            data: ['已就业', '未就业', '待定1', '待定2', '待定3']
        },
    series: [
        {
            type: 'pie',
            radius: '65%',
            center: ['50%', '50%'],
            selectedMode: 'single',
            data: [
                {value: 1548,name: '已就业'},  
                {value: 535, name: '未就业'},
                {value: 510, name: '待定1'},
                {value: 634, name: '待定2'},
                {value: 735, name: '待定3'}
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
        Chart2.setOption(option2);
        window.addEventListener('resize',function() {Chart2.resize()});        

},
 methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<style>
    body{
        margin: 0;
        padding: 0;
        /*background-image: url('../assets/a.jpg');*/
        background-color: oldlace;
    }
    h1{
        text-align: center;
        padding: 30px;
        font-size: 18px;
    }
    .el-col{
        position: relative;
        left: 42%;
    }
    .containner{
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
    }
    #head{
        width: auto 0;
        height: 50px;
        text-align: center;
    }
    #left{
        display: block;
        width: 650px;
        height: 600px;
        
        float: left;
        margin-left: 50px;
    }
    #right{
        display: block;
        width: 650px;
        height: 600px;
        float: left;
        margin-left: 80px;
    }
    .el-divider{
        margin-bottom: 0;
    }
</style>