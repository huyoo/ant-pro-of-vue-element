<template>
  <div class="table-list">
    <a-form>
      <a-row>
        <a-col :sm="24" :md="8">
          <a-form-item label="规则名称">
            <a-input v-decorator="['name']" placeholder="请输入" style="width: 100%;"/>
          </a-form-item>
        </a-col>
        <a-col :sm="24" :md="8">
          <a-form-item label="使用状态">
            <a-select v-decorator="['status']" placeholder="请选择" style="width: 100%">
              <a-select-option value="0">全部</a-select-option>
              <a-select-option value="1">关闭</a-select-option>
              <a-select-option value="2">运行中</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :sm="24" :md="8" v-if="showAdvanceFrom">
          <a-form-item label="调用次数">
            <a-input-number v-decorator="['number']" placeholder="请输入" style="width: 100%"/>
          </a-form-item>
        </a-col>
        <a-col :sm="24" :md="8" v-if="showAdvanceFrom">
          <a-form-item label="更新日期">
            <a-date-picker v-decorator="['date']" placeholder="请输入更新日期" style="width: 100%"></a-date-picker>
          </a-form-item>
        </a-col>
        <a-col :sm="24" :md="8" v-if="showAdvanceFrom">
          <a-form-item label="使用状态">
            <a-select v-decorator="['status']" placeholder="请选择" style="width: 100%">
              <a-select-option value="0">关闭</a-select-option>
              <a-select-option value="1">运行中</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :sm="24" :md="8" v-if="showAdvanceFrom">
          <a-form-item label="使用状态">
            <a-select v-decorator="['status4']" placeholder="请选择" style="width: 100%">
              <a-select-option value="0">关闭</a-select-option>
              <a-select-option value="1">运行中</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :sm="24" :md="showAdvanceFrom ? 24: 8"
               :style="{textAlign:showAdvanceFrom ? 'right' :'left', paddingRight: '12px'}">
          <a-button type="primary">查询</a-button>
          <a-button>重置</a-button>
          <span v-if="showAdvanceFrom" class="btn" @click="toggleForm">收起<a-icon type="up"/></span>
          <span v-else="showAdvanceFrom" class="btn" @click="toggleForm">展开<a-icon type="down"/></span>
        </a-col>
      </a-row>
    </a-form>
    <a-table row-key="key"
             :columns="columns"
             :dataSource="data"
             :loading="loading"
             @change="this.handlePageChange"
             :pagination="pagination"/>
  </div>
</template>

<script>
    import AFormItem from "ant-design-vue/es/form/FormItem";
    import ARow from "ant-design-vue/es/grid/Row";
    import ACol from "ant-design-vue/es/grid/Col";
    import moment from "moment";
    import tableData from "@/pages/feature/reuse/tableData";
    import tableMixFn from "@/pages/feature/reuse/tableMixFn";

    export default {
        name: "ReuseTable1",
        components: {ACol, ARow, AFormItem},
        mixins:[tableMixFn],
        data() {
            return {
                columns: [
                    {
                        title: '规则编号',
                        dataIndex: 'name'
                    },
                    {
                        title: '描述',
                        dataIndex: 'desc',
                    },
                    {
                        title: '服务调用次数',
                        dataIndex: 'callNo',
                        sorter: true,
                        needTotal: true,
                        customRender: (text) => text + ' 次'
                    },
                    {
                        title: '状态',
                        dataIndex: 'status',
                    },
                    {
                        title: '上次调度时间',
                        dataIndex: 'updatedAt',
                        sorter: true,
                        customRender: value => moment(value).format('YYYY-MM-DD HH:mm:ss')
                    },
                    {
                        title: '操作',
                        dataIndex: 'action',
                        width: '150px',
                        scopedSlots: {customRender: 'action'}
                    }
                ],
                data: [
                    ...tableData
                ],
                pagination: {
                    current: 1,
                    defaultPageSize: 20,
                    total: 200,
                    showSizeChanger: true,
                },
                form: this.$form.createForm(this),
                value: 1,
                loading: false,
                showAdvanceFrom: false
            }
        },
        methods: {
            toggleForm() {
                this.showAdvanceFrom = !this.showAdvanceFrom;
            },
        }
    }
</script>

<style scoped lang="less">
  .table-list {
    padding: 24px;

    .btn {
      color: #1890ff;
      cursor: pointer;
    }

    /deep/ .ant-form-item {
      width: 90%;
      display: inline-block;

      .ant-form-item-control-wrapper {
        display: inline-block;
        width: 75%;
      }
    }
  }
</style>
