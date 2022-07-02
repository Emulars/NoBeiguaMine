<script>
	import News from "../../lib/collection/vertical_news.svelte";
	import Head from "$lib/components/headArticle.svelte";
	import MediaQuery from "$lib/Utility/MediaQuery.svelte";
	 // headArticle dinamic + text 
	 import doc from "../../images/card/card_6.jpg";
    import { title,image } from "$lib/components/headArticle.svelte";
  		title.set('BEIGUA, CHE DESTINO SPETTERÀ ALLA FLORA E ALLA FAUNA CON L’APERTURA DELLA MINERA DI TITANIO');
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
						Perché l’apertura della miniera di titanio presente nel parco del <br/>
						Beigua può uccidere la flora e la fauna della zona: analizziamo <br/>
						tutte le conseguenze di questa scelta.<br/>
					</div>
						
					<div class="mdc-typography--body1 text">
                        Il comprensorio del Beigua è una delle zone più ricche di <br/>
						biodiversità della Liguria. La conservazione di questo <br/>
						patrimonio è uno degli obiettivi dell’ente del Parco, <br/>
						che mediante la programmazione e la realizzazione di interventi <br/>
						e attività ha sin da subito provato a tutelare il magnifico <br/>
						patrimonio presente nella zona. <br/><br/>

						Il comprensorio del Beigua possiede un valore avifaunistico di <br/>
						livello internazionale, tanto che Bird Life International lo ha <br/>
						classificato come Important Bird and Biodiversity Area. Inoltre, <br/>
						fa parte della lista dei cinque siti più importanti per la <br/>
						conservazione di specie minacciate e tutelate in Europa. <br/>
						Di notevole importanza una fetta del parco, denominata autostrada <br/>
						per gli uccelli, che non solo è considerata un punto di transito, <br/>
						ma è anche un luogo dove ogni anno circa 40.000 coppie di uccelli <br/>
						nidificano. Sono numerosi anche gli invertebrati acquatici, <br/>
						tra cui il gambero di fiume, anfibi e 12 specie di pesci popolano <br/>
						i torrenti. Sono state osservate 15 specie di chirotteri; <br/>
						il lupo ha riconquistato il territorio con una densità di <br/>
						6,7 individui/100 km2.<br/><br/>

						Per quanto riguarda la flora, essa comprende circa 1.200 specie <br/>
						di piante, con 30 endemismi, due ad areale particolarmente ristretto <br/>
						(viola di Bertoloni e peverina di Voltri), 6 alpini e 22 a distribuzione <br/>
						più ampia. Di rilevante interesse è la flora di rupi e pietraie, <br/> 
						caratterizzata da numerosi relitti serpentinicoli e serpentinofite <br/>
						esclusive o preferenziali. Le formazioni forestali sono dominate <br/>
						da castagni, roveri, lecci, pini marittimi…; presenti torbiere, <br/>
						praterie aride e prati-pascoli. <br/><br/>

						La volontà di aprire la miniera di titanio presente a Piampaludo <br/>
						mette a rischio la sopravvivenza di tutta la biodiversità <br/>
						presente nella zona. Come noto, infatti, la presenza delle <br/>
						fibre di amianto nel minerale comporta inevitabilmente dei <br/>
						danni a carico non solo dell’ambiente ma anche sulla salute <br/>
						delle persone. L'inalazione delle fibre di amianto può causare <br/>
						malattie molto gravi.<br/><br/>

						A questo proposito, L'Ente Parco, fin dall’inizio della sua esistenza, <br/>
						ha investito energie e risorse in interventi finalizzati alla <br/>
						conservazione delle specie e habitat d'interesse <br/>
						scientifico-naturalistico. Questo obiettivo viene perseguito <br/>
						con un notevole sforzo per coinvolgere tutti le parti in causa <br/>
						nella conoscenza e nella consapevole fruizione delle risorse naturali. <br/><br/>

						Insomma, se da una parte c’è un interesse economico che guarda solo <br/>
						ai frutti di una possibile raccolta di titanio dalla miniera del Beigua, <br/>
						dall’altra l’Ente Parco, accompagnato da varie associazioni e <br/>
						organizzazioni ambientaliste, si sta impegnando a salvaguardare <br/>
						un patrimonio naturale esistente in poche altre parti al mondo.<br/><br/>

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
						Perché l’apertura della miniera di titanio presente nel parco del <br/>
						Beigua può uccidere la flora e la fauna della zona: analizziamo <br/>
						tutte le conseguenze di questa scelta.<br/>
					</div>
						
					<div class="mdc-typography--body1 text">
                        Il comprensorio del Beigua è una delle zone più ricche di <br/>
						biodiversità della Liguria. La conservazione di questo <br/>
						patrimonio è uno degli obiettivi dell’ente del Parco, <br/>
						che mediante la programmazione e la realizzazione di interventi <br/>
						e attività ha sin da subito provato a tutelare il magnifico <br/>
						patrimonio presente nella zona. <br/><br/>

						Il comprensorio del Beigua possiede un valore avifaunistico di <br/>
						livello internazionale, tanto che Bird Life International lo ha <br/>
						classificato come Important Bird and Biodiversity Area. Inoltre, <br/>
						fa parte della lista dei cinque siti più importanti per la <br/>
						conservazione di specie minacciate e tutelate in Europa. <br/>
						Di notevole importanza una fetta del parco, denominata autostrada <br/>
						per gli uccelli, che non solo è considerata un punto di transito, <br/>
						ma è anche un luogo dove ogni anno circa 40.000 coppie di uccelli <br/>
						nidificano. Sono numerosi anche gli invertebrati acquatici, <br/>
						tra cui il gambero di fiume, anfibi e 12 specie di pesci popolano <br/>
						i torrenti. Sono state osservate 15 specie di chirotteri; <br/>
						il lupo ha riconquistato il territorio con una densità di <br/>
						6,7 individui/100 km2.<br/><br/>

						Per quanto riguarda la flora, essa comprende circa 1.200 specie <br/>
						di piante, con 30 endemismi, due ad areale particolarmente ristretto <br/>
						(viola di Bertoloni e peverina di Voltri), 6 alpini e 22 a distribuzione <br/>
						più ampia. Di rilevante interesse è la flora di rupi e pietraie, <br/> 
						caratterizzata da numerosi relitti serpentinicoli e serpentinofite <br/>
						esclusive o preferenziali. Le formazioni forestali sono dominate <br/>
						da castagni, roveri, lecci, pini marittimi…; presenti torbiere, <br/>
						praterie aride e prati-pascoli. <br/><br/>

						La volontà di aprire la miniera di titanio presente a Piampaludo <br/>
						mette a rischio la sopravvivenza di tutta la biodiversità <br/>
						presente nella zona. Come noto, infatti, la presenza delle <br/>
						fibre di amianto nel minerale comporta inevitabilmente dei <br/>
						danni a carico non solo dell’ambiente ma anche sulla salute <br/>
						delle persone. L'inalazione delle fibre di amianto può causare <br/>
						malattie molto gravi.<br/><br/>

						A questo proposito, L'Ente Parco, fin dall’inizio della sua esistenza, <br/>
						ha investito energie e risorse in interventi finalizzati alla <br/>
						conservazione delle specie e habitat d'interesse <br/>
						scientifico-naturalistico. Questo obiettivo viene perseguito <br/>
						con un notevole sforzo per coinvolgere tutti le parti in causa <br/>
						nella conoscenza e nella consapevole fruizione delle risorse naturali. <br/><br/>

						Insomma, se da una parte c’è un interesse economico che guarda solo <br/>
						ai frutti di una possibile raccolta di titanio dalla miniera del Beigua, <br/>
						dall’altra l’Ente Parco, accompagnato da varie associazioni e <br/>
						organizzazioni ambientaliste, si sta impegnando a salvaguardare <br/>
						un patrimonio naturale esistente in poche altre parti al mondo.<br/><br/>

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
					Perché l’apertura della miniera di titanio presente nel parco del <br/>
					Beigua può uccidere la flora e la fauna della zona: analizziamo <br/>
					tutte le conseguenze di questa scelta.<br/>
				</div>
					
				<div class="mdc-typography--body1 text">
					Il comprensorio del Beigua è una delle zone più ricche di <br/>
					biodiversità della Liguria. La conservazione di questo <br/>
					patrimonio è uno degli obiettivi dell’ente del Parco, <br/>
					che mediante la programmazione e la realizzazione di interventi <br/>
					e attività ha sin da subito provato a tutelare il magnifico <br/>
					patrimonio presente nella zona. <br/><br/>

					Il comprensorio del Beigua possiede un valore avifaunistico di <br/>
					livello internazionale, tanto che Bird Life International lo ha <br/>
					classificato come Important Bird and Biodiversity Area. Inoltre, <br/>
					fa parte della lista dei cinque siti più importanti per la <br/>
					conservazione di specie minacciate e tutelate in Europa. <br/>
					Di notevole importanza una fetta del parco, denominata autostrada <br/>
					per gli uccelli, che non solo è considerata un punto di transito, <br/>
					ma è anche un luogo dove ogni anno circa 40.000 coppie di uccelli <br/>
					nidificano. Sono numerosi anche gli invertebrati acquatici, <br/>
					tra cui il gambero di fiume, anfibi e 12 specie di pesci popolano <br/>
					i torrenti. Sono state osservate 15 specie di chirotteri; <br/>
					il lupo ha riconquistato il territorio con una densità di <br/>
					6,7 individui/100 km2.<br/><br/>

					Per quanto riguarda la flora, essa comprende circa 1.200 specie <br/>
					di piante, con 30 endemismi, due ad areale particolarmente ristretto <br/>
					(viola di Bertoloni e peverina di Voltri), 6 alpini e 22 a distribuzione <br/>
					più ampia. Di rilevante interesse è la flora di rupi e pietraie, <br/> 
					caratterizzata da numerosi relitti serpentinicoli e serpentinofite <br/>
					esclusive o preferenziali. Le formazioni forestali sono dominate <br/>
					da castagni, roveri, lecci, pini marittimi…; presenti torbiere, <br/>
					praterie aride e prati-pascoli. <br/><br/>

					La volontà di aprire la miniera di titanio presente a Piampaludo <br/>
					mette a rischio la sopravvivenza di tutta la biodiversità <br/>
					presente nella zona. Come noto, infatti, la presenza delle <br/>
					fibre di amianto nel minerale comporta inevitabilmente dei <br/>
					danni a carico non solo dell’ambiente ma anche sulla salute <br/>
					delle persone. L'inalazione delle fibre di amianto può causare <br/>
					malattie molto gravi.<br/><br/>

					A questo proposito, L'Ente Parco, fin dall’inizio della sua esistenza, <br/>
					ha investito energie e risorse in interventi finalizzati alla <br/>
					conservazione delle specie e habitat d'interesse <br/>
					scientifico-naturalistico. Questo obiettivo viene perseguito <br/>
					con un notevole sforzo per coinvolgere tutti le parti in causa <br/>
					nella conoscenza e nella consapevole fruizione delle risorse naturali. <br/><br/>

					Insomma, se da una parte c’è un interesse economico che guarda solo <br/>
					ai frutti di una possibile raccolta di titanio dalla miniera del Beigua, <br/>
					dall’altra l’Ente Parco, accompagnato da varie associazioni e <br/>
					organizzazioni ambientaliste, si sta impegnando a salvaguardare <br/>
					un patrimonio naturale esistente in poche altre parti al mondo.<br/><br/>

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
