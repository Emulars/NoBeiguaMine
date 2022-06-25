<script>
	// import Button, { Label, Icon } from "@smui/button";
	import Card from "./card.svelte";
	import Hero from "./head.svelte";
	import News from "./news.svelte";
	import Timel from "./timeline_new.svelte";
</script>

<div class="main">
	<!-- Hero -->
	<div >
		<Hero />
		<News />
		<!-- Timel/> -->
	</div>

	
</div>

<style>

	/* Extra small devices (phones, 600px and down) */
	/* @media only screen and (max-width: 600px) {
		* :global() {
			width: auto;	
   		}

	} */

	/* Small devices (portrait tablets and large phones, 600px and up) */
	/* @media only screen and (min-width: 600px) {
	
	} */

	/* Medium devices (landscape tablets, 768px and up) */
	/*@media only screen and (min-width: 768px) {
	
	}

	/* Large devices (laptops/desktops, 992px and up) 
	@media only screen and (min-width: 992px) {
		.cards{
			display: flex;
    		flex-direction: row;
			justify-content: space-evenly;
		}

	}

	/* Extra large devices (large laptops and desktops, 1200px and up) 
	@media only screen and (min-width: 1150px) {
		.cards {
			display: flex;
			flex-direction: row;
			justify-content: space-evenly;
		}
	}*/
</style>
