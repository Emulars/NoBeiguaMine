<script>
    import News from "$lib/collection/news.svelte";
    import titanium from "../images/timeline/amianto01.png";
    import sign from "../images/timeline/cartB.png";
    
    let scroll = 0;
    let maxScroll = 1000;
    let speed = 1;
    const colors = {
		first: '#557B83',
		second: '#39AEA9'
	};
</script>

<svelte:window bind:scrollY={scroll} />

<main>
    <div class="mdc-typography--headline3 title"> - Cronistoria - </div>
	<div class="mdc-typography--body1 subTitle">del giacimento di titanio nel parco del beigua</div>

    <!-- FIRST SECTION -->
    <div class="section first">
        <div class="column">
            <div class="node-left">
                <div class="mdc-typography--headline3 date">1970</div>
                <div class="mdc-typography--body1">Scoperta del giacimento di quasi 400 milioni di tonnellate di rutilo, forma mineralogica con la quale si presenta il titanio, a Piampaludo.</div>
            </div>
        </div>
        
        <div class="column">
            <div class="node-middle">
                {#if scroll < 1300}
                    <img class="image-container" src={titanium} alt="titanium" style:transform={`translate3d(0, ${scroll * speed}px, 0)`}/>
                {:else if scroll > 1701 && scroll < 4000}
                    <img class="image-container" src={sign} alt="sign" style:transform={`translate3d(0, ${scroll * speed}px, 0)`} style="width: 400px; height: 400px;"/>
                {/if}
            </div>
        </div>
        

        <div class="column">
            <div class="node-right">
                <div class="mdc-typography--headline3 date">1976</div>
                <div class="mdc-typography--body1">Il ministero dell'industria rilascia alla Mineraria Italiana Srl una concessione ventennale, poi trasferita alla Compagnia Europea per il Titanio (C.E.T.), ma il progetto non parte per le proteste dei cittadini e delle istituzioni locali, che considerano l'operazione troppo rischiosa per salute e ambiente.</div>
            </div>
        </div>
    </div>

    <!-- SECOND SECTION -->
    <div class="section second">
        <div class="column">
            <div class="node-left">
                <div class="mdc-typography--headline3 date">1991</div>
                <div class="mdc-typography--body1">La C.E.T. chiede il rinnovo della concessione per altri vent'anni e rilancia il progetto,<br>nonstante non avesse ricevuto risposta dal Ministero.</div>
            </div>
        </div>

        <div class="column">
            <div class="node-middle"/>
        </div>

        <div class="column">
            <div class="node-right">
                <div class="mdc-typography--headline3 date">1996</div>
                <div class="mdc-typography--body1">Il progetto viene fermato nuovamente durante un'animata Conferenza dei Servizi tenutasi a Savona: il comitato di cittadini, i sindaci di Urbe e Sassello, l'Ente parco e la Regione (che ha delega su cave e miniere) rigettano e bloccano l'iter.</div>
                <h1 style="absolute">{scroll}</h1>
            </div>
        </div>
    </div>

    <!-- THIRD SECTION -->
    <div class="section third">
        <div class="column">
            <div class="node-left">
                <div class="mdc-typography--headline3 date">2005</div>
                <div class="mdc-typography--body1">Il comprensorio del Parco del Beigua è riconosciuto come Geoparco Internazionale ed è inserito nella Rete Globale dei Geoparchi dell'UNESCO, per la sua geodiversità e il suo patrimonio geologico che tra ... ERRORE</div>
            </div>
        </div>

        <div class="column">
            <div class="node-middle"/>
        </div>

        <div class="column">
            <div class="node-right">
                <div class="mdc-typography--headline3 date">2013</div>
                <div class="mdc-typography--body1">L'Ente Parco del Beigua smentisce attraverso il sito ufficiale, alcune notizie in merito a proposte di sfruttamento minerario nell'area del Monte Tarinè.</div>
            </div>
        </div>
    </div>

    <div class="section third last">
        <div class="column">
            <div class="node-left">
                <div class="mdc-typography--headline3 date">2015</div>
                <div class="mdc-typography--body1">La C.E.T. richiede alla Regione una valutazione di impatto ambientale per indagini geologiche.</div>
            </div>
        </div>

        <div class="column">
            <div class="node-middle"/>
        </div>

        <div class="column">
            <div class="node-right">
                <div class="mdc-typography--headline3 date">2020</div>
                <div class="mdc-typography--body1">Una sentenza del Tar della Liguria ribadisce come l'estrazione di minerali nell'area che costituisce per circa il 40% il territorio legato alla concessione sia vietata dalle norme a tutela del Parco, mentre il restante 60% interessa un "Sito d'Interesse Comunitario terrestre ligure" nel quale la priorità dichirata è la conservazione.</div>
            </div>
        </div>
    </div>

    <div class="section third last">
        <div class="column">
            <div class="node-left">
                <div class="mdc-typography--headline3 date">2021</div>
                <div class="mdc-typography--body1">La giunta Regionale della Liguria con l'atto n.1211 del 26/02 ha decretato di concedere alla Compagnia Europea per il titanio il permesso di ricerca sulla terraferma di minerali solidi limitatatamente a un'area di estensione di 229 esterna al territorio del Parco del Beigua, della durata di 3 anni.
                    <br>Potranno effettuare indagini preliminari finalizzate a valutare la distribuzione, nonché a definire le concentrazioni delle mineralizzazioni di rutilo presenti nell'area.
                </div>
            </div>
        </div>

        <div class="column">
            <div class="node-middle"/>
        </div>

        <div class="column">
            <div class="node-right">
                <div class="mdc-typography--headline3 date">2022</div>
                <div class="mdc-typography--body1">Il 13 aprile si è tenuta un'udienza presso il Tar Liguria sulla legittimità del decreto del febbraio 2021 relativo alle attività estrattive permesse dalla Regione Liguria per la ricerca mineraria in aree esterne del comprensorio del Parco Beigua, nei comuni di Urbe e Sassello.</div>
                <h1 style="absolute">{scroll}</h1>
            </div>
        </div>
    </div>

    <News />

</main>

<style>
    .title{ 
		text-align: center;
		margin-top: 125px;
		margin-bottom: 15px;
        font-family:'Oswald',sans-serif;
	}
	.subTitle{ 
        text-align: center;
        margin-bottom: 80px;
        font-family:'Roboto',sans-serif;
    }

    /* Create three equal columns that floats next to each other */
    .column {
        float: left;
        width: 33.33%;
        height: auto;
    }

    /* Clear floats after the columns */
    .section:after {
        content: "";
        display: table;
        clear: both;
    }

    .section{
        border-radius: 50px 50px 0 0;
        margin-top: -50px;
    }

    .last{
        border-radius: 0 0 0 0;
    }

    .first{
        background-color:#557B83;
    }

    .second{
        background: url('../images/timeline/background.jpg') no-repeat;
    }

    .third{
        background-color:#39AEA9;
    }

    .date{
        font-family:'Oswald',sans-serif;
        font-weight: 1000;
        margin: 0 0 5% 0;
    }

    /* FIRST SECTION*/
    .node-left{
        margin: 33% 0% 0% 20%;
        font-family:'Roboto',sans-serif;
        color: white;
    }

    .node-middle{
        margin: 33% 33% 0% 33%;
        align-items: center;
    }

    .image-container{
        width: 200px;
        height: 200px;
    }

    .node-right{
        margin: 83% 20% 33% 0%;
        font-family:'Roboto',sans-serif;
        color: white;
    }


</style>