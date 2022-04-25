import request from '@/utils/request'


//多条件分页查询
export default {
    //医院设置列表
  getHospSetList(page,limit,searchObj) {
    return request({
      url: `/admin/hosp/hospitalSet/findPageHospSet/${page}/${limit}`,
      method: 'post',
      data: searchObj //使用json传递
    })
  },
    //根据id删除数据
    removeDataById(id) {
    return request({
          url: `/admin/hosp/hospitalSet/deleteHospitalById/${id}`,
          method: 'delete'
        })
    },

    
     //批量删除
    batchRemove(idList){
    return request({
      url: `/admin/hosp/hospitalSet/batchRemove`,
      method: 'delete',
      data:idList
    })
  },

  //锁定和取消锁定
  lockHospSet(id,status) {
    return request ({
      url: `/admin/hosp/hospitalSet/lockHospitalSet/${id}/${status}`,
      method: 'put'
    })
  },
  
  
  //添加医院设置
  addHospSet(hospitalSet) {
    return request ({
      url: `/admin/hosp/hospitalSet/addHospitalSet`,
      method: 'post',
      data: hospitalSet
    })
  } 
        

}

