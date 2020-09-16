<template>
<div class="containner">
     <div id="head">
        <h1><strong>2017届计算机工程学院计算机科学与技术就业情况</strong></h1>
        <el-breadcrumb class="title" separator="/">
          <el-breadcrumb-item :to="{ path: '/show' }"><span style="font-size:20px">首页</span></el-breadcrumb-item>
          <el-breadcrumb-item><span style="font-size:20px">计算机院</span></el-breadcrumb-item>
          <el-breadcrumb-item><span style="font-size:20px">计算机科学与技术</span></el-breadcrumb-item>
        
        </el-breadcrumb>
    </div>
    <el-divider class="divde"></el-divider>
    <div class="bag">
    <el-row class="tac"> 
        <el-col :span="6.5">
        <el-menu
        :router=true
        default-active="0"
        mode="horizontal"
        class="el-menu-vertical-demo"
        @select="handleSelect">
            <el-menu-item index="/College/Com/Co11">
                <span slot="title">计科1711</span>          
            </el-menu-item>
            <el-menu-item index="">
                <span slot="title">计科1712</span>            
            </el-menu-item>
        </el-menu>
    </el-col>
    </el-row>
    </div>
    <el-tabs class="line" v-model="activeName" @tab-click="handleClick" :tab-position="tabPosition" style="height:550px">
            <el-tab-pane label="总体情况" name="first">
                <el-card class="box-card1" shadow="hover">
                    <div id="left"></div>
                    </el-card>
                    <el-card class="box-card2" shadow="hover">
                    <div id="right"></div>
                </el-card>
            </el-tab-pane>
            <el-tab-pane label="就业类型" name="second">
                <el-card class="box-card3" shadow="hover">
                    <div id="left1"></div>
                    </el-card>
                    <el-card class="box-card4" shadow="hover">
                    <div id="right1"></div>
                    </el-card>
            </el-tab-pane>
            <el-tab-pane label="考公类型" name="third">
                <el-card class="box-card5" shadow="hover">
                    <div id="left2"></div>
                    </el-card>
                    <el-card class="box-card6" shadow="hover">
                    <div id="right2"></div>
                    </el-card>
            </el-tab-pane>
        </el-tabs>
     
</div>
</template>

<script>
import echarts from 'echarts'
export default {
    data() {
      return {
          activeName: 'first',
          tabPosition: 'left'
    }
    },
    mounted() {
        let this_ = this;
        let myChart = echarts.init(document.getElementById('left'));

        let Chart2 = echarts.init(document.getElementById('right'));
        let Chart3 = echarts.init(document.getElementById('left1'));
        let Chart4 = echarts.init(document.getElementById('right1'));

        let Chart5 = echarts.init(document.getElementById('left2'));
        let Chart6 = echarts.init(document.getElementById('right2'));


        var weatherIcons = {};

        //条形统计图
        let option = {
            title: {
            text: '就业情况条形统计图',
            left: 'center'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            xAxis: {
                type: 'category',
                data: ['就业', '考研', '考公', '自主创业', '未就业'],
                axisTick: {
              alignWithLabel: true
            }
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [210, 50, 20, 10, 180],
                type: 'bar'
            }]
        };
         myChart.setOption(option)
        window.addEventListener('resize',function() {myChart.resize()});

        //扇形统计图
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
            data: ['已就业', '考公', '考研', '自主创业', '未就业']
        },
    series: [
        {
            type: 'pie',
            radius: '65%',
            center: ['50%', '50%'],
            selectedMode: 'single',
            data: [
                {value: 850,name: '已就业'},  
                {value: 535, name: '考公'},
                {value: 510, name: '考研'},
                {value: 320, name: '自主创业'},
                {value: 735, name: '未就业'}
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

      let option3 = {
            title: {
            text: '从事IT条形统计图',
            left: 'center'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            xAxis: {
                type: 'category',
                data: ['前端', '服务端', '移动端', '运维', '硬件'],
                axisTick: {
              alignWithLabel: true
            }
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [120, 200, 150, 80, 70],
                type: 'bar',
                color: 'rgba(180, 220, 220, 0.8)'
               
            }]
        };
        Chart3.setOption(option3);
        window.addEventListener('resize',function() {Chart3.resize()});

        //就业饼状图
        let option4 = {
            title: {
            text: '从事IT扇形统计图',
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
            data: ['前端', '服务端', '移动端', '运维', '硬件']
        },
    series: [
        {
            type: 'pie',
            radius: '65%',
            center: ['50%', '50%'],
            selectedMode: 'single',
            data: [
                {value: 850,name: '前端'},  
                {value: 535, name: '服务端'},
                {value: 510, name: '移动端'},
                {value: 320, name: '运维'},
                {value: 735, name: '硬件'}
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                }
            }
        }
    ]
};
        Chart4.setOption(option4);
        window.addEventListener('resize',function() {Chart4.resize()});

let option5 = {
            title: {
            text: '考公类型条形统计图',
            left: 'center'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            xAxis: {
                type: 'category',
                data: ['公职类公务员', '事业单位', '教师', '西部计划', '三支一扶'],
                axisTick: {
              alignWithLabel: true
            }
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [120, 200, 150, 80, 70, 110, 130],
                type: 'bar',
                color: 'rgba(180, 170, 220, 0.8)'
               
            }]
        };
        Chart5.setOption(option5);
        window.addEventListener('resize',function() {Chart5.resize()});

        //就业饼状图
        let option6 = {
            title: {
            text: '考公类型扇形统计图',
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
            data: ['公职类公务员', '事业单位', '教师', '西部计划', '三支一扶']
        },
    series: [
        {
            type: 'pie',
            radius: '65%',
            center: ['50%', '50%'],
            selectedMode: 'single',
            data: [
                {value: 850,name: '公职类公务员'},  
                {value: 535, name: '事业单位'},
                {value: 510, name: '教师'},
                {value: 320, name: '西部计划'},
                {value: 735, name: '三支一扶'}
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
        Chart6.setOption(option6);
        window.addEventListener('resize',function() {Chart6.resize()});
        

},
 methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClick(tab, event) {
        console.log(tab, event);
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
    h1{
        text-align: center;
        padding: 0;
        margin-top: 20px;
        font-size: 18px;

    }

    .title{
        text-align: center;
        margin-left: 40px;
    }
    .el-col{
        position: relative;
        left: 43%;
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
        
        width: 500px;
        height: 450px;
        float: left;
    }

    #right{
        display: block;
        width: 500px;
        height: 450px;
    
    }
    #left1{
        
        width: 500px;
        height: 450px;
        float: left;
    }
    #left2{

        width: 500px;
        height: 450px;
        float: left;
    }


#right1{
  
        width: 500px;
        height: 450px;

    }
    #right2{
        width: 500px;
        height: 450px;
    }
    

    .box-card1 {
        width: 550px;
        height: 500px;
        float: left;
        margin-top: 50px;
        margin-left: 100px;
  }

    .box-card2 {
        width: 550px;
        height: 500px;
        float: left;
        margin-top: 50px;
        margin-left: 100px;
  }
  .box-card3 {
        width: 550px;
        height: 500px;
        float: left;
        margin-top: 50px;
        margin-left: 100px;
  }

    .box-card4 {
        width: 550px;
        height: 500px;
        float: left;
        margin-top: 50px;
        margin-left: 100px;
  }
    .box-card5 {
        width: 550px;
        height: 500px;
        float: left;
        margin-top: 50px;
        margin-left: 100px;
  }

    .box-card6 {
        width: 550px;
        height: 500px;
        float: left;
        margin-top: 50px;
        margin-left: 100px;
  }
    p{
        margin: 0 auto;
        font-size: 20px;
        font-weight: 900;
        color: brown;
    }

    .el-divider{
        margin-bottom: 0;
    }

</style>