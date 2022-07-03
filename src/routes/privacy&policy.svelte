<script>
    import MediaQuery from "$lib/Utility/MediaQuery.svelte";
</script>

<main>
    <!-- Desktop -->
    <MediaQuery query="(min-width: 1281px)" let:matches>
        {#if matches}
            <div class="root desktop">
                <div class="art">
                    <!-- Cookie -->
                    <div class="mdc-typography--headline3 title">
                        Informativa sulla Privacy
                    </div>
                    <div class="mdc-typography--body1 text">
                        Ai sensi dell’articolo 13 del Regolamento UE n. 679/2016 – Regolamento Generale sulla Protezione dei Dati (di seguito “Regolamento” o “GDPR”) – 
                        e in osservanza di quanto previsto dal Provvedimento generale del Garante privacy dell’8 maggio 2014, LE PICCOLE RUNE SRL, in qualità di Titolare 
                        del trattamento, fornisce le seguenti informazioni relative ai cookie installati sul sito <a href="https://www.w3.org/Provider/Style/dummy.html">https://www.mountainresistance.it/</a>
                    </div>

                    <div class="mdc-typography--headline5 subtitle">
                        Cos’è un cookie?
                    </div>
                    <div class="mdc-typography--body1 text">
                        Un cookie è un piccolo file di testo contenente un numero di identificazione univoco che viene trasferito dal sito web sul dispositivo (computer desktop, laptop, tablet, 
                        smartphone ecc) utilizzato attraverso un codice anonimo in grado di identificare il dispositivo ma non l’utente e di monitorare passivamente le attività sul Sito.
                    </div>
                    <div class="mdc-typography--body1 text">
                        Nel corso della navigazione su un sito, l’utente può ricevere anche cookie di siti o di web server diversi (c.d. cookie di “terze parti”); ciò accade perché sul sito web 
                        visitato possono essere presenti elementi come, ad esempio, immagini, mappe, suoni, specifici link a pagine web di altri domini che risiedono su server diversi da quello 
                        sul quale si trova la pagina richiesta.
                    </div>

                    <div class="mdc-typography--headline5 subtitle">
                        Quali cookie sono utilizzati?
                    </div>
                    <div class="mdc-typography--body1 text">
                        Nel dettaglio sul Sito vengono utilizzati le seguenti tipologie di cookie: 
                    </div>

                    <div class="mdc-typography--headline5 subtitle">
                        Cookie sulle prestazioni 
                    </div>
                    <div class="mdc-typography--body1 text">
                        Questi tipi di cookie raccolgono informazioni su come gli utenti utilizzano il sito web, ad esempio quali pagine vengono visitate più spesso e se gli utenti ricevono messaggi
                         di errore da queste pagine. Questi cookie non raccolgono informazioni che identificano un visitatore specifico. Tutte le informazioni raccolte da questi cookie sono aggregate
                          e quindi anonime. Vengono utilizzate unicamente per migliorare il funzionamento del sito web. 
                    </div>

                    <div class="mdc-typography--headline5 subtitle">
                        Cookies di widget social
                    </div>
                    <div class="mdc-typography--body1 text">
                        Alcuni widget messi a disposizione dai social network (ad esempio Facebook ,Twitter, YouTube, Google Maps, ecc.) possono utilizzare propri cookies di terze parti. 
                        La disattivazione non compromette l’utilizzo del sito, se non nelle sezioni in cui possono essere installati widget (ad esempio per integrazione di video o mappe) 
                        ed in alcuni casi la possibilità di condivisione rapida dei contenuti o la possibilità di commentare alcune aree del sito.
                    </div>         
                    
                    <div class="mdc-typography--headline5 subtitle">
                        Cookie di analisi di traffico anonimizzati 
                    </div>
                    <div class="mdc-typography--body1 text">
                        Il Sito utilizza i cookie di Google Analytics, un servizio di analisi web fornito da Google. Le informazioni generate dal cookie sull’utilizzo del sito web da parte 
                        dell’utente (compreso il relativo indirizzo IP) verranno trasmesse e depositate presso i server di Google, che utilizzerà queste informazioni allo scopo di tracciare 
                        ed esaminare l’utilizzo del sito web, compilare report sulle attività svolte sul sito web e fornire altri servizi relativi alle attività e all’utilizzo di Internet. 
                        I dati generati da Google Analytics sono conservati da Google così come indicato nella Informativa reperibile al seguente link  <a href="https://developers.google.com/analytics/resources/concepts/gaConceptsCookies">Cookies & Google Analytics</a>.
                    </div>

                    <div class="mdc-typography--headline5 subtitle">
                        Come acquisiamo il consenso alla ricezione dei cookie?
                    </div>
                    <div class="mdc-typography--body1 text">
                        In linea con quanto previsto dalla normativa vigente, per l’invio di cookie tecnici di terze parti, durante la prima visita degli utenti al nostro sito è richiesto il consenso preventivo, 
                        cliccando “Accept cookies” sul banner contenente l’informativa breve.
                    </div>

                    <div class="mdc-typography--headline5 subtitle">
                        Come posso disabilitare i cookie? 
                    </div>
                    <div class="mdc-typography--body1 text">
                        La maggior parte dei browser accettano i cookie automaticamente, ma è possibile anche scegliere di non accettarli. Si rammenta che, per il corretto funzionamento del Sito, 
                        alcuni cookie di tipo tecnico sono indispensabili ed il loro mancato utilizzo potrebbe precludere la corretta navigazione. Di seguito si forniscono le indicazioni circa le 
                        modalità di disabilitazione/eliminazione dei cookie, in base al tipo di browser utilizzato:
                        <ul>
                            <li><a href="https://support.google.com/accounts/answer/61416?hl=it">Chrome</a></li>
                            <li><a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences">Mozilla Firefox</a></li>
                            <li><a href="https://support.apple.com/kb/PH21411?locale=en_US&viewlocale=it_IT">Safari</a></li>
                            <li><a href="http://support.apple.com/kb/HT1677?utm_source=Agillic%20Dialogue">Safari Mobile</a></li>
                            <li><a href="http://windows.microsoft.com/it-it/windows-vista/block-or-allow-cookies">Opera</a></li>
                        </ul>  

                        Inoltre per rifiutare l’utilizzo dei cookie di Google Analytics, come indicato al <a href="https://support.google.com/analytics/answer/181881?hl=it">link</a>, 
                        è necessario modificare la configurazione del proprio browser scaricando il componente aggiuntivo per la disattivazione del JavaScript al seguente 
                        <a href="https://tools.google.com/dlpage/gaoptout?hl=it">link</a>
                    </div>

                    <div class="mdc-typography--headline5 subtitle">
                        Diritti dell’interessato
                    </div>
                    <div class="mdc-typography--body1 text">
                        Art. 7 D. Lgs. 196/2003<br/>
                        <ol>
                            <li>L’interessato ha diritto di ottenere la conferma dell’esistenza o meno di dati personali che lo riguardano, anche se non ancora registrati, 
                                e la loro comunicazione in forma intelligibile.</li>
                            <li>L’interessato ha diritto di ottenere l’indicazione:</li>
                            <ol>
                                <li>dell’origine dei dati personali;</li>
                                <li>della logica applicata in caso di trattamento effettuato con l’ausilio di strumenti elettronici;</li>
                                <li>degli estremi identificativi del titolare, dei responsabili e del rappresentante designato ai sensi dell’articolo 5, comma 2;</li>
                                <li>dei soggetti o delle categorie di soggetti ai quali i dati personali possono essere comunicati o che possono venirne a conoscenza 
                                    in qualità di rappresentante designato nel territorio dello Stato, di responsabili o incaricati.</li>
                            </ol>
                            <li>L’interessato ha diritto di ottenere:</li>
                            <ol>
                                <li>l’aggiornamento, la rettificazione ovvero, quando vi ha interesse, l’integrazione dei dati;</li>
                                <li>la cancellazione, la trasformazione in forma anonima o il blocco dei dati trattati in violazione di legge, compresi quelli di cui non è necessaria la conservazione in relazione agli scopi per i quali i dati sono stati raccolti o successivamente trattati;</li>
                                <li>l’attestazione che le operazioni di cui alle lettere a) e b) sono state portate a conoscenza, anche per quanto riguarda il loro contenuto, di coloro ai quali i dati sono stati comunicati o diffusi, eccettuato il caso in cui tale adempimento si rivela impossibile o comporta un impiego di mezzi manifestamente sproporzionato rispetto al diritto tutelato.</li>
                            </ol>
                            <li>L’interessato ha diritto di opporsi, in tutto o in parte:</li>
                            <ol>
                                <li>per motivi legittimi al trattamento dei dati personali che lo riguardano, ancorché pertinenti allo scopo della raccolta;</li>
                                <li>al trattamento di dati personali che lo riguardano a fini di invio di materiale pubblicitario o di vendita diretta o per il compimento di 
                                    ricerche di mercato o di comunicazione commerciale.</li>
                            </ol>
                        </ol> 
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
                    <!-- Cookie -->
                    <div class="mdc-typography--headline3 title">
                        Informativa sulla Privacy
                    </div>
                    <div class="mdc-typography--body1 text">
                        Ai sensi dell’articolo 13 del Regolamento UE n. 679/2016 – Regolamento Generale sulla Protezione dei Dati (di seguito “Regolamento” o “GDPR”) – 
                        e in osservanza di quanto previsto dal Provvedimento generale del Garante privacy dell’8 maggio 2014, LE PICCOLE RUNE SRL, in qualità di Titolare 
                        del trattamento, fornisce le seguenti informazioni relative ai cookie installati sul sito <a href="https://www.w3.org/Provider/Style/dummy.html">https://www.mountainresistance.it/</a>
                    </div>

                    <div class="mdc-typography--headline5 subtitle">
                        Cos’è un cookie?
                    </div>
                    <div class="mdc-typography--body1 text">
                        Un cookie è un piccolo file di testo contenente un numero di identificazione univoco che viene trasferito dal sito web sul dispositivo (computer desktop, laptop, tablet, 
                        smartphone ecc) utilizzato attraverso un codice anonimo in grado di identificare il dispositivo ma non l’utente e di monitorare passivamente le attività sul Sito.
                    </div>
                    <div class="mdc-typography--body1 text">
                        Nel corso della navigazione su un sito, l’utente può ricevere anche cookie di siti o di web server diversi (c.d. cookie di “terze parti”); ciò accade perché sul sito web 
                        visitato possono essere presenti elementi come, ad esempio, immagini, mappe, suoni, specifici link a pagine web di altri domini che risiedono su server diversi da quello 
                        sul quale si trova la pagina richiesta.
                    </div>

                    <div class="mdc-typography--headline5 subtitle">
                        Quali cookie sono utilizzati?
                    </div>
                    <div class="mdc-typography--body1 text">
                        Nel dettaglio sul Sito vengono utilizzati le seguenti tipologie di cookie: 
                    </div>

                    <div class="mdc-typography--headline5 subtitle">
                        Cookie sulle prestazioni 
                    </div>
                    <div class="mdc-typography--body1 text">
                        Questi tipi di cookie raccolgono informazioni su come gli utenti utilizzano il sito web, ad esempio quali pagine vengono visitate più spesso e se gli utenti ricevono messaggi
                         di errore da queste pagine. Questi cookie non raccolgono informazioni che identificano un visitatore specifico. Tutte le informazioni raccolte da questi cookie sono aggregate
                          e quindi anonime. Vengono utilizzate unicamente per migliorare il funzionamento del sito web. 
                    </div>

                    <div class="mdc-typography--headline5 subtitle">
                        Cookies di widget social
                    </div>
                    <div class="mdc-typography--body1 text">
                        Alcuni widget messi a disposizione dai social network (ad esempio Facebook ,Twitter, YouTube, Google Maps, ecc.) possono utilizzare propri cookies di terze parti. 
                        La disattivazione non compromette l’utilizzo del sito, se non nelle sezioni in cui possono essere installati widget (ad esempio per integrazione di video o mappe) 
                        ed in alcuni casi la possibilità di condivisione rapida dei contenuti o la possibilità di commentare alcune aree del sito.
                    </div>         
                    
                    <div class="mdc-typography--headline5 subtitle">
                        Cookie di analisi di traffico anonimizzati 
                    </div>
                    <div class="mdc-typography--body1 text">
                        Il Sito utilizza i cookie di Google Analytics, un servizio di analisi web fornito da Google. Le informazioni generate dal cookie sull’utilizzo del sito web da parte 
                        dell’utente (compreso il relativo indirizzo IP) verranno trasmesse e depositate presso i server di Google, che utilizzerà queste informazioni allo scopo di tracciare 
                        ed esaminare l’utilizzo del sito web, compilare report sulle attività svolte sul sito web e fornire altri servizi relativi alle attività e all’utilizzo di Internet. 
                        I dati generati da Google Analytics sono conservati da Google così come indicato nella Informativa reperibile al seguente link  <a href="https://developers.google.com/analytics/resources/concepts/gaConceptsCookies">Cookies & Google Analytics</a>.
                    </div>

                    <div class="mdc-typography--headline5 subtitle">
                        Come acquisiamo il consenso alla ricezione dei cookie?
                    </div>
                    <div class="mdc-typography--body1 text">
                        In linea con quanto previsto dalla normativa vigente, per l’invio di cookie tecnici di terze parti, durante la prima visita degli utenti al nostro sito è richiesto il consenso preventivo, 
                        cliccando “Accept cookies” sul banner contenente l’informativa breve.
                    </div>

                    <div class="mdc-typography--headline5 subtitle">
                        Come posso disabilitare i cookie? 
                    </div>
                    <div class="mdc-typography--body1 text">
                        La maggior parte dei browser accettano i cookie automaticamente, ma è possibile anche scegliere di non accettarli. Si rammenta che, per il corretto funzionamento del Sito, 
                        alcuni cookie di tipo tecnico sono indispensabili ed il loro mancato utilizzo potrebbe precludere la corretta navigazione. Di seguito si forniscono le indicazioni circa le 
                        modalità di disabilitazione/eliminazione dei cookie, in base al tipo di browser utilizzato:
                        <ul>
                            <li><a href="https://support.google.com/accounts/answer/61416?hl=it">Chrome</a></li>
                            <li><a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences">Mozilla Firefox</a></li>
                            <li><a href="https://support.apple.com/kb/PH21411?locale=en_US&viewlocale=it_IT">Safari</a></li>
                            <li><a href="http://support.apple.com/kb/HT1677?utm_source=Agillic%20Dialogue">Safari Mobile</a></li>
                            <li><a href="http://windows.microsoft.com/it-it/windows-vista/block-or-allow-cookies">Opera</a></li>
                        </ul>  

                        Inoltre per rifiutare l’utilizzo dei cookie di Google Analytics, come indicato al <a href="https://support.google.com/analytics/answer/181881?hl=it">link</a>, 
                        è necessario modificare la configurazione del proprio browser scaricando il componente aggiuntivo per la disattivazione del JavaScript al seguente 
                        <a href="https://tools.google.com/dlpage/gaoptout?hl=it">link</a>
                    </div>

                    <div class="mdc-typography--headline5 subtitle">
                        Diritti dell’interessato
                    </div>
                    <div class="mdc-typography--body1 text">
                        Art. 7 D. Lgs. 196/2003<br/>
                        <ol>
                            <li>L’interessato ha diritto di ottenere la conferma dell’esistenza o meno di dati personali che lo riguardano, anche se non ancora registrati, 
                                e la loro comunicazione in forma intelligibile.</li>
                            <li>L’interessato ha diritto di ottenere l’indicazione:</li>
                            <ol>
                                <li>dell’origine dei dati personali;</li>
                                <li>della logica applicata in caso di trattamento effettuato con l’ausilio di strumenti elettronici;</li>
                                <li>degli estremi identificativi del titolare, dei responsabili e del rappresentante designato ai sensi dell’articolo 5, comma 2;</li>
                                <li>dei soggetti o delle categorie di soggetti ai quali i dati personali possono essere comunicati o che possono venirne a conoscenza 
                                    in qualità di rappresentante designato nel territorio dello Stato, di responsabili o incaricati.</li>
                            </ol>
                            <li>L’interessato ha diritto di ottenere:</li>
                            <ol>
                                <li>l’aggiornamento, la rettificazione ovvero, quando vi ha interesse, l’integrazione dei dati;</li>
                                <li>la cancellazione, la trasformazione in forma anonima o il blocco dei dati trattati in violazione di legge, compresi quelli di cui non è necessaria la conservazione in relazione agli scopi per i quali i dati sono stati raccolti o successivamente trattati;</li>
                                <li>l’attestazione che le operazioni di cui alle lettere a) e b) sono state portate a conoscenza, anche per quanto riguarda il loro contenuto, di coloro ai quali i dati sono stati comunicati o diffusi, eccettuato il caso in cui tale adempimento si rivela impossibile o comporta un impiego di mezzi manifestamente sproporzionato rispetto al diritto tutelato.</li>
                            </ol>
                            <li>L’interessato ha diritto di opporsi, in tutto o in parte:</li>
                            <ol>
                                <li>per motivi legittimi al trattamento dei dati personali che lo riguardano, ancorché pertinenti allo scopo della raccolta;</li>
                                <li>al trattamento di dati personali che lo riguardano a fini di invio di materiale pubblicitario o di vendita diretta o per il compimento di 
                                    ricerche di mercato o di comunicazione commerciale.</li>
                            </ol>
                        </ol> 
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
                    <!-- Cookie -->
                    <div class="mdc-typography--headline5 title">
                        Informativa sulla Privacy
                    </div>
                    <div class="mdc-typography--body2 text">
                        Ai sensi dell’articolo 13 del Regolamento UE n. 679/2016 – Regolamento Generale sulla Protezione dei Dati (di seguito “Regolamento” o “GDPR”) – 
                        e in osservanza di quanto previsto dal Provvedimento generale del Garante privacy dell’8 maggio 2014, LE PICCOLE RUNE SRL, in qualità di Titolare 
                        del trattamento, fornisce le seguenti informazioni relative ai cookie installati sul sito <a href="https://www.w3.org/Provider/Style/dummy.html">https://www.mountainresistance.it/</a>
                    </div>

                    <div class="mdc-typography--headline6 subtitle">
                        Cos’è un cookie?
                    </div>
                    <div class="mdc-typography--body2 text">
                        Un cookie è un piccolo file di testo contenente un numero di identificazione univoco che viene trasferito dal sito web sul dispositivo (computer desktop, laptop, tablet, 
                        smartphone ecc) utilizzato attraverso un codice anonimo in grado di identificare il dispositivo ma non l’utente e di monitorare passivamente le attività sul Sito.
                    </div>
                    <div class="mdc-typography--body2 text">
                        Nel corso della navigazione su un sito, l’utente può ricevere anche cookie di siti o di web server diversi (c.d. cookie di “terze parti”); ciò accade perché sul sito web 
                        visitato possono essere presenti elementi come, ad esempio, immagini, mappe, suoni, specifici link a pagine web di altri domini che risiedono su server diversi da quello 
                        sul quale si trova la pagina richiesta.
                    </div>

                    <div class="mdc-typography--headline6 subtitle">
                        Quali cookie sono utilizzati?
                    </div>
                    <div class="mdc-typography--body2 text">
                        Nel dettaglio sul Sito vengono utilizzati le seguenti tipologie di cookie: 
                    </div>

                    <div class="mdc-typography--headline6 subtitle">
                        Cookie sulle prestazioni 
                    </div>
                    <div class="mdc-typography--body2 text">
                        Questi tipi di cookie raccolgono informazioni su come gli utenti utilizzano il sito web, ad esempio quali pagine vengono visitate più spesso e se gli utenti ricevono messaggi
                         di errore da queste pagine. Questi cookie non raccolgono informazioni che identificano un visitatore specifico. Tutte le informazioni raccolte da questi cookie sono aggregate
                          e quindi anonime. Vengono utilizzate unicamente per migliorare il funzionamento del sito web. 
                    </div>

                    <div class="mdc-typography--headline6 subtitle">
                        Cookies di widget social
                    </div>
                    <div class="mdc-typography--body2 text">
                        Alcuni widget messi a disposizione dai social network (ad esempio Facebook ,Twitter, YouTube, Google Maps, ecc.) possono utilizzare propri cookies di terze parti. 
                        La disattivazione non compromette l’utilizzo del sito, se non nelle sezioni in cui possono essere installati widget (ad esempio per integrazione di video o mappe) 
                        ed in alcuni casi la possibilità di condivisione rapida dei contenuti o la possibilità di commentare alcune aree del sito.
                    </div>         
                    
                    <div class="mdc-typography--headline6 subtitle">
                        Cookie di analisi di traffico anonimizzati 
                    </div>
                    <div class="mdc-typography--body2 text">
                        Il Sito utilizza i cookie di Google Analytics, un servizio di analisi web fornito da Google. Le informazioni generate dal cookie sull’utilizzo del sito web da parte 
                        dell’utente (compreso il relativo indirizzo IP) verranno trasmesse e depositate presso i server di Google, che utilizzerà queste informazioni allo scopo di tracciare 
                        ed esaminare l’utilizzo del sito web, compilare report sulle attività svolte sul sito web e fornire altri servizi relativi alle attività e all’utilizzo di Internet. 
                        I dati generati da Google Analytics sono conservati da Google così come indicato nella Informativa reperibile al seguente link  <a href="https://developers.google.com/analytics/resources/concepts/gaConceptsCookies">Cookies & Google Analytics</a>.
                    </div>

                    <div class="mdc-typography--headline6 subtitle">
                        Come acquisiamo il consenso alla ricezione dei cookie?
                    </div>
                    <div class="mdc-typography--body2 text">
                        In linea con quanto previsto dalla normativa vigente, per l’invio di cookie tecnici di terze parti, durante la prima visita degli utenti al nostro sito è richiesto il consenso preventivo, 
                        cliccando “Accept cookies” sul banner contenente l’informativa breve.
                    </div>

                    <div class="mdc-typography--headline6 subtitle">
                        Come posso disabilitare i cookie? 
                    </div>
                    <div class="mdc-typography--body2 text">
                        La maggior parte dei browser accettano i cookie automaticamente, ma è possibile anche scegliere di non accettarli. Si rammenta che, per il corretto funzionamento del Sito, 
                        alcuni cookie di tipo tecnico sono indispensabili ed il loro mancato utilizzo potrebbe precludere la corretta navigazione. Di seguito si forniscono le indicazioni circa le 
                        modalità di disabilitazione/eliminazione dei cookie, in base al tipo di browser utilizzato:
                        <ul>
                            <li><a href="https://support.google.com/accounts/answer/61416?hl=it">Chrome</a></li>
                            <li><a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences">Mozilla Firefox</a></li>
                            <li><a href="https://support.apple.com/kb/PH21411?locale=en_US&viewlocale=it_IT">Safari</a></li>
                            <li><a href="http://support.apple.com/kb/HT1677?utm_source=Agillic%20Dialogue">Safari Mobile</a></li>
                            <li><a href="http://windows.microsoft.com/it-it/windows-vista/block-or-allow-cookies">Opera</a></li>
                        </ul>  

                        Inoltre per rifiutare l’utilizzo dei cookie di Google Analytics, come indicato al <a href="https://support.google.com/analytics/answer/181881?hl=it">link</a>, 
                        è necessario modificare la configurazione del proprio browser scaricando il componente aggiuntivo per la disattivazione del JavaScript al seguente 
                        <a href="https://tools.google.com/dlpage/gaoptout?hl=it">link</a>
                    </div>

                    <div class="mdc-typography--headline6 subtitle">
                        Diritti dell’interessato
                    </div>
                    <div class="mdc-typography--body2 text">
                        Art. 7 D. Lgs. 196/2003<br/>
                        <ol>
                            <li>L’interessato ha diritto di ottenere la conferma dell’esistenza o meno di dati personali che lo riguardano, anche se non ancora registrati, 
                                e la loro comunicazione in forma intelligibile.</li>
                            <li>L’interessato ha diritto di ottenere l’indicazione:</li>
                            <ol>
                                <li>dell’origine dei dati personali;</li>
                                <li>della logica applicata in caso di trattamento effettuato con l’ausilio di strumenti elettronici;</li>
                                <li>degli estremi identificativi del titolare, dei responsabili e del rappresentante designato ai sensi dell’articolo 5, comma 2;</li>
                                <li>dei soggetti o delle categorie di soggetti ai quali i dati personali possono essere comunicati o che possono venirne a conoscenza 
                                    in qualità di rappresentante designato nel territorio dello Stato, di responsabili o incaricati.</li>
                            </ol>
                            <li>L’interessato ha diritto di ottenere:</li>
                            <ol>
                                <li>l’aggiornamento, la rettificazione ovvero, quando vi ha interesse, l’integrazione dei dati;</li>
                                <li>la cancellazione, la trasformazione in forma anonima o il blocco dei dati trattati in violazione di legge, compresi quelli di cui non è necessaria la conservazione in relazione agli scopi per i quali i dati sono stati raccolti o successivamente trattati;</li>
                                <li>l’attestazione che le operazioni di cui alle lettere a) e b) sono state portate a conoscenza, anche per quanto riguarda il loro contenuto, di coloro ai quali i dati sono stati comunicati o diffusi, eccettuato il caso in cui tale adempimento si rivela impossibile o comporta un impiego di mezzi manifestamente sproporzionato rispetto al diritto tutelato.</li>
                            </ol>
                            <li>L’interessato ha diritto di opporsi, in tutto o in parte:</li>
                            <ol>
                                <li>per motivi legittimi al trattamento dei dati personali che lo riguardano, ancorché pertinenti allo scopo della raccolta;</li>
                                <li>al trattamento di dati personali che lo riguardano a fini di invio di materiale pubblicitario o di vendita diretta o per il compimento di 
                                    ricerche di mercato o di comunicazione commerciale.</li>
                            </ol>
                        </ol> 
                    </div>
                </div>
            </div>
        {/if}
    </MediaQuery>
</main>

<style>
    .root {
        display: flex;
        /*background-color: #ededed;*/
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
        /*margin-right: 30px;*/
        padding-bottom: 15px;
        align-self:flex-start;
    }  

    a{
        text-decoration: none;
        color: #557B83;
    }
    
</style>