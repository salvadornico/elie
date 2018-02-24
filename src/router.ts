import Vue from "vue"
import Router from "vue-router"
import BlogListing from "@/components/blog/BlogListing.vue"
import Home from "@/components/Home.vue"
import Meta from "vue-meta"

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
			component: BlogListing,
		},
	],
})
