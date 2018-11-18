<template>
    <div class="docker-full">
        <div class="custom-header">
            <div class="main-body">
                <div class="topbar">
                    <div class="hlinks">
                        <span>
                            <a href="/users/register">注册</a>
                            <span class="lsep">|</span>
                            <a href="/users/login">登录</a>
                            <span class="lsep">|</span>
                        </span>
                        <span/>
                        <span>
                            <a href="/faq">FAQ</a>
                        </span>
                    </div>
                    <div class="hsearch">
                        <form method="get" action="/search">
                            <div>
                                <input type="text"
                                       value="search"
                                       size="28"
                                       maxlength="140"
                                       onfocus="if (this.value=='search') this.value = ''"
                                       tabindex="1"
                                       class="textbox"
                                       name="q">
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="main-body">
            <div class="docker-header">
                <div class="docker-logo">
                    <a href="/" class="logo"/>
                </div>
                <div class="hmenus">
                    <ul class="nav mainnavs">
                        <li><a href="/">首页</a></li>
                        <li class="active"><a href="/questions">问题</a></li>
                        <li><a href="/tags">标签</a></li>
                        <li><a href="/users">用户</a></li>
                        <li><a href="/badges">徽章</a></li>
                        <li><a href="/unanswered">等待回答</a></li>
                    </ul>

                    <ul class="nav mainnavs askquestion">
                        <li><a href="/questions/ask">提问</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CustomHeader"
    }
</script>

<style lang="less" scoped>
    @main-body-width: 1146px;
    @color-yahoo: #324fe1;

    .custom-header {
        background-color: #EEEEEE;
        height: 35px;

        .main-body {
            width: @main-body-width;
            margin: 0 auto;

            .topbar {
                text-align: right;
                width: auto;
                height: 30px;
                line-height: 22px;
                padding: 3px 10px 2px;

                .hlinks {
                    display: inline-block;
                    margin: 2px 20px;

                    a {
                        font-weight: bold;
                        color: #0077CC;
                        cursor: pointer;
                        text-decoration: none;
                    }
                    .lsep {
                        color: #CCCCCC;
                        font-size: 110%;
                        margin: 0px 2px;
                    }
                }
                .hsearch {
                    display: inline-block;

                    .textbox {
                        color: #000;
                        margin: 0px;
                        width: 200px;
                        max-width: 200px;
                        border: none;
                        border-top: 1px solid #ccc;
                        border-left: 1px solid #ccc;
                        font-family: Arial, Helvetica, sans-serif;
                        font-size: 100%;
                        padding: 3px;
                    }
                }
            }
        }
    }

    .main-body {
        width: @main-body-width;
        margin: 0 auto;

        .docker-header {
            width: 100%;
            height: 105px;
            display: flex;

            .docker-logo {
                height: 61px;
                margin-top: 10px;
                width: 250px;

                .logo {
                    background: url(/static/img/logo.jpg) 0 0 no-repeat;
                    overflow: hidden;
                    display: block;
                    height: 61px;
                    width: 250px;
                }
            }
            .hmenus {
                position: relative;
                padding: 34px 0px 20px 5px;
                width: 705px;
                margin-left: 188px;
                .mainnavs {
                    position: absolute;
                    left: 10px;
                    display: inline-block;
                    font-size: 125%;
                    background: #FAFAFA;
                    border: 1px solid @color-yahoo;
                    list-style: disc;
                    margin-left: 30px;
                    margin-bottom: 1em;

                    li {
                        display: inline-block;
                        float: left;
                        padding: 2px 5px;
                        border-left: 1px solid @color-yahoo;
                        border-right: 1px solid @color-yahoo;

                        a {
                            color: @color-yahoo;
                            display: block;
                            font-weight: bold;
                            padding: 6px 12px;
                        }
                        &.active {
                            background: #cecece;
                        }
                    }
                    &.askquestion {
                        position: absolute;
                        left: auto;
                        right: 10px;
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
            }
        }
    }
</style>
