<template>
    <div class="hrbsti-view">
        <el-table :show-header="false" :data="tableData" stripe style="width: 100%;" @cell-click="cellClick"  :cell-style="cellStyle">
            <el-table-column prop="name" label="成果名称"></el-table-column>
            <el-table-column prop="unit" label="完成单位" width="340px"></el-table-column>
        </el-table>
        <div style="margin: 0 auto;text-align: center;">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                           :current-page="currentPage" :page-sizes="[10, 20, 50]" :page-size="pageSize"
                           layout="total, sizes, prev, pager, next, jumper" :total="total" style="margin-top: 20px;">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: '黑龙江省科技项目创新成果',
                queryValue: '',
                queryType: 'name',
                tableData: null,
                total:0,
                currentPage:1,
                pageSize:20
            }
        },
        created: function () {
            this.queryValue = this.$route.params.queryValue
            this.queryType = this.$route.params.queryType
            this.tableData = this.$route.params.tableData
            this.total = this.$route.params.total
            this.currentPage = this.$route.params.currentPage
            this.pageSize = this.$route.params.pageSize
        },
        beforeRouteEnter(to, from, next) {
            if (from.name === "cgContent") {
                to.meta.isBack = true;
            } else {
                to.meta.isBack = false;
            }
            next();
        },
        activated() {
            if (!this.$route.meta.isBack) {
                this.tableData = [];
                this.currentPage = 1;
                this.search();
            }
            this.$route.meta.isBack = false;
        },
        methods: {
            search(){
                this.tips=""
                var vm = this
                this.$axios.get(
                    '/api/v1.0/getachievementlist',
                    {params:{queryType:vm.queryType, queryValue:vm.queryValue, currentPage: vm.currentPage, pageSize:vm.pageSize}
                    }).then(function(response) {
                    vm.total = response.data.total
                    vm.tableData = response.data.data
                }).catch(function (error) {
                    console.error(error);
                    vm.tips = "系统异常："+error
                })
            },
            handleSizeChange(val) {
                var vm = this
                vm.pageSize = val
                vm.search()
            },
            handleCurrentChange(val) {
                var vm = this
                vm.currentPage = val
                vm.search()
            },
            cellStyle(row){
                let stylejson={}
                if (row.columnIndex===0){
                    stylejson.padding='10px 60px'
                }
                return stylejson
            },
            cellClick(row) {
                this.$router.push({name:'cgContent',params: {filename: row.filename}}).catch(()=>{});
            }
        }
    }
</script>

<style scoped>
    .hrbsti-view{
        background-color: #ffffff;
    }
</style>
