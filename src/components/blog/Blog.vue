<template lang="pug">
#blog
	nav.navbar(role="navigation")
		.navbar-brand
			router-link.navbar-item(to="/")
				h1.title Elie's Blog

	.container
		section.section
			h1.title This is a blog
			ul
				li(v-for="post in posts") {{ post.title }}
</template>

<script lang="ts">
import Vue from "vue"
import { Component } from "vue-property-decorator"
import { mapActions, mapGetters } from "vuex"

@Component({
	metaInfo() {
		return {
			title: "Blog"
		}
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
		background highlightColor
		padding-top 0.5rem
		padding-bottom 0.5rem
</style>
