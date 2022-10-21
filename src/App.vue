<template>
    <div class="webgl">
        <ThreeScene/>
    </div>
    <div class="router-view">
        <router-view/>
    </div>
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

<style lang="css">

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Founders-Grotesk",Helvetica,san-serif;
}

.webgl {
    position: fixed;
}

.router-view {
    position: relative;
}

.sticky {
    position: fixed;
    top: 0;
    width: 100%;
}

</style>
