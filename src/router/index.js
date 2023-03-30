import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/pages/home.vue";
import Login from "../components/login.vue";

const routes = [
	//home pages
	{
		path: "",
		component: Home,
	},
	// Login vue
	{
		path: "/login",
		component: Login,
	},
];
const router = createRouter({
	history: createWebHistory(),
	routes, //same --- > routes:routes
});
export default router;
