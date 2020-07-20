<template>
  <section id="screen_2" class="section s_second">
    <div class="block--left">
      <h2 class="s_title">PORTFOLIO</h2>
      <p class="text-1">We build digital products, <br> services and businesses</p>
      <p>Our products speak for themselves. <br>
        Take a look at our latest wo копия</p>
      <a href="#" class="buttons btn_more"><span>look  MORE</span></a>
    </div>
    <div class="block--right">
      <div class="slider_portfolio">
        <div class="bg_img"><img src="@/assets/img/macbook.svg" alt=" "></div>
        <div class="slider_wrap">
          <carousel :per-page="1" :navigation-enabled="true" :pagination-enabled="false">
            <slide>
              <img src="@/assets/img/image.png" alt=" ">
            </slide>
            <slide>
              <img src="@/assets/img/image.png" alt=" ">
            </slide>
          </carousel>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
import anime from 'animejs/lib/anime.es.js'
import { Carousel, Slide } from 'vue-carousel'

export default {
  components: {
    Carousel,
    Slide
  },
  methods: {
    
  },
  mounted() {
    // console.log('mount')
    // anime({
    //   targets: '.s_first',
    //   translateY: ['-100%', 0],
    //   easing: 'easeInQuart',
    //   duration: 500
    // });
  },
  // beforeDestroy() {
    // console.log('destroy')
    // anime({
    //   targets: '.s_first',
    //   translateY: '-100%',
    //   duration: 1500
    // });
  // }
  beforeDestroy() {
    setTimeout(function() {return false}, 1500)
  }
}
</script>

<style lang="scss">
  .s_second {
    padding-left: 25rem;
    padding-right: 64px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;

    .s_title {
      margin-top: 0;
      margin-bottom: 7rem;
    }
    p {
      font-weight: 300;
      font-size: 1.6rem;
      line-height: 1.9rem;
    }
    .text-1 {
      margin-bottom: 13px;
      font-weight: 400;
      font-size: 2.5rem;
      line-height: 3.3rem;
    }

    .btn_more {
      padding-left: 2.6rem;
      padding-right: 3.6rem;
      margin-top: 11rem;
      & > span {
        padding-left: 4rem;
        background: url("../assets/img/eye-white.svg") no-repeat left center;
        transition: background .2s;
      }
      &:hover, &:focus {
        & > span {
          background: url("../assets/img/eye.svg") no-repeat left center;
          transition: background .2s;
        }
      }
    }

    .block {
      &--left {
        margin-right: 10px;
        align-self: center;
        .bold  {
          margin-bottom: 30px;
        }
      }
      &--right {
        position: relative;
        align-self: center;
        display: flex;
        justify-content: flex-start;
        width: 47vw;
        background-size: contain;
      }
    }
    .slider_portfolio {
      position: relative;
      width: 66.2rem;
      display: block;
      img {
        display: block;
        width: 100%;
        height: auto;
      }
    }
    .slider_wrap {
      padding: 8px 10px 11px;
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      .slick-arrow {
        position: absolute;
        width: 8px;
        height: 18px;
        bottom: -3%;
        font-size: 0;
        opacity: 0.7;
        background: url("../assets/img/arrow_left.svg") no-repeat center;
        background-size: contain;
        cursor: pointer;
      }
      .slick-prev {
        left: -12%;
        background-image: url(../assets/img/arrow_left.svg);
      }
      .slick-next {
        right: -12%;
        background-image: url(../assets/img/arrow_right.svg);
      }
    }
    .VueCarousel {
      height: 100%;
    }
    .VueCarousel-inner {
      height: 100% !important;
    }
    .VueCarousel-slide {
      overflow-x: hidden;
      overflow-y: auto;
      overflow: hidden;
      position: relative;
      height: 100%;
      img {
        max-width: 100%;
        height: auto;
      }
    }
    .VueCarousel-navigation-button {
      outline: none !important;
      width: 3rem;
      height: 3.5rem;
      font-size: 0;
      top: auto;
      bottom: 2rem;
    }
    .VueCarousel-navigation-prev {
      left: -3rem;
      background: url(../assets/img/arrow_left.svg) no-repeat center;
      background-size: auto 20px;
    }
    .VueCarousel-navigation-next {
      right: -3rem;
      background: url(../assets/img/arrow_right.svg) no-repeat center;
      background-size: auto 20px;
    }
    .mCSB_inside>.mCSB_container {
      margin-right: 0;
    }
  }
  @media (max-width: 1439px) {
    .s_second p {
      font-size: 12px;
      line-height: 14px;
    }
  }
  @media (max-width: 1365px) {
    .s_second {
      padding-left: 100px;
      padding-right: 100px;
    }
  }
</style>