<script  context="module">
    import mid from "../../images/2.jpg";
    import MediaQuery from "$lib/Utility/MediaQuery.svelte";
    import { writable } from 'svelte/store'
        export const title = writable('');
        export const image = writable('');
</script>

<main>
    <!-- Dekstop -->
    <MediaQuery query="(min-width: 1281px)" let:matches>
        {#if matches}
        <div class="root desktop">
            <div class="Heroimg">
                <img class="description" src={$image} alt="Description" />
                <div class="Herotxt">
                    <p class="mdc-typography--subtitle1">
                        {$title}
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
                <img class="description" src={$image} alt="Description" />
                <div class="Herotxt">
                    
                    <p class="mdc-typography--subtitle1">
                        {$title}
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
                <img class="description" src={$image} alt="Description" />
                <div class="Herotxt">
                    
                    <p class="mdc-typography--subtitle1">
                        {$title}
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
                <img class="description" src={$image} alt="Description" />
                <div class="Herotxt">
                    
                    <p class="mdc-typography--subtitle1">
                        {$title}
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
        font-family: "Oswald", sans-serif;
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
        height: 400px;
        background-image : url({base});
    }
        
    .desktop  .description{
        width: 100%;
        height: 400px;
        background: transparent no-repeat center;
        background-size: cover;
        position: relative;
        object-fit: cover;
        background-image : url({base});
    }

    /* Tablet */
    
    .tablet p{
        font-size: 1.8em;
        line-height: 1.5em;
    }

    .tablet .Heroimg {
        width: 100%;
        height: 500px;
    }
        
    .tablet  .description{
        width: 100%;
        height: 500px;
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

    .foldable {
        width: 100%;
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
