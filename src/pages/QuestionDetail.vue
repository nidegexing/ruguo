<template>
    <div class="docker-root">
        <div class="question-header">
            <h1 class="title">
                <a class="question-hyperlink" href="/questions/59">用C或c++，如何对字节中的bit进行置位，清除等操作</a>
            </h1>
        </div>
        <div class="docker-main">
            <question-desc/>
            <answers-area/>
        </div>
        <div class="docker-statistics">
            <detail-sider-bar/>
        </div>
    </div>
</template>

<script>
    import QuestionDesc from '../components/questionDetail/QuestionDesc'
    import AnswersArea from '../components/questionDetail/AnswersArea'
    import DetailSiderBar from '../components/questionDetail/DetailSiderBar'

    export default {
        name: "QuestionDetail",
        components: {
            QuestionDesc,
            AnswersArea,
            DetailSiderBar
        }
    }
</script>

<style lang="less" scoped>
    @main-root-width: 960px;
    @main-main-width: 735px;
    @main-statistics-width: 220px;

    .docker-root {
        position: relative;
        width: @main-root-width;
        min-height: 450px;
        margin: 0 auto;
        .question-header {
            width: 100%;
            border-bottom: 1px solid #555555;
            margin-bottom: 20px;
            .title {
                font-size: 200%;
                color: #467C9E;
                font-weight: bold;
                line-height: 22px;
                margin: 0 0 8px;
                padding: 0;

                .question-hyperlink {
                    color: #467C9E;
                    text-decoration: none;
                    text-shadow: 1px 1px 1px #AAAAAA;
                    font-family: "Microsoft YaHei";
                    font-weight: bold;
                }
            }
        }

        .docker-main {
            display: inline-block;
            vertical-align: top;
            width: @main-main-width;
            min-height: 320px;
        }
        .docker-statistics {
            display: inline-block;
            width: @main-statistics-width;
            margin-left: 1px;
        }
    }
</style>
