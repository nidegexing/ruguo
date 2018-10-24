<template>
    <div class="docker-root">
        <div class="docker-main">
            <div>问题列表tab</div>
            <div>问题列表desc</div>
        </div>
        <div class="docker-statistics">
            <div>统计信息</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MainPage"
    }
</script>

<style lang="less" scoped>
    @main-root-width: 960px;
    @main-main-width: 735px;
    @main-statistics-width: 220px;

    .docker-root {
        position: relative;
        width: @main-root-width;
        margin: 0 auto;

        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: flex-start;

        .docker-main {
            width: @main-main-width;
            background: lightyellow;
        }
        .docker-statistics {
            width: @main-statistics-width;
            margin-left: 5px;
            background: lightblue;
        }
    }
</style>
