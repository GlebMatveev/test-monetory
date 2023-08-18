<script setup>
// Props
const props = defineProps({
  theme: String,
  title: String,
  height: String,
  width: String,
  border: String,
  borderRadius: String,
  padding: String,
  background: String,
  color: String
})
</script>

<template>
  <button
    class="button"
    :class="{
      'button--primary': props.theme === 'primary',
      'button--gray': props.theme === 'gray'
    }"
    :style="`height: ${props.height}; width: ${props.width}; border: ${props.border}; border-radius: ${props.borderRadius}; padding: ${props.padding};`"
  >
    {{ props.title }}
  </button>
</template>

<style lang="scss" scoped>
.button {
  font-family: $font-primary;
  height: 40px;
  padding: 8px 16px;
  border-radius: $border-radius;
  border: none;

  cursor: pointer;

  &--primary {
    background: $color-primary;
    color: $color-text-white;
  }
  &--primary:hover {
    background: lighten($color-primary, 10);
  }

  &--gray {
    background: $color-gray;
    color: $color-text-dark;
  }
  &--gray:hover {
    background: darken($color-gray, 10);
  }
}
</style>
