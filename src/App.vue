<template>
    <ThreeScene/>
    <TitleScreen/>
    <Footer/>
</template>

<script>
import ThreeScene from "./components/ThreeScene.vue"
import TitleScreen from "./components/TitleScreen.vue"
import About from './components/About.vue'
import Footer from './components/Footer.vue'
import NotFound from './components/NotFound.vue'

const routes = {
    '/about': About,
}

export default {
    name: "App",
    components: {
        ThreeScene,
        TitleScreen,
        Footer,
        About,
        NotFound
    }
}
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
