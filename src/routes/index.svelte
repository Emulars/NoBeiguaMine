<script lang="ts">
	import Button, { Label, Icon } from "@smui/button";
	import Nav from "./__layout.svelte";
	import Card from "./card.svelte";
	import Head from "./head.svelte";
</script>

<div class="main">
	<Head />
	<h1 class="News">Ultime Notizie</h1>
	<div class="cards">
		<!--CARDS-->
		<Card />
		<Card />
		<Card />
	</div>
</div>

<style>
	/* @media only screen and (min-width: 600px) {
		.Porco {
			display: block;
			width: 100%;
			height: 100%;
		}
		.lol {
			display: inline-flexbox;
			justify-content: space-around;
			margin-top: 10px;
			padding: 30px;
		}
	}
	@media only screen and (min-width: 768px) {
		.Porco {
			display: block;
			width: 100%;
			height: 100%;
		}
		
		.lol {
			display: flex;
			justify-content: space-evenly;
		}
		.Card {
			display: inline-flex;
			margin: 50px;
			color:blueviolet ;
		}
	} */

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
	.News{
		text-align: center;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}

</style>
