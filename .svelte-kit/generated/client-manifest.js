export { matchers } from './client-matchers.js';

export const components = [
	() => import("..\\..\\src\\routes\\__layout.svelte"),
	() => import("..\\..\\src\\routes\\__error.svelte"),
	() => import("..\\..\\src\\routes\\Art\\Article_1.svelte"),
	() => import("..\\..\\src\\routes\\Hidden.svelte"),
	() => import("..\\..\\src\\routes\\articles.svelte"),
	() => import("..\\..\\src\\routes\\card.svelte"),
	() => import("..\\..\\src\\routes\\head.svelte"),
	() => import("..\\..\\src\\routes\\index.svelte"),
	() => import("..\\..\\src\\routes\\news.svelte"),
	() => import("..\\..\\src\\routes\\timeline.svelte"),
	() => import("..\\..\\src\\routes\\timeline_new.svelte")
];

export const dictionary = {
	"": [[0, 7], [1]],
	"Hidden": [[0, 3], [1]],
	"articles": [[0, 4], [1]],
	"card": [[0, 5], [1]],
	"head": [[0, 6], [1]],
	"news": [[0, 8], [1]],
	"timeline": [[0, 9], [1]],
	"timeline_new": [[0, 10], [1]],
	"Art/Article_1": [[0, 2], [1]]
};