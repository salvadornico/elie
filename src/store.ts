import Vue from "vue"
import Vuex from "vuex"
import apolloClient from "./apollo/index"
import { Queries } from "@/apollo/queries"

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		isLoading: false,
		posts: [],
	},
	getters: {
		isLoading: state => state.isLoading,
		posts: state => state.posts,
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
	},
	actions: {
		async getPosts(context) {
			context.commit("START_LOADING")
			const result = await apolloClient
				.query({ query: Queries.allPosts })
				.then(result => {
					context.commit("SET_POSTS", (result.data as any).allPosts)
				})
				.catch(err => {
					console.log(err)
				})

			context.commit("STOP_LOADING")
		},
	},
})
