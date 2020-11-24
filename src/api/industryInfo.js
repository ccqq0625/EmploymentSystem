import request from '@/utils/request.js'

export default {
    //查询公司基本信息
    search(information){
        console.log(information)
        return request({
            url: '/company/list_companies',
            method: 'post',
            data: {
                name: information.name,
                salaryMin: information.salaryMin,
                salaryMax: information.salaryMax,
                job: information.job,
                city: information.city,
                current: information.current,
                size: information.size
            }
        })
    },


    //增加信息
    add(behind){
        return request({
            url: '/company/list_companies',
            method: 'post',
            data: behind
        })
    },

    //删除信息
    delete(deleteInfo){
        return request({
            url: '',
            method: 'delete',
            data: {

            }
        })
    },

    //更改信息
    change(changeInfo){
        return request({
            url: '',
            method: 'put',
            data: {

            }
        })
    }
}