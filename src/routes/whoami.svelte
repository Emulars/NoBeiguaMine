<script>
	import News from "$lib/collection/news.svelte";
import MediaQuery from "$lib/Utility/MediaQuery.svelte";
	import Hero from "../lib/components/head.svelte";
</script>

<main>
	<div class="head">
		<Hero />
	</div>

	<!-- Desktop -->
	<MediaQuery query="(min-width: 1281px)" let:matches>
		{#if matches}
			<!-- <div class="root">
				<div class="mdc-typography--headline3 title">
					Il team è composto da otto studenti dell’Università di Genova che hanno<br>
					lo scopo di sensibilizzare la popolazione ligure sul delicato tema<br>
					dell’utilizzo di amianto in Italia. Quattro informatici, tre designer <br>
					e una studentessa di comunicazione hanno unito le loro competenze per <br>
					ideare una campagna di sensibilizzazione basata sulla divulgazione online<br>
					di informazioni utili alla causa.<br>
					</div>
			</div> -->
		{/if}
	</MediaQuery>

	<!-- Tablet -->
	<MediaQuery query="(min-width: 601px) and (max-width: 1280px)" let:matches>
		{#if matches}
		<div class="root">
			<div class="mdc-typography--headline3 title">
				PARCO DEL BEIGUA: SCOPRIAMO INSIEME LA RISERVA NATURALE <br/>
				CHE SI AFFACCIA SULLA COSTA LIGURE
			</div>
		</div>
		{/if}
	</MediaQuery>

	<!-- Tablet -->
	<MediaQuery query="(max-width: 600px)" let:matches>
		{#if matches}
		<div class="root">
			<div class="mdc-typography--headline3 title">
				PARCO DEL BEIGUA: SCOPRIAMO INSIEME LA RISERVA NATURALE <br/>
				CHE SI AFFACCIA SULLA COSTA LIGURE
			</div>
		</div>
		{/if}
	</MediaQuery>
	<News/>
</main>

<style>
	.root {
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		display: flex;
		flex-direction: row;
	}

	.tablet .column-2 {
		float: none;
		width: 100%;
	}

	.tablet .column-1 {
		float: none;
		/* width: 100%; */
	}

	.column-1 {
		float: left;
		width: 60%;
		margin: 0 0 0 5%;
	}

	.column-2 {
		float: left;
		width: 30%;
		margin: 0 5% 0 0; /* in alto | destra | in basso | sinistra */
	}

	* :global(.card-media-16x9) {
		background-image: url(../../../images/beiglarge.jpg);
		background-size: auto;
		filter: brightness(80%);
	}
	.title {
		color: #39aea9;
		font-family: "Oswald", sans-serif;
		margin: 0 0 15px 0;
	}

	.text {
		font-family: "Roboto", sans-serif;
		line-height: 1.5em;
	}

	* :global(.card-media-16x9) {
		background-image: url(../../../images/beiglarge.jpg);
	}

	.article {
		margin: 10% 0 0 10%;
	}
</style>
