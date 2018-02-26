<template lang="pug">
#app
	router-view
	b-loading(:active.sync="isLoading", :canCancel="true")
</template>

<script lang="ts">
import Vue from "vue"
import { Component } from "vue-property-decorator"
import { mapGetters } from "vuex"
import { Getter } from "vuex-class"

@Component({
	metaInfo() {
		return {
			titleTemplate: "%s | Elie Diccion",
			// script: [
			// 	{ innerHTML: "// Script goes here", src: "fileUrl" }
			// ],
		}
	},
	computed: { ...mapGetters(["isLoading"]) },
})
export default class App extends Vue {
	@Getter isLoading: boolean
}
</script>

<style lang="scss">
// Import Bulma's core
@import "~bulma/sass/utilities/_all";

// Set your colors
$primary: #f7eee5;
$primary-invert: findColorInvert($primary);
$twitter: #4099ff;
$twitter-invert: findColorInvert($twitter);

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
	"white": ($white, $black),
	"black": ($black, $white),
	"light": ($light, $light-invert),
	"dark": ($dark, $dark-invert),
	"primary": ($primary, $primary-invert),
	"info": ($info, $info-invert),
	"success": ($success, $success-invert),
	"warning": ($warning, $warning-invert),
	"danger": ($danger, $danger-invert),
	"twitter": ($twitter, $twitter-invert)
);

// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";
</style>
