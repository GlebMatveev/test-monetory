<script setup>
import { onMounted } from 'vue'

import AppVHeader from './components/app/VHeader.vue'
import AppVFooter from './components/app/VFooter.vue'

import UiButtonsVBtn from './components/ui/buttons/VBtn.vue'
import UiModalsVModal from './components/ui/modals/VModal.vue'
import UiModalsAddingTags from './components/ui/modals/AddingTags.vue'

// Pinia stores
import { useProductStore } from './stores/product'
import { useModalStore } from './stores/modal'
const productStore = useProductStore()
const modalStore = useModalStore()

// Hooks
onMounted(() => {
  productStore.getProducts()
})
</script>

<template>
  <AppVHeader />

  <main class="main">
    <div class="container">
      <UiButtonsVBtn
        theme="primary"
        @click="modalStore.openModal()"
        @close="modalStore.closeModal()"
      >
        Открыть окно
      </UiButtonsVBtn>

      <UiModalsVModal>
        <UiModalsAddingTags />
      </UiModalsVModal>
    </div>
  </main>

  <AppVFooter />
</template>

<style lang="scss">
@import '@/assets/styles/base.scss';

.main {
  flex: 1 0 auto;
  padding: 20px 0;
}
</style>
