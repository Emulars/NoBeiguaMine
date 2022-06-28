<script>
	import Head from "$lib/components/headArticle.svelte";
	import MediaQuery from "$lib/Utility/MediaQuery.svelte";
	import Hero from "../lib/components/head.svelte";
</script>

<main>

	<div class="head">
		<Hero/>
	</div>

    <!-- Desktop -->
	<MediaQuery query="(min-width: 1281px)" let:matches>
        {#if matches}
		<div class="root">
		
		</div>
		{/if}
	</MediaQuery> 



	<MediaQuery query="(max-width: 1280px)" let:matches>
        {#if matches}
        <div class="root tablet">
			

		
		</div>
        {/if}
    </MediaQuery> 

</main>
  
  <style>
	.root {
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		display: flex;
		flex-direction: row;
	}
	

	.tablet .column-2{
		float: none;
		width: 100%;
	}

	.tablet .column-1{

		float: none; 	
		/* width: 100%; */
	}

	.column-1 {
		float: left;
		width: 60%;
		margin: 0 0 0 5%; 
	}

	.column-2 {
		float: left;
		width: 30%;
		margin: 0 5% 0 0; /* in alto | destra | in basso | sinistra */
	} 

    * :global(.card-media-16x9) {
        background-image: url(../../../images/beiglarge.jpg);
        background-size: auto;
        filter: brightness(80%);
    }
	.title {
        color: #39aea9;
		font-family:'Oswald',sans-serif;
		margin: 0 0 15px 0;
    }

	.text{
		font-family:'Roboto',sans-serif;
		line-height: 1.5em;
	}

    * :global(.card-media-16x9) {
      background-image: url(../../../images/beiglarge.jpg);
    }

	.article{
		margin: 10% 0 0 10%;
	}

	
  
  </style>
 