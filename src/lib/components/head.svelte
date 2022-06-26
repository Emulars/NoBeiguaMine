<script>
    import mid from "../../images/2.jpg";
    import Logoh1 from "../../images/LWhite.png";
    import MediaQuery from "$lib/Utility/MediaQuery.svelte";
</script>

<main>
    <!-- Dekstop -->
    <MediaQuery query="(min-width: 1281px)" let:matches>
        {#if matches}
        <div class="root desktop">
            <div class="Heroimg">
                <img class="description" src={mid} alt="Description" />
                <div class="Herotxt">
                    <h1><img class="logoh1" src={Logoh1} alt="logop1" /></h1>
                    <p class="mdc-typography--subtitle1">
                        Scoperto nel 1970,il giacimento di titanio prensente nel Parco del
                        Beigua <br /> presenta un'enorme minaccia per l'ambiente e per gli
                        abitanti della zona. <br />
                        E' in corso da anni una battaglia legale per un'eventuale apertura
                        <br />
                        della miniera che causerebbe gravi problemi alla popolazione e<br />
                        alla biodiversita presenti nella zona.
                    </p>
                </div>
            </div>
        </div>
        {/if}
    </MediaQuery>

    <!-- Tablet -->
    <MediaQuery query="(min-width: 601px) and (max-width: 1280px)" let:matches>
        {#if matches}
        <div class="root tablet">
            <div class="Heroimg">
                <img class="description" src={mid} alt="Description" />
                <div class="Herotxt">
                    <h1><img class="logoh1" src={Logoh1} alt="logop1" /></h1>
                    <p class="mdc-typography--subtitle1">
                        Scoperto nel 1970,il giacimento di titanio prensente nel Parco del
                        Beigua <br /> presenta un'enorme minaccia per l'ambiente e per gli
                        abitanti della zona. <br />
                        E' in corso da anni una battaglia legale per un'eventuale apertura
                        <br />
                        della miniera che causerebbe gravi problemi alla popolazione e<br />
                        alla biodiversita presenti nella zona.
                    </p>
                </div>
            </div>
        </div>
        {/if}
    </MediaQuery>

    <!-- Mobile -->
    <MediaQuery query="(min-width: 361px) and (max-width: 600px)" let:matches>
        {#if matches}
        <div class="root mobile">
            <div class="Heroimg">
                <img class="description" src={mid} alt="Description" />
                <div class="Herotxt">
                    <h1><img class="logoh1" src={Logoh1} alt="logop1" /></h1>
                    <p class="mdc-typography--subtitle1">
                        Scoperto nel 1970,il giacimento di titanio prensente nel Parco del
                        Beigua <br /> presenta un'enorme minaccia per l'ambiente e per gli
                        abitanti della zona. <br />
                        E' in corso da anni una battaglia legale per un'eventuale apertura
                        <br />
                        della miniera che causerebbe gravi problemi alla popolazione e<br />
                        alla biodiversita presenti nella zona.
                    </p>
                </div>
            </div>
        </div>
        {/if}
    </MediaQuery> 

    <!-- Foldable -->
    <MediaQuery query="(max-width: 360px)" let:matches>
        {#if matches}
        <div class="root foldable">
            <div class="Heroimg">
                <img class="description" src={mid} alt="Description" />
                <div class="Herotxt">
                    <h1><img class="logoh1" src={Logoh1} alt="logop1" /></h1>
                    <p class="mdc-typography--subtitle1">
                        Scoperto nel 1970,il giacimento di titanio prensente nel Parco del
                        Beigua <br /> presenta un'enorme minaccia per l'ambiente e per gli
                        abitanti della zona. <br />
                        E' in corso da anni una battaglia legale per un'eventuale apertura
                        <br />
                        della miniera che causerebbe gravi problemi alla popolazione e<br />
                        alla biodiversita presenti nella zona.
                    </p>
                </div>
            </div>
        </div>
        {/if}
    </MediaQuery> 

</main>



<style>
    .Heroimg {
        width: 100%;
        margin: 0px;
        height: 40%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
    }
    .logoh1 {
        width: 235px;
    }

    .Herotxt {
        text-align: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        width: 80%;
    }
    .Herotxt,p {
        font-family: "Roboto Light", sans-serif;
        font-size: medium;
    }

    .description {
        width: 100%;
        height: 40%;
        margin: 0px;
        filter: brightness(40%);
    }

    /* Desktop */
    .desktop p{
        font-size: 2em;
        line-height: 1.5em;
    }

    .desktop .Heroimg {
        width: 100%;
        height: 900px;
    }
        
    .desktop  .description{
        width: 100%;
        height: 900px;
        background: transparent no-repeat center;
        background-size: cover;
        position: relative;
        object-fit: cover;
    }

    /* Tablet */
    .tablet .logoh1{
        width: 190px;
    }

    .tablet p{
        font-size: 1.8em;
        line-height: 1.5em;
    }

    .tablet .Heroimg {
        width: 100%;
        height: 900px;
    }
        
    .tablet  .description{
        width: 100%;
        height: 900px;
        background: transparent no-repeat center;
        background-size: cover;
        position: relative;
        object-fit: cover;
    }

    /* Mobile */
    .mobile p{
        font-size: 1.5em;
        line-height: 1.5em;
    }

    .mobile .Heroimg {
        width: 100%;
        height: 900px;
    }
        
    .mobile .description{
        width: 100%;
        height: 900px;
        background: transparent no-repeat center;
        background-size: cover;
        position: relative;
        object-fit: cover;
    }

    /* Foldable */
    .foldable p{
        font-size: 1em;
        line-height: 1.5em;
    }

    .foldable .logoh1{
        width: 90px;
    }

    .foldable .Heroimg {
        width: 100%;
        height: 600px;
    }

    .foldable .description{
        width: 100%;
        height: 600px;
        background: transparent no-repeat center;
        background-size: cover;
        position: relative;
        object-fit: cover;
    }

</style>
