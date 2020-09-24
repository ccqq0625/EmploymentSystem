import request from '@/utils/request.js'

export default {
    fecth(){
        return request({
            url:'/student/employment',
            method:'post',
            data:{
                college:null,
                profession:null,
                classStudent:'物联网1712',
                list:[
                    "前端",
                    "服务端",
                    "移动端",
                    "硬件",
                    "运维",
                    "非本行业"
                ]

            }
            
        })
    },
    workFecth(college,profession,classStudent){
        return request({
            url:'/student/employment',
            method:'post',
            data:{
                college:college,
                profession:profession,
                classStudent:classStudent,
                list:[
                    "前端",
                    "服务端",
                    "移动端",
                    "硬件",
                    "运维",
                    "非本行业"
                ]

            }
        })
    },
    eduFecth(college,profession,classStudent){
        return request({
            url:'/student/employment',
            method:'post',
            data:{
                college:college,
                profession:profession,
                classStudent:classStudent,
                list:['公职类公务员', '事业单位', '教师', '西部计划', '三支一扶']

            }
        })
    }
}