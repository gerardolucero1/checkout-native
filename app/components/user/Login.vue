<style type="text/css">
    .header{
        background-image: url('~/assets/images/bg-1.png');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }
</style>

<template>
    <Page actionBarHidden="true">
        <GridLayout columns="*" rows="210, *">
            <FlexboxLayout class="header" col="0" row="0" justifyContent="center" alignItems="center">
                <Image width="90" src="~/assets/images/checkout-logo-2.png" stretch="aspectFit" />
            </FlexboxLayout>

            <FlexboxLayout v-if="!loggedIn" col="0" row="1" justifyContent="center" alignItems="center" flexDirection="column">
                <StackLayout class="login-form" width="80%">
                    <TextField fontSize="13" v-model="email" color="#8C8C8C" hint="Email" />
                    <TextField fontSize="13" v-model="password" marginTop="10" color="#8C8C8C" hint="Contraseña" />

                    <Button width="150" marginTop="50" borderRadius="20" backgroundColor="#18304C" color="white" text="Entrar" @tap="login" />
                </StackLayout>
            </FlexboxLayout>

            <FlexboxLayout v-else col="0" row="1" justifyContent="center" alignItems="center" flexDirection="column">
                <StackLayout class="login-form" width="80%">
                    <Button width="250" marginTop="50" borderRadius="20" backgroundColor="#18304C" color="white" text="Iniciar sesion" @tap="logged" />
                </StackLayout>
            </FlexboxLayout>
        </GridLayout>
    </Page>
</template>

<script>
//VUEX
import { mapGetters } from 'vuex'

//Pages
import Home from '../Home.vue'

export default{
    name: 'Login',

    data(){
        return{
            email: '',
            password: '',
        }
    },

    created(){
        
    },

    computed: {
        ...mapGetters([
                'loggedIn'
            ])
    },

    methods: {
        login(){
            this.$store.dispatch('retrieveToken', {
                username: this.email,
                password: this.password,
            })
            .then(response => {
                this.$navigateTo(Home, {
                    animated: true,
                    transition: {
                        name: 'fade',
                    },
                })
            })
        },

        logged(){
            this.$navigateTo(Home, {
                animated: true,
                transition: {
                    name: 'fade',
                },
            })
        }
    }
}
</script>
















