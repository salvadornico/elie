<template lang="pug">
#app
	router-view
</template>

<script lang="ts">
import Vue from "vue"
import { Component } from "vue-property-decorator"

@Component({
	metaInfo() {
		return {
			titleTemplate: "%s | Elie Diccion",
			// script: [
      		// 	{ innerHTML: "// Script goes here", src: "fileUrl" }
    		// ],
		}
	}
})
export default class App extends Vue {}
</script>
