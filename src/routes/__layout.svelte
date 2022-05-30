<script lang="ts">
	import Button from "@smui/button";
	import type { TopAppBarComponentDev } from "@smui/top-app-bar";
	import TopAppBar, {
		Row,
		Section,
		Title,
		AutoAdjust,
	} from "@smui/top-app-bar";
	import { Label, Icon } from "@smui/common";
	import Logo from "C://Users/Giorg/Desktop/WEBDESIGN/1.png";
	import Switch2 from "./switch.svelte";

	let topAppBar: TopAppBarComponentDev;

	let lightTheme =
		typeof window === "undefined" ||
		window.matchMedia("(prefers-color-scheme: -light)").matches;
	function switchTheme() {
		lightTheme = !lightTheme;
		let themeLink = document.head.querySelector<HTMLLinkElement>("#theme");
		if (!themeLink) {
			themeLink = document.createElement("link");
			themeLink.rel = "stylesheet";
			themeLink.id = "theme";
		}
		themeLink.href = `/smui${lightTheme ? "" : "-dark"}.css`;
		document.head
			.querySelector<HTMLLinkElement>('link[href$="/smui-dark.css"]')
			?.insertAdjacentElement("afterend", themeLink);
	}
</script>

<div>
	<TopAppBar bind:this={topAppBar} variant="standard">
		<Row>
			<Section>
				<!-- mettere Logo -->
				<img class="LogoP" src={Logo} alt="My logo" />
			</Section>
			<Section align="end" toolbar>
				<Button aria-label="" href="http://localhost:3000/articoli/">
					<!-- mettere le bottoni delle pagine -->

					<span>Articoli</span>
				</Button>
				<Button aria-label="" href="http://localhost:3000/cronostorie/">
					<!-- mettere le bottoni delle pagine -->

					<span>Cronostorie</span>
				</Button>
				<Button>
					<Switch2 on:click={switchTheme}>
						<Label>{!lightTheme ? "Lights off" : "Lights on"}</Label>
					</Switch2>
				</Button>
			</Section>
		</Row>
	</TopAppBar>
</div>

<AutoAdjust {topAppBar}>
	<div class="container">
		<slot />
	</div>
</AutoAdjust>

<style>
	.LogoP {
		width: 10vh;
		align-items: center;
	}

	/* Extra small devices (phones, 600px and down) */
	@media only screen and (max-width: 600px) {
		::selection:global() {
			display: -webkit-flex;
		}
	}

	/* Small devices (portrait tablets and large phones, 600px and up) */
	@media only screen and (min-width: 600px) {
		::selection:global() {
			display: -webkit-flex;
		}
	}

	/* Medium devices (landscape tablets, 768px and up) */
	@media only screen and (min-width: 768px) {
		::selection:global() {
			display: -webkit-flex;
		}
	}

	/* Large devices (laptops/desktops, 992px and up) */
	@media only screen and (min-width: 992px) {
	}

	/* Extra large devices (large laptops and desktops, 1200px and up) */
	@media only screen and (min-width: 1200px) {
	}
</style>
