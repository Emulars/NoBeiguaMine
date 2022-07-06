<script>
    import MediaQuery from "$lib/Utility/MediaQuery.svelte";
    import StatisticIcon from "../images/policy/statistics-icon-21.jpg";
    import PageIcon from  "../images/policy/page-icon.png";
    import ProfileIcon from "../images/policy/profile-icon.png";
</script>

<main>
    <!-- Desktop -->
    <MediaQuery query="(min-width: 601px)" let:matches>
        {#if matches}
            <div class="root desktop">
                <div class="art">
                    <div class="mdc-typography--headline3 title">
                        Informativa sulla privacy di <strong>mountainresistance.it</strong>
                    </div>
                    <div class="mdc-typography--body1 text">
                        Questa Applicazione raccoglie alcuni Dati Personali dei propri Utenti.
                    </div>
                    
                    <hr style="width:90%; text-align:left; margin-left:0">
            
                    <div class="mdc-typography--headline5 subtitle">
                        <strong>Dati Personali trattati per le seguenti finalità e utilizzando i seguenti servizi:</strong>
                    </div>
            
                    <div class="mdc-typography--headline6 subtitle">
                        <img src={StatisticIcon} alt="statistic icon"/>
                        <strong> Statistica</strong>
                    </div>
            
                    <div class="mdc-typography--body1 text">
                        Mixpanel - Dati Personali: Cookie; Dati di utilizzo
                    </div>
            
                    <div class="mdc-typography--headline6 subtitle">
                        <img src={PageIcon} alt="page icon"/>
                        <strong> Trasferimento di Dati al di fuori della UE</strong>
                    </div>
            
                    <div class="mdc-typography--body1 text">
                        Trasferimento di Dati dalla UE e/o dalla Svizzera verso gli Stati Uniti<br/>
                        sulla base del Privacy Shield, Trasferimento di Dati verso paesi che<br/>
                        garantiscono standard europei e Trasferimento verso paesi terzi<br/>
                        basato sul consenso
                    </div>
            
                    <hr style="width:90%; text-align:left; margin-left:0">
            
                    <div class="mdc-typography--headline5 subtitle">
                        <strong>Informazioni di contatto:</strong>
                    </div>
            
                    <div class="mdc-typography--headline6 subtitle">
                        <img src={ProfileIcon} alt="statistic icon"/>
                        <strong> Titolare del Trattamento dei Dati</strong>
                    </div>
            
                    <div class="mdc-typography--body1 text">
                        Mountain Resistance<br/>
                        Via XX Credici 1/4<br/>
                        16143 Genova - Italia<br/>
                        Email: info@mountance.it<br/>
                        Phone: (+39) 342 1234567<br/>
                    </div>
                </div>
            </div>
        {/if}
    </MediaQuery>

    <!-- Mobile -->
    <MediaQuery query="(min-width: 281px) and (max-width: 600px)" let:matches>
        {#if matches}
            <div class="root tablet">
                <div class="art">
                    <div class="mdc-typography--headline5 title">
                        Informativa sulla privacy di <strong>mountainresistance.it</strong>
                    </div>
                    <div class="mdc-typography--body2 text">
                        Questa Applicazione raccoglie alcuni Dati Personali dei propri Utenti.
                    </div>
                    
                    <hr style="width:90%; text-align:left; margin-left:0">
            
                    <div class="mdc-typography--headline6 subtitle">
                        <strong>Dati Personali trattati per le seguenti finalità e utilizzando i seguenti servizi:</strong>
                    </div>
            
                    <div class="mdc-typography--headline6 subtitle">
                        <img src={StatisticIcon} alt="statistic icon"/>
                        <strong> Statistica</strong>
                    </div>
            
                    <div class="mdc-typography--body2 text">
                        Mixpanel - Dati Personali: Cookie; Dati di utilizzo
                    </div>
            
                    <div class="mdc-typography--headline6 subtitle">
                        <img src={PageIcon} alt="page icon"/>
                        <strong> Trasferimento di Dati al di fuori della UE</strong>
                    </div>
            
                    <div class="mdc-typography--body2 text">
                        Trasferimento di Dati dalla UE e/o dalla Svizzera verso gli Stati Uniti<br/>
                        sulla base del Privacy Shield, Trasferimento di Dati verso paesi che<br/>
                        garantiscono standard europei e Trasferimento verso paesi terzi<br/>
                        basato sul consenso
                    </div>
            
                    <hr style="width:90%; text-align:left; margin-left:0">
            
                    <div class="mdc-typography--headline6 subtitle">
                        <strong>Informazioni di contatto:</strong>
                    </div>
            
                    <div class="mdc-typography--headline6 subtitle">
                        <img src={ProfileIcon} alt="statistic icon"/>
                        <strong> Titolare del Trattamento dei Dati</strong>
                    </div>
            
                    <div class="mdc-typography--body2 text">
                        Mountain Resistance<br/>
                        Via XX Credici 1/4<br/>
                        16143 Genova - Italia<br/>
                        Email: info@mountance.it<br/>
                        Phone: (+39) 342 1234567<br/>
                    </div>
                </div>
            </div>
        {/if}
    </MediaQuery>

    <!-- Foldable -->
    <MediaQuery query="(max-width: 280px)" let:matches>
        {#if matches}
            <div class="root mobile">
                <div class="art">
                    <div class="mdc-typography--headline5 title">
                        Informativa sulla privacy di <strong>mountainresistance.it</strong>
                    </div>
                    <div class="mdc-typography--body2 text">
                        Questa Applicazione raccoglie <br/>alcuni Dati Personali dei propri Utenti.
                    </div>
                    
                    <hr style="width:90%; text-align:left; margin-left:0">
            
                    <div class="mdc-typography--headline6 subtitle">
                        <strong>Dati Personali trattati per le<br/> seguenti finalità e utilizzando i seguenti servizi:</strong>
                    </div>
            
                    <div class="mdc-typography--body1 subtitle">
                        <img src={StatisticIcon} alt="statistic icon"/>
                        <strong> Statistica</strong>
                    </div>
            
                    <div class="mdc-typography--body2 text">
                        Mixpanel - Dati Personali: Cookie; Dati di utilizzo
                    </div>
            
                    <div class="mdc-typography--body1 subtitle">
                        <img src={PageIcon} alt="page icon"/>
                        <strong> Trasferimento di Dati<br/> al di fuori della UE</strong>
                    </div>
            
                    <div class="mdc-typography--body2 text">
                        Trasferimento di Dati dalla UE e/o dalla Svizzera verso gli Stati Uniti<br/>
                        sulla base del Privacy Shield, Trasferimento di Dati<br/>
                        verso paesi che garantiscono standard europei e<br/>
                        Trasferimento verso paesi terzi basato sul consenso
                    </div>
            
                    <hr style="width:90%; text-align:left; margin-left:0">
            
                    <div class="mdc-typography--headline6 subtitle">
                        <strong>Informazioni di contatto:</strong>
                    </div>
            
                    <div class="mdc-typography--body1 subtitle">
                        <img src={ProfileIcon} alt="statistic icon"/>
                        <strong> Titolare del Trattamento dei Dati</strong>
                    </div>
            
                    <div class="mdc-typography--body2 text" style="font-size: 0.8em;">
                        Mountain Resistance<br/>
                        Via XX Credici 1/4<br/>
                        16143 Genova - Italia<br/>
                        Email: info@mountance.itbr/>
                        Phone: (+39) 342 1234567<br/>
                    </div>
                </div>
            </div>
        {/if}
    </MediaQuery>

    <div class="spacer" />
</main>

<style>

    img{
        width: 30px;
        height: 30px;
    }
    .root {
        display: flex;
        width: 100%;
    }
    .art {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        margin: 5% 0% 0% 5%;
    }
    .title {
        color: rgb(0, 0, 0);
        font-family: "Oswald", sans-serif;
        line-height: 1.5em;
        padding: 50px 0 50px 0;
        text-transform: uppercase;
        align-content: flex-start;
    }

    .subtitle{
        color: rgb(0, 0, 0);
        font-family: "Roboto", sans-serif;
        align-self:flex-start;
        padding: 15px 0 15px 0;
        font-weight: bold;
    }

    .text {
        font-family: "Roboto", sans-serif;
        line-height: 1.5em;
        font-size: 20px;
        padding-bottom: 15px;
        align-self:flex-start;
    }  

    .spacer {
		margin-top: 15px;
		margin-bottom: 30px;
	}

</style>