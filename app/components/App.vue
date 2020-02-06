<template>
    <Page actionBarHidden="true">
        <Button @tap="ir" text="IRRRRRRR" />
    </Page>
</template>

<script>
import Rooms from './Rooms.vue'

export default{
    name: 'Inicio',

    data(){
        return{

        }
    },

    methods: {
        ir(){
            this.$navigateTo(Rooms)
        }
    }
}
</script>
