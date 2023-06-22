<script setup lang="ts">
import { ref } from 'vue'

const money = ref<number>(500)

// 向父組件取得資料
const getFromParent = ($parent) => {
  $parent.money -= 100
  money.value += 100
}
</script>

<template>
  <div>
    <h2>Child2 {{ money }}</h2>
    <button @click="getFromParent($parent)">向父組件取得100</button>
  </div>
</template>
