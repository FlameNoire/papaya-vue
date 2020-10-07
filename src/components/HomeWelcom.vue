<template>
  <section id="screen_1" class="section s_first">

    <div class="content">
      <a href="#" class="logo">
        <span class="logo_img">
          <img src="@/assets/img/logo_papaya.svg" alt=" ">
        </span>
        <span class="logo_text"><img src="@/assets/img/logo_papaya_text.svg" alt=" "></span>
      </a>
      <div class="main_title_wrap">
        <transition @after-enter="setSliderHeight">
          <agile v-if="renderSlider" ref="carousel" :options="carouselOptions" @before-change="beforeChangeSlide($event)" @after-change="slideAnimation($event)">

            <div v-for="(item, index) in slidesArr" :key="index" class="slide">
              <h2 class="main_title" :class="{'ru' : $i18n.locale == 'ru'}">
                <p>{{item.title}}</p>
                <span class="sm">{{item.text}}</span>
              </h2>
            </div>

          </agile>
        </transition>
        <!-- <h2 class="main_title">Development of unique sites
        <span class="sm">And other web solutions for your business</span></h2> -->
      </div>
      <div class="buttons_wrap">
        <a href="#" class="buttons btn_ask" @click="openRequestForm">
          <i class="icon">
            <img src="@/assets/img/chat-white.svg" alt=" ">
            <img src="@/assets/img/chat.svg" alt=" ">
          </i>
          <span>{{ $t('buttons.btn1') }}</span>
        </a>
        <a href="#" class="buttons btn_brief">
          <i class="icon">
            <img src="@/assets/img/brief-white.svg" alt=" ">
            <img src="@/assets/img/brief.svg" alt=" ">
          </i>
          <span>{{ $t('buttons.btn2') }}</span>
        </a>
      </div>
    </div>
    <a v-if="isMobDevice" @click.prevent href="#" class="btn_down"><img src="@/assets/img/arrow_down.svg" alt=" "></a>

  </section>
</template>

<script>
import { isMobile, isTablet } from "mobile-device-detect"
import { VueAgile } from 'vue-agile'
import anime from 'animejs/lib/anime.es.js'

export default {
  components: {
    agile: VueAgile,
  },
  data: () => {
    return {
      slideHeight: '',
      carouselOptions: {
        dots: true,
        navButtons: false,
        slidesToShow: 1,
        speed: 300,
        fade: true,
        autoplay: true,
        autoplaySpeed: 8000
      },
      renderSlider: false,
      slidesArr: [
        // {
        //   title: 'Development of unique sites',
        //   text: 'And other web solutions for your business'
        // },
        // {
        //   title: 'Best solutions fo your buisness',
        //   text: 'Lorem ipsum dolor sit amet.'
        // },
        // {
        //   title: 'Special approach to every client',
        //   text: 'Lorem ipsum, dolor sit amet consectetur adipisicing.'
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
  },
  methods: {
    textTyping(item, text, speed, delay) {
      let words = text.split(' ');
      let wordsNew = words.map(word => {
        return '<span class="word"><span>' + word.split('').join('</span><span>') + '</span></span>&nbsp;';
      });
      let textNew = wordsNew.join('');

      item.innerHTML = textNew;

      const letters = item.getElementsByTagName('span')

      item.style.opacity = 1

      anime({
        targets: letters,
        // translateX: ['-40px', 0],
        // translateY: ['-40px', 0],
        opacity: [0, 1],
        easing: 'linear',
        // duration: 100,
        delay: anime.stagger(speed, {start: delay})
      })
    },
    beforeChangeSlide(event) {
      const slide = document.querySelectorAll('.agile__slides--regular .main_title')[event.currentSlide]
      this.slideHeight = slide.offsetHeight + 'px'
      // console.log(this.slideHeight)
    },
    slideAnimation(event) {
      if ( !this.isMobDevice ) {
        const ctn = document.querySelector('.main_title_wrap .agile')
        const slide = document.querySelectorAll('.agile__slides--regular .main_title')[event.currentSlide]
        const slideHeight = this.slideHeight
        const titleItems = document.querySelectorAll('.agile__slides--regular .main_title p')
        const textItem = document.querySelectorAll('.agile__slides--regular .main_title .sm')
        const currentTitleCtn = titleItems[event.currentSlide]
        // currentTitleCtn.style.opacity = 0
        const currentTextCtn = textItem[event.currentSlide]
        // currentTextCtn.style.opacity = 0
        const text1 = this.slidesArr[event.currentSlide].title
        const text2 = this.slidesArr[event.currentSlide].text

        if (this.slideHeight) {
          anime({
            targets: ctn,
            height: [slideHeight + 'px', slide.offsetHeight + 'px'],
            easing: 'linear',
            duration: 500
          })

          this.slideHeight = slide.offsetHeight + 'px'
          // console.log(this.slideHeight)
        }

        this.textTyping(currentTitleCtn, text1, 10, 100)
        this.textTyping(currentTextCtn, text2, 10, 200)
      } else {
        const slide = document.querySelectorAll('.agile__slides--regular .main_title')[event.currentSlide]
        // console.log(slide)
        anime({
          targets: slide,
          opacity: [0, 1],
          easing: 'linear',
          duration: 1000
        })
      }
    },
    setSliderHeight() {
      if ( !this.isMobDevice ) {
        const ctn = document.querySelector('.agile')
        const slide = document.querySelector('.agile__slides--regular .agile__slide--current .main_title')
        // anime({
        //   targets: '.s_first',
        //   opacity: [0, 1],
        //   easing: 'linear',
        //   duration: 500,
        //   delay: 500
        // })
        ctn.style.height = slide.offsetHeight + 'px'
      }
    },
    openRequestForm() {
      this.$store.commit('activeScreenSetter', 5)
      this.$store.commit('showRequestFormToggler')
    }
  },
  watch: {
    lang() {
      const textEN = [
        {
          title: 'DEVELOPMENT OF UNIQUE WEBSITES',
          text: 'Full assistance from conceptualization to product launch'
        },
        {
          title: 'INNOVATIVE SOLUTIONS FOR YOUR BUSINESS',
          text: 'Fresh ideas and recent tech trends with a focus on quality and uniqueness'
        },
        {
          title: 'INDIVIDUAL APPROACH TO EVERY CLIENT',
          text: 'In-depth look to ensure result-oriented product development service'
        },
      ]
      const textRU = [
        {
          title: 'СОЗДАНИЕ УНИКАЛЬНЫХ ВЕБ САЙТОВ',
          text: 'Полное сопровождение от разработки концепции до запуска продукта'
        },
        {
          title: 'ИННОВАЦИОННЫЕ РЕШЕНИЯ ДЛЯ ВАШЕГО БИЗНЕСА',
          text: 'Свежие идеи и последние технологические тренды с фокусом на качество и уникальность'
        },
        {
          title: 'ИНДИВИДУАЛЬНЫЙ ПОДХОД К КАЖДОМУ КЛИЕНТУ',
          text: 'Детальный взгляд для обеспечения услуг по разработке продуктов, ориентированных на результат'
        },
      ]

      switch (this.lang) {
        case 'en':
          this.slidesArr = textEN
        break

        case 'ru':
          this.slidesArr = textRU
        break
      }

      this.$refs.carousel.goToNext()
    },

    slidesArr: function () {
      this.renderSlider = true

      // setTimeout(() => {
      //   this.setSliderHeight()
      // }, 200)
    }
  },
  mounted() {
    const textEN = [
      {
        title: 'DEVELOPMENT OF UNIQUE WEBSITES',
        text: 'Full assistance from conceptualization to product launch'
      },
      {
        title: 'INNOVATIVE SOLUTIONS FOR YOUR BUSINESS',
        text: 'Fresh ideas and recent tech trends with a focus on quality and uniqueness'
      },
      {
        title: 'INDIVIDUAL APPROACH TO EVERY CLIENT',
        text: 'In-depth look to ensure result-oriented product development service'
      },
    ]
    const textRU = [
      {
        title: 'СОЗДАНИЕ УНИКАЛЬНЫХ ВЕБ САЙТОВ',
        text: 'Полное сопровождение от разработки концепции до запуска продукта'
      },
      {
        title: 'ИННОВАЦИОННЫЕ РЕШЕНИЯ ДЛЯ ВАШЕГО БИЗНЕСА',
        text: 'Свежие идеи и последние технологические тренды с фокусом на качество и уникальность'
      },
      {
        title: 'ИНДИВИДУАЛЬНЫЙ ПОДХОД К КАЖДОМУ КЛИЕНТУ',
        text: 'Детальный взгляд для обеспечения услуг по разработке продуктов, ориентированных на результат'
      },
    ]

    setTimeout(() => {
      switch (this.lang) {
        case 'en':
          this.slidesArr = textEN
        break

        case 'ru':
          this.slidesArr = textRU
        break
      }
    }, 300)
  },
  // beforeUpdate() {
  //   this.$forceUpdate()
  // }
}
</script>

<style lang="scss">
.s_first {
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  transform: translateY(0) !important;
  .agile__list, .agile__track {
    height: 100%;
    overflow: visible;
  }
  .agile__actions {
    position: absolute;
    width: 100%;
    left: 0;
    bottom: -4.6rem;
  }
  .agile__dot {
    margin-left: 1rem;
    margin-right: 1rem;
    display: flex;
    align-items: center;
    button {
      padding: 0;
      display: block;
      width: 3.7rem;
      height: 3.2rem;
      cursor: pointer;
      background: transparent;
      &::after {
        display: flex;
        content: '';
        height: 2px;
        width: 100%;
        background: #C4C4C4;
      }
    }
  }
  .agile__dot--current button {
    &::after {
      background: #000;
    }
  }
  .content {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 7.8rem;
    opacity: 0;
    .logo_img {
      margin-right: 0.4rem;
      margin-bottom: 3.2rem;
      width: 6.1rem;
      img {
        display: block;
      }
    }
    .logo_text {
      margin-right: 0;
      margin-bottom: 0;
      width: 23.1rem;
    }
  }
  .main_title_wrap {
    position: relative;
    width: 170rem;
    max-width: 100%;
    margin-bottom: 12.5rem;
  }
  .main_title {
    margin-top: 0;
    // height: 11.5rem;
    color: #000;
    // font-size: 7rem;
    // line-height: 8.4rem;
    // font-size: 6rem;
    // line-height: 7.2rem;
    font-size: 5.5rem;
    line-height: 6.6rem;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    user-select: none;
    // &.ru {
    //   font-size: 5rem;
    //   line-height: 6rem;
    //   .sm {
    //     font-size: 3rem;
    //     line-height: 3.5rem;
    //   }
    // }
    span {
      display: inline-block;
    }
    .sm {
      display: block;
      font-weight: 100;
      // font-size: 3.6rem;
      // line-height: 4.3rem;
      font-size: 3.2rem;
      line-height: 4.8rem;
      text-align: center;
      text-transform: none;
    }
  }
  .buttons_wrap {
    //margin-bottom: 100px;
  }
  .btn_ask {
    margin-right: 32px;
    padding-left: 2.8rem;
    padding-right: 3.3rem;
    // width: 13rem;
    .icon {
      margin-right: 2rem;
    }
  }
  .btn_brief {
    padding-left: 2.8rem;
    padding-right: 4.1rem;
    .icon {
      margin-right: 2.6rem;
    }
  }
}
@media (max-width: 1199px) {

}
@media (min-width: 992px) and (max-width: 1366px) {
  .tablet {
    .s_first {
      padding-left: 40px;
      padding-right: 40px;
      .logo {
        margin-bottom: 45px;
        .logo_img {
          margin-right: 0;
          margin-bottom: 31px;
          width: 57px;
        }
        .logo_text {
          width: 216px;
          img {
            width: 100%;
          }
        }
      }
      .main_title_wrap {
        margin-bottom: 90px;
      }
      .main_title {
        // height: auto;
        font-size: 45px;
        line-height: 45px;
        // &.ru {
        //   font-size: 45px;
        //   line-height: 45px;
        //   .sm {
        //     font-size: 30px;
        //     line-height: 35px;
        //   }
        // }
        .sm {
          margin-top: 5px;
          font-size: 30px;
          line-height: 35px;
        }
      }
      .buttons_wrap {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .btn_brief {
        margin-bottom: 30px;
        width: auto;
        padding-left: 30px;
        padding-right: 45px;
        .icon {
          margin-right: 27px;
        }
      }
      .btn_ask {
        margin-right: 0;
        padding-left: 30px;
        padding-right: 30px;
        order: 3;
        width: auto;
        display: inline-flex;
        .icon {
          margin-right: 27px;
        }
      }
      .btn_down {
        position: absolute;
        bottom: 15px;
        left: 50%;
        margin-left: -15px;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          width: 25px;
        }
      }
    }
  }
}
@media (max-width: 991px) {
  .s_first {
    padding-left: 40px;
    padding-right: 40px;
    .logo {
      margin-bottom: 3rem;
      .logo_img {
        margin-right: 0;
        margin-bottom: 2.1rem;
        width: 3.8rem;
      }
      .logo_text {
        width: 14.4rem;
        img {
          width: 100%;
        }
      }
    }
    .agile__actions {
      bottom: -45px;
    }
    .agile__dot button {
      width: 30px;
      height: 32px;
    }
    .main_title_wrap {
      margin-bottom: 6rem;
      padding-left: 3rem;
      padding-right: 3rem;
    }
    .main_title {
      // height: auto;
      font-size: 2.5rem;
      line-height: 2.5rem;
      font-weight: 700;
      // &.ru {
      //   font-size: 2.2rem;
      //   line-height: 2.5rem;
      //   .sm {
      //     margin-top: 0.8rem;
      //     font-size: 1.8rem;
      //     line-height: 2rem;
      //   }
      // }
      .sm {
        margin-top: 1rem;
        font-size: 2rem;
        line-height: 2rem;
      }
    }
    .buttons_wrap {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .btn_brief {
      margin-bottom: 2rem;
      width: auto;
      padding-left: 2rem;
      padding-right: 3rem;
      .icon {
        margin-right: 1.5rem;
      }
    }
    .btn_ask {
      margin-right: 0;
      padding-left: 2rem;
      padding-right: 2rem;
      order: 3;
      // width: 10.7rem;
      .icon {
        margin-right: 1.5rem;
      }
    }
    .btn_down {
      position: absolute;
      bottom: 2rem;
      left: 50%;
      margin-left: -1.5rem;
      width: 3rem;
      height: 3rem;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 1.7rem;
      }
    }
  }
}

@media (max-width: 767px) {
  .s_first {
    padding-left: 30px;
    padding-right: 30px;
  }
}
@media (max-width: 575px) {
  .s_first .main_title_wrap {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>