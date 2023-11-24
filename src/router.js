import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		// add pages here
		{ path: "/", name: "index", component: () => import("./views/index.vue") },
		{ path: "/use-title", name: "use-title", component: () => import("./views/use-title.vue") },
		{ path: "/use-clipboard", name: "use-clipboard", component: () => import("./views/use-clipboard.vue") },
		{ path: "/use-dark", name: "use-dark", component: () => import("./views/use-dark.vue") },
		{ path: "/use-color-mode", name: "use-color-mode", component: () => import("./views/use-color-mode.vue") },
		{ path: "/use-color-mode-2", name: "use-color-mode-2", component: () => import("./views/use-color-mode-2.vue") },
		{ path: "/use-device-sensors", name: "use-device-sensors", component: () => import("./views/use-device-sensors.vue") },
		{ path: "/use-mouse-and-touch", name: "use-mouse-and-touch", component: () => import("./views/use-mouse-and-touch.vue") },
		{ path: "/on-key-stroke", name: "on-key-stroke", component: () => import("./views/on-key-stroke.vue") },
		{ path: "/use-change-case", name: "use-change-case", component: () => import("./views/use-change-case.vue") },
	],
});

export default router;
