<template>
  <div class="centered-content">
    <div class="about">
      <p class="anim-in-up non-selectable">
        About you
      </p>
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

  .about {
    text-align: center;
    max-width: 760px;
  }


  .about p {
    color: var(--color-dark-d);
    line-height: 1.75;

    @include font-size(14px, 16px);

    margin-bottom: 40px;

    position: relative;

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  .about p a, a:visited {
    opacity: .6;
    text-decoration: underline;

    &:hover {
      color: var(--color-white-a);
    }
  }
</style>
