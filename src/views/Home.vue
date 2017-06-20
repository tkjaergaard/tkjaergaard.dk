<template>
  <div class="centered-content">
    <div class="home">
      <h1 class="anim-in-up non-selectable">
        Creative coder, father of two, home-grown hacker and frontend activist.
        More text here, maybe hit 3 lines.. that would be awesome
      </h1>
      <div class="anim-in-up">
        <div class="offset-image" data-mouse-parallax="0.1">
          <div class="offset-image-para">
            <img class="offset-image-i" src="https://d29lbt79yqi8lw.cloudfront.net/web/thomas.jpg" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    mounted () {
      this.listenForPara()
    },
    methods: {
      listenForPara () {
        let el = document.querySelector('.offset-image-para')
        let mouseVal = 88

        document.addEventListener('mousemove', function (e) {
          let x = e.pageX / mouseVal
          let y = e.pageY / mouseVal
          el.style.transform = 'translate3d(' + x + 'px, ' + y + 'px, 0)'
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/styles/mixins";
  @import "~@/styles/variables";
  @import "~@/styles/helpers";
  @import "~@/styles/animations";

  .home {
    text-align: center;
  }

  h1 {
    @include font-size(26px, 36px);
    line-height: 1.3;
    font-weight: 700;

    position: relative;
    z-index: 1;

    color: var(--color-dark-b);

    a {
      color: var(--color-dark-a);
      text-decoration: underline;

      &:hover {
        text-decoration: none;
      }
    }
  }

  .offset-image {
    position: absolute;
    z-index: 0;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -75%);

    max-width: 640px;
    width: 100%;
    height: auto;

    filter: grayscale(100%);

    opacity: .3;

    @media (max-width: 768px) {
      transform: translate(-50%, -117.5%);
    }

    img {
      display: block;
      max-width: 100%;
      height: auto;

      margin-left: auto;
      margin-right: auto;

      vertical-align: bottom;

      @media (max-width: 768px) {
        max-width: 80vw;
      }
    }
  }

  .offset-image-para {
    will-change: transform;
    transform-style: preserve-3d;
    backface-visibility: hidden;

    transition: transform 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
  }

</style>
