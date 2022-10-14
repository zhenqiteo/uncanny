<template>
    <div class="about">
    </div>

</template>

<script>
import ThreeScene from './ThreeScene.vue';
export default {
    name: "About",
    props: {},
    mounted() {
        // MainThreeScene.init(this.$refs.container);
    },
    components: { ThreeScene }
};
</script>

<style scoped lang="stylus">
    .about > h1 {
    }
</style>
