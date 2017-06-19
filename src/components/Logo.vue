<template>
  <div role="home">
    <router-link class="logo" tag="a" :to="{name: 'Home'}" exact>
      <span>tho <br> mas</span>
    </router-link>
  </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
  @import "~@/styles/mixins";

  [role="home"] {
    flex: 1 1 50%;
    text-align: left;
    margin-left: 0;
    margin-right: auto;
  }

  .logo {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    line-height: 1.3;

    @include font-size(12px, 16px);

    transform: rotate(-45deg) translateY(-5px) translateX(5px);

    color: var(--color-dark-c);
    font-weight: 400;

    &:hover {
      opacity: .6;
    }
  }
</style>
