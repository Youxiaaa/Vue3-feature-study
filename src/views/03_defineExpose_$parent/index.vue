<script setup lang="ts">
import Child1 from './Child1.vue'
import Child2 from './Child2.vue'
import { ref } from 'vue'

const money = ref<number>(1000)

// 取得Child1實例
const child1 = ref()
// 向Child1取得100
const handlerGetFromChild1 = () => {
  money.value += 100
  child1.value.money -= 100
}

// 暴露實例出去
defineExpose({
  money
})
</script>

<template>
  <div>
    <h2>父組件： {{ money }}</h2>
    <button @click="handlerGetFromChild1">向Child1取得100</button>
    <Child1 ref="child1" />
    <Child2 />
  </div>
</template>
