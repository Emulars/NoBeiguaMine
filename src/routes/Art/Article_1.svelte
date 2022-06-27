<script>
	import Hero from "../../lib/components/head.svelte";
	import News from "../../lib/collection/news.svelte";
	import Timel from "./../timeline_new.svelte";
	import Card, {Content, PrimaryAction, Media, MediaContent, Actions, ActionButtons, ActionIcons,} from "@smui/card";
	import MediaQuery from "$lib/Utility/MediaQuery.svelte";
	import { P } from "@smui/common/elements";
</script>

<main>
    <!-- Desktop -->
    <MediaQuery query="(min-width: 1200px)" let:matches>
	{#if matches}
	<div class="root desktop">
	  <div class="text-container">
		<Content class="mdc-typography--body2">
			<h2 >
			PARCO DEL BEIGUA: SCOPRIAMO INSIEME LA RISERVA<br />
			NATURALE CHE SI AFFACCIA SULLA COSTA LIGURE
			</h2>
			
			<p>
				Affacciato sul Mediterraneo ma nascosto dietro i paesini turistici <br/>
				della riviera ligure, sorge il comprensorio del Parco Naturale <br/>
				Regionale del Beigua, una delle più vaste aree naturali protette <br/>
				d’Europa. La zona in cui si trova permette di definirla una <br/>
				riserva naturale metropolitana di cintura, come può essere La Mandria<br/>
				per l'area torinese ed il parco agricolo Sud Milano per quella<br/>
				milanese. Il Parco può essere considerato come un‘isola del tesoro<br/>
				che custodisce gelosamente la storia geologica della Liguria, <br/>
				che non solo vanta una vasta biodiversità, ma presenta al<br/>
				pubblico spettacolari affioramenti rocciosi, mineralizzazioni, <br/>
				giacimenti fossiliferi e spettacolari forme modellate.<br/>
			</p>

			<p>
				La superficie del Parco del Beigua comprende tutta la zona <br/>
				classificata come "Parco Naturale Regionale del Beigua" a <br/>
				partire dal monte omonimo alto ben 1287 m. Inoltre, <br/>
				fa parte di tre comunità montane: la Comunità montana Argentea, <br/>
				la Comunità montana del Giovo e la Comunità montana Valli Stura e Orba.  <br/>
				Ma non è finita qui: il comprensorio annovera anche dieci comuni <br/>
				delle province di Genova e Savona: Arenzano, Campo Ligure, Cogoleto, <br/>
				Genova, Masone, Rossiglione, Sassello, Stella, Tiglieto e Varazze. <br/>
				In totale il territorio del parco si estende su 39230 ettari.<br/>
			</p>

			<p>
				L’eccezionale patrimonio del Parco del Beigua è riconosciuto <br/>
				in tutto il mondo. Nel marzo del 2005 è entrato a far parte delle <br/>
				reti internazionali come Geoparco Europeo e Mondiale e nel 2015 <br/>
				l’Unesco ha riconosciuto il territorio come sito UNESCO, <br/>
				inserendolo nella lista dei Geoparchi Globali. <br/>
			</p>

			<p>
				Le iniziative di conservazione e di valorizzazione del patrimonio <br/>
				geologico del Beigua Geopark si inseriscono nell'ambito di una più <br/>
				ampia e complessa strategia di tutela del patrimonio naturale e <br/>
				storico-culturale. Ciò si realizza attraverso specifiche misure <br/>
				di pianificazione e di gestione del territorio finalizzate alla <br/>
				protezione attiva delle risorse ambientali ed al contestuale <br/>
				sviluppo socioeconomico locale. <br/>
			</p>

		</Content>
	  </div>
	</div>
	{/if}
    </MediaQuery>

	<!-- Little Desktop -->
	<MediaQuery query="(min-width: 992px) and (max-width: 1199px)" let:matches>
	{#if matches}
	<div class="root ltt_desktop">
	  <div class="text-container">
		<Content class="mdc-typography--body2">
			<h2 >
			PARCO DEL BEIGUA: SCOPRIAMO INSIEME LA RISERVA<br />
			NATURALE CHE SI AFFACCIA SULLA COSTA LIGURE
			</h2>
			
			<p>
				Affacciato sul Mediterraneo ma nascosto dietro i paesini turistici <br/>
				della riviera ligure, sorge il comprensorio del Parco Naturale <br/>
				Regionale del Beigua, una delle più vaste aree naturali protette <br/>
				d’Europa. La zona in cui si trova permette di definirla una <br/>
				riserva naturale metropolitana di cintura, come può essere La Mandria<br/>
				per l'area torinese ed il parco agricolo Sud Milano per quella<br/>
				milanese. Il Parco può essere considerato come un‘isola del tesoro<br/>
				che custodisce gelosamente la storia geologica della Liguria, <br/>
				che non solo vanta una vasta biodiversità, ma presenta al<br/>
				pubblico spettacolari affioramenti rocciosi, mineralizzazioni, <br/>
				giacimenti fossiliferi e spettacolari forme modellate.<br/>
			</p>

			<p>
				La superficie del Parco del Beigua comprende tutta la zona <br/>
				classificata come "Parco Naturale Regionale del Beigua" a <br/>
				partire dal monte omonimo alto ben 1287 m. Inoltre, <br/>
				fa parte di tre comunità montane: la Comunità montana Argentea, <br/>
				la Comunità montana del Giovo e la Comunità montana Valli Stura e Orba.  <br/>
				Ma non è finita qui: il comprensorio annovera anche dieci comuni <br/>
				delle province di Genova e Savona: Arenzano, Campo Ligure, Cogoleto, <br/>
				Genova, Masone, Rossiglione, Sassello, Stella, Tiglieto e Varazze. <br/>
				In totale il territorio del parco si estende su 39230 ettari.<br/>
			</p>

			<p>
				L’eccezionale patrimonio del Parco del Beigua è riconosciuto <br/>
				in tutto il mondo. Nel marzo del 2005 è entrato a far parte delle <br/>
				reti internazionali come Geoparco Europeo e Mondiale e nel 2015 <br/>
				l’Unesco ha riconosciuto il territorio come sito UNESCO, <br/>
				inserendolo nella lista dei Geoparchi Globali. <br/>
			</p>

			<p>
				Le iniziative di conservazione e di valorizzazione del patrimonio <br/>
				geologico del Beigua Geopark si inseriscono nell'ambito di una più <br/>
				ampia e complessa strategia di tutela del patrimonio naturale e <br/>
				storico-culturale. Ciò si realizza attraverso specifiche misure <br/>
				di pianificazione e di gestione del territorio finalizzate alla <br/>
				protezione attiva delle risorse ambientali ed al contestuale <br/>
				sviluppo socioeconomico locale. <br/>
			</p>

		</Content>
	  </div>
	</div>
	{/if}
    </MediaQuery>

	<!-- Tablet -->
	<MediaQuery query="(min-width: 601px) and (max-width: 991px)" let:matches>
	{#if matches}
	<div class="root tablet">
	  <div class="text-container">
		<Content class="mdc-typography--body2">
			<h2 >
			PARCO DEL BEIGUA: SCOPRIAMO INSIEME LA RISERVA<br />
			NATURALE CHE SI AFFACCIA SULLA COSTA LIGURE
			</h2>
			
			<p>
				Affacciato sul Mediterraneo ma nascosto dietro i paesini turistici <br/>
				della riviera ligure, sorge il comprensorio del Parco Naturale <br/>
				Regionale del Beigua, una delle più vaste aree naturali protette <br/>
				d’Europa. La zona in cui si trova permette di definirla una <br/>
				riserva naturale metropolitana di cintura, come può essere La Mandria<br/>
				per l'area torinese ed il parco agricolo Sud Milano per quella<br/>
				milanese. Il Parco può essere considerato come un‘isola del tesoro<br/>
				che custodisce gelosamente la storia geologica della Liguria, <br/>
				che non solo vanta una vasta biodiversità, ma presenta al<br/>
				pubblico spettacolari affioramenti rocciosi, mineralizzazioni, <br/>
				giacimenti fossiliferi e spettacolari forme modellate.<br/>
			</p>

			<p>
				La superficie del Parco del Beigua comprende tutta la zona <br/>
				classificata come "Parco Naturale Regionale del Beigua" a <br/>
				partire dal monte omonimo alto ben 1287 m. Inoltre, <br/>
				fa parte di tre comunità montane: la Comunità montana Argentea, <br/>
				la Comunità montana del Giovo e la Comunità montana Valli Stura e Orba.  <br/>
				Ma non è finita qui: il comprensorio annovera anche dieci comuni <br/>
				delle province di Genova e Savona: Arenzano, Campo Ligure, Cogoleto, <br/>
				Genova, Masone, Rossiglione, Sassello, Stella, Tiglieto e Varazze. <br/>
				In totale il territorio del parco si estende su 39230 ettari.<br/>
			</p>

			<p>
				L’eccezionale patrimonio del Parco del Beigua è riconosciuto <br/>
				in tutto il mondo. Nel marzo del 2005 è entrato a far parte delle <br/>
				reti internazionali come Geoparco Europeo e Mondiale e nel 2015 <br/>
				l’Unesco ha riconosciuto il territorio come sito UNESCO, <br/>
				inserendolo nella lista dei Geoparchi Globali. <br/>
			</p>

			<p>
				Le iniziative di conservazione e di valorizzazione del patrimonio <br/>
				geologico del Beigua Geopark si inseriscono nell'ambito di una più <br/>
				ampia e complessa strategia di tutela del patrimonio naturale e <br/>
				storico-culturale. Ciò si realizza attraverso specifiche misure <br/>
				di pianificazione e di gestione del territorio finalizzate alla <br/>
				protezione attiva delle risorse ambientali ed al contestuale <br/>
				sviluppo socioeconomico locale. <br/>
			</p>

		</Content>
	  </div>
	</div>
	{/if}
    </MediaQuery>

	<!-- Mobile -->
	<MediaQuery query="(max-width: 600px)" let:matches>
	{#if matches}
	<div class="root mobile">
	  <div class="text-container">
		<Content class="mdc-typography--body2">
			<h2 >
			PARCO DEL BEIGUA: SCOPRIAMO INSIEME LA RISERVA<br />
			NATURALE CHE SI AFFACCIA SULLA COSTA LIGURE
			</h2>
			
			<p>
				Affacciato sul Mediterraneo ma nascosto dietro i paesini turistici <br/>
				della riviera ligure, sorge il comprensorio del Parco Naturale <br/>
				Regionale del Beigua, una delle più vaste aree naturali protette <br/>
				d’Europa. La zona in cui si trova permette di definirla una <br/>
				riserva naturale metropolitana di cintura, come può essere La Mandria<br/>
				per l'area torinese ed il parco agricolo Sud Milano per quella<br/>
				milanese. Il Parco può essere considerato come un‘isola del tesoro<br/>
				che custodisce gelosamente la storia geologica della Liguria, <br/>
				che non solo vanta una vasta biodiversità, ma presenta al<br/>
				pubblico spettacolari affioramenti rocciosi, mineralizzazioni, <br/>
				giacimenti fossiliferi e spettacolari forme modellate.<br/>
			</p>

			<p>
				La superficie del Parco del Beigua comprende tutta la zona <br/>
				classificata come "Parco Naturale Regionale del Beigua" a <br/>
				partire dal monte omonimo alto ben 1287 m. Inoltre, <br/>
				fa parte di tre comunità montane: la Comunità montana Argentea, <br/>
				la Comunità montana del Giovo e la Comunità montana Valli Stura e Orba.  <br/>
				Ma non è finita qui: il comprensorio annovera anche dieci comuni <br/>
				delle province di Genova e Savona: Arenzano, Campo Ligure, Cogoleto, <br/>
				Genova, Masone, Rossiglione, Sassello, Stella, Tiglieto e Varazze. <br/>
				In totale il territorio del parco si estende su 39230 ettari.<br/>
			</p>

			<p>
				L’eccezionale patrimonio del Parco del Beigua è riconosciuto <br/>
				in tutto il mondo. Nel marzo del 2005 è entrato a far parte delle <br/>
				reti internazionali come Geoparco Europeo e Mondiale e nel 2015 <br/>
				l’Unesco ha riconosciuto il territorio come sito UNESCO, <br/>
				inserendolo nella lista dei Geoparchi Globali. <br/>
			</p>

			<p>
				Le iniziative di conservazione e di valorizzazione del patrimonio <br/>
				geologico del Beigua Geopark si inseriscono nell'ambito di una più <br/>
				ampia e complessa strategia di tutela del patrimonio naturale e <br/>
				storico-culturale. Ciò si realizza attraverso specifiche misure <br/>
				di pianificazione e di gestione del territorio finalizzate alla <br/>
				protezione attiva delle risorse ambientali ed al contestuale <br/>
				sviluppo socioeconomico locale. <br/>
			</p>

		</Content>
	  </div>
	</div>
	{/if}
    </MediaQuery>

	<News />

</main>
  
  <style>
     .card-container{
        margin:20px;
        width: 70%;
        height: 10%;
    }
    .date {
        background-color: #a2d5ab;
        margin: 0;
        width: 120px;
        color: white;
    }
    * :global(.card-media-16x9) {
        background-image: url(../../../images/beiglarge.jpg);
        background-size: auto;
        filter: brightness(80%);
    }
	h2 {
        color: #39aea9;
		
    }
    h3 {
        color: #39aea9;
    }
	h4{

	}
    h5{
        width: 90%;
    }
    * :global(.card-media-16x9) {
      background-image: url(../../../images/beiglarge.jpg);
    }
    
    .desktop :global(){
      display:flow-root;
      margin: 20px;
    }
  
    .ltt_desktop :global(){
      display :inline-flex;
      margin: 20px;
      justify-content: space-evenly;
    }
  
    .tablet :global(){
      display: grid;
      margin: 10px;
      justify-content: space-evenly;
    }
  
    .mobile :global(){
      display: flow-root;
      margin: 20px;
      justify-content: space-evenly;
    }
  </style>
 