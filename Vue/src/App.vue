<script setup>
import HeaderItem from './components/HeaderItem.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <HeaderItem v-if="$route.meta.headerItem"></HeaderItem>
  <RouterView />
</template>

<style>
.App {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
}
</style>
