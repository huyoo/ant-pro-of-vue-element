<template>
  <div class="pro-menu">
    <div :class="`${collapse ? 'center' : ''} menu-title`">
      <img :src="logo" alt="Antd"/>
      <span v-if="!collapse">Preview</span>
    </div>
    <el-menu default-active="/exception/404"
             router
             :collapse="collapse"
             style="border-right: none"
             background-color="#001529"
             text-color="#ffffffa6"
             active-text-color="#ffffff"
             unique-opened>
      <el-submenu index="/form">
        <template slot="title">
          <i class="el-icon-edit"></i>
          <span>表单页</span>
        </template>
        <el-menu-item index="/form/basic-form">基础表单</el-menu-item>
      </el-submenu>

      <el-submenu index="/result">
        <template slot="title">
          <i class="el-icon-circle-check"></i>
          <span>结果页</span>
        </template>
        <el-menu-item index="/result/success">成功页</el-menu-item>
        <el-menu-item index="/result/failure">失败页</el-menu-item>
      </el-submenu>

      <el-submenu index="/exception">
        <template slot="title">
          <i class="el-icon-circle-close"></i>
          <span>异常页</span>
        </template>
        <el-menu-item index="/exception/403">403</el-menu-item>
        <el-menu-item index="/exception/404">404</el-menu-item>
        <el-menu-item index="/exception/500">500</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import logo from '../../assets/logo.png'

export default {
  name: 'menu',
  props: {
    isMobile: {
      propTypes: Boolean,
      required: false,
      default: false
    },
    collapse: {
      propTypes: Boolean,
      required: false,
      default: false
    }
  },
  data () {
    return {
      logo
    }
  },
  methods: {
  }
}
</script>

<style scoped lang="less">
@import "style";
</style>
