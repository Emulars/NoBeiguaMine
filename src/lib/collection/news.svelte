<script>
    import MediaQuery from "$lib/Utility/MediaQuery.svelte";
    import Card_3 from "../components/card_articles/Card_3.svelte";
    import Card_2 from "../components/card_articles/Card_2.svelte";
    import Card_1 from "../components/card_articles/Card_1.svelte";
</script>

<main>
    <!-- Desktop -->
    <MediaQuery query="(min-width: 1281px)" let:matches>
        {#if matches}
            <div class="root desktop">
                <div class="laycard">
                    <!-- Cards -->
                    <div
                        class="mdc-typography--headline3 News"
                        style="text-align:center; padding-top:30px; padding-bottom:15px; font-family:'Oswald Regular',sans-serif;"
                    >
                        <div class="mdc-typography--headline3 title">
                            - Ultime Notizie -
                        </div>
                    </div>
                    <div class="cards">
                        <!--CARDS-->
                        <div style="width: 576px;">
                            <Card_1 />
                        </div>
                        <div style="width: 576px;">
                            <Card_2 />
                        </div>
                        <div style="width: 576px;">
                            <Card_3 />
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
                        <div class="mdc-typography--headline3 title">
                            - Ultime Notizie -
                        </div>
                    </div>
                    <div class="cards">
                        <!--CARDS-->
                        <div style="width: 576px;">
                            <Card_1 />
                        </div>
                        <div style="width: 576px;">
                            <Card_2 />
                        </div>
                        <div style="width: 576px;">
                            <Card_3 />
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
                        <div class="mdc-typography--headline4 title">
                            - Ultime Notizie -
                        </div>
                    </div>
                    <div class="cards">
                        <!--CARDS-->
                        <div style="width: 276px;">
                            <Card_1 />
                        </div>
                        <div style="width: 276px;">
                            <Card_2 />
                        </div>
                        <div style="width: 276px;">
                            <Card_3 />
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
        flex-direction: row;
        justify-content: space-evenly;
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
        text-transform: uppercase;
		letter-spacing: 3px;
    }
    .text_b,
    a:visited {
        color: black;
    }

    .title {
        margin-top: 30px;
        margin-bottom: 15px;
        font-family: "Oswald", sans-serif;
        font-weight: 400;
        color:#39aea9;
        text-transform: uppercase;
        letter-spacing: 3px;
    }

    .desktop .cards {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    }

    .tablet .cards {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    }

    .mobile .cards {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
    }
</style>
