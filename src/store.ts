import Vue from "vue"
import Vuex from "vuex"
import apolloClient from "./apollo"
import gql from "graphql-tag"
// import postQuery from "./queries/allPosts.gql"

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
		getPosts(context) {
			console.log("hello")
			apolloClient
				.query({
					query: gql`
						{
							allPosts {
								id
								title
							}
						}
					`,
				})
				.then(result => {
					context.commit("SET_POSTS", result.data.allPosts)
				})
		},
	},
})
