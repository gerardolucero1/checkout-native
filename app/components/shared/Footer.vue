<style lang="css" scoped>
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
    <GridLayout columns="*, *, *" rows="60" class="navigation">
        <FlexboxLayout alignItems="center" justifyContent="center" row="0" col="0">
            <Image class="btn-navigation" src="~/assets/images/icon-doc.png" width="40" />
        </FlexboxLayout>
        <FlexboxLayout alignItems="center" justifyContent="center" row="0" col="1">
            <Image class="btn-navigation" src="~/assets/images/icon-home.png" width="40" @tap="goToHome()" />
        </FlexboxLayout>
        <FlexboxLayout alignItems="center" justifyContent="center" row="0" col="2">
            <Image class="btn-navigation" src="~/assets/images/icon-message.png" width="40" />
        </FlexboxLayout>
    </GridLayout>
</template>

<script>
//Pages
import Home from './../Home.vue'

export default {
	name: 'Footer',

  	data () {
    	return {

    	}
  	},

    methods: {
        goToHome(){
            this.$navigateTo(Home, {
                props:{
                    id: '',
                },
                animated: true,
                transition: {
                    name: 'fade',
                },
            })
        }
    }
}
</script>