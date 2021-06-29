<template>
    <div class="hrbsti-view">
        <el-table :show-header="false" :data="tableData" stripe style="width: 100%;" :cell-style="cellStyle">
            <el-table-column prop="name" label="题名"> </el-table-column>
            <el-table-column prop="issuingTime" label="发表时间" width="140" value-format="yyyy-MM-dd"> </el-table-column>
            <el-table-column fixed="right" label="操作" width="180">
                <template slot-scope="scope">
                    <el-button size="mini" @click="viewClick(scope.row.name, scope.row.filename, scope.row.searchSource, scope.row.viewUrl)" type="primary" icon="el-icon-view">查看</el-button>
                    <el-button size="mini" v-show="scope.row.downloadUrl !== ''" @click="downloadClick(scope.row.name, scope.row.filename, scope.row.searchSource, scope.row.downloadUrl)" type="primary" icon="el-icon-download">下载</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div style="margin: 0 auto;text-align: center;">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                    :current-page="currentPage" :page-sizes="[20]" :page-size="pageSize"
                    layout="prev, pager, next" :total="total" style="margin-top: 20px;">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: '全网文献检索',
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
            if (from.name === "wxContent") {
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
                var vm = this
                const loading = this.$loading({
                    lock: true,
                    text: '全网文献检索耗时较长，请耐心等待',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                });
                this.$axios.get(
                    '/api/v1.0/search',
                    {params:{queryType:vm.queryType, queryValue:vm.queryValue, currentPage: vm.currentPage, pageSize:vm.pageSize}
                    }).then(function(response) {
                    vm.total = response.data.total
                    vm.tableData = response.data.data
                    loading.close();
                }).catch(function (error) {
                    console.error(error);
                    vm.tips = "系统异常："+error
                })
            },
            viewClick(name, filename, source, url){
                console.log('wxContent--'+url)
                this.$router.push({name:'wxContent',params: {url:url, searchSource:source}}).catch(()=>{});
            },
            downloadClick(name, filename, source, url){
                var vm = this
                const loading = this.$loading({
                    lock: true,
                    text: '请稍候，正在下载中……',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                });
                this.$axios.get(
                    '/api/v1.0/download',
                    {params:{name: name, filename: filename, searchSource: source, url: url}
                    }).then(function(response) {
                    loading.close();
                    if (response.data.code===0){
                        window.open(response.data.data, '_blank');
                    }else{
                        vm.$notify({
                            title: '系统提示',
                            message: response.data.msg
                        });
                    }
                }).catch(function (error) {
                    vm.hasData = false;
                    console.error(error);
                    vm.msg = "系统繁忙，请稍后重试！";
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
        }
    }
</script>

<style scoped>
    .hrbsti-view{
        background-color: #ffffff;
    }
</style>
