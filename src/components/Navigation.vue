<template>
  <div role="navigation">
    <router-link class="navigation-link external-link" tag="a" :to="{name: 'Home'}" exact>
      Home
    </router-link>
    <router-link class="navigation-link external-link" tag="a" :to="{name: 'About'}" exact>
      About
    </router-link>
  </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
  [role="navigation"] {
    flex: 1 1 50%;
    text-align: right;
  }

  [role="navigation"] a {
    margin-right: 15px;

    @media (min-width: 769px) {
      margin-right: 30px;
    }

    &:last-of-type {
      margin-right: 0;
    }
  }
</style>
