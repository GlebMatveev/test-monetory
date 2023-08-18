<script setup lang="ts">
import AppVHeader from './components/app/VHeader.vue'
import AppVFooter from './components/app/VFooter.vue'

import UiButtonsVBtn from './components/ui/buttons/VBtn.vue'
import UiInputsVInput from './components/ui/inputs/VInput.vue'
import AddingTags from './components/ui/modals/AddingTags.vue'

import UiModalsVModal from './components/ui/modals/VModal.vue'
</script>

<template>
  <AppVHeader />

  <main class="main">
    <div class="container">
      <UiButtonsVBtn theme="primary"> Сохранить </UiButtonsVBtn>

      <UiInputsVInput theme="primary" placeholder="Название тега" />

      <AddingTags />

      <UiModalsVModal :show="true">
        <AddingTags />
      </UiModalsVModal>
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
