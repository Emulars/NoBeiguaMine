<script lang="ts">
	import Button from "@smui/button";
	import MediaQuery from "$lib/Utility/MediaQuery.svelte";
	import Card from "../lib/components/card_articles/card.svelte";
	/* Button */
	import { createEventDispatcher } from 'svelte';
    let shown = false;
	let dispatch = createEventDispatcher();
	export function show() {
		shown = !shown;
		dispatch('show', shown);
	}

</script>

<svelte:options accessors={true}/>


<main>
	<!-- Desktop -->
	<MediaQuery query="(min-width: 992px)" let:matches>
        {#if matches}
        <div class="root desktop">
            <div class="title">
				<div class="mdc-typography--headline3">- Articoli -</div>
			</div>
		
			<div class="cards">
				<!--CARDS-->
				<Card />
				<Card/>
				<Card />
			</div>
		
			<div class="cards">
				<!--CARDS-->
				<Card />
				<Card />
				<Card />
			</div>
		
			<div class="cards">
				<!--CARDS-->
				<Card />
				<Card />
				<Card />
			</div>
		
			{#if !shown}
			<div class="more_articles">
				<div class="buttom">
					<!--<button on:click={show}>Mostra altri Articoli</button>-->
					<a on:click={show} class="text_b" href="/articles">Mostra altri Articoli</a>
				</div>
			</div>
			{/if}
		
			{#if shown}
				<div class="cards">
					<Card />
			</div> 
			{/if}
        </div>
        {/if}
    </MediaQuery>

	<!-- Tablet -->
    <MediaQuery query="(min-width: 768px) and (max-width: 991px)" let:matches>
        {#if matches}
        <div class="root tablet">
            <div class="title">
				<div class="mdc-typography--headline3">- Articoli -</div>
			</div>
		
			<div class="cards">
				<!--CARDS-->
				<Card />
				<Card/>
			</div>
		
			<div class="cards">
				<!--CARDS-->
				<Card />
				<Card/>
			</div>

			<div class="cards">
				<!--CARDS-->
				<Card />
				<Card/>
			</div>

			<div class="cards">
				<!--CARDS-->
				<Card />
				<Card/>
			</div>

			<div class="cards">
				<!--CARDS-->
				<Card />
				<Card/>
			</div>

			<div class="spacer"/>
        </div>
        {/if}
    </MediaQuery>

    <MediaQuery query="(max-width: 767px)" let:matches>
        {#if matches}
        <div class="root mobile">
			<div class="title">
				<div class="mdc-typography--headline3">- Articoli -</div>
			</div>
		
			<div class="cards">
				<!--CARDS-->
				<Card />
				<Card/>
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		
			<div class="spacer"/>
        </div>
        {/if}
    </MediaQuery> 
</main>


<style>
	.title {
		text-align: center;
		margin-top: 125px;
		margin-bottom: 30px;
	}

	.more_articles {
        text-align: center;
        padding-top: 15px;
        padding-bottom: 30px;
    }
    .buttom {
        background-color: #E5EFC1;
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

	.text_b{
        font-family:'Oswald',sans-serif;
        text-decoration: none;
        color: black;
    }
    .text_b,a:visited{
        color:black;
    }

	/* Desktop */
	.desktop .cards{
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		align-items: center;
	}

	.tablet .cards{
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		margin-left: 10px;
		margin-right: 10px;
	}

	.spacer{
		margin-top: 15px;
		margin-bottom: 30px;
	}

	.mobile .cards{
		display: flex;
		flex-direction: column;
		margin: 10px;
		justify-content: space-evenly;
	}
</style>
