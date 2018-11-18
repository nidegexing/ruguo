<template>
    <div class="docker-root">
        <div class="docker-main">
            <main-page-baner/>
            <main-tabs/>
            <question-item/>
            <question-item/>
            <question-item/>
            <question-item/>
            <question-item/>
        </div>
        <div class="docker-statistics">
            <sider-bar/>
            <sider-bar-hot/>
            <sider-bar-related/>
            <sider-bar-recommond/>
        </div>
    </div>
</template>

<script>
    import MainPageBaner from '../components/mainPage/MainPageBaner'
    import MainTabs from '../components/mainPage/MainTabs'
    import QuestionItem from '../components/mainPage/QuestionItem'
    import SiderBar from '../components/mainPage/SiderBar'
    import SiderBarHot from '../components/mainPage/SiderBarHot'
    import SiderBarRelated from '../components/questionDetail/SiderBarRelated'
    import SiderBarRecommond from '../components/mainPage/SiderBarRecommond'

    export default {
        name: "MainPage",
        components: {
            MainPageBaner,
            MainTabs,
            QuestionItem,
            SiderBar,
            SiderBarHot,
            SiderBarRelated,
            SiderBarRecommond
        }
    }
</script>

<style lang="less" scoped>
    @main-root-width: 72rem;
    @main-main-width: 53.5rem;
    @main-statistics-width: 18rem;

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
