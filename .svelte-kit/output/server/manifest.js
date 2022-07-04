export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png","smui-dark.css","smui.css"]),
	mimeTypes: {".png":"image/png",".css":"text/css"},
	_: {
		entry: {"file":"start-5c3e076d.js","js":["start-5c3e076d.js","chunks/index-a78a5d08.js","chunks/index-bc211d84.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/13.js'),
			() => import('./nodes/12.js'),
			() => import('./nodes/14.js'),
			() => import('./nodes/15.js'),
			() => import('./nodes/16.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/8.js'),
			() => import('./nodes/9.js'),
			() => import('./nodes/10.js'),
			() => import('./nodes/11.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "articles",
				pattern: /^\/articles\/?$/,
				names: [],
				types: [],
				path: "/articles",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "privacy&policy",
				pattern: /^\/privacy&policy\/?$/,
				names: [],
				types: [],
				path: "/privacy&policy",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				id: "timeline",
				pattern: /^\/timeline\/?$/,
				names: [],
				types: [],
				path: "/timeline",
				shadow: null,
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				id: "whoami",
				pattern: /^\/whoami\/?$/,
				names: [],
				types: [],
				path: "/whoami",
				shadow: null,
				a: [0,6],
				b: [1]
			},
			{
				type: 'page',
				id: "Art/Article_1",
				pattern: /^\/Art\/Article_1\/?$/,
				names: [],
				types: [],
				path: "/Art/Article_1",
				shadow: null,
				a: [0,7],
				b: [1]
			},
			{
				type: 'page',
				id: "Art/Article_10",
				pattern: /^\/Art\/Article_10\/?$/,
				names: [],
				types: [],
				path: "/Art/Article_10",
				shadow: null,
				a: [0,8],
				b: [1]
			},
			{
				type: 'page',
				id: "Art/Article_2",
				pattern: /^\/Art\/Article_2\/?$/,
				names: [],
				types: [],
				path: "/Art/Article_2",
				shadow: null,
				a: [0,9],
				b: [1]
			},
			{
				type: 'page',
				id: "Art/Article_3",
				pattern: /^\/Art\/Article_3\/?$/,
				names: [],
				types: [],
				path: "/Art/Article_3",
				shadow: null,
				a: [0,10],
				b: [1]
			},
			{
				type: 'page',
				id: "Art/Article_4",
				pattern: /^\/Art\/Article_4\/?$/,
				names: [],
				types: [],
				path: "/Art/Article_4",
				shadow: null,
				a: [0,11],
				b: [1]
			},
			{
				type: 'page',
				id: "Art/Article_5",
				pattern: /^\/Art\/Article_5\/?$/,
				names: [],
				types: [],
				path: "/Art/Article_5",
				shadow: null,
				a: [0,12],
				b: [1]
			},
			{
				type: 'page',
				id: "Art/Article_6",
				pattern: /^\/Art\/Article_6\/?$/,
				names: [],
				types: [],
				path: "/Art/Article_6",
				shadow: null,
				a: [0,13],
				b: [1]
			},
			{
				type: 'page',
				id: "Art/Article_7",
				pattern: /^\/Art\/Article_7\/?$/,
				names: [],
				types: [],
				path: "/Art/Article_7",
				shadow: null,
				a: [0,14],
				b: [1]
			},
			{
				type: 'page',
				id: "Art/Article_8",
				pattern: /^\/Art\/Article_8\/?$/,
				names: [],
				types: [],
				path: "/Art/Article_8",
				shadow: null,
				a: [0,15],
				b: [1]
			},
			{
				type: 'page',
				id: "Art/Article_9",
				pattern: /^\/Art\/Article_9\/?$/,
				names: [],
				types: [],
				path: "/Art/Article_9",
				shadow: null,
				a: [0,16],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
