<template>
  <div class="centered-content long">
    <div class="about">
      <div class="anim-in-up">
        <h2 class="non-selectable">Bio:</h2>
      </div>
      <p class="anim-in-up non-selectable">
        But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.
      </p>

      <p class="anim-in-up non-selectable">
        No one rejects, dislikes, or avoids <a href="#">pleasure itself</a>, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.
      </p>

      <p class="anim-in-up non-selectable">
        Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.
      </p>

      <p class="anim-in-up non-selectable">
        To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?
      </p>

      <p class="anim-in-up non-selectable">
        <strong>Working with</strong>
        <ul>
          <li>
            <a href="#">xxxxx</a>
          </li>
          <li>
            <a href="#">xxxxx xxxxxxxx</a>
          </li>
          <li>
            <a href="#">xxx</a>
          </li>
          <li>
            <a href="#">xxxx xxxxx</a>
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
