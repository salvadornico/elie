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
				template(v-for="link in links")
					a.button(:href="link.url", target="_blank")
						span.icon.is-small
							font-awesome-icon(:icon="link.icon")
</template>

<script lang="ts">
import FontAwesomeIcon from "@fortawesome/vue-fontawesome"
import Vue from "vue"
import { Component } from "vue-property-decorator"

@Component({
	components: {
		FontAwesomeIcon,
	},
})
export default class AboutMe extends Vue {
	links = [
		{url: "https://www.instagram.com/eliediccion", icon: ['fab', 'instagram']},
		{url: "https://www.instagram.com/eliediccion", icon: ['fab', 'pinterest']},
		{url: "https://twitter.com/eliediccion", icon: ['fab', 'twitter']},
		{url: "https://www.facebook.com/angelique.diccion", icon: ['fab', 'facebook']},
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
