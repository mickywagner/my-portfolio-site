<template>
    <div class="about" id="about">
        <Nav />
        <!-- Add a navigation with Logo /// About (active) Projects Contact Blog Resume -->
        <div class="bio">
            <p>
                I'm a self-taught programmer based in Salt Lake City, Utah. I'm a passionate about clean design and code. I'm forever learning and problem-solving (because that's what you do when you teach yourself). My preferred tools include React, Vue, and NodeJS/Express.
            </p>
        </div>
        
    </div>
</template>

<script>
import Nav from './Navigation'

export default {
    name: 'About',
    components: {
        Nav
    }
}

</script>

<style lang='scss' scoped>
.about {
    height: 100vh;
    width: 100vw;
}

.bio {
    display: flex;
    padding: 0 50px;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    
    p {
        max-width: 500px;
    }
}

</style>