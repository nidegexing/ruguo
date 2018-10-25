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

<style>
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
</style>
