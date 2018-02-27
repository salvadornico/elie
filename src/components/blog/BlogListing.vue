<template lang="pug">
.blog-listing
	template(v-for="post in posts", v-if="posts.length > 0")
		BlogPostPanelLink(:post="post")
	section.section(v-if="hasNoPosts")
		b-message(title="Error", type="is-warning", :active.sync="hasNoPosts")
			p No posts found, please try refreshing this page.
		.box
			p No posts found.
</template>

<script lang="ts">
import { Post } from "@/models/post.model"
import Vue from "vue"
import { Component } from "vue-property-decorator"
import { mapActions, mapGetters } from "vuex"
import { Action, Getter } from "vuex-class"
import BlogPostPanelLink from "./BlogPostPanelLink.vue"

@Component({
	metaInfo() {
		return {
			title: "Blog",
		}
	},
	components: {
		BlogPostPanelLink,
	},
	computed: { ...mapGetters(["posts", "isLoading"]) },
	methods: { ...mapActions(["getPosts"]) },
})
export default class BlogListing extends Vue {
	@Action getPosts: () => void
	@Getter posts: Post[]
	@Getter isLoading: boolean

	async created() {
		this.getPosts()
	}

	get hasNoPosts(): boolean {
		return !this.isLoading && this.posts.length === 0
	}
}
</script>

<style lang="stylus">
@require "../../assets/_base"

#blog
	.navbar
		padding-top 0.5rem
		padding-bottom 0.5rem
</style>
