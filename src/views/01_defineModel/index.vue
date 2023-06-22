<script setup lang="ts">
import Chile from '@/components/Chile.vue'
import { ref } from 'vue'

const title = ref<string>('Vue 3.3 defineModel')
const count = ref<number>(0)
</script>

<template>
  <div>
    <Chile v-model:title="title" v-model:count="count" />
  </div>
</template>
