<script setup>
// Props
const props = defineProps({
  modelValue: String,
  type: String,
  placeholder: String
})
</script>

<template>
  <div class="input">
    <input
      id="phone"
      class="input__field"
      :type="props.type"
      placeholder=""
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <div class="input__background"></div>
    <label for="phone" class="input__placeholder">
      {{ props.placeholder }}
    </label>
  </div>
</template>

<style lang="scss" scoped>
.input {
  position: relative;
  margin-top: 10px;

  &__field {
    border-radius: 8px;
    border: 2px solid $color-primary;
    outline: 0;
    background: #fff;
    color: $color-text-dark;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    box-sizing: border-box;
    padding: 14px 16px;
  }

  &__background {
    border-radius: 10px;
    height: 20px;
    left: 20px;
    position: absolute;
    top: -20px;
    transform: translateY(0);
    transition: transform 100ms;
    width: 176px;
  }

  &__field:focus ~ &__background,
  &__field:not(:placeholder-shown) ~ &__background {
    transform: translateY(8px);
  }

  &__placeholder {
    left: 17px;
    pointer-events: none;
    position: absolute;
    transform-origin: 0 50%;
    transition:
      transform 100ms,
      color 100ms;
    top: 17px;

    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    color: #8c8f97;
  }

  &__field:focus ~ &__placeholder,
  &__field:not(:placeholder-shown) ~ &__placeholder {
    transform: translateY(-27px) translateX(-2px) scale(0.75);
  }

  &__field:not(:placeholder-shown) ~ &__placeholder {
    color: $color-primary;
    font-weight: 500;
    background: #fff;
    padding: 0 4px;
  }

  &__field:focus ~ &__placeholder {
    color: $color-primary;
    font-weight: 500;
    background: #fff;
    padding: 0 4px;
  }
}
</style>
