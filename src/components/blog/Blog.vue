<template lang="pug">
#blog
	h1 This is a blog
</template>

<script lang="ts">
import Vue from "vue"
import { Component } from "vue-property-decorator"
// import { mapGetters } from "vuex"

@Component
export default class Blog extends Vue {
	get posts() {
		return this.$store.state.fruits;
	}

	created () {
		this.$store.dispatch('getPosts');
	}
}
</script>
