<script>
	import News from "../../lib/collection/vertical_news.svelte";
	import Head from "$lib/components/headArticle.svelte";
	import MediaQuery from "$lib/Utility/MediaQuery.svelte";
	 // headArticle dinamic + text 
	 import doc from "../../images/card/card_10.jpg";
    import { title,image } from "$lib/components/headArticle.svelte";
  		title.set('TITANIO SUL BEIGUA, IL SINDACO DI SASSELLO: “IL PARCO POTREBBE PERDERE IL RICONOSCIMENTO DELL’UNESCO”');
        image.set(doc);
</script>

<main>

	<div class="head">
		<Head/>
	</div>

    <!-- Desktop -->
	<MediaQuery query="(min-width: 1281px)" let:matches>
        {#if matches}
		<div class="root">
			<div class="column-1">
				<div class="article">
					<div class="mdc-typography--headline4 title">
						Il sindaco di Sassello, Daniele Buschiazzo, ha parlato dei rischi <br/>
						derivanti da una possibile apertura della miniera di titanio <br/>
						presente nel Parco del Beigua: tra questi anche il pericolo <br/>
						di essere rimossi tra i siti riconosciuti dall’Unesco.<br/>
					</div>
						
					<div class="mdc-typography--body1 text">
                        Nascosto tra le alture del Beigua tra le province di Genova e <br/>
						di Savona, il giacimento di titanio del Piampaludo sta facendo <br/>
						molto parlare di sé. La Regione Liguria, con un decreto dirigenziale, <br/>
						ha autorizzato la C.E.T, un’azienda di Cuneo, ad effettuare una ricerca <br/>
						mineraria nell’area adiacente (e per 46 ettari interna) alla <br/>
						ZSC 1T1331402 “Beigua – M. Dente – Gargassa – Pavaglione”, <br/>
						gestita dallo stesso Ente Parco.<br/><br/>

						Le associazioni ambientaliste e la popolazione locale sono subito <br/>
						insorte e non è mancato il dissenso anche da parte dei comuni che <br/>
						verrebbero coinvolti nelle ricerche, Urbe e Sassello, i quali si <br/>
						sono mostrati contrari alla riapertura della miniera. <br/><br/>

						<i>“Il territorio del Parco del Beigua è stato designato come sito <br/>
						UNESCO ed è stato inserito nella prestigiosa lista dei Geoparchi <br/>
						Globali”</i>, le parole del sindaco di Sassello, Daniele Buschiazzo, <br/>
						che continua: <i>“Le aree individuate per la ricerca, sono zone <br/>
						speciali di conservazione inserite nella Rete Natura 2000. <br/>
						Il rischio è quello di perdere il riconoscimento dell’UNESCO”.</i><br/><br/>

						Anche il presidente del CAI, Gianni Carravieri, si è unito alle <br/>
						parole del primo cittadino di Sassello: <i>“La popolazione locale e <br/>
						regionale è contraria alla miniera e non capiamo come mai la Regione <br/>
						dia permessi per test di questo genere se la miniera non può, <br/>
						teoricamente, essere messa in piedi. Siamo disponibili a qualsiasi <br/>
						azione per opporci questo progetto”.</i><br/><br/>

						D’altra parte, dall’attività estrattiva si ricaverebbero 2mila <br/>
						euro a tonnellata; secondo le valutazioni geologiche potrebbero <br/>
						esserne estratti quindi almeno 60 milioni di tonnellate. Insomma, <br/>
						ancora una volta, sembra prevalere l’aspetto economico sui rischi <br/>
						sanitari e ambientali che potrebbero derivare dagli scavi.<br/><br/>
                    </div>

				</div>
			</div>
				

			<div class="column-2">
				<News/>
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
						Il sindaco di Sassello, Daniele Buschiazzo, ha parlato dei rischi <br/>
						derivanti da una possibile apertura della miniera di titanio <br/>
						presente nel Parco del Beigua: tra questi anche il pericolo <br/>
						di essere rimossi tra i siti riconosciuti dall’Unesco.<br/>
					</div>
						
					<div class="mdc-typography--body1 text">
                        Nascosto tra le alture del Beigua tra le province di Genova e <br/>
						di Savona, il giacimento di titanio del Piampaludo sta facendo <br/>
						molto parlare di sé. La Regione Liguria, con un decreto dirigenziale, <br/>
						ha autorizzato la C.E.T, un’azienda di Cuneo, ad effettuare una ricerca <br/>
						mineraria nell’area adiacente (e per 46 ettari interna) alla <br/>
						ZSC 1T1331402 “Beigua – M. Dente – Gargassa – Pavaglione”, <br/>
						gestita dallo stesso Ente Parco.<br/><br/>

						Le associazioni ambientaliste e la popolazione locale sono subito <br/>
						insorte e non è mancato il dissenso anche da parte dei comuni che <br/>
						verrebbero coinvolti nelle ricerche, Urbe e Sassello, i quali si <br/>
						sono mostrati contrari alla riapertura della miniera. <br/><br/>

						<i>“Il territorio del Parco del Beigua è stato designato come sito <br/>
						UNESCO ed è stato inserito nella prestigiosa lista dei Geoparchi <br/>
						Globali”</i>, le parole del sindaco di Sassello, Daniele Buschiazzo, <br/>
						che continua: <i>“Le aree individuate per la ricerca, sono zone <br/>
						speciali di conservazione inserite nella Rete Natura 2000. <br/>
						Il rischio è quello di perdere il riconoscimento dell’UNESCO”.</i><br/><br/>

						Anche il presidente del CAI, Gianni Carravieri, si è unito alle <br/>
						parole del primo cittadino di Sassello: <i>“La popolazione locale e <br/>
						regionale è contraria alla miniera e non capiamo come mai la Regione <br/>
						dia permessi per test di questo genere se la miniera non può, <br/>
						teoricamente, essere messa in piedi. Siamo disponibili a qualsiasi <br/>
						azione per opporci questo progetto”.</i><br/><br/>

						D’altra parte, dall’attività estrattiva si ricaverebbero 2mila <br/>
						euro a tonnellata; secondo le valutazioni geologiche potrebbero <br/>
						esserne estratti quindi almeno 60 milioni di tonnellate. Insomma, <br/>
						ancora una volta, sembra prevalere l’aspetto economico sui rischi <br/>
						sanitari e ambientali che potrebbero derivare dagli scavi.<br/><br/>
                    </div>
				</div>
			</div>
					
			
			<div class="column-2">
				<News/>
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
					Il sindaco di Sassello, Daniele Buschiazzo, ha parlato dei rischi <br/>
					derivanti da una possibile apertura della miniera di titanio <br/>
					presente nel Parco del Beigua: tra questi anche il pericolo <br/>
					di essere rimossi tra i siti riconosciuti dall’Unesco.<br/>
				</div>
					
				<div class="mdc-typography--body1 text">
					Nascosto tra le alture del Beigua tra le province di Genova e <br/>
					di Savona, il giacimento di titanio del Piampaludo sta facendo <br/>
					molto parlare di sé. La Regione Liguria, con un decreto dirigenziale, <br/>
					ha autorizzato la C.E.T, un’azienda di Cuneo, ad effettuare una ricerca <br/>
					mineraria nell’area adiacente (e per 46 ettari interna) alla <br/>
					ZSC 1T1331402 “Beigua – M. Dente – Gargassa – Pavaglione”, <br/>
					gestita dallo stesso Ente Parco.<br/><br/>

					Le associazioni ambientaliste e la popolazione locale sono subito <br/>
					insorte e non è mancato il dissenso anche da parte dei comuni che <br/>
					verrebbero coinvolti nelle ricerche, Urbe e Sassello, i quali si <br/>
					sono mostrati contrari alla riapertura della miniera. <br/><br/>

					<i>“Il territorio del Parco del Beigua è stato designato come sito <br/>
					UNESCO ed è stato inserito nella prestigiosa lista dei Geoparchi <br/>
					Globali”</i>, le parole del sindaco di Sassello, Daniele Buschiazzo, <br/>
					che continua: <i>“Le aree individuate per la ricerca, sono zone <br/>
					speciali di conservazione inserite nella Rete Natura 2000. <br/>
					Il rischio è quello di perdere il riconoscimento dell’UNESCO”.</i><br/><br/>

					Anche il presidente del CAI, Gianni Carravieri, si è unito alle <br/>
					parole del primo cittadino di Sassello: <i>“La popolazione locale e <br/>
					regionale è contraria alla miniera e non capiamo come mai la Regione <br/>
					dia permessi per test di questo genere se la miniera non può, <br/>
					teoricamente, essere messa in piedi. Siamo disponibili a qualsiasi <br/>
					azione per opporci questo progetto”.</i><br/><br/>

					D’altra parte, dall’attività estrattiva si ricaverebbero 2mila <br/>
					euro a tonnellata; secondo le valutazioni geologiche potrebbero <br/>
					esserne estratti quindi almeno 60 milioni di tonnellate. Insomma, <br/>
					ancora una volta, sembra prevalere l’aspetto economico sui rischi <br/>
					sanitari e ambientali che potrebbero derivare dagli scavi.<br/><br/>
				</div>
			</div>
		</div>
				
	
		<div class="column-2">
			<News/>
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
.tablet{
	flex-direction: column;
	align-items: center;
}
.tablet .column-1{
	float: none;
	width: 100%;
}
.tablet .column-2{
	float: none;
}
/* Mobile  */
.mobile{
	flex-direction: column;
}

.mobile .column-1{
	float:none;
	width: 100%;
}
.mobile .column-2{
	float:none;
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
	font-family:'Oswald',sans-serif;
	margin: 0 0 15px 0;
	line-height: 1.5em;
}

.text{
	font-family:'Roboto',sans-serif;
	line-height: 1.5em;
	font-size: 25px;
}

/* * :global(.card-media-16x9) {
  background-image: url(../../../images/beiglarge.jpg);
} */

.article{
	margin: 10% 0 0 10%;
}
</style>
