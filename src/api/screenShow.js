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
    }

}