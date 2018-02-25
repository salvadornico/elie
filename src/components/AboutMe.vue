<template lang="pug">
section#about-me.section.columns.is-centered
	.column.is-three-quarters
		.level.columns.is-centered
			.column
				h1.title ABOUT ME
		.level
			p Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum molestias dolorum ipsum voluptatem, officia temporibus animi qui quam consequatur. Deserunt enim, recusandae suscipit distinctio sed nemo? Eligendi cumque provident ullam.
		.level.columns.is-centered#contact
			SocialButtons.column
</template>

<script lang="ts">
import Vue from "vue"
import { Component } from "vue-property-decorator"
import SocialButtons from "./shared/SocialButtons.vue"

@Component({
	components: {
		SocialButtons,
	}
})
export default class AboutMe extends Vue {}
</script>

<style lang="stylus" scoped>
@require "../assets/_base"

#about-me
	background accentColor
	text-align center
	position relative
</style>
