<template>
  <div style="width: 300px;margin-left: 30px;margin-top: 10px;">
    <el-input type="textarea" :value="targetName + age"></el-input>
  </div>
</template>

<script>
import eventBus from '@/pages/feature/eventBus/eventBus'

export default {
  name: 'TextArea',
  data () {
    return {
      targetName: '',
      age: ''
    }
  },
  created () {
    eventBus.$on('clickTarget', value => {
      this.targetName = value.name
      this.age = value.age
    })
  }
}
</script>

<style scoped>

</style>
