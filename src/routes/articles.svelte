<script lang="ts">
	import Card from "./card.svelte";
</script>

<div class="main">

    <div class="mdc-typography--headline3 Title"> - Articoli - </div>

    <div class="cards">
		<!--CARDS-->
		<Card />
		<Card />
		<Card />
	</div>

    <div class="cards">
		<!--CARDS-->
		<Card />
		<Card />
		<Card />
	</div>

    <div class="cards">
		<!--CARDS-->
		<Card />
		<Card />
		<Card />
	</div>

    <div class="cards">
		<!--CARDS-->
		<Card />
		<Card />
		<Card />
	</div>

</div>


<style>

    .Title{ 
		text-align: center;
		margin-top: 1%;
	}

    /* Extra small devices (phones, 600px and down) */
	@media only screen and (max-width: 600px) {
		.cards{
			display: flex;
    		flex-direction: column;
			margin: 10px;
			justify-content: space-evenly;
		}
	}

	/* Small devices (portrait tablets and large phones, 600px and up) */
	@media only screen and (min-width: 600px) {
		.cards{
			display: flex;
    		flex-direction: column;
			justify-content: space-evenly;
		}
	}

	/* Medium devices (landscape tablets, 768px and up) */
	@media only screen and (min-width: 768px) {
		/* qui e' la modifica pper la responsive*/
		.cards{
			display: flex;
    		flex-direction: column;
			justify-content: space-evenly;
		}
	}

	/* Large devices (laptops/desktops, 992px and up) */
	@media only screen and (min-width: 992px) {
		.cards{
			display: flex;
    		flex-direction: row;
			justify-content: space-evenly;
		}

	}

	/* Extra large devices (large laptops and desktops, 1200px and up) */
	@media only screen and (min-width: 1200px) {
		.cards{
			display: flex;
    		flex-direction: row;
			justify-content: space-evenly;
		}

	}
</style>