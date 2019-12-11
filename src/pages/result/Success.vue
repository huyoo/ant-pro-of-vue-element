<template>
  <div>
    <div class="ant-pro-result">
      <div class="ant-pro-result-head">
        <i class="el-icon-success" style="background-color: white;color: #52C41A;font-size: 72px;margin-bottom: 24px"></i>
        <span class="result-title">提交成功</span>
        <span class="result-subtitle">提交结果页用于反馈一系列操作任务的处理结果， 如果仅是简单操作，使用 Message 全局提示反馈即可。 本文字区域可以展示简单的补充说明，如果有类似展示 “单据”的需求，下面这个灰色区域可以呈现比较复杂的内容。</span>
      </div>

      <div class="ant-pro-result-success-content">
        <div>项目名称</div>
        <el-row style="padding: 30px 0">
          <el-col v-bind="colLayout">项目：ID23421</el-col>
          <el-col v-bind="colLayout">负责人：曲丽丽</el-col>
          <el-col v-bind="colLayout">生效时间：2016-12-12 ~ 2017-12-12</el-col>
        </el-row>
        <el-steps progressDot :current="1">
          <el-step>
            <span style="font-size: 14px" slot="title">创建项目</span>
            <template slot="description">
              <div style="font-size: 12px; color: rgba(0, 0, 0, 0.45); position: relative; text-align: left;">
                <div style="margin: 8px 0 4px">
                  曲丽丽
                  <a-icon style="margin-left: 8px" type="dingding-o"/>
                </div>
                <div>2016-12-12 12:32</div>
              </div>
            </template>
          </el-step>
          <el-step title="部门初审">
            <span style="font-size: 14px" slot="title">部门初审</span>
            <template slot="description">
              <div style="font-size: 12px; color: rgba(0, 0, 0, 0.45); position: relative; text-align: left;">
                <div style="margin: 8px 0 4px">
                  周毛毛
                  <i style="margin-left: 8px; color: #00A0E9" ></i>
                </div>
                <div><a href="">催一下</a></div>
              </div>
            </template>
          </el-step>
          <el-step title="财务复核">
            <span style="font-size: 14px" slot="title">财务复核</span>
          </el-step>
          <el-step title="完成" >
            <span style="font-size: 14px" slot="title">完成</span>
          </el-step>
        </el-steps>
      </div>
      <div style="width: 300px;margin:  0 auto 60px;">
        <el-button type="primary">返回列表</el-button>
        <el-button>查看项目</el-button>
        <el-button>打印</el-button>
      </div>
    </div>
    <page-footer/>
  </div>
</template>

<script>
import PageFooter from '@/components/pageFooter/PageFooter'

export default {
  name: 'Success',
  components: {PageFooter},
  data () {
    return {
      colLayout: {span: 8}
    }
  }
}
</script>

<style scoped lang="less">
  @import "result";
</style>
