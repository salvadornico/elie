<template lang="pug">
.blog-post
	section.section(v-if="post.coverImage")
		figure.image.is-2by1
			img(:src="post.coverImage.url", :alt="post.title")
		span {{ post.coverImage.caption }}
	section.hero(:class="{ section: !post.coverImage }")
		h1.title {{ post.title }}
		h2.subtitle {{ formattedDate }}
	section.section.post-content
		vue-markdown(:source="post.content")
	section.section
		router-link.button(to="blog") Back to Blog
</template>

<script lang="ts">
import { Post } from "@/models/post.model"
import { formatDate } from "@/utils/misc"
import Vue from "vue"
import VueMarkdown from "vue-markdown"
import { Component } from "vue-property-decorator"
import { mapActions, mapGetters } from "vuex"
import { Action, Getter } from "vuex-class"

@Component({
	metaInfo() {
		return {
			title: this.post.title,
		}
	},
	components: {
		VueMarkdown,
	},
	computed: { ...mapGetters(["currentPost", "isLoading"]) },
	methods: { ...mapActions(["getSinglePost"]) },
})
export default class BlogPost extends Vue {
	@Action("getSinglePost") getPost: (slug: string) => void
	@Getter("currentPost") post: Post
	@Getter isLoading: boolean

	async created() {
		this.getPost(`"${this.$route.params.slug}"`)
	}

	get formattedDate(): string {
		return formatDate(this.post.createdAt)
	}
}
</script>

<style lang="stylus">
@require "../../assets/_base"

.blog-post
	text-align center

	figure
		margin-bottom 1rem

	.hero.section
		padding-bottom 0

	h1.title
		margin-bottom 2rem

	.post-content
		text-align left

		p, ul
			margin-bottom 1rem

		ul
			margin-left 1.5rem

			li
				line-height 2rem

		img
			width 100%

		code
			color textColor
			line-height 2.5rem
</style>
