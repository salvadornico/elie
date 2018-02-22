<template lang="pug">
#home
	section#main-banner.hero.is-primary.is-medium
		.hero-body
			.columns.is-centered
				.column
					h1.title ELIE'S BLOG
					.columns.is-centered
						a.column(href="#") PORTFOLIO
						a.column(href="#") ABOUT ME
						a.column(href="#") BLOG
						a.column(href="#") CONTACT
					button.button.is-outlined.is-inverted.is-primary HELLO 👋

	section.section#gallery.columns.is-centered
		.column
			.block
				h1.title Crafted for Creatives
				h2.subtitle Pictures go down there 👇
			.block
				.tile.is-ancestor
					img.tile.is-4.is-parent(src="../assets/beach.jpg")
					.tile.is-4.is-parent.is-vertical
						img.tile.is-child(src="../assets/beach.jpg")
						img.tile.is-child(src="../assets/beach.jpg")
					img.tile.is-4.is-parent(src="../assets/beach.jpg")

	AboutMe
</template>

<script lang="ts">
import Vue from "vue"
import { Component } from "vue-property-decorator"
import AboutMe from "@/components/AboutMe.vue"

@Component({
	components: {
		AboutMe,
	},
})
export default class Home extends Vue {}
</script>

<style lang="stylus">
@require "../assets/_base"

#home
	background bgColor
	color textColor

	#main-banner
		height 100vh
		background-image url("../assets/beach.jpg")
		background-size cover
		background-repeat no-repeat

		*
			color textColor
			text-align center

		h1.title
			font-weight bold

		.hero-body > .columns
			height 100%

			& > .column
				position relative
				display grid
				grid-template-rows 1fr 1fr 1fr

				@media DesktopOnly
					grid-template-rows 1fr 1fr 4fr
					max-width 50rem

				& > *
					align-self center

				button
					center X relative

	section.section
		& > .column
			@media DesktopOnly
				margin auto 20rem 0 20rem

		*
			text-align center

	button
		max-width 15rem
		border 0.1rem solid textColor
</style>
