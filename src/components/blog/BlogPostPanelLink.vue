<template lang="pug">
section.section.blog-post-link
	h1.title {{ post.title }}
	h2.subtitle {{ formattedDate }}
	figure.image.is-2by1(v-if="post.coverImage")
		img(:src="post.coverImage.url", :alt="post.title")
	.columns.is-centered
		.column.is-narrow
			button.button Read More
</template>

<script lang="ts">
import Vue from "vue"
import { Component, Prop } from "vue-property-decorator"
import { timeSince } from "@/utils/misc"
import * as moment from "moment"

@Component
export default class BlogPostPanelLink extends Vue {
	@Prop() post: any

	get formattedDate() {
		return moment(this.post.createdAt).format("D MMM YYYY")
	}
}
</script>

<style lang="stylus">
@require "../../assets/_base"

.blog-post-link
	border-bottom 1px solid textColor
	text-align center

	h1.title
		text-decoration underline
		margin-bottom 2rem

	figure
		margin-bottom 1rem
</style>
