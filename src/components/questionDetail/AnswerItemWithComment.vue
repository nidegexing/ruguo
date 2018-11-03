<template>
    <div class="answer">
        <table>
            <tbody>
            <tr>
                <td class="votecell">
                    <div class="vote">
                        <input type="hidden" value="913">
                        <a title="赞成" class="vote-up-off">赞成</a>
                        <span style="font-size: 200%;" class="vote-count-post">2</span>
                        <a title="反对" class="vote-down-off">反对</a>
                    </div>
                </td>
                <td class="postcell">
                    <div>
                        <div class="post-text">
                            <p>可以使用移位操作符来做，支持Alan.Tan的做法，这才是正解</p>
                        </div>
                        <table class="fw">
                            <tbody>
                            <tr>
                                <td class="vt">
                                    <div class="post-menu">
                                    </div>
                                </td>
                                <td align="right" class="post-signature">
                                    <div class="user-info">
                                        <div class="user-action-time">编辑于
                                            <a title="查看历史版本" href="/post/revisions?id=913">
                                                <span class="relativetime">7年前</span>
                                            </a></div>
                                        <div class="user-gravatar32"></div>
                                        <div class="user-details">
                                            <br>
                                        </div>
                                    </div>
                                </td>
                                <td class="post-signature">
                                    <div class="user-info">
                                        <div class="user-action-time">回答于
                                            <span class="relativetime" title="2011-09-22 00:49:14">7年前</span>
                                        </div>
                                        <div class="user-gravatar32">
                                            <a href="/users/109">
                                                <img width="32" height="32" class="logo" alt=""
                                                     src="/static/img/small-tree.gif">
                                            </a>
                                        </div>
                                        <div class="user-details">
                                            <a title="user1854" href="/users/1854">user1854</a> <br>
                                            <span title="威望" class="reputation-score">186</span>
                                            <span title="0 金徽章 ">
                                                <span class="badge gold"/>
                                                <span class="badgecount">0</span>
                                            </span>
                                            <span title="0 银徽章 ">
                                                <span class="badge silver"/>
                                                <span class="badgecount">0</span>
                                            </span>
                                            <span title="0 铜徽章 ">
                                                <span class="badge copper"/>
                                                <span class="badgecount">5</span>
                                            </span>
                                        </div>
                                        <div class="user-details">
                                            <a title="查看历史版本" href="/post/revisions?id=913">2个版本</a></div>
                                    </div>
                                    <br class="cbt">
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </td>
            </tr>

            <tr>
                <td class="votecell"></td>
                <td>
                    <div class="comments">
                        <answer-comment/>
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import AnswerComment from './AnswerComment'

    export default {
        name: "AnswerItemWithCommont",
        components: {AnswerComment},
        comments: {
            AnswerComment
        }
    }
</script>

<style lang="less" scoped>

</style>
