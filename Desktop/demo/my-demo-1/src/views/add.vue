<template>
  <el-dialog title="新增员工" :visible.sync="dialogVisible" width="30%">
    <el-form :model="form" label-width="70px">
      <el-form-item label="姓名" prop="name">
        <el-input v-model="form.name" placeholder="1-30个字符" />
      </el-form-item>
      <el-form-item label="年龄" prop="age">
        <el-input v-model="form.age" placeholder="请输入年龄" />
      </el-form-item>
      <el-form-item label="性别" prop="gender">
        <el-input v-model="form.gender" placeholder="请输入性别" />
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="closeEvent">取 消</el-button>
      <el-button type="primary" @click="submit">确 定</el-button>
    </span>
  </el-dialog>
</template>
<script>
export default {
  props: {
    data: {}
  },
  data () {
    return {
      dialogVisible: false,
      form: {
        name: '',
        age: '',
        gender: '',
        id: this.data.length + 1
      }
    }
  },
  methods: {
    handleClose (done) {},
    submit () {
      this.$emit('fn', this.form)
      this.dialogVisible = false
      this.closeEvent()
    },
    closeEvent () {
      this.dialogVisible = false
      this.showTree = false

      this.form = {
        name: '',
        age: '',
        gender: ''
      }
    }
  },
  created () {
  }
}
</script>
<style lang="less" scoped></style>
