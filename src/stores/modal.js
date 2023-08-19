import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useModalStore = defineStore('modalStore', () => {
  const isVisible = ref(false)

  function openModal() {
    isVisible.value = true
  }

  function closeModal() {
    isVisible.value = false
  }

  return { isVisible, openModal, closeModal }
})
