<script>
	import News from "../../lib/collection/vertical_news.svelte";
	import Head from "$lib/components/headArticle.svelte";
	import MediaQuery from "$lib/Utility/MediaQuery.svelte";
	 // headArticle dinamic + text 
	 import doc from "../../images/card/card_8.jpg";
    import { title,image } from "$lib/components/headArticle.svelte";
  		title.set('SEA SHEPARD ED ECOWARRIOR: COME LOTTARE PER I DIRITTI AMBIENTALI DIVERTENDOSI');
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
						Sea Shepard ed EcoWarrior: la storia di organizzazioni che hanno fatto<br/>
						della lotta per i diritti ambientale il loro main purpose.<br/>
					</div>
						
					<div class="mdc-typography--body1 text">
                        A partire dagli anni 70’ inizia ad assumere un'importanza centrale <br/>
						il tema sui diritti ambientali. Nel 1972, viene aggiornato <br/>
						l’articolo 1 della Dichiarazione delle Nazioni Unite in cui <br/>
						si specifica la necessità di proteggere l’ambiente. <br/>
						<i>“L’uomo – recita l’articolo - ha il dovere solenne di <br/>
						proteggere e migliorare l’ambiente a favore delle generazioni <br/>
						presenti e future”.</i><br/><br/>

						Un’altra associazione molto influente per la questione ambientale <br/>
						è EcoWarrior, la cui missione è aiutare qualsiasi territorio o popolazione <br/>
						del Mondo a salvaguardare l'equilibrio ecologico che possa consentire a <br/>
						tutte le creature viventi di esistere degnamente. <br/>
						La peculiarità di questa organizzazione sta nelle modalità di operatività: <br/>
						EcoWarriors è un brand che si impegna nella creazione di videogiochi dai <br/>
						contenuti educativo-ambientali, ideando il giusto mix di divertimento e <br/>
						coinvolgimento nei problemi ambientali. L’obiettivo del progetto è appunto <br/>
						quello di diffondere tra i giovani i concetti dell’educazione ambientale <br/>
						contemporanea alla luce della difficile situazione che l’Umanità dovrà <br/>
						affrontare nei prossimi decenni.<br/><br/>

						Queste sopracitate sono solo due delle storie di centinaia di <br/>
						organizzazioni che ogni giorno, da decenni, si battono per i <br/>
						diritti ambientali e per creare un futuro sempre più sostenibile <br/>
						per le generazioni a venire.<br/><br/>

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
						Sea Shepard ed EcoWarrior: la storia di organizzazioni che hanno fatto<br/>
						della lotta per i diritti ambientale il loro main purpose.<br/>
					</div>
						
					<div class="mdc-typography--body1 text">
                        A partire dagli anni 70’ inizia ad assumere un'importanza centrale <br/>
						il tema sui diritti ambientali. Nel 1972, viene aggiornato <br/>
						l’articolo 1 della Dichiarazione delle Nazioni Unite in cui <br/>
						si specifica la necessità di proteggere l’ambiente. <br/>
						<i>“L’uomo – recita l’articolo - ha il dovere solenne di <br/>
						proteggere e migliorare l’ambiente a favore delle generazioni <br/>
						presenti e future”.</i><br/><br/>

						Un’altra associazione molto influente per la questione ambientale <br/>
						è EcoWarrior, la cui missione è aiutare qualsiasi territorio o popolazione <br/>
						del Mondo a salvaguardare l'equilibrio ecologico che possa consentire a <br/>
						tutte le creature viventi di esistere degnamente. <br/>
						La peculiarità di questa organizzazione sta nelle modalità di operatività: <br/>
						EcoWarriors è un brand che si impegna nella creazione di videogiochi dai <br/>
						contenuti educativo-ambientali, ideando il giusto mix di divertimento e <br/>
						coinvolgimento nei problemi ambientali. L’obiettivo del progetto è appunto <br/>
						quello di diffondere tra i giovani i concetti dell’educazione ambientale <br/>
						contemporanea alla luce della difficile situazione che l’Umanità dovrà <br/>
						affrontare nei prossimi decenni.<br/><br/>

						Queste sopracitate sono solo due delle storie di centinaia di <br/>
						organizzazioni che ogni giorno, da decenni, si battono per i <br/>
						diritti ambientali e per creare un futuro sempre più sostenibile <br/>
						per le generazioni a venire.<br/><br/>

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
					Sea Shepard ed EcoWarrior: la storia di organizzazioni che hanno fatto<br/>
					della lotta per i diritti ambientale il loro main purpose.<br/>
				</div>
					
				<div class="mdc-typography--body1 text">
					A partire dagli anni 70’ inizia ad assumere un'importanza centrale <br/>
					il tema sui diritti ambientali. Nel 1972, viene aggiornato <br/>
					l’articolo 1 della Dichiarazione delle Nazioni Unite in cui <br/>
					si specifica la necessità di proteggere l’ambiente. <br/>
					<i>“L’uomo – recita l’articolo - ha il dovere solenne di <br/>
					proteggere e migliorare l’ambiente a favore delle generazioni <br/>
					presenti e future”.</i><br/><br/>

					Un’altra associazione molto influente per la questione ambientale <br/>
					è EcoWarrior, la cui missione è aiutare qualsiasi territorio o popolazione <br/>
					del Mondo a salvaguardare l'equilibrio ecologico che possa consentire a <br/>
					tutte le creature viventi di esistere degnamente. <br/>
					La peculiarità di questa organizzazione sta nelle modalità di operatività: <br/>
					EcoWarriors è un brand che si impegna nella creazione di videogiochi dai <br/>
					contenuti educativo-ambientali, ideando il giusto mix di divertimento e <br/>
					coinvolgimento nei problemi ambientali. L’obiettivo del progetto è appunto <br/>
					quello di diffondere tra i giovani i concetti dell’educazione ambientale <br/>
					contemporanea alla luce della difficile situazione che l’Umanità dovrà <br/>
					affrontare nei prossimi decenni.<br/><br/>

					Queste sopracitate sono solo due delle storie di centinaia di <br/>
					organizzazioni che ogni giorno, da decenni, si battono per i <br/>
					diritti ambientali e per creare un futuro sempre più sostenibile <br/>
					per le generazioni a venire.<br/><br/>

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
