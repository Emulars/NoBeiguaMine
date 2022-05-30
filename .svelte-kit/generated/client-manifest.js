export { matchers } from './client-matchers.js';

export const components = [
	() => import("..\\..\\src\\routes\\__layout.svelte"),
	() => import("..\\runtime\\components\\error.svelte"),
	() => import("..\\..\\src\\routes\\card.svelte"),
	() => import("..\\..\\src\\routes\\footer.svelte"),
	() => import("..\\..\\src\\routes\\head.svelte"),
	() => import("..\\..\\src\\routes\\index.svelte"),
	() => import("..\\..\\src\\routes\\switch.svelte")
];

export const dictionary = {
	"": [[0, 5], [1]],
	"card": [[0, 2], [1]],
	"footer": [[0, 3], [1]],
	"head": [[0, 4], [1]],
	"switch": [[0, 6], [1]]
};