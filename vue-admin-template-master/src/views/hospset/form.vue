




//根据id查询医院设置信息
getHospInfoById(id) {
    hospset.getHospInfoById(id).then(resp=>{
        this.hospitalSet=resp.data
    })
}