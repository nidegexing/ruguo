<template>
    <div class="Card-section">
        <div class="TopicRelativeBoard-item">
            <div class="TopicRelativeBoard-title">热点话题</div>
            <div class="TopicTagsContainer">
                <a class="Tag"
                   href="//www.zhihu.com/topic/19551603"
                   target="_blank"
                >体育</a>
                <a class="Tag"
                   href="//www.zhihu.com/topic/19551603"
                   target="_blank"
                >军火控</a>
                <a class="Tag"
                   href="//www.zhihu.com/topic/19551603"
                   target="_blank"
                >流行音乐</a>
                <a class="Tag"
                   href="//www.zhihu.com/topic/19551603"
                   target="_blank"
                >家庭剧</a>
                <a class="Tag"
                   href="//www.zhihu.com/topic/19551603"
                   target="_blank"
                >科学探索</a>
                <a class="Tag"
                   href="//www.zhihu.com/topic/19551603"
                   target="_blank"
                >美食</a>
                <a class="Tag"
                   href="//www.zhihu.com/topic/19551603"
                   target="_blank"
                >自由行</a>
                <a class="Tag"
                   href="//www.zhihu.com/topic/19551603"
                   target="_blank"
                >追星族</a>
            </div>
        </div>
        <div class="TopicRelativeBoard-item">
            <div class="TopicRelativeBoard-title">子话题</div>
            <div class="TopicTagsContainer">
                <a class="TopicTag"
                   href="//www.zhihu.com/topic/19878382"
                   target="_blank"
                >
                    <div class="Tag">库里</div>
                </a>
            </div>
        </div>
        <a class="TopicRelativeBoard-link"
           href="/topic/19596237/organize/entire#anchor-children-topic"
           target="_blank"
        >查看全部话题结构</a>
    </div>
</template>

<script>
    export default {
        name: "SiderBarHot"
    }
</script>

<style lang="less" scoped>
    .Card-section {
        padding: 0.75rem;
        position: relative;
        background: rgba(50, 79, 225, 0.1);
        .TopicRelativeBoard-item {
            margin-top: 0.75rem;
            .TopicRelativeBoard-title {
                font-weight: 600;
                margin-bottom: 0.75rem;
                font-size: 1rem;
            }
            .TopicTagsContainer {
                .Tag {
                    position: relative;
                    display: inline-block;
                    height: 2rem;
                    padding: 0 0.75rem;
                    margin: 0.1rem;
                    font-size: 0.75rem;
                    line-height: 2rem;
                    color: #0084ff;
                    vertical-align: top;
                    border-radius: 4rem;
                    background: rgba(0, 132, 255, .1);
                }
            }
        }
        .TopicRelativeBoard-link {
            margin: 0.75rem;
            display: inline-block;
            line-height: 1.5rem;
            font-size: 1rem;
            color: #8590a6;
        }
    }
</style>
