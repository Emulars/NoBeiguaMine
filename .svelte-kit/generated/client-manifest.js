export { matchers } from './client-matchers.js';

export const components = [
	() => import("..\\..\\src\\routes\\__layout.svelte"),
	() => import("..\\..\\src\\routes\\__error.svelte"),
	() => import("..\\..\\src\\routes\\articles.svelte"),
	() => import("..\\..\\src\\routes\\card.svelte"),
	() => import("..\\..\\src\\routes\\footer.svelte"),
	() => import("..\\..\\src\\routes\\head.svelte"),
	() => import("..\\..\\src\\routes\\index.svelte"),
	() => import("..\\..\\src\\routes\\timeline.svelte"),
	() => import("..\\..\\src\\routes\\timeline_new.svelte")
];

export const dictionary = {
	"": [[0, 6], [1]],
	"articles": [[0, 2], [1]],
	"card": [[0, 3], [1]],
	"footer": [[0, 4], [1]],
	"head": [[0, 5], [1]],
	"timeline": [[0, 7], [1]],
	"timeline_new": [[0, 8], [1]]
};