import { c as create_ssr_component, l as escape } from "../../chunks/index-b4318809.js";
function load({ error, status }) {
  return {
    props: { title: `${status}: ${error.message}` }
  };
}
const _error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  return `




<div class="${"container"}"><h1>${escape(title)}</h1>
	${slots.default ? slots.default({}) : ``}</div>`;
});
export { _error as default, load };
