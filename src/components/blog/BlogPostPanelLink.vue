<template lang="pug">
section.section.blog-post-link
	h1.title {{ post.title }}
	h2.subtitle {{ formattedDate }}
	figure.image.is-2by1(v-if="post.coverImage")
		img(:src="post.coverImage.url", :alt="post.title")
	.columns.is-centered
		.column.is-narrow
			router-link.button(:to="postLink") Read More
</template>

<script lang="ts">
import { Post } from "@/models/post.model"
import { formatDate } from "@/utils/misc"
import Vue from "vue"
import { Component, Prop } from "vue-property-decorator"

@Component
export default class BlogPostPanelLink extends Vue {
	@Prop() post: Post

	get formattedDate() {
		return formatDate(this.post.createdAt)
	}

	get postLink(): object {
		return { name: "blog-post", params: { slug: this.post.slug } }
	}
}
</script>

<style lang="stylus">
@require "../../assets/_base"

.blog-post-link
	border-bottom 1px solid textColor
	text-align center

	h1.title
		margin-bottom 2rem

	figure
		margin-bottom 1rem
</style>
