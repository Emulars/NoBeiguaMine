import { c as create_ssr_component, v as validate_component, l as escape } from "./index-b4318809.js";
import { C as Card, P as PrimaryAction, M as Media, a as Content } from "./index-1a27fcf7.js";
import { M as MediaQuery } from "./MediaQuery-ea883436.js";
var Card_1_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".date.svelte-144wfah{background-color:#a2d5ab;width:120px;color:white;padding:4px 4px 4px 4px}h3.svelte-144wfah{color:#39aea9;padding-bottom:0.5em}h5.svelte-144wfah{width:90%}.svelte-144wfah .mdc-card{box-shadow:none}.svelte-144wfah .card-media-16x9{background-image:url(../../../images/card/card_1.jpg);background-size:cover;filter:brightness(80%)}.desktop.svelte-144wfah {display:flow-root;margin:20px}.ltt_desktop.svelte-144wfah {display:inline-flex;margin:20px;justify-content:space-evenly}.tablet.svelte-144wfah {display:grid;margin:10px;justify-content:space-evenly}.mobile.svelte-144wfah {display:flow-root;margin:20px;justify-content:space-evenly}",
  map: null
};
const title$2 = "PARCO DEL BEIGUA: SCOPRIAMO INSIEME LA RISERVA NATURALE CHE SI AFFACCIA SULLA COSTA LIGURE";
const subTitle$2 = "09 Maggio 2022";
const content$2 = "Alla scoperta del Parco del Beigua, una delle zone pi\xF9 affascinanti della Liguria affacciata sul Mediterraneo e caratterizzata da una spiccata biodiversit\xE0.";
const Card_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<main class="${"svelte-144wfah"}">
    ${validate_component(MediaQuery, "MediaQuery").$$render($$result, { query: "(min-width: 1200px)" }, {}, {
    default: ({ matches }) => {
      return `${matches ? `<div class="${"root desktop svelte-144wfah"}"><div class="${"card-container svelte-144wfah"}">${validate_component(Card, "Card").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(PrimaryAction, "PrimaryAction").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Media, "Media").$$render($$result, {
                class: "card-media-16x9",
                aspectRatio: "16x9"
              }, {}, {})}
                    ${validate_component(Content, "Content").$$render($$result, { class: "mdc-typography--body2" }, {}, {
                default: () => {
                  return `<h3 style="${"margin: 0;"}" class="${"svelte-144wfah"}">${escape(title$2)}</h3>
                        <span class="${"date svelte-144wfah"}" style="${"background-color: #A2D5AB; margin:0; width:120px;color:white ;"}">${escape(subTitle$2)}</span>
                        <h5 class="${"mdc-typography--subtitle2 svelte-144wfah"}" style="${"color: #888;"}">${escape(content$2)}</h5>`;
                }
              })}`;
            }
          })}`;
        }
      })}</div></div>` : ``}`;
    }
  })}
  
      
      ${validate_component(MediaQuery, "MediaQuery").$$render($$result, {
    query: "(min-width: 992px) and (max-width: 1199px)"
  }, {}, {
    default: ({ matches }) => {
      return `${matches ? `<div class="${"root ltt_desktop svelte-144wfah"}"><div class="${"card-container svelte-144wfah"}">${validate_component(Card, "Card").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(PrimaryAction, "PrimaryAction").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Media, "Media").$$render($$result, {
                class: "card-media-16x9 ",
                aspectRatio: "16x9"
              }, {}, {})}
                    ${validate_component(Content, "Content").$$render($$result, { class: "mdc-typography--body2" }, {}, {
                default: () => {
                  return `<h3 style="${"margin: 0;"}" class="${"svelte-144wfah"}">${escape(title$2)}</h3>
                        <span class="${"date svelte-144wfah"}" style="${"background-color: #A2D5AB; margin:0; width:120px;color:white ;"}">${escape(subTitle$2)}</span>
                        <h5 class="${"mdc-typography--subtitle2 svelte-144wfah"}" style="${"color: #888;"}">${escape(content$2)}</h5>`;
                }
              })}`;
            }
          })}`;
        }
      })}</div></div>` : ``}`;
    }
  })}
  
    
    ${validate_component(MediaQuery, "MediaQuery").$$render($$result, {
    query: "(min-width: 601px) and (max-width: 991px)"
  }, {}, {
    default: ({ matches }) => {
      return `${matches ? `<div class="${"root tablet svelte-144wfah"}"><div class="${"card-container svelte-144wfah"}">${validate_component(Card, "Card").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(PrimaryAction, "PrimaryAction").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Media, "Media").$$render($$result, {
                class: "card-media-16x9",
                aspectRatio: "16x9"
              }, {}, {})}
                    ${validate_component(Content, "Content").$$render($$result, { class: "mdc-typography--body2" }, {}, {
                default: () => {
                  return `<h3 style="${"margin: 0;"}" class="${"svelte-144wfah"}">${escape(title$2)}</h3>
                        <span class="${"date svelte-144wfah"}" style="${"background-color: #A2D5AB; margin:0; width:120px;color:white ;"}">${escape(subTitle$2)}</span>
                        <h5 class="${"mdc-typography--subtitle2 svelte-144wfah"}" style="${"color: #888;"}">${escape(content$2)}</h5>`;
                }
              })}`;
            }
          })}`;
        }
      })}</div></div>` : ``}`;
    }
  })}
  
    
    ${validate_component(MediaQuery, "MediaQuery").$$render($$result, { query: "(max-width: 600px)" }, {}, {
    default: ({ matches }) => {
      return `${matches ? `<div class="${"root mobile svelte-144wfah"}"><div class="${"card-container svelte-144wfah"}">${validate_component(Card, "Card").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(PrimaryAction, "PrimaryAction").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Media, "Media").$$render($$result, {
                class: "card-media-16x9",
                aspectRatio: "16x9"
              }, {}, {})}
                    ${validate_component(Content, "Content").$$render($$result, { class: "mdc-typography--body2" }, {}, {
                default: () => {
                  return `<h3 style="${"margin: 0;"}" class="${"svelte-144wfah"}">${escape(title$2)}</h3>
                        <span class="${"date svelte-144wfah"}" style="${"background-color: #A2D5AB; margin:0; width:120px;color:white ;"}">${escape(subTitle$2)}</span>
                        <h5 class="${"mdc-typography--subtitle2 svelte-144wfah"}" style="${"color: #888;"}">${escape(content$2)}</h5>`;
                }
              })}`;
            }
          })}`;
        }
      })}</div></div>` : ``}`;
    }
  })} 
  </main>`;
});
var Card_2_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".date.svelte-726rws{background-color:#a2d5ab;width:120px;color:white;padding:4px 4px 4px 4px}h3.svelte-726rws{color:#39aea9;padding-bottom:0.5em}h5.svelte-726rws{width:90%}.svelte-726rws .mdc-card{box-shadow:none}.svelte-726rws .card-media-16x9{background-image:url(../../../images/card/card_2.jpg);background-size:cover;filter:brightness(80%)}.desktop.svelte-726rws {display:flow-root;margin:20px}.ltt_desktop.svelte-726rws {display:inline-flex;margin:20px;justify-content:space-evenly}.tablet.svelte-726rws {display:grid;margin:10px;justify-content:space-evenly}.mobile.svelte-726rws {display:flow-root;margin:20px;justify-content:space-evenly}",
  map: null
};
const title$1 = "MINIERA DI TITANIO NEL BEIGUA: L\u2019ALTRA FACCIA DELLA SPLENDIDA RISERVA NATURALE LIGURE";
const subTitle$1 = "03 Maggio 2022";
const content$1 = "La popolazione ligure si oppone all\u2019apertura della miniera di titanio presente nel Beigua, 25.000 persone firmano la petizione: \u201C\xC8 una scelta sbagliata, rischi ambientali evidenti\u201D.";
const Card_2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<main class="${"svelte-726rws"}">
    ${validate_component(MediaQuery, "MediaQuery").$$render($$result, { query: "(min-width: 1200px)" }, {}, {
    default: ({ matches }) => {
      return `${matches ? `<div class="${"root desktop svelte-726rws"}"><div class="${"card-container svelte-726rws"}">${validate_component(Card, "Card").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(PrimaryAction, "PrimaryAction").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Media, "Media").$$render($$result, {
                class: "card-media-16x9",
                aspectRatio: "16x9"
              }, {}, {})}
                    ${validate_component(Content, "Content").$$render($$result, { class: "mdc-typography--body2" }, {}, {
                default: () => {
                  return `<h3 style="${"margin: 0;"}" class="${"svelte-726rws"}">${escape(title$1)}</h3>
                        <span class="${"date svelte-726rws"}" style="${"background-color: #A2D5AB; margin:0; width:120px;color:white ;"}">${escape(subTitle$1)}</span>
                        <h5 class="${"mdc-typography--subtitle2 svelte-726rws"}" style="${"color: #888;"}">${escape(content$1)}</h5>`;
                }
              })}`;
            }
          })}`;
        }
      })}</div></div>` : ``}`;
    }
  })}
  
      
      ${validate_component(MediaQuery, "MediaQuery").$$render($$result, {
    query: "(min-width: 992px) and (max-width: 1199px)"
  }, {}, {
    default: ({ matches }) => {
      return `${matches ? `<div class="${"root ltt_desktop svelte-726rws"}"><div class="${"card-container svelte-726rws"}">${validate_component(Card, "Card").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(PrimaryAction, "PrimaryAction").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Media, "Media").$$render($$result, {
                class: "card-media-16x9",
                aspectRatio: "16x9"
              }, {}, {})}
                    ${validate_component(Content, "Content").$$render($$result, { class: "mdc-typography--body2" }, {}, {
                default: () => {
                  return `<h3 style="${"margin: 0;"}" class="${"svelte-726rws"}">${escape(title$1)}</h3>
                        <span class="${"date svelte-726rws"}" style="${"background-color: #A2D5AB; margin:0; width:120px;color:white ;"}">${escape(subTitle$1)}</span>
                        <h5 class="${"mdc-typography--subtitle2 svelte-726rws"}" style="${"color: #888;"}">${escape(content$1)}</h5>`;
                }
              })}`;
            }
          })}`;
        }
      })}</div></div>` : ``}`;
    }
  })}
  
    
    ${validate_component(MediaQuery, "MediaQuery").$$render($$result, {
    query: "(min-width: 601px) and (max-width: 991px)"
  }, {}, {
    default: ({ matches }) => {
      return `${matches ? `<div class="${"root tablet svelte-726rws"}"><div class="${"card-container svelte-726rws"}">${validate_component(Card, "Card").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(PrimaryAction, "PrimaryAction").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Media, "Media").$$render($$result, {
                class: "card-media-16x9",
                aspectRatio: "16x9"
              }, {}, {})}
                    ${validate_component(Content, "Content").$$render($$result, { class: "mdc-typography--body2" }, {}, {
                default: () => {
                  return `<h3 style="${"margin: 0;"}" class="${"svelte-726rws"}">${escape(title$1)}</h3>
                        <span class="${"date svelte-726rws"}" style="${"background-color: #A2D5AB; margin:0; width:120px;color:white ;"}">${escape(subTitle$1)}</span>
                        <h5 class="${"mdc-typography--subtitle2 svelte-726rws"}" style="${"color: #888;"}">${escape(content$1)}</h5>`;
                }
              })}`;
            }
          })}`;
        }
      })}</div></div>` : ``}`;
    }
  })}
  
    
    ${validate_component(MediaQuery, "MediaQuery").$$render($$result, { query: "(max-width: 600px)" }, {}, {
    default: ({ matches }) => {
      return `${matches ? `<div class="${"root mobile svelte-726rws"}"><div class="${"card-container svelte-726rws"}">${validate_component(Card, "Card").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(PrimaryAction, "PrimaryAction").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Media, "Media").$$render($$result, {
                class: "card-media-16x9",
                aspectRatio: "16x9"
              }, {}, {})}
                    ${validate_component(Content, "Content").$$render($$result, { class: "mdc-typography--body2" }, {}, {
                default: () => {
                  return `<h3 style="${"margin: 0;"}" class="${"svelte-726rws"}">${escape(title$1)}</h3>
                        <span class="${"date svelte-726rws"}" style="${"background-color: #A2D5AB; margin:0; width:120px;color:white ;"}">${escape(subTitle$1)}</span>
                        <h5 class="${"mdc-typography--subtitle2 svelte-726rws"}" style="${"color: #888;"}">${escape(content$1)}</h5>`;
                }
              })}`;
            }
          })}`;
        }
      })}</div></div>` : ``}`;
    }
  })} 
  </main>`;
});
var Card_3_svelte_svelte_type_style_lang = "";
const css = {
  code: ".date.svelte-1xyxax7{background-color:#a2d5ab;width:120px;color:white;padding:4px 4px 4px 4px}h3.svelte-1xyxax7{color:#39aea9;padding-bottom:0.5em}h5.svelte-1xyxax7{width:90%}.svelte-1xyxax7 .mdc-card{box-shadow:none}.svelte-1xyxax7 .card-media-16x9{background-image:url(../../../images/card/card_3.jpg);background-size:cover;filter:brightness(80%)}.desktop.svelte-1xyxax7 {display:flow-root;margin:20px}.ltt_desktop.svelte-1xyxax7 {display:inline-flex;margin:20px;justify-content:space-evenly}.tablet.svelte-1xyxax7 {display:grid;margin:10px;justify-content:space-evenly}.mobile.svelte-1xyxax7 {display:flow-root;margin:20px;justify-content:space-evenly}",
  map: null
};
const title = "GIACIMENTO DI PIAMPALUDO, LA POPOLAZIONE INSORGE: 25.000 FIRME PER OPPORSI ALL\u2019APERTURA";
const subTitle = "27 Aprile 2022";
const content = "La popolazione ligure si oppone all\u2019apertura della miniera di titanio presente nel Beigua, 25.000 persone firmano la petizione: \u201C\xC8 una scelta sbagliata, rischi ambientali evidenti\u201D.";
const Card_3 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main class="${"svelte-1xyxax7"}">
    ${validate_component(MediaQuery, "MediaQuery").$$render($$result, { query: "(min-width: 1200px)" }, {}, {
    default: ({ matches }) => {
      return `${matches ? `<div class="${"root desktop svelte-1xyxax7"}"><div class="${"card-container svelte-1xyxax7"}">${validate_component(Card, "Card").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(PrimaryAction, "PrimaryAction").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Media, "Media").$$render($$result, {
                class: "card-media-16x9",
                aspectRatio: "16x9"
              }, {}, {})}
                    ${validate_component(Content, "Content").$$render($$result, { class: "mdc-typography--body2" }, {}, {
                default: () => {
                  return `<h3 style="${"margin: 0;"}" class="${"svelte-1xyxax7"}">${escape(title)}</h3>
                        <span class="${"date svelte-1xyxax7"}" style="${"background-color: #A2D5AB; margin:0; width:120px;color:white ;"}">${escape(subTitle)}</span>
                        <h5 class="${"mdc-typography--subtitle2 svelte-1xyxax7"}" style="${"color: #888;"}">${escape(content)}</h5>`;
                }
              })}`;
            }
          })}`;
        }
      })}</div></div>` : ``}`;
    }
  })}
  
      
      ${validate_component(MediaQuery, "MediaQuery").$$render($$result, {
    query: "(min-width: 992px) and (max-width: 1199px)"
  }, {}, {
    default: ({ matches }) => {
      return `${matches ? `<div class="${"root ltt_desktop svelte-1xyxax7"}"><div class="${"card-container svelte-1xyxax7"}">${validate_component(Card, "Card").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(PrimaryAction, "PrimaryAction").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Media, "Media").$$render($$result, {
                class: "card-media-16x9",
                aspectRatio: "16x9"
              }, {}, {})}
                    ${validate_component(Content, "Content").$$render($$result, { class: "mdc-typography--body2" }, {}, {
                default: () => {
                  return `<h3 style="${"margin: 0;"}" class="${"svelte-1xyxax7"}">${escape(title)}</h3>
                        <span class="${"date svelte-1xyxax7"}" style="${"background-color: #A2D5AB; margin:0; width:120px;color:white ;"}">${escape(subTitle)}</span>
                        <h5 class="${"mdc-typography--subtitle2 svelte-1xyxax7"}" style="${"color: #888;"}">${escape(content)}</h5>`;
                }
              })}`;
            }
          })}`;
        }
      })}</div></div>` : ``}`;
    }
  })}
  
    
    ${validate_component(MediaQuery, "MediaQuery").$$render($$result, {
    query: "(min-width: 601px) and (max-width: 991px)"
  }, {}, {
    default: ({ matches }) => {
      return `${matches ? `<div class="${"root tablet svelte-1xyxax7"}"><div class="${"card-container svelte-1xyxax7"}">${validate_component(Card, "Card").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(PrimaryAction, "PrimaryAction").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Media, "Media").$$render($$result, {
                class: "card-media-16x9",
                aspectRatio: "16x9"
              }, {}, {})}
                    ${validate_component(Content, "Content").$$render($$result, { class: "mdc-typography--body2" }, {}, {
                default: () => {
                  return `<h3 style="${"margin: 0;"}" class="${"svelte-1xyxax7"}">${escape(title)}</h3>
                        <span class="${"date svelte-1xyxax7"}" style="${"background-color: #A2D5AB; margin:0; width:120px;color:white ;"}">${escape(subTitle)}</span>
                        <h5 class="${"mdc-typography--subtitle2 svelte-1xyxax7"}" style="${"color: #888;"}">${escape(content)}</h5>`;
                }
              })}`;
            }
          })}`;
        }
      })}</div></div>` : ``}`;
    }
  })}
  
    
    ${validate_component(MediaQuery, "MediaQuery").$$render($$result, { query: "(max-width: 600px)" }, {}, {
    default: ({ matches }) => {
      return `${matches ? `<div class="${"root mobile svelte-1xyxax7"}"><div class="${"card-container svelte-1xyxax7"}">${validate_component(Card, "Card").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(PrimaryAction, "PrimaryAction").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Media, "Media").$$render($$result, {
                class: "card-media-16x9",
                aspectRatio: "16x9"
              }, {}, {})}
                    ${validate_component(Content, "Content").$$render($$result, { class: "mdc-typography--body2" }, {}, {
                default: () => {
                  return `<h3 style="${"margin: 0;"}" class="${"svelte-1xyxax7"}">${escape(title)}</h3>
                        <span class="${"date svelte-1xyxax7"}" style="${"background-color: #A2D5AB; margin:0; width:120px;color:white ;"}">${escape(subTitle)}</span>
                        <h5 class="${"mdc-typography--subtitle2 svelte-1xyxax7"}" style="${"color: #888;"}">${escape(content)}</h5>`;
                }
              })}`;
            }
          })}`;
        }
      })}</div></div>` : ``}`;
    }
  })} 
  </main>`;
});
export { Card_1 as C, Card_2 as a, Card_3 as b };
