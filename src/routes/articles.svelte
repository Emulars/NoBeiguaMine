<svelte:options accessors={true} />

<script lang="ts">
	import MediaQuery from "$lib/Utility/MediaQuery.svelte";
	/* Button */
	import { createEventDispatcher } from "svelte";
	let shown = false;
	let dispatch = createEventDispatcher();
	export function show() {
		shown = !shown;
		dispatch("show", shown);
	}
	import Card_1 from "$lib/components/card_articles/Card_1.svelte";
	import Card_2 from "$lib/components/card_articles/Card_2.svelte";
	import Card_3 from "$lib/components/card_articles/Card_3.svelte";
	import Card_4 from "$lib/components/card_articles/Card_4.svelte";
	import Card_5 from "$lib/components/card_articles/Card_5.svelte";
	import Card_6 from "$lib/components/card_articles/Card_6.svelte";
	import Card_7 from "$lib/components/card_articles/Card_7.svelte";
	import Card_8 from "$lib/components/card_articles/Card_8.svelte";
	import Card_9 from "$lib/components/card_articles/Card_9.svelte";
	import Card_10 from "$lib/components/card_articles/Card_10.svelte";
</script>

<main>
	<div class="mdc-typography--headline3 title">- Articoli -</div>

	<!-- Desktop -->
	<MediaQuery query="(min-width: 992px)" let:matches>
		{#if matches}
			<div class="root desktop">
				<div class="cards">
					<!--CARDS-->
					<div class="perfect-card">
						<Card_1 />
					</div>
					<div class="perfect-card">
						<Card_2 />
					</div>
					<div class="perfect-card">
						<Card_3 />
					</div>
				</div>

				<div class="cards">
					<!--CARDS-->
					<div class="perfect-card">
						<Card_4 />
					</div>
					<div class="perfect-card">
						<Card_5 />
					</div>
					<div class="perfect-card">
						<Card_6 />
					</div>
				</div>

				<div class="cards">
					<!--CARDS-->
					<div class="perfect-card">
						<Card_7 />
					</div>
					<div class="perfect-card">
						<Card_8 />
					</div>
					<div class="perfect-card">
						<Card_9 />
					</div>
				</div>

				{#if !shown}
					<div class="more_articles">
						<div class="buttom">
							<a on:click={show} class="text_b" href="/articles"
								>Mostra altri Articoli</a
							>
						</div>
					</div>
				{/if}

				{#if shown}
					<div class="cards">
						<div class="perfect-card"></div>
						<div class="perfect-card">
							<Card_10 />
						</div >
						<div class="perfect-card"></div>
					</div>
				{/if}
			</div>
		{/if}
	</MediaQuery>

	<!-- Tablet -->
	<MediaQuery query="(min-width: 768px) and (max-width: 991px)" let:matches>
		{#if matches}
			<div class="root tablet">
				<div class="cards">
					<!--CARDS-->
					<div class="perfect-card">
						<Card_1 />
					</div>
					<div class="perfect-card">
						<Card_2 />
					</div>
				</div>

				<div class="cards">
					<!--CARDS-->
					<div class="perfect-card">
						<Card_3 />
					</div>
					<div class="perfect-card">
						<Card_4 />
					</div>
				</div>

				<div class="cards">
					<!--CARDS-->
					<div class="perfect-card">
						<Card_5 />
					</div>
					<div class="perfect-card">
						<Card_6 />
					</div>
				</div>

				<div class="cards">
					<!--CARDS-->
					<div class="perfect-card">
						<Card_7 />
					</div>
					<div class="perfect-card">
						<Card_8 />
					</div>
				</div>

				<div class="cards">
					<!--CARDS-->
					<div class="perfect-card">
						<Card_9 />
					</div>
					<div class="perfect-card">
						<Card_10 />
					</div>
				</div>

				<div class="spacer" />
			</div>
		{/if}
	</MediaQuery>

	<MediaQuery query="(max-width: 767px)" let:matches>
		{#if matches}
			<div class="root mobile">
				<div class="cards">
					<!--CARDS-->
						<Card_1 />
						<Card_2 />
						<Card_3 />
						<Card_4 />
						<Card_5 />
						<Card_6 />
						<Card_7 />
						<Card_8 />
						<Card_9 />
						<Card_10 />
				</div>
				<div class="spacer" />
			</div>
		{/if}
	</MediaQuery>
</main>

<style>
	.title {
		text-align: center;
		font-family: "Oswald", sans-serif;
		margin-top: 120px;
		margin-bottom: 30px;
		text-decoration: underline;
		text-underline-offset: 0.5em;
		color: #39aea9;
		font-weight: 400;
		text-transform: uppercase;
		letter-spacing: 3px;
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

	/* Desktop */
	.desktop .cards {
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		margin-left: 100px;
		margin-right: 100px;
	}

	.tablet .cards {
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		margin-left: 10px;
		margin-right: 10px;
	}

	.mobile .cards {
		display: flex;
		flex-direction: column;
		margin: 10px;
		justify-content: space-evenly;
	}

	.spacer {
		margin-top: 15px;
		margin-bottom: 30px;
	}

	.perfect-card{
		width: 1000px;
		margin: 0 0 0 0;
	}
</style>
