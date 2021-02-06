import request from '@/utils/request.js'

export default {
    //统计地区人数
    showAreaCount(name,value){
        return request({
            url: `/screen_display/count_city?name=${name}&value=${value}`,
            method: 'get',
        })
    },
    //学生信息滚动
    infoScroll(name,job,salaryMin,salaryMax,salary,city){
        return request({
            url: `/screen_display/carousel?name=${name}&job=${job}&salaryMin=${salaryMin}&salaryMax=${salaryMax}&salary=${salary}&city=${city}`,
            method: 'get',
        })
    },
    // 获取总人数和已就业人数
    digitalShow(){
        return request({
            url:`/screen_display/count_number`,
            method:'post',
            data:[
               "计算机工程学院",
               "就业"
            ]
        })
    },
    // 薪资
    getSalary(){
        return request({
            url:`screen_display/count_salary`,
            method:'post',
            data:[
                "0~3000",
                "3000~5000",
                "5000~7000",
                "7000~9000",
                "9000~不限"
            ]
        })
    }

}