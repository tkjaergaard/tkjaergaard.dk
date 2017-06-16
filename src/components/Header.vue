<template>
  <header class="anim-in-fade">
    <logo />
    <navigation />
  </header>
</template>

<script>
  import Logo from '@/components/Logo'
  import Navigation from '@/components/Navigation'

  export default {
    components: { Logo, Navigation }
  }
</script>

<style lang="scss" scoped>
  @import "~@/styles/mixins";

  header {
    display: flex;
    justify-content: space-around;
    align-items: center;

    padding: 0 2rem;
    width: 100%;

    @include font-size(12px, 13px);

    transition: padding 200ms ease, top 200ms ease;

    @media (max-width: 768px) {
      top: 0;
      transform: translateZ(1px);
      height: 3rem;
      z-index: 9999;
      position: fixed;
      background: var(--color-dark-a);
    }

    @media (min-width: 769px) {
      position: absolute;
      z-index: 9999;

      top: 6rem;
      padding: 0 6rem;
    }
  }



</style>
