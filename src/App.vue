<script setup lang="ts">
import Chile from './components/Chile.vue'
import { ref } from 'vue'

const title = ref<string>('Vue 3.3 defineModel')
const message = ref<string>('')
</script>

<template>
  <Chile v-model:title="title" v-model:input="message" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
