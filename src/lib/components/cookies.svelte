<script>
    import MediaQuery from "$lib/Utility/MediaQuery.svelte";
</script>


<main>
    <MediaQuery query="(min-width: 541px)" let:matches>
        {#if matches}
            <a class="link" href="/privacy&policy">
                <div class="content">
                    <p class="text">Informativa sui contenuti | Informativa sulla Privacy | Informativa sui Cookies | credit*</p>
                </div>
            </a>
        {/if}
    </MediaQuery>

    <MediaQuery query="(max-width: 540px)" let:matches>
        {#if matches}
            <a class="link" href="/privacy&policy">
                <div class="content">
                    <p class="text">Informativa sui contenuti | Informativa sulla Privacy | Informativa sui Cookies | credit*</p>
                </div>
            </a>
        {/if}
    </MediaQuery>    
</main>

<style>
    .content{
        width: 100%;
        height: 20px;
        font-size: 15px;
        text-align: center;
    }

    .text{
        margin-top: 0;
        margin-bottom: 0;
        text-align: center;
        color: white;
        padding-top: 5px;
        padding-bottom: 5px;
        background-color: #557B83;
        font-family: "Roboto Light", sans-serif;
    }

    .link{
        text-decoration: none;
    }
</style>