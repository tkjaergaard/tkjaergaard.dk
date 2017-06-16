<template>
  <div role="home">
    <router-link class="logo" tag="a" :to="{name: 'Home'}" exact>
      Thomas Kjaergaard
    </router-link>
  </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
  [role="home"] {
    flex: 1 1 50%;
    text-align: left;
  }

  .logo {
    @media (max-width: 768px) {
      color: var(--color-white-a);
    }
  }
</style>
