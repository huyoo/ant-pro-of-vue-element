<template>
  <div class="pro-menu">
    <div :class="`${collapse ? 'center' : ''} menu-title`">
      <img :src="logo" alt="Antd"/>
      <span v-if="!collapse">Preview</span>
    </div>
    <el-menu mode="inline"
             default-active="1-1"
             :collapse="collapse"
             @open="handleOpen"
             @close="handleClose">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item index="1-1">菜单1</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import logo from '../../assets/logo.png'

export default {
  name: 'menu',
  data () {
    return {
      collapse: false,
      logo
    }
  },
  methods: {
    handleOpen (key, keyPath) {

    },
    handleClose (key, keyPath) {

    }
  }
}
</script>

<style scoped lang="less">
@import "style";
</style>
