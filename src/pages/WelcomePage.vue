<template>
    <div class="docker-mask">
        <div class="docker-welcome">
            <div class="btn-welcome" @click="toMainPage">进入</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "WelcomePage",
        methods: {
            toMainPage() {
                this.$router.push({name: 'main-page'});
            }
        }
    }
</script>

<style lang="less" scoped>
    .docker-mask {
        background: #b8e5f8 url("/static/img/bg/welcome.png") no-repeat;
        background-size: cover;

        display: flex;
        align-items: center;
        justify-content: center;
        .docker-welcome {
            position: relative;
            width: 20rem;
            height: 40rem;
            /*background: blue;*/
            .btn-welcome {
                position: absolute;
                left: 50%;
                bottom: 2%;
                width: 16rem;
                height: 6rem;
                transform: translate(-50%, -50%);
                text-align: center;
                font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
                font-size: 4rem;
                line-height: 6rem;
                color: #324fe1;
                border: 0.2rem solid #324fe1;
                cursor: pointer;
                /*background: yellow;*/
            }
        }
    }
</style>
