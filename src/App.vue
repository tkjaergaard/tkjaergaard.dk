<template>
  <div id="app">
    <top />
    <!-- <page-title v-if="$route.name != 'Home' "/> -->
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <bottom />
  </div>
</template>

<script>
  import Top from '@/components/Header'
  // import PageTitle from '@/components/PageTitle'
  import Bottom from '@/components/Bottom'

  export default {
    components: { Top, Bottom }
  }
</script>

<style lang="scss">
  @import "~@/styles/animations";
  @import "~@/styles/variables";
  @import "~@/styles/helpers";

  /* HTML & Body styles */
  body,
  html {
    min-height: 100vh;
    width: 100vw;

    margin: 0;
    padding: 0;

    -webkit-font-smoothing: antialiased;
    font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: geometricPrecision;
    text-rendering: optimizeLegibility;
  }

  html {
    box-sizing: border-box;
    background: var(--color-blue-a);
  }

  body {
    position: relative;
    font: 100%/var(--line-height) 'Roboto Mono', monospace;
    color: var(--color-dark-c);
    background: var(--color-sand-a);
  }

  /* Browser reset */
  button,
  input,
  textarea {
    font: inherit;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  ::selection {
    color: var(--color-blue-a);
    background: var(--color-dark-a);
  }

  /* Typography */
  h1, h2, h3 {
    margin: 0;
    font-weight: normal;
  }

  p {
    margin: 0;
  }

  a, a:visited {
    color: var(--color-dark-d);
    text-decoration: none;

    &:hover {
      text-decoration: line-through;
    }
  }
</style>
