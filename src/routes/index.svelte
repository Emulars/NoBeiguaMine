<script>
	// import Button, { Label, Icon } from "@smui/button";
	import Card from "./card.svelte";
	import Hero from "./head.svelte";
</script>

<div class="main">
	<!-- Hero -->
	<div >
		<!--<img class="imgHero" src={Hero_img} alt="Hero" />-->
		<Hero />
	</div>

	<!-- Cards -->
	<div class="mdc-typography--headline3 News">- Ultime Notizie -</div>
	<div class="cards">
		<!--CARDS-->
		<Card />
		<Card />
		<Card />
	</div>
</div>

<style>
	.News {
		text-align: center;
		margin-top: 1%;
	}

	/* .Hero{ 
		background-image: url("Hero");
		width: 100%;
    	height: 500px;
    	overflow: hidden;	
	}  */
	/* .imgHero{
		width: 100%;
		background-position: center;
		background-size: cover;
		filter: brightness(70%);
		position: relative;
	} */



	/* Extra small devices (phones, 600px and down) */
	/* @media only screen and (max-width: 600px) {
		.cards {
			display: flex;
			flex-direction: column;
			margin: 10px;
			justify-content: space-evenly;
		}
	} */

	/* Small devices (portrait tablets and large phones, 600px and up) */
	/* @media only screen and (min-width: 600px) {
		.cards {
			display: flex;
			flex-direction: column;
			justify-content: space-evenly;
		}
	} */

	/* Medium devices (landscape tablets, 768px and up) */
	@media only screen and (min-width: 768px) {
		.cards {
			display: flex;
			flex-direction: column;
			justify-content: space-evenly;
		}
	}

	/* Large devices (laptops/desktops, 992px and up) 
	@media only screen and (min-width: 992px) {
		.cards{
			display: flex;
    		flex-direction: row;
			justify-content: space-evenly;
		}

	}*/

	/* Extra large devices (large laptops and desktops, 1200px and up) */
	@media only screen and (min-width: 1150px) {
		.cards {
			display: flex;
			flex-direction: row;
			justify-content: space-evenly;
		}
	}
</style>
