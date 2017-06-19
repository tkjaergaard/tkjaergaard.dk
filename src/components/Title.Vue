<template>
    <h3 class="anim-in-fade big-title"><span>{{ $route.name }}</span></h3>
</template>

<script>
    export default {

    }
</script>

<style lang="scss">
  @import "~@/styles/variables";
  @import "~@/styles/helpers";
  /* Big title */
  .big-title {
    display: flex;
    position: absolute;
    z-index: 99999;
    top: 0;
    left: 0;

    white-space: nowrap;
    @include font-size(11px, 13px);

    @extend .non-selectable;

    @media (max-width: 768px) {
      position: fixed;
      top: 17.5px;
      left: 90px;
    }

    @media (min-width: 768px) {
      top: 100px;
      left: 160px;
    }

    span {
      display: inline-flex;
      align-items: center;

      &:before {
        content: "";
        height: .07rem;
        width: 15px;
        background: var(--color-dark-a);
        display: inline-block;

        margin-right: 10px;

        @media (min-width: 1024px) {
          width: 30px;
        }
      }
    }
  }
</style>
