<style>
	.modal{
		width: 1000px;
		height: 1700px;
		background-color: white;
	}

	.line{
		border-width: 1 0 0 0;
		border-color: #576066;
		width: 40%;
		margin-top: 15px;
	}
</style>

<template>
	<StackLayout width="300" height="400" backgroundColor="white">
		<GridLayout rows="30, 60, *, 60">
			<StackLayout row="0" marginTop="15">
				<StackLayout class="line" />
				<StackLayout class="line" />
			</StackLayout>

			<StackLayout row="1" marginTop="10" horizontalAlignment="center">
				<Label fontSize="16" fontWeight="bold" text="Selecciona los problemas" />
				<Label fontSize="16" fontWeight="bold" text="tecnicos de la habitacion" />
			</StackLayout>

			<StackLayout row="2" marginLeft="20" marginTop="20">
				<FlexboxLayout marginTop="10" alignItems="center">
					<Switch checked="false" />
					<Label marginLeft="20" text="Foco Fundido" />
				</FlexboxLayout>
				<FlexboxLayout marginTop="10" alignItems="center">
					<Switch checked="false" />
					<Label marginLeft="20" text="Mancha Alfombra" />
				</FlexboxLayout>
				<FlexboxLayout marginTop="10" alignItems="center">
					<Switch checked="false" />
					<Label marginLeft="20" text="Mancha Regadera" />
				</FlexboxLayout>
				<FlexboxLayout marginTop="10" alignItems="center">
					<Switch checked="false" />
					<Label marginLeft="20" text="Regadera Tapada" />
				</FlexboxLayout>
				<FlexboxLayout marginTop="10" alignItems="center">
					<Switch checked="false" />
					<Label marginLeft="20" text="Probelmas con el Agua" />
				</FlexboxLayout>
			</StackLayout>

			<StackLayout row="3">
				<Button width="200" borderRadius="20" backgroundColor="#18304C" color="white" text="Cancelar" />
			</StackLayout>
		</GridLayout>
	</StackLayout>
</template>

<script>
export default{
	name: 'Problems',

	data(){
		return{

		}
	},

	methods: {

	}
}
</script>