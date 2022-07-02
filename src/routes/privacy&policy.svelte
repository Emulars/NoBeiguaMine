<script>
    import MediaQuery from "$lib/Utility/MediaQuery.svelte";
</script>

<main>
    <!-- Desktop -->
    <MediaQuery query="(min-width: 1281px)" let:matches>
        {#if matches}
            <div class="root desktop">
                <div class="art">
                    <div class="privacy">
                        <div class="article">
                            <div class="mdc-typography--headline1 title">
                                Privacy
                            </div>
                            <div class="mdc-typography--body1 text">
                                Il team è composto da otto studenti
                                dell’Università di Genova<br />
                                che hanno lo scopo di sensibilizzare la popolazione
                                ligure sul delicato<br />
                                tema dell’utilizzo di amianto in Italia. Quattro
                                informatici,<br />
                                tre designer e una studentessa di comunicazione hanno
                                unito le loro<br />
                                competenze per ideare una campagna di sensibilizzazione
                                basata sulla<br />
                                divulgazione online di informazioni utili alla causa.<br
                                />
                            </div>
                        </div>
                    </div>
                    <div class="policy">
                        <div class="article">
                            <div class="mdc-typography--headline1 title">
                                Policy
                            </div>
                            <div class="mdc-typography--body1 text">
                                Il team è composto da otto studenti
                                dell’Università di Genova<br />
                                che hanno lo scopo di sensibilizzare la popolazione
                                ligure sul delicato<br />
                                tema dell’utilizzo di amianto in Italia. Quattro
                                informatici,<br />
                                tre designer e una studentessa di comunicazione hanno
                                unito le loro<br />
                                competenze per ideare una campagna di sensibilizzazione
                                basata sulla<br />
                                divulgazione online di informazioni utili alla causa.<br
                                />
                            </div>
                        </div>
                    </div>
                    <div class="cookies">
                        <div class="article">
                            <div class="mdc-typography--headline1 title">
                                Cookies
                            </div>
                            <div class="mdc-typography--body1 text">
                                Il team è composto da otto studenti
                                dell’Università di Genova<br />
                                che hanno lo scopo di sensibilizzare la popolazione
                                ligure sul delicato<br />
                                tema dell’utilizzo di amianto in Italia. Quattro
                                informatici,<br />
                                tre designer e una studentessa di comunicazione hanno
                                unito le loro<br />
                                competenze per ideare una campagna di sensibilizzazione
                                basata sulla<br />
                                divulgazione online di informazioni utili alla causa.<br
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        {/if}
    </MediaQuery>

    <!-- Tablet -->
    <MediaQuery query="(min-width: 601px) and (max-width: 1280px)" let:matches>
        {#if matches}
            <div class="root tablet">
                <div class="art">
                    <div class="privacy">
                        <div class="article">
                            <div class="mdc-typography--headline1 title">
                                Privacy
                            </div>
                            <div class="mdc-typography--body1 text">
                                Il team è composto da otto studenti
                                dell’Università di Genova<br />
                                che hanno lo scopo di sensibilizzare la popolazione
                                ligure sul delicato<br />
                                tema dell’utilizzo di amianto in Italia. Quattro
                                informatici,<br />
                                tre designer e una studentessa di comunicazione hanno
                                unito le loro<br />
                                competenze per ideare una campagna di sensibilizzazione
                                basata sulla<br />
                                divulgazione online di informazioni utili alla causa.<br
                                />
                            </div>
                        </div>
                    </div>
                    <div class="policy">
                        <div class="article">
                            <div class="mdc-typography--headline1 title">
                                Policy
                            </div>
                            <div class="mdc-typography--body1 text">
                                Il team è composto da otto studenti
                                dell’Università di Genova<br />
                                che hanno lo scopo di sensibilizzare la popolazione
                                ligure sul delicato<br />
                                tema dell’utilizzo di amianto in Italia. Quattro
                                informatici,<br />
                                tre designer e una studentessa di comunicazione hanno
                                unito le loro<br />
                                competenze per ideare una campagna di sensibilizzazione
                                basata sulla<br />
                                divulgazione online di informazioni utili alla causa.<br
                                />
                            </div>
                        </div>
                    </div>
                    <div class="cookies">
                        <div class="article">
                            <div class="mdc-typography--headline1 title">
                                Cookies
                            </div>
                            <div class="mdc-typography--body1 text">
                                Il team è composto da otto studenti
                                dell’Università di Genova<br />
                                che hanno lo scopo di sensibilizzare la popolazione
                                ligure sul delicato<br />
                                tema dell’utilizzo di amianto in Italia. Quattro
                                informatici,<br />
                                tre designer e una studentessa di comunicazione hanno
                                unito le loro<br />
                                competenze per ideare una campagna di sensibilizzazione
                                basata sulla<br />
                                divulgazione online di informazioni utili alla causa.<br
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        {/if}
    </MediaQuery>

    <!-- Mobile -->
    <MediaQuery query="(max-width: 600px)" let:matches>
        {#if matches}
            <div class="root mobile">
                <div class="art">
                    <div class="privacy">
                        <div class="article">
                            <div class="mdc-typography--headline2 title">
                                Privacy
                            </div>
                            <div class="mdc-typography--body1 text">
                                Il team è composto da otto studenti
                                dell’Università di Genova<br />
                                che hanno lo scopo di sensibilizzare la popolazione
                                ligure sul delicato<br />
                                tema dell’utilizzo di amianto in Italia. Quattro
                                informatici,<br />
                                tre designer e una studentessa di comunicazione hanno
                                unito le loro<br />
                                competenze per ideare una campagna di sensibilizzazione
                                basata sulla<br />
                                divulgazione online di informazioni utili alla causa.<br
                                />
                            </div>
                        </div>
                    </div>
                    <div class="policy">
                        <div class="article">
                            <div class="mdc-typography--headline2 title">
                                Policy
                            </div>
                            <div class="mdc-typography--body1 text">
                                Il team è composto da otto studenti
                                dell’Università di Genova<br />
                                che hanno lo scopo di sensibilizzare la popolazione
                                ligure sul delicato<br />
                                tema dell’utilizzo di amianto in Italia. Quattro
                                informatici,<br />
                                tre designer e una studentessa di comunicazione hanno
                                unito le loro<br />
                                competenze per ideare una campagna di sensibilizzazione
                                basata sulla<br />
                                divulgazione online di informazioni utili alla causa.<br
                                />
                            </div>
                        </div>
                    </div>
                    <div class="cookies">
                        <div class="article">
                            <div class="mdc-typography--headline2 title">
                                Cookies
                            </div>
                            <div class="mdc-typography--body1 text">
                                Il team è composto da otto studenti
                                dell’Università di Genova<br />
                                che hanno lo scopo di sensibilizzare la popolazione
                                ligure sul delicato<br />
                                tema dell’utilizzo di amianto in Italia. Quattro
                                informatici,<br />
                                tre designer e una studentessa di comunicazione hanno
                                unito le loro<br />
                                competenze per ideare una campagna di sensibilizzazione
                                basata sulla<br />
                                divulgazione online di informazioni utili alla causa.<br
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        {/if}
    </MediaQuery>
</main>

<style>
    .root {
        margin: 10% 10% 10% 10%;
        display: flex;
    }
    .art {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: nowrap;
        align-items: center;
    }
    .title {
        color: rgb(0, 0, 0);
        font-family: "Oswald", sans-serif;
        margin: 0 10px 30px 0;
        line-height: 1.5em;
    }

    .text {
        font-family: "Roboto", sans-serif;
        line-height: 1.5em;
        font-size: 20px;
        margin-right: 30px;
        border-right: 1px solid black;
    }

    .article {
        line-height: 1.5em;
    }
    
    .tablet .art {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    .tablet .art  {
        width: 100%;
        align-items: center;
    }
    .tablet .art .text {
        margin-bottom: 100px;
        align-items: center;
        margin: 0;
        font-size: 23px;
        border-right: 0px solid black;
    }

    .mobile .art {
        display: flex;
        flex-direction: column;
        width: 100%;
    }
    .mobile .text {
        width: 100%;
        align-items: center;
        padding-left: 5%;
       
    }
    .mobile .art .text {
        margin-bottom: 50px;
        align-items: center;
        border-right: 0px solid black; 
    }
  
</style>
