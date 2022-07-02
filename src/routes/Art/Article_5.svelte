<script>
	import News from "../../lib/collection/vertical_news.svelte";
	import Head from "$lib/components/headArticle.svelte";
	import MediaQuery from "$lib/Utility/MediaQuery.svelte";
		 // headArticle dinamic + text 
		 import doc from "../../images/card/card_5.jpg";
    import { title,image } from "$lib/components/headArticle.svelte";
  		title.set('ALLA SCOPERTA DEL TITANIO, MINERALE DANNOSO CON POTENZIALITÀ IMPORTANTI');
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
						Presentato come pericoloso e dannoso per l’ambiente e <br/>
						per la salute della popolazione, <br/>
						il titanio può rivelarsi in realtà una risorsa strategica.<br/>
					</div>
						
					<div class="mdc-typography--body1 text">
                        Contenuto nel rutilo presente nelle rocce della nostra riserva <br/>
						naturale ligure del parco del Beigua, il titanio è uno dei <br/>
						metalli più robusti al mondo ma anche tra i più pericolosi. <br/>
						È stato scoperto nel 1791 dal reverendo, mineralogista e <br/>
						chimico britannico William Gregor che lo individuò nelle <br/>
						rocce di ilmenite della Cornovaglia. Diverse miniere di <br/>
						titanio sono sparse in tutti il mondo: oltre a quello di <br/>
						Piampaludo, altri significativi depositi si trovano in <br/>
						Australia, Scandinavia, Nord America e Malaysia. <br/>
						La Norvegia, in particolare, possiede l’unica miniera attiva<br/> 
						in Europa, che produce circa 300.000 tonnellate all’anno.<br/><br/>

						Una volta estratto, il 93% del titanio è utilizzato come <br/>
						biossido nell'industria dei pigmenti, dove ha la funzione <br/>
						di cambiare il colore della luce riflessa o trasmessa. <br/>
						Quando viene trattato, il minerale polverizzato presenta <br/>
						un colore bianco purissimo, una notevole opacità e un indice <br/>
						di rifrazione elevatissimo, il più elevato tra tutte le sostanze <br/>
						incolori. Le caratteristiche ottiche appena citate, la notevole <br/>
						stabilità chimica e termica e la resistenza alle radiazioni <br/>
						ultraviolette, rendono il biossido di titanio una risorsa di <br/>
						grande rilevanza in numerosi settori industriali per la <br/>
						produzione di materie plastiche, smalti, vernici, carta, <br/>
						vetri e materiali ceramici, oltre alle crescenti applicazioni <br/>
						nell'industria cosmetica, farmaceutica e alimentare. <br/>
						Attualmente, non sono stati scoperti composti che abbiano <br/>
						le stesse caratteristiche del titanio.<br/><br/>

						Il restante 7% del titanio estratto è solitamente impiegato in forma <br/>
						metallica, in particolare è utilizzato nell'industria aerospaziale e <br/>
						per la produzione di impianti dentali e protesi ortopediche. <br/>
						È infatti consigliato per la sua eccellente compatibilità biologica <br/>
						e l'elevata capacità di osteointegrazione. <br/><br/>

						La Comunità Europa ha inserito il titanio nell'elenco delle materie <br/>
						prime "critiche" e "strategiche", ovvero quelle risorse che, oltre <br/>
						al valore economico, presentano elevati rischi di approvvigionamento.<br/><br/>

						Nonostante le caratteristiche uniche descritte finora e le notevoli <br/>
						potenzialità economiche del minerale, il titanio rimane una risorsa <br/>
						divisiva dal punto di vista dell’opinione pubblica. Agli elevati costi <br/>
						di estrazione, si aggiungono i rischi conseguenti agli scavi, tra cui <br/>
						quelli ambientali e sanitari aggravati dalla presenza rilevante di <br/>
						anfiboli sodici classificati come amianto di crocidolite <br/>
						dalla normativa vigente. <br/><br/>
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
						Presentato come pericoloso e dannoso per l’ambiente e <br/>
						per la salute della popolazione, <br/>
						il titanio può rivelarsi in realtà una risorsa strategica.<br/>
					</div>
						
					<div class="mdc-typography--body1 text">
                        Contenuto nel rutilo presente nelle rocce della nostra riserva <br/>
						naturale ligure del parco del Beigua, il titanio è uno dei <br/>
						metalli più robusti al mondo ma anche tra i più pericolosi. <br/>
						È stato scoperto nel 1791 dal reverendo, mineralogista e <br/>
						chimico britannico William Gregor che lo individuò nelle <br/>
						rocce di ilmenite della Cornovaglia. Diverse miniere di <br/>
						titanio sono sparse in tutti il mondo: oltre a quello di <br/>
						Piampaludo, altri significativi depositi si trovano in <br/>
						Australia, Scandinavia, Nord America e Malaysia. <br/>
						La Norvegia, in particolare, possiede l’unica miniera attiva<br/> 
						in Europa, che produce circa 300.000 tonnellate all’anno.<br/><br/>

						Una volta estratto, il 93% del titanio è utilizzato come <br/>
						biossido nell'industria dei pigmenti, dove ha la funzione <br/>
						di cambiare il colore della luce riflessa o trasmessa. <br/>
						Quando viene trattato, il minerale polverizzato presenta <br/>
						un colore bianco purissimo, una notevole opacità e un indice <br/>
						di rifrazione elevatissimo, il più elevato tra tutte le sostanze <br/>
						incolori. Le caratteristiche ottiche appena citate, la notevole <br/>
						stabilità chimica e termica e la resistenza alle radiazioni <br/>
						ultraviolette, rendono il biossido di titanio una risorsa di <br/>
						grande rilevanza in numerosi settori industriali per la <br/>
						produzione di materie plastiche, smalti, vernici, carta, <br/>
						vetri e materiali ceramici, oltre alle crescenti applicazioni <br/>
						nell'industria cosmetica, farmaceutica e alimentare. <br/>
						Attualmente, non sono stati scoperti composti che abbiano <br/>
						le stesse caratteristiche del titanio.<br/><br/>

						Il restante 7% del titanio estratto è solitamente impiegato in forma <br/>
						metallica, in particolare è utilizzato nell'industria aerospaziale e <br/>
						per la produzione di impianti dentali e protesi ortopediche. <br/>
						È infatti consigliato per la sua eccellente compatibilità biologica <br/>
						e l'elevata capacità di osteointegrazione. <br/><br/>

						La Comunità Europa ha inserito il titanio nell'elenco delle materie <br/>
						prime "critiche" e "strategiche", ovvero quelle risorse che, oltre <br/>
						al valore economico, presentano elevati rischi di approvvigionamento.<br/><br/>

						Nonostante le caratteristiche uniche descritte finora e le notevoli <br/>
						potenzialità economiche del minerale, il titanio rimane una risorsa <br/>
						divisiva dal punto di vista dell’opinione pubblica. Agli elevati costi <br/>
						di estrazione, si aggiungono i rischi conseguenti agli scavi, tra cui <br/>
						quelli ambientali e sanitari aggravati dalla presenza rilevante di <br/>
						anfiboli sodici classificati come amianto di crocidolite <br/>
						dalla normativa vigente. <br/><br/>
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
					Presentato come pericoloso e dannoso per l’ambiente e <br/>
					per la salute della popolazione, <br/>
					il titanio può rivelarsi in realtà una risorsa strategica.<br/>
				</div>
					
				<div class="mdc-typography--body1 text">
					Contenuto nel rutilo presente nelle rocce della nostra riserva <br/>
					naturale ligure del parco del Beigua, il titanio è uno dei <br/>
					metalli più robusti al mondo ma anche tra i più pericolosi. <br/>
					È stato scoperto nel 1791 dal reverendo, mineralogista e <br/>
					chimico britannico William Gregor che lo individuò nelle <br/>
					rocce di ilmenite della Cornovaglia. Diverse miniere di <br/>
					titanio sono sparse in tutti il mondo: oltre a quello di <br/>
					Piampaludo, altri significativi depositi si trovano in <br/>
					Australia, Scandinavia, Nord America e Malaysia. <br/>
					La Norvegia, in particolare, possiede l’unica miniera attiva<br/> 
					in Europa, che produce circa 300.000 tonnellate all’anno.<br/><br/>

					Una volta estratto, il 93% del titanio è utilizzato come <br/>
					biossido nell'industria dei pigmenti, dove ha la funzione <br/>
					di cambiare il colore della luce riflessa o trasmessa. <br/>
					Quando viene trattato, il minerale polverizzato presenta <br/>
					un colore bianco purissimo, una notevole opacità e un indice <br/>
					di rifrazione elevatissimo, il più elevato tra tutte le sostanze <br/>
					incolori. Le caratteristiche ottiche appena citate, la notevole <br/>
					stabilità chimica e termica e la resistenza alle radiazioni <br/>
					ultraviolette, rendono il biossido di titanio una risorsa di <br/>
					grande rilevanza in numerosi settori industriali per la <br/>
					produzione di materie plastiche, smalti, vernici, carta, <br/>
					vetri e materiali ceramici, oltre alle crescenti applicazioni <br/>
					nell'industria cosmetica, farmaceutica e alimentare. <br/>
					Attualmente, non sono stati scoperti composti che abbiano <br/>
					le stesse caratteristiche del titanio.<br/><br/>

					Il restante 7% del titanio estratto è solitamente impiegato in forma <br/>
					metallica, in particolare è utilizzato nell'industria aerospaziale e <br/>
					per la produzione di impianti dentali e protesi ortopediche. <br/>
					È infatti consigliato per la sua eccellente compatibilità biologica <br/>
					e l'elevata capacità di osteointegrazione. <br/><br/>

					La Comunità Europa ha inserito il titanio nell'elenco delle materie <br/>
					prime "critiche" e "strategiche", ovvero quelle risorse che, oltre <br/>
					al valore economico, presentano elevati rischi di approvvigionamento.<br/><br/>

					Nonostante le caratteristiche uniche descritte finora e le notevoli <br/>
					potenzialità economiche del minerale, il titanio rimane una risorsa <br/>
					divisiva dal punto di vista dell’opinione pubblica. Agli elevati costi <br/>
					di estrazione, si aggiungono i rischi conseguenti agli scavi, tra cui <br/>
					quelli ambientali e sanitari aggravati dalla presenza rilevante di <br/>
					anfiboli sodici classificati come amianto di crocidolite <br/>
					dalla normativa vigente. <br/><br/>
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
