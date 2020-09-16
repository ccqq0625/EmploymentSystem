<template>
<div class="containner">
    <div id="head">
        <h1><strong>湖北文理学院2017届就业情况</strong></h1>
    </div>
    <el-divider></el-divider>
    <el-row class="tac"> 
        <el-col :span="4">
        <el-menu
        :router=true
        default-active="0"
        class="el-menu-vertical-demo"
        @select="handleSelect"  
        text-color="#000000"
        active-text-color="#333399">
        <el-menu-item index="1">
            <span slot="title">马克思主义学院</span>
        </el-menu-item>
        <el-menu-item index="College/Physical">
            <span slot="title">体育学院</span>
        </el-menu-item>
        <el-menu-item index="3">
            <span slot="title">数学与统计学院</span>
        </el-menu-item>
        <el-menu-item index="4">
            <span slot="title">汽车与交通工程学院</span>
        </el-menu-item>
        <el-menu-item index="5">
            <span slot="title">食品科学技术学院-化学工程学院</span>
        </el-menu-item>
        <el-menu-item index="6">
            <span slot="title">经济管理学院</span>
        </el-menu-item>
        <el-menu-item index="7">
            <span slot="title">政法学院</span>
        </el-menu-item>
        <el-menu-item index="8">
            <span slot="title">文学与传媒学院</span>
        </el-menu-item>
        <el-menu-item index="9">
            <span slot="title">物理与电子工程学院</span>
        </el-menu-item>
        <el-menu-item index="10">
            <span slot="title">机械工程学院</span>
       </el-menu-item>
        <el-menu-item index="11">
            <span slot="title">医学院</span>
        </el-menu-item>
        <el-menu-item index="12">
            <span slot="title">美术学院</span>
        </el-menu-item>
        <el-menu-item index="13">
            <span slot="title">教育学院</span>
        </el-menu-item>
        <el-menu-item index="14">
            <span slot="title">外国语学院</span>
        </el-menu-item>
        <el-menu-item index="College/Computer">
            <span slot="title">计算机工程学院</span>
        </el-menu-item>
        <el-menu-item index="16">
            <span slot="title">土木工程与建筑学院</span>
        </el-menu-item>
        <el-menu-item index="17">
            <span slot="title">资源环境与旅游学院</span>
        </el-menu-item>
        <el-menu-item index="18">
            <span slot="title">音乐与舞蹈学院</span>
        </el-menu-item>
        </el-menu>
    </el-col>
    </el-row>
    <div id="all">       
    </div>
    <div id="circle">
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
      let myChart = echarts.init(document.getElementById('all'));
      let option = {
        color: ['#f44'],
        tooltip : {
          trigger: 'axis',
          axisPointer : {
            type : 'shadow'
          }
        },
        xAxis : [
          {
            type : 'category',
            data : ['马克思主义学院',
                    '体育学院',
                    '数学与统计学院',
                    '汽车与交通工程学院',
                    '食品科学技术学院-化学工程学院',
                    '经济管理学院',
                    '政法学院',
                    '文学与传媒学院',
                    '物理与电子工程学院',
                    '机械工程学院',
                    '医学院',
                    '美术学院',
                    '教育学院',
                    '外国语学院',
                    '计算机工程学院',
                    '土木工程与建筑学院',
                    '资源环境与旅游学院',
                    '音乐与舞蹈学院'],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis : [
          {
            type : 'value'
          }
        ],
        series : [
          {
            name:'就业',
            type:'bar',
            barWidth: '40%',
            data:[995,666,444,858,654,236,645,546,846,225,547,356,526,654,851,654,435,962]
          }
        ]
      };
      myChart.setOption(option);
      //建议加上以下这一行代码，不加的效果图如下（当浏览器窗口缩小的时候）。超过了div的界限（红色边框）
        window.addEventListener('resize',function() {myChart.resize()});

        let chart2 = echarts.init(document.getElementById('circle'));
        let option2 = {
    title: {
        text: '各学院占比',
        left: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['马克思主义学院', 
                '体育学院', 
                '数学与统计学院', 
                '汽车与交通工程学院', 
                '食品科学技术学院-化学工程学院',
                '经济管理学院',
                '政法学院',
                '文学与传媒学院',
                '物理与电子工程学院',
                '机械工程学院',
                '医学院',
                '美术学院',
                '教育学院',
                '外国语学院',
                '计算机工程学院',
                '土木工程与建筑学院',
                '资源环境与旅游学院',
                '音乐与舞蹈学院']
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
                {value: 335, name: '马克思主义学院'},
                {value: 310, name: '体育学院'},
                {value: 432, name: '数学与统计学院'},
                {value: 580, name: '汽车与交通工程学院'},
                {value: 365, name: '食品科学技术学院-化学工程学院'},
                {value: 522, name: '经济管理学院'},
                {value: 421, name: '政法学院'},
                {value: 456, name: '文学与传媒学院'},
                {value: 555, name: '物理与电子工程学院'},
                {value: 621, name: '机械工程学院'},
                {value: 410, name: '医学院'},
                {value: 356, name: '美术学院'},
                {value: 396, name: '教育学院'},
                {value: 400, name: '外国语学院'},
                {value: 580, name: '计算机工程学院'},
                {value: 536, name: '土木工程与建筑学院'},
                {value: 352, name: '资源环境与旅游学院'},
                {value: 320, name: '音乐与舞蹈学院'},
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
            chart2.setOption(option2);
    },
    watch: {},
    created() {
 
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
        /* background-color: oldlace; */
    }
    .containner{
        position: relative;
        /* margin-left: 0 !important;
        margin-right: 2 !important; */
    }

    .el-row::after, .el-row::before {
        display: table;
    }

    .el-divider{
        margin-bottom: 0;
    }

    #all{
        width: 1200px;
        height: 550px;
        position: absolute;
        right: 0;
        top: 60px;
    }

    h1{
        text-align: center;
        padding: 30px;
        font-size: 18px;
    }

    #head{
        width: auto 0;
        height: 50px;
        text-align: center;
    }
    #circle{
        width: 1200px;
        height: 600px;
        position: absolute;
        right: 0;
        top: 630px;
    }
</style>