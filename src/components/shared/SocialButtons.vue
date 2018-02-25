<template lang="pug">
.buttons
	template(v-for="link in links")
		a.button(:href="link.url", target="_blank")
			b-icon(pack="fab", :icon="link.icon", size="is-small")
</template>

<script lang="ts">
import Vue from "vue"
import { Component } from "vue-property-decorator"

@Component
export default class SocialButtons extends Vue {
	links = [
		{url: "https://www.instagram.com/eliediccion", icon: 'instagram'},
		{url: "https://www.instagram.com/eliediccion", icon: 'pinterest'},
		{url: "https://twitter.com/eliediccion", icon: 'twitter'},
		{url: "https://www.facebook.com/angelique.diccion", icon: 'facebook'},
	]
}
</script>
