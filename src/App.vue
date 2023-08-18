<script setup lang="ts">
import AppVHeader from './components/app/VHeader.vue'
import AppVFooter from './components/app/VFooter.vue'
</script>

<template>
  <AppVHeader />

  <main class="main">
    <div class="container">
      <p>main</p>
    </div>
  </main>

  <AppVFooter />
</template>

<style lang="scss">
@import '@/assets/styles/base.scss';

.main {
  flex-grow: 1;
  min-height: 700px;
}
</style>
