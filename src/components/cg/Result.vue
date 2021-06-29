<template>
    <div class="hrbsti-cg-main">
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
    .hrbsti-cg-main{
        background-color: #ffffff;
    }
</style>
