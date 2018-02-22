<template lang="pug">
section.section#about-me.columns.is-centered
	.column
		.level.columns.is-centered
			.column
				h1.title ABOUT ME
		.level
			p Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum molestias dolorum ipsum voluptatem, officia temporibus animi qui quam consequatur. Deserunt enim, recusandae suscipit distinctio sed nemo? Eligendi cumque provident ullam.
		.level.columns.is-centered
			.column.buttons
				a.button(href="#")
					span.icon.is-small
						i.fab.fa-instagram
				a.button(href="#")
					span.icon.is-small
						i.fab.fa-facebook
				a.button(href="#")
					span.icon.is-small
						i.fab.fa-twitter
				a.button(href="#")
					span.icon.is-small
						i.fab.fa-pinterest
</template>

<script lang="ts">
import Vue from "vue"
import { Component } from "vue-property-decorator"

@Component
export default class AboutMe extends Vue {}
</script>

<style lang="stylus" scoped>
@require "../assets/_base"

#about-me
		background accentColor
		text-align center
		position relative
</style>
