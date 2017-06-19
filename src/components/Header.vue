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

<style lang="scss">
  @import "~@/styles/mixins";

  header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding: 0 2rem;
    width: 100%;

    @include font-size(11px, 13px);
    letter-spacing: .1rem;
    font-weight: 400;

    text-transform: uppercase;

    transition: padding 200ms ease, top 200ms ease;

    a, a:visited {
      opacity: 1;

      &:hover {
        text-decoration: none;
        color: var(--color-dark-a);
      }
    }

    @media (max-width: 768px) {
      top: 0;
      transform: translateZ(1px);
      height: 60px;
      z-index: 100;
      position: fixed;
    }

    @media (min-width: 769px) {
      position: absolute;
      z-index: 9999;

      top: 6rem;
      padding: 0 6rem;
    }
  }
</style>
