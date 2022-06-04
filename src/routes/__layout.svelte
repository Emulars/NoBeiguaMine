
<script lang="ts">
	import Button from "@smui/button";
	import type { TopAppBarComponentDev } from "@smui/top-app-bar";
	import TopAppBar, { Row, Section, Title, AutoAdjust } from "@smui/top-app-bar";
	import { Label, Icon} from "@smui/common";
	let topAppBar: TopAppBarComponentDev;

	// Scroll bar


	// Image
	import Logo from "../images/1.png";

</script>


<TopAppBar bind:this={topAppBar} variant="standard" fill-color="#000">
	<Row>
		<!-- LOGO -->
		<Section>
			<a href="http://localhost:3000/"><img class="LogoP" src={Logo} alt="My logo"/></a>
		</Section>

		<!-- MENU -->
		<Section align="end" toolbar>
			<Button aria-label="" href="/articles">
				<span>Articoli</span>
			</Button>
			<Button aria-label="" href="/timeline">
				<span>Cronistoria</span>
			</Button>
		</Section>
	</Row>
</TopAppBar>

<AutoAdjust {topAppBar}>
	<div class="container">
		<slot />
	</div>
</AutoAdjust>

<div class="footer">
	<p>Footer</p>
</div>

<style>
	.LogoP {
		width: 10vh;
		align-items: center;
	}

	.footer {
		position: absolute;
  		bottom: 0;
  		width: 100%;
  		height: 50px;
		margin-top: -200px;
		background-color: #557B83;
		color: white;
		text-align: center;
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

