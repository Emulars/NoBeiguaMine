<script>
	import { Parallax, ParallaxLayer } from "svelte-parallax";
	import News from "../lib/collection/news.svelte";
	import titanium from "../images/tita.png";
	import imgmidc from "../images/beiglarge.jpg";
	import imglastc from "../images/cartB.png";
	let parallax;
</script>

<div class="main">
	<div class="Croni_text">
		<div class="mdc-typography--headline3 Title">- Cronistoria -</div>
		<div class="mdc-typography--body1 SubTitle">
			del giacimento di titanio nel parco del beigua
		</div>
	</div>
	<div class="prova">
		<Parallax
			sections="3"
			style="background-color: #5D7A80; border-radius: 25px 25px 0 0; "
			bind:this={parallax}
		>
			<ParallaxLayer
				offset="1"
				rate="1"
				style="background-color: #ffffff;  height:2000; border-radius: 25px 25px 0 0;"
			/>
			<ParallaxLayer
				offset="2"
				rate="0"
				style="background-color: #5DACA7; border-radius: 25px 25px 0 0; transform: translate3d(0px, 2000.832px, 0px); height:1500px; z-index: 1;"
			>
				<div>
					<!-- svelte-ignore a11y-missing-attribute -->
					<img src={imglastc} />
				</div>
			</ParallaxLayer>

			<ParallaxLayer
				offset="0"
				rate="-0.8"
				style="display: inline-flex;  align-items: center; justify-content: center; flex= 1 1 auto;"
			>
				<div class="timel1970">
					<h1>1970</h1>
					<p>
						Scoperta del giacimento di quasi 400 milioni di
						tonnellate di rutilo, forma mineralogica con la quale si
						presenta il titanio, a Piampaludo.
					</p>
				</div>
				<div class="fimgcron">
					<!-- svelte-ignore a11y-missing-attribute -->
					<img class="fimgcron" src={titanium} />
				</div>
				<div class="timel1976">
					<h1>1976</h1>
					<p>
						Il Ministero dell’Industria rilascia alla Mineraria
						Italiana Srl una concessione ventennale, poi trasferita
						alla Compagnia Europea per il Titanio (C.E.T.), ma il
						progetto non parte per le proteste dei cittadini e delle
						istituzioni locali, che considerano l’operazione troppo
						rischiosa per salute e ambiente.
					</p>
				</div>
			</ParallaxLayer>

			<div>
				<ParallaxLayer
					offset="1"
					rate="0"
					class="ciao"
					style="display: inline-flex; 
				align-items: center; 
				justify-content: center;  
				border-radius: 25px 25px 0 0; 
				background: lightblue url({imgmidc});
				background-position: center;
				background-repeat: no-repeat;
				background-size: cover;
				"
				>
					<div class="txtimgcron">
						<div class="timel1991">
							<h1>1991</h1>
							<p>
								La C.E.T. chiede il rinnovo della concessione
								per altri vent’anni e rilancia il progetto,
								nonostante non avesse ricevuto risposta dal
								Ministero.
							</p>
						</div>

						<div class="timel1996">
							<h1>1996</h1>
							<p>
								Il progetto viene stoppato nuovamente durante
								un’animata Conferenza dei Servizi tenutasi a
								Savona: il comitato di cittadini, i sindaci di
								Urbe e Sassello, l’Ente parco e la Regione (che
								ha delega su cave e miniere) rigettano e
								bloccano l’iter.
							</p>
						</div>
					</div>
				</ParallaxLayer>

				<ParallaxLayer
					offset="2"
					rate="0"
					style="background-color: #5DACA7; border-radius: 25px 25px 0 0; transform: translate3d(0px, 2000.832px, 0px); height:1500px; z-index: 1;"
				>
					<div>
						<!-- svelte-ignore a11y-missing-attribute -->
						<img src={imglastc} />
					</div>
				</ParallaxLayer>
				<!-- 
			<ParallaxLayer
				offset="2"
				rate="1"
				style="display: flex; align-items: center; justify-content: center;  border-radius: 25px 25px 0 0;"
			>
			</ParallaxLayer> -->
			</div></Parallax
		>
	</div>
</div>
<News />

<style>
	.parallax {
		border-radius: 25px 25px 0 0;
	}
	.Croni_text {
		margin-top: 30px;
		text-align: center;
		margin-bottom: 15px;
	}
	.Title {
		font-family: "Oswald Bold", sans-serif;
	}
	.SubTitle {
		font-family: "Roboto Bold", sans-serif;
	}
	:global(body) {
		padding: 0;
	}
	.timel1970 {
		color: white;
		width: 20%;
		text-align: left;
	}
	.fimgcron {
		width: 400px;
	}
	.timel1976 {
		color: white;
		width: 20%;
		text-align: right;
	}
	.txtimgcron {
		color: white;
		width: 20%;
		mix-blend-mode: revert;
		z-index: 1;
	}
	.timel1991 {
		text-decoration: white;
	}

	.bash,
	.clients-main {
		cursor: pointer;
		text-align: left;
	}
	img:focus {
		outline: 1px dotted gray;
	}
	img:focus:not(:focus-visible) {
		outline: none;
	}
	.server:focus-visible {
		outline: 2px dotted gray;
	}
	.bash:focus-visible {
		outline: 2px dotted purple;
	}
	.clients-main:focus-visible {
		outline: 2px dotted blue;
	}
</style>
