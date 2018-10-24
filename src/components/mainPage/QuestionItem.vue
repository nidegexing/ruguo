<template>
    <div class="question-summary">
        <div class="statscontainer">
            <div class="statsarrow"></div>
            <div class="stats">
                <div class="vote">
                    <div class="votes">
                        <span class="vote-count-post"><strong>0</strong></span>
                        <div class="viewcount">投票</div>
                    </div>
                </div>
                <div class="answered">
                    <strong class="strong">0</strong>回答
                </div>
            </div>
            <div title="448次" class="views">阅读 448</div>
        </div>
        <div class="summary">
            <h3 class="h3">
                <a class="question-hyperlink" href="/questions/18721">C语言题求解</a></h3>
            <div class="excerpt">
                #intclude&lt;string.h&gt;
                #include&lt;stdio.h&gt;
                int main() {
                char s1[20]=“performans
                sergile"；
                char s2{25};
                strcpy(s2,s1)
                strcat(s2,"eee");
                for(int i=0；i&lt;strlen(s1)；i++）
                if（s2[i]=='e'）
                s2[i ...
            </div>

            <div class="tags">
                <a class="post-tag" rel="tag" title="" href="/questions/tagged/c%2B%2B">c++</a>
            </div>
            <div class="started">
                <div class="user-info">
                    <div class="user-action-time">提问：
                        <span class="relativetime" title="2018-04-11 22:38:32">6月前</span>
                    </div>
                    <div class="user-gravatar32">
                        <a href="/users/1854">
                            <img class="logo" alt="" src="/static/img/small-tree.gif">
                        </a>
                    </div>
                    <div class="user-details">
                        <a title="user1854" href="/users/1854">user1854</a> <br>
                        <span title="威望" class="reputation-score">1</span>
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
                            <span class="badgecount">0</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "QuestionItem"
    }
</script>

<style lang="less" scoped>
    .question-summary {
        border-bottom: 1px dotted #999999;
        overflow: hidden;
        padding: 11px 0;
        width: 730px;
        display: flex;

        .statscontainer {
            width: 86px;
            margin-right: 8px;

            .stats {
                background: none repeat scroll 0 0 #EEEEEE;
                margin: 0 0 0 7px;
                padding: 4px 7px 6px;
                width: 58px;
                .vote {
                    text-align: center;
                    .votes {
                        color: #555555;
                        padding: 0 0 7px;
                        text-align: center;
                        .vote-count-post {
                            color: #808185;
                            display: block;
                            font-weight: bold;
                            font-size: 240%;
                        }
                    }
                }
                .answered {
                    margin-top: -3px;
                    padding: 4px 0;
                    text-align: center;
                    background: transparent;
                    color: #9A4444;
                    .strong {
                        display: block;
                        font-size: 140%;
                        background: transparent;
                        color: #9A4444 !important;
                    }
                }
            }
            .views {
                color: #999999;
                padding-top: 4px;
                text-align: center;
            }
        }
        .summary {
            position: relative;
            width: 635px;
            text-align: left;
            .h3 {
                font-size: 130%;
                font-weight: bold;
                margin-bottom: 5px;
                .question-hyperlink {
                    font-weight: bold;
                }
            }
            .excerpt {
                line-height: 1.2;
                margin: 0;
                padding: 0 0 5px;
            }
            .tags {
                float: left;
                line-height: 18px;
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
            }
            .started {
                position: absolute;
                right: 0;
                color: #999999;
                line-height: 18px;
                width: 185px;
                .user-info {
                    height: 35px;
                    width: 185px;
                    .user-action-time {
                        margin-bottom: 4px;
                        margin-top: 2px;
                        .relativetime {
                            font-weight: bold;
                            text-decoration: none;
                        }
                    }
                    .user-gravatar32 {
                        float: left;
                        height: 32px;
                        width: 32px;
                        img {
                            width: 100%;
                            height: 100%;
                            vertical-align: baseline;
                        }
                    }
                    .user-details {
                        float: left;
                        margin-left: 5px;
                        overflow: hidden;
                        white-space: nowrap;
                        width: 145px;
                        .reputation-score {
                            margin-left: 1px;
                            font-size: 110%;
                            margin-right: 0;
                            color: #444444;
                            font-weight: bold;
                        }
                        .badge {
                            display: inline-block;
                            height: 11px;
                            line-height: inherit;
                            margin: 0 1px 1px 3px;
                            overflow: hidden;
                            vertical-align: text-bottom;
                            width: 6px;

                            &.gold {
                                background: url(/static/img/sprites.png) no-repeat -40px -1034px;
                            }
                            &.silver {
                                background: url(/static/img/sprites.png) no-repeat -20px -1034px;
                            }
                            &.copper {
                                background: url(/static/img/sprites.png) no-repeat 0 -1034px;
                            }
                        }
                        .badgecount {
                            padding-left: 1px;
                            color: #808185;
                        }
                    }
                }
            }
        }
        &:after {
            clear: both;
            content: '';
            display: block;
            width: 0;
            height: 0;
            visibility: hidden;
        }
    }
</style>
