<template>
  <el-row>
    <el-row :gutter="20">
      <el-col :span="24">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item><router-link class="console-link" to="/console">Console</router-link></el-breadcrumb-item>
          <el-breadcrumb-item><router-link class="console-link" to="/console/tag">Tag Manage</router-link></el-breadcrumb-item>
          <el-breadcrumb-item><router-link class="console-link" to=" /console/add/tag/">AddTag</router-link></el-breadcrumb-item>
          <el-breadcrumb-item>
        </el-breadcrumb>
        <br />
      </el-col>
      <el-col :span="6">
        <el-input placeholder="标签内容" v-model="name">
          <template slot="prepend">内容</template>
        </el-input>
      </el-col>
      <el-col :span="6">
        <el-select v-model="color">
          <el-option v-for="color in colors" :label="color.value" :value="color.value">
          </el-option>
        </el-select>
      </el-col>
    </el-row>
    <br />
    <el-row>
      <el-col :span="24">
        <el-button @click.native="save" type="success">保存</el-button>
        <el-button @click.native="cancel"type="danger">取消</el-button>
      </el-col>
    </el-row>
  </el-row>
</template>
<style>
</style>
<script>
  export default {
    mounted () {
    },
    methods: {
      save () {
        this.$http.post('http://localhost:8888/add_tag/', {
          name: this.name,
          color: this.color
        })
        this.$notify({
          title: '编辑成功',
          message: '已保存编辑结果',
          type: 'success'
        })
      },
      cancel () {
        this.$notify({
          title: '取消编辑',
          message: '更改内容未保存',
          type: 'warning'
        })
      }
    },
    data () {
      return {
        colors: [{
          value: 'warning'
        }, {
          value: 'danger'
        }, {
          value: 'success'
        }, {
          value: 'primary'
        }]
      }
    }
  }
</script>
