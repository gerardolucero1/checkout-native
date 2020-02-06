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
                <Image width="150" borderRadius="100" left="135" top="50" src="https://cdn131.picsart.com/290550031024201.jpg?r1024x1024" stretch="aspectFit" />
            </AbsoluteLayout>

            <StackLayout col="0" row="1">
                <Label horizontalAlignment="center" fontSize="20" text="Im Ji Yeon" />

                <FlexboxLayout justifyContent="space-around" marginTop="50" alignItems="center" >
                	<Image width="60" src="~/assets/images/icon-1.png" stretch="aspectFit" />
                	<Image width="60" src="~/assets/images/icon-2.png" stretch="aspectFit" />
                	<Image width="60" src="~/assets/images/icon-3.png" stretch="aspectFit" />
                </FlexboxLayout>

                <FlexboxLayout justifyContent="center" marginTop="50" alignItems="center" flexDirection="column">
                	<Label text="Buenos dias Yuki" />
                	<Label text="Recuerda atender a todos con una sonrisa" />
                </FlexboxLayout>

                <FlexboxLayout justifyContent="center" marginTop="50" alignItems="center">
                	<Label color="#E7AF00" fontSize="35" text="★" />
                	<Label color="#E7AF00" fontSize="35" text="★" />
                	<Label color="#E7AF00" fontSize="35" text="★" />
                	<Label color="#E7AF00" fontSize="35" text="★" />
                	<Label fontSize="35" text="★" />
                </FlexboxLayout>

                <FlexboxLayout justifyContent="center" marginTop="20" alignItems="center">
                	<Button width="150" borderRadius="20" backgroundColor="#18304C" color="white" text="Iniciar" />
                </FlexboxLayout>
            </StackLayout>
        </GridLayout>
    </Page>
</template>

<script>

export default{
    name: 'Home',

    data(){
        return{
            email: '',
            password: '',
        }
    },

    methods: {
        
    }
}
</script>
















