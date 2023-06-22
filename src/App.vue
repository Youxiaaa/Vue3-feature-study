<script setup lang="ts">
import Header from '@/components/Header.vue'
</script>

<template>
  <section>
    <Header />
    <router-view v-slot="{ Component, route }">
      <transition name="fade" mode="out-in">
        <component :is="Component" :key="route.path" />
      </transition>
    </router-view>
  </section>
</template>
