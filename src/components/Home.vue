<template>
    <TitleScreen/>
    <h1> home page </h1>
</template>

<script>
import TitleScreen from "../components/TitleScreen.vue"

export default {
    name: "Home",
    props: {
    },
    mounted() {
        // MainThreeScene.init(this.$refs.container);
    },
};
</script>

<style scoped lang="stylus">
    .home {
        padding: 20px;
    }
</style>