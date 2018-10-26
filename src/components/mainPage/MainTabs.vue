<template>
    <div class="subheader">
        <h1>问题列表</h1>
        <div class="tabs">
            <a title="按时间排序" class="youarehere" href="/questions?sort=newest">最新</a>
            <a title="按悬赏排序" href="/questions?sort=bounty">悬赏</a>
            <a title="按投票排序" href="/questions?sort=votes">投票</a>
            <a title="按活跃度排序" href="/questions?sort=active">活跃</a><a
            title="没有有用投票" href="/questions?sort=unanswered">未解决</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MainTabs"
    }
</script>

<style lang="less" scoped>

</style>
