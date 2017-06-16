<template>
  <div id="app">
    <top />
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import Top from '@/components/Header'

  export default {
    components: { Top }
  }
</script>

<style lang="scss">
  @import "~@/styles/animations";
  @import "~@/styles/variables";

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

    background-color: var(--color-dark-a);
  }

  html {
    box-sizing: border-box;
  }

  body {
    position: relative;
    font-family: 'Franklin Gothic Medium', 'Franklin Gothic', 'ITC Franklin Gothic', Arial, sans-serif;
    color: var(--color-dark-d);
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  ::selection {
    color: var(--color-cyan-a);
    background: var(--color-dark-a);
  }

  /* Typography */
  h1, h2, h3 {
    margin: 0;
    font-weight: normal;
  }

  a, a:visited {
    color: var(--color-dark-d);
    text-decoration: none;

    &:hover {
      text-decoration: line-through;
    }
  }
</style>
