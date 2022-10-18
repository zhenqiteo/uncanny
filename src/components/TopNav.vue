<template>
    <div class="topNav">
    <div class="topNav-left">
        <router-link to="/about" exact>About</router-link>
        <router-link to="/work" exact>Work</router-link>
        <router-link to="/contact" exact>Contact</router-link>
    </div>
    <div class="topNav-centered">
        <router-link to="/" exact id="header">UNCAИИY</router-link>
    </div>
</div>  
</template>

<script>
export default {
    name: "TopNav",  
    components: {
    
    }
};
</script>

<style scoped lang="css">
.topNav {
    position: relative;
    overflow: hidden;
}

.topNav a {
    float: left;
    text-align: center;
    color: black;
    text-decoration: none;
    padding: 30px 50px;
    font-size: 1.2rem;
}

.topNav a:hover {
    color: greenyellow;
}

.topNav .header-active-link {
    color: greenyellow;
}

.topNav-centered a {
    float: none;
    position: absolute; 
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 2.2rem;
    color: black;
}

#header {
    color: black;
}


</style>