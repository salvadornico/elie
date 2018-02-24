<template lang="pug">
#home
	Hero
	Gallery
	AboutMe
</template>

<script lang="ts">
import Vue from "vue"
import { Component } from "vue-property-decorator"
import AboutMe from "@/components/AboutMe.vue"
import Gallery from "@/components/Gallery.vue"
import Hero from "@/components/Hero.vue"

@Component({
	components: {
		AboutMe,
		Gallery,
		Hero,
	},
	metaInfo() {
		return {
			title: "Name of Blog here"
		}
	}
})
export default class Home extends Vue {}
</script>

<style lang="stylus">
@require "../assets/_base"

#home
	background bgColor
	color textColor

	section.section	*
		text-align center
</style>
