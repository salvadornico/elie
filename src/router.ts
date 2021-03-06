import Blog from "@/components/blog/Blog.vue"
import BlogListing from "@/components/blog/BlogListing.vue"
import BlogPost from "@/components/blog/BlogPost.vue"
import Home from "@/components/Home.vue"
import Vue from "vue"
import Meta from "vue-meta"
import Router from "vue-router"

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
			component: Blog,
			children: [
				{
					path: "/",
					name: "blog-listing",
					component: BlogListing,
				},
				{
					path: "/:slug",
					name: "blog-post",
					component: BlogPost,
				},
			],
		},
	],
})
