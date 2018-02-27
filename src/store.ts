import Vue from "vue"
import Vuex from "vuex"
import apolloClient from "./apollo/index"
import { Queries } from "@/apollo/queries"

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		isLoading: false,
		posts: [],
		currentPost: {},
	},
	getters: {
		isLoading: state => state.isLoading,
		posts: state => state.posts,
		currentPost: state => state.currentPost,
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
			state.currentPost = post
		},
	},
	actions: {
		async getPosts(context, payload = {}) {
			context.commit("START_LOADING")
			await apolloClient
				.query({ query: Queries.getPosts(payload) })
				.then(result => {
					context.commit("SET_POSTS", (result.data as any).allPosts)
				})
				.catch(err => {
					console.error(err)
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
					console.error(err)
				})

			context.commit("STOP_LOADING")
		},
	},
})
