<template>
  <span>
    <LogRecord v-for="(item, index) in record"
               :title="item.title"
               :list="item.list"
               :key="'project-log-'+index"
               :isFirst="index === 0"/>
  </span>
</template>

<script>
import LogRecord from '@/components/LogRecord/LogRecord'

export default {
  name: 'ProjectLog',
  components: {LogRecord},
  data () {
    return {
      record: [
        {
          title: '2019-12-15',
          list: ['升级到element组件库', '动态菜单升级', '页面权限实现可配置化']
        }, {
          title: '2019-12-02  v0.2.2',
          list: ['开发环境多端代理', '事件总线，简单项目下可替代vuex', '组件复用，抽离公用方法']
        }, {
          title: '2019-11-18  v0.2.1',
          list: ['新增查询表格、标准表格']
        }, {
          title: '2019-10-14  v0.2.0',
          list: ['新增登录、权限验证', '新增个人页', '引入vuex，实现分步表单']
        },
        {
          title: '2019-09-03  v0.1.1',
          list: ['新增详情页、结果页', '优化路由配置']
        },
        {
          title: '2019-04-22  v0.1.0',
          list: ['创建项目并完成配置', '新增基础表单', '调整路由配置']
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
