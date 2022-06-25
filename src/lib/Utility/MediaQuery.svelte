<script>
    import { onMount } from "svelte";

    export let query;

    let mql;
    let mqlListener;
    let wasMounted = false;
    let matches = false;

    onMount(() => {
        wasMounted = true;
        return () => {
            removeActiveListener();
        };
    });

    $: {
        if (wasMounted) {
            removeActiveListener();
            addNewListener(query);
        }
    }

    function addNewListener(query) {
        mql = window.matchMedia(query);
        mqlListener = v => matches = v.matches;
        mql.addListener(mqlListener);
        matches = mql.matches;
    }

    function removeActiveListener() {
        if (mql && mqlListener) {
            mql.removeListener(mqlListener);
        }
    }
</script>

<slot {matches} />

<!-- Model to use in each components 

   <MediaQuery query="(min-width: 1281px)" let:matches>
        {#if matches}
        <div class="root desktop">
            
        </div>
        {/if}
    </MediaQuery>

    <MediaQuery query="(min-width: 481px) and (max-width: 1280px)" let:matches>
        {#if matches}
        <div class="root tablet">
            tablet
        </div>
        {/if}
    </MediaQuery>

    <MediaQuery query="(max-width: 480px)" let:matches>
        {#if matches}
        <div class="root mobile">
        
        </div>
        {/if}
    </MediaQuery> 


    <style>
	.root {
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		display: flex;
	}
	
	.desktop {
		background-color: white;
	}

	.tablet {
		background-color: blue;
	}

	.mobile {
		background-color: gold;
	}

</style>
-->