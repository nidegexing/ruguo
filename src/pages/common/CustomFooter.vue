<template>
    <div class="footer">
        <div class="footerwrap">
            <div class="footer-menu">
                <a href="/about">关于</a>
                |
                <a href="http://www.taichioxygen.com" title="太极鲜氧">太极鲜氧</a>
                |
                <a href="mailto:services@ilewen.com">联系我们</a>
            </div>
            <div class="copy">
                © 2018 乐问&nbsp;&nbsp;
                本站内容采用&nbsp;<a href="http://creativecommons.org/licenses/by-sa/2.5/cn/" rel="license">
                <img src="/static/img/creativecommons.png" class="cc-icon" alt="知识共享许可协议">
                <strong>知识共享署名-相同方式共享
                    2.5 中国大陆许可协议</strong></a>
                &nbsp;&nbsp;沪ICP备11025996号-1
            </div>
            <span class="right">rev 2011.09.9.1</span>
        </div>

    </div>
</template>

<script>
    export default {
        name: "CustomFooter"
    }
</script>

<style lang="less" scoped>
    .footer {
        color: #BBB;
        background: #777;
        border-top: 7px solid #000;
        clear: both;
        padding: 15px 15px 25px;
        margin-top: 30px;
        overflow: hidden;
        text-shadow: 0 1px #333;

        .footerwrap {
            margin: 0 auto;
            text-align: left;
            width: 960px;
            .footer-menu {
                color: #999999;
                float: left;
                font-size: 100%;
                line-height: 30px;
                width: 820px;
                margin-bottom: 5px;
                text-align: left;
                a {
                    color: #FFFFFF;
                }
            }
            .copy {
                float: left;
                color: #BBB;
                a {
                    color: #ddd;
                    .cc-icon {
                        height: 15px;
                        margin-bottom: -3px;
                        width: 80px;
                    }
                }
            }
            .right {
                float: right;
            }
        }
    }
</style>
