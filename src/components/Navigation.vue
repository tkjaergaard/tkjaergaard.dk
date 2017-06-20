<template>
  <div role="navigation">
    <router-link class="navigation-link external-link" tag="a" :to="{name: 'Home'}" exact>
      Front
    </router-link>
    <router-link class="navigation-link external-link" tag="a" :to="{name: 'About'}" exact>
      About
    </router-link>
    <a href="https://twitter.com/t_kjaergaard" target="_blank" class="navigation-link external-link">
      Twitter
    </a>
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

    display: inline-flex;
    justify-content: flex-end;
    flex-direction: row;

    @media (max-width: 768px) {
      transform: translateX(5px);
    }
  }

  [role="navigation"] a {
    margin-bottom: 0px;
    line-height: 1.3;
    color: var(--color-dark-c);
    transform: rotate(45deg);

    &:hover:not('.router-link-exact-active') {
      opacity: .6;
    }

    &.router-link-exact-active {
      color: var(--color-blue-a);
      font-weight: 900;
    }

    &:last-of-type {
      margin-bottom: 0;
    }
  }
</style>
