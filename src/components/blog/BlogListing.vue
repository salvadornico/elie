<template lang="pug">
#blog-listing
	h1 This is a blog
	div
	section(v-if='allPosts')
		ul
			li(v-for='post in allPosts', :key='post.id')
				router-link.link(:to='`/post/${post.slug}`')
					.placeholder
						img(:alt='post.title', :src='`https://media.graphcms.com/resize=w:100,h:100,fit:crop/${post.coverImage.handle}`')
					h3 {{post.title}}
		button(v-if='postCount && postCount > allPosts.length', @click='loadMorePosts') {{loading ? 'Loading...' : 'Show more'}}
	h2(v-else='') Loading...
</template>

<script lang="ts">
import Vue from "vue"
import { Component } from "vue-property-decorator"
import gql from "graphql-tag"

const POSTS_PER_PAGE = 1

const allPostsQuery = gql`
query allPosts($first: Int!, $skip: Int!) {
	allPosts(orderBy: dateAndTime_DESC, first: $first, skip: $skip) {
		id
		slug
		title
		dateAndTime
		coverImage {
			handle
		}
	}
}
`

@Component({
	components: {},
	metaInfo() {
		return {
			title: "Blog"
		}
	},
	// apollo: {
	// 	$loadingKey: 'loading',
	// 	allPosts: {
	// 		query: allPostsQuery,
	// 			variables: {
	// 				skip: 0,
	// 				first: POSTS_PER_PAGE
	// 			}
	// 		},
	// 	postCount: {
	// 		query: gql`{ _allPostsMeta { count } }`,
	// 		update: ({ _allPostsMeta }) => _allPostsMeta.count
	// 	}
	// },
})
export default class BlogListing extends Vue {
	loading = 0
	allPosts: any[]
	postCount: number

	loadMorePosts () {
		this.$apollo.queries.allPosts.fetchMore({
			// variables() : {
			//
			// },
			variables() {
				return {
					// id: this.$route.params.id,
					skip: this.allPosts.length
				}
			},
			updateQuery: (previousResult: any, { fetchMoreResult }: any) => {
				if (!fetchMoreResult) {
					return previousResult
				}
				return Object.assign({}, previousResult, {
					allPosts: [...previousResult.allPosts, ...fetchMoreResult.allPosts]
				})
			}
		})
	}

	get apollo() {
		return {
			$loadingKey: 'loading',
			allPosts: {
				query: allPostsQuery,
					variables: {
						skip: 0,
						first: POSTS_PER_PAGE
					}
				},
			postCount: {
				query: gql`{ _allPostsMeta { count } }`,
				update: ({ _allPostsMeta }: any) => _allPostsMeta.count
			}
		}
	}
}
</script>
