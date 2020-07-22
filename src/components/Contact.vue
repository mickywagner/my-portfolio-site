<template>
    <div class="contact" id="contact">
        <div class="contact-info">
            <h1>Get In Touch</h1>
            <div class="form">
                <input type="text" placeholder="Name">
                <input type="email" placeholder="Email">
                <textarea placeholder="Your message..."></textarea>
                <input type="submit" value="Send">
            </div>
        </div>
        <Footer id="foot"/>
    </div>
    
</template>

<script>
import Footer from "./Footer"

export default {
    name: 'Contact',
    components: {
        Footer,
    }
}
</script>

<style lang="scss" scoped>
.contact {
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-rows: 9fr 1fr;
    background: lightblue;
    overflow: hidden;
}

.form {
    display: flex;
    flex-direction: column;
    padding: 20px;
    width: 70%;

    input, textarea {
        font-size: 1em;
        margin-bottom: 10px;
        padding: 10px;
        border: none;
        border-radius: 5px;
    }

    textarea {
        height: 200px;
    }

    input[type="submit"] {
        background: #2c3e50;
        color: white;
    
    }
}

.contact-info {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}



</style>