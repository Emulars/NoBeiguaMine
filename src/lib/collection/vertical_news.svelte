<script>
    import Card, {
        Content,
        PrimaryAction,
        Media,
        MediaContent,
        Actions,
        ActionButtons,
        ActionIcons,
    } from "@smui/card";
    import MediaQuery from "$lib/Utility/MediaQuery.svelte";
  
    const title = "PARCO DEL BEIGUA: SCOPRIAMO INSIEME LA RISERVA NATURALE CHE SI AFFACCIA SULLA COSTA LIGURE";
    const subTitle = "09 Maggio 2022";

    function clickinner1() {
        location.href = "../../Art/Article_1";
    }

    function clickinner2() {
        location.href = "../../Art/Article_2";
    }

    function clickinner3() {
        location.href = "../../Art/Article_3";
    }

</script>

<main>
    <!-- Desktop -->
    <MediaQuery query="(min-width: 1281px)" let:matches>
        {#if matches}
            <div class="root desktop">
                <div
                    class="mdc-typography--headline3 News"
                    style="text-align:center;  padding-bottom:35px; font-family:'Oswald Regular',sans-serif;"
                >
                    <div
                        class="mdc-typography--headline3 title"
                        style="	text-decoration: underline;
                                text-underline-offset: 0.5em;
                                color: #39aea9;"
                    >
                        - Ultime Notizie -
                    </div>
                </div>
                <div class="cards" style="align-items: center;">
                    <div class="card-container">
                        <Card style="min-width: 300px;">
                            <PrimaryAction on:click={() => clickinner1()}>
                                <Media
                                    class="card-media-squaren1"
                                    aspectRatio="square"
                                />
                                <Content class="mdc-typography--body2">
                                    <h3 style="margin: 0;">
                                        PARCO DEL BEIGUA: SCOPRIAMO INSIEME LA RISERVA NATURALE CHE SI AFFACCIA SULLA COSTA LIGURE
                                    </h3>
                                    <span
                                        class="date"
                                        style="background-color: #A2D5AB; margin:0; width:120px;color:white ;"
                                        >09 Maggio 2022</span
                                    >
                                </Content>
                            </PrimaryAction>
                        </Card>
                    </div>
                    <div class="card-container">
                        <Card style="min-width: 300px;">
                            <PrimaryAction on:click={() => clickinner2()}>
                                <Media
                                    class="card-media-squaren2"
                                    aspectRatio="square"
                                />
                                <Content class="mdc-typography--body2">
                                    <h3 style="margin: 0;">
                                        MINIERA DI TITANIO NEL BEIGUA: L’ALTRA FACCIA DELLA SPLENDIDA RISERVA NATURALE LIGURE
                                    </h3>
                                    <span
                                        class="date"
                                        style="background-color: #A2D5AB; margin:0; width:120px;color:white ;"
                                        >03 Maggio 2022</span
                                    >
                                </Content>
                            </PrimaryAction>
                        </Card>
                    </div>
                    <div class="card-container">
                        <Card style="min-width: 300px;">
                            <PrimaryAction on:click={() => clickinner3()}>
                                <Media
                                    class="card-media-squaren3"
                                    aspectRatio="square"
                                />
                                <Content class="mdc-typography--body2">
                                    <h3 style="margin: 0;">
                                        GIACIMENTO DI PIAMPALUDO, LA POPOLAZIONE INSORGE: 25.000 FIRME PER OPPORSI ALL’APERTURA
                                    </h3>
                                    <span
                                        class="date"
                                        style="background-color: #A2D5AB; margin:0; width:120px;color:white ;"
                                        >27 Aprile 2022</span
                                    >
                                </Content>
                            </PrimaryAction>
                        </Card>
                    </div>
                    <div class="more_articles">
                        <div class="buttom">
                            <a class="text_b" href="/articles">MOSTRA ALTRI</a>
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
                <div class="laycard">
                    <!-- Cards -->
                    <div
                        class="mdc-typography--headline3 News"
                        style="text-align:center; padding-top:30px; padding-bottom:15px; font-family:'Oswald Regular',sans-serif;"
                    >
                        <div
                            class="mdc-typography--headline3 title"
                            style="	text-decoration: underline;
                        text-underline-offset: 0.5em;
                        color: #39aea9;"
                        >
                            - Ultime Notizie -
                        </div>
                    </div>
                    <div class="cards" style="align-items: center;">
                        <div class="card-container">
                            <Card style="min-width: 300px;">
                                <PrimaryAction on:click={() => clickinner1()}>
                                    <Media
                                        class="card-media-squaren1"
                                        aspectRatio="square"
                                    />
                                    <Content class="mdc-typography--body2">
                                        <h3 style="margin: 0;">
                                            PARCO DEL BEIGUA: SCOPRIAMO INSIEME LA RISERVA NATURALE CHE SI AFFACCIA SULLA COSTA LIGURE
                                        </h3>
                                        <span
                                            class="date"
                                            style="background-color: #A2D5AB; margin:0; width:120px;color:white ;"
                                            >09 Maggio 2022</span
                                        >
                                    </Content>
                                </PrimaryAction>
                            </Card>
                        </div>
                        <div class="card-container">
                            <Card style="min-width: 300px;">
                                <PrimaryAction on:click={() => clickinner2()}>
                                    <Media
                                        class="card-media-squaren2"
                                        aspectRatio="square"
                                    />
                                    <Content class="mdc-typography--body2">
                                        <h3 style="margin: 0;">
                                            MINIERA DI TITANIO NEL BEIGUA: L’ALTRA FACCIA DELLA SPLENDIDA RISERVA NATURALE LIGURE
                                        </h3>
                                        <span
                                            class="date"
                                            style="background-color: #A2D5AB; margin:0; width:120px;color:white ;"
                                            >03 Maggio 2022</span
                                        >
                                    </Content>
                                </PrimaryAction>
                            </Card>
                        </div>
                        <div class="card-container">
                            <Card style="min-width: 300px;">
                                <PrimaryAction on:click={() => clickinner3()}>
                                    <Media
                                        class="card-media-squaren3"
                                        aspectRatio="square"
                                    />
                                    <Content class="mdc-typography--body2">
                                        <h3 style="margin: 0;">
                                            GIACIMENTO DI PIAMPALUDO, LA POPOLAZIONE INSORGE: 25.000 FIRME PER OPPORSI ALL’APERTURA
                                        </h3>
                                        <span
                                            class="date"
                                            style="background-color: #A2D5AB; margin:0; width:120px;color:white ;"
                                            >27 Aprile 2022</span
                                        >
                                    </Content>
                                </PrimaryAction>
                            </Card>
                        </div>
                    </div>
                    <div class="more_articles">
                        <div class="buttom">
                            <a class="text_b" href="/articles">MOSTRA ALTRI</a>
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
                <div class="laycard">
                    <!-- Cards -->
                    <div
                        class="mdc-typography--headline3 News"
                        style="text-align:center; padding-top:30px; padding-bottom:15px; font-family:'Oswald Regular',sans-serif;"
                    >
                        <div
                            class="mdc-typography--headline3 title"
                            style="font-size:35px;	text-decoration: underline;
                        text-underline-offset: 0.5em;
                        color: #39aea9;"
                        >
                            - Ultime Notizie -
                        </div>
                    </div>
                    <div class="cards" style="align-items: center;">
                        <div class="card-container">
                            <Card >
                                <PrimaryAction on:click={() => clickinner1()}>
                                    <Media
                                        class="card-media-squaren1"
                                        aspectRatio="square"
                                    />
                                    <Content class="mdc-typography--body2">
                                        <h3 style="margin: 0;">
                                            PARCO DEL BEIGUA: SCOPRIAMO INSIEME LA RISERVA NATURALE CHE SI AFFACCIA SULLA COSTA LIGURE
                                        </h3>
                                        <span
                                            class="date"
                                            style="background-color: #A2D5AB; margin:0; width:120px;color:white ;"
                                            >09 Maggio 2022</span
                                        >
                                    </Content>
                                </PrimaryAction>
                            </Card>
                        </div>
                        <div class="card-container">
                            <Card >
                                <PrimaryAction on:click={() => clickinner2()}>
                                    <Media
                                        class="card-media-squaren2"
                                        aspectRatio="square"
                                    />
                                    <Content class="mdc-typography--body2">
                                        <h3 style="margin: 0;">
                                            MINIERA DI TITANIO NEL BEIGUA: L’ALTRA FACCIA DELLA SPLENDIDA RISERVA NATURALE LIGURE
                                        </h3>
                                        <span
                                            class="date"
                                            style="background-color: #A2D5AB; margin:0; width:120px;color:white ;"
                                            >03 Maggio 2022</span
                                        >
                                    </Content>
                                </PrimaryAction>
                            </Card>
                        </div>
                        <div class="card-container">
                            <Card >
                                <PrimaryAction on:click={() => clickinner3()}>
                                    <Media
                                        class="card-media-squaren3"
                                        aspectRatio="square"
                                    />
                                    <Content class="mdc-typography--body2">
                                        <h3 style="margin: 0;">
                                            GIACIMENTO DI PIAMPALUDO, LA POPOLAZIONE INSORGE: 25.000 FIRME PER OPPORSI ALL’APERTURA
                                        </h3>
                                        <span
                                            class="date"
                                            style="background-color: #A2D5AB; margin:0; width:120px;color:white ;"
                                            >27 Aprile 2022</span
                                        >
                                    </Content>
                                </PrimaryAction>
                            </Card>
                        </div>
                    </div>
                    <div class="more_articles">
                        <div class="buttom">
                            <a class="text_b" href="/articles">MOSTRA ALTRI</a>
                        </div>
                    </div>
                </div>
            </div>
        {/if}
    </MediaQuery>
</main>

<style>
    .laycard {
        width: 100%;
        justify-content: center;
    }
    .cards {
        display: flex;
        flex-direction: column;
        justify-content: center;
        border: 0ch;
    }
    .more_articles {
        text-align: center;
        padding-top: 15px;
        padding-bottom: 30px;
    }
    .buttom {
        background-color: #e5efc1;
        border: none;
        color: rgb(0, 0, 0);
        padding: 10px 20px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 2px 1px;
        cursor: pointer;
        padding-bottom: 15px;
    }
    .text_b {
        font-family: "Oswald", sans-serif;
        text-decoration: none;
        color: black;
    }
    .text_b,
    a:visited {
        color: black;
    }

    .title {
        margin-top: 30px;
        margin-bottom: 15px;
        font-family: "Oswald", sans-serif;
    }

    .desktop .cards {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        /*width: 50%;
        height: 50%;*/
    }
    .desktop .card-container{
        width: 350px;
    }

    .tablet .cards {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }
    .tablet .card-container{
        width: 400px;
    }

    .mobile .cards {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }
    .mobile .card-container{
        width: 250px;
    }
    * :global(.card-media-squaren1) {
        background-image: url(../../images/card/card_1.jpg);
    }
    * :global(.card-media-squaren2) {
        background-image: url(../../images/card/card_2.jpg);
    }
    * :global(.card-media-squaren3) {
        background-image: url(../../images/card/card_3.jpg);
    }
    .card-container {
        margin: 10px;
        width: 300px;
    }
</style>
