<template>
  <div class="table-list">
    <div style="margin-bottom: 10px">
      <a-button type="primary">
        <a-icon type="plus"/>
        新增
      </a-button>
      <a-input-search style="width: 200px;display: inline-block;float: right;"
                      v-model="searchValue"
                      @search="this.handleSearch"></a-input-search>
    </div>
    <a-table row-key="key"
             :columns="columns"
             :dataSource="data"
             :loading="loading"
             @change="this.handlePageChange"
             :pagination="pagination"/>
    <a-modal title="表单" :confirm-loading="confirmLoading" :visible="modalVisible" @cancel="toggleModal" @ok="toggleModal">
      <div style="text-align: center;padding: 30px">表单内容1</div>
    </a-modal>
  </div>
</template>

<script>
    import AFormItem from "ant-design-vue/es/form/FormItem";
    import ARow from "ant-design-vue/es/grid/Row";
    import ACol from "ant-design-vue/es/grid/Col";
    import moment from "moment";
    import tableData from "@/pages/feature/reuse/tableData";
    import tableMixFn from "@/pages/feature/reuse/tableMixFn";
    import AInputSearch from "ant-design-vue/es/input/Search";

    export default {
        name: "ReuseTable2",
        components: {AInputSearch, ACol, ARow, AFormItem},
        mixins: [tableMixFn],
        data() {
            return {
                pagination: {
                    current: 1,
                    defaultPageSize: 20,
                    total: 200,
                    showSizeChanger: true,
                },
                confirmLoading: false,
                modalVisible: false,
                loading: false,
                searchValue: '模糊搜索',
                columns: [
                    {
                        title: '商品代码',
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
                        dataIndex: 'key',
                        align: 'center',
                        customRender: value => <span>
                            <span style="color: #1890ff; cursor: pointer;margin: 0 2px;" onClick={() => this.handleEdit(value)}>编辑</span>
                            <span style="color: #1890ff; cursor: pointer;margin: 0 2px;" >删除</span>
                        </span>
                    }
                ],
                data: [...tableData],
            }
        },
        methods:{
            handleEdit(id){
                this.$message.info(`编辑数据id=${id}`);
                this.toggleModal();
            },
            toggleModal(){
                this.modalVisible = !this.modalVisible;
            }
        }
    }
</script>

<style scoped lang="less">
  .table-list {
    padding: 24px;

    .btn-inline {
      color: #1890ff;
      cursor: pointer;
      margin: 0 2px;
    }
  }
</style>
