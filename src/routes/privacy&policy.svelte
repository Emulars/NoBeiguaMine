<script>
    import MediaQuery from "$lib/Utility/MediaQuery.svelte";
</script>

<main>
    <!-- Desktop -->
    <MediaQuery query="(min-width: 1281px)" let:matches>
        {#if matches}
            <div class="root desktop">
                
            </div>
        {/if}
    </MediaQuery>

    <!-- Tablet -->
    <MediaQuery query="(min-width: 601px) and (max-width: 1280px)" let:matches>
        {#if matches}
            <div class="root tablet">
                
            </div>
        {/if}
    </MediaQuery>

    <!-- Mobile -->
    <MediaQuery query="(max-width: 600px)" let:matches>
        {#if matches}
            <div class="root mobile">
                
            </div>
        {/if}
    </MediaQuery>
</main>

<style>
    .root {
        display: flex;
        /*background-color: #ededed;*/
    }

</style>