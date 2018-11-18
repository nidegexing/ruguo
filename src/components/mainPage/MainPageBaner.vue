<template>
    <div class="docker-baner">
        <div class="main-pic">
            <a class="a">
                <img
                    src="/static/img/mainpage/baner.webp"
                    class="img"
                    title="Central American migrants, part of the caravan hoping to reach the U.S. border, attend a meeting at a temporary shelter in Tijuana, Mexico. (AP)"
                >
                <div class="pic-desc">
                    <div class="desc">
                        <h2 class="h2">'No city in the world is prepared to receive this'</h2>
                        <p class="p">
                            About 3,000 Central American migrants have reached Mexico's border with California, and
                            thousands more are anticipated, says Tijuana Mayor Juan Manuel Gastelum.
                        </p>
                        <span class="ss">
                            Number could approach 10,000&nbsp;»
                        </span>
                        <a class="tips">
                            <span class="">8740</span>
                            <span class="">people reacting</span>
                        </a>
                    </div>
                </div>
            </a>
        </div>
        <div class="little-pic">
            <ul class="ul clearfix">
                <li class="li">
                    <a
                        class="a"
                        href="https://www.yahoo.com"
                    >
                        <img
                            src="/static/img/mainpage/baner3.webp"
                            class="img">
                        <h3 class="h3">
                            Trump: CIA view on Khashoggi killing 'premature'</h3>
                    </a>
                </li>
                <li class="li">
                    <a
                        class="a"
                        href="https://www.yahoo.com"
                    >
                        <img
                            src="/static/img/mainpage/baner1.webp"
                            class="img">
                        <h3 class="h3">
                            Trump: CIA view on Khashoggi killing 'premature'</h3>
                    </a>
                </li>
                <li class="li">
                    <a
                        class="a"
                        href="https://www.yahoo.com"
                    >
                        <img
                            src="/static/img/mainpage/baner2.webp"
                            class="img">
                        <h3 class="h3">
                            Trump: CIA view on Khashoggi killing 'premature'</h3>
                    </a>
                </li>
                <li class="li">
                    <a
                        class="a"
                        href="https://www.yahoo.com"
                    >
                        <img
                            src="/static/img/mainpage/baner3.webp"
                            class="img">
                        <h3 class="h3">
                            Trump: CIA view on Khashoggi killing 'premature'</h3>
                    </a>
                </li>
                <li class="li">
                    <a
                        class="a"
                        href="https://www.yahoo.com"
                    >
                        <img
                            src="/static/img/mainpage/baner1.webp"
                            class="img">
                        <h3 class="h3">
                            Trump: CIA view on Khashoggi killing 'premature'</h3>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MainPageBaner"
    }
</script>

<style lang="less" scoped>
    .docker-baner {
        position: relative;
        width: 100%;
        .main-pic {
            position: relative;
            width: 53.5rem;
            height: 20rem;
            .a {
                width: 60%;
                height: 100%;
                display: block;
                .img {
                    position: absolute;
                    width: 60%;
                    height: 100%;
                }
                .pic-desc {
                    position: absolute;
                    right: 0;
                    width: 40%;
                    height: 100%;
                    background: black;
                    color: white;
                    .desc {
                        padding: 2rem;
                        .h2 {
                            line-height: 1.2;
                            font-size: 1.5rem;
                        }
                        .p {
                            line-height: 1.35;
                        }
                        .tips {
                            position: absolute;
                            margin: 0 auto;
                            bottom: 1rem;
                            right: 2rem;
                            color: white;
                            font-size: 1rem;
                            &:hover {
                                color: #188fff;
                            }
                        }
                    }
                }
            }
        }
        .little-pic {
            margin: 0.4rem 0 0.6rem 0;
            .ul {
                margin: 0;
                .li + .li {
                    margin-left: 1.25%;
                }
                .li {
                    position: relative;
                    display: inline-block;
                    width: 19%;
                    height: 7.5rem;
                    float: left;
                    .img {
                        width: 100%;
                    }
                }
            }
        }
    }
</style>
