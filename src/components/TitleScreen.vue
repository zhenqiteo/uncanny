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
    @font-face {
        font-family: "Founders Grotesk";
        src: url("/src/fonts/FoundersGrotesk-Regular.woff") format("woff");
    }
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

     h1 {
        font-size: 10rem;
        font-family: "Founders Grotesk",Helvetica,san-serif;
    }
</style>