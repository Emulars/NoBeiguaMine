<script>
	import News from "../../lib/collection/vertical_news.svelte";
	import Head from "$lib/components/headArticle.svelte";
	import MediaQuery from "$lib/Utility/MediaQuery.svelte";
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
					<div class="mdc-typography--headline5 title">
						2022 ANNO DI RIPARTENZE: NUOVE RICHERCHE DEL TITANIO <br/>
						NEL PARCO REGIONALE DEL BEIGUA
					</div>
						
					<div class="mdc-typography--body1 text">
                        Le ricerche di titanio sul monte Beigua ripartono spinte dalla <br/>
						fame di materie prime: in questi giorni sono iniziate le indagini <br/>
						per quantificare con precisione la presenza del minerale nell’area. <br/>
						Non ci saranno scavi né trivellazioni, le ricerche saranno fatte <br/>
						esclusivamente con il georadar, in modo da non essere invasive.<br/><br/>

						In particolare le associazioni ambientaliste, assistite dallo studio <br/>
						legale Linzola di Milano, sottolineano come <i>“la pretestuosa, ennesima <br/>
						campagna di pseudo ‘ricerca’ pare avere come unico obiettivo quello <br/>
						di perseverare nella vecchia richiesta di concessione mineraria che, <br/>
						quando in futuro ritenuta economicamente sostenibile, non potrebbe <br/>
						sfociare in altro che in una distruzione dell’area interessata, mediante <br/>
						utilizzo di esplosivi per estrarre in cava, macinare e separare con <br/>
						flottazione ed acidi un 6% di rutilo, con immense quantità di scarti <br/>
						e grandi necessità di prelievi idrici dal bacino del torrente Orba”.</i><br/><br/>

						Inoltre, le associazioni coinvolte definiscono «schizofrenico» <br/>
						il comportamento della Regione Liguria che ha negato i permessi <br/>
						di ricerca dentro il parco regionale del Beigua, ma li ha consentiti <br/>
						in alcune aree adiacenti senza mai interpellare i proprietari dei terreni.<br/><br/>
                    </div>

				</div>
			</div>
				

			<div class="column-2">
				<News/>
			</div>
		</div>
		{/if}
	</MediaQuery> 



	<MediaQuery query="(max-width: 1280px)" let:matches>
        {#if matches}
        <div class="root tablet">

			<div class="column-1">
				<div class="article">
					<div class="mdc-typography--headline5 title">
						2022 ANNO DI RIPARTENZE: NUOVE RICHERCHE DEL TITANIO <br/>
						NEL PARCO REGIONALE DEL BEIGUA
					</div>
						
					<div class="mdc-typography--body1 text">
                        Le ricerche di titanio sul monte Beigua ripartono spinte dalla <br/>
						fame di materie prime: in questi giorni sono iniziate le indagini <br/>
						per quantificare con precisione la presenza del minerale nell’area. <br/>
						Non ci saranno scavi né trivellazioni, le ricerche saranno fatte <br/>
						esclusivamente con il georadar, in modo da non essere invasive.<br/><br/>

						In particolare le associazioni ambientaliste, assistite dallo studio <br/>
						legale Linzola di Milano, sottolineano come <i>“la pretestuosa, ennesima <br/>
						campagna di pseudo ‘ricerca’ pare avere come unico obiettivo quello <br/>
						di perseverare nella vecchia richiesta di concessione mineraria che, <br/>
						quando in futuro ritenuta economicamente sostenibile, non potrebbe <br/>
						sfociare in altro che in una distruzione dell’area interessata, mediante <br/>
						utilizzo di esplosivi per estrarre in cava, macinare e separare con <br/>
						flottazione ed acidi un 6% di rutilo, con immense quantità di scarti <br/>
						e grandi necessità di prelievi idrici dal bacino del torrente Orba”.</i><br/><br/>

						Inoltre, le associazioni coinvolte definiscono «schizofrenico» <br/>
						il comportamento della Regione Liguria che ha negato i permessi <br/>
						di ricerca dentro il parco regionale del Beigua, ma li ha consentiti <br/>
						in alcune aree adiacenti senza mai interpellare i proprietari dei terreni.<br/><br/>
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
	.tablet{
		flex-direction: column;
	}

	.tablet .column-2{
		float: none;
		width: 100%;
	}

	.tablet .column-1{

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
		font-family:'Oswald',sans-serif;
		margin: 0 0 15px 0;
    }

	.text{
		font-family:'Roboto',sans-serif;
		line-height: 1.5em;
	}

    * :global(.card-media-16x9) {
      background-image: url(../../../images/beiglarge.jpg);
    }

	.article{
		margin: 10% 0 0 10%;
	}

  </style>
 