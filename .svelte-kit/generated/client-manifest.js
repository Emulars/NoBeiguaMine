export { matchers } from './client-matchers.js';

export const components = [
	() => import("..\\..\\src\\routes\\__layout.svelte"),
	() => import("..\\..\\src\\routes\\__error.svelte"),
	() => import("..\\..\\src\\routes\\Art\\Article_1.svelte"),
	() => import("..\\..\\src\\routes\\articles.svelte"),
	() => import("..\\..\\src\\routes\\index.svelte"),
	() => import("..\\..\\src\\routes\\timeline.svelte"),
	() => import("..\\..\\src\\routes\\timeline_new.svelte"),
	() => import("..\\..\\src\\routes\\timeline_parallax.svelte"),
	() => import("..\\..\\src\\routes\\whoami.svelte")
];

export const dictionary = {
	"": [[0, 4], [1]],
	"articles": [[0, 3], [1]],
	"timeline": [[0, 5], [1]],
	"timeline_new": [[0, 6], [1]],
	"timeline_parallax": [[0, 7], [1]],
	"whoami": [[0, 8], [1]],
	"Art/Article_1": [[0, 2], [1]]
};