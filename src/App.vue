<script setup>
import { ref, onMounted } from 'vue'

import AppVHeader from './components/app/VHeader.vue'
import AppVFooter from './components/app/VFooter.vue'

import UiButtonsVBtn from './components/ui/buttons/VBtn.vue'
import UiModalsVModal from './components/ui/modals/VModal.vue'
import UiModalsAddingTags from './components/ui/modals/AddingTags.vue'

// Pinia stores
import { useProductStore } from './stores/product'
import { useModalStore } from './stores/modal'
import { useTagStore } from './stores/tag'
const productStore = useProductStore()
const modalStore = useModalStore()
const tagStore = useTagStore()

// Hooks
onMounted(() => {
  productStore.getProducts.then(null, setLoadingError)
})

// Variables
const loadingError = ref(false)

function setLoadingError() {
  loadingError.value = true
}
</script>

<template>
  <AppVHeader />

  <main class="main">
    <div class="container">
      <UiButtonsVBtn
        theme="primary"
        @click="modalStore.openModal()"
        @close="modalStore.closeModal()"
        :class="{
          disabled: !productStore.productsStatus
        }"
      >
        Добавить теги
      </UiButtonsVBtn>

      <p class="main__error" v-if="loadingError">
        Упс... По какой-то причине данные не загрузились. Пожалуйста, перезагрузите страницу или
        попробуйте позже.
      </p>

      <div v-if="tagStore.savedTags.length > 0">
        <p class="main__title">Добавленные теги:</p>
        <ul class="main__tags">
          <li class="main__tags-item" v-for="(item, index) in tagStore.savedTags" :key="index">
            {{ item }}
          </li>
        </ul>
      </div>

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

  &__title {
    margin: 20px 0;
    font-weight: 600;
  }

  &__tags {
    display: flex;
    gap: 8px;
    row-gap: 9px;
    flex-wrap: wrap;
    padding-top: 20px;

    &-item {
      color: #404144;
      font-family: Montserrat;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 16px;
      padding: 8px 12px;
      border-radius: 4px;
      background: #f6f6f9;
    }
  }

  &__error {
    padding: 30px 0;
  }
}

.disabled {
  opacity: 0.5;
  pointer-events: none;
}
</style>
