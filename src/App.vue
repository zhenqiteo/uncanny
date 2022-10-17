<template>
    <ThreeScene/>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> | 
    <router-link to="/work">Work</router-link>
  </nav>
  <router-view/>
</template>
<script>
import ThreeScene from "./components/ThreeScene.vue"
import TitleScreen from "./components/TitleScreen.vue"

export default {
    name: "App",
    components: {
        ThreeScene,
        TitleScreen,
    }
}
</script>
<style lang="stylus">
@font-face {
    font-family: "Founders-Grotesk";
    src: url("~@/assets/fonts/FoundersGrotesk-Regular.woff2");
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
    font-family: "Founders-Grotesk",Helvetica,san-serif;
}
</style>
