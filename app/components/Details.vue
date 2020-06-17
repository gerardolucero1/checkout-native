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
            <AbsoluteLayout class="header" col="0" row="0" >
                <Image width="150" borderRadius="100" left="135" top="50" src="~/assets/images/icon-header-1.png" stretch="aspectFit" />
                <FlexboxLayout justifyContent="center" alignItems="center" left="230" top="80" width="40" height="40" borderRadius="100" backgroundColor="#576066">
                    <Label color="white" :text="room.name" />
                </FlexboxLayout>
            </AbsoluteLayout>

            <StackLayout col="0" row="1">
                <GridLayout rows="*, 60">
                    <StackLayout row="0">
                        <FlexboxLayout justifyContent="space-around" marginTop="50" alignItems="center" >
                        	<FlexboxLayout justifyContent="center" alignItems="center" flexDirection="column" @tap="goToChronometer('normal')">
                        		<Image width="90" src="~/assets/images/icon-brush-1.png" stretch="aspectFit" />
                        		<Label text="Normal" />
                        	</FlexboxLayout>

                        	<FlexboxLayout justifyContent="center" alignItems="center" flexDirection="column" @tap="goToChronometer('sucia')">
                        		<Image width="90" src="~/assets/images/icon-brush-2.png" stretch="aspectFit" />
                        		<Label text="Sucia" />
                        	</FlexboxLayout>

                        	<FlexboxLayout justifyContent="center" alignItems="center" flexDirection="column" @tap="goToChronometer('sucia++')">
                        		<Image width="90" src="~/assets/images/icon-brush-3.png" stretch="aspectFit" />
                        		<Label text="Muy Sucia" />
                        	</FlexboxLayout>
		                </FlexboxLayout>

		                <FlexboxLayout justifyContent="center" marginTop="50" alignItems="center">
		                	<Button width="300" borderRadius="20" backgroundColor="#18304C" color="white" text="No se puede limpiar" />
		                </FlexboxLayout>
                    </StackLayout>
                    
                    <StackLayout row="1" orientation="horizontal">
                        <Footer />
                    </StackLayout>
                </GridLayout>
            </StackLayout>
        </GridLayout>
    </Page>
</template>

<script>
//Vuex
import { mapState } from 'vuex'

//Axios
import axios from 'axios'

//Pages
import Chronometer from './Chronometer.vue'

export default{

    props: [
        'id'
    ],

    name: 'Details',

    mounted(){
        this.getRoom()
    },

    data(){
        return{
            room: '',
        }
    },

    methods: {
        //Router
        goToChronometer(args){
            this.$navigateTo(Chronometer, {
                props:{
                    id: args,
                },
                animated: true,
                transition: {
                    name: 'fade',
                },
            })
        },

        async getRoom(){
            try{
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.$store.state.token

                let response = await axios.get('http://192.168.1.147:8000/api/rooms/get-room/' + this.id)

                let data = response.data

                this.room = data
            }
            catch(e){
                console.log(e)
            }
        }
    }
}
</script>
















