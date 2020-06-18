<template>
  <button :type="typeButton" class="button" :class="classButton">
    <slot />
  </button>
</template>
<script>
export default {
  name: 'BaseButton',
  props: {
    typeButton: {
      type: String,
      default: 'button'
    },
    classButton: {
      type: String,
      default: 'button--theme--default'
    }
  }
}
</script>

<style lang="scss">
.button {
  display: flex;
  align-items: center;
  border: 0;
  cursor: pointer;
  &--size--m {
    padding: 0 34px;
    height: 48px;
  }
  &--theme--default {
    height: 48px;
    line-height: 48px;
    background-color: $light-green;
    border-radius: 30px;
    color: white;
    transition: background-color 0.3s;
  }
  &--has-icon {
    img {
      width: 25px;
      height: 25px;
      object-fit: cover;
      object-position: center;
      display: block;
      margin-right: 10px;
    }
  }
  &--theme--default:hover {
    background-color: darken($light-green, 5%);
  }
}
</style>
