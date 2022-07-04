import { c as create_ssr_component, v as validate_component, i as add_attribute } from "../../chunks/index-b4318809.js";
import { M as MediaQuery } from "../../chunks/MediaQuery-ea883436.js";
import { H as Head } from "../../chunks/head-4148f106.js";
import "../../chunks/LWhite-0f432e21.js";
var unige = "/_app/assets/unige-308c7536.png";
var whoami_svelte_svelte_type_style_lang = "";
const css = {
  code: '.root.svelte-kil4uq.svelte-kil4uq.svelte-kil4uq{margin:10% 10% 10% 10%;display:flex}.who.svelte-kil4uq.svelte-kil4uq.svelte-kil4uq{display:flex;flex-direction:row;justify-content:space-between;flex-wrap:nowrap;align-items:center}.tablet.svelte-kil4uq .who.svelte-kil4uq.svelte-kil4uq{display:flex;flex-direction:column;width:100%}.tablet.svelte-kil4uq .who.svelte-kil4uq .unige.svelte-kil4uq{width:40%;align-items:center;padding-left:30%}.tablet.svelte-kil4uq .who.svelte-kil4uq .text.svelte-kil4uq{margin-bottom:100px;align-items:center;font-size:23px}.mobile.svelte-kil4uq .who.svelte-kil4uq.svelte-kil4uq{display:flex;flex-direction:column;width:100%}.mobile.svelte-kil4uq .who.svelte-kil4uq .unige.svelte-kil4uq{width:40%;align-items:center;padding-left:30%}.mobile.svelte-kil4uq .who.svelte-kil4uq .text.svelte-kil4uq{align-items:center}.title.svelte-kil4uq.svelte-kil4uq.svelte-kil4uq{color:rgb(0, 0, 0);font-family:"Oswald", sans-serif;margin:0 10px 30px 0;line-height:1.5em}.text.svelte-kil4uq.svelte-kil4uq.svelte-kil4uq{font-family:"Roboto", sans-serif;line-height:1.5em;font-size:20px}.svelte-kil4uq .card-media-16x9{background-image:url(../../../images/beiglarge.jpg)}.unige.svelte-kil4uq.svelte-kil4uq.svelte-kil4uq{width:50%}.article.svelte-kil4uq.svelte-kil4uq.svelte-kil4uq{line-height:1.5em}',
  map: null
};
const Whoami = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main class="${"svelte-kil4uq"}"><div class="${"head svelte-kil4uq"}">${validate_component(Head, "Hero").$$render($$result, {}, {}, {})}</div>

	
	${validate_component(MediaQuery, "MediaQuery").$$render($$result, { query: "(min-width: 1281px)" }, {}, {
    default: ({ matches }) => {
      return `${matches ? `<div class="${"root svelte-kil4uq"}"><div class="${"who svelte-kil4uq"}"><div class="${"svelte-kil4uq"}"><h1 class="${"svelte-kil4uq"}"><img class="${"unige svelte-kil4uq"}"${add_attribute("src", unige, 0)} alt="${"unige"}"></h1></div>
				<div class="${"article svelte-kil4uq"}"><div class="${"mdc-typography--headline1 title svelte-kil4uq"}">Chi siamo ?</div>
					<div class="${"mdc-typography--body1 text svelte-kil4uq"}">Il team \xE8 composto da otto studenti dell\u2019Universit\xE0 di Genova<br class="${"svelte-kil4uq"}">  
						che	hanno lo scopo di sensibilizzare la popolazione ligure sul delicato<br class="${"svelte-kil4uq"}">
						tema dell\u2019utilizzo di amianto in Italia. Quattro informatici,<br class="${"svelte-kil4uq"}">
						tre designer e una studentessa di comunicazione hanno unito le loro<br class="${"svelte-kil4uq"}"> 
						competenze per ideare una campagna di sensibilizzazione basata sulla<br class="${"svelte-kil4uq"}">
						divulgazione online	di informazioni utili alla causa.<br class="${"svelte-kil4uq"}"></div></div></div></div>` : ``}`;
    }
  })}

	
	${validate_component(MediaQuery, "MediaQuery").$$render($$result, {
    query: "(min-width: 601px) and (max-width: 1280px)"
  }, {}, {
    default: ({ matches }) => {
      return `${matches ? `<div class="${"root tablet svelte-kil4uq"}"><div class="${"who svelte-kil4uq"}"><div class="${"svelte-kil4uq"}"><h1 class="${"svelte-kil4uq"}"><img class="${"unige svelte-kil4uq"}"${add_attribute("src", unige, 0)} alt="${"unige"}"></h1></div>
					<div class="${"article svelte-kil4uq"}"><div class="${"mdc-typography--headline1 title svelte-kil4uq"}">Chi siamo ?</div>
						<div class="${"mdc-typography--body1 text svelte-kil4uq"}">Il team \xE8 composto da otto studenti dell\u2019Universit\xE0 di
							Genova che <br class="${"svelte-kil4uq"}">
							hanno lo scopo di sensibilizzare la popolazione ligure sul delicato
							<br class="${"svelte-kil4uq"}">
							tema dell\u2019utilizzo di amianto in Italia. Quattro informatici,
							tre<br class="${"svelte-kil4uq"}">
							designer e una studentessa di comunicazione hanno unito le loro competenze<br class="${"svelte-kil4uq"}">
							per ideare una campagna di sensibilizzazione basata sulla divulgazione
							online<br class="${"svelte-kil4uq"}">
							di informazioni utili alla causa.<br class="${"svelte-kil4uq"}"></div></div></div></div>` : ``}`;
    }
  })}

	
	${validate_component(MediaQuery, "MediaQuery").$$render($$result, { query: "(max-width: 600px)" }, {}, {
    default: ({ matches }) => {
      return `${matches ? `<div class="${"root mobile svelte-kil4uq"}"><div class="${"who svelte-kil4uq"}"><div class="${"svelte-kil4uq"}"><h1 class="${"svelte-kil4uq"}"><img class="${"unige svelte-kil4uq"}"${add_attribute("src", unige, 0)} alt="${"unige"}"></h1></div>
				<div class="${"article svelte-kil4uq"}"><div class="${"mdc-typography--headline3 title svelte-kil4uq"}">Chi siamo ?</div>
					<div class="${"mdc-typography--body1 text svelte-kil4uq"}">Il team \xE8 composto da otto studenti dell\u2019Universit\xE0 di
						Genova che <br class="${"svelte-kil4uq"}">
						hanno lo scopo di sensibilizzare la popolazione ligure sul delicato
						<br class="${"svelte-kil4uq"}">
						tema dell\u2019utilizzo di amianto in Italia. Quattro informatici,
						tre designer <br class="${"svelte-kil4uq"}">
						e una studentessa di comunicazione hanno unito le loro competenze
						per <br class="${"svelte-kil4uq"}">
						ideare una campagna di sensibilizzazione basata sulla divulgazione
						online<br class="${"svelte-kil4uq"}">
						di informazioni utili alla causa.<br class="${"svelte-kil4uq"}"></div></div></div></div>` : ``}`;
    }
  })}
</main>`;
});
export { Whoami as default };
