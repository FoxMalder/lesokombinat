<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__top">
        <div class="footer__left">
          <ul class="contacts list list--unstyled">
            <li class="contacts__item">
              <font-awesome-icon icon="phone-square" />
              <nuxt-link class="link footer__link" to="tel:84827174223">
                8 (482) 717-42-23
              </nuxt-link>
            </li>
            <li class="contacts__item">
              <font-awesome-icon icon="envelope" />
              <nuxt-link
                class="link footer__link"
                to="mailto:100lesov@inbox.ru"
              >
                100lesov@inbox.ru
              </nuxt-link>
            </li>
            <li class="contacts__item">
              <font-awesome-icon icon="map" />
              <nuxt-link class="link footer__link" to="/contacts">
                23 Sovetskaya Street, Sorogozhskoe Village, the Tver Region
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="footer__right">
          <PageNav class="footer__nav" />
        </div>
      </div>
      <div class="footer__bottom">
        <div class="footer__left">
          <span class="footer__text">
            ООО «Лесокомбинат». Все права защищены
          </span>
        </div>
        <div class="footer__right">
          <span class="footer__text">
            Разработка сайта:
            <a
              class="footer__develop"
              target="_blank"
              href="https://wizard-c.ru/web-studiya/"
            >
              Wizard-c
            </a>
          </span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import PageNav from '@/components/Page/PageNav'
export default {
  name: 'PageFooter',
  components: {
    PageNav
  }
}
</script>
<style lang="scss">
.footer {
  flex: 0 0 auto;
  background-color: $dark;
  color: $footer-color;
  &__top {
    padding: 44px 0 36px 0;
  }
  &__bottom {
    font-size: 12px;
    border-top: 1px solid white;
    padding: 12px 0 14px 0;
  }
  &__bottom,
  &__top {
    display: flex;
    justify-content: space-between;
  }
  &__left,
  &__right {
    width: 50%;
  }
  &__right,
  &__nav {
    display: flex;
    justify-content: flex-end;
  }
  &__right {
    align-items: center;
  }
  &__link {
    display: inline-block;
    margin-left: 12px;
    font-size: 15px;
    color: #fff;
    transition: color 0.3s;
    &:hover {
      text-decoration: underline;
    }
  }
  &__develop {
    font-weight: bold;
    display: inline-block;
    margin-left: 10px;
    text-decoration: none;
    color: white;
    text-transform: uppercase;
  }
  .fa-envelope {
    font-size: 16px;
  }
  .fa-phone-square {
    font-size: 17px;
  }
  .fa-map {
    font-size: 14px;
  }
}
.contacts {
  &__item {
    display: flex;
    align-items: center;
    margin-bottom: 12px;
    &:last-child {
      margin-bottom: 0;
    }
  }
}
@media (max-width: 767px) {
  .footer__left {
    width: 100%;
  }
  .footer__top .footer__right {
    display: none;
  }
  .contacts__item {
    justify-content: flex-start;
  }
  .footer__bottom {
    border-top: none;
  }
  .footer__bottom .footer__left .footer__text {
    display: none;
  }
  .footer__bottom .footer__left {
    display: none;
  }
  .footer__bottom .footer__right {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .footer__link {
    margin-left: 10px;
  }
  .footer .fa-map {
    position: relative;
    top: 3px;
  }
}
</style>
