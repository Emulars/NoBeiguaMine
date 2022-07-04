import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-b4318809.js";
import { H as HeadArticle, V as Vertical_news, t as title, i as image } from "../../../chunks/headArticle-a1136733.js";
import { M as MediaQuery } from "../../../chunks/MediaQuery-ea883436.js";
import "../../../chunks/index-1a27fcf7.js";
import "../../../chunks/classAdderBuilder-f812527e.js";
import "../../../chunks/index-6b5ffa68.js";
var doc = "/_app/assets/card_5-a84ed20a.jpg";
var Article_5_svelte_svelte_type_style_lang = "";
const css = {
  code: ".root.svelte-pe02zz.svelte-pe02zz{left:0;top:0;right:0;bottom:0;display:flex;flex-direction:row}.tablet.svelte-pe02zz.svelte-pe02zz{flex-direction:column;align-items:center}.tablet.svelte-pe02zz .column-1.svelte-pe02zz{float:none;width:100%}.tablet.svelte-pe02zz .column-2.svelte-pe02zz{float:none}.mobile.svelte-pe02zz.svelte-pe02zz{flex-direction:column}.mobile.svelte-pe02zz .column-1.svelte-pe02zz{float:none;width:100%}.mobile.svelte-pe02zz .column-2.svelte-pe02zz{float:none;width:100%}.column-1.svelte-pe02zz.svelte-pe02zz{float:left;width:60%}.column-2.svelte-pe02zz.svelte-pe02zz{float:left;width:40%;margin:5% 5% 0 0;align-items:center}.title.svelte-pe02zz.svelte-pe02zz{color:#39aea9;font-family:'Roboto',sans-serif;margin:0 0 15px 0;line-height:1.5em;text-transform:uppercase}.text.svelte-pe02zz.svelte-pe02zz{font-family:'Roboto',sans-serif;line-height:1.5em;font-size:25px}.article.svelte-pe02zz.svelte-pe02zz{margin:10% 0 0 10%}",
  map: null
};
const Article_5 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  title.set("ALLA SCOPERTA DEL TITANIO, MINERALE DANNOSO CON POTENZIALIT\xC0 IMPORTANTI");
  image.set(doc);
  $$result.css.add(css);
  return `<main><div class="${"head"}">${validate_component(HeadArticle, "Head").$$render($$result, {}, {}, {})}</div>

    
	${validate_component(MediaQuery, "MediaQuery").$$render($$result, { query: "(min-width: 1281px)" }, {}, {
    default: ({ matches }) => {
      return `${matches ? `<div class="${"root svelte-pe02zz"}"><div class="${"column-1 svelte-pe02zz"}"><div class="${"article svelte-pe02zz"}"><div class="${"mdc-typography--headline4 title svelte-pe02zz"}">Presentato come pericoloso e dannoso per l\u2019ambiente e <br>
						per la salute della popolazione, <br>
						il titanio pu\xF2 rivelarsi in realt\xE0 una risorsa strategica.<br></div>
						
					<div class="${"mdc-typography--body1 text svelte-pe02zz"}">Contenuto nel rutilo presente nelle rocce della nostra riserva <br>
						naturale ligure del parco del Beigua, il titanio \xE8 uno dei <br>
						metalli pi\xF9 robusti al mondo ma anche tra i pi\xF9 pericolosi. <br>
						\xC8 stato scoperto nel 1791 dal reverendo, mineralogista e <br>
						chimico britannico William Gregor che lo individu\xF2 nelle <br>
						rocce di ilmenite della Cornovaglia. Diverse miniere di <br>
						titanio sono sparse in tutti il mondo: oltre a quello di <br>
						Piampaludo, altri significativi depositi si trovano in <br>
						Australia, Scandinavia, Nord America e Malaysia. <br>
						La Norvegia, in particolare, possiede l\u2019unica miniera attiva<br> 
						in Europa, che produce circa 300.000 tonnellate all\u2019anno.<br><br>

						Una volta estratto, il 93% del titanio \xE8 utilizzato come <br>
						biossido nell&#39;industria dei pigmenti, dove ha la funzione <br>
						di cambiare il colore della luce riflessa o trasmessa. <br>
						Quando viene trattato, il minerale polverizzato presenta <br>
						un colore bianco purissimo, una notevole opacit\xE0 e un indice <br>
						di rifrazione elevatissimo, il pi\xF9 elevato tra tutte le sostanze <br>
						incolori. Le caratteristiche ottiche appena citate, la notevole <br>
						stabilit\xE0 chimica e termica e la resistenza alle radiazioni <br>
						ultraviolette, rendono il biossido di titanio una risorsa di <br>
						grande rilevanza in numerosi settori industriali per la <br>
						produzione di materie plastiche, smalti, vernici, carta, <br>
						vetri e materiali ceramici, oltre alle crescenti applicazioni <br>
						nell&#39;industria cosmetica, farmaceutica e alimentare. <br>
						Attualmente, non sono stati scoperti composti che abbiano <br>
						le stesse caratteristiche del titanio.<br><br>

						Il restante 7% del titanio estratto \xE8 solitamente impiegato in forma <br>
						metallica, in particolare \xE8 utilizzato nell&#39;industria aerospaziale e <br>
						per la produzione di impianti dentali e protesi ortopediche. <br>
						\xC8 infatti consigliato per la sua eccellente compatibilit\xE0 biologica <br>
						e l&#39;elevata capacit\xE0 di osteointegrazione. <br><br>

						La Comunit\xE0 Europa ha inserito il titanio nell&#39;elenco delle materie <br>
						prime &quot;critiche&quot; e &quot;strategiche&quot;, ovvero quelle risorse che, oltre <br>
						al valore economico, presentano elevati rischi di approvvigionamento.<br><br>

						Nonostante le caratteristiche uniche descritte finora e le notevoli <br>
						potenzialit\xE0 economiche del minerale, il titanio rimane una risorsa <br>
						divisiva dal punto di vista dell\u2019opinione pubblica. Agli elevati costi <br>
						di estrazione, si aggiungono i rischi conseguenti agli scavi, tra cui <br>
						quelli ambientali e sanitari aggravati dalla presenza rilevante di <br>
						anfiboli sodici classificati come amianto di crocidolite <br>
						dalla normativa vigente. <br><br></div></div></div>
				

			<div class="${"column-2 svelte-pe02zz"}">${validate_component(Vertical_news, "News").$$render($$result, {}, {}, {})}</div></div>` : ``}`;
    }
  })} 



	${validate_component(MediaQuery, "MediaQuery").$$render($$result, {
    query: "(min-width: 992px) and (max-width: 1280px)"
  }, {}, {
    default: ({ matches }) => {
      return `${matches ? `<div class="${"root tablet svelte-pe02zz"}"><div class="${"column-1 svelte-pe02zz"}"><div class="${"article svelte-pe02zz"}"><div class="${"mdc-typography--headline4 title svelte-pe02zz"}">Presentato come pericoloso e dannoso per l\u2019ambiente e <br>
						per la salute della popolazione, <br>
						il titanio pu\xF2 rivelarsi in realt\xE0 una risorsa strategica.<br></div>
						
					<div class="${"mdc-typography--body1 text svelte-pe02zz"}">Contenuto nel rutilo presente nelle rocce della nostra riserva <br>
						naturale ligure del parco del Beigua, il titanio \xE8 uno dei <br>
						metalli pi\xF9 robusti al mondo ma anche tra i pi\xF9 pericolosi. <br>
						\xC8 stato scoperto nel 1791 dal reverendo, mineralogista e <br>
						chimico britannico William Gregor che lo individu\xF2 nelle <br>
						rocce di ilmenite della Cornovaglia. Diverse miniere di <br>
						titanio sono sparse in tutti il mondo: oltre a quello di <br>
						Piampaludo, altri significativi depositi si trovano in <br>
						Australia, Scandinavia, Nord America e Malaysia. <br>
						La Norvegia, in particolare, possiede l\u2019unica miniera attiva<br> 
						in Europa, che produce circa 300.000 tonnellate all\u2019anno.<br><br>

						Una volta estratto, il 93% del titanio \xE8 utilizzato come <br>
						biossido nell&#39;industria dei pigmenti, dove ha la funzione <br>
						di cambiare il colore della luce riflessa o trasmessa. <br>
						Quando viene trattato, il minerale polverizzato presenta <br>
						un colore bianco purissimo, una notevole opacit\xE0 e un indice <br>
						di rifrazione elevatissimo, il pi\xF9 elevato tra tutte le sostanze <br>
						incolori. Le caratteristiche ottiche appena citate, la notevole <br>
						stabilit\xE0 chimica e termica e la resistenza alle radiazioni <br>
						ultraviolette, rendono il biossido di titanio una risorsa di <br>
						grande rilevanza in numerosi settori industriali per la <br>
						produzione di materie plastiche, smalti, vernici, carta, <br>
						vetri e materiali ceramici, oltre alle crescenti applicazioni <br>
						nell&#39;industria cosmetica, farmaceutica e alimentare. <br>
						Attualmente, non sono stati scoperti composti che abbiano <br>
						le stesse caratteristiche del titanio.<br><br>

						Il restante 7% del titanio estratto \xE8 solitamente impiegato in forma <br>
						metallica, in particolare \xE8 utilizzato nell&#39;industria aerospaziale e <br>
						per la produzione di impianti dentali e protesi ortopediche. <br>
						\xC8 infatti consigliato per la sua eccellente compatibilit\xE0 biologica <br>
						e l&#39;elevata capacit\xE0 di osteointegrazione. <br><br>

						La Comunit\xE0 Europa ha inserito il titanio nell&#39;elenco delle materie <br>
						prime &quot;critiche&quot; e &quot;strategiche&quot;, ovvero quelle risorse che, oltre <br>
						al valore economico, presentano elevati rischi di approvvigionamento.<br><br>

						Nonostante le caratteristiche uniche descritte finora e le notevoli <br>
						potenzialit\xE0 economiche del minerale, il titanio rimane una risorsa <br>
						divisiva dal punto di vista dell\u2019opinione pubblica. Agli elevati costi <br>
						di estrazione, si aggiungono i rischi conseguenti agli scavi, tra cui <br>
						quelli ambientali e sanitari aggravati dalla presenza rilevante di <br>
						anfiboli sodici classificati come amianto di crocidolite <br>
						dalla normativa vigente. <br><br></div></div></div>
					
			
			<div class="${"column-2 svelte-pe02zz"}">${validate_component(Vertical_news, "News").$$render($$result, {}, {}, {})}</div></div>` : ``}`;
    }
  })} 


${validate_component(MediaQuery, "MediaQuery").$$render($$result, { query: "(max-width: 991px)" }, {}, {
    default: ({ matches }) => {
      return `${matches ? `<div class="${"root mobile svelte-pe02zz"}"><div class="${"column-1 svelte-pe02zz"}"><div class="${"article svelte-pe02zz"}"><div class="${"mdc-typography--headline4 title svelte-pe02zz"}">Presentato come pericoloso e dannoso per l\u2019ambiente e <br>
					per la salute della popolazione, <br>
					il titanio pu\xF2 rivelarsi in realt\xE0 una risorsa strategica.<br></div>
					
				<div class="${"mdc-typography--body1 text svelte-pe02zz"}">Contenuto nel rutilo presente nelle rocce della nostra riserva <br>
					naturale ligure del parco del Beigua, il titanio \xE8 uno dei <br>
					metalli pi\xF9 robusti al mondo ma anche tra i pi\xF9 pericolosi. <br>
					\xC8 stato scoperto nel 1791 dal reverendo, mineralogista e <br>
					chimico britannico William Gregor che lo individu\xF2 nelle <br>
					rocce di ilmenite della Cornovaglia. Diverse miniere di <br>
					titanio sono sparse in tutti il mondo: oltre a quello di <br>
					Piampaludo, altri significativi depositi si trovano in <br>
					Australia, Scandinavia, Nord America e Malaysia. <br>
					La Norvegia, in particolare, possiede l\u2019unica miniera attiva<br> 
					in Europa, che produce circa 300.000 tonnellate all\u2019anno.<br><br>

					Una volta estratto, il 93% del titanio \xE8 utilizzato come <br>
					biossido nell&#39;industria dei pigmenti, dove ha la funzione <br>
					di cambiare il colore della luce riflessa o trasmessa. <br>
					Quando viene trattato, il minerale polverizzato presenta <br>
					un colore bianco purissimo, una notevole opacit\xE0 e un indice <br>
					di rifrazione elevatissimo, il pi\xF9 elevato tra tutte le sostanze <br>
					incolori. Le caratteristiche ottiche appena citate, la notevole <br>
					stabilit\xE0 chimica e termica e la resistenza alle radiazioni <br>
					ultraviolette, rendono il biossido di titanio una risorsa di <br>
					grande rilevanza in numerosi settori industriali per la <br>
					produzione di materie plastiche, smalti, vernici, carta, <br>
					vetri e materiali ceramici, oltre alle crescenti applicazioni <br>
					nell&#39;industria cosmetica, farmaceutica e alimentare. <br>
					Attualmente, non sono stati scoperti composti che abbiano <br>
					le stesse caratteristiche del titanio.<br><br>

					Il restante 7% del titanio estratto \xE8 solitamente impiegato in forma <br>
					metallica, in particolare \xE8 utilizzato nell&#39;industria aerospaziale e <br>
					per la produzione di impianti dentali e protesi ortopediche. <br>
					\xC8 infatti consigliato per la sua eccellente compatibilit\xE0 biologica <br>
					e l&#39;elevata capacit\xE0 di osteointegrazione. <br><br>

					La Comunit\xE0 Europa ha inserito il titanio nell&#39;elenco delle materie <br>
					prime &quot;critiche&quot; e &quot;strategiche&quot;, ovvero quelle risorse che, oltre <br>
					al valore economico, presentano elevati rischi di approvvigionamento.<br><br>

					Nonostante le caratteristiche uniche descritte finora e le notevoli <br>
					potenzialit\xE0 economiche del minerale, il titanio rimane una risorsa <br>
					divisiva dal punto di vista dell\u2019opinione pubblica. Agli elevati costi <br>
					di estrazione, si aggiungono i rischi conseguenti agli scavi, tra cui <br>
					quelli ambientali e sanitari aggravati dalla presenza rilevante di <br>
					anfiboli sodici classificati come amianto di crocidolite <br>
					dalla normativa vigente. <br><br></div></div></div>
				
	
		<div class="${"column-2 svelte-pe02zz"}">${validate_component(Vertical_news, "News").$$render($$result, {}, {}, {})}</div></div>` : ``}`;
    }
  })} 

</main>`;
});
export { Article_5 as default };
