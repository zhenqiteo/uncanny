<template>
    <div class="about">
        <div class="container" ref="container">
            <h3>about blablablabla</h3>
        </div>
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
    .container {
        top: 50%;
        left: 50%;
        position: absolute;
        margin-right: -50%;
        transform: translate(-50%, -50%);
    }
</style>
