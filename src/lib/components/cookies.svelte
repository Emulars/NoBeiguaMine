<script>
    import MediaQuery from "$lib/Utility/MediaQuery.svelte";
</script>


<main>
    <MediaQuery query="(min-width: 541px)" let:matches>
        {#if matches}
            <div class="content">
                <a class="link" href="/privacy&policy">Informativa sulla Privacy | </a>
                <a class="link" href="/cookie_policy">Informativa sui Cookies</a>
            </div>
        {/if}
    </MediaQuery>

    <MediaQuery query="(max-width: 540px)" let:matches>
        {#if matches}
            <div class="content">
                <a class="link" href="/privacy&policy">Informativa sulla Privacy | </a>
                <a class="link" href="/cookie_policy">Informativa sui Cookies</a>
            </div>
        {/if}
    </MediaQuery>    
</main>

<style>
    .content{
        width: 100%;
        height: 20px;
        font-size: 15px;
        text-align: center;
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
        display: inline;
        color: white;
    }
</style>