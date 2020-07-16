<template>
    <div class="about" id="about">
        <!-- Add a navigation with Logo /// About (active) Projects Contact Blog Resume -->
        <p>
            I'm a self-taught programmer and a problem-solver because 
            when you teach yourself that's what you have to do. 
            My preferred technologies are React, Vue, NodeJS/Express.
        </p>
    </div>
</template>

<script>
export default {
    name: 'About'
}

</script>

<style lang='scss' scoped>
.about {
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
        max-width: 500px;
    }
}

</style>