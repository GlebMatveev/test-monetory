import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLoaderStore = defineStore('loaderStore', () => {
  const loaderForContent = ref(false)

  return { loaderForContent }
})
