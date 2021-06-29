<template>
    <div class="hrbsti-index">
        <Header/>
        <router-view></router-view>
    </div>
</template>

<script>
    import Header from "./Header";
    export default {
        name: "HrbstiIndex",
        components:{
            Header
        }
    }
</script>

<style>
    body{
        margin: 0px;
        padding: 0px;
        background-color: #f7f7f9;
        background:url("../assets/background.jpg") no-repeat top center #f6f6f8;
        background-size: 100% auto;
        min-height: 500px;
    }
</style>
<style scoped>
    .hrbsti-index{
        width: 1200px;
        margin:0 auto;
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
</style>
