<template>
    <div class="contact">
        <h1>Get in touch</h1>
        <div class="form">
            <input type="email" placeholder="Email">
            <textarea placeholder="Your message..."></textarea>
        </div>
        <!-- Footer -->
    </div>
</template>

<script>
export default {
    name: 'Contact'
}
</script>

<style lang="scss" scoped>
.contact {
    height: 100vh;
    width: 100vw;
    display: flex;
    padding-top: 60px;
    align-items: center;
    flex-direction: column;
    background: lightblue;
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
}

</style>