<script setup>
import HeaderItem from './components/HeaderItem.vue'
import FooterItem from './components/FooterItem.vue'
import { RouterView } from 'vue-router'
</script>

<template>
    <HeaderItem v-if="$route.meta.headerItem"></HeaderItem>
    <RouterView />
    <FooterItem v-if="$route.meta.footerItem"></FooterItem>
</template>

<style></style>
