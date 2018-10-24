<template>
    <div class="sidebar">
        <div id="questions-count" class="module">
            <div class="summarycount al">5341</div>
            <p>问题</p>
        </div>
        <div class="module">
            <h4>本周威望排行</h4>
            <ul class="top">
            </ul>
            <p class="ar">
                <a href="/tops/index">更多 »</a>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SiderBar"
    }
</script>

<style lang="less" scoped>
    .sidebar {
        margin-bottom: 60px;
        overflow: hidden;
        width: 220px;
        text-align: left;
        .module {
            color: #444;
            padding: 0 8px 2px 8px;
            margin-bottom: 10px;
            .summarycount {
                color: #808185;
                font-size: 350%;
                font-weight: bold;
                text-align: left;
            }
            p {
                font-size: 120%;
                line-height: 1.3;
                margin-bottom: 0.5em;
                clear: both;
            }
            h4 {
                line-height: 1.4;
                font-size: 130%;
                padding-bottom: 7px;
            }
            .top {
                list-style: none outside none;
                margin: 0;
                padding: 0;
                font-size: 120%;
            }
            .ar {
                text-align: right;
            }
        }
    }
</style>
