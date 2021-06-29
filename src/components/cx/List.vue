<template>
    <div class="hrbsti-view">
        <el-table :show-header=false :data="tableInfoList" stripe style="width: 100%" :cell-style="cellStyle" @cell-click="cellClick">
            <el-table-column prop="name" label="题名"></el-table-column>
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
                tableData: [],
                tableType:1,
                total:0,
                currentPage:1,
                pageSize:10,
                tableInfoList: []
            }
        },
        created: function () {
            this.search();
        },
        methods: {
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
            cellStyle(){
                let stylejson={}
                stylejson.padding='10px 60px'
                return stylejson
            },
            search(){
                var vm = this
                this.$axios.get(
                    '/api/v1.0/gettableinfoex',
                    {params:{tableType:vm.tableType, currentPage: vm.currentPage, pageSize:vm.pageSize}
                    }).then(function(response) {
                    vm.total = response.data.total
                    vm.tableInfoList = response.data.data
                })
                    .catch(function (error) {
                        vm.msg = 'api请求失败 ' + error
                    })
            },
            cellClick(row){
                this.$router.push({name:'cxContent',params: {id: row.id, showorder:row.showorder}}).catch(()=>{});
            }
        }
    }
</script>
<style scoped>
    .hrbsti-view{
        background-color: #ffffff;
    }
</style>
