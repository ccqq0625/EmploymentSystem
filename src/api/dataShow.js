import request from '@/utils/request.js'

export default {
    //总体类型
    fecth(college,profession,classStudent){
        return request({
            url:'/student/total',
            method:'post',
            data:{
                college:college,
                profession:profession,
                classStudent:classStudent,
                list:[
                    "公职",
                    "参军入伍",
                    "升学出国",
                    "就业",
                    "暂不就业"
                ]
            }
        })
    },

    //就业类型
    workFecth(college,profession,classStudent){
        return request({
            url:'/student/employment',
            method:'post',
            data:{
                college:college,
                profession:profession,
                classStudent:classStudent,
                list:[
                    '内资企业',
                    '国外投资企业',
                    '不限',
                    '社会团体',
                    '其他'
                ]

            }
        })
    },

    // 公职类型
    eduFecth(college,profession,classStudent){
        return request({
            url:'/student/employment',
            method:'post',
            data:{
                college:college,
                profession:profession,
                classStudent:classStudent,
                list:[
                    '事业单位',     
                    '党政机关'
                ]

            }
        })
    }
}