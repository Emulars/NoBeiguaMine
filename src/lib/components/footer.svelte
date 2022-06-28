<script>
	import MediaQuery from "$lib/Utility/MediaQuery.svelte";
	import Logofooter from "../../images/LWhite.png";
	import Map from "../../images/map.png";
	import Phone from "../../images/phone.png";
	import At from "../../images/at.png";
	import mont3 from "../../images/3.jpg";
	import mont4 from "../../images/4.jpg";
	import Newsfooter from "./newsfooter.svelte";
</script>


<main>
	<!-- Desktop -->
	<MediaQuery query="(min-width: 1281px)" let:matches>
        {#if matches}
        <div class="root desktop">
            <div class="footer">
				<span class="block">
					<div class="disposition">
						<img class="logoFooter" src={Logofooter} alt="My logo" />
						<div class="iconf">
							<img
								style="height: 20px; width:20px; margin-right:10px;"
								src={Map}
								alt="address"
							/>
							<p>indirizzo sede amministrativa</p>
						</div>
						<div class="iconf">
							<img
								style="height: 20px; width:20px; margin-right:10px;"
								src={Phone}
								alt="number"
							/>
							<p>(+39) 342 1234567</p>
						</div>
						<div class="iconf">
							<img
								style="height: 20px; width:20px; margin-right:10px;"
								src={At}
								alt="email"
							/>
							<p>infp@mountance.it</p>
						</div>
					</div>
					<!--  -->
					<div class="disposition">
						<hr class="solid" />
						<p><b>MENU</b></p>
			
						<a class="links" href="/articles">Articoli</a><br /><br />
						<a class="links" href="/timeline_parallax">Cronostoria</a><br /><br />
						<a class="links" href="/whoami">Chi siamo</a>
					</div>
					<!--
					<div class="smallCard">
						<Newsfooter></Newsfooter>
					</div>
					-->
				</span>
			</div>
        </div>
        {/if}
    </MediaQuery>

	<!-- Tablet -->
	<MediaQuery query="(min-width: 481px) and (max-width: 1280px)" let:matches>
        {#if matches}
        <div class="root tablet">
            <div class="footer">
				<span class="block">
					<div class="disposition">
						<img class="logoFooter" src={Logofooter} alt="My logo" />
						<div class="iconf">
							<img
								style="height: 20px; width:20px; margin-right:10px;"
								src={Map}
								alt="address"
							/>
							<p>indirizzo sede amministrativa</p>
						</div>
						<div class="iconf">
							<img
								style="height: 20px; width:20px; margin-right:10px;"
								src={Phone}
								alt="number"
							/>
							<p>(+39) 342 1234567</p>
						</div>
						<div class="iconf">
							<img
								style="height: 20px; width:20px; margin-right:10px;"
								src={At}
								alt="email"
							/>
							<p>infp@mountance.it</p>
						</div>
					</div>
					<!--  -->
					<div class="disposition">
						<hr class="solid" />
						<p><b>MENU</b></p>
			
						<a class="links" href="/articles">Articoli</a><br /><br />
						<a class="links" href="/timeline_parallax">Cronostoria</a><br /><br />
						<a class="links" href="/whoami">Chi siamo</a>
					</div>
					<!--
					<div class="smallCard">
						<Newsfooter></Newsfooter>
					</div>
					-->
				</span>
			</div>
        </div>
        {/if}
    </MediaQuery>

	<!-- Mobile -->
	<MediaQuery query="(max-width: 480px)" let:matches>
        {#if matches}
        <div class="root mobile">
			<div class="footer">
				<span class="block">
					<div class="disposition">
						<img class="logoFooter" src={Logofooter} alt="My logo" />
						<div class="iconf">
							<img
								style="height: 20px; width:20px; margin-right:10px;"
								src={Map}
								alt="address"
							/>
							<p>indirizzo sede amministrativa</p>
						</div>
						<div class="iconf">
							<img
								style="height: 20px; width:20px; margin-right:10px;"
								src={Phone}
								alt="number"
							/>
							<p>(+39) 342 1234567</p>
						</div>
						<div class="iconf">
							<img
								style="height: 20px; width:20px; margin-right:10px;"
								src={At}
								alt="email"
							/>
							<p>infp@mountance.it</p>
						</div>
					</div>
					<!--  -->
					<div class="disposition">
						<hr class="solid" />
						<p><b>MENU</b></p>
			
						<a class="links" href="/articles">Articoli</a><br /><br />
						<a class="links" href="/timeline_parallax">Cronostoria</a><br /><br />
						<a class="links" href="/whoami">Chi siamo</a>
					</div>
					<!--
					<div class="smallCard">
						<Newsfooter></Newsfooter>
					</div>
					-->
				</span>
			</div>
        </div>
        {/if}
    </MediaQuery> 
</main>

<style>

	/* Generic */
	.disposition {
		font-family: "Roboto Light", sans-serif;
		text-align: left;
	}
	.iconf,a {
		margin: 10px;
	}

	.iconf {
		display: flex;
		align-items: center;
		justify-content: left;
	}

	.smallCard,
	img {
		height: 40%;
		width: 40%;
	}

	.footer {
		bottom: 0;
		width: 100%;
		height: 100%;
		margin: 0px 0px 0px 0px;
		background-color: #5daca7;
		color: white;
		text-align: center;
		padding-top: 30px;
		padding-bottom: 15px;
	}

	.block {
		display: flex;
		justify-content: space-around;
		align-items: center;
		width: 100%;
		height: 100%;
		color: white;
		font-size: 15px;
	}
	.links {
		color: white;
		text-decoration: none;
	}

	.logoFooter {
		width: 150px;
		margin: 0px 0px 0px 0px;
		justify-content: left;
	}

	/* Desktop 1281px or higher*/
	/* Tablet 481px-1281px*/
	.desktop .tablet hr.solid {
		display: none;
	}
	
	/* Mobile 480px or lower*/
	.mobile hr.solid {
		border-top: 3px solid #bbb;
	}
	.mobile .block {
		display: flex;
		align-items: center;
		width: 100%;
		height: 100%;
		color: white;
		font-size: 20px;
		flex-direction: column;
		justify-content: center;
		flex-wrap: nowrap;
		text-align: center;
	}
	.mobile .logoFooter {
		width: 150px;
		justify-content: center;
	}
	.mobile .iconf {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.mobile .disposition {
		font-family: "Roboto Light", sans-serif;
		text-align: center;
	}
</style>



<!--
<style>
	.disposition {
		font-family: "Roboto Light", sans-serif;
		text-align: left;
	}
	.iconf,a {
		margin: 10px;
	}

	.iconf {
		display: flex;
		align-items: center;
		justify-content: left;
	}

	.smallCard,
	img {
		height: 40%;
		width: 40%;
	}

	.footer {
		bottom: 0;
		width: 100%;
		height: 100%;
		margin: 0px 0px 0px 0px;
		background-color: #5daca7;
		color: white;
		text-align: center;
		padding-top: 30px;
		padding-bottom: 15px;
	}

	.block {
		display: flex;
		justify-content: space-around;
		align-items: center;
		width: 100%;
		height: 100%;
		color: white;
		font-size: 15px;
	}
	.links {
		color: white;
		text-decoration: none;
	}

	.logoFooter {
		width: 150px;
		margin: 0px 0px 0px 0px;
		justify-content: left;
	}
	/* Extra small devices (phones, 600px and down) */
	@media only screen and (max-width: 600px) {
		hr.solid {
			border-top: 3px solid #bbb;
		}
		.block {
			display: flex;
			align-items: center;
			width: 100%;
			height: 100%;
			color: white;
			font-size: 20px;
			flex-direction: column;
			justify-content: center;
			flex-wrap: nowrap;
			text-align: center;
		}
		.logoFooter {
			width: 150px;
			justify-content: center;
		}
		.iconf {
			display: flex;
			align-items: center;
			justify-content: center;
		}
		.disposition {
			font-family: "Roboto Light", sans-serif;
			text-align: center;
		}
	}
	/* Medium devices (landscape tablets, 768px and up) */
	@media only screen and (max-width: 768px) {
		hr.solid {
			border-top: 3px solid #bbb;
		}

		.block {
			display: flex;
			align-items: center;
			width: 100%;
			height: 100%;
			color: white;
			font-size: 20px;
			flex-direction: column;
			justify-content: center;
			flex-wrap: nowrap;
			text-align: center;
		}
		.logoFooter {
			width: 150px;
			justify-content: center;
		}
		.iconf {
			display: flex;
			align-items: center;
			justify-content: center;
		}
		.disposition {
			font-family: "Roboto Light", sans-serif;
			text-align: center;
		}
	}

	/* Large devices (laptops/desktops, 992px and up) */
	@media only screen and (max-width: 992px) {
		hr.solid {
			border-top: 3px solid #bbb;
		}
		.block {
			display: flex;
			align-items: center;
			width: 100%;
			height: 100%;
			color: white;
			font-size: 20px;
			flex-direction: column;
			justify-content: center;
			flex-wrap: nowrap;
			text-align: center;
		}
		.logoFooter {
			width: 150px;
			justify-content: center;
		}
		.iconf {
			display: flex;
			align-items: center;
			justify-content: center;
		}
		.disposition {
			font-family: "Roboto Light", sans-serif;
			text-align: center;
		}
	}
	@media only screen and (max-width: 1200px) {
		hr.solid {
			border-top: 3px solid #bbb;
		}
		.block {
			display: flex;
			align-items: center;
			width: 100%;
			height: 100%;
			color: white;
			font-size: 20px;
			flex-direction: column;
			justify-content: center;
			flex-wrap: nowrap;
			text-align: center;
		}
		.logoFooter {
			width: 150px;
			justify-content: center;
		}
		.iconf {
			display: flex;
			align-items: center;
			justify-content: center;
		}
		.disposition {
			font-family: "Roboto Light", sans-serif;
			text-align: center;
		}
	}
	/* Extra large devices (large laptops and desktops, 1200px and up) */
	@media only screen and (min-width: 1200px) {
		hr.solid {
			display: none;
		}
		
	}
</style>
-->