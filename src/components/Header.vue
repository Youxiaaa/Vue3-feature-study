<script setup lang="ts">
import { ref } from 'vue'

const menus = ref([
  { id: 1, label: 'defineModel', router: '/defineModel' },
  { id: 2, label: 'useAttrs', router: '/useAttrs' },
  { id: 3, label: 'defineExpose', router: '/defineExpose' },
  { id: 4, label: 'slot', router: '/slot' },
  { id: 5, label: 'FP', router: '/fp' },
])
</script>

<template>
  <div>
    <div class="header">
      <nav>
        <ul class="menu__ul">
          <li v-for="(menu, index) in menus" :key="index" class="menu__ul__item">
            <router-link :to="menu.router">{{ menu.label }}</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style scoped>
.header {
  backdrop-filter: blur(5px);
  background-color: rgba(255, 255, 255, 0.3);
  position: fixed;
  top: 5%;
  left: 5%;
  width: 90%;
  padding: 10px;
  border-radius: 10px;
}
.menu__ul {
  list-style: none;
  display: flex;
  gap: 10px;
}

.menu__ul__item a{
  color: #000;
  font-weight: 800;
}
</style>
