<template>
  <el-breadcrumb>
    <el-breadcrumb-item v-for="(item, index) in breadcrumb" :key="index">{{item}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  name: 'BreadcrumbPro',
  data () {
    return {
      breadcrumb: []
    }
  },
  created () {
    this.getBreadcrumb()
  },
  watch: {
    $route () {
      this.getBreadcrumb()
    }
  },
  methods: {
    getBreadcrumb () {
      this.breadcrumb = this.$route.matched.map(item => item.meta.title)
    }
  }
}
</script>

<style scoped>

</style>
