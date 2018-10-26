<template>
    <div class="answers">
        <div class="subheader">
            <h2>3个回答</h2>
            <div class="tabs">
                <a title="按活跃度排序" class="youarehere" href="/questions/59?tab=activity#tab-top">活跃</a>
                <a title="按时间排序" href="/questions/59?tab=oldest#tab-top">时间</a>
                <a title="按投票排序" href="/questions/59?tab=votes#tab-top">投票</a>
            </div>
        </div>
        <answer-item/>
        <answer-item/>
        <answer-item/>
        <answer-item/>
        <answer-item/>
        <answer-item/>
    </div>
</template>

<script>
    import AnswerItem from './AnswerItem'

    export default {
        name: "AnswersArea",
        components: {
            AnswerItem
        }
    }
</script>

<style lang="less" scoped>

</style>
