<template>
  <div>
    <el-button type="primary" @click="addclick">+ 新增员工</el-button>
    <el-table :data="tableData" style="width: 100%" height="250">
      <el-table-column prop="name" label="姓名" width="120"> </el-table-column>
      <el-table-column prop="age" label="年龄" width="120"> </el-table-column>
      <el-table-column prop="gender" label="性别" width="120">
      </el-table-column>
      <el-table-column label="操作" width="120">
        <template v-slot="{ row }">
          <div>
            <el-button type="text" @click="end(row.id)">修改</el-button>
            <el-button type="text" @click="del(row.id)">删除</el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <Add ref="add" :data="tableData" @fn="fn" />
    <Edd ref="sdd" @fs="fs" />
    <el-input v-model="input" placeholder="请输入内容"></el-input>
   <el-button type="text" @click="butt">修改</el-button>
  </div>
</template>
<script>
import Add from './views/add.vue'
import Edd from './views/end'
import { encryption, decrypt } from '@/utils/encrypt.js'
export default {
  name: 'sss',
  components: { Add, Edd },
  data () {
    return {
      input: '18771120873',
      tableData: [
        {
          name: '张三',
          age: 18,
          gender: '男'
        },
        {
          name: '李四',
          age: 23,
          gender: '男'
        },
        {
          name: '王老五',
          age: 25,
          gender: '男'
        },
        {
          name: '如花',
          age: 24,
          gender: '女'
        }
      ]
      // val: 'zs'
    }
  },
  created () {},
  computed: {},
  mounted () {

  },
  methods: {
    butt () {
      const pwd = this.input
      const key = 'abcdef0123456789'
      const iv = 'abcdef0123456789'
      console.log(encryption(pwd, key, iv), '加密----->>>') // 加密
      console.log(decrypt(encryption(pwd, key, iv), key, iv), '解密----->>>')
    },
    // 点击显示新增员工对话框
    addclick () {
      this.$refs.add.dialogVisible = true
    },
    del (row) {
      this.tableData = this.tableData.filter((res) => res.id !== row)
    },
    end (row) {
      this.tableData.forEach((res) => {
        if (res.id === row) {
          this.$refs.sdd.form = res

          this.$refs.sdd.dialogVisible = true
        }
      })
    },
    fn (e) {
      this.tableData.push(e)
    },
    fs (e) {
      this.tableData.forEach((res) => {
        if (res.id === e.id) {
          res = ({ ...e })
        }
      })
    }
  }
}
</script>
<style lang="less" scoped></style>
