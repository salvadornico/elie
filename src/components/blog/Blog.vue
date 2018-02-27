<template lang="pug">
#blog
	nav.navbar.is-primary(role="navigation")
		.navbar-brand
			router-link.navbar-item(to="/")
				h1.title Elie's Blog

	.container
		.columns.is-desktop
			.column.is-three-fourths
				router-view

			.column.is-one-quarter
				section.section
					.level.columns.is-centered
						SocialButtons.column
					.level
						FeaturedPosts(:posts="featuredPosts")
</template>

<script lang="ts">
import Vue from "vue"
import { Component } from "vue-property-decorator"
import { mapActions, mapGetters } from "vuex"
import { Action, Getter } from "vuex-class"
import BlogPostPanelLink from "./BlogPostPanelLink.vue"
import SocialButtons from "../shared/SocialButtons.vue"
import FeaturedPosts from "./FeaturedPosts.vue"
import { Post } from "@/models/post.model"

@Component({
	metaInfo() {
		return {
			title: "Blog",
		}
	},
	components: {
		BlogPostPanelLink,
		SocialButtons,
		FeaturedPosts,
	},
	computed: { ...mapGetters(["posts", "isLoading"]) },
	methods: { ...mapActions(["getPosts"]) },
})
export default class Blog extends Vue {
	@Action getPosts: () => void
	@Getter posts: Post[]
	@Getter isLoading: boolean

	async created() {
		this.getPosts()
	}

	get featuredPosts(): Post[] {
		return this.posts.filter((post: Post) => post.featured)
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
