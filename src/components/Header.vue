<template>
    <div class="hrbsti-header">
        <img alt="Hrbsti logo" v-bind:src="logo">
        <el-menu :default-active="activeMenu" class="el-menu-hrbsti" router
                 mode="horizontal" background-color="#005293" active-text-color="#ffffff" text-color="#ffffff">
            <!--            <el-menu-item v-for="item in $router.options.routes" :key="item.name" :index="item.path" class="el-menu-item-hrbsti">{{item.meta.label}}</el-menu-item>-->
            <el-menu-item index="/" class="el-menu-item-hrbsti">首页</el-menu-item>
            <el-menu-item index="/wx" class="el-menu-item-hrbsti">文献检索</el-menu-item>
            <el-menu-item index="/cx" class="el-menu-item-hrbsti">创新能力</el-menu-item>
            <el-menu-item index="/cg" class="el-menu-item-hrbsti">成果查询</el-menu-item>
<!--            <el-menu-item index="/zc" class="el-menu-item-hrbsti">政策法规</el-menu-item>-->
                        <el-submenu index="/zc" class="el-menu-item-hrbsti" style="width: 239px;">
                            <template slot="title">政策法规</template>
                            <el-menu-item index="/zc/hrb">哈尔滨市科技政策汇编</el-menu-item>
                            <el-menu-item index="/zc/hrbex">新冠肺炎疫情防控期间哈尔滨市科技相关政策</el-menu-item>
                        </el-submenu>
        </el-menu>
        <el-breadcrumb separator=">" class="breadcrumb-hrbsti">
            <el-breadcrumb-item :to="{path:'/'}">首页</el-breadcrumb-item>
            <el-breadcrumb-item v-for="item in $route.matched" :key="item.name" :to="{name:item.name, params:item.meta}" v-show="item.meta.label!==''">{{item.meta.label}}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script>
    export default {
        name: 'HrbstiHeader',
        data() {
            return {
                logo:require("../assets/logo1.png"),
                activeMenu: ""
            }
        },
        created: function () {
            this.logo = require("../assets/logo1.png")
            console.log(this.logo)
            this.activeMenu = this.$route.params.activeMenu
        }
    }
</script>

<style scoped>
    .el-menu-hrbsti{
        background-size: 100% auto;
    }
    .el-menu-item-hrbsti{
        font-size: 16px;
        width: 240px;
        text-align: center;
        border-right: 1px solid #55a4e8;
    }
    .breadcrumb-hrbsti{
        width:1180px;
        background-color: #ffffff;
        padding: 10px;
    }
</style>
