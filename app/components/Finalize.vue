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
                        <FlexboxLayout justifyContent="center" marginTop="50" alignItems="center">
		                	<Button width="200" height="200" borderRadius="100" backgroundColor="#FF2100" color="white" text="Finalizar" />
		                </FlexboxLayout>

		                <FlexboxLayout justifyContent="center" marginTop="20" alignItems="center">
		                	<Label fontSize="30" color="#576066" text="Tiempo" />
		                </FlexboxLayout>
		                <FlexboxLayout justifyContent="center" marginTop="5" alignItems="center">
		                	<Label fontWeight="bold" fontSize="30" color="#576066" text="00:08" />
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
import Footer from './shared/Footer.vue'

export default{
    components: {
        Footer
    },

    name: 'Finalize',

    data(){
        return{
            
        }
    },

    methods: {
        
    }
}
</script>
















