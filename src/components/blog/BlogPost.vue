<template lang="pug">
.blog-post
	section.section
		figure.image.is-2by1(v-if="currentPost.coverImage")
			img(:src="currentPost.coverImage.url", :alt="currentPost.title")
		h1.title {{ currentPost.title }}
		h2.subtitle {{ formattedDate }}
	section.section.post-content
		vue-markdown(:source="currentPost.content")
	section.section
		router-link.button(to="blog") Back to Blog
</template>

<script lang="ts">
import Vue from "vue"
import { Component } from "vue-property-decorator"
import VueMarkdown from "vue-markdown"
import { mapActions, mapGetters } from "vuex"
import * as moment from "moment"

@Component({
	components: {
		VueMarkdown,
	},
	computed: { ...mapGetters(["currentPost", "isLoading"]) },
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
		return moment(this.currentPost.createdAt).format("D MMM YYYY")
	}
}
</script>

<style lang="stylus">
@require "../../assets/_base"

.blog-post
	text-align center

	h1.title
		margin-bottom 2rem

	figure
		margin-bottom 1rem

	.post-content
		text-align left
</style>
