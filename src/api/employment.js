import request from '@/utils/request.js'

export default {
    fetchData(pageSize,currentPage){
        return request({
            url:'/student/information_match',
            method:'post',
            data:{
                size:pageSize,
                current:currentPage
            }
        })
    }
}