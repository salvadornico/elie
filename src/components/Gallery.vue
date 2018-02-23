<template lang="pug">
section#gallery.section.columns.is-centered
	.column.is-three-quarters
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
</template>

<script lang="ts">
import Vue from "vue"
import { Component } from "vue-property-decorator"

@Component
export default class Gallery extends Vue {}
</script>
