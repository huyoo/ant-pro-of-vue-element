<template>
  <div>
    <el-divider v-if="isFirst !== true"/>
    <div>日期版本：<span style="color: #1bd1a5">{{this.title}}</span></div>
    <div>
      更新内容：
      <ul>
        <li v-for="(item, index) in list" :key="index">{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LogRecord',
  props: {
    title: {
      propTypes: String,
      required: true
    },
    list: {
      propTypes: Array,
      required: true
    },
    isFirst: {
      propTypes: Boolean,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
