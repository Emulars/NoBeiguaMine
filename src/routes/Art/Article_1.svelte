<script>
	import News from "../../lib/collection/vertical_news.svelte";
	import Head from "$lib/components/headArticle.svelte";
	import MediaQuery from "$lib/Utility/MediaQuery.svelte";
	// headArticle dinamic + text
	import doc from "../../images/card/card_1.jpg";
	import { title, image } from "$lib/components/headArticle.svelte";
	title.set(
		"PARCO DEL BEIGUA: SCOPRIAMO INSIEME LA RISERVA NATURALE CHE SI AFFACCIA SULLA COSTA LIGURE."
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
							Alla scoperta del Parco del Beigua, una delle zone più affascinanti<br />
							della Liguria affacciata sul Mediterraneo e <br />
							caratterizzata da una spiccata biodiversità.<br />
						</div>

						<div class="mdc-typography--body1 text">
							Affacciato sul Mediterraneo ma nascosto dietro i
							paesini turistici <br />
							della riviera ligure, sorge il comprensorio del Parco
							Naturale <br />
							Regionale del Beigua, una delle più vaste aree naturali
							protette <br />
							d’Europa. La zona in cui si trova permette di definirla
							una <br />
							riserva naturale metropolitana di cintura, come può essere
							La Mandria<br />
							per l'area torinese ed il parco agricolo Sud Milano per
							quella<br />
							milanese. Il Parco può essere considerato come un‘isola
							del tesoro<br />
							che custodisce gelosamente la storia geologica della
							Liguria, <br />
							che non solo vanta una vasta biodiversità, ma presenta
							al<br />
							pubblico spettacolari affioramenti rocciosi, mineralizzazioni,
							<br />
							giacimenti fossiliferi e spettacolari forme modellate.<br
							/><br />
						</div>

						<div class="mdc-typography--body1 text">
							La superficie del Parco del Beigua comprende tutta
							la zona <br />
							classificata come "Parco Naturale Regionale del Beigua"
							a <br />
							partire dal monte omonimo alto ben 1287 m. Inoltre,
							<br />
							fa parte di tre comunità montane: la Comunità montana
							Argentea, <br />
							la Comunità montana del Giovo e la Comunità montana Valli
							Stura e Orba. <br />
							Ma non è finita qui: il comprensorio annovera anche dieci
							comuni <br />
							delle province di Genova e Savona: Arenzano, Campo Ligure,
							Cogoleto, <br />
							Genova, Masone, Rossiglione, Sassello, Stella, Tiglieto
							e Varazze. <br />
							In totale il territorio del parco si estende su 39230
							ettari.<br /><br />
						</div>

						<div class="mdc-typography--body1 text">
							L’eccezionale patrimonio del Parco del Beigua è
							riconosciuto <br />
							in tutto il mondo. Nel marzo del 2005 è entrato a far
							parte delle <br />
							reti internazionali come Geoparco Europeo e Mondiale
							e nel 2015 <br />
							l’Unesco ha riconosciuto il territorio come sito UNESCO,
							<br />
							inserendolo nella lista dei Geoparchi Globali.
							<br /><br />
						</div>

						<div class="mdc-typography--body1 text">
							Le iniziative di conservazione e di valorizzazione
							del patrimonio <br />
							geologico del Beigua Geopark si inseriscono nell'ambito
							di una più <br />
							ampia e complessa strategia di tutela del patrimonio
							naturale e <br />
							storico-culturale. Ciò si realizza attraverso specifiche
							misure <br />
							di pianificazione e di gestione del territorio finalizzate
							alla <br />
							protezione attiva delle risorse ambientali ed al contestuale
							<br />
							sviluppo socioeconomico locale. <br /><br />
						</div>
					</div>
				</div>

				<div class="column-2">
					<News />
				</div>
			</div>
		{/if}
	</MediaQuery>

	<!-- Tablet -->
	<MediaQuery query="(min-width: 992px) and (max-width: 1280px)" let:matches>
		{#if matches}
			<div class="root tablet">
				<div class="column-1">
					<div class="article">
						<div class="mdc-typography--headline4 title">
							Alla scoperta del Parco del Beigua, una delle zone più affascinanti<br />
							della Liguria affacciata sul Mediterraneo e <br />
							caratterizzata da una spiccata biodiversità.<br />
						</div>

						<div class="mdc-typography--body1 text">
							Affacciato sul Mediterraneo ma nascosto dietro i
							paesini turistici <br />
							della riviera ligure, sorge il comprensorio del Parco
							Naturale <br />
							Regionale del Beigua, una delle più vaste aree naturali
							protette <br />
							d’Europa. La zona in cui si trova permette di definirla
							una <br />
							riserva naturale metropolitana di cintura, come può essere
							La Mandria<br />
							per l'area torinese ed il parco agricolo Sud Milano per
							quella<br />
							milanese. Il Parco può essere considerato come un‘isola
							del tesoro<br />
							che custodisce gelosamente la storia geologica della
							Liguria, <br />
							che non solo vanta una vasta biodiversità, ma presenta
							al<br />
							pubblico spettacolari affioramenti rocciosi, mineralizzazioni,
							<br />
							giacimenti fossiliferi e spettacolari forme modellate.<br
							/><br />
						</div>

						<div class="mdc-typography--body1 text">
							La superficie del Parco del Beigua comprende tutta
							la zona <br />
							classificata come "Parco Naturale Regionale del Beigua"
							a <br />
							partire dal monte omonimo alto ben 1287 m. Inoltre,
							<br />
							fa parte di tre comunità montane: la Comunità montana
							Argentea, <br />
							la Comunità montana del Giovo e la Comunità montana Valli
							Stura e Orba. <br />
							Ma non è finita qui: il comprensorio annovera anche dieci
							comuni <br />
							delle province di Genova e Savona: Arenzano, Campo Ligure,
							Cogoleto, <br />
							Genova, Masone, Rossiglione, Sassello, Stella, Tiglieto
							e Varazze. <br />
							In totale il territorio del parco si estende su 39230
							ettari.<br /><br />
						</div>

						<div class="mdc-typography--body1 text">
							L’eccezionale patrimonio del Parco del Beigua è
							riconosciuto <br />
							in tutto il mondo. Nel marzo del 2005 è entrato a far
							parte delle <br />
							reti internazionali come Geoparco Europeo e Mondiale
							e nel 2015 <br />
							l’Unesco ha riconosciuto il territorio come sito UNESCO,
							<br />
							inserendolo nella lista dei Geoparchi Globali.
							<br /><br />
						</div>

						<div class="mdc-typography--body1 text">
							Le iniziative di conservazione e di valorizzazione
							del patrimonio <br />
							geologico del Beigua Geopark si inseriscono nell'ambito
							di una più <br />
							ampia e complessa strategia di tutela del patrimonio
							naturale e <br />
							storico-culturale. Ciò si realizza attraverso specifiche
							misure <br />
							di pianificazione e di gestione del territorio finalizzate
							alla <br />
							protezione attiva delle risorse ambientali ed al contestuale
							<br />
							sviluppo socioeconomico locale. <br /><br />
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
							Alla scoperta del Parco del Beigua, una delle zone più affascinanti<br />
							della Liguria affacciata sul Mediterraneo e <br />
							caratterizzata da una spiccata biodiversità.<br />
						</div>

						<div class="mdc-typography--body1 text">
							Affacciato sul Mediterraneo ma nascosto dietro i
							paesini turistici <br />
							della riviera ligure, sorge il comprensorio del Parco
							Naturale <br />
							Regionale del Beigua, una delle più vaste aree naturali
							protette <br />
							d’Europa. La zona in cui si trova permette di definirla
							una <br />
							riserva naturale metropolitana di cintura, come può essere
							La Mandria<br />
							per l'area torinese ed il parco agricolo Sud Milano per
							quella<br />
							milanese. Il Parco può essere considerato come un‘isola
							del tesoro<br />
							che custodisce gelosamente la storia geologica della
							Liguria, <br />
							che non solo vanta una vasta biodiversità, ma presenta
							al<br />
							pubblico spettacolari affioramenti rocciosi, mineralizzazioni,
							<br />
							giacimenti fossiliferi e spettacolari forme modellate.<br
							/><br />
						</div>

						<div class="mdc-typography--body1 text">
							La superficie del Parco del Beigua comprende tutta
							la zona <br />
							classificata come "Parco Naturale Regionale del Beigua"
							a <br />
							partire dal monte omonimo alto ben 1287 m. Inoltre,
							<br />
							fa parte di tre comunità montane: la Comunità montana
							Argentea, <br />
							la Comunità montana del Giovo e la Comunità montana Valli
							Stura e Orba. <br />
							Ma non è finita qui: il comprensorio annovera anche dieci
							comuni <br />
							delle province di Genova e Savona: Arenzano, Campo Ligure,
							Cogoleto, <br />
							Genova, Masone, Rossiglione, Sassello, Stella, Tiglieto
							e Varazze. <br />
							In totale il territorio del parco si estende su 39230
							ettari.<br /><br />
						</div>

						<div class="mdc-typography--body1 text">
							L’eccezionale patrimonio del Parco del Beigua è
							riconosciuto <br />
							in tutto il mondo. Nel marzo del 2005 è entrato a far
							parte delle <br />
							reti internazionali come Geoparco Europeo e Mondiale
							e nel 2015 <br />
							l’Unesco ha riconosciuto il territorio come sito UNESCO,
							<br />
							inserendolo nella lista dei Geoparchi Globali.
							<br /><br />
						</div>

						<div class="mdc-typography--body1 text">
							Le iniziative di conservazione e di valorizzazione
							del patrimonio <br />
							geologico del Beigua Geopark si inseriscono nell'ambito
							di una più <br />
							ampia e complessa strategia di tutela del patrimonio
							naturale e <br />
							storico-culturale. Ciò si realizza attraverso specifiche
							misure <br />
							di pianificazione e di gestione del territorio finalizzate
							alla <br />
							protezione attiva delle risorse ambientali ed al contestuale
							<br />
							sviluppo socioeconomico locale. <br /><br />
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
/* 
	* :global(.card-media-16x9) {
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
