<template>
  <div>
    <div class="page-footer">
      <div>
        <a href="#">Pro 首页</a>
        <a href="https://github.com/huyoo/antd-pro-vue">
          <i class="el-icon-edit"></i>
        </a>
        <a href="https://vue.ant.design/docs/vue/introduce/">Ant Design</a>
      </div>
      <div>
        Copyright © 2018 蚂蚁金服体验技术部出品
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageFooter'
}
</script>

<style scoped lang="less">
  .page-footer {
    /*position: absolute;*/
    /*bottom: 10px;*/
    /*left: 50%;*/
    width: 300px;
    margin: 0 auto;
    padding-bottom: 30px;
    font-size: 14px;
    text-align: center;
    color: rgba(0, 0, 0, .45);

    & > div:first-child {
      margin-bottom: 8px;
    }

    a {
      text-decoration: none;
      margin: 0 10px;
      color: inherit;
    }
  }
</style>
