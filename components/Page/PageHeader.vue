<template>
  <header class="header">
    <div class="header__top">
      <div class="container header__container">
        <div class="header__left">
          <nuxt-link to="/" class="logo">
            <img
              class="logo__img"
              src="@/static/images/content/logo.png"
              alt="Лесокомбинат"
              title="Лесокомбинат"
            />
            <span class="logo__text">Лесокомбинат</span>
          </nuxt-link>
        </div>
        <div class="header__right">
          <div class="header__actions">
            <BaseButton class="button--size--m button--has-icon header__button">
              <img src="@/static/images/content/telephone.png" alt="" />
              <span>Обратная связь</span>
            </BaseButton>
          </div>
          <div class="header__burger">
            <div class="hamburger hamburger--collapse">
              <div class="hamburger-box">
                <div class="hamburger-inner"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="header__bottom">
      <div class="container header__container">
        <div class="header__left">
          <PageNav />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import BaseButton from '@/components/Base/BaseButton'
import PageNav from '@/components/Page/PageNav'

export default {
  name: 'PageHeader',
  components: {
    BaseButton,
    PageNav
  }
}
</script>

<style lang="scss">
.header {
  position: relative;
  z-index: 10;
  &__top {
    height: 80px;
    padding: 16px 0;
    background-color: white;
    left: 0;
    right: 0;
    top: 0;
    z-index: 10;
    transition: background-color 0.5s;
  }
  &__bottom {
    position: absolute;
    bottom: -46px;
    left: 0;
    right: 0;
    height: 46px;
    background-color: #5c5d5f;
    opacity: 0.9;
    z-index: 9;
  }
  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }
  &__actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__lang-select {
    margin-right: 30px;
  }
  &__burger {
    display: none;
  }
}
.logo {
  display: flex;
  align-items: center;
  text-decoration: none;
  &__img {
    margin-right: 8px;
    width: 62px;
    height: 48px;
  }
  &__text {
    font-family: 'Montserrat', Helvetica, Arial, sans-serif;
    font-weight: bold;
    font-size: 25px;
    color: $light-green;
  }
}
.hamburger {
  //padding: 15px 15px;
  display: inline-block;
  cursor: pointer;
  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;
  font: inherit;
  color: inherit;
  text-transform: none;
  background-color: transparent;
  border: 0;
  margin: 0;
  overflow: visible;
}
.hamburger:hover {
  opacity: 0.7;
}
.hamburger-inner {
  display: block;
  top: 50%;
  margin-top: -2px;
}
.hamburger-inner,
.hamburger-inner::before,
.hamburger-inner::after {
  width: 36px;
  height: 4px;
  background-color: $light-green;
  border-radius: 4px;
  position: absolute;
  transition-property: transform;
  transition-duration: 0.15s;
  transition-timing-function: ease;
}
.hamburger-inner::before,
.hamburger-inner::after {
  content: '';
  display: block;
}
.hamburger-inner::before {
  top: -10px;
}
.hamburger-inner::after {
  bottom: -10px;
}
.hamburger.is-active:hover {
  opacity: 0.7;
}

/*
   * Collapse
   */
.hamburger--collapse .hamburger-inner {
  top: auto;
  bottom: 0;
  transition-duration: 0.13s;
  transition-delay: 0.13s;
  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
}
.hamburger--collapse .hamburger-inner::after {
  top: -20px;
  transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),
    opacity 0.1s linear;
}
.hamburger--collapse .hamburger-inner::before {
  transition: top 0.12s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),
    transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);
}

.hamburger--collapse.is-active .hamburger-inner {
  transform: translate3d(0, -10px, 0) rotate(-45deg);
  transition-delay: 0.22s;
  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
}
.hamburger--collapse.is-active .hamburger-inner::after {
  top: 0;
  opacity: 0;
  transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333),
    opacity 0.1s 0.22s linear;
}
.hamburger--collapse.is-active .hamburger-inner::before {
  top: 0;
  transform: rotate(-90deg);
  transition: top 0.1s 0.16s cubic-bezier(0.33333, 0, 0.66667, 0.33333),
    transform 0.13s 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);
}

.hamburger.is-active .hamburger-inner,
.hamburger.is-active .hamburger-inner::before,
.hamburger.is-active .hamburger-inner::after {
  background-color: $light-green;
}

.hamburger-box {
  width: 36px;
  height: 24px;
  display: inline-block;
  position: relative;
}
</style>
