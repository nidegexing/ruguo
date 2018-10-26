<template>
    <div class="question">
        <table>
            <tbody>
            <tr>
                <td class="votecell">
                    <div class="vote">
                        <input type="hidden" value="59">
                        <a title="赞成" class="vote-up-off">赞成</a>
                        <span class="vote-count-post">6</span>
                        <a title="反对" class="vote-down-off">反对</a>
                        <a title="收藏 (取消收藏)" href="#" class="star-off ">收藏</a>
                        <div class="favoritecount"><b>0</b></div>
                    </div>
                </td>
                <td class="postcell">
                    <div>
                        <div class="post-text">
                            <p>我想对字节中的某个bit进行置位，清除，反转，提取等操作，用c或者c++怎么写代码？</p>

                            <pre class="prettyprint"><code><span class="pun">置位：把该</span><span
                                class="pln">bit</span><span class="pun">按要求置</span><span class="lit">1</span><span
                                class="pln">
</span><span class="pun">清除：把该</span><span class="pln">bit</span><span class="pun">强制置</span><span
                                class="lit">0</span><span class="pln">
</span><span class="pun">反转：把该</span><span class="pln">bit</span><span class="pun">取反</span><span class="pln">
</span><span class="pun">提取：把该</span><span class="pln">bit</span><span class="pun">置取出来</span></code>
                            </pre>
                            请帮忙看下这样可以么？
                        </div>
                        <div class="module">
                            <h4>推荐图书</h4>
                            <ul class="books-image">
                                <li>
                                    <a target="_blank" title="C++ Primer中文版（第4版）" href="/book/link?id=2">
                                        <img src="/static/img/book-info/book-primer.jpg" alt="C++ Primer中文版（第4版）">
                                    </a>
                                </li>
                                <li>
                                    <a target="_blank" title="More Effective C++：35个改善编程与设计的有效方法（中文版）"
                                       href="/book/link?id=3">
                                        <img src="/static/img/book-info/book-c++more.jpg"
                                             alt="More Effective C++：35个改善编程与设计的有效方法（中文版）">
                                    </a>
                                </li>
                                <li>
                                    <a target="_blank" title="设计模式：可复用面向对象软件的基础" href="/book/link?id=5">
                                        <img src="/static/img/book-info/book-shejimoshi.jpg" alt="设计模式：可复用面向对象软件的基础">
                                    </a>
                                </li>
                            </ul>
                            <p class="ar mt10">
                            </p>
                        </div>
                        <div class="post-taglist">
                            <a class="post-tag" rel="tag" title="显示标签 'c'" href="/questions/tagged/c">c</a><a
                            class="post-tag" rel="tag" title="显示标签 'c++'" href="/questions/tagged/c%2B%2B">c++</a><a
                            class="post-tag" rel="tag" title="显示标签 'bit'" href="/questions/tagged/bit">bit</a></div>
                        <div class="fw">
                            <div align="right" class="post-signature">
                                <div class="user-info">
                                    <div class="user-action-time">编辑于
                                        <a title="查看历史版本" href="/post/revisions?id=59"><span
                                            class="relativetime">7年前</span></a>
                                    </div>
                                    <div class="user-gravatar32"></div>
                                    <div class="user-details">
                                        <br>
                                    </div>
                                </div>
                            </div>
                            <div class="post-signature">
                                <div class="user-info">
                                    <div class="user-action-time">提问于
                                        <span class="relativetime" title="2011-07-30 13:10:37">7年前</span>
                                    </div>
                                    <div class="user-gravatar32">
                                        <a href="/users/5">
                                            <img width="32" height="32" class="logo" alt=""
                                                 src="/static/img/small-tree.gif">
                                        </a>
                                    </div>
                                    <div class="user-details">
                                        <a title="Yan.W" href="/users/5">Yan.W</a> <br>
                                        <span title="威望" class="reputation-score">186</span>
                                        <span title="0 金徽章 "><span class="badge1"></span><span
                                            class="badgecount">0</span></span><span title="0 银徽章 "><span
                                        class="badge2"></span><span class="badgecount">0</span></span><span
                                        title="5 铜徽章 "><span class="badge3"></span><span
                                        class="badgecount">5</span></span>
                                    </div>
                                    <div class="user-details">
                                        <a title="查看历史版本" href="/post/revisions?id=59">4个版本</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="votecell"></td>
                <td>
                    <div class="comments" id="comments-59">
                        <table>
                            <tbody>
                            </tbody>
                            <tfoot>
                            <tr>
                                <td></td>
                                <td class="comment-form">
                                    <form id="add-comment-59"></form>
                                </td>
                            </tr>
                            </tfoot>
                        </table>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="votecell"></td>
                <td>
                    <!-- JiaThis Button BEGIN -->
                    <div class="share">
                        <span class="jiathis_txt">分享到：</span>
                        <a class="jiathis_button_tsina">新浪微博</a>
                        <a class="jiathis_button_douban">豆瓣</a>
                        <a class="jiathis_button_tqq">腾讯微博</a>
                        <a class="jiathis_button_renren">人人网</a>
                        <a href="http://www.jiathis.com/share?uid=1541538"
                           class="jiathis jiathis_txt jiathis_separator jtico jtico_jiathis" target="_blank">更多</a>
                    </div>
                    <!-- JiaThis Button END -->
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "QuestionDesc"
    }
</script>

<style lang="less" scoped>
    .question {
        width: 730px;

        .postcell {
            .post-taglist {
                clear: both;
                margin-bottom: 10px;
            }
            .fw {
                display: flex;
                justify-content: flex-end;
                width: 100%;

                .post-signature {
                    height: 58px;
                    padding-left: 5px;
                    padding-top: 2px;
                    text-align: left;
                    vertical-align: top;
                    width: 175px;
                }
                .post-signature {
                    height: 58px;
                    padding-left: 5px;
                    padding-top: 2px;
                    text-align: left;
                    vertical-align: top;
                    width: 175px;
                }
            }
        }
    }
</style>
