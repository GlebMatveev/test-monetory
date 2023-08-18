<script setup lang="ts">
// Props
const props = defineProps({
  show: Boolean,
  modal: Object,
  width: String,
  height: String,
  borderRadius: String,
  padding: String
})
</script>

<template>
  <Teleport to="body">
    <div v-if="show" class="modal__overlay">
      <div
        v-if="props.show"
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
  width: 540px;
  height: 501px;
  margin-top: 5%;

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
