<script lang="ts">
	import Card from "./card.svelte";
<<<<<<< HEAD
	import Hidden from "./Hidden.svelte";
	import Card_1 from "../lib/components/card_articles/Card_1.svelte";
	import Card_2 from "../lib/components/card_articles/Card_2.svelte";
	import Card_3 from "../lib/components/card_articles/Card_3.svelte";

	let child;
=======
	
	/* Button */
	import { createEventDispatcher } from 'svelte';
    let shown = false;
	let dispatch = createEventDispatcher();
	export function show() {
		shown = !shown;
		dispatch('show', shown);
	}

>>>>>>> 23b2c0299d294c14d412c07060650c26c872520c
</script>

<svelte:options accessors={true}/>

<div class="main">
	<div class="mdc-typography--headline3 Title">- Articoli -</div>
<div class="arts-pages">
	<div class="cards">
		<!--CARDS-->
		<Card_1 />
		<Card_2 />
		<Card_3 />
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
	<div>
		<Hidden bind:this={child} on:show={(e) => (child.shown = e.detail)} />

<<<<<<< HEAD
		{#if child && child.shown}
			<div class="cards">
				<Card />
				<Card />
				<Card />
			</div>
		{/if}
	</div>
	<!-- -->
=======
	<button on:click={show}>Mostra altri Articoli</button>

	{#if shown}
		<div class="cards">
			<Card />
			<Card />
			<Card />
	</div> 
	{/if}
>>>>>>> 23b2c0299d294c14d412c07060650c26c872520c
</div>

<style>
	.Title {
		text-align: center;
		margin-top: 30px;
	}
	/* Extra small devices (phones, 600px and down) */
	@media only screen and (max-width: 600px) {
		.cards {
			display: flex;
			flex-direction: column;
			margin: 20px;
			justify-content: space-evenly;
		}
	}

	/* Small devices (portrait tablets and large phones, 600px and up) */
	@media only screen and (min-width: 600px) {
		.cards {
			display: flex;
			flex-direction: column;
			justify-content: center;
			margin: 20px;
		}
	}

	/* Medium devices (landscape tablets, 768px and up) */
	@media only screen and (min-width: 768px) {
		/* qui e' la modifica pper la responsive*/
		.cards {
			display: flex;
			flex-direction: column;
			margin: 80px;
			justify-content: center;
			height: 20%;
		}
	}

	/* Large devices (laptops/desktops, 992px and up) */
	@media only screen and (max-width: 992px) {
		.cards {
			display: flex;
			flex-direction: row;
			margin-left:10%;
			margin-right: 10%;
			height: 20%;
		}
	}

	/* Extra large devices (large laptops and desktops, 1200px and up) */
	@media only screen and (min-width: 1200px) {
		.cards {
			display: flex;
			flex-direction: row;
			margin-left:10%;
			margin-right: 10%;
		}
	}
</style>
