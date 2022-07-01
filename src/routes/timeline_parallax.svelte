<script>
    import { fly } from 'svelte/transition';
    import News from "$lib/collection/news.svelte";
    import titanium from "../images/timeline/amianto01.png";
    import sign from "../images/timeline/cartB.png";
    import MediaQuery from "$lib/Utility/MediaQuery.svelte";
    import jQuery from 'jquery';

    let scroll = 0;
    let speed = 1;
    let clientHeight;
    let innerHeight;
    const colors = {
		first: '#557B83',
		second: '#39AEA9'
	};
</script>

<svelte:window bind:scrollY={scroll} bind:innerHeight/>

<main>
    <!-- Desktop -->
    <MediaQuery query="(min-width: 900px)" let:matches>
        {#if matches}
        <div class="root desktop">
            <div class="mdc-typography--headline1 title"> - Cronistoria - </div>
            <div class="mdc-typography--body1 subTitle">del giacimento di titanio nel parco del beigua</div>

            <div class="stone-section" bind:clientHeight>
                <!-- FIRST SECTION -->
                <div class="section first">
                    <div class="column">
                        <div class="node-left">
                            <div class="mdc-typography--headline2 date">1970</div>
                            <div class="mdc-typography--body1 subDate"><strong>Scoperta del giacimento</strong> di quasi 400 milioni di tonnellate di rutilo, forma mineralogica con la quale si presenta il <strong>titanio</strong>, a Piampaludo.</div>
                        </div>
                    </div>
                    
                    <div class="column">
                        <div class="node-middle">
                            {#if scroll < clientHeight-600}
                                <img class="image-container" id="scroller" src={titanium} alt="titanium" style:transform={`translate3d(0, ${scroll * speed}px, 0)`} transition:fly="{{ y: 200, duration: 500 }}"/>
                            {/if}
                        </div>
                    </div>
                    

                    <div class="column">
                        <div class="node-right">
                            <div class="mdc-typography--headline2 date">1976</div>
                            <div class="mdc-typography--body1 subDate">Il ministero dell'industria rilascia alla Mineraria Italiana Srl una <strong>concessione ventennale</strong>, poi trasferita alla Compagnia Europea per il Titanio (C.E.T.), ma il <strong>progetto non parte</strong> per le proteste dei cittadini e delle istituzioni locali, che considerano l'operazione troppo rischiosa per salute e ambiente.</div>
                        </div>
                    </div>
                </div>

                <!-- SECOND SECTION -->
                <div class="section second">
                    <div class="column">
                        <div class="node-left">
                            <div class="mdc-typography--headline2 date">1991</div>
                            <div class="mdc-typography--body1 subDate">La C.E.T. chiede il rinnovo della concessione per altri vent'anni e <strong>rilancia il progetto</strong>,<br>nonstante non avesse ricevuto risposta dal Ministero.</div>
                        </div>
                    </div>

                    <div class="column">
                        <div class="node-middle"/>
                    </div>

                    <div class="column">
                        <div class="node-right">
                            <div class="mdc-typography--headline2 date">1996</div>
                            <div class="mdc-typography--body1 subDate"><strong>Il progetto viene fermato nuovamente</strong> durante un'animata Conferenza dei Servizi tenutasi a Savona: il comitato di cittadini, i sindaci di Urbe e Sassello, l'Ente parco e la Regione (che ha delega su cave e miniere) rigettano e bloccano l'iter.</div>
                        </div>
                    </div>
                </div>
            
                <!-- THIRD SECTION -->
                <div class="section third">
                    <div class="column">
                        <div class="node-left">
                            <div class="mdc-typography--headline2 date">2005</div>
                            <div class="mdc-typography--body1 subDate">Il comprensorio del Parco del Beigua è riconosciuto come Geoparco Internazionale ed è inserito nella <strong>Rete Globale dei Geoparchi</strong> dell'UNESCO, per la sua geodiversità e il suo patrimonio geologico che tra l'altro, sequenze di rocce ofiolitiche.</div>
                        </div>
                    </div>

                    <div class="column">
                        <div class="node-middle"/>
                    </div>

                    <div class="column">
                        <div class="node-right">
                            <div class="mdc-typography--headline2 date">2013</div>
                            <div class="mdc-typography--body1 subDate">L'Ente Parco del Beigua smentisce attraverso il sito ufficiale, alcune notizie in merito a proposte di <strong>sfruttamento minerario</strong> nell'area del Monte Tarinè.</div>
                        </div>
                    </div>
                </div>

                <div class="section third last">
                    <div class="column">
                        <div class="node-left">
                            <div class="mdc-typography--headline2 date">2015</div>
                            <div class="mdc-typography--body1 subDate">La C.E.T. richiede alla Regione una <strong>valutazione di impatto ambientale</strong> per indagini geologiche.</div>
                        </div>
                    </div>

                    <div class="column">
                        <div class="node-middle"/>
                    </div>

                    <div class="column">
                        <div class="node-right">
                            <div class="mdc-typography--headline2 date">2020</div>
                            <div class="mdc-typography--body1 subDate">Una sentenza del Tar della Liguria ribadisce come <strong>l'estrazione di minerali nell'area che costituisce per circa il 40% il territorio legato alla concessione sia vietata</strong> dalle norme a tutela del Parco, mentre il restante 60% interessa un "Sito d'Interesse Comunitario terrestre ligure" nel quale la priorità dichirata è la conservazione.</div>
                        </div>
                    </div>
                </div>

                <div class="section third last">
                    <div class="column">
                        <div class="node-left">
                            <div class="mdc-typography--headline2 date">2021</div>
                            <div class="mdc-typography--body1 subDate">La giunta Regionale della Liguria con l'atto n.1211 del 26/02 ha decretato di <strong>concedere alla Compagnia Europea per il titanio il permesso di ricerca sulla terraferma di minerali solidi</strong> limitatatamente a un'area di estensione di 229 esterna al territorio del Parco del Beigua, della durata di 3 anni.
                                <br>Potranno effettuare indagini preliminari finalizzate a valutare la distribuzione, nonché a definire le concentrazioni delle mineralizzazioni di rutilo presenti nell'area.
                            </div>
                        </div>
                    </div>

                    <div class="column">
                        <div class="node-middle"/>
                    </div>

                    <div class="column">
                        <div class="node-right">
                            <div class="mdc-typography--headline2 date">2022</div>
                            <div class="mdc-typography--body1 subDate"><strong>Il 13 aprile si è tenuta un'udienza presso il Tar Liguria sulla legittimità del decreto del febbraio 2021</strong> relativo alle attività estrattive permesse dalla Regione Liguria per la ricerca mineraria in aree esterne del comprensorio del Parco Beigua, nei comuni di Urbe e Sassello.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/if}
    </MediaQuery>


    <!-- Tablet -->
    <MediaQuery query="(min-width: 481px) and (max-width: 899px)" let:matches>
        {#if matches}
        <div class="root tablet">
            <div class="mdc-typography--headline2 title"> - Cronistoria - </div>
            <div class="mdc-typography--body1 subTitle">del giacimento di titanio nel parco del beigua</div>

                <!-- FIRST SECTION -->
                <div class="section first">
                    <div class="column">
                        <div class="node-left">
                            <div class="mdc-typography--headline2 date">1970</div>
                            <div class="mdc-typography--body1 subDate"><strong>Scoperta del giacimento</strong> di quasi 400 milioni di tonnellate di rutilo, forma mineralogica con la quale si presenta il <strong>titanio</strong>, a Piampaludo.</div>
                        </div>
                    </div>
                    
                    <div class="column">
                        <div class="node-middle">
                            <img class="image-container" src={titanium} alt="titanium"/>
                        </div>
                    </div>
                    

                    <div class="column">
                        <div class="node-right">
                            <div class="mdc-typography--headline2 date">1976</div>
                            <div class="mdc-typography--body1 subDate">Il ministero dell'industria rilascia alla Mineraria Italiana Srl una <strong>concessione ventennale</strong>, poi trasferita alla Compagnia Europea per il Titanio (C.E.T.), ma il <strong>progetto non parte</strong> per le proteste dei cittadini e delle istituzioni locali, che considerano l'operazione troppo rischiosa per salute e ambiente.</div>
                        </div>
                    </div>
                </div>

                <!-- SECOND SECTION -->
                <div class="section second">
                    <div class="column">
                        <div class="node-left">
                            <div class="mdc-typography--headline2 date">1991</div>
                            <div class="mdc-typography--body1 subDate">La C.E.T. chiede il rinnovo della concessione per altri vent'anni e <strong>rilancia il progetto</strong>,<br>nonstante non avesse ricevuto risposta dal Ministero.</div>
                        </div>
                    </div>

                    <div class="column">
                        <div class="node-middle"/>
                    </div>

                    <div class="column">
                        <div class="node-right">
                            <div class="mdc-typography--headline2 date">1996</div>
                            <div class="mdc-typography--body1 subDate"><strong>Il progetto viene fermato nuovamente</strong> durante un'animata Conferenza dei Servizi tenutasi a Savona: il comitato di cittadini, i sindaci di Urbe e Sassello, l'Ente parco e la Regione (che ha delega su cave e miniere) rigettano e bloccano l'iter.</div>
                        </div>
                    </div>
                </div>
            
                <!-- THIRD SECTION -->
                <div class="section third">
                    <div class="column">
                        <div class="node-left">
                            <div class="mdc-typography--headline2 date">2005</div>
                            <div class="mdc-typography--body1 subDate">Il comprensorio del Parco del Beigua è riconosciuto come Geoparco Internazionale ed è inserito nella <strong>Rete Globale dei Geoparchi</strong> dell'UNESCO, per la sua geodiversità e il suo patrimonio geologico che tra l'altro, sequenze di rocce ofiolitiche.</div>
                        </div>
                    </div>

                    <div class="column">
                        <div class="node-middle"/>
                    </div>

                    <div class="column">
                        <div class="node-right">
                            <div class="mdc-typography--headline2 date">2013</div>
                            <div class="mdc-typography--body1 subDate">L'Ente Parco del Beigua smentisce attraverso il sito ufficiale, alcune notizie in merito a proposte di <strong>sfruttamento minerario</strong> nell'area del Monte Tarinè.</div>
                        </div>
                    </div>
                </div>

                <div class="section third last">
                    <div class="column">
                        <div class="node-left">
                            <div class="mdc-typography--headline2 date">2015</div>
                            <div class="mdc-typography--body1 subDate">La C.E.T. richiede alla Regione una <strong>valutazione di impatto ambientale</strong> per indagini geologiche.</div>
                        </div>
                    </div>

                    <div class="column">
                        <div class="node-middle">
                            <img class="image-container" src={sign} alt="Sign"/>
                        </div>
                    </div>

                    <div class="column">
                        <div class="node-right">
                            <div class="mdc-typography--headline2 date">2020</div>
                            <div class="mdc-typography--body1 subDate">Una sentenza del Tar della Liguria ribadisce come <strong>l'estrazione di minerali nell'area che costituisce per circa il 40% il territorio legato alla concessione sia vietata</strong> dalle norme a tutela del Parco, mentre il restante 60% interessa un "Sito d'Interesse Comunitario terrestre ligure" nel quale la priorità dichirata è la conservazione.</div>
                        </div>
                    </div>
                </div>

                <div class="section third last">
                    <div class="column">
                        <div class="node-left" style="padding: 0 0 100px 0;">
                            <div class="mdc-typography--headline2 date">2021</div>
                            <div class="mdc-typography--body1 subDate">La giunta Regionale della Liguria con l'atto n.1211 del 26/02 ha decretato di <strong>concedere alla Compagnia Europea per il titanio il permesso di ricerca sulla terraferma di minerali solidi</strong> limitatatamente a un'area di estensione di 229 esterna al territorio del Parco del Beigua, della durata di 3 anni.
                                <br>Potranno effettuare indagini preliminari finalizzate a valutare la distribuzione, nonché a definire le concentrazioni delle mineralizzazioni di rutilo presenti nell'area.
                            </div>
                        </div>
                    </div>

                    <div class="column">
                        <div class="node-middle"/>
                    </div>

                    <div class="column">
                        <div class="node-right">
                            <div class="mdc-typography--headline2 date">2022</div>
                            <div class="mdc-typography--body1 subDate"><strong>Il 13 aprile si è tenuta un'udienza presso il Tar Liguria sulla legittimità del decreto del febbraio 2021</strong> relativo alle attività estrattive permesse dalla Regione Liguria per la ricerca mineraria in aree esterne del comprensorio del Parco Beigua, nei comuni di Urbe e Sassello.</div>
                        </div>
                    </div>
                </div>
        </div>
        {/if}
    </MediaQuery>


    <!-- Mobile -->
    <MediaQuery query="(max-width: 480px)" let:matches>
        {#if matches}
        <div class="root mobile">
            <div class="mdc-typography--headline3 title"> - Cronistoria - </div>
            <div class="mdc-typography--body2 subTitle">del giacimento di titanio nel parco del beigua</div>

                <!-- FIRST SECTION -->
                <div class="section first">
                    <div class="column">
                        <div class="node-left">
                            <div class="mdc-typography--headline2 date">1970</div>
                            <div class="mdc-typography--body1 subDate"><strong>Scoperta del giacimento</strong> di quasi 400 milioni di tonnellate di rutilo, forma mineralogica con la quale si presenta il <strong>titanio</strong>, a Piampaludo.</div>
                        </div>
                    </div>
                    
                    <div class="column">
                        <div class="node-middle">
                            <img class="image-container" src={titanium} alt="titanium" style="width: 200px; height:200px; margin-left:50px "/>
                        </div>
                    </div>
                    

                    <div class="column">
                        <div class="node-right">
                            <div class="mdc-typography--headline2 date">1976</div>
                            <div class="mdc-typography--body1 subDate">Il ministero dell'industria rilascia alla Mineraria Italiana Srl una <strong>concessione ventennale</strong>, poi trasferita alla Compagnia Europea per il Titanio (C.E.T.), ma il <strong>progetto non parte</strong> per le proteste dei cittadini e delle istituzioni locali, che considerano l'operazione troppo rischiosa per salute e ambiente.</div>
                        </div>
                    </div>
                </div>

                <!-- SECOND SECTION -->
                <div class="section second">
                    <div class="column">
                        <div class="node-left">
                            <div class="mdc-typography--headline2 date">1991</div>
                            <div class="mdc-typography--body1 subDate">La C.E.T. chiede il rinnovo della concessione per altri vent'anni e <strong>rilancia il progetto</strong>,<br>nonstante non avesse ricevuto risposta dal Ministero.</div>
                        </div>
                    </div>

                    <div class="column">
                        <div class="node-middle"/>
                    </div>

                    <div class="column">
                        <div class="node-right">
                            <div class="mdc-typography--headline2 date">1996</div>
                            <div class="mdc-typography--body1 subDate"><strong>Il progetto viene fermato nuovamente</strong> durante un'animata Conferenza dei Servizi tenutasi a Savona: il comitato di cittadini, i sindaci di Urbe e Sassello, l'Ente parco e la Regione (che ha delega su cave e miniere) rigettano e bloccano l'iter.</div>
                        </div>
                    </div>
                </div>
            
                <!-- THIRD SECTION -->
                <div class="section third">
                    <div class="column">
                        <div class="node-left">
                            <div class="mdc-typography--headline2 date">2005</div>
                            <div class="mdc-typography--body1 subDate">Il comprensorio del Parco del Beigua è riconosciuto come Geoparco Internazionale ed è inserito nella <strong>Rete Globale dei Geoparchi</strong> dell'UNESCO, per la sua geodiversità e il suo patrimonio geologico che tra l'altro, sequenze di rocce ofiolitiche.</div>
                        </div>
                    </div>

                    <div class="column">
                        <div class="node-middle"/>
                    </div>

                    <div class="column">
                        <div class="node-right">
                            <div class="mdc-typography--headline2 date">2013</div>
                            <div class="mdc-typography--body1 subDate">L'Ente Parco del Beigua smentisce attraverso il sito ufficiale, alcune notizie in merito a proposte di <strong>sfruttamento minerario</strong> nell'area del Monte Tarinè.</div>
                        </div>
                    </div>
                </div>

                <div class="section third last">
                    <div class="column">
                        <div class="node-left">
                            <div class="mdc-typography--headline2 date">2015</div>
                            <div class="mdc-typography--body1 subDate">La C.E.T. richiede alla Regione una <strong>valutazione di impatto ambientale</strong> per indagini geologiche.</div>
                        </div>
                    </div>

                    <div class="column">
                        <div class="node-middle">
                            <img class="image-container" src={sign} alt="Sign"/>
                        </div>
                    </div>

                    <div class="column">
                        <div class="node-right">
                            <div class="mdc-typography--headline2 date">2020</div>
                            <div class="mdc-typography--body1 subDate">Una sentenza del Tar della Liguria ribadisce come <strong>l'estrazione di minerali nell'area che costituisce per circa il 40% il territorio legato alla concessione sia vietata</strong> dalle norme a tutela del Parco, mentre il restante 60% interessa un "Sito d'Interesse Comunitario terrestre ligure" nel quale la priorità dichirata è la conservazione.</div>
                        </div>
                    </div>
                </div>

                <div class="section third last">
                    <div class="column">
                        <div class="node-left">
                            <div class="mdc-typography--headline2 date">2021</div>
                            <div class="mdc-typography--body1 subDate">La giunta Regionale della Liguria con l'atto n.1211 del 26/02 ha decretato di <strong>concedere alla Compagnia Europea per il titanio il permesso di ricerca sulla terraferma di minerali solidi</strong> limitatatamente a un'area di estensione di 229 esterna al territorio del Parco del Beigua, della durata di 3 anni.
                                <br>Potranno effettuare indagini preliminari finalizzate a valutare la distribuzione, nonché a definire le concentrazioni delle mineralizzazioni di rutilo presenti nell'area.
                            </div>
                        </div>
                    </div>

                    <div class="column">
                        <div class="node-middle"/>
                    </div>

                    <div class="column">
                        <div class="node-right">
                            <div class="mdc-typography--headline2 date">2022</div>
                            <div class="mdc-typography--body1 subDate"><strong>Il 13 aprile si è tenuta un'udienza presso il Tar Liguria sulla legittimità del decreto del febbraio 2021</strong> relativo alle attività estrattive permesse dalla Regione Liguria per la ricerca mineraria in aree esterne del comprensorio del Parco Beigua, nei comuni di Urbe e Sassello.</div>
                        </div>
                    </div>
                </div>
            </div>
        {/if}
    </MediaQuery> 

    <News />

</main>

<style>
    .title{ 
		text-align: center;
		margin-top: 125px;
		margin-bottom: 15px;
        font-family:'Oswald',sans-serif;
        font-weight: 400;
		text-transform: uppercase;
		letter-spacing: 3px;
	}
	.subTitle{ 
        text-align: center;
        margin-bottom: 80px;
        font-family:'Roboto',sans-serif;
        font-size: larger;
    }

    .image-container{
        width: 100%;
        height: 100%;
    }

    /* Create three equal columns that floats next to each other */
    .desktop .column {
        float: left;
        width: 33.33%;
        height: auto;
    }

    .tablet .column{
        float: left;
        width: 33.33%;
        height: auto;
    }

    .mobile .column{
        float: left;
        width: auto;
        height: 33%;
    }

    .section{
        border-radius: 50px 50px 0 0;
        margin-top: -50px;
    }

    /* Clear floats after the columns */
    .section:after {
        content: "";
        display: table;
        clear: both;
    }

    .last{
        border-radius: 0 0 0 0;
    }

    .first{
        background-color:#557B83;
    }

    .second{
        background: url('../images/timeline/background.jpg') no-repeat;
        background-size: cover;
    }

    .third{
        background-color:#39AEA9;
    }

    .desktop .date{
        font-family:'Oswald',sans-serif;
        font-weight: 1000;
        margin: 0% 0 5% 0;
    }

    .desktop .subDate{
        font-family:'Roboto',sans-serif;
        font-size: larger;
    }

    .tablet .date{
        font-family:'Oswald',sans-serif;
        font-weight: 1000;
        margin: 0% 0 5% 0;
    }

    .tablet .subDate{
        font-family:'Roboto',sans-serif;
        font-size: larger;
    }

    .mobile .date{
        font-family:'Oswald',sans-serif;
        font-weight: 1000;
        margin: 0% 0% 5% 0%;
    }

    .mobile .subDate{
        font-family:'Roboto',sans-serif;
        font-size: larger;
    }

    /* DESKTOP */
    .desktop .node-left{
        margin: 33% 0% 0% 20%; /*33% 0% 0% 20%;*/
        font-family:'Roboto',sans-serif;
        color: white;
    }

    .desktop .node-middle{
        margin: 33% 33% 0% 25%; /*33% 33% 0% 33%;*/
        align-items: center;
    }

    .desktop .node-right{
        margin: 83% 20% 33% 0%; /*83% 20% 33% 0%;*/
        font-family:'Roboto',sans-serif;
        color: white;
    }

    /* TABLET */
    .tablet .node-left{
        margin: 20% 0% 0% 10%; 
        font-family:'Roboto',sans-serif;
        color: white;
    }

    .tablet .node-middle{
        margin: 70% 33% 0% 25%;
        align-items: center;
    }

    .tablet .node-right{
        margin: 83% 10% 33% 0%; 
        font-family:'Roboto',sans-serif;
        color: white;
    }

    /* MOBILE */
    .mobile .node-left{
        margin: 20% 10% 20% 10%; /*33% 0% 0% 20%;*/
        font-family:'Roboto',sans-serif;
        color: white;
    }

    .mobile .node-middle{
        margin: 0% 0% 0% 0%; /*33% 33% 0% 33%;*/
        align-items: center;
    }

    .mobile .node-right{
        margin: 20% 10% 33% 10%; /*83% 20% 33% 0%;*/
        font-family:'Roboto',sans-serif;
        color: white;
    }


</style>