<template>
    <div class="hrbsti-home">
        <img alt="hbersti logo" src="../assets/banner.png" width="100%">
        <div class="hrbsti-home-subitem">
            <router-link :to="{name:'wxHome', params: {activeMenu:'/wx'}}"><img alt="wxjs" src="../assets/1.png" width="255"></router-link>
            <router-link :to="{name:'cxHome', params: {activeMenu:'/cx'}}"><img alt="cxnl" src="../assets/2.png" width="255"></router-link>
            <router-link :to="{name:'cgHome', params: {activeMenu:'/cg'}}"><img alt="cgcx" src="../assets/3.png" width="255"></router-link>
            <router-link :to="{name:'zcHome', params: {activeMenu:'/zc'}}"><img alt="zcfg" src="../assets/4.png" width="255"></router-link>
        </div>
        <div class="hrbsti-footer">哈尔滨市科学技术信息研究所</div>
    </div>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped>
    .hrbsti-home{
        background-color: #ffffff;
    }
.hrbsti-home-subitem{
    width: 1140px;
    margin: 0 auto;
    margin-top: 48px;
}
.hrbsti-home-subitem a{
    padding: 16px;
}
.hrbsti-home-subitem a:first-child{
    padding-left: 0px;
}
.hrbsti-home-subitem a:last-child{
    padding-right: 0px;
}
.hrbsti-footer{
    text-align: center;
    padding: 10px;
    margin-top: 20px;
    font-size: 16px;
}
</style>
