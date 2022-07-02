<script>
	import News from "../../lib/collection/vertical_news.svelte";
	import Head from "$lib/components/headArticle.svelte";
	import MediaQuery from "$lib/Utility/MediaQuery.svelte";
		// headArticle dinamic + text 
		import doc from "../../images/card/card_3.jpg";
    import { title,image } from "$lib/components/headArticle.svelte";
  		title.set('GIACIMENTO DI PIAMPALUDO, LA POPOLAZIONE INSORGE: 25.000 FIRME PER OPPORSI ALL’APERTURA');
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
						La popolazione ligure si oppone all’apertura della miniera di titanio <br/>
                        presente nel Beigua, 25.000 persone firmano la petizione: <br/>
                        <i>“È una scelta sbagliata, rischi ambientali evidenti”.</i><br/>
					</div>
						
					<div class="mdc-typography--body1 text">
                        La questione riguardante la miniera di titanio presente nella <br/> 
						riserva naturale del Parco del Beigua preoccupa seriamente <br/> 
						una grande fetta di popolazione ligure e non solo. <br/> 
						A seguito dell’approvazione di un decreto che permetterebbe <br/> 
						le ricerche sul monte, si sono mobilitate associazioni ambientaliste, <br/> 
						il gruppo regionale Cai Liguria e un insieme di organizzazioni <br/> 
						che hanno avviato una petizione capace di raccogliere almeno <br/>
						25mila firme. <br/> <br/>
						
						Agesci Liguria, Arci Liguria, CAI Liguria, ENPA, Federparchi Liguria, <br/>
						FIE Liguria, Friday for Future Liguria, Italia Nostra Liguria, <br/>
						Legambiente Liguria, LIPU, Pro Natura Genova, VAS, WWF Italia Delegato <br/>
						Liguria sono state le prime firmatarie della richiesta che recita così: <br/><br/>

						<i>
							“Gentile Presidente, con il decreto 1211-2021 la Regione Liguria ha <br/>
							concesso per tre anni alla compagnia mineraria CET la possibilità <br/>
							di effettuare ricerche nel comprensorio del Beigua. La finalità <br/>
							evidente è quella di <b>aprire una miniera per estrarre il minerale <br/>
							di Rutilo</b>, contenente Titanio. Riteniamo questa una scelta sbagliata <br/>
							anche se limitata ai 229 ettari (su 458 interessati complessivamente) <br/>
							che si trovano ai margini del confine del Parco del Beigua, perché è <br/>
							evidente che tutti gli impatti negativi della apertura di attività <br/>
							minerarie ricadrebbero nell'area Parco”.<br/><br/>
						</i>

						<i>
							Segue poi la richiesta esplicita di ritiro dell’approvazione: <br/>
							“Con questa nostra petizione chiediamo che <b>VENGA RITIRATO il decreto <br/>
							in considerazione del fatto che le comunità locali da anni si <br/>
							oppongono a qualunque ipotesi di apertura di una miniera</b> nel <br/>
							comprensorio del Beigua”.<br/><br/>
						</i>

						Insomma, sembra chiara la posizione della popolazione in merito <br/>
						all’apertura di una miniera che comporterebbe conseguenze sulla <br/>
						salute non solo dell’ambiente ma anche di milioni di persone. <br/><br/>
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
						La popolazione ligure si oppone all’apertura della miniera di titanio <br/>
                        presente nel Beigua, 25.000 persone firmano la petizione: <br/>
                        <i>“È una scelta sbagliata, rischi ambientali evidenti”.</i><br/>
					</div>
						
					<div class="mdc-typography--body1 text">
                        La questione riguardante la miniera di titanio presente nella <br/> 
						riserva naturale del Parco del Beigua preoccupa seriamente <br/> 
						una grande fetta di popolazione ligure e non solo. <br/> 
						A seguito dell’approvazione di un decreto che permetterebbe <br/> 
						le ricerche sul monte, si sono mobilitate associazioni ambientaliste, <br/> 
						il gruppo regionale Cai Liguria e un insieme di organizzazioni <br/> 
						che hanno avviato una petizione capace di raccogliere almeno <br/>
						25mila firme. <br/> <br/>
						
						Agesci Liguria, Arci Liguria, CAI Liguria, ENPA, Federparchi Liguria, <br/>
						FIE Liguria, Friday for Future Liguria, Italia Nostra Liguria, <br/>
						Legambiente Liguria, LIPU, Pro Natura Genova, VAS, WWF Italia Delegato <br/>
						Liguria sono state le prime firmatarie della richiesta che recita così: <br/><br/>

						<i>
							“Gentile Presidente, con il decreto 1211-2021 la Regione Liguria ha <br/>
							concesso per tre anni alla compagnia mineraria CET la possibilità <br/>
							di effettuare ricerche nel comprensorio del Beigua. La finalità <br/>
							evidente è quella di <b>aprire una miniera per estrarre il minerale <br/>
							di Rutilo</b>, contenente Titanio. Riteniamo questa una scelta sbagliata <br/>
							anche se limitata ai 229 ettari (su 458 interessati complessivamente) <br/>
							che si trovano ai margini del confine del Parco del Beigua, perché è <br/>
							evidente che tutti gli impatti negativi della apertura di attività <br/>
							minerarie ricadrebbero nell'area Parco”.<br/><br/>
						</i>

						<i>
							Segue poi la richiesta esplicita di ritiro dell’approvazione: <br/>
							“Con questa nostra petizione chiediamo che <b>VENGA RITIRATO il decreto <br/>
							in considerazione del fatto che le comunità locali da anni si <br/>
							oppongono a qualunque ipotesi di apertura di una miniera</b> nel <br/>
							comprensorio del Beigua”.<br/><br/>
						</i>

						Insomma, sembra chiara la posizione della popolazione in merito <br/>
						all’apertura di una miniera che comporterebbe conseguenze sulla <br/>
						salute non solo dell’ambiente ma anche di milioni di persone. <br/><br/>
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
						La popolazione ligure si oppone all’apertura della miniera di titanio <br/>
                        presente nel Beigua, 25.000 persone firmano la petizione: <br/>
                        <i>“È una scelta sbagliata, rischi ambientali evidenti”.</i><br/>
					</div>
						
					<div class="mdc-typography--body1 text">
                        La questione riguardante la miniera di titanio presente nella <br/> 
						riserva naturale del Parco del Beigua preoccupa seriamente <br/> 
						una grande fetta di popolazione ligure e non solo. <br/> 
						A seguito dell’approvazione di un decreto che permetterebbe <br/> 
						le ricerche sul monte, si sono mobilitate associazioni ambientaliste, <br/> 
						il gruppo regionale Cai Liguria e un insieme di organizzazioni <br/> 
						che hanno avviato una petizione capace di raccogliere almeno <br/>
						25mila firme. <br/> <br/>
						
						Agesci Liguria, Arci Liguria, CAI Liguria, ENPA, Federparchi Liguria, <br/>
						FIE Liguria, Friday for Future Liguria, Italia Nostra Liguria, <br/>
						Legambiente Liguria, LIPU, Pro Natura Genova, VAS, WWF Italia Delegato <br/>
						Liguria sono state le prime firmatarie della richiesta che recita così: <br/><br/>

						<i>
							“Gentile Presidente, con il decreto 1211-2021 la Regione Liguria ha <br/>
							concesso per tre anni alla compagnia mineraria CET la possibilità <br/>
							di effettuare ricerche nel comprensorio del Beigua. La finalità <br/>
							evidente è quella di <b>aprire una miniera per estrarre il minerale <br/>
							di Rutilo</b>, contenente Titanio. Riteniamo questa una scelta sbagliata <br/>
							anche se limitata ai 229 ettari (su 458 interessati complessivamente) <br/>
							che si trovano ai margini del confine del Parco del Beigua, perché è <br/>
							evidente che tutti gli impatti negativi della apertura di attività <br/>
							minerarie ricadrebbero nell'area Parco”.<br/><br/>
						</i>

						<i>
							Segue poi la richiesta esplicita di ritiro dell’approvazione: <br/>
							“Con questa nostra petizione chiediamo che <b>VENGA RITIRATO il decreto <br/>
							in considerazione del fatto che le comunità locali da anni si <br/>
							oppongono a qualunque ipotesi di apertura di una miniera</b> nel <br/>
							comprensorio del Beigua”.<br/><br/>
						</i>

						Insomma, sembra chiara la posizione della popolazione in merito <br/>
						all’apertura di una miniera che comporterebbe conseguenze sulla <br/>
						salute non solo dell’ambiente ma anche di milioni di persone. <br/><br/>
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
/* 
    * :global(.card-media-16x9) {
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
 