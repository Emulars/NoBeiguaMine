import { c as create_ssr_component, v as validate_component, j as subscribe, i as add_attribute, l as escape } from "./index-b4318809.js";
import { C as Card, P as PrimaryAction, M as Media, a as Content } from "./index-1a27fcf7.js";
import { M as MediaQuery } from "./MediaQuery-ea883436.js";
import { w as writable } from "./index-6b5ffa68.js";
var vertical_news_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '.laycard.svelte-lf7q93.svelte-lf7q93{width:100%;justify-content:center}.cards.svelte-lf7q93.svelte-lf7q93{display:flex;flex-direction:column;justify-content:center;border:0ch}.more_articles.svelte-lf7q93.svelte-lf7q93{text-align:center;padding-top:15px;padding-bottom:30px}.buttom.svelte-lf7q93.svelte-lf7q93{background-color:#e5efc1;border:none;color:rgb(0, 0, 0);padding:10px 20px;text-align:center;text-decoration:none;display:inline-block;font-size:16px;margin:2px 1px;cursor:pointer;padding-bottom:15px}.text_b.svelte-lf7q93.svelte-lf7q93{font-family:"Oswald", sans-serif;text-decoration:none;color:black}.text_b.svelte-lf7q93.svelte-lf7q93,a.svelte-lf7q93.svelte-lf7q93:visited{color:black}.title.svelte-lf7q93.svelte-lf7q93{margin-top:30px;margin-bottom:15px;font-family:"Oswald", sans-serif}.desktop.svelte-lf7q93 .cards.svelte-lf7q93{display:flex;flex-direction:column;justify-content:space-evenly}.desktop.svelte-lf7q93 .card-container.svelte-lf7q93{width:350px}.tablet.svelte-lf7q93 .cards.svelte-lf7q93{display:flex;flex-direction:column;justify-content:space-evenly}.tablet.svelte-lf7q93 .card-container.svelte-lf7q93{width:400px}.mobile.svelte-lf7q93 .cards.svelte-lf7q93{display:flex;flex-direction:column;justify-content:space-evenly}.mobile.svelte-lf7q93 .card-container.svelte-lf7q93{width:250px}.svelte-lf7q93 .card-media-squaren1{background-image:url(../../images/card/card_1.jpg)}.svelte-lf7q93 .card-media-squaren2{background-image:url(../../images/card/card_2.jpg)}.svelte-lf7q93 .card-media-squaren3{background-image:url(../../images/card/card_3.jpg)}.card-container.svelte-lf7q93.svelte-lf7q93{margin:10px;width:300px}',
  map: null
};
const Vertical_news = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<main class="${"svelte-lf7q93"}">
    ${validate_component(MediaQuery, "MediaQuery").$$render($$result, { query: "(min-width: 1281px)" }, {}, {
    default: ({ matches }) => {
      return `${matches ? `<div class="${"root desktop svelte-lf7q93"}"><div class="${"mdc-typography--headline3 News svelte-lf7q93"}" style="${"text-align:center; padding-bottom:35px; font-family:'Oswald Regular',sans-serif;"}"><div class="${"mdc-typography--headline3 title svelte-lf7q93"}" style="${"text-decoration: underline; text-underline-offset: 0.5em; color: #39aea9;"}">- Ultime Notizie -
                    </div></div>
                <div class="${"cards svelte-lf7q93"}" style="${"align-items: center;"}"><div class="${"card-container svelte-lf7q93"}">${validate_component(Card, "Card").$$render($$result, { style: "min-width: 300px;" }, {}, {
        default: () => {
          return `${validate_component(PrimaryAction, "PrimaryAction").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Media, "Media").$$render($$result, {
                class: "card-media-squaren1",
                aspectRatio: "square"
              }, {}, {})}
                                ${validate_component(Content, "Content").$$render($$result, { class: "mdc-typography--body2" }, {}, {
                default: () => {
                  return `<h3 style="${"margin: 0;"}" class="${"svelte-lf7q93"}">PARCO DEL BEIGUA: SCOPRIAMO INSIEME LA RISERVA NATURALE CHE SI AFFACCIA SULLA COSTA LIGURE
                                    </h3>
                                    <span class="${"date svelte-lf7q93"}" style="${"background-color: #A2D5AB; margin:0; width:120px;color:white ;"}">09 Maggio 2022</span>`;
                }
              })}`;
            }
          })}`;
        }
      })}</div>
                    <div class="${"card-container svelte-lf7q93"}">${validate_component(Card, "Card").$$render($$result, { style: "min-width: 300px;" }, {}, {
        default: () => {
          return `${validate_component(PrimaryAction, "PrimaryAction").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Media, "Media").$$render($$result, {
                class: "card-media-squaren2",
                aspectRatio: "square"
              }, {}, {})}
                                ${validate_component(Content, "Content").$$render($$result, { class: "mdc-typography--body2" }, {}, {
                default: () => {
                  return `<h3 style="${"margin: 0;"}" class="${"svelte-lf7q93"}">MINIERA DI TITANIO NEL BEIGUA: L\u2019ALTRA FACCIA DELLA SPLENDIDA RISERVA NATURALE LIGURE
                                    </h3>
                                    <span class="${"date svelte-lf7q93"}" style="${"background-color: #A2D5AB; margin:0; width:120px;color:white ;"}">03 Maggio 2022</span>`;
                }
              })}`;
            }
          })}`;
        }
      })}</div>
                    <div class="${"card-container svelte-lf7q93"}">${validate_component(Card, "Card").$$render($$result, { style: "min-width: 300px;" }, {}, {
        default: () => {
          return `${validate_component(PrimaryAction, "PrimaryAction").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Media, "Media").$$render($$result, {
                class: "card-media-squaren3",
                aspectRatio: "square"
              }, {}, {})}
                                ${validate_component(Content, "Content").$$render($$result, { class: "mdc-typography--body2" }, {}, {
                default: () => {
                  return `<h3 style="${"margin: 0;"}" class="${"svelte-lf7q93"}">GIACIMENTO DI PIAMPALUDO, LA POPOLAZIONE INSORGE: 25.000 FIRME PER OPPORSI ALL\u2019APERTURA
                                    </h3>
                                    <span class="${"date svelte-lf7q93"}" style="${"background-color: #A2D5AB; margin:0; width:120px;color:white ;"}">27 Aprile 2022</span>`;
                }
              })}`;
            }
          })}`;
        }
      })}</div>
                    <div class="${"more_articles svelte-lf7q93"}"><div class="${"buttom svelte-lf7q93"}"><a class="${"text_b svelte-lf7q93"}" href="${"/articles"}">MOSTRA ALTRI</a></div></div></div></div>` : ``}`;
    }
  })}

    
    ${validate_component(MediaQuery, "MediaQuery").$$render($$result, {
    query: "(min-width: 601px) and (max-width: 1280px)"
  }, {}, {
    default: ({ matches }) => {
      return `${matches ? `<div class="${"root tablet svelte-lf7q93"}"><div class="${"laycard svelte-lf7q93"}">
                    <div class="${"mdc-typography--headline3 News svelte-lf7q93"}" style="${"text-align:center; padding-top:30px; padding-bottom:15px; font-family:'Oswald Regular',sans-serif;"}"><div class="${"mdc-typography--headline3 title svelte-lf7q93"}" style="${"text-decoration: underline; text-underline-offset: 0.5em; color: #39aea9;"}">- Ultime Notizie -
                        </div></div>
                    <div class="${"cards svelte-lf7q93"}" style="${"align-items: center;"}"><div class="${"card-container svelte-lf7q93"}">${validate_component(Card, "Card").$$render($$result, { style: "min-width: 300px;" }, {}, {
        default: () => {
          return `${validate_component(PrimaryAction, "PrimaryAction").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Media, "Media").$$render($$result, {
                class: "card-media-squaren1",
                aspectRatio: "square"
              }, {}, {})}
                                    ${validate_component(Content, "Content").$$render($$result, { class: "mdc-typography--body2" }, {}, {
                default: () => {
                  return `<h3 style="${"margin: 0;"}" class="${"svelte-lf7q93"}">PARCO DEL BEIGUA: SCOPRIAMO INSIEME LA RISERVA NATURALE CHE SI AFFACCIA SULLA COSTA LIGURE
                                        </h3>
                                        <span class="${"date svelte-lf7q93"}" style="${"background-color: #A2D5AB; margin:0; width:120px;color:white ;"}">09 Maggio 2022</span>`;
                }
              })}`;
            }
          })}`;
        }
      })}</div>
                        <div class="${"card-container svelte-lf7q93"}">${validate_component(Card, "Card").$$render($$result, { style: "min-width: 300px;" }, {}, {
        default: () => {
          return `${validate_component(PrimaryAction, "PrimaryAction").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Media, "Media").$$render($$result, {
                class: "card-media-squaren2",
                aspectRatio: "square"
              }, {}, {})}
                                    ${validate_component(Content, "Content").$$render($$result, { class: "mdc-typography--body2" }, {}, {
                default: () => {
                  return `<h3 style="${"margin: 0;"}" class="${"svelte-lf7q93"}">MINIERA DI TITANIO NEL BEIGUA: L\u2019ALTRA FACCIA DELLA SPLENDIDA RISERVA NATURALE LIGURE
                                        </h3>
                                        <span class="${"date svelte-lf7q93"}" style="${"background-color: #A2D5AB; margin:0; width:120px;color:white ;"}">03 Maggio 2022</span>`;
                }
              })}`;
            }
          })}`;
        }
      })}</div>
                        <div class="${"card-container svelte-lf7q93"}">${validate_component(Card, "Card").$$render($$result, { style: "min-width: 300px;" }, {}, {
        default: () => {
          return `${validate_component(PrimaryAction, "PrimaryAction").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Media, "Media").$$render($$result, {
                class: "card-media-squaren3",
                aspectRatio: "square"
              }, {}, {})}
                                    ${validate_component(Content, "Content").$$render($$result, { class: "mdc-typography--body2" }, {}, {
                default: () => {
                  return `<h3 style="${"margin: 0;"}" class="${"svelte-lf7q93"}">GIACIMENTO DI PIAMPALUDO, LA POPOLAZIONE INSORGE: 25.000 FIRME PER OPPORSI ALL\u2019APERTURA
                                        </h3>
                                        <span class="${"date svelte-lf7q93"}" style="${"background-color: #A2D5AB; margin:0; width:120px;color:white ;"}">27 Aprile 2022</span>`;
                }
              })}`;
            }
          })}`;
        }
      })}</div></div>
                    <div class="${"more_articles svelte-lf7q93"}"><div class="${"buttom svelte-lf7q93"}"><a class="${"text_b svelte-lf7q93"}" href="${"/articles"}">MOSTRA ALTRI</a></div></div></div></div>` : ``}`;
    }
  })}

    
    ${validate_component(MediaQuery, "MediaQuery").$$render($$result, { query: "(max-width: 600px)" }, {}, {
    default: ({ matches }) => {
      return `${matches ? `<div class="${"root mobile svelte-lf7q93"}"><div class="${"laycard svelte-lf7q93"}">
                    <div class="${"mdc-typography--headline3 News svelte-lf7q93"}" style="${"text-align:center; padding-top:30px; padding-bottom:15px; font-family:'Oswald Regular',sans-serif;"}"><div class="${"mdc-typography--headline3 title svelte-lf7q93"}" style="${"font-size:35px; text-decoration: underline; text-underline-offset: 0.5em; color: #39aea9;"}">- Ultime Notizie -
                        </div></div>
                    <div class="${"cards svelte-lf7q93"}" style="${"align-items: center;"}"><div class="${"card-container svelte-lf7q93"}">${validate_component(Card, "Card").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(PrimaryAction, "PrimaryAction").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Media, "Media").$$render($$result, {
                class: "card-media-squaren1",
                aspectRatio: "square"
              }, {}, {})}
                                    ${validate_component(Content, "Content").$$render($$result, { class: "mdc-typography--body2" }, {}, {
                default: () => {
                  return `<h3 style="${"margin: 0;"}" class="${"svelte-lf7q93"}">PARCO DEL BEIGUA: SCOPRIAMO INSIEME LA RISERVA NATURALE CHE SI AFFACCIA SULLA COSTA LIGURE
                                        </h3>
                                        <span class="${"date svelte-lf7q93"}" style="${"background-color: #A2D5AB; margin:0; width:120px;color:white ;"}">09 Maggio 2022</span>`;
                }
              })}`;
            }
          })}`;
        }
      })}</div>
                        <div class="${"card-container svelte-lf7q93"}">${validate_component(Card, "Card").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(PrimaryAction, "PrimaryAction").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Media, "Media").$$render($$result, {
                class: "card-media-squaren2",
                aspectRatio: "square"
              }, {}, {})}
                                    ${validate_component(Content, "Content").$$render($$result, { class: "mdc-typography--body2" }, {}, {
                default: () => {
                  return `<h3 style="${"margin: 0;"}" class="${"svelte-lf7q93"}">MINIERA DI TITANIO NEL BEIGUA: L\u2019ALTRA FACCIA DELLA SPLENDIDA RISERVA NATURALE LIGURE
                                        </h3>
                                        <span class="${"date svelte-lf7q93"}" style="${"background-color: #A2D5AB; margin:0; width:120px;color:white ;"}">03 Maggio 2022</span>`;
                }
              })}`;
            }
          })}`;
        }
      })}</div>
                        <div class="${"card-container svelte-lf7q93"}">${validate_component(Card, "Card").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(PrimaryAction, "PrimaryAction").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Media, "Media").$$render($$result, {
                class: "card-media-squaren3",
                aspectRatio: "square"
              }, {}, {})}
                                    ${validate_component(Content, "Content").$$render($$result, { class: "mdc-typography--body2" }, {}, {
                default: () => {
                  return `<h3 style="${"margin: 0;"}" class="${"svelte-lf7q93"}">GIACIMENTO DI PIAMPALUDO, LA POPOLAZIONE INSORGE: 25.000 FIRME PER OPPORSI ALL\u2019APERTURA
                                        </h3>
                                        <span class="${"date svelte-lf7q93"}" style="${"background-color: #A2D5AB; margin:0; width:120px;color:white ;"}">27 Aprile 2022</span>`;
                }
              })}`;
            }
          })}`;
        }
      })}</div></div>
                    <div class="${"more_articles svelte-lf7q93"}"><div class="${"buttom svelte-lf7q93"}"><a class="${"text_b svelte-lf7q93"}" href="${"/articles"}">MOSTRA ALTRI</a></div></div></div></div>` : ``}`;
    }
  })}
</main>`;
});
var headArticle_svelte_svelte_type_style_lang = "";
const css = {
  code: '.Heroimg.svelte-19j2xpg.svelte-19j2xpg{width:100%;margin:0px;height:40%;background-position:center;background-repeat:no-repeat;background-size:cover;position:relative}.Herotxt.svelte-19j2xpg.svelte-19j2xpg{text-align:center;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);color:white;width:80%}.Herotxt.svelte-19j2xpg.svelte-19j2xpg{font-family:"Oswald", sans-serif;font-size:medium}.description.svelte-19j2xpg.svelte-19j2xpg{width:100%;height:40%;margin:0px;filter:brightness(40%)}.desktop.svelte-19j2xpg .subTitle.svelte-19j2xpg{font-size:2em;line-height:1.5em;padding:0 20% 0 20%}.desktop.svelte-19j2xpg .Heroimg.svelte-19j2xpg{width:100%;height:400px;background-image:url({base})}.desktop.svelte-19j2xpg .description.svelte-19j2xpg{width:100%;height:400px;background:transparent no-repeat center;background-size:cover;position:relative;object-fit:cover;background-image:url({base})}.tablet.svelte-19j2xpg .subTitle.svelte-19j2xpg{font-size:1.8em;line-height:1.5em;padding:0 20% 0 20%}.tablet.svelte-19j2xpg .Heroimg.svelte-19j2xpg{width:100%;height:500px}.tablet.svelte-19j2xpg .description.svelte-19j2xpg{width:100%;height:500px;background:transparent no-repeat center;background-size:cover;position:relative;object-fit:cover}.mobile.svelte-19j2xpg .Heroimg.svelte-19j2xpg{width:100%;height:900px}.mobile.svelte-19j2xpg .description.svelte-19j2xpg{width:100%;height:900px;background:transparent no-repeat center;background-size:cover;position:relative;object-fit:cover}.foldable.svelte-19j2xpg.svelte-19j2xpg{width:100%}.foldable.svelte-19j2xpg .Heroimg.svelte-19j2xpg{width:100%;height:600px}.foldable.svelte-19j2xpg .description.svelte-19j2xpg{width:100%;height:600px;background:transparent no-repeat center;background-size:cover;position:relative;object-fit:cover}',
  map: null
};
const title = writable("");
const image = writable("");
const HeadArticle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $image, $$unsubscribe_image;
  let $title, $$unsubscribe_title;
  $$unsubscribe_image = subscribe(image, (value) => $image = value);
  $$unsubscribe_title = subscribe(title, (value) => $title = value);
  $$result.css.add(css);
  $$unsubscribe_image();
  $$unsubscribe_title();
  return `<main>
    ${validate_component(MediaQuery, "MediaQuery").$$render($$result, { query: "(min-width: 1281px)" }, {}, {
    default: ({ matches }) => {
      return `${matches ? `<div class="${"root desktop svelte-19j2xpg"}"><div class="${"Heroimg svelte-19j2xpg"}"><img class="${"description svelte-19j2xpg"}"${add_attribute("src", $image, 0)} alt="${"Description"}">
                <div class="${"Herotxt svelte-19j2xpg"}"><div class="${"mdc-typography--headline4 subTitle svelte-19j2xpg"}">${escape($title)}</div></div></div></div>` : ``}`;
    }
  })}

    
    ${validate_component(MediaQuery, "MediaQuery").$$render($$result, {
    query: "(min-width: 601px) and (max-width: 1280px)"
  }, {}, {
    default: ({ matches }) => {
      return `${matches ? `<div class="${"root tablet svelte-19j2xpg"}"><div class="${"Heroimg svelte-19j2xpg"}"><img class="${"description svelte-19j2xpg"}"${add_attribute("src", $image, 0)} alt="${"Description"}">
                <div class="${"Herotxt svelte-19j2xpg"}"><div class="${"mdc-typography--headline4 subTitle svelte-19j2xpg"}">${escape($title)}</div></div></div></div>` : ``}`;
    }
  })}

    
    ${validate_component(MediaQuery, "MediaQuery").$$render($$result, {
    query: "(min-width: 361px) and (max-width: 600px)"
  }, {}, {
    default: ({ matches }) => {
      return `${matches ? `<div class="${"root mobile svelte-19j2xpg"}"><div class="${"Heroimg svelte-19j2xpg"}"><img class="${"description svelte-19j2xpg"}"${add_attribute("src", $image, 0)} alt="${"Description"}">
                <div class="${"Herotxt svelte-19j2xpg"}"><div class="${"mdc-typography--headline4 "}">${escape($title)}</div></div></div></div>` : ``}`;
    }
  })} 

    
    ${validate_component(MediaQuery, "MediaQuery").$$render($$result, { query: "(max-width: 360px)" }, {}, {
    default: ({ matches }) => {
      return `${matches ? `<div class="${"root foldable svelte-19j2xpg"}"><div class="${"Heroimg svelte-19j2xpg"}"><img class="${"description svelte-19j2xpg"}"${add_attribute("src", $image, 0)} alt="${"Description"}">
                <div class="${"Herotxt svelte-19j2xpg"}"><div class="${"mdc-typography--headline4"}">${escape($title)}</div></div></div></div>` : ``}`;
    }
  })} 

</main>`;
});
export { HeadArticle as H, Vertical_news as V, image as i, title as t };
