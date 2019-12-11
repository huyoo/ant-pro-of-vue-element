<template>
  <div>
    <div class="ant-pro-result">
      <div class="ant-pro-result-head">
        <i class="el-icon-error" style="background-color: white;color: red;font-size: 72px"></i>
        <span class="result-title">提交失败</span>
        <span class="result-subtitle">请核对并修改以下信息后，再重新提交。</span>
      </div>

      <div class="ant-pro-result-fail-content">
        <div class="result-content-title">您提交的内容有如下错误：</div>
        <div>
          <i class="el-icon-circle-close" style="color: red"></i>
          <span>您的账户已被冻结</span>
          <a style="padding-left: 13px;color: #1890ff">立即解冻</a>
          <i class="el-icon-arrow-right" style="color: #1890ff"></i>
        </div>

        <div>
          <i class="el-icon-circle-close" style="color: red"></i>
          <span>您的账户还不具备申请资格</span>
          <a style="padding-left: 13px;color: #1890ff">立即升级</a>
          <i class="el-icon-arrow-right" style="color: #1890ff"></i>
        </div>
      </div>
      <el-button type="primary" style="display: block;margin: 0 auto 60px;">返回修改</el-button>
    </div>
    <page-footer/>
  </div>
</template>

<script>
import {PageFooter} from '@/components'

export default {
  name: 'Fail',
  components: {PageFooter}
}
</script>

<style scoped lang="less">
  @import "result";
</style>
