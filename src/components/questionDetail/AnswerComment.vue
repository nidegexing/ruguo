<template>
    <div>
        <div class="core_reply_tail clearfix">
            <div class="p_reply">
                <a
                    @click="isShowCommont = true"
                    class="lzl_link_unfold"
                    v-if="!isShowCommont"
                >回复(15)</a>
                <span
                    @click="isShowCommont = false"
                    class="lzl_link_fold"
                    v-else="isShowCommont"
                >收起回复</span>
            </div>
            <div class="post-tail-wrap">
                <a>
                    <img class="icon-jubao"
                         src="/static/img/jubao_button.png">
                </a>
                <span class="tail-info">来自
                <a href="http://c.tieba.baidu.com/c/s/download/pc?tab=qunliao"
                   target="_blank">iPhone客户端</a>
            </span>
                <span class="tail-info">2楼</span>
                <span class="tail-info">2018-10-27 18:59</span>
            </div>
        </div>
        <div v-if="isShowCommont" class="core_reply_wrapper">
            <div class="core_reply_content">
                <ul class="ul">
                    <li class="li_item">
                        <a target="_blank"
                           class="user_card"
                           href="/">
                            <img class="img" src="/static/img/small-tree.gif">
                        </a>
                        <div class="content">
                            <a target="_blank">雪落天涯</a>:&nbsp;
                            <span class="content_main">如果英文可以的话，看原版还是不错的</span>
                            <div class="content_reply">
                                <span class="time">2018-10-27&nbsp;19:03</span>
                                <a rel="noopener" href="#" class="reply">回复</a>
                            </div>
                        </div>
                    </li>
                    <li class="li_item">
                        <a target="_blank"
                           class="user_card"
                           href="/">
                            <img class="img" src="/static/img/small-tree.gif">
                        </a>
                        <div class="content">
                            <a target="_blank">雪落天涯</a>:&nbsp;
                            <span class="content_main">如果英文可以的话，看原版还是不错的</span>
                            <div class="content_reply">
                                <span class="time">2018-10-27&nbsp;19:03</span>
                                <a rel="noopener" href="#" class="reply">回复</a>
                            </div>
                        </div>
                    </li>
                    <li class="li_item">
                        <a target="_blank"
                           class="user_card"
                           href="/">
                            <img class="img" src="/static/img/small-tree.gif">
                        </a>
                        <div class="content">
                            <a target="_blank">雪落天涯</a>:&nbsp;
                            <span class="content_main">如果英文可以的话，看原版还是不错的</span>
                            <div class="content_reply">
                                <span class="time">2018-10-27&nbsp;19:03</span>
                                <a rel="noopener" href="#" class="reply">回复</a>
                            </div>
                        </div>
                    </li>
                    <li class="li_pagers">
                        <a
                            @click="isShowCommontInput = true"
                            class="btn-sub-reply"
                            href="##"
                        >我也说一句</a>
                        <p class="pagers">
                            <span class="currentPg">1</span>
                            <a class="a" href="#" index="2">2</a>
                            <a class="a" href="#" index="2">下一页</a>
                            <a class="a" href="#" index="2">尾页</a>
                        </p>
                    </li>
                </ul>
                <div
                    class="docker-edit"
                    v-if="isShowCommontInput">
                    <el-input
                        v-model="commontText"
                        placeholder="请说出你的如果。。。"
                        type="textarea"
                        :rows="2"
                    />
                    <div class="docker-control">
                        <el-button type="primary" size="small">提交</el-button>
                        <el-button type="info" @click="isShowCommontInput = false" size="small">取消</el-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AnswerComment",
        data() {
            return {
                isShowCommont: false,
                isShowCommontInput: false,
                commontText: ''
            }
        }
    }
</script>

<style lang="less" scoped>
    .core_reply_tail {
        line-height: 28px;
        .p_reply {
            float: right;
            margin-left: 4px;
            .lzl_link_unfold {
                margin: 0 17px;
            }
            .lzl_link_fold {
                border: 1px solid #f0f1f2;
                border-bottom: 0;
                color: #1D53BF;
                cursor: pointer;
                display: inline-block;
                height: 28px;
                line-height: 28px;
                text-align: center;
                width: 80px;
                background: #f7f8fa;
            }
        }
        .post-tail-wrap {
            float: right;
            color: #999;
            position: relative;
            .icon-jubao {
                height: 13px;
                width: 40px;
                margin-left: 7px;
                vertical-align: middle;
                margin-top: -0.2em;
            }
            .tail-info {
                display: inline-block;
                margin: 0 4px;
                color: #999;
            }
        }
    }

    .core_reply_wrapper {
        background: #f7f8fa;
        border: 1px solid #f0f1f2;
        margin-top: -1px;
        min-height: 0;
        .core_reply_content {
            padding: 4px 15px 14px;
            .ul {
                margin-left: 10px;
                .li_item {
                    position: relative;
                    padding-top: 10px;
                    zoom: 1;
                    .user_card {
                        float: left;
                        width: 32px;
                        height: 32px;
                        border: 1px #ccc solid;
                        padding: 1px;
                        .img {
                            width: 100%;
                            height: 100%;
                        }
                    }
                    .content {
                        margin-left: 45px;
                        zoom: 1;
                        word-wrap: break-word;
                        word-break: break-all;
                        .content_main {
                            line-height: 20px;
                            font-size: 14px;
                            word-wrap: break-word;
                            word-break: break-word;
                        }
                        .content_reply {
                            text-align: right;
                            .reply {
                                color: #666;
                                padding-left: 5px;
                                &:hover {
                                    color: blue;
                                }
                            }
                        }
                    }
                }
                .li_pagers {
                    padding-top: 10px;
                    position: relative;
                    zoom: 1;
                    .btn-sub-reply {
                        float: right;
                        padding: 4px 8px;
                        font-size: 12px;
                        display: inline-block;
                        border-radius: 2px;
                        background-color: #fff;
                        color: #333;
                        border: 1px solid #ccc;
                        line-height: normal;
                        &:hover {
                            color: blue;
                            border-color: blue;
                        }
                    }
                    .pagers {
                        font: 12px/22px Verdana;
                        margin: 0 0 0 8px;
                        .currentPg {
                            color: #000;
                            font-weight: 700;
                            margin: 0 2px;
                            padding: 2px 3px;
                            width: 10px;
                        }
                        .a {
                            padding: 0 4px;
                            white-space: normal;
                        }
                    }
                }
            }
            .docker-edit {
                position: relative;
                height: 100px;
                .docker-control {
                    position: absolute;
                    right: 10px;
                    bottom: 5px;
                }
            }
        }
    }
</style>
