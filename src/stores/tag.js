import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTagStore = defineStore('tagStore', () => {
  const savedTags = ref([])

  function saveTags(tags) {
    savedTags.value = tags
  }

  return { savedTags, saveTags }
})
