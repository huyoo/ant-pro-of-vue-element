<template>
  <div>
    <el-tabs>
      <el-tab-pane label="页签1" key="1">
        <div style="margin-left: 24px">页签1有自定义的高级搜索，公用的分页排序</div>
        <reuse-table1/>
      </el-tab-pane>
      <el-tab-pane label="页签2" key="2">
        <div style="margin-left: 24px">页签2有自定义的表格、数据接口、新增表单，公用的分页排序、搜索</div>
        <reuse-table2/>
      </el-tab-pane>
      <el-tab-pane label="页签3" key="3">
        <div style="margin-left: 24px">页签2有自定义的表格、数据接口、新增表单，公用的分页排序、搜索</div>

      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import ReuseTable1 from '@/pages/feature/reuse/table/ReuseTable1'
import ReuseTable2 from '@/pages/feature/reuse/table/ReuseTable2'

export default {
  name: 'ReuseView',
  components: {ReuseTable2, ReuseTable1},
  data () {
    return {
      description: '组合复用可以抽离公用方法，相较于组件更灵活、易于扩展，又比纯粹的独立开发有更好的复用性。',
      tapConfigs: [{
        tab: '页签4',
        key: '4',
        children: <span>123</span>
      }, {
        tab: '页签5',
        key: '5',
        children: null
      } ]
    }
  }
}
</script>

<style scoped>

</style>
