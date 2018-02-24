import Vue from "vue"
import Router from "vue-router"
import Meta from "vue-meta"
import Home from "@/components/Home.vue"
import Blog from "@/components/blog/Blog.vue";

Vue.use(Router)
Vue.use(Meta)

export default new Router({
	mode: "history",
	routes: [
		{
			path: "/",
			name: "home",
			component: Home,
		},
		{
			path: "/blog",
			name: "blog",
			component: Blog,
		},
	],
})
