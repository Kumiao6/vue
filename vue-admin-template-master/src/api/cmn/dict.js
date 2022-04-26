import request from '@/utils/request'

export default {
  //根据id查询子节点数据列表
  getHospSetList(id) {
    return request({
      url: `/admin/cmn/dict/findChildData/${id}`,
      method: 'get'
    })
  },

}