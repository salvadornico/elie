<template lang="pug">
#blog
	nav.navbar.is-primary(role="navigation")
		.navbar-brand
			router-link.navbar-item(to="/")
				h1.title Elie's Blog

	.container
		.columns.is-desktop
			.column.is-three-fourths
				template(v-for="post in posts")
					BlogPostPanelLink(:post="post")

			.column.is-one-quarter
				section.section
					.box
						p Put highlights here?
</template>

<script lang="ts">
import Vue from "vue"
import { Component } from "vue-property-decorator"
import { mapActions, mapGetters } from "vuex"
import BlogPostPanelLink from "./BlogPostPanelLink.vue"

@Component({
	metaInfo() {
		return {
			title: "Blog"
		}
	},
	components: {
		BlogPostPanelLink,
	},
	computed: { ...mapGetters(["posts"]) },
	methods: { ...mapActions(["getPosts"]) },
})
export default class Blog extends Vue {
	async created() {
		this.getPosts()
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
