<template>
    <div class="hrbsti-view">
        <h3>{{ info.name }}</h3>
        <el-form label-width="130px">
            <el-form-item label="成果完成人：" class="form-row">
                <span>{{ info.author }}</span>
            </el-form-item>
            <el-form-item label="第一完成单位：" class="form-row">
                <span>{{ info.unit }}</span>
            </el-form-item>
            <el-form-item label="关键词：" class="form-row">
                <span>{{ info.keyword }}</span>
            </el-form-item>
            <el-form-item label="中图分类号：" class="form-row">
                <span>{{ info.clcn }}</span>
            </el-form-item>
            <el-form-item label="学科分类号：" class="form-row">
                <span>{{ info.scn }}</span>
            </el-form-item>
            <el-form-item label="成果简介：" class="form-row">
                <span>{{ info.introduction }}</span>
            </el-form-item>
            <el-form-item label="成果类别：" class="form-row">
                <span>{{ info.category }}</span>
            </el-form-item>
            <el-form-item label="研究起止时间：" class="form-row">
                <span>{{ info.begindate }} ~ {{ info.enddate }}</span>
            </el-form-item>
            <el-form-item label="评价形式：" class="form-row">
                <span>{{ info.evaluationform }}</span>
            </el-form-item>
            <el-form-item label="成果水平：" class="form-row">
                <span>{{ info.level }}</span>
            </el-form-item>
            <el-form-item label="成果入库时间：" class="form-row">
                <span>{{ info.createyear }}</span>
            </el-form-item>
        </el-form>
        <el-button type="success" plain style="margin-top: 20px" @click="pageJump()">知网CAJ原文下载跳转</el-button>
    </div>
</template>

<script>
    export default {
        name: "cgContent",
        data() {
            return {
                filename: "",
                info: {},
                msg:""
            }
        },
        created: function () {
            this.filename = this.$route.params.filename
            var vm = this
            this.$axios.get(
                '/api/v1.0/getachievementinfo',
                {params:{filename:vm.filename}
                }).then(function(response) {
                vm.info = response.data.data
                vm.msg = response.data.msg
            }).catch(function (error) {
                vm.hasData = false;
                vm.msg = 'api请求失败 ' + error
            })
        },
        methods: {
            pageJump() {
                var vm = this
                window.open(vm.msg, '_blank');
            }
        }
    }
</script>

<style>
    .form-row{
        /*border-bottom: 1px solid #E6A23C;*/
        margin-bottom: 0 !important;;
    }
    .el-form-item__content{
        text-align: left;
    }
    .el-form-item label{
        font-weight: bold;
    }
</style>

<style scoped>
    .hrbsti-view{
        text-align: center;
        padding: 60px;
        background-color: #ffffff;
    }
</style>
