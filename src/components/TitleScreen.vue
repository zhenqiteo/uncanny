<template>
    <div class="titleScreen">
        <div class="name">
            <h1>UNCAИИY</h1>  
        </div>  
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
        display: flex;
        position: absolute;
        font-family: Founders Grotesk,Helvetica,san-serif;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }
    
</style>