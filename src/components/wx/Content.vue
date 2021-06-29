<template>
    <div class="hrbsti-view">
        <div v-html="html"></div>
    </div>
</template>

<script>
    export default {
        name: "wxContent",
        data() {
            return {
                title: '全网文献检索',
                html: "",
                url:"",
                searchSource:"",
                msg:""
            }
        },
        created: function () {
            this.url = this.$route.params.url
            this.searchSource = this.$route.params.searchSource
            console.log("this.url--"+this.url);
            var vm = this
            this.$axios.get(
                '/api/v1.0/view',
                {params:{url:vm.url, searchSource:vm.searchSource}})
                .then(function(response) {
                    console.log(response.data);
                    vm.html = response.data.data
            }).catch(function (error) {
                vm.msg = 'api请求失败 ' + error
            })
        },
    }
</script>

<style>
    .article-title{
        text-align: center;
    }
    .title{
        font-size: normal;
        font-style: bold;
        color: rgb(207, 72, 48);
        text-align: center;
        margin: 2rpx;
    }
    .wx-tit{text-align: center;color: black; font-size: 12px;}
    .author{text-align: center;}
    .rowtit{font-weight: bold;}
    .rowtit2{font-weight: bold;}
    /*h1{color: red;font-size:14px;}*/

    .container-techorg{
        margin-left: 20rpx;
        margin-right: 20rpx;
    }
</style>

<style scoped>
    .hrbsti-view{
        padding: 60px;
        background-color: #ffffff;
    }
</style>
