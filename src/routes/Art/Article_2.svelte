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
						La popolazione ligure si oppone all’apertura della miniera di titanio <br/>
                        presente nel Beigua, 25.000 persone firmano la petizione: <br/>
                        <i>“È una scelta sbagliata, rischi ambientali evidenti”.</i><br/>
					</div>
						
					<div class="mdc-typography--body1 text">
                        Una splendida riserva naturale che presenta una vasta biodiversità,<br/> 
                        un territorio così ricco da poter offrire ogni tipo di attività,<br/> 
                        dall’escursionismo al ciclismo, dal birdwatching all’arrampicata.<br/>
                        Il Parco del Beigua, però, non manca di problemi.<br/><br/>
                    
                        Ciò che rende negativamente famoso il sito è la miniera di titanio <br/>
                        scoperta nel 1970 a circa 600-900 metri di altitudine. <br/> 
                        Il giacimento è composto da nove milioni di tonnellate di rutilo, <br/> 
                        forma mineralogica che compone il titanio. L'elevato contenuto <br/> 
                        di minerali di magnesio rende le rocce della montagna tossiche <br/> 
                        per molte specie vegetali e favorisce l'insediamento di comunità <br/> 
                        vegetali peculiari, formate da piante tolleranti nei confronti <br/> 
                        delle alte concentrazioni di magnesio.<br/> <br/> 
                        
                        Dal momento della scoperta del giacimento, <br/>
                        è iniziata una battaglia legale: da una parte chi è favorevole <br/>
                        all’apertura della miniera, dall’altra chi non vorrebbe procedere <br/>
                        agli scavi. Dal canto suo, dopo una fuga di notizie nel 2013, <br/>
                        il Parco si era espresso così a riguardo:<br/><br/>
                    
                        <i>
                            “In merito alle notizie apparse sulla stampa nei giorni scorsi, <br/>
                            l'Ente Parco sottolinea di non aver ricevuto alcuna comunicazione <br/>
                            né dalla Regione Liguria, né da società di sorta, in merito a <br/>
                            proposte di sfruttamento minerario nell'area del Monte Tarinè. <br/>
                            Ad oggi, gran parte delle aree citate negli articoli pubblicati <br/>
                            sui quotidiani, in particolare quelle nel territorio comunale <br/>
                            di Sassello, sono soggette a vincolo ai sensi della <br/>
                            Legge Regionale n.12/1995, laddove sono esplicitamente vietate <br/>
                            l'apertura e l'esercizio di miniere, cave e discariche, nonché <br/>
                            l'asportazione di minerali”. <br/>
                        </i>

                        È chiaro come una possibile apertura delle ricerche sia legato <br/>
                        strettamente ai fini economici, questione rimarcata dal presidente <br/>
                        del CAI Liguaria Gianni Carravieri, molto preoccupato dalla situazione: <br/><br/>

                        <i>
                            “È da trent’anni che ci sono tentativi di aprire miniere a cielo aperto<br/>
                            per l’estrazione del titano nel Parco regionale del Beigua.<br/> 
                            Il giacimento varrebbe diversi miliardi euro”.<br/><br/>
                        </i>

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
                        Una splendida riserva naturale che presenta una vasta biodiversità,<br/> 
                        un territorio così ricco da poter offrire ogni tipo di attività,<br/> 
                        dall’escursionismo al ciclismo, dal birdwatching all’arrampicata.<br/>
                        Il Parco del Beigua, però, non manca di problemi.<br/><br/>
                    
                        Ciò che rende negativamente famoso il sito è la miniera di titanio <br/>
                        scoperta nel 1970 a circa 600-900 metri di altitudine. <br/> 
                        Il giacimento è composto da nove milioni di tonnellate di rutilo, <br/> 
                        forma mineralogica che compone il titanio. L'elevato contenuto <br/> 
                        di minerali di magnesio rende le rocce della montagna tossiche <br/> 
                        per molte specie vegetali e favorisce l'insediamento di comunità <br/> 
                        vegetali peculiari, formate da piante tolleranti nei confronti <br/> 
                        delle alte concentrazioni di magnesio.<br/> <br/> 
                        
                        Dal momento della scoperta del giacimento, <br/>
                        è iniziata una battaglia legale: da una parte chi è favorevole <br/>
                        all’apertura della miniera, dall’altra chi non vorrebbe procedere <br/>
                        agli scavi. Dal canto suo, dopo una fuga di notizie nel 2013, <br/>
                        il Parco si era espresso così a riguardo:<br/><br/>
                    
                        <i>
                            “In merito alle notizie apparse sulla stampa nei giorni scorsi, <br/>
                            l'Ente Parco sottolinea di non aver ricevuto alcuna comunicazione <br/>
                            né dalla Regione Liguria, né da società di sorta, in merito a <br/>
                            proposte di sfruttamento minerario nell'area del Monte Tarinè. <br/>
                            Ad oggi, gran parte delle aree citate negli articoli pubblicati <br/>
                            sui quotidiani, in particolare quelle nel territorio comunale <br/>
                            di Sassello, sono soggette a vincolo ai sensi della <br/>
                            Legge Regionale n.12/1995, laddove sono esplicitamente vietate <br/>
                            l'apertura e l'esercizio di miniere, cave e discariche, nonché <br/>
                            l'asportazione di minerali”. <br/>
                        </i>

                        È chiaro come una possibile apertura delle ricerche sia legato <br/>
                        strettamente ai fini economici, questione rimarcata dal presidente <br/>
                        del CAI Liguaria Gianni Carravieri, molto preoccupato dalla situazione: <br/><br/>

                        <i>
                            “È da trent’anni che ci sono tentativi di aprire miniere a cielo aperto<br/>
                            per l’estrazione del titano nel Parco regionale del Beigua.<br/> 
                            Il giacimento varrebbe diversi miliardi euro”.<br/><br/>
                        </i>

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
						Una splendida riserva naturale che presenta una vasta biodiversità,<br/> 
                        un territorio così ricco da poter offrire ogni tipo di attività,<br/> 
                        dall’escursionismo al ciclismo, dal birdwatching all’arrampicata.<br/>
                        Il Parco del Beigua, però, non manca di problemi.<br/><br/>
                    
                        Ciò che rende negativamente famoso il sito è la miniera di titanio <br/>
                        scoperta nel 1970 a circa 600-900 metri di altitudine. <br/> 
                        Il giacimento è composto da nove milioni di tonnellate di rutilo, <br/> 
                        forma mineralogica che compone il titanio. L'elevato contenuto <br/> 
                        di minerali di magnesio rende le rocce della montagna tossiche <br/> 
                        per molte specie vegetali e favorisce l'insediamento di comunità <br/> 
                        vegetali peculiari, formate da piante tolleranti nei confronti <br/> 
                        delle alte concentrazioni di magnesio.<br/> <br/> 
                        
                        Dal momento della scoperta del giacimento, <br/>
                        è iniziata una battaglia legale: da una parte chi è favorevole <br/>
                        all’apertura della miniera, dall’altra chi non vorrebbe procedere <br/>
                        agli scavi. Dal canto suo, dopo una fuga di notizie nel 2013, <br/>
                        il Parco si era espresso così a riguardo:<br/><br/>
                    
                        <i>
                            “In merito alle notizie apparse sulla stampa nei giorni scorsi, <br/>
                            l'Ente Parco sottolinea di non aver ricevuto alcuna comunicazione <br/>
                            né dalla Regione Liguria, né da società di sorta, in merito a <br/>
                            proposte di sfruttamento minerario nell'area del Monte Tarinè. <br/>
                            Ad oggi, gran parte delle aree citate negli articoli pubblicati <br/>
                            sui quotidiani, in particolare quelle nel territorio comunale <br/>
                            di Sassello, sono soggette a vincolo ai sensi della <br/>
                            Legge Regionale n.12/1995, laddove sono esplicitamente vietate <br/>
                            l'apertura e l'esercizio di miniere, cave e discariche, nonché <br/>
                            l'asportazione di minerali”. <br/>
                        </i>

                        È chiaro come una possibile apertura delle ricerche sia legato <br/>
                        strettamente ai fini economici, questione rimarcata dal presidente <br/>
                        del CAI Liguaria Gianni Carravieri, molto preoccupato dalla situazione: <br/><br/>

                        <i>
                            “È da trent’anni che ci sono tentativi di aprire miniere a cielo aperto<br/>
                            per l’estrazione del titano nel Parco regionale del Beigua.<br/> 
                            Il giacimento varrebbe diversi miliardi euro”.<br/><br/>
                        </i>
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
 