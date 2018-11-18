<template>
    <div class="Card">
        <div class="Card-header">
            <div class="Card-headerText">相关推荐</div>
        </div>
        <div class="Card-section">
            <a target="_blank" href="/remix/albums/1046093853957976064"
               type="button"
               class="RelatedCommodities-item"
            >
                <img
                    class="RelatedCommodities-image"
                    src="https://pic2.zhimg.com/90/v2-99339b5c89f7fd5c6c05022916d67a6b_250x0.jpg" alt="live">
                <div class="RelatedCommodities-content">
                    <div class="RelatedCommodities-subject">拖延症治愈行动手册</div>
                    <div class="RelatedCommodities-description">丁小云</div>
                    <div class="RelatedCommodities-meta">
                        <div class="RelatedCommodities-remixMeta">
                            <div class="RelatedCommodities-desc">共 16 节课</div>
                            <button type="button" class="RelatedCommodities-remixListen">
                                试听
                            </button>
                        </div>
                    </div>
                </div>
            </a><a target="_blank" href="/pub/book/119569665" type="button"
                   class="RelatedCommodities-item">
            <img
                class="RelatedCommodities-image"
                src="https://pic2.zhimg.com/90/v2-9b8dbfcd5db0efad1664145f33c46a89_250x0.jpg" alt="live">
            <div class="RelatedCommodities-content">
                <div class="RelatedCommodities-subject">二十岁的经济独立主义</div>
                <div class="RelatedCommodities-description">天弘基金 等</div>
                <div class="RelatedCommodities-meta">
                    <div class="RelatedCommodities-remixMeta">
                        <div class="RelatedCommodities-desc">42,603 人读过</div>
                        <div class="RelatedCommodities-bookRead">
                            <span class="">
                                ​<svg class="Zi Zi--Ebook" width="13"
                                      height="14" fill="currentColor"
                                      viewBox="0 0 24 24">
                                    <path
                                        d="M16 17.649V2.931a.921.921 0 0 0-.045-.283.943.943 0 0 0-1.182-.604L4.655 5.235A.932.932 0 0 0 4 6.122v14.947c0 .514.421.931.941.931H19.06c.52 0 .941-.417.941-.93V7.292a.936.936 0 0 0-.941-.931h-.773v12.834a.934.934 0 0 1-.83.924L6.464 21.416c-.02.002 2.94-.958 8.883-2.881a.932.932 0 0 0 .653-.886z"
                                        fill-rule="evenodd">
                                    </path>
                                </svg>
                            </span>
                            阅读
                        </div>
                    </div>
                </div>
            </div>
        </a></div>
    </div>
</template>

<script>
    export default {
        name: "SiderBarRecommond"
    }
</script>

<style lang="less" scoped>
    .Card {
        margin-top: 0.75rem;
        background: #fff;
        overflow: hidden;
        border-radius: 0.2rem;
        box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
        box-sizing: border-box;
        .Card-header {
            font-size: 1.2rem;
            line-height: 2rem;
            border-bottom: 1px solid #f6f6f6;
            box-sizing: border-box;
        }
        .Card-section {
            padding: 1rem 1.25rem;
            position: relative;
            .RelatedCommodities-item {
                align-items: center;
                display: flex;
                height: auto;
                padding: 0;
                line-height: inherit;
                background-color: transparent;
                border: none;
                border-radius: 0;
                font-size: 1rem;
                text-align: center;
                &:not(:first-child) {
                    position: relative;
                    margin-top: 10px;
                    padding-top: 10px;
                    border-top: 1px solid #d3d3d3;
                }
                .RelatedCommodities-image {
                    width: 5rem;
                    height: 4rem;
                    border-radius: 0.25rem;
                    margin-right: 0.5rem;
                    object-fit: cover;
                }
                .RelatedCommodities-content {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    text-align: left;
                    overflow: hidden;
                    .RelatedCommodities-subject {
                        color: #1a1a1a;
                        font-size: 1rem;
                        line-height: 1.2rem;
                        font-weight: 600;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                    }
                    .RelatedCommodities-description {
                        color: #646464;
                        font-size: 0.75rem;
                        line-height: 1.4rem;
                        height: 1.4rem;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        overflow: hidden;
                    }
                    .RelatedCommodities-meta {
                        display: flex;
                        color: #8590a6;
                        margin-top: 4px;
                        .RelatedCommodities-remixMeta {
                            display: flex;
                            width: 100%;
                            justify-content: space-between;
                            .RelatedCommodities-desc {
                                font-size: 1rem;
                                line-height: 1.4rem;
                            }
                            .RelatedCommodities-remixListen {
                                position: relative;
                                background: #fd3;
                                color: #b37700;
                                padding: 0.25rem 0.5rem 0.25rem 1rem;
                                line-height: 1;
                                border-color: #fd3;
                                border-radius: 3px;
                                &:before {
                                    position: absolute;
                                    left: 0.5rem;
                                    top: 0.5rem;
                                    display: block;
                                    border-width: 0.25rem 0.5rem;
                                    border-style: solid;
                                    border-color: transparent;
                                    border-left-color: #b37700;
                                    content: "";
                                }
                            }
                            .RelatedCommodities-bookRead {
                                padding: 0.25rem;
                                border-radius: 0.25rem;
                                line-height: 1;
                                color: #fff;
                                background: #0084ff;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
