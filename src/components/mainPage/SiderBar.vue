<template>
    <div class="sidebar">
        <div class="module">
            <div class="summarycount al">5341</div>
            <p>问题</p>
        </div>
        <div class="module">
            <h4>收藏标签</h4>
            <div>
                <a class="post-tag" rel="tag" title="" href="/questions/tagged/c%2B%2B">c++</a>
                <span class="delete-tag" title="删除"></span></div>
            <table>
                <tbody>
                <tr>
                    <td class="vt">
                        <input type="text" name="interestingTag" autocomplete="off"
                               class="ac_input">
                    </td>
                    <td class="vt">
                        <input type="button" value="添加" class="interestingAdd">
                    </td>
                </tr>
                </tbody>
            </table>
            <h4>忽略标签</h4>
            <div>
                <a class="post-tag" rel="tag" title="" href="/questions/tagged/c%E8%AF%AD%E8%A8%80">c语言</a>
                <span class="delete-tag" title="删除"></span></div>
            <table>
                <tbody>
                <tr>
                    <td class="vt">
                        <input type="text" name="ignoredTag" autocomplete="off"
                               class="ac_input">
                    </td>
                    <td class="vt">
                        <input type="button" value="添加" class="ignoredAdd">
                    </td>
                </tr>
                </tbody>
            </table>
            <div class="dno">
                <input type="checkbox" title="hide ignored tags">
                <label> hide ignored tags</label>
            </div>
        </div>
        <div class="module">
            <h4>本周威望排行</h4>
            <ul class="top">
            </ul>
            <p class="ar">
                <a href="/tops/index">更多 »</a>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SiderBar"
    }
</script>

<style lang="less" scoped>

</style>
