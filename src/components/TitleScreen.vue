<template>
    <div class="titleScreen">
        <h1>UNCAИИY</h1>    
        <p> 39 Hong Kong Street #06-01 <br>
            Singapore 059678
        </p>
    </div>
</template>

<script>
// import MainThreeScene from "@/classes/MainThreeScene";

export default {
    name: "TitleScreen",
    mounted() {
        MainThreeScene.init(this.$refs.container);
    },
};

</script>

<style scoped lang="stylus">
    .titleScreen {
        position: absolute;
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        padding: 100px;
        font-family: Founders Grotesk,Helvetica,san-serif;
    }
    
</style>