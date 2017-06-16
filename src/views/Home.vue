<template>
  <div class="centered-content">
    <div class="home">
      <h1 class="anim-in-up non-selectable">
        Intro about your self
      </h1>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
  @import "~@/styles/mixins";
  @import "~@/styles/variables";
  @import "~@/styles/helpers";

  .home {
    text-align: center;
  }

  .home h1 {
    @include font-size(22px, 32px);
    letter-spacing: .066rem;
    font-weight: 400;
    line-height: 1.4;

    color: var(--color-white-a);
  }


</style>
