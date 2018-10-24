<template>
    <div class="subheader">
        <h1 class="h1">问题列表</h1>
        <div class="tabs">
            <a title="按时间排序" class="a youarehere" href="/questions?sort=newest">最新</a>
            <a title="按悬赏排序" class="a" href="/questions?sort=bounty">悬赏</a>
            <a title="按投票排序" class="a" href="/questions?sort=votes">投票</a>
            <a title="按活跃度排序" class="a" href="/questions?sort=active">活跃</a><a
            title="没有有用投票" class="a" href="/questions?sort=unanswered">未解决</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MainTabs"
    }
</script>

<style lang="less" scoped>
    .subheader {
        border-bottom: 1px solid #666666;
        height: 34px;
        margin-bottom: 15px;
        .h1 {
            float: left;
            font-size: 170%;
            line-height: 34px;
            margin-bottom: 0px;
            font-weight: bold;
        }
        .tabs {
            float: right;
            font-weight: bold;
            .a {
                background: inherit;
                border: 1px solid #fff;
                color: #777;
                display: block;
                float: left;
                font-size: 90%;
                height: 24px;
                line-height: 22px;
                margin: 8px 8px 0 0;
                padding: 0 11px 0 11px;
                &.youarehere {
                    background: #fff;
                    border: 1px solid #777;
                    border-bottom-color: #ffffff;
                    color: black;
                    font-size: 120%;
                    height: 30px;
                    line-height: 28px;
                    margin-top: 3px;
                    padding: 0px 11px 0px 11px;
                }
            }
        }
    }
</style>
