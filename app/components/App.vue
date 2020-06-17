<template>
    <Page actionBarHidden="true">
        <Button @tap="ir" text="IRRRRRRR" />
    </Page>
</template>

<script>
import View from './Evidence.vue'

//LOGIN
import Login from './user/Login.vue'

export default{
    name: 'Inicio',

    data(){
        return{

        }
    },

    methods: {
        ir(){
            this.$navigateTo(Login, {
                animated: true,
                transition: {
                    name: 'fade',
                },
            })
        }
    }
}
</script>
