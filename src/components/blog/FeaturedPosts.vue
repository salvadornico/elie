<template lang="pug">
.box
	h1.title Featured
	ul
		li(v-for="post in posts")
			router-link.has-text-black(:to="postLink(post)") {{ post.title }}
</template>

<script lang="ts">
import Vue from "vue"
import { Component, Prop } from "vue-property-decorator"
import { Post } from "@/models/post.model"

@Component
export default class FeaturedPosts extends Vue {
	@Prop() posts: Post[]

	postLink(post: Post): object {
		return { name: "blog-post", params: { slug: post.slug } }
	}
}
</script>

<style lang="stylus" scoped>
ul
	margin-left 1rem
</style>
