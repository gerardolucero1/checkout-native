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
                    <Label color="white" text="125" />
                </FlexboxLayout>
            </AbsoluteLayout>

            <StackLayout col="0" row="1">
                <GridLayout rows="*, 60">
                    <FlexboxLayout v-if="evidence != 3" row="0" justifyContent="center" alignItems="center" flexDirection="column">
                        <Label fontSize="20" text="Fotografias" />
                        
                        <!--CAMA Y ESCRITORIO-->
                        <StackLayout v-if="evidence == 1" marginTop="20">
                            <Button width="200" borderRadius="20" marginTop="10" backgroundColor="#18304C" color="white" text="Cama(s)" @tap="takePictureBed" />

                            <Button width="200" borderRadius="20" marginTop="10" backgroundColor="#18304C" color="white" text="Escritorio" @tap="takePictureDesktop" />
                        </StackLayout>

                        <!--REGADERA Y LAVABO-->
                        <StackLayout v-else marginTop="20">
                            <Button width="200" borderRadius="20" marginTop="10" backgroundColor="#18304C" color="white" text="Regadera" @tap="takePictureShower" />

                            <Button width="200" borderRadius="20" marginTop="10" backgroundColor="#18304C" color="white" text="Lavabo" @tap="takePictureSink" />
                        </StackLayout>
                        
                        <FlexboxLayout marginTop="20" justifyContent="center" alignItems="center" flexDirection="column">
                            <Label fontSize="20" text="Fotos" />
                            <Label fontSize="20" :text="evidence + '/2'" />
                        </FlexboxLayout>

                        <StackLayout marginTop="20">
                            <Button width="200" borderRadius="20" marginTop="10" backgroundColor="#00C8FC" color="white" text="Continuar" @tap="nextEvidence" />
                        </StackLayout>
                    </FlexboxLayout>

                    <FlexboxLayout v-else row="0" justifyContent="center" alignItems="center" flexDirection="column">
                        <Label fontSize="30" text="¡FELICIDADES!" />
                        <Label fontSize="25" text="Terminaste" />

                        <Image width="100" marginTop="40" src="~/assets/images/icon-check.png" stretch="aspectFit" />
                        
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
//SHARED
import Footer from './shared/Footer.vue'

//CAMERA
const camera = require("nativescript-camera");
const imageModule = require("tns-core-modules/ui/image")

export default{
    components: {
        Footer
    },

    name: 'Evidence',

    data(){
        return{
            evidence: 1,
            permissions: false,

            //ONE
            imageBed: '',
            imageDesktop: '',

            //TWO
            imageShower: '',
            imageSink: '',
        }
    },

    mounted(){
        camera.requestPermissions().then(
            function success() {
                this.permissions = true
                console.log('Permisos aceptados')
                // permission request accepted or already granted 
                // ... call camera.takePicture here ...
            }, 
            function failure() {
                permissions = false
                // permission request rejected
                // ... tell the user ...
            }
        );
    },

    methods: {
        nextEvidence(){
            this.evidence ++
        },

        takePictureBed(){
            camera.takePicture().then((response) => {
                console.log('Resultado...')

                let image = new imageModule.Image()
                image.src = response
                this.imageBed = image.src._android

            }).catch((error) => {
                console.log('Error: ' + error.message)
            })
        },

        takePictureDesktop(){
            camera.takePicture().then((response) => {
                console.log('Resultado...')

                let image = new imageModule.Image()
                image.src = response
                this.imageDesktop = image.src._android

            }).catch((error) => {
                console.log('Error: ' + error.message)
            })
        },

        takePictureShower(){
            camera.takePicture().then((response) => {
                console.log('Resultado...')

                let image = new imageModule.Image()
                image.src = response
                this.imageShower = image.src._android

            }).catch((error) => {
                console.log('Error: ' + error.message)
            })
        },

        takePictureSink(){
            camera.takePicture().then((response) => {
                console.log('Resultado...')

                let image = new imageModule.Image()
                image.src = response
                this.imageSink = image.src._android

            }).catch((error) => {
                console.log('Error: ' + error.message)
            })
        }
    }
}
</script>
















