<script setup lang="ts">
import { toRefs } from 'vue'

const props = defineProps({
  todos: {
    type: Array,
    default: () => []
  }
})

const { todos } = toRefs<any>(props)
</script>

<template>
  <div>
    <h5>作用域插槽</h5>
    <p>可以傳遞數據的插槽</p>
    <ul>
      <li v-for="(todo, index) in todos" :key="todo.id">
        {{ index + 1 }} - {{ todo.title }}
        <slot name="handler" :$row="todo" :$index="index" />
      </li>
    </ul>
  </div>
</template>
