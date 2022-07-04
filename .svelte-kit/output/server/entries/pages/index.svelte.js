import { c as create_ssr_component, v as validate_component, i as add_attribute } from "../../chunks/index-b4318809.js";
import { H as Head } from "../../chunks/head-4148f106.js";
import { N as News, t as titanium } from "../../chunks/amianto01-e84b8fa3.js";
import { M as MediaQuery } from "../../chunks/MediaQuery-ea883436.js";
import "../../chunks/LWhite-0f432e21.js";
import "../../chunks/Card_3-370c336a.js";
import "../../chunks/index-1a27fcf7.js";
import "../../chunks/classAdderBuilder-f812527e.js";
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: `.title.svelte-19cdf1m.svelte-19cdf1m{text-align:center;margin-top:125px;margin-bottom:15px;font-family:'Oswald',sans-serif;font-weight:400;text-transform:uppercase;letter-spacing:3px}.subTitle.svelte-19cdf1m.svelte-19cdf1m{text-align:center;margin-bottom:80px;font-family:'Roboto',sans-serif;font-size:larger}.image-container.svelte-19cdf1m.svelte-19cdf1m{width:100%;height:100%}.desktop.svelte-19cdf1m .column.svelte-19cdf1m{float:left;width:33.33%;height:auto}.mobile.svelte-19cdf1m .column.svelte-19cdf1m{float:left;width:100%;height:25%;justify-content:center}.section.svelte-19cdf1m.svelte-19cdf1m{border-radius:50px 50px 0 0}.section.svelte-19cdf1m.svelte-19cdf1m:after{content:"";display:table;clear:both}.first.svelte-19cdf1m.svelte-19cdf1m{background-color:#557B83}.desktop.svelte-19cdf1m .date.svelte-19cdf1m{font-family:'Oswald',sans-serif;font-weight:1000;margin:0 0 5% 0}.desktop.svelte-19cdf1m .subDate.svelte-19cdf1m{font-family:'Roboto',sans-serif;font-size:larger}.mobile.svelte-19cdf1m .date.svelte-19cdf1m{font-family:'Oswald',sans-serif;font-weight:1000;margin:0% 0% 5% 0%}.mobile.svelte-19cdf1m .subDate.svelte-19cdf1m{font-family:'Roboto',sans-serif;font-size:larger}.desktop.svelte-19cdf1m .node-left.svelte-19cdf1m{margin:33% 0% 0% 20%;font-family:'Roboto',sans-serif;color:white}.desktop.svelte-19cdf1m .node-middle.svelte-19cdf1m{margin:53% 33% 0% 25%;align-items:center}.desktop.svelte-19cdf1m .node-right.svelte-19cdf1m{margin:83% 20% 33% 0%;font-family:'Roboto',sans-serif;color:white}.mobile.svelte-19cdf1m .node-left.svelte-19cdf1m{margin:20% 10% 20% 10%;font-family:'Roboto',sans-serif;color:white}.mobile.svelte-19cdf1m .node-middle.svelte-19cdf1m{margin:0% 0% 0% 0%;align-items:center}.mobile.svelte-19cdf1m .node-right.svelte-19cdf1m{margin:20% 10% 33% 10%;font-family:'Roboto',sans-serif;color:white}.more_timeline.svelte-19cdf1m.svelte-19cdf1m{text-align:center;padding-top:15px;padding-bottom:30px;background-color:#557B83}.buttom.svelte-19cdf1m.svelte-19cdf1m{background-color:white;border:none;color:rgb(0, 0, 0);padding:10px 20px;text-align:center;text-decoration:none;display:inline-block;font-size:16px;margin:2px 1px;cursor:pointer;padding-bottom:15px}.text_b.svelte-19cdf1m.svelte-19cdf1m{font-family:"Oswald", sans-serif;text-decoration:none;color:black;text-transform:uppercase;letter-spacing:3px}.text_b.svelte-19cdf1m.svelte-19cdf1m,a.svelte-19cdf1m.svelte-19cdf1m:visited{color:black}`,
  map: null
};
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"main"}">${validate_component(Head, "Hero").$$render($$result, {}, {}, {})}

		${validate_component(MediaQuery, "MediaQuery").$$render($$result, { query: "(min-width: 900px)" }, {}, {
    default: ({ matches }) => {
      return `${matches ? `<div class="${"root desktop svelte-19cdf1m"}"><div class="${"mdc-typography--headline1 title svelte-19cdf1m"}">- Cronistoria - </div>
            	<div class="${"mdc-typography--body1 subTitle svelte-19cdf1m"}">del giacimento di titanio nel parco del beigua</div>
				
                <div class="${"section first svelte-19cdf1m"}"><div class="${"column svelte-19cdf1m"}"><div class="${"node-left svelte-19cdf1m"}"><div class="${"mdc-typography--headline2 date svelte-19cdf1m"}">1970</div>
                            <div class="${"mdc-typography--body1 subDate svelte-19cdf1m"}"><strong>Scoperta del giacimento</strong> di quasi 400 milioni di tonnellate di rutilo, forma mineralogica con la quale si presenta il <strong>titanio</strong>, a Piampaludo.</div></div></div>
                    
                    <div class="${"column svelte-19cdf1m"}"><div class="${"node-middle svelte-19cdf1m"}"><img class="${"image-container svelte-19cdf1m"}" id="${"scroller"}"${add_attribute("src", titanium, 0)} alt="${"titanium"}"></div></div>
                    

                    <div class="${"column svelte-19cdf1m"}"><div class="${"node-right svelte-19cdf1m"}"><div class="${"mdc-typography--headline2 date svelte-19cdf1m"}">1976</div>
                            <div class="${"mdc-typography--body1 subDate svelte-19cdf1m"}">Il ministero dell&#39;industria rilascia alla Mineraria Italiana Srl una <strong>concessione ventennale</strong>, poi trasferita alla Compagnia Europea per il Titanio (C.E.T.), ma il <strong>progetto non parte</strong> per le proteste dei cittadini e delle istituzioni locali, che considerano l&#39;operazione troppo rischiosa per salute e ambiente.</div></div></div></div>
				<div class="${"more_timeline svelte-19cdf1m"}"><div class="${"buttom svelte-19cdf1m"}"><a class="${"text_b svelte-19cdf1m"}" href="${"/timeline_parallax"}">Mostra tutto</a></div></div></div>` : ``}`;
    }
  })}
		
		${validate_component(MediaQuery, "MediaQuery").$$render($$result, { query: "(max-width: 899px)" }, {}, {
    default: ({ matches }) => {
      return `${matches ? `<div class="${"root mobile svelte-19cdf1m"}"><div class="${"mdc-typography--headline3 title svelte-19cdf1m"}">- Cronistoria - </div>
            	<div class="${"mdc-typography--body2 subTitle svelte-19cdf1m"}">del giacimento di titanio nel parco del beigua</div>
				
				<div class="${"section first svelte-19cdf1m"}"><div class="${"column svelte-19cdf1m"}"><div class="${"node-left svelte-19cdf1m"}"><div class="${"mdc-typography--headline2 date svelte-19cdf1m"}">1970</div>
							<div class="${"mdc-typography--body1 subDate svelte-19cdf1m"}"><strong>Scoperta del giacimento</strong> di quasi 400 milioni di tonnellate di rutilo, forma mineralogica con la quale si presenta il <strong>titanio</strong>, a Piampaludo.</div></div></div>
					
					<div class="${"column svelte-19cdf1m"}"><div class="${"node-middle svelte-19cdf1m"}"><img class="${"image-container svelte-19cdf1m"}"${add_attribute("src", titanium, 0)} alt="${"titanium"}" style="${"width: 200px; height:200px; margin-left:50px;"}"></div></div>
					

					<div class="${"column svelte-19cdf1m"}"><div class="${"node-right svelte-19cdf1m"}"><div class="${"mdc-typography--headline2 date svelte-19cdf1m"}">1976</div>
							<div class="${"mdc-typography--body1 subDate svelte-19cdf1m"}">Il ministero dell&#39;industria rilascia alla Mineraria Italiana Srl una <strong>concessione ventennale</strong>, poi trasferita alla Compagnia Europea per il Titanio (C.E.T.), ma il <strong>progetto non parte</strong> per le proteste dei cittadini e delle istituzioni locali, che considerano l&#39;operazione troppo rischiosa per salute e ambiente.</div></div></div></div>
				<div class="${"more_timeline svelte-19cdf1m"}"><div class="${"buttom svelte-19cdf1m"}"><a class="${"text_b svelte-19cdf1m"}" href="${"/timeline_parallax"}">Mostra tutto</a></div></div></div>` : ``}`;
    }
  })} 

		${validate_component(News, "News").$$render($$result, {}, {}, {})}
</div>`;
});
export { Routes as default };
