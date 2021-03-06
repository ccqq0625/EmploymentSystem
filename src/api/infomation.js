import request from '@/utils/request.js'

export default {
    //查询
    fetch(all){
        console.log(all);

        return request({
            url: '/student/list_students',
            method: 'post',
            data: {
                studentId: all.studentId,
                name: all.name,
                profession: all.profession,
                classStudent: all.classStudent,
                city: all.city,
                salaryMin: all.salaryMin,
                salaryMax: all.salaryMax,
                current: all.current,
                size: all.size
            }
        })
    },
}