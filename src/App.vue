<template>
    <ThreeScene/>
    <TitleScreen/>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <div class="container">
        <router-view/>
    </div>
</template>

<script>
// import 'vue-router';
import ThreeScene from "./components/ThreeScene.vue"
import TitleScreen from "./components/TitleScreen.vue"
import TopNav from "./components/TopNav.vue"

export default {
    name: "App",
    components: {
        ThreeScene,
        TitleScreen,
        TopNav
    }
}
</script>

<style lang="stylus"> 
@font-face {
    font-family: "Founders Grotesk";
    src:url("./fonts/FoundersGrotesk-Regular.woff2") format("woff2");
}

body {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Founders Grotesk",Helvetica,san-serif;
}

</style>
