<template>
  <div class="main-container">
    <LeftMenu />
    <div class="right-content">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import LeftMenu from './LeftMenu.vue'
</script>

<style scoped>
.main-container { display: flex; height: 100vh; }
.right-content { flex: 1; padding: 20px; overflow: auto; }
</style>