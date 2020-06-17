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
                    <StackLayout row="0">
                        <FlexboxLayout justifyContent="center" marginTop="30" alignItems="center">
		                	<Button v-if="view == 1" width="170" height="170" borderRadius="100" backgroundColor="#4CB200" color="white" text="Iniciar" @tap="startCount" />

                            <Button v-if="view == 2" width="170" height="170" borderRadius="100" backgroundColor="#FF2100" color="white" text="Finalizar" @tap="stopCount" />

                            <FlexboxLayout v-if="view == 3" width="170" height="170" borderRadius="100" backgroundColor="white" @tap="stopCount" justifyContent="center" alignItems="center" flexDirection="column">
                                <Label color="#576066" fontSize="25" text="Tiempo" />
                                <Label color="#576066" fontSize="30" :text="counter" />
                            </FlexboxLayout>
		                </FlexboxLayout>

		                <FlexboxLayout v-if="view == 1" justifyContent="center" marginTop="30" alignItems="center" flexDirection="column">
		                	<Button width="300" borderRadius="20" backgroundColor="#18304C" color="white" text="No se puede limpiar" />

                            <Button width="300" borderRadius="20" marginTop="10" backgroundColor="#00C8FC" color="white" text="Cambiar" />
		                </FlexboxLayout>

                        <FlexboxLayout v-if="view == 2" justifyContent="center" marginTop="30" alignItems="center" flexDirection="column">
                            <Label fontSize="30" color="#576066" text="Tiempo" />
                            <Label fontWeight="bold" marginTop="10" fontSize="30" color="#576066" :text="counter" />
                        </FlexboxLayout>

                        <FlexboxLayout v-if="view == 3" justifyContent="center" marginTop="30" alignItems="center" flexDirection="column">
                            <Button width="300" borderRadius="20" backgroundColor="#18304C" color="white" text="Falla" @tap="showProblems" />
                            <Button width="300" borderRadius="20" marginTop="10" backgroundColor="#18304C" color="white" text="Extras" @tap="showExtras" />

                            <Button width="300" borderRadius="20" marginTop="10" backgroundColor="#00C8FC" color="white" text="Continuar" @tap="goToEvidence" />
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

//Chronometer
import { Timer } from 'easytimer.js';
const timer = new Timer();

//Modals
import ModalProblems from './modals/Problems.vue'
import ModalExtras from './modals/Extras.vue'

//Pages
import Evidence from './Evidence.vue'

export default{
    name: 'Start',

    data(){
        return{
            view: 1,
            counter: 0,
        }
    },

    methods: {
        startCount(){
            this.view = 2
            timer.start();
            timer.addEventListener('secondsUpdated', (e) => {
                this.counter = timer.getTimeValues().toString()
            });
        },

        stopCount(){
            this.view = 3
            timer.stop()
        },

        showProblems(){
            this.$showModal(ModalProblems, {
                props:{
                    id: 1,
                }
            })
        }, 

        showExtras(){
            this.$showModal(ModalExtras, {
                props:{
                    id: 1,
                }
            })
        },

        goToEvidence(){
            this.$navigateTo(Evidence, {
                props:{
                    id: 1,
                }
            })
        }
    }
}
</script>
















