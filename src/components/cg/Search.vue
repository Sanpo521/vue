<template>
    <div class="hrbsti-view">
        <el-input :placeholder="queryValueTips" v-model="queryValue" class="input-with-select" @keyup.enter.native="search()">
            <el-select v-model="queryType" slot="prepend">
                <el-option v-for="item in queryTypeList" :key="item.id" :label="item.name" :value="item.id"></el-option>
            </el-select>
            <el-button slot="append" icon="el-icon-search" @click="search()"></el-button>
        </el-input>
        <div class="not-data-tips">{{ tips }}</div>
    </div>
</template>

<script>
    export default {
        name: "WxSearch",
        data() {
            return {
                queryValueTips:'请输入检索内容',
                tips:"",
                queryValue: '',
                queryType: 'name',
                queryTypeList:[{id:'name',name:'成果名称'}, {id:'author',name:'成果完成人'}, {id:'unit',name:'第一完成单位'}],
                tableData: null,
                total:0,
                currentPage:1,
                pageSize:20
            }
        },
        methods: {
            search(){
                this.tips=""
                var vm = this
                vm.$router.push({name:'cgResult',params: {queryType:vm.queryType, queryValue:vm.queryValue, total: vm.total, tableData: vm.tableData, currentPage:vm.currentPage, pageSize:vm.pageSize}}).catch(()=>{});
            },
        }
    }
</script>
<style>
    .el-select .el-input {
        width: 130px;
    }
    .input-with-select {
        padding: 100px 0;
        width:80%;
    }
    .input-with-select .el-input-group__prepend {
        background-color: #fff;
    }
</style>
<style scoped>
    .hrbsti-view{
        text-align: center;
        margin: 0 auto;
        width:100%;
        /*padding-top: 160px;*/
        background-color: #ffffff;
    }
    .not-data-tips{
        padding: 2em 2em;
        font-size: 1.2em;
        font-weight: bold;
        color:#F56C6C;
    }
</style>
