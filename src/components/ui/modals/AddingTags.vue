<script setup>
// Import
import { ref, computed } from 'vue'
import UiInputsVInput from '@/components/ui/inputs/VInput.vue'
import UiButtonsVBtn from '@/components/ui/buttons/VBtn.vue'
import IconClose from '@/components/icons/IconClose.vue'
import tag from '@/helpers/js/tag'

// Pinia stores
import { useProductStore } from '@/stores/product'
import { useModalStore } from '@/stores/modal'
import { useTagStore } from '@/stores/tag'
const productStore = useProductStore()
const modalStore = useModalStore()
const tagStore = useTagStore()

// Variables
const word = ref('')
const addedTags = ref([])
const searchTags = ref([])

// Computed
const tagsCounter = computed(() => {
  return 20 - addedTags.value.length
})

// Functions
function saveTags(tags) {
  tagStore.saveTags(tags)
  modalStore.closeModal()
}

function searchTag(word) {
  searchTags.value = []

  if (word.length > 1) {
    productStore.products.filter((item) => {
      item.categories.forEach((cat) => {
        cat.subcategories.forEach((subcat) => {
          subcat.tags.forEach((t) => {
            if (t.name.toLowerCase().includes(word.toLowerCase())) {
              searchTags.value.push(t.name)
              t.aliases.forEach((alias) => {
                tag.addTag(searchTags.value, alias)
              })
            }
          })
        })
      })
    })
  }
}
</script>

<template>
  <div class="tags">
    <div class="tags__header">
      <h2 class="tags__title">Добавление тегов</h2>
      <p class="tags__description" v-if="tagsCounter > 0">
        Вы можете добавить ещё
        <span class="tags__description-counter">{{ tagsCounter }}</span>
      </p>
      <p class="tags__description" v-else>Вы больше не можете добавить теги</p>
    </div>

    <div class="tags__body">
      <UiInputsVInput
        type="text"
        placeholder="Название тега"
        v-model="word"
        @input="searchTag(word)"
      />

      <ul class="tags__searching" v-if="tagsCounter > 0">
        <li
          class="tags__searching-item"
          :class="{
            disabled: tag.calcTagStatus(addedTags, item)
          }"
          v-for="(item, index) in searchTags"
          :key="index"
          @click="tag.addTag(addedTags, item)"
        >
          {{ item }}
        </li>
      </ul>
      <p class="tags__description" v-else>К сожалению, больше нельзя добавлять теги.</p>
      <p class="tags__description" v-if="word.length > 1 && searchTags.length <= 0">
        По запросу ничего не найдено
      </p>
    </div>

    <ul class="tags__added" v-show="addedTags.length > 0">
      <li class="tags__added-item" v-for="(item, index) in addedTags" :key="index">
        <p>{{ item }}</p>
        <IconClose class="tags__added-item-icon" @click="tag.deleteTag(addedTags, item)" />
      </li>
    </ul>

    <div class="tags__footer">
      <UiButtonsVBtn theme="primary" @click="saveTags(addedTags)">Сохранить</UiButtonsVBtn>
      <UiButtonsVBtn theme="gray" @click="modalStore.closeModal()">Отмена</UiButtonsVBtn>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tags {
  width: 540px;

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
    &-item:hover {
      color: $color-text-white;
      background: $color-primary;
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

@media (max-width: 425px) {
  .tags {
    width: 100vw;
    height: 100vh;

    &__searching {
      overflow: auto;
    }

    &__added {
      margin-top: auto;
    }
  }
}
</style>
