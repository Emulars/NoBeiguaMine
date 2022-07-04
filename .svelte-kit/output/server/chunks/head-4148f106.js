import { c as create_ssr_component, v as validate_component, i as add_attribute } from "./index-b4318809.js";
import { L as Logoh1 } from "./LWhite-0f432e21.js";
import { M as MediaQuery } from "./MediaQuery-ea883436.js";
var mid = "/_app/assets/2-b80a6fa6.jpg";
var head_svelte_svelte_type_style_lang = "";
const css = {
  code: '.Heroimg.svelte-1hbtbem.svelte-1hbtbem{width:100%;margin:0px;height:40%;background-position:center;background-repeat:no-repeat;background-size:cover;position:relative}.logoh1.svelte-1hbtbem.svelte-1hbtbem{width:235px}.Herotxt.svelte-1hbtbem.svelte-1hbtbem{text-align:center;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);color:white;width:80%}.Herotxt.svelte-1hbtbem.svelte-1hbtbem,p.svelte-1hbtbem.svelte-1hbtbem{font-family:"Roboto Light", sans-serif;font-size:medium}.description.svelte-1hbtbem.svelte-1hbtbem{width:100%;height:40%;margin:0px;filter:brightness(40%)}.desktop.svelte-1hbtbem p.svelte-1hbtbem{font-size:2em;line-height:1.5em}.desktop.svelte-1hbtbem .Heroimg.svelte-1hbtbem{width:100%;height:900px}.desktop.svelte-1hbtbem .description.svelte-1hbtbem{width:100%;height:900px;background:transparent no-repeat center;background-size:cover;position:relative;object-fit:cover}.tablet.svelte-1hbtbem .logoh1.svelte-1hbtbem{width:190px}.tablet.svelte-1hbtbem p.svelte-1hbtbem{font-size:1.8em;line-height:1.5em}.tablet.svelte-1hbtbem .Heroimg.svelte-1hbtbem{width:100%;height:900px}.tablet.svelte-1hbtbem .description.svelte-1hbtbem{width:100%;height:900px;background:transparent no-repeat center;background-size:cover;position:relative;object-fit:cover}.mobile.svelte-1hbtbem p.svelte-1hbtbem{font-size:1.5em;line-height:1.5em}.mobile.svelte-1hbtbem .Heroimg.svelte-1hbtbem{width:100%;height:900px}.mobile.svelte-1hbtbem .description.svelte-1hbtbem{width:100%;height:900px;background:transparent no-repeat center;background-size:cover;position:relative;object-fit:cover}.foldable.svelte-1hbtbem p.svelte-1hbtbem{font-size:1em;line-height:1.5em}.foldable.svelte-1hbtbem .logoh1.svelte-1hbtbem{width:90px}.foldable.svelte-1hbtbem .Heroimg.svelte-1hbtbem{width:100%;height:600px}.foldable.svelte-1hbtbem .description.svelte-1hbtbem{width:100%;height:600px;background:transparent no-repeat center;background-size:cover;position:relative;object-fit:cover}',
  map: null
};
const Head = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main>
    ${validate_component(MediaQuery, "MediaQuery").$$render($$result, { query: "(min-width: 1281px)" }, {}, {
    default: ({ matches }) => {
      return `${matches ? `<div class="${"root desktop svelte-1hbtbem"}"><div class="${"Heroimg svelte-1hbtbem"}"><img class="${"description svelte-1hbtbem"}"${add_attribute("src", mid, 0)} alt="${"Description"}">
                <div class="${"Herotxt svelte-1hbtbem"}"><h1><img class="${"logoh1 svelte-1hbtbem"}"${add_attribute("src", Logoh1, 0)} alt="${"logop1"}"></h1>
                    <p class="${"mdc-typography--subtitle1 svelte-1hbtbem"}">Scoperto nel 1970,il giacimento di titanio prensente nel Parco del
                        Beigua <br> presenta un&#39;enorme minaccia per l&#39;ambiente e per gli
                        abitanti della zona. <br>
                        E&#39; in corso da anni una battaglia legale per un&#39;eventuale apertura
                        <br>
                        della miniera che causerebbe gravi problemi alla popolazione e<br>
                        alla biodiversita presenti nella zona.
                    </p></div></div></div>` : ``}`;
    }
  })}

    
    ${validate_component(MediaQuery, "MediaQuery").$$render($$result, {
    query: "(min-width: 601px) and (max-width: 1280px)"
  }, {}, {
    default: ({ matches }) => {
      return `${matches ? `<div class="${"root tablet svelte-1hbtbem"}"><div class="${"Heroimg svelte-1hbtbem"}"><img class="${"description svelte-1hbtbem"}"${add_attribute("src", mid, 0)} alt="${"Description"}">
                <div class="${"Herotxt svelte-1hbtbem"}"><h1><img class="${"logoh1 svelte-1hbtbem"}"${add_attribute("src", Logoh1, 0)} alt="${"logop1"}"></h1>
                    <p class="${"mdc-typography--subtitle1 svelte-1hbtbem"}">Scoperto nel 1970,il giacimento di titanio prensente nel Parco del
                        Beigua <br> presenta un&#39;enorme minaccia per l&#39;ambiente e per gli
                        abitanti della zona. <br>
                        E&#39; in corso da anni una battaglia legale per un&#39;eventuale apertura
                        <br>
                        della miniera che causerebbe gravi problemi alla popolazione e<br>
                        alla biodiversita presenti nella zona.
                    </p></div></div></div>` : ``}`;
    }
  })}

    
    ${validate_component(MediaQuery, "MediaQuery").$$render($$result, {
    query: "(min-width: 361px) and (max-width: 600px)"
  }, {}, {
    default: ({ matches }) => {
      return `${matches ? `<div class="${"root mobile svelte-1hbtbem"}"><div class="${"Heroimg svelte-1hbtbem"}"><img class="${"description svelte-1hbtbem"}"${add_attribute("src", mid, 0)} alt="${"Description"}">
                <div class="${"Herotxt svelte-1hbtbem"}"><h1><img class="${"logoh1 svelte-1hbtbem"}"${add_attribute("src", Logoh1, 0)} alt="${"logop1"}"></h1>
                    <p class="${"mdc-typography--subtitle1 svelte-1hbtbem"}">Scoperto nel 1970,il giacimento di titanio prensente nel Parco del
                        Beigua <br> presenta un&#39;enorme minaccia per l&#39;ambiente e per gli
                        abitanti della zona. <br>
                        E&#39; in corso da anni una battaglia legale per un&#39;eventuale apertura
                        <br>
                        della miniera che causerebbe gravi problemi alla popolazione e<br>
                        alla biodiversita presenti nella zona.
                    </p></div></div></div>` : ``}`;
    }
  })} 

    
    ${validate_component(MediaQuery, "MediaQuery").$$render($$result, { query: "(max-width: 360px)" }, {}, {
    default: ({ matches }) => {
      return `${matches ? `<div class="${"root foldable svelte-1hbtbem"}"><div class="${"Heroimg svelte-1hbtbem"}"><img class="${"description svelte-1hbtbem"}"${add_attribute("src", mid, 0)} alt="${"Description"}">
                <div class="${"Herotxt svelte-1hbtbem"}"><h1><img class="${"logoh1 svelte-1hbtbem"}"${add_attribute("src", Logoh1, 0)} alt="${"logop1"}"></h1>
                    <p class="${"mdc-typography--subtitle1 svelte-1hbtbem"}">Scoperto nel 1970,il giacimento di titanio prensente nel Parco del
                        Beigua <br> presenta un&#39;enorme minaccia per l&#39;ambiente e per gli
                        abitanti della zona. <br>
                        E&#39; in corso da anni una battaglia legale per un&#39;eventuale apertura
                        <br>
                        della miniera che causerebbe gravi problemi alla popolazione e<br>
                        alla biodiversita presenti nella zona.
                    </p></div></div></div>` : ``}`;
    }
  })} 

</main>`;
});
export { Head as H };
