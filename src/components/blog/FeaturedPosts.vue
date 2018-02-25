<template lang="pug">
.box
	h1.title Featured Posts
	ul
		li(v-for="post in posts")
			router-link.has-text-black(:to="postLink(post)") {{ post.title }}
</template>

<script lang="ts">
import Vue from "vue"
import { Component, Prop } from "vue-property-decorator"

@Component
export default class FeaturedPosts extends Vue {
	@Prop() posts: any[]

	postLink(post) {
		return { name: "blog-post", params: { slug: post.slug }}
	}
}
</script>

<style lang="stylus">
@require "../../assets/_base"
</style>
