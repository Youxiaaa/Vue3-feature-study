<script setup lang="ts">
import { ref } from 'vue'

const arr = ref<number[]>([1, 2, 3, 4, 5])

// OOP
// const countNum = (newArr) => {
//   let result = 0
//   for (let i = 0; i < newArr.length; i += 1) {
//     result += newArr[i]
//   }
//   return result
// }

// FP
const countNum = (newArr, idx = 0) => {
  if (idx === newArr.length) return 0
  return newArr[idx] + countNum(newArr, idx + 1)
}

// const countNum = (newArr, idx = 0) => {
//   return newArr.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
// }

const total = ref(0)
const getNum = () => {
  const num = countNum(arr.value)
  total.value = num
}

const todos = ref([
  { id: 1, label: '吃飯', isCompleted: false },
  { id: 2, label: '睡覺', isCompleted: false },
  { id: 3, label: '打東東', isCompleted: false },
])

const doChangeTodoStatus = (index = 0) => {
  if (index === todos.value.length) return
  todos.value[index].isCompleted = true
  doChangeTodoStatus(index + 1)
}

const testArr = ref([1, 2, 3, 4, 5, 6])
// const filterNum = (arr: number[]) => {
//   return arr.length === 0
//   ? []
//   : arr[0] % 2 === 0
//   ? [arr[0], ...filterNum(arr.slice(1))]
//   : filterNum(arr.slice(1))
// }

const filterNum = (idx = 0) => {
  // 遞迴寫法
  if (idx === testArr.value.length) return
  if (testArr.value[idx] % 2 !== 0) testArr.value.splice(idx, 1)
  filterNum(idx + 1)
  // or
  // testArr.value = testArr.value.filter((item) => item % 2 === 0)
}
</script>

<template>
  <div>
    <p>Total : {{ total }}</p>
    <button @click="getNum">Count</button>
    <pre>{{ todos }}</pre>
    <button @click="doChangeTodoStatus(0)">Change</button>
    <br>
    <pre>{{ testArr }}</pre>
    <button @click="filterNum(0)">Get</button>
  </div>
</template>
