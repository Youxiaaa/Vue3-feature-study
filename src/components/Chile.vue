<script setup lang="ts">
const titleModel = defineModel<string>('title', {
  required: true
})
const countModel = defineModel<number>('count', {
  required: true
})

const $emit = defineEmits(['update:count'])

const handler = () => {
  $emit('update:count', countModel.value + 1)
}
</script>

<template>
  <h1>{{ titleModel }}</h1>
  <input v-model="countModel" type="number">
  <button @click="handler">Increment</button>
  <button @click="$emit('update:count', 0)">reset</button>
</template>
