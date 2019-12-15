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
      <el-submenu v-if="hasMenu && !item.hidden"
                  v-for="item in this.$store.state.permission.routers[1].children"
                  :key="item.name"
                  :index="item.name">
        <template slot="title">
          <i :class="item.meta.icon"></i>
          <span>{{item.meta.title}}</span>
        </template>
        <el-menu-item v-for="menu in item.children"
                      :key="menu.name"
                      :index="menu.path">{{menu.meta.title}}</el-menu-item>
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
  computed: {
    hasMenu () {
      const routers = this.$store.state.permission.routers
      return routers[1] && routers[1].children && routers[1].children.length > 0
    }
  },
  methods: {
  }
}
</script>

<style scoped lang="less">
@import "style";
</style>
