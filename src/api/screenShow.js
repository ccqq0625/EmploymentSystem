import request from '@/utils/request.js'

export default {
    // 全院的总体分布,不限类型
    getToatlData(pageCollege,pageSession,pageProfession,pageClassStudent){
        return request({
            url:`/student/total`,
            method:'post',
            data:{
                college:pageCollege,
                session:pageSession,
                profession:pageProfession,
                classStudent:pageClassStudent,
                list:[
                    "公职",
                    "参军就业",
                    "升学出国",
                    "就业",
                    "暂不就业"
                ]
            }
        })
    },
    // 统计就业分布
    getWorkData(pageCollege,pageSession,pageProfession,pageClassStudent){
        return request({
            url:`student/employment`,
            method:'post',
            data:{
                college:pageCollege,
                session:pageSession,
                profession:pageProfession,
                classStudent:pageClassStudent,
                list:[
                    "内资企业",
                    "国外投资企业",
                    "不限",
                    "社会团体",
                    "其他"
                ]
            }
        })

    },
    // 公职
    getOfficeData(pageCollege,pageSession,pageProfession,pageClassStudent){
        return request({
            url:`student/employment`,
            method:'post',
            data:{
                college:pageCollege,
                session:pageSession,
                profession:pageProfession,
                classStudent:pageClassStudent,
                list:[
                    "事业单位",
                    "党政机关",
                ]
            }
        })

    },
    //统计地区人数
    showAreaCount(pageCollege,pageSession,pageProfession,pageClassStudent){
        return request({
            url: `/screen_display/count_city`,
            method: 'post',
            data:{
                college:pageCollege,
                session:pageSession,
                profession:pageProfession,
                classStudent:pageClassStudent,
            }

        })
    },
    //学生信息滚动
    infoScroll(pageCollege,pageSession,pageProfession,pageClassStudent){
        return request({
            url: `/screen_display/carousel`,
            method: 'post',
            data:{
                college:pageCollege,
                session:pageSession,
                profession:pageProfession,
                classStudent:pageClassStudent,
            }
        })
    },
    // 获取总人数和已就业人数
    digitalShow(pageCollege,pageSession,pageProfession,pageClassStudent,pageType){
        return request({
            url:`/screen_display/count_number`,
            method:'post',
            data:{
                college:pageCollege,
                session:pageSession,
                profession:pageProfession,
                classStudent:pageClassStudent,
                type:pageType
            }
        })
    },
    // 薪资
    getSalary(pageCollege,pageSession,pageProfession,pageClassStudent){
        return request({
            url:`screen_display/count_salary`,
            method:'post',
            data:{
                college:pageCollege,
                session:pageSession,
                profession:pageProfession,
                classStudent:pageClassStudent,
                salarys:[
                    "0~3000",
                    "3000~5000",
                    "5000~7000",
                    "7000~9000",
                    "9000~不限"
                ]
            }
        })
    }

}