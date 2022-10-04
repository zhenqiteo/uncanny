<template>
    <ThreeScene />
    <TitleScreen />
</template>

<script>
import ThreeScene from "./components/ThreeScene.vue";
import TitleScreen from "./components/TitleScreen.vue";

export default {
    name: "App",
    components: {
        ThreeScene,
        TitleScreen,
    },
};
</script>

<style lang="stylus">
body {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Founders Grotesk,Helvetica,san-serif;
}
</style>
