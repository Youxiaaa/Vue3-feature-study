<script setup lang="ts">
import { useAttrs } from 'vue'
const $attrs = useAttrs()
</script>

<template>
  <button :="$attrs">{{ $attrs.title }}</button>
</template>
