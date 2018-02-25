import Vue from "vue"
import Vuex from "vuex"
import apolloClient from "./apollo/index"
import { Queries } from "@/apollo/queries"

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		isLoading: false,
		posts: [],
		post: {},
	},
	getters: {
		isLoading: state => state.isLoading,
		posts: state => state.posts,
		post: state => state.post,
	},
	mutations: {
		START_LOADING(state) {
			state.isLoading = true
		},
		STOP_LOADING(state) {
			state.isLoading = false
		},
		SET_POSTS(state, posts) {
			state.posts = posts
		},
		SET_CURRENT_POST(state, post) {
			state.post = post
		},
	},
	actions: {
		async getPosts(context, payload = null) {
			context.commit("START_LOADING")
			await apolloClient
				.query({ query: Queries.getPosts() })
				.then(result => {
					context.commit("SET_POSTS", (result.data as any).allPosts)
				})
				.catch(err => {
					console.log(err)
				})

			context.commit("STOP_LOADING")
		},
		async getSinglePost(context, payload: string) {
			context.commit("START_LOADING")
			await apolloClient
				.query({ query: Queries.getPost(payload) })
				.then(result => {
					context.commit(
						"SET_CURRENT_POST",
						(result.data as any).Post
					)
				})
				.catch(err => {
					console.log(err)
				})

			context.commit("STOP_LOADING")
		},
	},
})
