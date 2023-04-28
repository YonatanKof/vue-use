import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		// add pages here
		{ path: "/", name: "index", component: () => import("./views/index.vue") },
		{ path: "/use-mouse-and-touch", name: "use-mouse-and-touch", component: () => import("./views/use-mouse-and-touch.vue") },
		{ path: "/use-device-sensors", name: "use-device-sensors", component: () => import("./views/use-device-sensors.vue") },
		{ path: "/use-title", name: "use-title", component: () => import("./views/use-title.vue") },
		{ path: "/use-clipboard", name: "use-clipboard", component: () => import("./views/use-clipboard.vue") },
		{ path: "/use-dark-color-mode", name: "use-dark-color-mode", component: () => import("./views/use-dark-color-mode.vue") },
		{ path: "/on-key-stroke", name: "on-key-stroke", component: () => import("./views/on-key-stroke.vue") },
		// { path: "/recipes/:id", name: "single-recipe", component: () => import("./views/_uid.vue") },
	],
});

export default router;
