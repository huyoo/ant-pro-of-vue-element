<template>
  <div class="page-view">
    <div class="head">
      <breadcrumb-pro/>
      <h1 class="title">{{title}}</h1>
      <slot name="description"></slot>
    </div>
    <div class="content">
      <slot></slot>
    </div>
    <page-footer/>
  </div>
</template>

<script>
  import {BreadcrumbPro, PageFooter} from '@/components'

  export default {
    name: 'PageView',
    components: {
      PageFooter,
      BreadcrumbPro
    },
    data () {
      return {
        title: ''
      }
    },
    propTypes: {
      description: {
        type: String,
        required: false
      }
    },
    mounted () {
      this.getPageMeta()
    },
    updated () {
      this.getPageMeta()
    },
    methods: {
      getPageMeta () {
        this.title = this.$route.meta.title
      },
    }
  }
</script>

<style scoped lang="less">
  .page-view {
    .head {
      background-color: white;
      padding: 16px 24px;
    }

    .title {
      margin-top: 10px;
      color: rgba(0, 0, 0, .85);
      font-weight: 600;
      font-size: 16px;
      line-height: 1.4;
    }

    .description {
      color: rgba(0, 0, 0, .65);
    }

    .content {
      margin: 22px;
      background-color: white;
    }
  }
</style>
