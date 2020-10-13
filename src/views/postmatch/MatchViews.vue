<template>
  <div class="match-views">
      <el-row :gutter="20" class="row">
        <el-col :span="12" :offset="6">
            <el-card class="box-card">
                    <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="姓名">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="专业">
                    <el-select v-model="form.region" placeholder="请选择专业">
                    <el-option label="计算机科学与技术" value="technology"></el-option>
                    <el-option label="软件工程" value="software"></el-option>
                    <el-option label="物联网" value="Internet"></el-option>
                    </el-select>
                </el-form-item>
                <!-- <el-form-item label="活动时间">
                    <el-col :span="11">
                    <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                    </el-col>
                    <el-col class="line" :span="2">-</el-col>
                    <el-col :span="11">
                    <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
                    </el-col>
                </el-form-item> -->
                <!-- <el-form-item label="即时配送">
                    <el-switch v-model="form.delivery"></el-switch>
                </el-form-item> -->
                <el-form-item label="意向职位">
                    <el-checkbox-group v-model="form.type">
                    <el-checkbox label="服务端" name="type"></el-checkbox>
                    <el-checkbox label="前端" name="type"></el-checkbox>
                    <el-checkbox label="移动端" name="type"></el-checkbox>
                    <el-checkbox label="运维" name="type"></el-checkbox>
                    <el-checkbox label="硬件" name="type"></el-checkbox>
                    <el-checkbox label="其他" name="type"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="意向城市">
                    <!-- <el-radio-group v-model="form.resource">
                    <el-radio label="线上品牌商赞助"></el-radio>
                    <el-radio label="线下场地免费"></el-radio>
                    </el-radio-group> -->
                    <el-select v-model="cityValue" placeholder="请选择">
                        <el-option-group
                        v-for="group in cityOptions"
                        :key="group.label"
                        :label="group.label">
                        <el-option
                            v-for="item in group.cityOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                        </el-option-group>
                    </el-select>
                </el-form-item>
                <el-form-item label="意向薪资">
                    <el-select v-model="salaryValue" placeholder="请选择">
                        <!-- <el-option-group
                        v-for="group in salaryOptions"
                        :key="group"
                        :label="group"> -->
                        <el-option
                            v-for="item in salaryOptions"
                            :key="item.value"
                            :label="item"
                            :value="item">
                        </el-option>
                        <!-- </el-option-group> -->
                    </el-select>
                </el-form-item>
                <el-form-item label="其他意向">
                    <el-input type="textarea" v-model="form.desc"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">立即匹配</el-button>
                    <el-button native-type="reset">取消</el-button>
                    </el-form-item>
                </el-form>
                </el-card>
        </el-col>
      </el-row>
      <el-drawer
        title="意向职位匹配结果"
        :visible.sync="table"
        direction="rtl"
        size="50%">
        <el-table :data="gridData">
            <el-table-column property="name" label="公司名称"></el-table-column>
            <el-table-column property="post" label="招聘职位"></el-table-column>
            <el-table-column property="address" label="所在城市"></el-table-column>
            <el-table-column property="salary" label="薪资范围"></el-table-column>
            <el-table-column property="contact" label="联系方式"></el-table-column>
            </el-table>
        </el-drawer>
  </div>
</template>

<script>
export default {
    name:"MatchViews",
    data(){
        return{
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            },
            cityOptions: [{
                    label: '热门城市',
                    cityOptions: [
                        {
                        value: 'Shanghai',
                        label: '上海'
                    }, 
                    {
                        value: 'Beijing',
                        label: '北京'
                    }]
                }, {
                label: '城市名',
                cityOptions: [{
                    value: 'Chengdu',
                    label: '成都'
                }, {
                    value: 'Shenzhen',
                    label: '深圳'
                }, {
                    value: 'Guangzhou',
                    label: '广州'
                }, {
                    value: 'Dalian',
                    label: '大连'
                }]
                }
            ],
            cityValue: '',
            salaryOptions:["不限","3k以下","3-5k","5-10k","10-15k","15-20k","20-30k","30-50k","50k以上"],
            salaryValue:'',
            table:false,
            gridData:{},
        }
    },
    methods:{
        onSubmit() {
            this.table = true;
            console.log('submit!');
      }
    }
}
</script>

<style>
.match-views{
    margin-top: 20px;
    height: 100%;
}
.row{
    /* overflow:hidden, */
    margin-left: 0 !important;
    margin-right: 0 !important;  
    height: 480px !important;
}
/* .match-views{
    width: 100%;
    overflow:hidden,

} */
</style>