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
            url: '/company/insertcompany',
            method: 'post',
            data: behind
        })
    },

    //删除信息
    delete(id){
        return request({
            url: '/company/deletecompany',
            method: 'delete',
            data: {
                id
            }
        })
    },

    //批量删除
    deleteMore(ID){
        console.log(ID)
        return request({
            url: '/company/deletecompanies',
            method: 'delete',
            data: ID         
        })
    },

    //更改信息
    change(changeInfo){
        console.log(changeInfo)
        return request({
            url: '/company/updatecompany',
            method: 'put',
            data: {
                id: changeInfo.id,
                name: changeInfo.name,
                salaryMin: changeInfo.salaryMin,
                salaryMax: changeInfo.salaryMax,
                job: changeInfo.job,
                city: changeInfo.city,
                current: changeInfo.current,
                size: changeInfo.size,
                phone: changeInfo.phone
            }
        })
    }
}