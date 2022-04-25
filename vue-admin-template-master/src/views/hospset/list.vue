<template>
  <div class="app-container">
 <!--表单查询栏-->
<el-form :inline="true" class="demo-form-inline">
    <el-form-item>
        <el-input  v-model="seachObj.hosname" placeholder="医院名称"/>
    </el-form-item>
    <el-form-item>
        <el-input v-model="seachObj.hoscode" placeholder="医院编号"/>
    </el-form-item>
    <el-button type="primary" icon="el-icon-search" @click="getList()">查询</el-button>
    <el-button type="danger" icon="el-icon-delete" @click="getClear()">清空</el-button>
</el-form>

<div>
      <!-- 工具条批量删除 -->
    <el-button type="danger" size="mini" @click="removeRows()">批量删除</el-button> 
</div>
    <!-- banner列表 -->
    <el-table
      :data="hospsetList"
      stripe
      style="width: 100%" @selection-change="handleSelectionChange"> 
      <el-table-column type="selection" width="55"/>
      <el-table-column type="index" width="50" label="序号"/>
      <el-table-column prop="hosname" label="医院名称"/>
      <el-table-column prop="hoscode" label="医院编号"/>
      <el-table-column prop="apiUrl" label="api基础路径" width="200"/>
      <el-table-column prop="contactsName" label="联系人姓名"/>
      <el-table-column prop="contactsPhone" label="联系人手机"/>
      <el-table-column label="状态" width="80">
        <template slot-scope="scope">
          {{ scope.row.status === 1 ? '可用' : '不可用' }}
        </template>
      </el-table-column>

         <el-table-column label="操作" width="280" align="center">
            <template slot-scope="scope">
               <el-button type="danger" size="mini" 
                  icon="el-icon-delete" @click="deleteById(scope.row.id)">删除</el-button>
               <el-button v-if="scope.row.status==1" type="primary" size="mini" 
                  icon="el-icon-delete" @click="lockHostSet(scope.row.id,0)">锁定</el-button>
               <el-button v-if="scope.row.status==0" type="danger" size="mini" 
                  icon="el-icon-delete" @click="lockHostSet(scope.row.id,1)">取消锁定</el-button>

            </template>
      </el-table-column>




    </el-table>

    
    <!-- 分页 -->
<el-pagination
        :current-page="page"
        :page-size="limit"
        :total="total"
        style="padding: 30px 0; text-align: center;"
        layout="total, prev, pager, next, jumper"
        @current-change="getList" />
  </div>

</template>




<script>
import hospset from "../../api/hospitalSet";
                    // vue-admin-template-master/src/api/hospitalSet.js
                    //  vue-admin-template-master/src/views/hospset/list.vue
export default {
name: "list.vue",
  data() {
    return {
      page:1,//当前页
      limit:3,//显示数
      hospsetList:[],//每页数据集合
      seachObj:{},//条件封装对
      total:0,//总记录数
      multipleSelection: [] //批量选择中选择的记录列表
    }
  },
  created() {
    this.getList();
  },
  methods: {//定义方法，进行请求接口调用

    //锁定和取消锁定
      lockHostSet(id,status) {
         hospset.lockHospSet(id,status)
            .then(response => {
               //刷新
               this.getList()
            })
      },



    // 当表格复选框选项发生变化的时候触发
    handleSelectionChange(selection) {
      this.multipleSelection = selection
    },

  
    // 当表格复选框选项发生变化的时候触发
    handleSelectionChange(selection) {
      this.multipleSelection = selection
    },
    //批量删除
    removeRows() {
      this.$confirm('此操作将永久【批量删除】该医院设置信息, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        //从multipleSelection中获取每个选中的id值
        var idList = [];
        for (var i = 0; i <this.multipleSelection.length; i++) {
            var obj = this.multipleSelection[i];
            var id = obj.id;
            //封装带idList中
            idList.push(id);
        }
        //删除医院设置信息
        hospset.batchRemove(idList).then(resp => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
          //刷新页面
          this.getList();
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },



    //医院设置列表
    getList(page=1) {
      this.page=page
      hospset.getHospSetList(this.page, this.limit, this.seachObj).then(resp => {
        //返回数据集合
        this.hospsetList = resp.data.records
        //总记录数
        this.total = resp.data.total
      }).catch(error => {
        console.log(error)
      })
    },

    //根据id删除医院设置
     deleteById(id){
    this.$confirm('此操作将永久删除该医院设置信息, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
    }).then(() => {
        //删除医院设置信息
        hospset.removeDataById(id).then(resp=>{
            this.$message({
                type: 'success',
                message: '删除成功!'
            });
            //刷新页面
            this.getList();
        })
    }).catch(() => {
        this.$message({
            type: 'info',
            message: '已取消删除'
        });
    });
    }
  }





}
</script>


