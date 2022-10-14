<template>
    <div class="titleScreen">
        <div class="container" ref="container">
            <h1>UNCANNY</h1>
        </div>
    </div>
</template>

<script>

export default {
    name: "TitleScreen",
    props: {
        msg: String,
    },
    mounted() {
        // MainThreeScene.init(this.$refs.container);
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
    .titleScreen {
        positon: relative;
        z-index: -1;
    }

    .container {
        top: 50%;
        left: 50%;
        position: absolute;
        margin-right: -50%;
        transform: translate(-50%, -50%);
    }

    .container > h1 {
        font-size: 8rem;
        font-family: Founders Grotesk,Helvetica,san-serif;
    }
</style>