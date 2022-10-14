<template>
    <ThreeScene/>
    <TitleScreen/>
    <About/>
    <Footer/>
</template>

<script>
import ThreeScene from "./components/ThreeScene.vue"
import About from './components/About.vue'
import TitleScreen from "./components/TitleScreen.vue"
import Footer from './components/Footer.vue'

const routes = {
    '/': TitleScreen,
    '/about': About,
}

export default {
    name: "App",
    components: {
        ThreeScene,
        TitleScreen,
        About,
        Footer
    }
}
</script>

<style lang="stylus"> 
@font-face {
    font-family: "Founders Grotesk";
    src:local("FoundersGrotesk-Regular"), url("/src/fonts/FoundersGrotesk-Regular.woff");
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
    font-family: Founders Grotesk,Helvetica,san-serif;
}

</style>
