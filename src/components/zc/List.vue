<template>
    <div class="hrbsti-view">
        <el-table :show-header="false" :data="tableData" stripe style="width: 100%;" @cell-click="cellClick"  :cell-style="cellStyle">
            <el-table-column prop="name" label="名称"></el-table-column>
            <el-table-column prop="releasetime" label="发布日期" width="180"></el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: '哈尔滨市科技政策汇编',
                tableData: [],
                loading: false,
                msg:"",
            }
        },
        created: function () {
            var vm = this
            this.$axios.get(
                '/api/v1.0/articles',
                {}).then(function(response) {
                vm.tableData = response.data.data.standard
            })
                .catch(function (error) {
                    vm.msg = 'api请求失败 ' + error
                })
        },
        methods: {
            cellStyle(row){
                let stylejson={}
                if (row.columnIndex===0){
                    stylejson.padding='10px 60px'
                }
                return stylejson
            },
            cellClick(row) {
                this.$router.push({name:'zcContent',params: {code: row.code}}).catch(()=>{});
            }
        }
    }
</script>

<style scoped>
    .hrbsti-view{
        background-color: #ffffff;
    }
</style>
