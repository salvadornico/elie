<template lang="pug">
#blog
	h1 This is a blog
</template>

<script lang="ts">
import Vue from "vue"
import { Component } from "vue-property-decorator"

@Component
export default class Blog extends Vue {}
</script>
