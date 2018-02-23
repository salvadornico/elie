<template lang="pug">
section#about-me.section.columns.is-centered
	.column.is-three-quarters
		.level.columns.is-centered
			.column
				h1.title ABOUT ME
		.level
			p Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum molestias dolorum ipsum voluptatem, officia temporibus animi qui quam consequatur. Deserunt enim, recusandae suscipit distinctio sed nemo? Eligendi cumque provident ullam.
		.level.columns.is-centered#contact
			.column.buttons
				template(v-for="link in links")
					a.button(:href="link.url", target="_blank")
						b-icon(pack="fab", :icon="link.icon", size="is-small")
</template>

<script lang="ts">
import Vue from "vue"
import { Component } from "vue-property-decorator"

@Component
export default class AboutMe extends Vue {
	links = [
		{url: "https://www.instagram.com/eliediccion", icon: 'instagram'},
		{url: "https://www.instagram.com/eliediccion", icon: 'pinterest'},
		{url: "https://twitter.com/eliediccion", icon: 'twitter'},
		{url: "https://www.facebook.com/angelique.diccion", icon: 'facebook'},
	]
}
</script>

<style lang="stylus" scoped>
@require "../assets/_base"

#about-me
	background accentColor
	text-align center
	position relative
</style>
