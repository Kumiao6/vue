<template>

  <div class="app-container">
     
   <a href="http://localhost:8202/admin/cmn/dict/exportData" target="_blank">
       <el-button type="primary" plain @click="exportDict">导出</el-button>
   </a>
    <el-table
      :data="dictList"
      style="width: 100%"
      row-key="id"
      border
      lazy
      :load="getChildrens"
      :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
      <el-table-column label="名称" width="230" align="left">
        <template slot-scope="scope">
          <span>{{ scope.row.name }}</span>
        </template>
      </el-table-column>

      <el-table-column label="编码" width="220">
        <template slot-scope="{row}">
          {{ row.dictCode }}
        </template>
      </el-table-column>
      <el-table-column label="值" width="230" align="left">
        <template slot-scope="scope">
          <span>{{ scope.row.value }}</span>
        </template>
      </el-table-column>
      <el-table-column label="创建时间" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.createTime }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>



<script>
import dict from '@/api/cmn/dict'

export default {
name: "list",
  created() {
    this.getListById(1)
  },
  methods:{
    //根据id查询子节点列表
    getListById(id){
      dict.getHospSetList(id).then(resp=>{
          this.dictList = resp.data;
      })
    },
    //查询下面层级内容
    //element-ui帮我们封装了，tree为每次查找的id值
    getChildrens(tree, treeNode, resolve) {
      dict.getHospSetList(tree.id).then(response => {
        resolve(response.data)
      })
    },

  },
  data() {
    return {
      dictList:[],
    }
  },
   //导出数据字典
   exportData() {
      //调用导出接口
      window.location.href="http://localhost:8202/admin/cmn/dict/exportData"
   },

}
</script>
