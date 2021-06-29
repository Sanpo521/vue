<template>
    <div class="hrbsti-view">
        <div class="data-table">
            <div class="data-table-title">{{tableName}}</div>
            <div class="data-table-content el-table el-table--fit el-table--border el-table--enable-row-hover el-table--enable-row-transition">
                <table v-for="(row, rowIndex) in tableData" :key="rowIndex" cellspacing="0" cellpadding="0"
                       border="0" class="el-table__body" style="width:100%;" :fit='true'>
                    <tr v-for="(cols, colsIndex) in row" :key="colsIndex" v-show="colsIndex!=='index'"
                        :class="row.isheader?'data-table-header':'data-table-content'">
                        <td rowspan="1" colspan="1" v-for="(col, colIndex) in cols" :key="colIndex"
                            :class="colIndex===0?'data-table-colheader':'data-table-content'">
                            <div :class="colIndex===hrbRowNumber?'cell col-hrb':
                                        colIndex===ccRowNumber?'cell col-dss':
                                        colIndex===syRowNumber?'cell col-dss':
                                        colIndex===dlRowNumber?'cell col-dss':'cell col-other'">{{col.val}}</div>
                        </td>
                    </tr>
                </table>
            </div>
            <div class="data-table-description">{{tableDescription}}</div>
        </div>
        <div class="data-echarts" v-show="showChart">
            <div id="data-echarts-div" style="width:1200px;height:500px;">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                id:'',
                showOrder:'',
                tableName:"",
                tableDescription:"",
                tableType:1,
                tableHeaderNumber:1,
                tableInfoList: [],
                tableData: [],
                echartsData: [],
                hrbRowNumber:null,
                ccRowNumber:null,
                syRowNumber:null,
                dlRowNumber:null,
                loading: false,
                hasData: false,
                showChart:false,
                echartsInstan:null,
                msg:""
            }
        },
        created: function () {
            this.id = this.$route.params.id
            this.showOrder = this.$route.params.showorder
            var vm = this
            this.$axios.get(
                '/api/v1.0/gettabledata',
                {params:{tableId:vm.id}
                }).then(function(response) {
                vm.hrbRowNumber = null
                vm.ccRowNumber = null
                vm.dlRowNumber = null
                vm.syRowNumber = null
                vm.echartsData = null
                vm.hasData = true;
                vm.tableHeaderNumber = response.data.data.numberheader
                vm.tableName = response.data.data.name
                vm.tableDescription = response.data.data.description
                vm.tableData = JSON.parse(response.data.data.tablecontent).rows
                vm.echartsData = response.data.data.reportcontent
                for(var i=0; i<vm.tableData.length; i++){
                    if (vm.tableData[i].isheader){
                        var cols = vm.tableData[i].cols;
                        for(var j=0; j<cols.length; j++){
                            switch (cols[j].val) {
                                case "哈尔滨":
                                    vm.hrbRowNumber = j;
                                    break;
                                case "长春":
                                    vm.ccRowNumber = j;
                                    break;
                                case "大连":
                                    vm.dlRowNumber = j;
                                    break;
                                case "沈阳":
                                    vm.syRowNumber = j;
                                    break;
                                default:
                                    break;
                            }
                        }
                    }
                }
                document.querySelector('body').setAttribute('style', 'margin: 0 auto; width: 100%;overflow-x: hidden;height: 100%;');
                if (vm.echartsInstan!=null){
                    vm.echartsInstan.dispose()
                }
                if (vm.echartsData!==""){
                    vm.showChart = true
                    let echarts = require('echarts');
                    vm.echartsInstan = echarts.init(document.getElementById('data-echarts-div'));
                    let option = JSON.parse(response.data.data.reportcontent,function(k,value){
                        if(value && typeof value === "string" && value.startsWith("(function") && value.endsWith("})"))return eval(value);
                        return value;
                    })
                    vm.echartsInstan.setOption(option)
                }else{
                    vm.showChart = false
                }
            })
                .catch(function (error) {
                    vm.hasData = false;
                    vm.msg = "系统异常："+error
                })
        }
    }
</script>


<style scoped>
    .data-table-content{
        text-align: center;
    }
    .data-table-title, data-table-description{
        padding: 15px;
        font-weight: bold;
        font-size: 1.4em;
        text-align: center;
    }
    .data-table-description{
        padding: 15px;
        font-size: 1em;
        color:#909399;
    }
    .hrbsti-view{
        background-color: #ffffff;
    }
</style>
