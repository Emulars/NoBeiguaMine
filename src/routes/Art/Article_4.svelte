<script>
	import News from "../../lib/collection/vertical_news.svelte";
	import Head from "$lib/components/headArticle.svelte";
	import MediaQuery from "$lib/Utility/MediaQuery.svelte";
	// headArticle dinamic + text
	import doc from "../../images/card/card_4.jpg";
	import { title, image } from "$lib/components/headArticle.svelte";
	title.set(
		"PARCO DEL BEIGUA, ECCO QUALI RISCHI COMPORTEREBBE L’APERTURA DELLA MINIERA DI TITANIO"
	);
	image.set(doc);
</script>

<main>
	<div class="head">
		<Head />
	</div>

	<!-- Desktop -->
	<MediaQuery query="(min-width: 1281px)" let:matches>
		{#if matches}
			<div class="root">
				<div class="column-1">
					<div class="article">
						<div class="mdc-typography--headline4 title">
							L’apertura della miniera del Parco del Beigua e la conseguente <br />
							estrazione del titanio dal giacimento di Piampaludo sarebbe <br />
							una scelta sbagliata: numerosi i rischi ambientali e sanitari.<br />
						</div>

						<div class="mdc-typography--body1 text">
							L’apertura della miniera del Parco del Beigua e la
							conseguente <br />
							estrazione del titanio dal giacimento di Piampaludo sarebbe
							una <br />
							scelta sbagliata. Questo è quello che si deduce da una
							valutazione <br />
							attenta e approfondita dei rischi e delle conseguenze
							derivanti <br />
							da questa decisione. <br /><br />

							L’area è infatti caratterizzata da una grande
							estensione di <br />
							ofioliti che rappresentano un frammento di un originario
							<br />
							bacino oceanico giurassico. Queste rocce, oltre al titanio,
							<br />
							contengono anche amianto, di cui il componente principale
							è <br />
							l’asbesto che può causare il Mesotelioma Pleurico.
							<br />
							Dal punto di vista sanitario, il materiale utilizzabile
							<br />
							proveniente dall’estrazione sarebbe solamente il 6% della
							roccia, <br />
							il restante 94% verrebbe scaricato in zone estese nelle
							vicinanze, <br />
							con il rischio di andare a sollecitare giustappunto la
							presenza <br />
							di amianto, presente per il 10/15% nelle rocce del giacimento.
							<br /><br />

							Per quanto riguarda i rischi ambientali, gli scavi
							devasterebbero <br />
							un’area protetta inestimabile per biodiversità e valori
							ecologici <br />
							e paesaggistici; inoltre, il Parco del Beigua è stato
							riconosciuto <br />
							come UNESCO Global Geopark e questa scelta potrebbe far
							sì che il <br />
							riconoscimento venga tolto.<br /><br />

							Infine, non bisogna trascurare l’esistenza di una
							quotidianità, <br />
							di stili di vita a cui sono abituate le persone della
							zona: <br />
							il rischio è quello di cambiare la vocazione di un territorio.
							<br />
							Sassello, insieme ad altri Comuni, ha scelto di dirigersi
							verso <br />
							un orizzonte di sviluppo sostenibile. In questo contesto,
							<br />
							sono importanti le parole del sindaco del comune, Daniele
							Buschiazzo: <br />
							<i
								>“Si pensi al piano di sviluppo rurale che
								guarda a un futuro fondato <br />
								sul turismo lento e legato alla biodiversità ambientale”.</i
							><br /><br />
						</div>
					</div>
				</div>

				<div class="column-2">
					<News />
				</div>
			</div>
		{/if}
	</MediaQuery>

	<MediaQuery query="(min-width: 992px) and (max-width: 1280px)" let:matches>
		{#if matches}
			<div class="root tablet">
				<div class="column-1">
					<div class="article">
						<div class="mdc-typography--headline4 title">
							L’apertura della miniera del Parco del Beigua e la conseguente <br />
							estrazione del titanio dal giacimento di Piampaludo sarebbe <br />
							una scelta sbagliata: numerosi i rischi ambientali e sanitari.<br />
						</div>

						<div class="mdc-typography--body1 text">
							L’apertura della miniera del Parco del Beigua e la
							conseguente <br />
							estrazione del titanio dal giacimento di Piampaludo sarebbe
							una <br />
							scelta sbagliata. Questo è quello che si deduce da una
							valutazione <br />
							attenta e approfondita dei rischi e delle conseguenze
							derivanti <br />
							da questa decisione. <br /><br />

							L’area è infatti caratterizzata da una grande
							estensione di <br />
							ofioliti che rappresentano un frammento di un originario
							<br />
							bacino oceanico giurassico. Queste rocce, oltre al titanio,
							<br />
							contengono anche amianto, di cui il componente principale
							è <br />
							l’asbesto che può causare il Mesotelioma Pleurico.
							<br />
							Dal punto di vista sanitario, il materiale utilizzabile
							<br />
							proveniente dall’estrazione sarebbe solamente il 6% della
							roccia, <br />
							il restante 94% verrebbe scaricato in zone estese nelle
							vicinanze, <br />
							con il rischio di andare a sollecitare giustappunto la
							presenza <br />
							di amianto, presente per il 10/15% nelle rocce del giacimento.
							<br /><br />

							Per quanto riguarda i rischi ambientali, gli scavi
							devasterebbero <br />
							un’area protetta inestimabile per biodiversità e valori
							ecologici <br />
							e paesaggistici; inoltre, il Parco del Beigua è stato
							riconosciuto <br />
							come UNESCO Global Geopark e questa scelta potrebbe far
							sì che il <br />
							riconoscimento venga tolto.<br /><br />

							Infine, non bisogna trascurare l’esistenza di una
							quotidianità, <br />
							di stili di vita a cui sono abituate le persone della
							zona: <br />
							il rischio è quello di cambiare la vocazione di un territorio.
							<br />
							Sassello, insieme ad altri Comuni, ha scelto di dirigersi
							verso <br />
							un orizzonte di sviluppo sostenibile. In questo contesto,
							<br />
							sono importanti le parole del sindaco del comune, Daniele
							Buschiazzo: <br />
							<i
								>“Si pensi al piano di sviluppo rurale che
								guarda a un futuro fondato <br />
								sul turismo lento e legato alla biodiversità ambientale”.</i
							><br /><br />
						</div>
					</div>
				</div>

				<div class="column-2">
					<News />
				</div>
			</div>
		{/if}
	</MediaQuery>
	<!-- Mobile -->
	<MediaQuery query="(max-width: 991px)" let:matches>
		{#if matches}
			<div class="root mobile">
				<div class="column-1">
					<div class="article">
						<div class="mdc-typography--headline4 title">
							L’apertura della miniera del Parco del Beigua e la conseguente <br />
							estrazione del titanio dal giacimento di Piampaludo sarebbe <br />
							una scelta sbagliata: numerosi i rischi ambientali e sanitari.<br />
						</div>

						<div class="mdc-typography--body1 text">
							L’apertura della miniera del Parco del Beigua e la
							conseguente <br />
							estrazione del titanio dal giacimento di Piampaludo sarebbe
							una <br />
							scelta sbagliata. Questo è quello che si deduce da una
							valutazione <br />
							attenta e approfondita dei rischi e delle conseguenze
							derivanti <br />
							da questa decisione. <br /><br />

							L’area è infatti caratterizzata da una grande
							estensione di <br />
							ofioliti che rappresentano un frammento di un originario
							<br />
							bacino oceanico giurassico. Queste rocce, oltre al titanio,
							<br />
							contengono anche amianto, di cui il componente principale
							è <br />
							l’asbesto che può causare il Mesotelioma Pleurico.
							<br />
							Dal punto di vista sanitario, il materiale utilizzabile
							<br />
							proveniente dall’estrazione sarebbe solamente il 6% della
							roccia, <br />
							il restante 94% verrebbe scaricato in zone estese nelle
							vicinanze, <br />
							con il rischio di andare a sollecitare giustappunto la
							presenza <br />
							di amianto, presente per il 10/15% nelle rocce del giacimento.
							<br /><br />

							Per quanto riguarda i rischi ambientali, gli scavi
							devasterebbero <br />
							un’area protetta inestimabile per biodiversità e valori
							ecologici <br />
							e paesaggistici; inoltre, il Parco del Beigua è stato
							riconosciuto <br />
							come UNESCO Global Geopark e questa scelta potrebbe far
							sì che il <br />
							riconoscimento venga tolto.<br /><br />

							Infine, non bisogna trascurare l’esistenza di una
							quotidianità, <br />
							di stili di vita a cui sono abituate le persone della
							zona: <br />
							il rischio è quello di cambiare la vocazione di un territorio.
							<br />
							Sassello, insieme ad altri Comuni, ha scelto di dirigersi
							verso <br />
							un orizzonte di sviluppo sostenibile. In questo contesto,
							<br />
							sono importanti le parole del sindaco del comune, Daniele
							Buschiazzo: <br />
							<i
								>“Si pensi al piano di sviluppo rurale che
								guarda a un futuro fondato <br />
								sul turismo lento e legato alla biodiversità ambientale”.</i
							><br /><br />
						</div>
					</div>
				</div>

				<div class="column-2">
					<News />
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
		flex-direction: row;
	}

	/* Tablet  */
	.tablet {
		flex-direction: column;
		align-items: center;
	}
	.tablet .column-1 {
		float: none;
		width: 100%;
	}
	.tablet .column-2 {
		float: none;
	}
	/* Mobile  */
	.mobile {
		flex-direction: column;
	}

	.mobile .column-1 {
		float: none;
		width: 100%;
	}
	.mobile .column-2 {
		float: none;
		width: 100%;
	}

	.column-1 {
		float: left;
		width: 60%;
	}

	.column-2 {
		float: left;
		width: 40%;
		margin: 5% 5% 0 0; /* in alto | destra | in basso | sinistra */
		align-items: center;
	}

	/* * :global(.card-media-16x9) {
		background-image: url(../../../images/beiglarge.jpg);
		background-size: auto;
		filter: brightness(80%);
	} */
	.title {
		color: #39aea9;
		font-family: "Oswald", sans-serif;
		margin: 0 0 15px 0;
		line-height: 1.5em;
	}

	.text {
		font-family: "Roboto", sans-serif;
		line-height: 1.5em;
		font-size: 25px;
	}

	/* * :global(.card-media-16x9) {
		background-image: url(../../../images/beiglarge.jpg);
	} */

	.article {
		margin: 10% 0 0 10%;
	}
</style>
