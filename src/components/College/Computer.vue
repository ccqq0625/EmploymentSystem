<template>
<div class="containner">
     <div id="head">
        <h1><strong>2017届计算机工程学院就业情况</strong></h1>
        <el-breadcrumb class="title" separator="/">
          <el-breadcrumb-item :to="{ path: '/show' }"><span style="font-size:20px">计算机工程学院</span></el-breadcrumb-item>
        </el-breadcrumb>
        <el-button type="primary" class="btn" @click="replace()">返回首页</el-button>
    </div>
    <el-divider class="divde"></el-divider>
    <div class="bag">
    <el-row class="tac"> 
        <el-col :span="6.5" class="computer"> 
        <el-menu
        :router="true"
        default-active="0"
        mode="horizontal"
        class="el-menu-vertical-demo"
        @select="handleSelect">
            <el-menu-item index="/College/Com/Co1Main">
                <span slot="title"><i class="el-icon-star-off"></i>计算机科学与技术</span>          
            </el-menu-item>
            <el-menu-item index="/College/Com/Co2Main">
                <span slot="title"><i class="el-icon-help"></i>软件工程</span>
            </el-menu-item>
            <el-menu-item index="/College/Com/Co3Main">
                <span slot="title"><i class="el-icon-connection"></i>物联网工程</span>
            </el-menu-item>
        </el-menu>
    </el-col>
    </el-row>
    </div>
    <el-tabs type="card" class="line" v-model="activeName" @tab-click="handleClick" :tab-position="tabPosition" style="height:550px">
            <el-tab-pane label="总体情况" name="first">
                <el-card class="box-card1" >
                    <div ref="left" :style="{width:width ,height:height}"></div>
                    </el-card>
                    <el-card class="box-card2" >
                    <div ref="right" :style="{width:width ,height:height}"></div>
                </el-card>
            </el-tab-pane>
            <el-tab-pane label="就业类型" name="second">
                <el-card class="box-card3" >
                    <div ref="left1" :style="{width:width ,height:height}"></div>
                    </el-card>
                    <el-card class="box-card4">
                    <div ref="right1" :style="{width:width ,height:height}"></div>
                    </el-card>
            </el-tab-pane>
            <el-tab-pane label="考公类型" name="third">
                <el-card class="box-card5" >
                    <div ref="left2" :style="{width:width ,height:height}"></div>
                    </el-card>
                    <el-card class="box-card6" shadow="hover">
                    <div ref="right2" :style="{width:width ,height:height}"></div>
                    </el-card>
            </el-tab-pane>
        </el-tabs>
     
</div>
</template>

<script>
import echarts from 'echarts'
import 'echarts/theme/macarons'
import 'echarts/theme/roma'
import 'echarts/theme/shine'
import dataApi from '@/api/dataShow.js'
export default {
    props:{
        datacwx:{
            type:Array,
        },
        Legends:{
            type:Array
        },
        seriesData:{
            type:Array
        },
        datacwx1:{
            type:Array,
        },
        Legends1:{
            type:Array
        },
        seriesData1:{
            type:Array
        },
        datacwx2:{
            type:Array,
        },
        Legends2:{
            type:Array
        },
        seriesData2:{
            type:Array
        },
        width:{
            type:String,
            default:'500px'
        },
         height:{
            type:String,
            default:'400px'
        },
    },
    data() {
      return {
          myChart:null,
          Chart2:null,
          Chart3:null,
          Chart4:null,
          Chart5:null,
          Chart6:null,
          activeName: 'first',
          tabPosition: 'left',    
    }
    },
   

mounted(){
        this.$nextTick(()=>{
            this.moun()
        }) 
    },
 methods: {

     moun() {
        this.myChart = echarts.init(this.$refs.left,'shine');
        this.Chart2 = echarts.init(this.$refs.right,'shine');
        this.Chart3 = echarts.init(this.$refs.left1,'roma');
        this.Chart4 = echarts.init(this.$refs.right1,'roma');
        this.Chart5 = echarts.init(this.$refs.left2,'macarons');
        this.Chart6 = echarts.init(this.$refs.right2,'macarons');


        //条形统计图
        var option = {
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
                data:this.Legends,
                axisTick: {
              alignWithLabel: true
            }
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: this.seriesData,
                type: 'bar',
                itemStyle: {        //上方显示数值
                normal: {
                    label: {
                        show: true, //开启显示
                        position: 'top', //在上方显示
                        textStyle: { //数值样式
                            color: 'black',
                            fontSize: 16
                        }
                    }
                }
            }
            }]
        };
         this.myChart.setOption(option)

        //扇形统计图
        let option2 = {
            title: {
            text: '就业情况扇形统计图',
            left: 'center'
            },
        tooltip: {
            trigger: 'item',
            formatter: '数据 <br/>{b} : {c} <br/>({d}%)'
        },
        legend: {
            // orient: 'vertical',
            // top: 'middle',
            bottom: 10,
            left: 'center',
            data:this.Legends
            
        },
    series: [
        {
            type: 'pie',
            radius: '55%',
            center: ['50%', '50%'],
            selectedMode: 'single',
            data:this.datacwx,
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
            itemStyle: {
                normal: {
                     label: {
                         show: true,
                        //  position: 'inner',
                         formatter: '{b}({d}%)'
                         }
                        }
                    }
            }
        ]
};
        this.Chart2.setOption(option2);

      let option3 = {
            title: {
            text: '就业类型条形图',
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
                data: this.Legends1,
                axisTick: {
              alignWithLabel: true
            },
            axisLabel: {
                interval: 0,
                rotate: 20
                }
            },
            yAxis: {
                type: 'value'
            },
    //        grid: {
    //     left: "3%",
    //     right: "4%",
    //     bottom: "3%",
    //     width: "820px",
    //     height: "280px",
    //     containLabel: true
    // },
        
            series: [{
                data: this.seriesData1,
                type: 'bar',
                // color: 'rgba(180, 220, 220, 0.8)'
                itemStyle: {        //上方显示数值
                normal: {
                    label: {
                        show: true, //开启显示
                        position: 'top', //在上方显示
                        textStyle: { //数值样式
                            color: 'black',
                            fontSize: 16
                        }
                    }
                }
            }
               
            }]
        };
        this.Chart3.setOption(option3);

        //就业饼状图
        let option4 = {
            title: {
            text: '就业类型饼图',
            left: 'center'
            },
        tooltip: {
            trigger: 'item',
            formatter: '数据 <br/>{b} : {c} <br/>({d}%)'
        },
        legend: {
            // orient: 'vertical',
            // top: 'middle',
            bottom: 10,
            left: 'center',
            data: this.Legends1
        },
    series: [
        {
            type: 'pie',
            radius: '55%',
            center: ['50%', '50%'],
            selectedMode: 'single',
            data:this.datacwx1,
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                }
            },
            //让数据直接显示在页面上。不通过鼠标
            itemStyle: {
                normal: {
                     label: {
                         show: true,
                        //  position: 'inner',
                         formatter: '{b}({d}%)'
                         }
                        }
                    }
        }
    ]
};
        this.Chart4.setOption(option4);

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
                data: this.Legends2,
                axisTick: {
              alignWithLabel: true
            },
            // axisLabel: {
            //     interval: 0,
            //     rotate: 20
            // }
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: this.seriesData2,
                type: 'bar',
                color: 'rgba(180, 170, 220, 0.8)',
                itemStyle: {        //上方显示数值
                normal: {
                    label: {
                        show: true, //开启显示
                        position: 'top', //在上方显示
                        textStyle: { //数值样式
                            color: 'black',
                            fontSize: 16
                        }
                    }
                }
            }
               
            }]
        };
        this.Chart5.setOption(option5);

        //就业饼状图
        let option6 = {
            title: {
            text: '考公类型扇形统计图',
            left: 'center'
            },
        tooltip: {
            trigger: 'item',
            formatter: '数据 <br/>{b} : {c} <br/>({d}%)'
        },
        legend: {
            // orient: 'vertical',
            // top: 'middle',
            bottom: 10,
            left: 'center',
            data: this.Legends2
        },
    series: [
        {
            type: 'pie',
            radius: '55%',
            center: ['50%', '50%'],
            selectedMode: 'single',
            data: this.datacwx2,
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
            itemStyle: {
                normal: {
                     label: {
                         show: true,
                        //  position: 'inner',
                         formatter: '{b}({d}%)'
                         }
                        }
                    }
        }
    ]
};

   
        this.Chart6.setOption(option6);    
},

      handleSelect(key, keyPath) {
        // console.log(key, keyPath);
      },
      handleClick(tab, event) {
        // console.log(tab, event);
        // console.log(this.activeName)
      },

      replace(){
          this.$router.replace('/home')
          if(this.$router.history.current.path=='/home')
          {
              location.reload()
              //this.$router.go(0)
          }
           
      }

    }
    
}
</script>

<style>
    /* body{
        margin: 0;
        padding: 0;
        background-color: oldlace;
    } */

    .btn{
        position: absolute !important;
        right: 10px !important;
        top:53px;
        
    }
    h1{
        text-align: center;
        padding: 0;
        margin-top: 30px;
        font-size: 35px;
        color:#666699;
        font-family:'Courier New', Courier, monospace
    }
    .title{
        text-align: center;
        margin-left: 40px;
    }
    .computer{
        position: relative !important;
        left: 38% !important;
    }
    /* .containner{
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
    } */
    #head{
        width: auto 0;
        height: 50px;
        text-align: center;
    }
    /* #left{
        
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
    } */
    

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