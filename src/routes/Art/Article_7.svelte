<script>
	import News from "../../lib/collection/vertical_news.svelte";
	import Head from "$lib/components/headArticle.svelte";
	import MediaQuery from "$lib/Utility/MediaQuery.svelte";
	 // headArticle dinamic + text 
	 import doc from "../../images/card/card_2.jpg";
    import { title,image } from "$lib/components/headArticle.svelte";
  		title.set('MINIERA DI TITANIO NEL BEIGUA: L’ALTRA FACCIA DELLA SPLENDIDA RISERVA NATURALE LIGURE');
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
						Nelle ultime settimane ha fatto strada l’ipotesi di una possibile <br/>
						apertura della miniera di titanio presente nel Parco regionale <br/>
						del Beigua: quali sono i rischi e gli scenari futuri di tale scelta.<br/>
					</div>
						
					<div class="mdc-typography--body1 text">
                        «La miniera non rispetterebbe la normativa europea in materia <br/>
						e avrebbe conseguenze ambientali rilevanti». Queste le parole <br/>
						di Gianni Carravieri, presidente del CAI, su un possibile inizio <br/>
						degli scavi nella miniera di titanio presente nel Parco del Beigua. <br/>
						Nonostante l’attività estrattiva farebbe entrare una quota di denaro <br/>
						considerevole nelle casse di alcuni soggetti privati, il rischio <br/>
						sanitario e ambientale che ricadrebbe sul territorio circostante è <br/>
						evidente.<br/><br/>

						Età della pietra, età del rame, età del bronzo, età del ferro: il <br/>
						progresso della civiltà umana è irrimediabilmente connesso allo <br/>
						sfruttamento delle georisorse. Con la rivoluzione industriale le <br/>
						modalità di accrescimento sono cambiate, almeno in parte, ma lo <br/>
						sfruttamento delle risorse geologiche è cresciuto esponenzialmente <br/>
						raggiungendo negli ultimi decenni livelli preoccupanti sia in termini <br/>
						di riserve di materie prime disponibili sia in riferimento <br/>
						all’impatto ambientale a scala regionale e planetaria. <br/><br/>

						Ad oggi, è impensabile ipotizzare che la nostra società possa <br/>
						sopravvivere o addirittura evolversi in modo indipendente dallo <br/>
						sfruttamento delle georisorse. Un tentativo, però, è necessario <br/>
						e indispensabile per raggiungere un equilibrio tra gli interessi <br/>
						economici e la salvaguardia ambientale. Da questo punto di vista, <br/>
						la progettazione di attività estrattive molto impattanti in aree <br/>
						di rilevante significato ambientale e culturale rischia di generare <br/>
						una cascata di ricadute difficilmente risanabili.<br/><br/>

						Il patrimonio ambientale del Parco del Beigua è riconosciuto <br/>
						internazionalmente; è giusto pensare che qualunque ipotesi di <br/>
						apertura di attività estrattive, peraltro espressamente vietate <br/>
						dalla legge, sia dunque sottoposta ad un attento e rigoroso bilancio <br/>
						dei costi/benefici indotti, a breve e lungo termine, su un territorio <br/>
						fragile e straordinario come quello ligure.<br/><br/>
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
						Nelle ultime settimane ha fatto strada l’ipotesi di una possibile <br/>
						apertura della miniera di titanio presente nel Parco regionale <br/>
						del Beigua: quali sono i rischi e gli scenari futuri di tale scelta.<br/>
					</div>
						
					<div class="mdc-typography--body1 text">
                        «La miniera non rispetterebbe la normativa europea in materia <br/>
						e avrebbe conseguenze ambientali rilevanti». Queste le parole <br/>
						di Gianni Carravieri, presidente del CAI, su un possibile inizio <br/>
						degli scavi nella miniera di titanio presente nel Parco del Beigua. <br/>
						Nonostante l’attività estrattiva farebbe entrare una quota di denaro <br/>
						considerevole nelle casse di alcuni soggetti privati, il rischio <br/>
						sanitario e ambientale che ricadrebbe sul territorio circostante è <br/>
						evidente.<br/><br/>

						Età della pietra, età del rame, età del bronzo, età del ferro: il <br/>
						progresso della civiltà umana è irrimediabilmente connesso allo <br/>
						sfruttamento delle georisorse. Con la rivoluzione industriale le <br/>
						modalità di accrescimento sono cambiate, almeno in parte, ma lo <br/>
						sfruttamento delle risorse geologiche è cresciuto esponenzialmente <br/>
						raggiungendo negli ultimi decenni livelli preoccupanti sia in termini <br/>
						di riserve di materie prime disponibili sia in riferimento <br/>
						all’impatto ambientale a scala regionale e planetaria. <br/><br/>

						Ad oggi, è impensabile ipotizzare che la nostra società possa <br/>
						sopravvivere o addirittura evolversi in modo indipendente dallo <br/>
						sfruttamento delle georisorse. Un tentativo, però, è necessario <br/>
						e indispensabile per raggiungere un equilibrio tra gli interessi <br/>
						economici e la salvaguardia ambientale. Da questo punto di vista, <br/>
						la progettazione di attività estrattive molto impattanti in aree <br/>
						di rilevante significato ambientale e culturale rischia di generare <br/>
						una cascata di ricadute difficilmente risanabili.<br/><br/>

						Il patrimonio ambientale del Parco del Beigua è riconosciuto <br/>
						internazionalmente; è giusto pensare che qualunque ipotesi di <br/>
						apertura di attività estrattive, peraltro espressamente vietate <br/>
						dalla legge, sia dunque sottoposta ad un attento e rigoroso bilancio <br/>
						dei costi/benefici indotti, a breve e lungo termine, su un territorio <br/>
						fragile e straordinario come quello ligure.<br/><br/>
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
						Nelle ultime settimane ha fatto strada l’ipotesi di una possibile <br/>
						apertura della miniera di titanio presente nel Parco regionale <br/>
						del Beigua: quali sono i rischi e gli scenari futuri di tale scelta.<br/>
					</div>
						
					<div class="mdc-typography--body1 text">
                        «La miniera non rispetterebbe la normativa europea in materia <br/>
						e avrebbe conseguenze ambientali rilevanti». Queste le parole <br/>
						di Gianni Carravieri, presidente del CAI, su un possibile inizio <br/>
						degli scavi nella miniera di titanio presente nel Parco del Beigua. <br/>
						Nonostante l’attività estrattiva farebbe entrare una quota di denaro <br/>
						considerevole nelle casse di alcuni soggetti privati, il rischio <br/>
						sanitario e ambientale che ricadrebbe sul territorio circostante è <br/>
						evidente.<br/><br/>

						Età della pietra, età del rame, età del bronzo, età del ferro: il <br/>
						progresso della civiltà umana è irrimediabilmente connesso allo <br/>
						sfruttamento delle georisorse. Con la rivoluzione industriale le <br/>
						modalità di accrescimento sono cambiate, almeno in parte, ma lo <br/>
						sfruttamento delle risorse geologiche è cresciuto esponenzialmente <br/>
						raggiungendo negli ultimi decenni livelli preoccupanti sia in termini <br/>
						di riserve di materie prime disponibili sia in riferimento <br/>
						all’impatto ambientale a scala regionale e planetaria. <br/><br/>

						Ad oggi, è impensabile ipotizzare che la nostra società possa <br/>
						sopravvivere o addirittura evolversi in modo indipendente dallo <br/>
						sfruttamento delle georisorse. Un tentativo, però, è necessario <br/>
						e indispensabile per raggiungere un equilibrio tra gli interessi <br/>
						economici e la salvaguardia ambientale. Da questo punto di vista, <br/>
						la progettazione di attività estrattive molto impattanti in aree <br/>
						di rilevante significato ambientale e culturale rischia di generare <br/>
						una cascata di ricadute difficilmente risanabili.<br/><br/>

						Il patrimonio ambientale del Parco del Beigua è riconosciuto <br/>
						internazionalmente; è giusto pensare che qualunque ipotesi di <br/>
						apertura di attività estrattive, peraltro espressamente vietate <br/>
						dalla legge, sia dunque sottoposta ad un attento e rigoroso bilancio <br/>
						dei costi/benefici indotti, a breve e lungo termine, su un territorio <br/>
						fragile e straordinario come quello ligure.<br/><br/>
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
 