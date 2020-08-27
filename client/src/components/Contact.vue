<template>
    <div class="contact light-blue lighten-4" id="contact">
        <div class="contact-info">
            <v-form 
                class="elevation-6"
            >
                <h1>Get In Touch</h1>
                <p>{{info}}</p>
                <v-text-field
                    v-model="firstname"
                    :rules="nameRules"
                    label="First Name"
                    required
                ></v-text-field>
                <v-text-field
                    v-model="lastname"
                    :rules="nameRules"
                    label="Last Name"
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
                    @submit="sendEmail"
                >
                    Send
                </v-btn>
    
            </v-form>
        </div>

        <v-dialog
            v-model="dialog"
            hide-overlay
            persistent
            width="300">

            <v-card
                color="blue"
                dark
            >
        <v-card-text>
          Sending email...
        <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
        ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>

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
      info: '',
      firstname: '',
      lastname: '',
      message: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 20 || 'Name must be less than 20 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
      dialog: false
    }),
    watch: {
        dialog(val) {
            if (!val) return
        }
    },
    methods: {
        async sendEmail() {
            const url = "http://localhost:3000/email"
            const data = {
                "firstname": this.firstname,
                "lastname": this.lastname,
                "email": this.email,
                "text": this.message, 
            }
            
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            }
        
            try {
                this.dialog = true
                const response = await fetch(url, requestOptions)
                console.log('succes', response)
                this.info = 'Your message was sent!'
                this.dialog = false
    
            } catch(err) {
                this.info = 'Message failed to send :('
            }
            
        }
    }
    
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
    width: 50%;
    margin-top: 20px;
    background: white;
    padding: 30px;
    border-radius: 10px;

    p {
        color: rgb(255, 38, 0);
        font-weight: bolder;
    }
}

h1 {
    text-align: center;
    font-size: 2rem;
}




</style>