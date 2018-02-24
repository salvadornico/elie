<template lang="pug">
section#hero.hero.is-primary
	.hero-body
		h1.title ELIE'S BLOG
		h2.subtitle Something witty
	.hero-foot.columns.is-centered
		.column(v-for="button in buttons")
			a.button.is-text(v-scroll-to="getScrollLink(button.scrollTo)") {{ button.text }}
		.column
			router-link.button.is-text(to="blog") BLOG
</template>

<script lang="ts">
import Vue from "vue"
import { Component } from "vue-property-decorator"

@Component
export default class Hero extends Vue {
	buttons = [
		{ scrollTo: "gallery", text: "WORK" },
		{ scrollTo: "about-me", text: "ABOUT ME" },
		{ scrollTo: "contact", text: "CONTACT" },
	]

	getScrollLink(id: string): string { return `#${id}`}
}
</script>

<style lang="stylus" scoped>
@require "../assets/_base"

#hero
	padding-bottom 1.5rem

	*
		color textColor
		text-align center

	h1.title
		font-weight bold

	.button.is-text
		text-decoration none
</style>
