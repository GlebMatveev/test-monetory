<script setup lang="ts">
// Pinia stores
import { useModalStore } from '@/stores/modal'
const modalStore = useModalStore()

// Props
const props = defineProps({
  width: String,
  height: String,
  borderRadius: String,
  padding: String
})
</script>

<template>
  <Teleport to="body">
    <div v-if="modalStore.isVisible" @click.self="modalStore.closeModal()" class="modal__overlay">
      <div
        v-if="modalStore.isVisible"
        class="modal"
        :style="`width: ${props.width}; height: ${props.height};  border-radius: ${props.borderRadius}; padding: ${props.padding};`"
      >
        <slot></slot>
      </div>
    </div>
  </Teleport>
</template>

<style lang="scss" scoped>
.modal {
  background: #ffffff;
  border-radius: 10px;
  background: #fff;
  height: fit-content;
  position: absolute;
  top: 50%;
  transform: translate(0%, -50%);

  &__overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(6px);
    z-index: 5;
  }
}
</style>
