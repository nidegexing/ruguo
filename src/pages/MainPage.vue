<template>
    <div class="docker-root">
        <div class="docker-main">
            <main-tabs/>
            <question-item/>
            <question-item/>
            <question-item/>
            <question-item/>
        </div>
        <div class="docker-statistics">
            <sider-bar/>
        </div>
    </div>
</template>

<script>
    import MainTabs from '../components/mainPage/MainTabs'
    import QuestionItem from '../components/mainPage/QuestionItem'
    import SiderBar from '../components/mainPage/SiderBar'

    export default {
        name: "MainPage",
        components: {
            MainTabs,
            QuestionItem,
            SiderBar
        }
    }
</script>

<style lang="less" scoped>
    @main-root-width: 1146px;
    @main-main-width: 920px;
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
        }
        .docker-statistics {
            width: @main-statistics-width;
            margin-left: 5px;
        }
    }
</style>
