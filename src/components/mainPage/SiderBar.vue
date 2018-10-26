<template>
    <div class="sidebar">
        <div class="module">
            <div class="summarycount al">5341</div>
            <p>问题</p>
        </div>
        <div class="module">
            <h4>收藏标签</h4>
            <div>
                <a class="post-tag" rel="tag" title="" href="/questions/tagged/c%2B%2B">c++</a>
                <span class="delete-tag" title="删除"></span></div>
            <table>
                <tbody>
                <tr>
                    <td class="vt">
                        <input type="text" name="interestingTag" autocomplete="off"
                               class="ac_input">
                    </td>
                    <td class="vt">
                        <input type="button" value="添加" class="interestingAdd">
                    </td>
                </tr>
                </tbody>
            </table>
            <h4>忽略标签</h4>
            <div>
                <a class="post-tag" rel="tag" title="" href="/questions/tagged/c%E8%AF%AD%E8%A8%80">c语言</a>
                <span class="delete-tag" title="删除"></span></div>
            <table>
                <tbody>
                <tr>
                    <td class="vt">
                        <input type="text" name="ignoredTag" autocomplete="off"
                               class="ac_input">
                    </td>
                    <td class="vt">
                        <input type="button" value="添加" class="ignoredAdd">
                    </td>
                </tr>
                </tbody>
            </table>
            <div class="dno">
                <input type="checkbox" title="hide ignored tags">
                <label> hide ignored tags</label>
            </div>
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
            .post-tag {
                background-color: #E0EAF1;
                border-bottom: 1px solid #3E6D8E;
                border-right: 1px solid #7F9FB6;
                color: #3E6D8E;
                font-size: 90%;
                line-height: 2.4;
                margin: 2px 2px 2px 0pt;
                padding: 3px 4px;
                text-decoration: none;
                white-space: nowrap;
            }
            .delete-tag {
                margin-left: 2px;
                margin-top: 7px;
                display: inline-block;
                height: 14px;
                vertical-align: top;
                width: 14px;
                background: url(/static/img/sprites.png) no-repeat 0 -690px;
                &:hover {
                    background-position: 0 -665px;
                    cursor: pointer;
                }
            }
            .ac_input {
                height: 19px;
            }
            .interestingAdd {
                height: 27px;
                margin-left: 2px;
            }
        }
    }
</style>
