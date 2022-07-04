import { c as create_ssr_component, v as validate_component } from "./index-b4318809.js";
import { M as MediaQuery } from "./MediaQuery-ea883436.js";
import { C as Card_1, a as Card_2, b as Card_3 } from "./Card_3-370c336a.js";
var news_svelte_svelte_type_style_lang = "";
const css = {
  code: '.laycard.svelte-4vhux7.svelte-4vhux7{width:100%;justify-content:center}.cards.svelte-4vhux7.svelte-4vhux7{display:flex;flex-direction:row;justify-content:space-evenly;border:0ch}.more_articles.svelte-4vhux7.svelte-4vhux7{text-align:center;padding-top:15px;padding-bottom:30px}.buttom.svelte-4vhux7.svelte-4vhux7{background-color:#e5efc1;border:none;color:rgb(0, 0, 0);padding:10px 20px;text-align:center;text-decoration:none;display:inline-block;font-size:16px;margin:2px 1px;cursor:pointer;padding-bottom:15px}.text_b.svelte-4vhux7.svelte-4vhux7{font-family:"Oswald", sans-serif;text-decoration:none;color:black;text-transform:uppercase;letter-spacing:3px}.text_b.svelte-4vhux7.svelte-4vhux7,a.svelte-4vhux7.svelte-4vhux7:visited{color:black}.title.svelte-4vhux7.svelte-4vhux7{margin-top:30px;margin-bottom:15px;font-family:"Oswald", sans-serif;font-weight:400;color:#39aea9;text-transform:uppercase;letter-spacing:3px}.desktop.svelte-4vhux7 .cards.svelte-4vhux7{display:flex;flex-direction:row;justify-content:space-evenly}.tablet.svelte-4vhux7 .cards.svelte-4vhux7{display:flex;flex-direction:row;justify-content:space-evenly}.mobile.svelte-4vhux7 .cards.svelte-4vhux7{display:flex;flex-direction:column;justify-content:space-evenly;align-items:center}',
  map: null
};
const News = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main>
    ${validate_component(MediaQuery, "MediaQuery").$$render($$result, { query: "(min-width: 1281px)" }, {}, {
    default: ({ matches }) => {
      return `${matches ? `<div class="${"root desktop svelte-4vhux7"}"><div class="${"laycard svelte-4vhux7"}">
                    <div class="${"mdc-typography--headline3 News"}" style="${"text-align:center; padding-top:30px; padding-bottom:15px; font-family:'Oswald Regular',sans-serif;"}"><div class="${"mdc-typography--headline3 title svelte-4vhux7"}">- Ultime Notizie -
                        </div></div>
                    <div class="${"cards svelte-4vhux7"}">
                        <div style="${"width: 576px;"}">${validate_component(Card_1, "Card_1").$$render($$result, {}, {}, {})}</div>
                        <div style="${"width: 576px;"}">${validate_component(Card_2, "Card_2").$$render($$result, {}, {}, {})}</div>
                        <div style="${"width: 576px;"}">${validate_component(Card_3, "Card_3").$$render($$result, {}, {}, {})}</div></div>
                    <div class="${"more_articles svelte-4vhux7"}"><div class="${"buttom svelte-4vhux7"}"><a class="${"text_b svelte-4vhux7"}" href="${"/articles"}">MOSTRA ALTRI</a></div></div></div></div>` : ``}`;
    }
  })}

    
    ${validate_component(MediaQuery, "MediaQuery").$$render($$result, {
    query: "(min-width: 601px) and (max-width: 1280px)"
  }, {}, {
    default: ({ matches }) => {
      return `${matches ? `<div class="${"root tablet svelte-4vhux7"}"><div class="${"laycard svelte-4vhux7"}">
                    <div class="${"mdc-typography--headline3 News"}" style="${"text-align:center; padding-top:30px; padding-bottom:15px; font-family:'Oswald Regular',sans-serif;"}"><div class="${"mdc-typography--headline3 title svelte-4vhux7"}">- Ultime Notizie -
                        </div></div>
                    <div class="${"cards svelte-4vhux7"}">
                        <div style="${"width: 576px;"}">${validate_component(Card_1, "Card_1").$$render($$result, {}, {}, {})}</div>
                        <div style="${"width: 576px;"}">${validate_component(Card_2, "Card_2").$$render($$result, {}, {}, {})}</div>
                        <div style="${"width: 576px;"}">${validate_component(Card_3, "Card_3").$$render($$result, {}, {}, {})}</div></div>
                    <div class="${"more_articles svelte-4vhux7"}"><div class="${"buttom svelte-4vhux7"}"><a class="${"text_b svelte-4vhux7"}" href="${"/articles"}">MOSTRA ALTRI</a></div></div></div></div>` : ``}`;
    }
  })}

    
    ${validate_component(MediaQuery, "MediaQuery").$$render($$result, { query: "(max-width: 600px)" }, {}, {
    default: ({ matches }) => {
      return `${matches ? `<div class="${"root mobile svelte-4vhux7"}"><div class="${"laycard svelte-4vhux7"}">
                    <div class="${"mdc-typography--headline3 News"}" style="${"text-align:center; padding-top:30px; padding-bottom:15px; font-family:'Oswald Regular',sans-serif;"}"><div class="${"mdc-typography--headline4 title svelte-4vhux7"}">- Ultime Notizie -
                        </div></div>
                    <div class="${"cards svelte-4vhux7"}">
                        <div style="${"width: 276px;"}">${validate_component(Card_1, "Card_1").$$render($$result, {}, {}, {})}</div>
                        <div style="${"width: 276px;"}">${validate_component(Card_2, "Card_2").$$render($$result, {}, {}, {})}</div>
                        <div style="${"width: 276px;"}">${validate_component(Card_3, "Card_3").$$render($$result, {}, {}, {})}</div></div>
                    <div class="${"more_articles svelte-4vhux7"}"><div class="${"buttom svelte-4vhux7"}"><a class="${"text_b svelte-4vhux7"}" href="${"/articles"}">MOSTRA ALTRI</a></div></div></div></div>` : ``}`;
    }
  })}
</main>`;
});
var titanium = "/_app/assets/amianto01-9deb77f9.png";
export { News as N, titanium as t };
