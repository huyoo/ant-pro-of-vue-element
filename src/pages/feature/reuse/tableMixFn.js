/**
 * 表格混合通用方法
 * create by hy ON 2019/11/29
 */

export default {
    methods: {
        handlePageChange(pagination, filters, sorter){
            // console.log(pagination, filters, sorter);
            this.pagination.current = pagination.current;
            this.getData();
        },
        handleSearch(value){
            console.log(value);
            this.searchValue = value;
            this.getData();
        },
        getData(){
            this.loading = true;

            setTimeout((_this) => {
                _this.loading = false
            }, 1000, this)
        }
    }
}
