<script setup lang="ts">
import DefaultSlot from './DefaultSlot.vue'
import NamedSlot from './NamedSlot.vue'
import ScopedSlot from './ScopedSlot.vue'
import { ref } from 'vue'

interface todoType {
  id: Number
  title: String
}

const todos = ref<todoType[]>([
  { id: 1, title: '吃飯' },
  { id: 2, title: '睡覺' },
  { id: 3, title: '打東東' }
])

const handlerAlert = (row: todoType) => {
  const { title } = row
  alert(`你點擊到的是${title}`)
}
</script>

<template>
  <div class="slot--display">
    <!-- 默認插槽 -->
    <DefaultSlot>
      <h3>加入到預設插槽</h3>
    </DefaultSlot>
    <!-- 具名插槽 -->
    <NamedSlot>
      <template #header>
        <p>加入到header裡</p>
      </template>
      <template #footer>
        <p>加入到footer裡</p>
      </template>
    </NamedSlot>
    <!-- 作用域插槽 -->
    <ScopedSlot :todos="todos">
      <template #handler="{ $row }">
        <!-- 父組件獲取數據 -->
        <button @click="handlerAlert($row)">提示</button>
        <!-- 從父組件控制樣式 -->
        <!-- <p>{{ $row.title }} - {{ $index + 1 }}</p> -->
      </template>
    </ScopedSlot>
  </div>
</template>

<style>
.slot--display {
  display: flex;
  gap: 10px;
}
</style>
