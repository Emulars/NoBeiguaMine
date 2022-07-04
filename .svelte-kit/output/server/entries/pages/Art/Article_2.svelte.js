import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-b4318809.js";
import { H as HeadArticle, V as Vertical_news, t as title, i as image } from "../../../chunks/headArticle-a1136733.js";
import { M as MediaQuery } from "../../../chunks/MediaQuery-ea883436.js";
import { d as doc } from "../../../chunks/card_2-976ab9e1.js";
import "../../../chunks/index-1a27fcf7.js";
import "../../../chunks/classAdderBuilder-f812527e.js";
import "../../../chunks/index-6b5ffa68.js";
var Article_2_svelte_svelte_type_style_lang = "";
const css = {
  code: ".root.svelte-1qbnyfh.svelte-1qbnyfh{left:0;top:0;right:0;bottom:0;display:flex;flex-direction:row}.tablet.svelte-1qbnyfh.svelte-1qbnyfh{flex-direction:column;align-items:center}.tablet.svelte-1qbnyfh .column-1.svelte-1qbnyfh{float:none;width:100%}.tablet.svelte-1qbnyfh .column-2.svelte-1qbnyfh{float:none}.mobile.svelte-1qbnyfh.svelte-1qbnyfh{flex-direction:column}.mobile.svelte-1qbnyfh .column-1.svelte-1qbnyfh{float:none;width:100%}.mobile.svelte-1qbnyfh .column-2.svelte-1qbnyfh{float:none;width:100%}.column-1.svelte-1qbnyfh.svelte-1qbnyfh{float:left;width:60%}.column-2.svelte-1qbnyfh.svelte-1qbnyfh{float:left;width:40%;margin:5% 5% 0 0;align-items:center}.title.svelte-1qbnyfh.svelte-1qbnyfh{color:#39aea9;font-family:'Roboto',sans-serif;margin:0 0 15px 0;line-height:1.5em;text-transform:uppercase}.text.svelte-1qbnyfh.svelte-1qbnyfh{font-family:'Roboto',sans-serif;line-height:1.5em;font-size:25px}.article.svelte-1qbnyfh.svelte-1qbnyfh{margin:10% 0 0 10%}",
  map: null
};
const Article_2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  title.set("MINIERA DI TITANIO NEL BEIGUA: L\u2019ALTRA FACCIA DELLA SPLENDIDA RISERVA NATURALE LIGURE");
  image.set(doc);
  $$result.css.add(css);
  return `<main><div class="${"head"}">${validate_component(HeadArticle, "Head").$$render($$result, {}, {}, {})}</div>

    
	${validate_component(MediaQuery, "MediaQuery").$$render($$result, { query: "(min-width: 1281px)" }, {}, {
    default: ({ matches }) => {
      return `${matches ? `<div class="${"root svelte-1qbnyfh"}"><div class="${"column-1 svelte-1qbnyfh"}"><div class="${"article svelte-1qbnyfh"}"><div class="${"mdc-typography--headline4 title svelte-1qbnyfh"}">La popolazione ligure si oppone all\u2019apertura della miniera di titanio <br>
                        presente nel Beigua, 25.000 persone firmano la petizione: <br>
                        <i>\u201C\xC8 una scelta sbagliata, rischi ambientali evidenti\u201D.</i><br></div>
						
					<div class="${"mdc-typography--body1 text svelte-1qbnyfh"}">Una splendida riserva naturale che presenta una vasta biodiversit\xE0,<br> 
                        un territorio cos\xEC ricco da poter offrire ogni tipo di attivit\xE0,<br> 
                        dall\u2019escursionismo al ciclismo, dal birdwatching all\u2019arrampicata.<br>
                        Il Parco del Beigua, per\xF2, non manca di problemi.<br><br>
                    
                        Ci\xF2 che rende negativamente famoso il sito \xE8 la miniera di titanio <br>
                        scoperta nel 1970 a circa 600-900 metri di altitudine. <br> 
                        Il giacimento \xE8 composto da nove milioni di tonnellate di rutilo, <br> 
                        forma mineralogica che compone il titanio. L&#39;elevato contenuto <br> 
                        di minerali di magnesio rende le rocce della montagna tossiche <br> 
                        per molte specie vegetali e favorisce l&#39;insediamento di comunit\xE0 <br> 
                        vegetali peculiari, formate da piante tolleranti nei confronti <br> 
                        delle alte concentrazioni di magnesio.<br> <br> 
                        
                        Dal momento della scoperta del giacimento, <br>
                        \xE8 iniziata una battaglia legale: da una parte chi \xE8 favorevole <br>
                        all\u2019apertura della miniera, dall\u2019altra chi non vorrebbe procedere <br>
                        agli scavi. Dal canto suo, dopo una fuga di notizie nel 2013, <br>
                        il Parco si era espresso cos\xEC a riguardo:<br><br>
                    
                        <i>\u201CIn merito alle notizie apparse sulla stampa nei giorni scorsi, <br>
                            l&#39;Ente Parco sottolinea di non aver ricevuto alcuna comunicazione <br>
                            n\xE9 dalla Regione Liguria, n\xE9 da societ\xE0 di sorta, in merito a <br>
                            proposte di sfruttamento minerario nell&#39;area del Monte Tarin\xE8. <br>
                            Ad oggi, gran parte delle aree citate negli articoli pubblicati <br>
                            sui quotidiani, in particolare quelle nel territorio comunale <br>
                            di Sassello, sono soggette a vincolo ai sensi della <br>
                            Legge Regionale n.12/1995, laddove sono esplicitamente vietate <br>
                            l&#39;apertura e l&#39;esercizio di miniere, cave e discariche, nonch\xE9 <br>
                            l&#39;asportazione di minerali\u201D. <br></i>

                        \xC8 chiaro come una possibile apertura delle ricerche sia legato <br>
                        strettamente ai fini economici, questione rimarcata dal presidente <br>
                        del CAI Liguaria Gianni Carravieri, molto preoccupato dalla situazione: <br><br>

                        <i>\u201C\xC8 da trent\u2019anni che ci sono tentativi di aprire miniere a cielo aperto<br>
                            per l\u2019estrazione del titano nel Parco regionale del Beigua.<br> 
                            Il giacimento varrebbe diversi miliardi euro\u201D.<br><br></i></div></div></div>
				

			<div class="${"column-2 svelte-1qbnyfh"}">${validate_component(Vertical_news, "News").$$render($$result, {}, {}, {})}</div></div>` : ``}`;
    }
  })} 



	${validate_component(MediaQuery, "MediaQuery").$$render($$result, {
    query: "(min-width: 992px) and (max-width: 1280px)"
  }, {}, {
    default: ({ matches }) => {
      return `${matches ? `<div class="${"root tablet svelte-1qbnyfh"}"><div class="${"column-1 svelte-1qbnyfh"}"><div class="${"article svelte-1qbnyfh"}"><div class="${"mdc-typography--headline4 title svelte-1qbnyfh"}">La popolazione ligure si oppone all\u2019apertura della miniera di titanio <br>
                        presente nel Beigua, 25.000 persone firmano la petizione: <br>
                        <i>\u201C\xC8 una scelta sbagliata, rischi ambientali evidenti\u201D.</i><br></div>
						
					<div class="${"mdc-typography--body1 text svelte-1qbnyfh"}">Una splendida riserva naturale che presenta una vasta biodiversit\xE0,<br> 
                        un territorio cos\xEC ricco da poter offrire ogni tipo di attivit\xE0,<br> 
                        dall\u2019escursionismo al ciclismo, dal birdwatching all\u2019arrampicata.<br>
                        Il Parco del Beigua, per\xF2, non manca di problemi.<br><br>
                    
                        Ci\xF2 che rende negativamente famoso il sito \xE8 la miniera di titanio <br>
                        scoperta nel 1970 a circa 600-900 metri di altitudine. <br> 
                        Il giacimento \xE8 composto da nove milioni di tonnellate di rutilo, <br> 
                        forma mineralogica che compone il titanio. L&#39;elevato contenuto <br> 
                        di minerali di magnesio rende le rocce della montagna tossiche <br> 
                        per molte specie vegetali e favorisce l&#39;insediamento di comunit\xE0 <br> 
                        vegetali peculiari, formate da piante tolleranti nei confronti <br> 
                        delle alte concentrazioni di magnesio.<br> <br> 
                        
                        Dal momento della scoperta del giacimento, <br>
                        \xE8 iniziata una battaglia legale: da una parte chi \xE8 favorevole <br>
                        all\u2019apertura della miniera, dall\u2019altra chi non vorrebbe procedere <br>
                        agli scavi. Dal canto suo, dopo una fuga di notizie nel 2013, <br>
                        il Parco si era espresso cos\xEC a riguardo:<br><br>
                    
                        <i>\u201CIn merito alle notizie apparse sulla stampa nei giorni scorsi, <br>
                            l&#39;Ente Parco sottolinea di non aver ricevuto alcuna comunicazione <br>
                            n\xE9 dalla Regione Liguria, n\xE9 da societ\xE0 di sorta, in merito a <br>
                            proposte di sfruttamento minerario nell&#39;area del Monte Tarin\xE8. <br>
                            Ad oggi, gran parte delle aree citate negli articoli pubblicati <br>
                            sui quotidiani, in particolare quelle nel territorio comunale <br>
                            di Sassello, sono soggette a vincolo ai sensi della <br>
                            Legge Regionale n.12/1995, laddove sono esplicitamente vietate <br>
                            l&#39;apertura e l&#39;esercizio di miniere, cave e discariche, nonch\xE9 <br>
                            l&#39;asportazione di minerali\u201D. <br></i>

                        \xC8 chiaro come una possibile apertura delle ricerche sia legato <br>
                        strettamente ai fini economici, questione rimarcata dal presidente <br>
                        del CAI Liguaria Gianni Carravieri, molto preoccupato dalla situazione: <br><br>

                        <i>\u201C\xC8 da trent\u2019anni che ci sono tentativi di aprire miniere a cielo aperto<br>
                            per l\u2019estrazione del titano nel Parco regionale del Beigua.<br> 
                            Il giacimento varrebbe diversi miliardi euro\u201D.<br><br></i></div></div></div>
					
			
			<div class="${"column-2 svelte-1qbnyfh"}">${validate_component(Vertical_news, "News").$$render($$result, {}, {}, {})}</div></div>` : ``}`;
    }
  })} 

    
	${validate_component(MediaQuery, "MediaQuery").$$render($$result, { query: "(max-width: 991px)" }, {}, {
    default: ({ matches }) => {
      return `${matches ? `<div class="${"root mobile svelte-1qbnyfh"}"><div class="${"column-1 svelte-1qbnyfh"}"><div class="${"article svelte-1qbnyfh"}"><div class="${"mdc-typography--headline4 title svelte-1qbnyfh"}">La popolazione ligure si oppone all\u2019apertura della miniera di titanio <br>
                        presente nel Beigua, 25.000 persone firmano la petizione: <br>
                        <i>\u201C\xC8 una scelta sbagliata, rischi ambientali evidenti\u201D.</i><br></div>
						
					<div class="${"mdc-typography--body1 text svelte-1qbnyfh"}">Una splendida riserva naturale che presenta una vasta biodiversit\xE0,<br> 
                        un territorio cos\xEC ricco da poter offrire ogni tipo di attivit\xE0,<br> 
                        dall\u2019escursionismo al ciclismo, dal birdwatching all\u2019arrampicata.<br>
                        Il Parco del Beigua, per\xF2, non manca di problemi.<br><br>
                    
                        Ci\xF2 che rende negativamente famoso il sito \xE8 la miniera di titanio <br>
                        scoperta nel 1970 a circa 600-900 metri di altitudine. <br> 
                        Il giacimento \xE8 composto da nove milioni di tonnellate di rutilo, <br> 
                        forma mineralogica che compone il titanio. L&#39;elevato contenuto <br> 
                        di minerali di magnesio rende le rocce della montagna tossiche <br> 
                        per molte specie vegetali e favorisce l&#39;insediamento di comunit\xE0 <br> 
                        vegetali peculiari, formate da piante tolleranti nei confronti <br> 
                        delle alte concentrazioni di magnesio.<br> <br> 
                        
                        Dal momento della scoperta del giacimento, <br>
                        \xE8 iniziata una battaglia legale: da una parte chi \xE8 favorevole <br>
                        all\u2019apertura della miniera, dall\u2019altra chi non vorrebbe procedere <br>
                        agli scavi. Dal canto suo, dopo una fuga di notizie nel 2013, <br>
                        il Parco si era espresso cos\xEC a riguardo:<br><br>
                    
                        <i>\u201CIn merito alle notizie apparse sulla stampa nei giorni scorsi, <br>
                            l&#39;Ente Parco sottolinea di non aver ricevuto alcuna comunicazione <br>
                            n\xE9 dalla Regione Liguria, n\xE9 da societ\xE0 di sorta, in merito a <br>
                            proposte di sfruttamento minerario nell&#39;area del Monte Tarin\xE8. <br>
                            Ad oggi, gran parte delle aree citate negli articoli pubblicati <br>
                            sui quotidiani, in particolare quelle nel territorio comunale <br>
                            di Sassello, sono soggette a vincolo ai sensi della <br>
                            Legge Regionale n.12/1995, laddove sono esplicitamente vietate <br>
                            l&#39;apertura e l&#39;esercizio di miniere, cave e discariche, nonch\xE9 <br>
                            l&#39;asportazione di minerali\u201D. <br></i>

                        \xC8 chiaro come una possibile apertura delle ricerche sia legato <br>
                        strettamente ai fini economici, questione rimarcata dal presidente <br>
                        del CAI Liguaria Gianni Carravieri, molto preoccupato dalla situazione: <br><br>

                        <i>\u201C\xC8 da trent\u2019anni che ci sono tentativi di aprire miniere a cielo aperto<br>
                            per l\u2019estrazione del titano nel Parco regionale del Beigua.<br> 
                            Il giacimento varrebbe diversi miliardi euro\u201D.<br><br></i></div></div></div>
					
		
			<div class="${"column-2 svelte-1qbnyfh"}">${validate_component(Vertical_news, "News").$$render($$result, {}, {}, {})}</div></div>` : ``}`;
    }
  })} 

</main>`;
});
export { Article_2 as default };
