<template lang="pug">
section#hero.hero.is-primary
		.hero-body
			h1.title ELIE'S BLOG
			h2.subtitle Something witty
		.hero-foot.columns.is-centered
			.column(v-for="button in buttons")
				a.button.is-text(:href="button.link", v-scroll-to="getScrollLink(button.scrollTo)") {{ button.text }}
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
		{ link: "#", text: "BLOG" },
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
