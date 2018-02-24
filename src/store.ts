import Vue from "vue"
import Vuex from "vuex"
import apolloClient from "./apollo"
import gql from "graphql-tag"

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
			console.log(posts)
			// having an object instead of an array makes the other methods easier
			// since we can use Vue.set() and Vue.delete()
			// const array = []

			// posts.map((post: { id: number }) => {
			// 	object[post.id] = post
			// })
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
