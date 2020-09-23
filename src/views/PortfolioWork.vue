<template>
  <!-- <div v-if="!isMobDevice" class="page page_portfolio">
    <div class="page_header">
      <div class="left">
        <h1 class="page_title">{{portfolio_work.title}}</h1>
        <p class="page_title_caption">{{portfolio_work.caption}}</p>
      </div>
      <div class="right">
        <router-link to="/portfolio"><img src="@/assets/img/close.svg" alt=" "></router-link>
      </div>
    </div>
    <div class="page_content">
      <div class="navigation">
        <router-link to="/portfolio" class="nav-prev"><img src="@/assets/img/arrow-3-left.svg" alt=" "></router-link>
        <router-link to="/portfolio" class="nav-next"><img src="@/assets/img/arrow-3-right.svg" alt=" "></router-link>
      </div>
      <div class="portfolio_screenshot" :class="{'zoomed' : isZoomImage}" @click="imageZoom">
        <img :src="portfolio_work.img" alt=" ">
      </div>
    </div>
    <div class="text_bottom">
      <p class="text-1">Web agency "Papaya" is a professional team of programmers, designers, advertisers and consultants, who has come a long way from a digital market beginner with never fading enthusiasm, to an experienced professional who can perform any task assigned to him.</p>
      <p>We specialize in creating unique Internet projects with their subsequent promotion, as well as developing mobile applications of any complexity.
      </p>
      <br>
      <p>This was made possible through the harmonious introduction of innovative digital thinking into the rather ordinary digital mastery.
      </p>
    </div>
  </div> -->

  <div class="page page_portfolio">
    <div class="image_zoom"><img :src="zoomedImage" alt=" " @click="closeZoom"></div>
    <agile v-if="renderSlider" ref="carousel" :options="carouselOptions" @before-change="showCurrentSlide($event)">
      <div v-for="(item, index) in portfolio_list" :key="index" class="slide">
          <div class="portfolio_slide">
            <div class="page_header">
              <div class="left">
                <h1 class="page_title">{{item.title}}</h1>
                <p class="page_title_caption">{{item.caption}}</p>
              </div>
              <div class="right">
                <router-link to="/portfolio"><img src="@/assets/img/close.svg" alt=" "></router-link>
              </div>
            </div>
            <div class="page_content">
              <div class="portfolio_screenshot" @click="imageZoom(index)">
                <img :src="item.img" alt=" ">
              </div>
              <!-- <div class="portfolio_screenshot_full" :class="{'zoomed' : isZoomImage}">
                <img :src="item.img" alt=" ">
              </div> -->
              <div class="text_bottom">
                <p class="text-1">{{ $t('portfolio.t7') }}</p>
                <p>{{ $t('portfolio.t8') }}</p>
                <br>
                <p>{{ $t('portfolio.t9') }}</p>
              </div>
            </div>
          </div>
      </div>
    </agile>

    
    

    <!-- <div class="page_header">
      <div class="left">
        <h1 class="page_title">{{portfolio_work.title}}</h1>
        <p class="page_title_caption">{{portfolio_work.caption}}</p>
      </div>
      <div class="right">
        <router-link to="/portfolio"><img src="@/assets/img/close.svg" alt=" "></router-link>
      </div>
    </div>
    <div class="page_content">
      <div class="navigation">
        <router-link to="/portfolio" class="nav-prev"><img src="@/assets/img/arrow-3-left.svg" alt=" "></router-link>
        <router-link to="/portfolio" class="nav-next"><img src="@/assets/img/arrow-3-right.svg" alt=" "></router-link>
      </div>
      <div class="portfolio_screenshot" :class="{'zoomed' : isZoomImage}" @click="imageZoom">
        <img :src="portfolio_work.img" alt=" ">
      </div>
    </div>
    <div class="text_bottom">
      <p class="text-1">Web agency "Papaya" is a professional team of programmers, designers, advertisers and consultants, who has come a long way from a digital market beginner with never fading enthusiasm, to an experienced professional who can perform any task assigned to him.</p>
      <p>We specialize in creating unique Internet projects with their subsequent promotion, as well as developing mobile applications of any complexity.</p>
      <br>
      <p>This was made possible through the harmonious introduction of innovative digital thinking into the rather ordinary digital mastery.</p>
    </div> -->
  </div>
</template>

<script>
import { isMobile, isTablet } from "mobile-device-detect"
import anime from 'animejs/lib/anime.es.js'
import { VueAgile } from 'vue-agile'

export default {
  components: {
    agile: VueAgile,
  },
  data: () => {
    return {
      renderSlider: false,
      zoomImgUrl: '',
      carouselOptions: {
        dots: false,
        slidesToShow: 1,
        responsive: [
          {
            breakpoint: 320,
            settings: {
                centerMode: true
            }
          },
          {
            breakpoint: 992,
            settings: {
                navButtons: true,
                centerMode: false,
                fade: true,
                speed: 1000
            }
          },
        ]
      },
      portfolio_works: [
        // {
        //   id: 'star-fish',
        //   img: require('@/assets/img/reqves.jpg'),
        //   title: 'Star Fish',
        //   caption: 'Professional boosting services'
        // },
        // {
        //   id: 'reqves',
        //   img: require('@/assets/img/reqves.jpg'),
        //   title: 'Reqves',
        //   caption: 'Professional boosting services'
        // },
        // {
        //   id: 'radiologia',
        //   img: require('@/assets/img/reqves.jpg'),
        //   title: 'Radiologia',
        //   caption: 'Professional boosting services'
        // },
        // {
        //   id: 'star-fish',
        //   img: require('@/assets/img/reqves.jpg'),
        //   title: 'Star Fish',
        //   caption: 'Professional boosting services'
        // },
        // {
        //   id: 'reqves',
        //   img: require('@/assets/img/reqves.jpg'),
        //   title: 'Reqves',
        //   caption: 'Professional boosting services'
        // },
        // {
        //   id: 'radiologia',
        //   img: require('@/assets/img/reqves.jpg'),
        //   title: 'Radiologia',
        //   caption: 'Professional boosting services'
        // },
      ]
    }
  },
  computed: {
    lang() {
      return this.$i18n.locale
    },
    isMobDevice() {
      return isMobile || isTablet ? true : false
    },
    zoomedImage() {
      return this.zoomImgUrl
    },
    portfolio_list() {
      return this.portfolio_works
    }
  },
  methods: {
    imageZoom(index) {
      if (this.isMobDevice) {
        // this.isZoomImage = !this.isZoomImage
        this.zoomImgUrl = this.portfolio_list[index].img
        document.querySelector('.image_zoom').classList.add('active')
      }
    },
    closeZoom() {
      if (this.isMobDevice) {
        // this.isZoomImage = !this.isZoomImage
        // this.zoomImgUrl = ''
        document.querySelector('.image_zoom').classList.remove('active')
      }
    },
    showCurrentSlide(e) {
      let current = document.querySelector('.agile .agile__slide--active')

      anime({
        targets: current,
        scrollTop: 0,
        easing: 'linear',
        duration: 1000
      })
    },
    forceRerender() {
      this.renderSlider = false;

      this.$nextTick(() => {
        this.renderSlider = true;
      });
    }
  },
  watch: {
    portfolio_works: function() {
      this.renderSlider = true
    },
    lang() {
      const portfolioWorksEN = [
        {
          id: 'star-fish',
          img: require('@/assets/img/reqves.jpg'),
          title: 'Star Fish',
          caption: 'Professional boosting services'
        },
        {
          id: 'reqves',
          img: require('@/assets/img/reqves.jpg'),
          title: 'Reqves',
          caption: 'Professional boosting services'
        },
        {
          id: 'bafa',
          img: require('@/assets/img/bafa_screen.jpg'),
          title: 'Bafa Doors',
          caption: 'Stylish interior doors'
        },
        {
          id: 'radiologia',
          img: require('@/assets/img/reqves.jpg'),
          title: 'Radiologia',
          caption: 'Professional boosting services'
        },
        {
          id: 'bafa',
          img: require('@/assets/img/bafa_screen.jpg'),
          title: 'Bafa Doors',
          caption: 'Stylish interior doors'
        },
      ]
      const portfolioWorksRU = [
        {
          id: 'star-fish',
          img: require('@/assets/img/reqves.jpg'),
          title: 'Star Fish',
          caption: 'Услуги профессионального бустинга'
        },
        {
          id: 'reqves',
          img: require('@/assets/img/reqves.jpg'),
          title: 'Reqves',
          caption: 'Услуги профессионального бустинга'
        },
        {
          id: 'bafa',
          img: require('@/assets/img/bafa_screen.jpg'),
          title: 'Bafa Doors',
          caption: 'Стильные межкомнатные двери'
        },
        {
          id: 'radiologia',
          img: require('@/assets/img/reqves.jpg'),
          title: 'Radiologia',
          caption: 'Услуги профессионального бустинга'
        },
        {
          id: 'bafa',
          img: require('@/assets/img/bafa_screen.jpg'),
          title: 'Bafa Doors',
          caption: 'Stylish interior doors'
        },
      ]

      switch (this.lang) {
        case 'en':
          this.portfolio_works = portfolioWorksEN
        break

        case 'ru':
          this.portfolio_works = portfolioWorksRU
        break
      }
    },
  },
  mounted() {

    setTimeout(() => {
      this.carouselOptions.initialSlide = this.$route.params.slideIndex || 0

      const portfolioWorksEN = [
        {
          id: 'star-fish',
          img: require('@/assets/img/reqves.jpg'),
          title: 'Star Fish',
          caption: 'Professional boosting services'
        },
        {
          id: 'reqves',
          img: require('@/assets/img/reqves.jpg'),
          title: 'Reqves',
          caption: 'Professional boosting services'
        },
        {
          id: 'bafa',
          img: require('@/assets/img/bafa_screen.jpg'),
          title: 'Bafa Doors',
          caption: 'Stylish interior doors'
        },
        {
          id: 'radiologia',
          img: require('@/assets/img/reqves.jpg'),
          title: 'Radiologia',
          caption: 'Professional boosting services'
        },
        {
          id: 'bafa',
          img: require('@/assets/img/bafa_screen.jpg'),
          title: 'Bafa Doors',
          caption: 'Stylish interior doors'
        },
      ]
      const portfolioWorksRU = [
        {
          id: 'star-fish',
          img: require('@/assets/img/reqves.jpg'),
          title: 'Star Fish',
          caption: 'Услуги профессионального бустинга'
        },
        {
          id: 'reqves',
          img: require('@/assets/img/reqves.jpg'),
          title: 'Reqves',
          caption: 'Услуги профессионального бустинга'
        },
        {
          id: 'bafa',
          img: require('@/assets/img/bafa_screen.jpg'),
          title: 'Bafa Doors',
          caption: 'Стильные межкомнатные двери'
        },
        {
          id: 'radiologia',
          img: require('@/assets/img/reqves.jpg'),
          title: 'Radiologia',
          caption: 'Услуги профессионального бустинга'
        },
        {
          id: 'bafa',
          img: require('@/assets/img/bafa_screen.jpg'),
          title: 'Bafa Doors',
          caption: 'Stylish interior doors'
        },
      ]

      switch (this.lang) {
        case 'en':
          this.portfolio_works = portfolioWorksEN
        break

        case 'ru':
          this.portfolio_works = portfolioWorksRU
        break
      }

    }, 300)

    // if (this.$route.params.slideIndex) {
    //   this.$refs.carousel.goTo(this.$route.params.slideIndex)
    // }
    
    // anime({
    //   targets: '.preload_bg_green',
    //   points: [
    //     { value: '1920,1080 0,1080 0,0 432.1,0 1920,0' },
    //     { value: '1920,1080 0,1080 0,0 0,0 0,1080' },
    //   ],
    //   easing: 'easeOutQuad',
    //   duration: 1000,
    // });
    anime({
      targets: '.page_portfolio',
      opacity: [0, 1],
      easing: 'linear',
      duration: 1000,
      delay: 1000
    })
    // anime({
    //   targets: document.querySelector('.page_header'),
    //   opacity: [0, 1],
    //   easing: 'linear',
    //   duration: 700,
    // })
    // anime({
    //   targets: document.querySelector('.page_content'),
    //   opacity: [0, 1],
    //   easing: 'linear',
    //   duration: 700,
    //   delay: 200,
    // });
    // anime({
    //   targets: document.querySelector('.text_bottom'),
    //   opacity: [0, 1],
    //   easing: 'linear',
    //   duration: 700,
    //   delay: 500
    // })
  },
  beforeMount() {

  },
  beforeRouteLeave (to, from, next) {
    anime({
      targets: '.page_portfolio',
      opacity: [1, 0],
      easing: 'linear',
      duration: 1000,
      complete: function() { 
        next();
      }
    })
    // anime({
    //   targets: '.preload_bg_green',
    //   points: [
    //     { value: '1920,1080 0,1080 0,0 0,0 0,1080' },
    //     { value: '1920,1080 0,1080 0,0 0,0 677,710' },
    //     { value: '1920,1080 0,1080 0,0 432.1,0 677,710' },
    //     { value: '1920,1080 0,1080 0,0 432.1,0 1920,0' },
    //   ],
    //   easing: 'easeOutQuad',
    //   duration: 2000,
    //   complete: function() {
    //     next();
    //   }
    // });
  },
}
</script>

<style lang="scss" scoped>
.page_portfolio {
  padding-top: 9.5rem;
  padding-bottom: 0;
  height: 100vh;
  .image_zoom {
    position: absolute;
    z-index: 1000;
    top: 0;
    left: 0;
    width: 100vw;
    pointer-events: none;
    opacity: 0;
    transition: opacity 1s;
    &.active {
      pointer-events: unset;
      opacity: 1;
      transition: opacity 1s;
    }
    img {
      display: block;
      width: 100%;
    }
  }
  /deep/.agile {
    // margin-bottom: 12rem;
    height: 100%;
    .agile__list {
      height: 100%;
    }
    .agile__slide {
      height: calc(100vh - 9.5rem);
      overflow-x: hidden;
      overflow-y: auto;
      scrollbar-width: none;
      &::-webkit-scrollbar {
        width: 0;
      }
    }
    .agile__actions {
      position: fixed;
      width: 100vw;
      left: 0;
      top: 50vh;
      margin-top: -15px;
    }
    .agile__nav-button {
      outline: none !important;
      width: 5.7rem;
      height: 30px;
      font-size: 0;
      cursor: pointer;
    }
    .agile__nav-button--prev {
      position: absolute;
      top: 0;
      left: 4rem;
      background: url(../assets/img/arrow-3-left.svg) no-repeat center;
      transform: none;
      background-size: contain;
    }
    .agile__nav-button--next {
      position: absolute;
      top: 0;
      right: 4rem;
      background: url(../assets/img/arrow-3-right.svg) no-repeat center;
      transform: none;
      background-size: contain;
    }
  }
  .navigation {
    position: fixed;
    top: 50%;
    margin-top: -15px;
    left: 0;
    height: 1px;
    width: 100vw;
    a {
      width: 5.7rem;
      height: 30px;
      display: flex;
      align-items: center;
    }
    .nav-prev {
      position: absolute;
      top: 0;
      left: 4rem;
    }
    .nav-next {
      position: absolute;
      top: 0;
      right: 4rem;
    }
  }
  .page_header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    .right {
      font-weight: 200;
      font-size: 2rem;
      line-height: 2.5rem;
      text-align: right;
      white-space: nowrap;
    }
  }
  .page_content {
    position: relative;
  }
  .portfolio_screenshot {
    position: relative;
    z-index: 10;
    img {
      width: 100%;
      display: block;
    }
  }
  .portfolio_screenshot_full {
    position: absolute;
    top: 0;
    left: 0;
    img {
      width: 100%;
      display: block;
    }
  }
  .text_bottom {
    padding-top: 7rem;
    margin-bottom: 12rem;
    font-weight: 200;
    font-size: 2rem;
    line-height: 2.4rem;
    .text-1 {
      margin-bottom: 5rem;
      font-weight: 400;
      font-size: 2.5rem;
      line-height: 3.6rem;
    }
  }
}
@media (max-width: 1366px) {
  .page_portfolio {
    padding-top: 70px;
    .portfolio_slide {
      padding-top: 30px;
    }
  }
}
@media (max-width: 991px) {
  .page_portfolio {
    padding-bottom: 4rem;
    padding-left: 40px;
    padding-right: 40px;
    .navigation {
      display: none;
    }
    .page_title {
      margin-bottom: 1rem;
    }
    .page_header {
      margin-bottom: 3rem;
      .right {
        img {
          display: block;
        }
      }
    }
    .page_content {
      // margin-bottom: 3rem;
    }
    .agile {
      /deep/.agile__list {
        overflow: visible;
      }
      .agile__slide {
        height: calc(100vh - 120px);
        overflow-x: hidden;
        overflow-y: auto;
        transform: scale(0.95)!important;
        transition: all .6s !important;
        pointer-events: none;
        .page_header {
          opacity: 0;
          transition: all .3s;
        }
      }
      .agile__slide--active {
        transform: scale(1)!important;
        transition: all .6s !important;
        pointer-events: unset;
        .page_header {
          opacity: 1;
          transition: all 1s .3s;
        }
      }
    }
    .portfolio_screenshot_full {
      &.zoomed {
        position: fixed;
        z-index: 100;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #000;
        padding-top: 10px;
        padding-bottom: 5px;
        overflow-x: hidden;
        overflow-y: auto;
      }
    }
    .text_bottom {
      padding-top: 3rem;
      margin-bottom: 0;
      font-size: 1.6rem;
      line-height: 2.3rem;
      .text-1 {
        margin-bottom: 2rem;
        font-size: 1.8rem;
        line-height: 2.3rem;
      }
    }
  }
}

@media (max-width: 991px) {
  .page_portfolio {
    padding-top: 70px;
    .portfolio_slide {
      padding-top: 30px;
    }
  }
  .page_portfolio .agile .agile__slide {
    height: calc(100vh - 140px);
    padding-left: 5px;
    padding-right: 5px;
  }
  .page_portfolio /deep/.agile .agile__actions {
    display: none;
  }
}
@media (max-width: 767px) {
  .page_portfolio {
    padding-top: 56px;
    padding-left: 30px;
    padding-right: 30px;
    
    .portfolio_slide {
      padding-top: 15px;
    }
  }
  .page_portfolio .agile .agile__slide {
    height: calc(100vh - 100px);
  }
}
</style>