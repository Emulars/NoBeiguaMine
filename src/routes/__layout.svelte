
<script lang="ts">
	import Button from "@smui/button";
	import type { TopAppBarComponentDev } from "@smui/top-app-bar";
	import TopAppBar, { Row, Section, Title, AutoAdjust } from "@smui/top-app-bar";
	// import { Label, Icon} from "@smui/common";
	let topAppBar: TopAppBarComponentDev;

	// Scroll bar

	//For download icon
	//https://materialdesignicons.com/

	// Image
	import Logo from "../images/LBlack.png";
	import Logofooter from "../images/LWhite.png";
	import Map from "../images/map.png";
	import Phone from "../images/phone.png";
	import At from "../images/at.png";
	import mont3 from "../images/3.jpg";
	import mont4 from "../images/4.jpg";

</script>


<TopAppBar bind:this={topAppBar} variant="standard" fill-color="#0000	">
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
	<span class="block">
		<div class="disposition">
			<img class="logoFooter" src={Logofooter} alt="My logo"/>
			<div class="iconf"><img style="height: 20px; width:20px; margin-right:10px;" src={Map} alt="address"/><p>Indirizzo sede amministrativa</p></div>
			<div class="iconf"><img style="height: 20px; width:20px; margin-right:10px;" src={Phone} alt="number"/><p>(+39)1111111111</p></div>
			<div class="iconf"><img style="height: 20px; width:20px; margin-right:10px;" src={At} alt="email"/><p>esempio@gmail.com</p></div>
		</div>
		<div class="disposition">
			<br>
			<p><b>MENU</b></p>
			<br>
			<br>
			<a class="links" href="/articles">Articoli</a><br><br>
			<a class="links" href="/timeline">Cronostoria</a><br><br>
			<a class="links" href="/chisiamo">Chi siamo</a>
		</div>
		<div class="smallCard">
			<img src={mont3} alt="article 1"/>
			<img src={mont4} alt="article 2"/>
		</div>
	</span>
</div>

<style>
	.disposition{
		padding-left: 3%;
		padding-right: 15%;
		text-align: left;
	}
	
	.iconf{
		display: flex;
        align-items: center;
        justify-content: left;	
	}
	
	.smallCard,img{
		height: 40%; 
		width: 40%;
		margin: 2px;
	}

	.footer {
  		bottom: 0;
  		width: 100%;
  		height: 100%;
		margin: 0px 0px 0px 0px;
		background-color: #557B83;
		color: white;
		text-align: center;
		padding-top: 20px;
	}

	.block{
		text-align: left;
		display: flex;
		
		align-items: center;
		width: 100%;
		height: 100%;
		color: white;
		font-size: 20px;
	}
	.links{
		color: white;
		text-decoration: none; ;
	}

	.logoFooter{
		width: 150px;
		margin: 0px 0px 0px 0px;
		justify-content: left;

	}

	.LogoP {
		width: 69px;
		align-items: center;
		margin:44px;
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

