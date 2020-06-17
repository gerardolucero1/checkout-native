<style type="text/css">
    .header{
        background-image: url('~/assets/images/bg-1.png');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }

    .room{
        width: 30%;
    }
</style>

<template>
    <Page actionBarHidden="true">
        <GridLayout columns="*" rows="210, *">
            <AbsoluteLayout class="header" col="0" row="0" >
                <Image width="150" borderRadius="100" left="135" top="50" src="~/assets/images/icon-header-1.png" stretch="aspectFit" />
            </AbsoluteLayout>

            <StackLayout col="0" row="1">
                <GridLayout rows="*, 60">
                    <ScrollView row="0" v-if="arrayStatus.length != 0">
                        <StackLayout>
                            <FlexboxLayout v-for="(item, index) in arrayStatus" :key="index" marginTop="50" justifyContent="space-around" flexWrap="wrap">
                                <FlexboxLayout width="100%" justifyContent="center">
                                    <Label fontSize="20" :text="item.status" />
                                </FlexboxLayout>

                                <StackLayout class="room" marginTop="30" v-for="(room, index) in item.rooms" :key="index" @tap="goToRoom(room.id)">
                                    <FlexboxLayout justifyContent="center">
                                        <Label fontSize="20" :text="room.name" />
                                    </FlexboxLayout>
                                    <Image width="80" src="~/assets/images/icon-room.png" />

                                    <AbsoluteLayout marginTop="-30">
                                        <FlexboxLayout justifyContent="center" alignItems="center" left="90" top="0" width="30" height="30" borderRadius="100" :style="{ backgroundColor: `${item.color}` }">
                                            <Label color="white" text="VD" />
                                        </FlexboxLayout>
                                    </AbsoluteLayout>
                                </StackLayout>
                            </FlexboxLayout>
                        </StackLayout>
                    </ScrollView>

                    <FlexboxLayout row="0" v-else justifyContent="center" alignItems="center" flexDirection="column">
                        <Label text="Recuperando informacion..." />
                        <Gif src="https://pa1.narvii.com/6232/0420d9dd04c5fe1b6e36db556c105515375492a0_00.gif" height="500" ></Gif>
                        <!-- <Image src="https://www.gifss.com/hogar/escobas/escoba01.gif" stretch="aspectFit" /> -->
                    </FlexboxLayout>
                    
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

//Loader
const LoadingIndicator = require('@nstudio/nativescript-loading-indicator').LoadingIndicator;
const Mode = require('@nstudio/nativescript-loading-indicator').Mode;
const loader = new LoadingIndicator();

const options = {
    message: 'Cargando...',
    details: 'Recuperando datos del servidor',
    progress: 0.65,
    margin: 10,
    dimBackground: true,
    color: '#4B9ED6', // color of indicator and labels
    // background box around indicator
    // hideBezel will override this if true
    backgroundColor: 'white',
    userInteractionEnabled: false, // default true. Set false so that the touches will fall through it.
    hideBezel: true, // default false, can hide the surrounding bezel
    mode: Mode.DeterminateHorizontalBar, // see options below
    // android: {
    //     view: android.view.View, // Target view to show on top of (Defaults to entire window)
    //     cancelable: true,
    //     cancelListener: function(dialog) {
    //         console.log('Loading cancelled');
    //     }
    // },
    // ios: {
    //     view: UIView // Target view to show on top of (Defaults to entire window)
    // }
};

//Pages
import Details from './Details.vue'

export default{
    name: 'Rooms',

    data(){
        return{
            rooms: [],
            arrayStatus: [],
            getInfo: 0,
        }
    },

    mounted(){
        this.getRooms()
    },

    computed: {
        checkOut(){
            let CheckOut = this.rooms.filter((content) => {
                return content.status == 'Check Out'
            })

            return CheckOut
        }
    },

    methods: {
        //Router
        goToRoom(args){
            this.$navigateTo(Details, {
                props:{
                    id: args,
                },
                animated: true,
                transition: {
                    name: 'fade',
                },
            })
        },

        //Obtener las habitaciones asignadas al empleado
        async getRooms(){
            // loader.show(options)
            try{
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.$store.state.token

                let response = await axios.get('http://192.168.1.147:8000/api/user/get-rooms')
                let data = response.data

                this.rooms = data

                this.filterRooms()
            }
            catch(e){
                console.log(e)
            }
        },

        //Filtrar las abitaciones por estatus
        filterRooms(){
            

            let checkOut = this.rooms.filter((content) => {
                return content.status == 'Check Out'
            })

            if(checkOut.length != 0){
                let status1 = {
                    status: 'Check Out',
                    color: '#ED2024',
                    rooms: checkOut,
                } 
                this.arrayStatus.push(status1)
                this.getInfo = 25;
            }

            let rush = this.rooms.filter((content) => {
                return content.status == 'Rush'
            })

            if(rush.length != 0){
                let status2 = {
                    status: 'Rush',
                    color: 'orange',
                    rooms: rush,
                } 
                this.arrayStatus.push(status2)
                this.getInfo = 50;
            }

            let stayOver = this.rooms.filter((content) => {
                return content.status == 'Stay Over'
            })

            if(stayOver.length != 0){
                let status3 = {
                    status: 'Stay Over',
                    color: 'purple',
                    rooms: stayOver,
                } 
                this.arrayStatus.push(status3)
                this.getInfo = 75;
            }

            let pendingReview = this.rooms.filter((content) => {
                return content.status == 'Pending Review'
            })

            if(pendingReview.length != 0){
                let status4 = {
                    status: 'Pending Review',
                    color: 'blue',
                    rooms: pendingReview,
                } 
                this.arrayStatus.push(status4)
                this.getInfo = 100;
            }

            // loader.hide()

        }
    }
}
</script>
















