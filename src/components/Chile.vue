<script setup lang="ts">
const titleModel = defineModel<string>('title', {
  required: true
})
const inputModel = defineModel<string>('input', {
  required: true
})
</script>

<template>
  <h1>{{ titleModel }}</h1>
  <input v-model="inputModel" type="text">
</template>
