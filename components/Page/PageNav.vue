<template>
  <nav class="nav" :class="navClass">
    <nuxt-link
      to="/"
      class="link nav__link"
      exact-active-class="nav__link--active"
      >Главная</nuxt-link
    >
    <nuxt-link to="/techics" class="link nav__link">Техника</nuxt-link>
    <nuxt-link to="/vacancies" class="link nav__link">Вакансии</nuxt-link>
    <nuxt-link to="/contacts" class="link nav__link">Контакты</nuxt-link>
  </nav>
</template>

<script>
export default {
  name: 'PageNav',
  props: {
    navClass: {
      type: String
    }
  }
}
</script>

<style lang="scss">
.nav {
  &__link {
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 0.4px;
    text-transform: uppercase;
    display: inline-block;
    margin-right: 48px;
    color: $gray;
    transition: color 0.3s;
    &:hover {
      color: lighten($gray, 15%);
    }
    &:last-child {
      margin-right: 0;
    }
  }
  &__link--active {
    color: white;
  }
}
</style>
