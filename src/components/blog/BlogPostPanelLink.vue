<template lang="pug">
section.section.blog-post-link
	figure.image.is-2by1(v-if="post.coverImage")
		img(:src="post.coverImage.url", :alt="post.title")
	h1.title {{ post.title }}
	h2.subtitle {{ formattedDate }}
</template>

<script lang="ts">
import Vue from "vue"
import { Component, Prop } from "vue-property-decorator"
import { timeSince } from "@/utils/misc"

@Component
export default class BlogPostPanelLink extends Vue {
	@Prop() post: any

	get formattedDate() {
		return timeSince(this.post.dateAndTime)
	}
}
</script>
