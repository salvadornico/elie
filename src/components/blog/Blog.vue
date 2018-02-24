<template lang="pug">
#blog
	h1.title This is a blog
	ul
		li(v-for="post in posts") {{ post.title }}
</template>

<script lang="ts">
import Vue from "vue"
import { Component } from "vue-property-decorator"
import { mapActions, mapGetters } from "vuex"

@Component({
	metaInfo() {
		return {
			title: "Blog"
		}
	},
	computed: { ...mapGetters(["posts"]) },
	methods: { ...mapActions(["getPosts"]) },
})
export default class Blog extends Vue {
	created() {
		this.getPosts()
	}
}
</script>
