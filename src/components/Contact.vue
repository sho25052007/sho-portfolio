<template>
    <v-container fluid class='contact pa-2' id='contact'>
        <v-container>
        <v-row class="py-8">

            <v-col class="info-text" xs="12"  sm="12" md="6">
                 <h2 >
                     Let's
                     <v-icon>
                        mdi-arrow-right
                     </v-icon>
                 </h2>
                 <h2>
                     Connect
                 </h2>
                 <p>
                     Hope to hear from you! Please don't hesitate to send us any message you like and I'll get back to you!
                 </p>
            </v-col>

            <v-col class="form"  xs="12"  sm="12" md="6" >
                <v-form ref='form' id="contact-form">
                <v-text-field
                    :rules='nameRules'
                    v-model='name'
                    class='text-field my-8'
                    placeholder="name"
                    outlined
                    >
                </v-text-field>
                <v-text-field
                    :rules='emailRules'
                    v-model='email'
                    class='text-field my-8'
                    placeholder="email"
                    outlined
                    >
                </v-text-field>
                <v-textarea
                    :rules='messageRules'
                    v-model='message'
                    background-color="#d3d3d3"
                    class='mt-8'
                    placeholder="message"

                    outlined
                ></v-textarea>
                <v-btn outlined medium
                    @click='sendEmail()'
                    :loading='loading'
                    class='btn float-right'
                    color='primary'>
                    Submit
                </v-btn>
                </v-form>
            </v-col>
        </v-row>
        </v-container>
    </v-container>
</template>

<script>
    import emailjs from '@emailjs/browser';
    export default {
        name: "Contact",
        // components: {
        // },
        data(){
            return{
                loading:false,
                name:"" ,
                nameRules: [v => !!v || 'Name is required'],
                email:"",
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+/.test(v) || 'E-mail must be valid',
                  ],
                message:"",
                messageRules: [v => !!v || 'Message cant be empty'],
                }
        },
        methods: {
            sendEmail() {
                this.loading=true;
                if(this.$refs.form.validate()){
                    emailjs.send('service_shosuzukidesign', 'template_shosuzukidesign',
                    {
                        name: this.name,
                        email: this.email,
                        message: this.message,
                    },
                    '-40MrJZYlf8zKmHao')
                    .then((result) => {
                        this.loading=false;
                        console.log('SUCCESS!', result.text);
                        this.$refs.form.reset();
                        this.message='message sent successfull';
                    }, (error) => {
                        console.log('FAILED...', error.text);
                    });
                }
                this.loading=false;
            }
        }
    }
</script>

<style scoped lang="scss">
#contact{
    background-color:var( --bg-color);
}
.info-text{

    padding-right: 2%;
    h2{
        max-width:600px;
        width:100vw;
        font-size: 3em;
        color:var(--primary-color);
    }
    .mdi-arrow-right{
        font-size: 1.5em;
        color:var(--primary-color);
    }
    p{
        color:var(--secondary-color);
        font-weight: 400;
        font-size: 1.2em;
    }
}

.form{
    .text-field{
        height:55px;
        // padding:0;
         background-color: #d3d3d3;
        // background-color:var(--gray);
    }
    .btn{
    font-weight: bold;
    border-width:3px ;
    }
}
</style>