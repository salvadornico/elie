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
import Vue from "vue"
import { Component } from "vue-property-decorator"
import VueMarkdown from "vue-markdown"
import { mapActions, mapGetters } from "vuex"
import { formatDate } from "@/utils/misc"

@Component({
	metaInfo() {
		return {
			title: this.post.title,
		}
	},
	components: {
		VueMarkdown,
	},
	computed: { ...mapGetters(["post", "isLoading"]) },
	methods: { ...mapActions(["getSinglePost"]) },
})
export default class BlogPost extends Vue {
	async created() {
		this.getSinglePost(this.formattedSlug)
	}

	get formattedSlug() {
		return `"${this.$route.params.slug}"`
	}

	get formattedDate() {
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
