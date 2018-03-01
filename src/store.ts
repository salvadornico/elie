import apolloClient from "@/apollo/index"
import { Queries } from "@/apollo/queries"
import { Post } from "@/models/post.model"
import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		isLoading: false,
		posts: [] as Post[],
		currentPost: {} as Post,
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
		SET_POSTS(state, posts: Post[]) {
			state.posts = posts
		},
		SET_CURRENT_POST(state, post: Post) {
			state.currentPost = post
		},
	},
	actions: {
		async getPosts(context, payload: object = {}) {
			await fetchFromCms(
				context,
				Queries.getPosts(payload),
				"SET_POSTS",
				"allPosts"
			)
		},
		async getSinglePost(context, payload: string) {
			await fetchFromCms(
				context,
				Queries.getPost(payload),
				"SET_CURRENT_POST",
				"Post"
			)
		},
	},
})

const fetchFromCms = async (
	context: any,
	query: any,
	mutationName: string,
	dataModel: string
) => {
	context.commit("START_LOADING")

	await apolloClient
		.query({ query })
		.then(result => {
			context.commit(mutationName, (result.data as any)[dataModel])
		})
		.catch(error => {
			console.error(error)
		})

	context.commit("STOP_LOADING")
}
