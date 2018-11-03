<template>
    <div id="app">
        <custom-header/>
        <router-view/>
        <custom-footer/>
    </div>
</template>

<script>
    import CustomHeader from './pages/common/CustomHeader'
    import CustomFooter from './pages/common/CustomFooter'

    export default {
        name: 'App',
        components: {
            CustomHeader,
            CustomFooter
        }
    }
</script>

<style lang="less">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #000000;
        text-align: left;
    }

    html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, font, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td {
        background: none repeat scroll 0 0 transparent;
        border: 0 none;
        font-size: 100%;
        margin: 0;
        padding: 0;
        vertical-align: baseline;
    }

    body {
        background: none repeat scroll 0 0 #FFFFFF;
        color: #000000;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 80%;
        text-align: center;
        line-height: 1;
    }

    a {
        color: #0077CC;
        cursor: pointer;
        text-decoration: none;
    }

    * {
        margin: 0;
        padding: 0;
    }

    .docker-full {
        position: relative;
        width: 100%;
        height: 100%;
    }

    .nav {
        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
    }

    .tagged-interesting {
        background-color: #ffefc6;
    }

    .tagged-ignored {
        background-color: #fff;
        opacity: 0.3;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0pt;
    }

    input, select, button {
        border: 1px solid #999999;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 100%;
    }

    input {
        margin: 5px 0;
        padding: 3px;
    }

    .votecell {
        vertical-align: top;
        width: 60px;
        .vote {
            text-align: center;

            .vote-up-off, .vote-up-on, .vote-down-off, .vote-down-on, .star-on, .star-off, .comment-up-off, .comment-up-on, .comment-flag, .flag-off, .vote-accepted-off, .vote-accepted-on {
                font-size: 1px;
                text-indent: -9999em;
            }

            .vote-up-off, .vote-up-on, .vote-down-off, .vote-down-on, .star-on, .star-off {
                background: url(/static/img/sprites.png) no-repeat 0px -265px;
                display: block;
                height: 25px;
                margin: 0pt auto;
                width: 41px;
            }

            .vote-down-off {
                background-position: 0px -300px;
            }

            .vote-count-post {
                display: block;
                font-size: 240%;
                color: #808185;
                display: block;
                font-weight: bold;
                font-size: 200%;
            }

            .star-off, .star-on {
                background-position: 0px -150px;
                height: 31px;
                width: 33px;
            }

            .favoritecount {
                color: #808185;
                text-align: center;
            }
        }
    }

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

    h1 {
        font-size: 170%;
        font-weight: bold;
        margin-bottom: 7px;
    }

    h2 {
        font-size: 140%;
        font-weight: bold;
        margin-bottom: 7px;
    }

    h3 {
        font-size: 110%;
        font-weight: bold;
        margin-bottom: 5px;
    }

    p {
        clear: both;
        margin-bottom: 1em;
    }

    pre {
        padding: 5px;
        font-family: Consolas, Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;
        margin-bottom: 10px;
        background-color: #eee;
        overflow: auto;
        width: auto;
        width: 650px !ie 7;
        padding-bottom: 20px !ie 7;
        max-height: 600px;
    }

    ul, ol, li {
        list-style: none;
    }

    .post-text {
        font-size: 107%;
        line-height: 130%;
        margin-bottom: 5px;
        margin-right: 5px;
        width: 660px;
        p {
            word-wrap: break-word;
        }

        .prettyprint {
            padding: 2px;
        }
    }

    code {
        font-family: Consolas, Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;
        background-color: #eee;
    }

    ul {
        list-style: disc;
        margin-left: 30px;
        margin-bottom: 1em;
    }

    .module {
        color: #444;
        padding: 0 8px 2px 8px;
        margin-bottom: 10px;

        h4 {
            line-height: 1.4;
            font-size: 130%;
            padding-bottom: 7px;
        }
        ul.books-image {
            margin-left: 5px;
            list-style-type: square;
            font-size: 120%;
            margin-right: 30px;
            line-height: 120%;
            li {
                display: inline-block; //使li对象显示为一行
                list-style: none;
                margin-right: 10px;
                margin-bottom: 4px;
            }
        }
        .spacer {
            margin-bottom: 8px;
            .question-hyperlink {
                font-weight: bold;
            }
        }
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

    .vt {
        vertical-align: top;
    }

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

    .comments {
        border-top: 1px dotted #AAAAAA;
        color: #444444;
        line-height: 135%;
        margin-top: 10px;
        padding-bottom: 10px;
        width: 660px;
    }

    .share {
        font-size: 14px;
        line-height: 16px;
        overflow: hidden;
        margin-top: 10px;
    }

    .subheader {
        border-bottom: 1px solid #666666;
        height: 34px;
        margin-bottom: 15px;
        h1 {
            float: left;
            font-size: 170%;
            line-height: 34px;
            margin-bottom: 0px;
            font-weight: bold;
        }
        h2 {
            float: left;
            font-size: 170%;
            line-height: 34px;
            margin-bottom: 0px;
        }
        .tabs {
            float: right;
            font-weight: bold;
            a {
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

    .question {
        width: 730px;
    }

    .answers {
        padding-top: 10px;
        width: 730px;
    }

    .answer {
        border-bottom: 1px solid #AAAAAA;
        padding-bottom: 20px;
        padding-top: 20px;
        width: 730px;
    }

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

    .tagged {
        margin-bottom: 10px;
        margin-top: 5px;
    }

    .item-multiplier {
        color: #444444;
        font-size: 120%;
        font-weight: bold;
        margin-right: 4px;
    }

    .label-key {
        color: #444;
        margin-bottom: 0;
        width: 80px;
        float: left;
    }

    .label-value {
        color: #444;
        font-weight: bold;
    }

    .related {
        font-size: 90%;
        line-height: 120%;
    }

    .clearfix:after {
        content: " ";
        display: table;
        clear: both;
    }
</style>
