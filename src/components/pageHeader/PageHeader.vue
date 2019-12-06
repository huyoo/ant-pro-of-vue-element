<template>
  <div class="page-header">
    <span class="menu-fold" @click="clickMenuIcon">
      <a-icon :type="collapse?'menu-unfold':'menu-fold'"></a-icon>
    </span>
    <div class="tool-bar">
      <span>查找</span>
      <span>文档</span>
      <span>通知</span>
      <span>个人中心</span>
      <span>多语言</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PageHeader',
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
        menuType: 'menu-fold'
      }
    },
    methods: {
      clickMenuIcon () {
        this.$emit('changeMenu')
      }
    }
  }
</script>

<style scoped lang="less">
  .page-header {
    position: relative;
    z-index: 2;
    height: 64px;
    line-height: 64px;
    font-size: 20px;
    background-color: white;
    box-shadow: 0 1px 4px rgba(0, 21, 41, .08);

    .menu-fold {
      padding: 22px 24px;
    }

    .tool-bar {
      float: right;
      padding: 0 24px;
      font-size: 16px;
    }
  }
</style>
