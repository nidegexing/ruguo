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
    }

    .post-tag, .post-text .post-tag {
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
            display: inline-block;
            height: 32px;
            width: 32px;
        }
        .user-details {
            display: inline-block;
            margin-left: 5px;
            overflow: hidden;
            white-space: nowrap;
            width: 140px;
        }
    }

    .votecell {
        vertical-align: top;
        width: 60px;
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
</style>
