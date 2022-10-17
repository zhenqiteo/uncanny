<template>
    <div class="topnav">  
        <nav>
            <ul>
                <li>
                    <a href="/">home</a>
                </li>
            
                <li>
                    <a href="/about">about</a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>

export default {
    name: "TopNav",
    components: {
    }
}
</script>


<style scoped lang="stylus">
    .topnav {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 50px;
    }
</style>