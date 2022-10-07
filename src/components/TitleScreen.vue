<template>
    <div class="titleScreen">
        <h1>UNCAИИY</h1>    
    </div>
</template>

<script>
// import MainThreeScene from "@/classes/MainThreeScene";

export default {
    name: "ToggleButton",
    mounted() {
        MainThreeScene.init(this.$refs.container);
    },
};

</script>

<style scoped lang="stylus">
    .titleScreen {
        position: absolute;
        top: 0;
        left: 50%;
        padding: 100px;
        font-family: Founders Grotesk,Helvetica,san-serif;
        z-index: 1;
    }
    
</style>