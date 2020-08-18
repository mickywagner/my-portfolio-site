<template>
    <div class="contact, light-blue" id="contact">
        <div class="contact-info">
            <v-form 
                class="elevation-6"
            >
                <h1>Get In Touch</h1>
                <v-text-field
                    v-model="name"
                    :rules="nameRules"
                    label="Name"
                    required
                ></v-text-field>

                <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="Email"
                    required
                ></v-text-field>

                <v-textarea
                    v-model="message"
                    label="Message"
                    required
                    no-resize
                    multi-line
                >
                </v-textarea>
                <v-btn
                    color="success"
                    
                >
                    Send
                </v-btn>
    
            </v-form>
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
    },
    data: () => ({
      name: '',
      message: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
    }),
    
}
</script>

<style lang="scss" scoped>
#contact {
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-rows: 9fr 1fr;
    overflow: hidden;
}

.contact-info {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.v-form {
    width: 60%;
    margin-top: 20px;
    background: white;
    padding: 20px;
    border-radius: 10px;
}

h1 {
    text-align: center;
    font-size: 2rem;
}




</style>