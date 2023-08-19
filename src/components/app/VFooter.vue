<script setup>
import IconTelegram from '../icons/IconTelegram.vue'
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__wrapper">
        <p class="footer__title">Тестовое задание:</p>
        <p class="footer__description">приложение для поиска и выбора тегов товаров</p>
        <a class="footer__author" href="https://t.me/glebmatveev">
          <IconTelegram class="footer__author-icon" />
          <p class="footer__author-name">Глеб Матвеев</p>
        </a>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  background: $color-gray;
  padding: 20px 0;
  flex-shrink: 0;
  min-height: 150px;

  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &__title {
    font-weight: 600;
  }
  &__author {
    display: flex;
    gap: 10px;

    &-icon {
      height: 20px;
      width: 20px;
    }
    &-name {
      color: $color-primary;
    }
  }
}
</style>
