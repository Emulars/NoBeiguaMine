<script>
	import News from "$lib/collection/news.svelte";
	import MediaQuery from "$lib/Utility/MediaQuery.svelte";
	import Hero from "../lib/components/head.svelte";
	import unige from "../images/unige.png";
</script>

<main>
	<div class="head">
		<Hero />
	</div>

	<!-- Desktop -->
	<MediaQuery query="(min-width: 1281px)" let:matches>
		{#if matches}
		<div class="root">
			<div class="who">
				<div>
					<h1><img class="unige" src={unige} alt="unige" /></h1>
				</div>
				<div class="article">
				<div class="mdc-typography--headline1 title">Chi siamo ?</div>
				<div class="mdc-typography--body1 text">
					Il team è composto da otto studenti dell’Università di
					Genova che<br /> 
					hanno lo scopo di sensibilizzare la popolazione ligure sul delicato
					<br />
					tema dell’utilizzo di amianto in Italia. Quattro informatici,
					tre designer <br />
					e una studentessa di comunicazione hanno unito le loro competenze<br />
					per ideare una campagna di sensibilizzazione basata sulla divulgazione
					online<br />
					di informazioni utili alla causa.<br />
				</div>
			</div>
			</div>
		</div>
		{/if}
	</MediaQuery>

	<!-- Tablet -->
	<MediaQuery query="(min-width: 601px) and (max-width: 1280px)" let:matches>
		{#if matches}
			<div class="root tablet">
				<div class="who">
					<div>
						<h1><img class="unige" src={unige} alt="unige" /></h1>
					</div>
					<div>
					<div class="mdc-typography--headline1 title">Chi siamo ?</div>
					<div class="mdc-typography--body1 text">
						Il team è composto da otto studenti dell’Università di
						Genova che <br />
						hanno lo scopo di sensibilizzare la popolazione ligure sul delicato
						<br />
						tema dell’utilizzo di amianto in Italia. Quattro informatici,
						tre<br />
						designer e una studentessa di comunicazione hanno unito le loro competenze<br />
						per ideare una campagna di sensibilizzazione basata sulla divulgazione
						online<br />
						di informazioni utili alla causa.<br />
					</div>
				</div>
				</div>
			</div>
		{/if}
	</MediaQuery>

	<!-- Tablet -->
	<MediaQuery query="(max-width: 600px)" let:matches>
		{#if matches}
		<div class="root mobile">
			<div class="who">
				<div >
					<h1><img class="unige" src={unige} alt="unige" /></h1>
				</div>
				<div>
				<div class="mdc-typography--headline3 title">Chi siamo ?</div>
				<div class="mdc-typography--body1 text">
					Il team è composto da otto studenti dell’Università di
					Genova che <br />
					hanno lo scopo di sensibilizzare la popolazione ligure sul delicato
					<br />
					tema dell’utilizzo di amianto in Italia. Quattro informatici,
					tre designer <br />
					e una studentessa di comunicazione hanno unito le loro competenze
					per <br />
					ideare una campagna di sensibilizzazione basata sulla divulgazione
					online<br />
					di informazioni utili alla causa.<br />
				</div>
			</div>
			</div>
		</div>
		{/if}
	</MediaQuery>
</main>

<style>
	.root {
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		display: flex;
	}
	.who{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		flex-wrap: nowrap;
		align-items: center;
	}

	.tablet .who{
		display: flex;
		flex-direction: column;
		width: 100%;
	}
	.tablet .who .title{
		margin: 10%;
	}
	.tablet .who .unige{
		width: 40%;
		align-items: center;
	}
	.tablet .who .text{
		margin-bottom: 100px;
		align-items: center;
		padding-left: 20px;
		font-size: 23px;
	}

	.mobile .who{
		display: flex;
		flex-direction: column;
		width: 100%;
	}
	.mobile .who .unige{
		width: 40%;
		align-items: center;
	}
	.mobile .who .title{
		margin: 10%;
	}
	.mobile .who .text{
		margin-bottom: 100px;
		padding-left: 20px;
		padding-right: 20px;
		align-items: center;
	}
	.title {
		color: rgb(0, 0, 0);
		font-family: "Oswald", sans-serif;
		margin: 0 10px 30px 0;
		line-height: 1.5em;
	}

	.text {
		font-family: "Roboto", sans-serif;
		line-height: 1.5em;
		font-size: 20px;
	}

	* :global(.card-media-16x9) {
		background-image: url(../../../images/beiglarge.jpg);
	}
	.unige {
		padding: 10%;
		width: 50%;
		padding-left: 30%;
	}

	.article {
		margin: 10px 10px 10px 10px;
		line-height: 1.5em;
	}
</style>
