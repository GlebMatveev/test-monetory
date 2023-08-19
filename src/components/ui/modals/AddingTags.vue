<script setup>
import UiInputsVInput from '../inputs/VInput.vue'
import UiButtonsVBtn from '../buttons/VBtn.vue'

import IconClose from '../../icons/IconClose.vue'

// Pinia stores
import { useModalStore } from '../../../stores/modal'
const modalStore = useModalStore()
</script>

<template>
  <div class="tags">
    <div class="tags__header">
      <h2 class="tags__title">Добавление тегов</h2>
      <p class="tags__description">
        Вы можете добавить ещё
        <span class="tags__description-counter">20</span>
      </p>
    </div>

    <div class="tags__body">
      <UiInputsVInput type="text" placeholder="Название тега" />

      <ul class="tags__searching">
        <li class="tags__searching-item">Стекло</li>
        <li class="tags__searching-item">Стекло автомобильное</li>
        <li class="tags__searching-item">Остекление</li>
        <li class="tags__searching-item">Стеклянная ваза</li>
        <li class="tags__searching-item">Зеркало</li>
      </ul>
    </div>

    <ul class="tags__added">
      <li class="tags__added-item">
        <p>Стекло</p>
        <IconClose class="tags__added-item-icon" />
      </li>
    </ul>

    <div class="tags__footer">
      <UiButtonsVBtn theme="primary">Сохранить</UiButtonsVBtn>
      <UiButtonsVBtn theme="gray" @click="modalStore.closeModal()">Отмена</UiButtonsVBtn>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tags {
  &__header {
    padding: 40px 40px 20px;
    border-bottom: 1px solid #ecedf2;
  }
  &__body {
    padding: 32px 40px 24px;
    min-height: 144px;
  }
  &__footer {
    padding: 24px 40px;
    border-top: 1px solid #ecedf2;
    display: flex;
    gap: 20px;
  }

  &__title {
    color: $color-text-dark;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
    margin-bottom: 12px;
  }

  &__description {
    color: $color-text-gray;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;

    &-counter {
      font-weight: 600;
      color: #404144;
    }
  }

  &__searching {
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
      cursor: pointer;
    }
  }

  &__added {
    display: flex;
    gap: 8px;
    row-gap: 9px;
    flex-wrap: wrap;
    padding: 24px 40px;
    border-top: 1px solid #ecedf2;

    &-item {
      display: flex;
      align-items: center;
      gap: 8px;
      color: #404144;
      font-family: Montserrat;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 16px;
      padding: 8px 12px;
      border-radius: 4px;
      background: #f6f6f9;

      &-icon {
        cursor: pointer;
      }
    }
  }
}
</style>
