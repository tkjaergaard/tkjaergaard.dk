<template>
  <div class="centered-content long">
    <div class="about">
      <div class="anim-in-up">
        <h2 class="non-selectable">Biography</h2>
      </div>
      <p class="anim-in-up non-selectable">
        I'm a danish entrepreneur, trying to set my print on the world through technology.
      </p>

      <p class="anim-in-up non-selectable">
        Currently I'm doing good things with my friend <a href="https://busb.org">Simon</a> at <a href="https://heavyy.io">Heavyy</a> – a "creative collaboration agency".
      </p>

      <p class="anim-in-up non-selectable">
        I've been working with amazing brands and people over the years like: <i>American Express</i>, <i>Spar Nord</i>, <i>Läkerol</i>, <i>Danish National Archives</i>, <a href="https://rwatgg.com/"><i>Relax, We Are The Good Guys</i></a>, <a href="http://kasperlaigaard.com/"><i>Kasper Laigaard</i></a>, <a href="https://stupid-studio.com/"><i>Stupid Studio</i></a> and <a href="https://vokseverk.dk/">Vokseværk</a>.
      </p>

      <p class="anim-in-up non-selectable">
        Previously I've co-founded <a href="https://onedayout.io">One Day Out</a>, <a href="https://slack.devdk.org">Devdk</a> and been #1 on <a href="https://www.producthunt.com/posts/type-anything">Producthunt</a>.
      </p>

      <p class="anim-in-up non-selectable">
        <strong>See more</strong>
        <ul>
          <li>
            <a href="https://heavyy.io">Heavyy - Creative collaboration agency</a>
          </li>
          <li>
            <a href="https://onedayout.io">One Day Out - Conference for creatives</a>
          </li>
          <li>
            <a href="https://typeanything.io">Typeanything - Font combination test tool</a>
          </li>
          <li>
            <a href="https://slack.devdk.org">Devdk - Slack community for danish devs and creatives</a>
          </li>
        </ul>
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
    text-align: left;
    max-width: 670px;
  }

  h2 {
    margin-bottom: 20px;
    @include font-size(22px, 44px);
    opacity: .3;
    color: var(--color-dark-d);
  }

  p {
    line-height: 1.65;

    @include font-size(14px, 18px);

    margin-bottom: 40px;

    position: relative;

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  .about p a, a:visited {
    opacity: 1;
    font-weight: 700;
    padding: 0 3px;
    color: var(--color-dark-b);

    &:hover {
      color: var(--color-sand-a);
      background-color: var(--color-dark-a);
      text-decoration: none;
    }
  }
</style>
