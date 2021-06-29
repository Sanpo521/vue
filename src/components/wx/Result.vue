<template>
    <div class="hrbsti-wx-main">
        <!--        <router-view></router-view>-->
        <keep-alive>
            <router-view v-if="$route.meta.keepAlive" class="router-view">
            </router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive" class="router-view" ></router-view>
    </div>
</template>

<script>
    export default {
        data() {
            return {
            }
        },
    }
</script>

<style scoped>
    .hrbsti-wx-main{
        background-color: #ffffff;
    }
</style>
