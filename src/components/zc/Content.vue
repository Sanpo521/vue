<template>
    <div class="hrbsti-view">
        <div v-html="html"></div>
    </div>
</template>

<script>
    export default {
        name: "ZcListHrbContent",
        data() {
            return {
                title: '哈尔滨市科技政策汇编',
                html: "",
                code:"",
                msg:""
            }
        },
        created: function () {
            this.code = this.$route.params.code
            console.log("this.code--"+this.code);
            var vm = this
            this.$axios.get(
                '/api/v1.0/articlewx?code='+vm.code,
                {}).then(function(response) {
                vm.html = response.data
            })
                .catch(function (error) {
                    vm.msg = 'api请求失败 ' + error
                })
        }
    }
</script>

<style>
    .article-title{
        text-align: center;
    }
</style>

<style scoped>
    .hrbsti-view{
        padding: 60px;
        background-color: #ffffff;
    }
</style>
