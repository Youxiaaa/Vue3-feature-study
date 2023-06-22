<script setup lang="ts">
import { ref } from 'vue'

const money = ref<number>(500)
defineExpose({
  money
})
</script>

<template>
  <div>
    <h2>Child1 {{ money }}</h2>
  </div>
</template>
