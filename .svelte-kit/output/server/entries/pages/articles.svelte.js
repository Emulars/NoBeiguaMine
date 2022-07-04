import { c as create_ssr_component, v as validate_component, l as escape, k as createEventDispatcher } from "../../chunks/index-b4318809.js";
import { M as MediaQuery } from "../../chunks/MediaQuery-ea883436.js";
import { C as Card_1, a as Card_2, b as Card_3 } from "../../chunks/Card_3-370c336a.js";
import { C as Card, P as PrimaryAction, M as Media, a as Content } from "../../chunks/index-1a27fcf7.js";
import "../../chunks/classAdderBuilder-f812527e.js";
var Card_4_svelte_svelte_type_style_lang = "";
const css$7 = {
  code: ".date.svelte-1kaeqau{background-color:#a2d5ab;width:120px;color:white;padding:4px 4px 4px 4px}h3.svelte-1kaeqau{color:#39aea9;padding-bottom:0.5em}h5.svelte-1kaeqau{width:90%}.svelte-1kaeqau .mdc-card{box-shadow:none}.svelte-1kaeqau .card-media-16x9{background-image:url(../../../images/card/card_4.jpg);background-size:cover;filter:brightness(80%)}.desktop.svelte-1kaeqau {display:flow-root;margin:20px}.ltt_desktop.svelte-1kaeqau {display:inline-flex;margin:20px;justify-content:space-evenly}.tablet.svelte-1kaeqau {display:grid;margin:10px;justify-content:space-evenly}.mobile.svelte-1kaeqau {display:flow-root;margin:20px;justify-content:space-evenly}",
  map: null
};
const title$6 = "PARCO DEL BEIGUA, ECCO QUALI RISCHI COMPORTEREBBE L\u2019APERTURA DELLA MINIERA DI TITANIO";
const subTitle$6 = "23 Aprile 2022";
const content$6 = "L\u2019apertura della miniera del Parco del Beigua e la conseguente estrazione del titanio dal giacimento di Piampaludo sarebbe una scelta sbagliata: numerosi i rischi ambientali e sanitari.";
const Card_4 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$7);
  return `<main class="${"svelte-1kaeqau"}">
    ${validate_component(MediaQuery, "MediaQuery").$$render($$result, { query: "(min-width: 1200px)" }, {}, {
    default: ({ matches }) => {
      return `${matches ? `<div class="${"root desktop svelte-1kaeqau"}"><div class="${"card-container svelte-1kaeqau"}">${validate_component(Card, "Card").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(PrimaryAction, "PrimaryAction").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Media, "Media").$$render($$result, {
                class: "card-media-16x9",
                aspectRatio: "16x9"
              }, {}, {})}
                    ${validate_component(Content, "Content").$$render($$result, { class: "mdc-typography--body2" }, {}, {
                default: () => {
                  return `<h3 style="${"margin: 0;"}" class="${"svelte-1kaeqau"}">${escape(title$6)}</h3>
                        <span class="${"date svelte-1kaeqau"}" style="${"background-color: #A2D5AB; margin:0; width:120px;color:white ;"}">${escape(subTitle$6)}</span>
                        <h5 class="${"mdc-typography--subtitle2 svelte-1kaeqau"}" style="${"color: #888;"}">${escape(content$6)}</h5>`;
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
      return `${matches ? `<div class="${"root ltt_desktop svelte-1kaeqau"}"><div class="${"card-container svelte-1kaeqau"}">${validate_component(Card, "Card").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(PrimaryAction, "PrimaryAction").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Media, "Media").$$render($$result, {
                class: "card-media-16x9 ",
                aspectRatio: "16x9"
              }, {}, {})}
                    ${validate_component(Content, "Content").$$render($$result, { class: "mdc-typography--body2" }, {}, {
                default: () => {
                  return `<h3 style="${"margin: 0;"}" class="${"svelte-1kaeqau"}">${escape(title$6)}</h3>
                        <span class="${"date svelte-1kaeqau"}" style="${"background-color: #A2D5AB; margin:0; width:120px;color:white ;"}">${escape(subTitle$6)}</span>
                        <h5 class="${"mdc-typography--subtitle2 svelte-1kaeqau"}" style="${"color: #888;"}">${escape(content$6)}</h5>`;
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
      return `${matches ? `<div class="${"root tablet svelte-1kaeqau"}"><div class="${"card-container svelte-1kaeqau"}">${validate_component(Card, "Card").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(PrimaryAction, "PrimaryAction").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Media, "Media").$$render($$result, {
                class: "card-media-16x9",
                aspectRatio: "16x9"
              }, {}, {})}
                    ${validate_component(Content, "Content").$$render($$result, { class: "mdc-typography--body2" }, {}, {
                default: () => {
                  return `<h3 style="${"margin: 0;"}" class="${"svelte-1kaeqau"}">${escape(title$6)}</h3>
                        <span class="${"date svelte-1kaeqau"}" style="${"background-color: #A2D5AB; margin:0; width:120px;color:white ;"}">${escape(subTitle$6)}</span>
                        <h5 class="${"mdc-typography--subtitle2 svelte-1kaeqau"}" style="${"color: #888;"}">${escape(content$6)}</h5>`;
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
      return `${matches ? `<div class="${"root mobile svelte-1kaeqau"}"><div class="${"card-container svelte-1kaeqau"}">${validate_component(Card, "Card").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(PrimaryAction, "PrimaryAction").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Media, "Media").$$render($$result, {
                class: "card-media-16x9",
                aspectRatio: "16x9"
              }, {}, {})}
                    ${validate_component(Content, "Content").$$render($$result, { class: "mdc-typography--body2" }, {}, {
                default: () => {
                  return `<h3 style="${"margin: 0;"}" class="${"svelte-1kaeqau"}">${escape(title$6)}</h3>
                        <span class="${"date svelte-1kaeqau"}" style="${"background-color: #A2D5AB; margin:0; width:120px;color:white ;"}">${escape(subTitle$6)}</span>
                        <h5 class="${"mdc-typography--subtitle2 svelte-1kaeqau"}" style="${"color: #888;"}">${escape(content$6)}</h5>`;
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
var Card_5_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: ".date.svelte-1nmg40l{background-color:#a2d5ab;width:120px;color:white;padding:4px 4px 4px 4px}h3.svelte-1nmg40l{color:#39aea9;padding-bottom:0.5em}h5.svelte-1nmg40l{width:90%}.svelte-1nmg40l .mdc-card{box-shadow:none}.svelte-1nmg40l .card-media-16x9{background-image:url(../../../images/card/card_5.jpg);background-size:cover;filter:brightness(80%)}.desktop.svelte-1nmg40l {display:flow-root;margin:20px}.ltt_desktop.svelte-1nmg40l {display:inline-flex;margin:20px;justify-content:space-evenly}.tablet.svelte-1nmg40l {display:grid;margin:10px;justify-content:space-evenly}.mobile.svelte-1nmg40l {display:flow-root;margin:20px;justify-content:space-evenly}",
  map: null
};
const title$5 = "ALLA SCOPERTA DEL TITANIO, MINERALE DANNOSO CON POTENZIALIT\xC0 IMPORTANTI";
const subTitle$5 = "12 Aprile 2022";
const content$5 = "Presentato come pericoloso e dannoso per l\u2019ambiente e per la salute della popolazione, il titanio pu\xF2 rivelarsi in realt\xE0 una risorsa strategica.";
const Card_5 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$6);
  return `<main class="${"svelte-1nmg40l"}">
    ${validate_component(MediaQuery, "MediaQuery").$$render($$result, { query: "(min-width: 1200px)" }, {}, {
    default: ({ matches }) => {
      return `${matches ? `<div class="${"root desktop svelte-1nmg40l"}"><div class="${"card-container svelte-1nmg40l"}">${validate_component(Card, "Card").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(PrimaryAction, "PrimaryAction").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Media, "Media").$$render($$result, {
                class: "card-media-16x9",
                aspectRatio: "16x9"
              }, {}, {})}
                    ${validate_component(Content, "Content").$$render($$result, { class: "mdc-typography--body2" }, {}, {
                default: () => {
                  return `<h3 style="${"margin: 0;"}" class="${"svelte-1nmg40l"}">${escape(title$5)}</h3>
                        <span class="${"date svelte-1nmg40l"}" style="${"background-color: #A2D5AB; margin:0; width:120px;color:white ;"}">${escape(subTitle$5)}</span>
                        <h5 class="${"mdc-typography--subtitle2 svelte-1nmg40l"}" style="${"color: #888;"}">${escape(content$5)}</h5>`;
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
      return `${matches ? `<div class="${"root ltt_desktop svelte-1nmg40l"}"><div class="${"card-container svelte-1nmg40l"}">${validate_component(Card, "Card").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(PrimaryAction, "PrimaryAction").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Media, "Media").$$render($$result, {
                class: "card-media-16x9 ",
                aspectRatio: "16x9"
              }, {}, {})}
                    ${validate_component(Content, "Content").$$render($$result, { class: "mdc-typography--body2" }, {}, {
                default: () => {
                  return `<h3 style="${"margin: 0;"}" class="${"svelte-1nmg40l"}">${escape(title$5)}</h3>
                        <span class="${"date svelte-1nmg40l"}" style="${"background-color: #A2D5AB; margin:0; width:120px;color:white ;"}">${escape(subTitle$5)}</span>
                        <h5 class="${"mdc-typography--subtitle2 svelte-1nmg40l"}" style="${"color: #888;"}">${escape(content$5)}</h5>`;
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
      return `${matches ? `<div class="${"root tablet svelte-1nmg40l"}"><div class="${"card-container svelte-1nmg40l"}">${validate_component(Card, "Card").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(PrimaryAction, "PrimaryAction").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Media, "Media").$$render($$result, {
                class: "card-media-16x9",
                aspectRatio: "16x9"
              }, {}, {})}
                    ${validate_component(Content, "Content").$$render($$result, { class: "mdc-typography--body2" }, {}, {
                default: () => {
                  return `<h3 style="${"margin: 0;"}" class="${"svelte-1nmg40l"}">${escape(title$5)}</h3>
                        <span class="${"date svelte-1nmg40l"}" style="${"background-color: #A2D5AB; margin:0; width:120px;color:white ;"}">${escape(subTitle$5)}</span>
                        <h5 class="${"mdc-typography--subtitle2 svelte-1nmg40l"}" style="${"color: #888;"}">${escape(content$5)}</h5>`;
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
      return `${matches ? `<div class="${"root mobile svelte-1nmg40l"}"><div class="${"card-container svelte-1nmg40l"}">${validate_component(Card, "Card").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(PrimaryAction, "PrimaryAction").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Media, "Media").$$render($$result, {
                class: "card-media-16x9",
                aspectRatio: "16x9"
              }, {}, {})}
                    ${validate_component(Content, "Content").$$render($$result, { class: "mdc-typography--body2" }, {}, {
                default: () => {
                  return `<h3 style="${"margin: 0;"}" class="${"svelte-1nmg40l"}">${escape(title$5)}</h3>
                        <span class="${"date svelte-1nmg40l"}" style="${"background-color: #A2D5AB; margin:0; width:120px;color:white ;"}">${escape(subTitle$5)}</span>
                        <h5 class="${"mdc-typography--subtitle2 svelte-1nmg40l"}" style="${"color: #888;"}">${escape(content$5)}</h5>`;
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
var Card_6_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: ".date.svelte-1ehccyg{background-color:#a2d5ab;width:120px;color:white;padding:4px 4px 4px 4px}h3.svelte-1ehccyg{color:#39aea9;padding-bottom:0.5em}h5.svelte-1ehccyg{width:90%}.svelte-1ehccyg .mdc-card{box-shadow:none}.svelte-1ehccyg .card-media-16x9{background-image:url(../../../images/card/card_6.jpg);background-size:cover;filter:brightness(80%)}.desktop.svelte-1ehccyg {display:flow-root;margin:20px}.ltt_desktop.svelte-1ehccyg {display:inline-flex;margin:20px;justify-content:space-evenly}.tablet.svelte-1ehccyg {display:grid;margin:10px;justify-content:space-evenly}.mobile.svelte-1ehccyg {display:flow-root;margin:20px;justify-content:space-evenly}",
  map: null
};
const title$4 = "BEIGUA, CHE DESTINO SPETTER\xC0 ALLA FLORA E ALLA FAUNA CON L\u2019APERTURA DELLA MINERA DI TITANIO";
const subTitle$4 = "03 Aprile 2022";
const content$4 = "Perch\xE9 l\u2019apertura della miniera di titanio presente nel parco del Beigua pu\xF2 uccidere la flora e la fauna della zona: analizziamo tutte le conseguenze di questa scelta.";
const Card_6 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$5);
  return `<main class="${"svelte-1ehccyg"}">
    ${validate_component(MediaQuery, "MediaQuery").$$render($$result, { query: "(min-width: 1200px)" }, {}, {
    default: ({ matches }) => {
      return `${matches ? `<div class="${"root desktop svelte-1ehccyg"}"><div class="${"card-container svelte-1ehccyg"}">${validate_component(Card, "Card").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(PrimaryAction, "PrimaryAction").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Media, "Media").$$render($$result, {
                class: "card-media-16x9",
                aspectRatio: "16x9"
              }, {}, {})}
                    ${validate_component(Content, "Content").$$render($$result, { class: "mdc-typography--body2" }, {}, {
                default: () => {
                  return `<h3 style="${"margin: 0;"}" class="${"svelte-1ehccyg"}">${escape(title$4)}</h3>
                        <span class="${"date svelte-1ehccyg"}" style="${"background-color: #A2D5AB; margin:0; width:120px;color:white ;"}">${escape(subTitle$4)}</span>
                        <h5 class="${"mdc-typography--subtitle2 svelte-1ehccyg"}" style="${"color: #888;"}">${escape(content$4)}</h5>`;
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
      return `${matches ? `<div class="${"root ltt_desktop svelte-1ehccyg"}"><div class="${"card-container svelte-1ehccyg"}">${validate_component(Card, "Card").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(PrimaryAction, "PrimaryAction").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Media, "Media").$$render($$result, {
                class: "card-media-16x9 ",
                aspectRatio: "16x9"
              }, {}, {})}
                    ${validate_component(Content, "Content").$$render($$result, { class: "mdc-typography--body2" }, {}, {
                default: () => {
                  return `<h3 style="${"margin: 0;"}" class="${"svelte-1ehccyg"}">${escape(title$4)}</h3>
                        <span class="${"date svelte-1ehccyg"}" style="${"background-color: #A2D5AB; margin:0; width:120px;color:white ;"}">${escape(subTitle$4)}</span>
                        <h5 class="${"mdc-typography--subtitle2 svelte-1ehccyg"}" style="${"color: #888;"}">${escape(content$4)}</h5>`;
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
      return `${matches ? `<div class="${"root tablet svelte-1ehccyg"}"><div class="${"card-container svelte-1ehccyg"}">${validate_component(Card, "Card").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(PrimaryAction, "PrimaryAction").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Media, "Media").$$render($$result, {
                class: "card-media-16x9",
                aspectRatio: "16x9"
              }, {}, {})}
                    ${validate_component(Content, "Content").$$render($$result, { class: "mdc-typography--body2" }, {}, {
                default: () => {
                  return `<h3 style="${"margin: 0;"}" class="${"svelte-1ehccyg"}">${escape(title$4)}</h3>
                        <span class="${"date svelte-1ehccyg"}" style="${"background-color: #A2D5AB; margin:0; width:120px;color:white ;"}">${escape(subTitle$4)}</span>
                        <h5 class="${"mdc-typography--subtitle2 svelte-1ehccyg"}" style="${"color: #888;"}">${escape(content$4)}</h5>`;
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
      return `${matches ? `<div class="${"root mobile svelte-1ehccyg"}"><div class="${"card-container svelte-1ehccyg"}">${validate_component(Card, "Card").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(PrimaryAction, "PrimaryAction").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Media, "Media").$$render($$result, {
                class: "card-media-16x9",
                aspectRatio: "16x9"
              }, {}, {})}
                    ${validate_component(Content, "Content").$$render($$result, { class: "mdc-typography--body2" }, {}, {
                default: () => {
                  return `<h3 style="${"margin: 0;"}" class="${"svelte-1ehccyg"}">${escape(title$4)}</h3>
                        <span class="${"date svelte-1ehccyg"}" style="${"background-color: #A2D5AB; margin:0; width:120px;color:white ;"}">${escape(subTitle$4)}</span>
                        <h5 class="${"mdc-typography--subtitle2 svelte-1ehccyg"}" style="${"color: #888;"}">${escape(content$4)}</h5>`;
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
var Card_7_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".date.svelte-1qmdgtz{background-color:#a2d5ab;width:120px;color:white;padding:4px 4px 4px 4px}h3.svelte-1qmdgtz{color:#39aea9;padding-bottom:0.5em}h5.svelte-1qmdgtz{width:90%}.svelte-1qmdgtz .mdc-card{box-shadow:none}.svelte-1qmdgtz .card-media-16x9{background-image:url(../../../images/card/card_7.jpg);background-size:cover;filter:brightness(80%)}.desktop.svelte-1qmdgtz {display:flow-root;margin:20px}.ltt_desktop.svelte-1qmdgtz {display:inline-flex;margin:20px;justify-content:space-evenly}.tablet.svelte-1qmdgtz {display:grid;margin:10px;justify-content:space-evenly}.mobile.svelte-1qmdgtz {display:flow-root;margin:20px;justify-content:space-evenly}",
  map: null
};
const title$3 = "MINIERA NEL PARCO DEL BEIGUA: GLI SCENARI FUTURI";
const subTitle$3 = "28 Marzo 2022";
const content$3 = "Nelle ultime settimane ha fatto strada l\u2019ipotesi di una possibile apertura della miniera di titanio presente nel Parco regionale del Beigua: quali sono i rischi e gli scenari futuri di tale scelta.";
const Card_7 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<main class="${"svelte-1qmdgtz"}">
    ${validate_component(MediaQuery, "MediaQuery").$$render($$result, { query: "(min-width: 1200px)" }, {}, {
    default: ({ matches }) => {
      return `${matches ? `<div class="${"root desktop svelte-1qmdgtz"}"><div class="${"card-container svelte-1qmdgtz"}">${validate_component(Card, "Card").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(PrimaryAction, "PrimaryAction").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Media, "Media").$$render($$result, {
                class: "card-media-16x9",
                aspectRatio: "16x9"
              }, {}, {})}
                    ${validate_component(Content, "Content").$$render($$result, { class: "mdc-typography--body2" }, {}, {
                default: () => {
                  return `<h3 style="${"margin: 0;"}" class="${"svelte-1qmdgtz"}">${escape(title$3)}</h3>
                        <span class="${"date svelte-1qmdgtz"}" style="${"background-color: #A2D5AB; margin:0; width:120px;color:white ;"}">${escape(subTitle$3)}</span>
                        <h5 class="${"mdc-typography--subtitle2 svelte-1qmdgtz"}" style="${"color: #888;"}">${escape(content$3)}</h5>`;
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
      return `${matches ? `<div class="${"root ltt_desktop svelte-1qmdgtz"}"><div class="${"card-container svelte-1qmdgtz"}">${validate_component(Card, "Card").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(PrimaryAction, "PrimaryAction").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Media, "Media").$$render($$result, {
                class: "card-media-16x9 ",
                aspectRatio: "16x9"
              }, {}, {})}
                    ${validate_component(Content, "Content").$$render($$result, { class: "mdc-typography--body2" }, {}, {
                default: () => {
                  return `<h3 style="${"margin: 0;"}" class="${"svelte-1qmdgtz"}">${escape(title$3)}</h3>
                        <span class="${"date svelte-1qmdgtz"}" style="${"background-color: #A2D5AB; margin:0; width:120px;color:white ;"}">${escape(subTitle$3)}</span>
                        <h5 class="${"mdc-typography--subtitle2 svelte-1qmdgtz"}" style="${"color: #888;"}">${escape(content$3)}</h5>`;
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
      return `${matches ? `<div class="${"root tablet svelte-1qmdgtz"}"><div class="${"card-container svelte-1qmdgtz"}">${validate_component(Card, "Card").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(PrimaryAction, "PrimaryAction").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Media, "Media").$$render($$result, {
                class: "card-media-16x9",
                aspectRatio: "16x9"
              }, {}, {})}
                    ${validate_component(Content, "Content").$$render($$result, { class: "mdc-typography--body2" }, {}, {
                default: () => {
                  return `<h3 style="${"margin: 0;"}" class="${"svelte-1qmdgtz"}">${escape(title$3)}</h3>
                        <span class="${"date svelte-1qmdgtz"}" style="${"background-color: #A2D5AB; margin:0; width:120px;color:white ;"}">${escape(subTitle$3)}</span>
                        <h5 class="${"mdc-typography--subtitle2 svelte-1qmdgtz"}" style="${"color: #888;"}">${escape(content$3)}</h5>`;
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
      return `${matches ? `<div class="${"root mobile svelte-1qmdgtz"}"><div class="${"card-container svelte-1qmdgtz"}">${validate_component(Card, "Card").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(PrimaryAction, "PrimaryAction").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Media, "Media").$$render($$result, {
                class: "card-media-16x9",
                aspectRatio: "16x9"
              }, {}, {})}
                    ${validate_component(Content, "Content").$$render($$result, { class: "mdc-typography--body2" }, {}, {
                default: () => {
                  return `<h3 style="${"margin: 0;"}" class="${"svelte-1qmdgtz"}">${escape(title$3)}</h3>
                        <span class="${"date svelte-1qmdgtz"}" style="${"background-color: #A2D5AB; margin:0; width:120px;color:white ;"}">${escape(subTitle$3)}</span>
                        <h5 class="${"mdc-typography--subtitle2 svelte-1qmdgtz"}" style="${"color: #888;"}">${escape(content$3)}</h5>`;
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
var Card_8_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".date.svelte-kxkxya{background-color:#a2d5ab;width:120px;color:white;padding:4px 4px 4px 4px}h3.svelte-kxkxya{color:#39aea9;padding-bottom:0.5em}h5.svelte-kxkxya{width:90%}.svelte-kxkxya .mdc-card{box-shadow:none}.svelte-kxkxya .card-media-16x9{background-image:url(../../../images/card/card_8.jpg);background-size:cover;filter:brightness(80%)}.desktop.svelte-kxkxya {display:flow-root;margin:20px}.ltt_desktop.svelte-kxkxya {display:inline-flex;margin:20px;justify-content:space-evenly}.tablet.svelte-kxkxya {display:grid;margin:10px;justify-content:space-evenly}.mobile.svelte-kxkxya {display:flow-root;margin:20px;justify-content:space-evenly}",
  map: null
};
const title$2 = "SEA SHEPARD ED ECOWARRIOR: COME LOTTARE PER I DIRITTI AMBIENTALI DIVERTENDOSI";
const subTitle$2 = "20 marzo 2022";
const content$2 = "Sea Shepard ed EcoWarrior: la storia di organizzazioni che hanno fatto della lotta per i diritti ambientale il loro main purpose.";
const Card_8 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<main class="${"svelte-kxkxya"}">
    ${validate_component(MediaQuery, "MediaQuery").$$render($$result, { query: "(min-width: 1200px)" }, {}, {
    default: ({ matches }) => {
      return `${matches ? `<div class="${"root desktop svelte-kxkxya"}"><div class="${"card-container svelte-kxkxya"}">${validate_component(Card, "Card").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(PrimaryAction, "PrimaryAction").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Media, "Media").$$render($$result, {
                class: "card-media-16x9",
                aspectRatio: "16x9"
              }, {}, {})}
                    ${validate_component(Content, "Content").$$render($$result, { class: "mdc-typography--body2" }, {}, {
                default: () => {
                  return `<h3 style="${"margin: 0;"}" class="${"svelte-kxkxya"}">${escape(title$2)}</h3>
                        <span class="${"date svelte-kxkxya"}" style="${"background-color: #A2D5AB; margin:0; width:120px;color:white ;"}">${escape(subTitle$2)}</span>
                        <h5 class="${"mdc-typography--subtitle2 svelte-kxkxya"}" style="${"color: #888;"}">${escape(content$2)}</h5>`;
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
      return `${matches ? `<div class="${"root ltt_desktop svelte-kxkxya"}"><div class="${"card-container svelte-kxkxya"}">${validate_component(Card, "Card").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(PrimaryAction, "PrimaryAction").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Media, "Media").$$render($$result, {
                class: "card-media-16x9 ",
                aspectRatio: "16x9"
              }, {}, {})}
                    ${validate_component(Content, "Content").$$render($$result, { class: "mdc-typography--body2" }, {}, {
                default: () => {
                  return `<h3 style="${"margin: 0;"}" class="${"svelte-kxkxya"}">${escape(title$2)}</h3>
                        <span class="${"date svelte-kxkxya"}" style="${"background-color: #A2D5AB; margin:0; width:120px;color:white ;"}">${escape(subTitle$2)}</span>
                        <h5 class="${"mdc-typography--subtitle2 svelte-kxkxya"}" style="${"color: #888;"}">${escape(content$2)}</h5>`;
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
      return `${matches ? `<div class="${"root tablet svelte-kxkxya"}"><div class="${"card-container svelte-kxkxya"}">${validate_component(Card, "Card").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(PrimaryAction, "PrimaryAction").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Media, "Media").$$render($$result, {
                class: "card-media-16x9",
                aspectRatio: "16x9"
              }, {}, {})}
                    ${validate_component(Content, "Content").$$render($$result, { class: "mdc-typography--body2" }, {}, {
                default: () => {
                  return `<h3 style="${"margin: 0;"}" class="${"svelte-kxkxya"}">${escape(title$2)}</h3>
                        <span class="${"date svelte-kxkxya"}" style="${"background-color: #A2D5AB; margin:0; width:120px;color:white ;"}">${escape(subTitle$2)}</span>
                        <h5 class="${"mdc-typography--subtitle2 svelte-kxkxya"}" style="${"color: #888;"}">${escape(content$2)}</h5>`;
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
      return `${matches ? `<div class="${"root mobile svelte-kxkxya"}"><div class="${"card-container svelte-kxkxya"}">${validate_component(Card, "Card").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(PrimaryAction, "PrimaryAction").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Media, "Media").$$render($$result, {
                class: "card-media-16x9",
                aspectRatio: "16x9"
              }, {}, {})}
                    ${validate_component(Content, "Content").$$render($$result, { class: "mdc-typography--body2" }, {}, {
                default: () => {
                  return `<h3 style="${"margin: 0;"}" class="${"svelte-kxkxya"}">${escape(title$2)}</h3>
                        <span class="${"date svelte-kxkxya"}" style="${"background-color: #A2D5AB; margin:0; width:120px;color:white ;"}">${escape(subTitle$2)}</span>
                        <h5 class="${"mdc-typography--subtitle2 svelte-kxkxya"}" style="${"color: #888;"}">${escape(content$2)}</h5>`;
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
var Card_9_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".date.svelte-18znr5s{background-color:#a2d5ab;width:120px;color:white;padding:4px 4px 4px 4px}h3.svelte-18znr5s{color:#39aea9;padding-bottom:0.5em}h5.svelte-18znr5s{width:90%}.svelte-18znr5s .mdc-card{box-shadow:none}.svelte-18znr5s .card-media-16x9{background-image:url(../../../images/card/card_9.jpeg);background-size:cover;filter:brightness(80%)}.desktop.svelte-18znr5s {display:flow-root;margin:20px}.ltt_desktop.svelte-18znr5s {display:inline-flex;margin:20px;justify-content:space-evenly}.tablet.svelte-18znr5s {display:grid;margin:10px;justify-content:space-evenly}.mobile.svelte-18znr5s {display:flow-root;margin:20px;justify-content:space-evenly}",
  map: null
};
const title$1 = "2022 ANNO DI RIPARTENZE: NUOVE RICHERCHE DEL TITANIO NEL PARCO REGIONALE DEL BEIGUA";
const subTitle$1 = "17 Marzo 2022";
const content$1 = "Riparte la ricerca di materie prime nel Savonese: con il nuovo anno sono iniziate le indagini non invasive con il georadar per trovare tracce di titanio nel Beigua.";
const Card_9 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<main class="${"svelte-18znr5s"}">
    ${validate_component(MediaQuery, "MediaQuery").$$render($$result, { query: "(min-width: 1200px)" }, {}, {
    default: ({ matches }) => {
      return `${matches ? `<div class="${"root desktop svelte-18znr5s"}"><div class="${"card-container svelte-18znr5s"}">${validate_component(Card, "Card").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(PrimaryAction, "PrimaryAction").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Media, "Media").$$render($$result, {
                class: "card-media-16x9",
                aspectRatio: "16x9"
              }, {}, {})}
                    ${validate_component(Content, "Content").$$render($$result, { class: "mdc-typography--body2" }, {}, {
                default: () => {
                  return `<h3 style="${"margin: 0;"}" class="${"svelte-18znr5s"}">${escape(title$1)}</h3>
                        <span class="${"date svelte-18znr5s"}" style="${"background-color: #A2D5AB; margin:0; width:120px;color:white ;"}">${escape(subTitle$1)}</span>
                        <h5 class="${"mdc-typography--subtitle2 svelte-18znr5s"}" style="${"color: #888;"}">${escape(content$1)}</h5>`;
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
      return `${matches ? `<div class="${"root ltt_desktop svelte-18znr5s"}"><div class="${"card-container svelte-18znr5s"}">${validate_component(Card, "Card").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(PrimaryAction, "PrimaryAction").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Media, "Media").$$render($$result, {
                class: "card-media-16x9 ",
                aspectRatio: "16x9"
              }, {}, {})}
                    ${validate_component(Content, "Content").$$render($$result, { class: "mdc-typography--body2" }, {}, {
                default: () => {
                  return `<h3 style="${"margin: 0;"}" class="${"svelte-18znr5s"}">${escape(title$1)}</h3>
                        <span class="${"date svelte-18znr5s"}" style="${"background-color: #A2D5AB; margin:0; width:120px;color:white ;"}">${escape(subTitle$1)}</span>
                        <h5 class="${"mdc-typography--subtitle2 svelte-18znr5s"}" style="${"color: #888;"}">${escape(content$1)}</h5>`;
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
      return `${matches ? `<div class="${"root tablet svelte-18znr5s"}"><div class="${"card-container svelte-18znr5s"}">${validate_component(Card, "Card").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(PrimaryAction, "PrimaryAction").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Media, "Media").$$render($$result, {
                class: "card-media-16x9",
                aspectRatio: "16x9"
              }, {}, {})}
                    ${validate_component(Content, "Content").$$render($$result, { class: "mdc-typography--body2" }, {}, {
                default: () => {
                  return `<h3 style="${"margin: 0;"}" class="${"svelte-18znr5s"}">${escape(title$1)}</h3>
                        <span class="${"date svelte-18znr5s"}" style="${"background-color: #A2D5AB; margin:0; width:120px;color:white ;"}">${escape(subTitle$1)}</span>
                        <h5 class="${"mdc-typography--subtitle2 svelte-18znr5s"}" style="${"color: #888;"}">${escape(content$1)}</h5>`;
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
      return `${matches ? `<div class="${"root mobile svelte-18znr5s"}"><div class="${"card-container svelte-18znr5s"}">${validate_component(Card, "Card").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(PrimaryAction, "PrimaryAction").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Media, "Media").$$render($$result, {
                class: "card-media-16x9",
                aspectRatio: "16x9"
              }, {}, {})}
                    ${validate_component(Content, "Content").$$render($$result, { class: "mdc-typography--body2" }, {}, {
                default: () => {
                  return `<h3 style="${"margin: 0;"}" class="${"svelte-18znr5s"}">${escape(title$1)}</h3>
                        <span class="${"date svelte-18znr5s"}" style="${"background-color: #A2D5AB; margin:0; width:120px;color:white ;"}">${escape(subTitle$1)}</span>
                        <h5 class="${"mdc-typography--subtitle2 svelte-18znr5s"}" style="${"color: #888;"}">${escape(content$1)}</h5>`;
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
var Card_10_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".date.svelte-zrkdn3{background-color:#a2d5ab;width:120px;color:white;padding:4px 4px 4px 4px}h3.svelte-zrkdn3{color:#39aea9;padding-bottom:0.5em}h5.svelte-zrkdn3{width:90%}.svelte-zrkdn3 .mdc-card{box-shadow:none}.svelte-zrkdn3 .card-media-16x9{background-image:url(../../../images/card/card_10.jpg);background-size:cover;filter:brightness(80%)}.desktop.svelte-zrkdn3 {display:flow-root;margin:20px}.ltt_desktop.svelte-zrkdn3 {display:inline-flex;margin:20px;justify-content:space-evenly}.tablet.svelte-zrkdn3 {display:grid;margin:10px;justify-content:space-evenly}.mobile.svelte-zrkdn3 {display:flow-root;margin:20px;justify-content:space-evenly}",
  map: null
};
const title = "10.	TITANIO SUL BEIGUA, IL SINDACO DI SASSELLO: \u201CIL PARCO POTREBBE PERDERE IL RICONOSCIMENTO DELL\u2019UNESCO\u201D";
const subTitle = "12 Marzo 2022";
const content = "Il sindaco di Sassello, Daniele Buschiazzo, ha parlato dei rischi derivanti da una possibile apertura della miniera di titanio presente nel Parco del Beigua: tra questi anche il pericolo di essere rimossi tra i siti riconosciuti dall\u2019Unesco.";
const Card_10 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<main class="${"svelte-zrkdn3"}">
    ${validate_component(MediaQuery, "MediaQuery").$$render($$result, { query: "(min-width: 1200px)" }, {}, {
    default: ({ matches }) => {
      return `${matches ? `<div class="${"root desktop svelte-zrkdn3"}"><div class="${"card-container svelte-zrkdn3"}">${validate_component(Card, "Card").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(PrimaryAction, "PrimaryAction").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Media, "Media").$$render($$result, {
                class: "card-media-16x9",
                aspectRatio: "16x9"
              }, {}, {})}
                    ${validate_component(Content, "Content").$$render($$result, { class: "mdc-typography--body2" }, {}, {
                default: () => {
                  return `<h3 style="${"margin: 0;"}" class="${"svelte-zrkdn3"}">${escape(title)}</h3>
                        <span class="${"date svelte-zrkdn3"}" style="${"background-color: #A2D5AB; margin:0; width:120px;color:white ;"}">${escape(subTitle)}</span>
                        <h5 class="${"mdc-typography--subtitle2 svelte-zrkdn3"}" style="${"color: #888;"}">${escape(content)}</h5>`;
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
      return `${matches ? `<div class="${"root ltt_desktop svelte-zrkdn3"}"><div class="${"card-container svelte-zrkdn3"}">${validate_component(Card, "Card").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(PrimaryAction, "PrimaryAction").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Media, "Media").$$render($$result, {
                class: "card-media-16x9 ",
                aspectRatio: "16x9"
              }, {}, {})}
                    ${validate_component(Content, "Content").$$render($$result, { class: "mdc-typography--body2" }, {}, {
                default: () => {
                  return `<h3 style="${"margin: 0;"}" class="${"svelte-zrkdn3"}">${escape(title)}</h3>
                        <span class="${"date svelte-zrkdn3"}" style="${"background-color: #A2D5AB; margin:0; width:120px;color:white ;"}">${escape(subTitle)}</span>
                        <h5 class="${"mdc-typography--subtitle2 svelte-zrkdn3"}" style="${"color: #888;"}">${escape(content)}</h5>`;
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
      return `${matches ? `<div class="${"root tablet svelte-zrkdn3"}"><div class="${"card-container svelte-zrkdn3"}">${validate_component(Card, "Card").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(PrimaryAction, "PrimaryAction").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Media, "Media").$$render($$result, {
                class: "card-media-16x9",
                aspectRatio: "16x9"
              }, {}, {})}
                    ${validate_component(Content, "Content").$$render($$result, { class: "mdc-typography--body2" }, {}, {
                default: () => {
                  return `<h3 style="${"margin: 0;"}" class="${"svelte-zrkdn3"}">${escape(title)}</h3>
                        <span class="${"date svelte-zrkdn3"}" style="${"background-color: #A2D5AB; margin:0; width:120px;color:white ;"}">${escape(subTitle)}</span>
                        <h5 class="${"mdc-typography--subtitle2 svelte-zrkdn3"}" style="${"color: #888;"}">${escape(content)}</h5>`;
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
      return `${matches ? `<div class="${"root mobile svelte-zrkdn3"}"><div class="${"card-container svelte-zrkdn3"}">${validate_component(Card, "Card").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(PrimaryAction, "PrimaryAction").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Media, "Media").$$render($$result, {
                class: "card-media-16x9",
                aspectRatio: "16x9"
              }, {}, {})}
                    ${validate_component(Content, "Content").$$render($$result, { class: "mdc-typography--body2" }, {}, {
                default: () => {
                  return `<h3 style="${"margin: 0;"}" class="${"svelte-zrkdn3"}">${escape(title)}</h3>
                        <span class="${"date svelte-zrkdn3"}" style="${"background-color: #A2D5AB; margin:0; width:120px;color:white ;"}">${escape(subTitle)}</span>
                        <h5 class="${"mdc-typography--subtitle2 svelte-zrkdn3"}" style="${"color: #888;"}">${escape(content)}</h5>`;
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
var articles_svelte_svelte_type_style_lang = "";
const css = {
  code: '.title.svelte-1klp60g.svelte-1klp60g{text-align:center;font-family:"Oswald", sans-serif;margin-top:120px;margin-bottom:30px;text-decoration:underline;text-underline-offset:0.5em;color:#39aea9;font-weight:400;text-transform:uppercase;letter-spacing:3px}.more_articles.svelte-1klp60g.svelte-1klp60g{text-align:center;padding-top:15px;padding-bottom:30px}.buttom.svelte-1klp60g.svelte-1klp60g{background-color:#e5efc1;border:none;color:rgb(0, 0, 0);padding:10px 20px;text-align:center;text-decoration:none;display:inline-block;font-size:16px;margin:2px 1px;cursor:pointer;padding-bottom:15px}.text_b.svelte-1klp60g.svelte-1klp60g{font-family:"Oswald", sans-serif;text-decoration:none;color:black}.text_b.svelte-1klp60g.svelte-1klp60g,a.svelte-1klp60g.svelte-1klp60g:visited{color:black}.desktop.svelte-1klp60g .cards.svelte-1klp60g{display:flex;flex-direction:row;justify-content:space-evenly;margin-left:100px;margin-right:100px}.tablet.svelte-1klp60g .cards.svelte-1klp60g{display:flex;flex-direction:row;justify-content:space-evenly;margin-left:10px;margin-right:10px}.mobile.svelte-1klp60g .cards.svelte-1klp60g{display:flex;flex-direction:column;margin:10px;justify-content:space-evenly}.spacer.svelte-1klp60g.svelte-1klp60g{margin-top:15px;margin-bottom:30px}.perfect-card.svelte-1klp60g.svelte-1klp60g{width:1000px;margin:0 0 0 0}',
  map: null
};
const Articles = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let shown = false;
  let dispatch = createEventDispatcher();
  function show() {
    shown = !shown;
    dispatch("show", shown);
  }
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  $$result.css.add(css);
  return `



<main><div class="${"mdc-typography--headline3 title svelte-1klp60g"}">- Articoli -</div>

	
	${validate_component(MediaQuery, "MediaQuery").$$render($$result, { query: "(min-width: 992px)" }, {}, {
    default: ({ matches }) => {
      return `${matches ? `<div class="${"root desktop svelte-1klp60g"}"><div class="${"cards svelte-1klp60g"}">
					<div class="${"perfect-card svelte-1klp60g"}">${validate_component(Card_1, "Card_1").$$render($$result, {}, {}, {})}</div>
					<div class="${"perfect-card svelte-1klp60g"}">${validate_component(Card_2, "Card_2").$$render($$result, {}, {}, {})}</div>
					<div class="${"perfect-card svelte-1klp60g"}">${validate_component(Card_3, "Card_3").$$render($$result, {}, {}, {})}</div></div>

				<div class="${"cards svelte-1klp60g"}">
					<div class="${"perfect-card svelte-1klp60g"}">${validate_component(Card_4, "Card_4").$$render($$result, {}, {}, {})}</div>
					<div class="${"perfect-card svelte-1klp60g"}">${validate_component(Card_5, "Card_5").$$render($$result, {}, {}, {})}</div>
					<div class="${"perfect-card svelte-1klp60g"}">${validate_component(Card_6, "Card_6").$$render($$result, {}, {}, {})}</div></div>

				<div class="${"cards svelte-1klp60g"}">
					<div class="${"perfect-card svelte-1klp60g"}">${validate_component(Card_7, "Card_7").$$render($$result, {}, {}, {})}</div>
					<div class="${"perfect-card svelte-1klp60g"}">${validate_component(Card_8, "Card_8").$$render($$result, {}, {}, {})}</div>
					<div class="${"perfect-card svelte-1klp60g"}">${validate_component(Card_9, "Card_9").$$render($$result, {}, {}, {})}</div></div>

				${!shown ? `<div class="${"more_articles svelte-1klp60g"}"><div class="${"buttom svelte-1klp60g"}"><a class="${"text_b svelte-1klp60g"}" href="${"/articles"}">Mostra altri Articoli</a></div></div>` : ``}

				${shown ? `<div class="${"cards svelte-1klp60g"}"><div class="${"perfect-card svelte-1klp60g"}"></div>
						<div class="${"perfect-card svelte-1klp60g"}">${validate_component(Card_10, "Card_10").$$render($$result, {}, {}, {})}</div>
						<div class="${"perfect-card svelte-1klp60g"}"></div></div>` : ``}</div>` : ``}`;
    }
  })}

	
	${validate_component(MediaQuery, "MediaQuery").$$render($$result, {
    query: "(min-width: 768px) and (max-width: 991px)"
  }, {}, {
    default: ({ matches }) => {
      return `${matches ? `<div class="${"root tablet svelte-1klp60g"}"><div class="${"cards svelte-1klp60g"}">
					<div class="${"perfect-card svelte-1klp60g"}">${validate_component(Card_1, "Card_1").$$render($$result, {}, {}, {})}</div>
					<div class="${"perfect-card svelte-1klp60g"}">${validate_component(Card_2, "Card_2").$$render($$result, {}, {}, {})}</div></div>

				<div class="${"cards svelte-1klp60g"}">
					<div class="${"perfect-card svelte-1klp60g"}">${validate_component(Card_3, "Card_3").$$render($$result, {}, {}, {})}</div>
					<div class="${"perfect-card svelte-1klp60g"}">${validate_component(Card_4, "Card_4").$$render($$result, {}, {}, {})}</div></div>

				<div class="${"cards svelte-1klp60g"}">
					<div class="${"perfect-card svelte-1klp60g"}">${validate_component(Card_5, "Card_5").$$render($$result, {}, {}, {})}</div>
					<div class="${"perfect-card svelte-1klp60g"}">${validate_component(Card_6, "Card_6").$$render($$result, {}, {}, {})}</div></div>

				<div class="${"cards svelte-1klp60g"}">
					<div class="${"perfect-card svelte-1klp60g"}">${validate_component(Card_7, "Card_7").$$render($$result, {}, {}, {})}</div>
					<div class="${"perfect-card svelte-1klp60g"}">${validate_component(Card_8, "Card_8").$$render($$result, {}, {}, {})}</div></div>

				<div class="${"cards svelte-1klp60g"}">
					<div class="${"perfect-card svelte-1klp60g"}">${validate_component(Card_9, "Card_9").$$render($$result, {}, {}, {})}</div>
					<div class="${"perfect-card svelte-1klp60g"}">${validate_component(Card_10, "Card_10").$$render($$result, {}, {}, {})}</div></div>

				<div class="${"spacer svelte-1klp60g"}"></div></div>` : ``}`;
    }
  })}

	${validate_component(MediaQuery, "MediaQuery").$$render($$result, { query: "(max-width: 767px)" }, {}, {
    default: ({ matches }) => {
      return `${matches ? `<div class="${"root mobile svelte-1klp60g"}"><div class="${"cards svelte-1klp60g"}">
						${validate_component(Card_1, "Card_1").$$render($$result, {}, {}, {})}
						${validate_component(Card_2, "Card_2").$$render($$result, {}, {}, {})}
						${validate_component(Card_3, "Card_3").$$render($$result, {}, {}, {})}
						${validate_component(Card_4, "Card_4").$$render($$result, {}, {}, {})}
						${validate_component(Card_5, "Card_5").$$render($$result, {}, {}, {})}
						${validate_component(Card_6, "Card_6").$$render($$result, {}, {}, {})}
						${validate_component(Card_7, "Card_7").$$render($$result, {}, {}, {})}
						${validate_component(Card_8, "Card_8").$$render($$result, {}, {}, {})}
						${validate_component(Card_9, "Card_9").$$render($$result, {}, {}, {})}
						${validate_component(Card_10, "Card_10").$$render($$result, {}, {}, {})}</div>
				<div class="${"spacer svelte-1klp60g"}"></div></div>` : ``}`;
    }
  })}
</main>`;
});
export { Articles as default };
