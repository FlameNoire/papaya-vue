<template>
  <section id="screen_2" class="section s_second">
    <div class="block--left">
      <h2 class="s_title">{{ $t('portfolio.t1') }}</h2>
      <div class="text">
        <!-- <p class="text-1">We build digital products, <br> services and businesses</p> -->
        <p class="text-1" v-html="$t('portfolio.t2')"></p>
        <!-- <p>Our products speak for themselves. <br> Take a look at our latest wo копия</p> -->
        <p v-html="$t('portfolio.t3')"></p>
        <p v-html="$t('portfolio.t4')"></p>
      </div>
      <router-link v-if="!isMobDevice" to="/portfolio" class="buttons btn_more">
        <i class="icon">
          <img src="@/assets/img/eye-white.svg" alt=" ">
          <img src="@/assets/img/eye.svg" alt=" ">
        </i>
        <span>{{ $t('buttons.btn3') }}</span>
      </router-link>
    </div>
    <div class="block--right">
      <div v-if="isMobDevice" class="bg_trgl"><img src="@/assets/img/trgl-4.svg" alt=" "></div>
      <div class="slider_portfolio">
        <div class="bg_img"><img src="@/assets/img/macbook.svg" alt=" "></div>
        <div class="slider_wrap">
          <carousel :per-page="1" :navigation-enabled="true" :pagination-enabled="false" v-images-loaded:on="imageLoaded" ref="carousel">
            <slide v-for="(image, index) in portfolioScreenshotsComputed" :key="index">
              <div class="portfolio_item">
                <img class="portfolio_img" :src="image" alt=" ">
              </div>
            </slide>
            <!-- <slide>
              <div class="portfolio_item">
                <img class="portfolio_img" src="@/assets/img/image-3.png" alt=" ">
              </div>
            </slide> -->
          </carousel>
        </div>
      </div>
      <router-link v-if="isMobDevice" to="/portfolio" class="buttons btn_more">
        <i class="icon">
          <img src="@/assets/img/eye-white.svg" alt=" ">
          <img src="@/assets/img/eye.svg" alt=" ">
        </i>
        <span>{{ $t('buttons.btn3') }}</span>
      </router-link>
    </div>

  </section>
</template>

<script>
import { isMobile, isTablet } from "mobile-device-detect"
import anime from 'animejs/lib/anime.es.js'
import { Carousel, Slide } from 'vue-carousel'
import imagesLoaded from 'vue-images-loaded'

export default {
  directives: {
    imagesLoaded
  },
  components: {
    Carousel,
    Slide
  },
  data: () => {
    return {
      portfolioScreenshots: []
    }
  },
  computed: {
    isMobDevice() {
      return isMobile || isTablet ? true : false
    },
    portfolioScreenshotsComputed() {
      return this.portfolioScreenshots
    }
  },
  methods: {
    imageLoaded() {
        console.log('force load');
        this.$refs.carousel.$forceUpdate()
    },
  },
  mounted() {
    setTimeout(() => {
      this.portfolioScreenshots = [
        require('@/assets/img/image-1.png'),
        require('@/assets/img/image-3.png')
      ]
    }, 300)
  }
}
</script>

<style lang="scss">
.s_second {
  padding-left: 25rem;
  padding-right: 25rem;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;

  .s_title {
    margin-top: 0;
    margin-bottom: 7rem;
  }
  p {
    font-weight: 200;
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
    position: relative;
    z-index: 10;
    padding-left: 2.6rem;
    padding-right: 3.6rem;
    margin-top: 11rem;
    // opacity: 0;
    transform: none !important;
    .icon {
      width: 22px;
      margin-right: 2rem;
    }
  }
  .bg_trgl {
    position: absolute;
    z-index: 10;
    left: 0;
    top: -19rem;
    width: 33rem;
    filter: blur(10px);
    transform: rotateZ(-205deg);
    img {
      width: 100%;
    }
  }

  .block {
    &--left {
      margin-right: 30px;
      align-self: center;
      max-width: 63rem;
      .bold  {
        margin-bottom: 30px;
      }
    }
    &--right {
      position: relative;
      align-self: center;
      display: flex;
      justify-content: flex-end;
      width: 38vw;
      background-size: contain;
    }
  }
  
}
.slider_portfolio {
  position: relative;
  width: 66rem;
  display: block;
  z-index: 20;
  img {
    display: block;
    width: 100%;
    height: auto;
  }
  .portfolio_item {
    border-radius: 1.1rem;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      width: 0;
    }

    /* Track */
    &::-webkit-scrollbar-track {
      background: #f1f1f1;
      border-radius: 10px;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
      background: #a1a1a1;
      border-radius: 10px;
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
      background: #999;
    }
  }
  .VueCarousel {
    height: 100%;
    .VueCarousel-wrapper {
      height: 100%;
      border-radius: 1.1rem;
    }
    .VueCarousel-inner {
      height: 100% !important;
    }
    .VueCarousel-slide {
      position: relative;
      height: 100%;
      width: 100%;
      flex-basis: unset;
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
      bottom: -3px;
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
  }
}
.slider_wrap {
  // padding: 8px 10px 11px;
  padding: 3px;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 10;
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
  .slider_portfolio {
    .VueCarousel {
      .VueCarousel-slide {
        opacity: 0;
        transition: opacity .5s;
      }
      .VueCarousel-slide:first-child {
        opacity: 1;
        transition: opacity .5s;
      }
      .VueCarousel-slide-active {
        opacity: 1;
        transition: opacity .5s;
      }
    }
  }
}

@media (max-width: 1199px) {
  .s_second .block--left {
    max-width: 80%;
  }
}
@media (min-width: 992px) and (max-width: 1366px) {
  .tablet {
    .s_second {
      padding-left: 40px;
      padding-right: 40px;
      min-height: 100vh;
      height: auto;
      padding-top: 100px!important;
      padding-bottom: 100px;
      text-align: center;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .s_title {
        margin-bottom: 45px;
        font-size: 45px;
        line-height: 45px;
      }
      p {
        font-size: 24px;
        line-height: 28px;
      }
      .text-1 {
        margin-bottom: 15px;
        font-size: 37px;
        line-height: 120%;
      }

      .btn_more {
        padding-left: 25px;
        padding-right: 30px;
        margin-top: 30px;
        width: 300px;
        .icon {
          margin-right: 45px;
          width: 35px;
          height: 23px;
          img {
            width: 100%;
          }
        }
      }

      .block {
        &--left {
          margin-right: 0;
          margin-bottom: 45px;
          .bold  {
            margin-bottom: 0;
          }
        }
        &--right {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          width: 450px;
          background-size: contain;
        }
      }
      
    }
    .slider_portfolio {
      padding: 5px;
      position: relative;
      width: 100%;
      padding-bottom: 66%;
      display: block;
      border: 5px solid #000;
      background: #000;
      border-radius: 20px;
      background: #000;
      .bg_img {
        display: none;
      }
      img {
        display: block;
        width: 100%;
        height: auto;
      }
      .portfolio_item {
        padding: 0;
        border-radius: 16px;
        // transform: scale(1.01);
        // overflow: hidden;
      }
      .VueCarousel {
        .VueCarousel-wrapper {
          overflow: hidden;
          border-radius: 20px;
        }
        .VueCarousel-navigation-button {
          bottom: -0px;
        }
        .VueCarousel-navigation-prev {
          left: -15px;
          background-size: auto 15px;
          z-index: 1000;
        }
        .VueCarousel-navigation-next {
          right: -15px;
          background-size: auto 15px;
        }
      }
    }
    .slider_wrap {
      padding: 0;
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      border-radius: 20px;
      // overflow: hidden;
    }
  }
}
@media (max-width: 991px) {
  .s_second {
    padding-left: 40px;
    padding-right: 40px;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .s_title {
      margin-bottom: 3rem;
      font-size: 3rem;
      line-height: 3rem;
    }
    p {
      font-size: 1.6rem;
      line-height: 1.9rem;
    }
    .text-1 {
      margin-bottom: 1rem;
      font-size: 2.5rem;
      line-height: 120%;
    }

    .btn_more {
      padding-left: 1.7rem;
      padding-right: 2rem;
      margin-top: 2.1rem;
      // width: 20rem;
      display: inline-flex;
      .icon {
        margin-right: 3rem;
        width: 2.2rem;
      }
    }

    .block {
      &--left {
        margin-right: 0;
        margin-bottom: 3rem;
        .bold  {
          margin-bottom: 0;
        }
      }
      &--right {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        width: 30rem;
        background-size: contain;
      }
    }
    
  }
  .slider_portfolio {
    padding: 4px;
    position: relative;
    width: 100%;
    padding-bottom: 66%;
    display: block;
    border: 4px solid #000;
    border-radius: 20px;
    background: #000;
    .bg_img {
      display: none;
    }
    img {
      display: block;
      width: 100%;
      height: auto;
    }
    .portfolio_item {
      border-radius: 18px;
      // overflow: hidden;
    }
    .VueCarousel {
      .VueCarousel-wrapper {
        overflow: hidden;
        border-radius: 18px;
      }
      .VueCarousel-navigation-button {
        bottom: -17px;
      }
      .VueCarousel-navigation-prev {
        left: -5px;
        background-size: auto 10px;
        z-index: 1000;
      }
      .VueCarousel-navigation-next {
        right: -5px;
        background-size: auto 10px;
      }
    }
  }
  .slider_wrap {
    padding: 0;
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    border-radius: 20px;
    // overflow: hidden;
  }
  .s_second .btn_more .icon {
    margin-right: 1.5rem;
  }
}

@media (max-width: 767px) {
  .s_second {
      padding-left: 30px;
      padding-right: 30px;
  }
  .slider_portfolio .portfolio_item {
    border-radius: 16px;
  }
  .slider_portfolio .VueCarousel {
    .VueCarousel-wrapper {
      border-radius: 16px;
    }
  }
}
</style>