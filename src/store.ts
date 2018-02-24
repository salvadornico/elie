import Vue from "vue"
import Vuex from "vuex"
import apolloClient from "./apollo/index"
import { Queries } from "@/apollo/queries"
// import gql from "graphql-tag"

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		posts: [],
	},
	getters: {
		posts: state => state.posts,
	},
	mutations: {
		FETCH_POSTS: (state, posts) => {
			state.posts = posts
		},
		SET_POSTS(state, posts) {
			state.posts = posts
		},
	},
	actions: {
		async getPosts(context) {
			const result = await apolloClient.query({ query: Queries.allPosts })
			context.commit("SET_POSTS", (result.data as any).allPosts)
		},
	},
})
