<style type="text/css">
    .header{
        background-image: url('~/assets/images/bg-1.png');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }

    .navigation{
        width: 100%;
        height: 100%;
        left: 0;
        bottom: 0;
        background-color: white;
        border-width: 1 0 0 0;
        border-color: rgba(218, 218, 218, 1);
        border-radius: 0;
    }

    .btn-navigation{
        width: 90px;
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
		            <StackLayout row="0">
	                    <StackLayout class="banner">
	                       
	                    </StackLayout>
		            </StackLayout>

		            <StackLayout row="1" orientation="horizontal">
		                <GridLayout columns="*, *, *" rows="60" class="navigation">
		                    <FlexboxLayout alignItems="center" justifyContent="center" row="0" col="0">
		                        <Image class="btn-navigation" src="~/assets/images/icon-doc.png" width="40" />
		                    </FlexboxLayout>
		                    <FlexboxLayout alignItems="center" justifyContent="center" row="0" col="1">
		                        <Image class="btn-navigation" src="~/assets/images/icon-home.png" width="40" />
		                    </FlexboxLayout>
		                    <FlexboxLayout alignItems="center" justifyContent="center" row="0" col="2">
		                        <Image class="btn-navigation" src="~/assets/images/icon-message.png" width="40" />
		                    </FlexboxLayout>
		                </GridLayout>
		            </StackLayout>
		        </GridLayout>
            </StackLayout>
        </GridLayout>
    </Page>
</template>

<script>

export default{
    name: 'Rooms',

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
















