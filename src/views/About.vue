<template>
  <div class="page page_about">
    <div class="s_top">
      <div class="banner">
        <div class="bg_trgl">
          <img v-if="isMobDevice" src="@/assets/img/about_trgls-2.svg" alt=" ">
          <img v-else src="@/assets/img/about_trgls.svg" alt=" ">
        </div>
        <div class="page_header">
          <h1 class="page_title">{{ $t('about.t1') }}</h1>
          <p class="page_title_caption">Papaya web agency</p>
        </div>
        <div class="papaya_img">
          <img v-if="isMobDevice"  src="@/assets/img/papaya-real-2.png" alt="papaya">
          <img v-else src="@/assets/img/papaya-real.png" alt="papaya">
        </div>
      </div>
      <!-- <p class="text-1">
        DIGITAL-AGENCY "PAPAYA" IS A PROFESSIONAL TEAM OF PROGRAMMERS, DESIGNERS, ADVERTISERS AND CONSULTANTS, WHO HAS COME A LONG WAY FROM A DIGITAL
MARKET BEGINNER WITH NEVER FADING ENTHUSIASM,  TO AN EXPERIENCED PROFESSIONAL WHO CAN PERFORM ANY TASK ASSIGNED TO HIM.</p> -->
      <!-- <p>We specialize in creating unique Internet projects with their subsequent promotion, as well as developing mobile applications of any complexity. <br>
This was made possible through the harmonious introduction of innovative digital thinking into the rather ordinary digital mastery.</p> -->
      <p class="text-1">
        {{ $t('about.t2') }}
        <br>
        {{ $t('about.t3') }}
      </p>
      <p>{{ $t('about.t4') }}</p>
      <br>
      <p>{{ $t('about.t5') }}</p>
      <br>
      <p>{{ $t('about.t6') }}</p>

    </div>

    <section class="screen clients">
      <h2 class="s_title">{{ $t('about.t7') }}</h2>
      <div class="clients_wrap">
        <a :href="item.url" class="clients_item" v-for="item in clientsList" :key="item.img"><img :src="item.img" alt=" "></a>
      </div>
    </section>

    <section class="screen office">
      <h2 class="s_title">{{ $t('about.t8') }}</h2>
      <div v-dragscroll @dragscrollmove="dragscrollMoveHandler($event)" @dragscrollend="dragscrollEndHandler($event)" class="office_gallery">
        
          <img v-for="item in officeImagesList" :key="item" :src="item" alt=" ">
          <!-- <img src="@/assets/img/office-2.png" alt=" ">
          <img src="@/assets/img/office-3.png" alt=" ">
          <img src="@/assets/img/office-4.png" alt=" ">
          <img src="@/assets/img/office-1.png" alt=" ">
          <img src="@/assets/img/office-2.png" alt=" "> -->
      </div>
      <div class="caption"><img src="@/assets/img/UkraineKyiv.svg" alt=" "></div>
    </section>

    <section class="screen team">
      <h2 class="s_title">{{ $t('about.t9') }}</h2>
      <div class="team_gallery">

        <agile v-if="renderTeam" ref="carousel" :options="carouselOptions">
          <div class="slide" v-for="(item, index) in teamList" :key="index">
            <div class="team_item">
              <div class="image">
                <img :src="item.img" alt=" ">
                </div>
              <div class="info">
                <p class="name">{{item.name}}</p>
                <p class="position">{{item.position}}</p>
              </div>
            </div>
          </div>
        </agile>

        <!-- <carousel :per-pagecustom="[[320, 1], [768, 2], [992, 3], [1366, 4]]" :navigation-enabled="true" :pagination-enabled="false">
          <slide>
            <div class="team_item">
              <div class="image">
                <img src="@/assets/img/team-1.png" alt=" ">
                </div>
              <div class="info">
                <p class="name">Sergey</p>
                <p class="position">CEO,  senior UX/UI Designer</p>
              </div>
            </div>
          </slide>
          <slide>
            <div class="team_item">
              <div class="image">
                <img src="@/assets/img/team-2.png" alt=" ">
                </div>
              <div class="info">
                <p class="name">Tania</p>
                <p class="position">EXPERIENCES MANAGER</p>
              </div>
            </div>
          </slide>
          <slide>
            <div class="team_item">
              <div class="image">
                <img src="@/assets/img/team-3.png" alt=" ">
                </div>
              <div class="info">
                <p class="name">Eugene</p>
                <p class="position">Senior Full Stack Developer</p>
              </div>
            </div>
          </slide>
          <slide>
            <div class="team_item">
              <div class="image">
                <img src="@/assets/img/team-4.png" alt=" ">
                </div>
              <div class="info">
                <p class="name">Jully</p>
                <p class="position">Senior Front-end Developer </p>
              </div>
            </div>
          </slide>

        </carousel> -->
        
      </div>
    </section>
  </div>
</template>

<script>
import anime from 'animejs/lib/anime.es.js'
import { VueAgile } from 'vue-agile'
import { dragscroll } from 'vue-dragscroll'
import { isMobile, isTablet } from "mobile-device-detect"

export default {
  directives: {
    dragscroll
  },
  components: {
    agile: VueAgile,
  },
  data: () => {
    return {
      officeScrollDelta: 0,
      officeImages: [
        // require('@/assets/img/office-1.png'),
        // require('@/assets/img/office-2.png'),
        // require('@/assets/img/office-3.png'),
        // require('@/assets/img/office-4.png'),
        // require('@/assets/img/office-1.png'),
        // require('@/assets/img/office-2.png'),
      ],
      carouselOptions: {
        dots: false,
        slidesToShow: 4,
        responsive: [
          {
            breakpoint: 320,
            settings: {
                slidesToShow: 1
            }
          },
          {
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
          },
          {
            breakpoint: 992,
            settings: {
                slidesToShow: 3
            }
          },
          {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4
            }
          }
        ]
      },
      clients: [
        // {
        //   url: 'http://some_link.com',
        //   img: require('@/assets/img/7color.svg')
        // },
        // {
        //   url: 'http://some_link.com',
        //   img: require('@/assets/img/VisitUA.svg')
        // },
        // {
        //   url: 'http://some_link.com',
        //   img: require('@/assets/img/Bitmarkets.svg')
        // },
        // {
        //   url: 'http://some_link.com',
        //   img: require('@/assets/img/Chill&Play.svg')
        // },
        // {
        //   url: 'http://some_link.com',
        //   img: require('@/assets/img/inizio.svg')
        // },
        // {
        //   url: 'http://some_link.com',
        //   img: require('@/assets/img/maramax.svg')
        // },
        // {
        //   url: 'http://some_link.com',
        //   img: require('@/assets/img/FAV.svg')
        // },
        // {
        //   url: 'http://some_link.com',
        //   img: require('@/assets/img/Bafa.svg')
        // },
        // {
        //   url: 'http://some_link.com',
        //   img: require('@/assets/img/Reqves.svg')
        // },
        // {
        //   url: 'http://some_link.com',
        //   img: require('@/assets/img/TheRide.svg')
        // },
        // {
        //   url: 'http://some_link.com',
        //   img: require('@/assets/img/StarFish.svg')
        // },
        // {
        //   url: 'http://some_link.com',
        //   img: require('@/assets/img/Place-to-boost.svg')
        // },
        // {
        //   url: 'http://some_link.com',
        //   img: require('@/assets/img/StroyFormat.svg')
        // },
        // {
        //   url: 'http://some_link.com',
        //   img: require('@/assets/img/RealTasker.svg')
        // },
        // {
        //   url: 'http://some_link.com',
        //   img: require('@/assets/img/ArchService.svg')
        // },
        // {
        //   url: 'http://some_link.com',
        //   img: require('@/assets/img/Akirama.svg')
        // },
      ],
      renderTeam: false,
      team: [
        // {
        //   img: require('@/assets/img/team-1.png'),
        //   name: 'Sergey',
        //   position: 'CEO,  senior UX/UI Designer'
        // },
        // {
        //   img: require('@/assets/img/team-2.png'),
        //   name: 'Tania',
        //   position: 'EXPERIENCES MANAGER'
        // },
        // {
        //   img: require('@/assets/img/team-3.png'),
        //   name: 'Eugene',
        //   position: 'Senior Full Stack Developer'
        // },
        // {
        //   img: require('@/assets/img/team-4.png'),
        //   name: 'Jully',
        //   position: 'Senior Front-end Developer'
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
    clientsList() {
      return this.clients
    },
    officeImagesList() {
      return this.officeImages
    },
    teamList() {
      return this.team
    },
  },
  methods: {
    dragscrollMoveHandler(event) {
      console.log(event.detail)
      this.officeScrollDelta += event.detail.deltaX
      console.log(this.officeScrollDelta)
    },
    dragscrollEndHandler() {
      if(this.officeScrollDelta > 0) {
        // anime({
        //   targets: document.querySelector('.office_gallery'),
        //   opacity: [0, 1],
        //   easing: 'linear',
        //   duration: 700,
        // })
      }

      this.officeScrollDelta = 0
    },
    forceRerender() {
      // Remove my-component from the DOM
      this.renderTeam = false;

      this.$nextTick(() => {
        // Add the component back in
        this.renderTeam = true;
      });
    }
  },
  watch: {
    lang() {
      const teamEN = [
        {
          img: require('@/assets/img/team-1.png'),
          name: 'Sergey',
          position: 'CEO,  senior UX/UI Designer'
        },
        {
          img: require('@/assets/img/team-2.png'),
          name: 'Tania',
          position: 'EXPERIENCES MANAGER'
        },
        {
          img: require('@/assets/img/team-3.png'),
          name: 'Eugene',
          position: 'Senior Full Stack Developer'
        },
        {
          img: require('@/assets/img/team-4.png'),
          name: 'Jully',
          position: 'Senior Front-end Developer'
        },
        {
          img: require('@/assets/img/team-4.png'),
          name: 'Jully',
          position: 'Senior Front-end Developer'
        },
      ]
      const teamRU = [
        {
          img: require('@/assets/img/team-1.png'),
          name: 'Сергей',
          position: 'CEO,  senior UX/UI Designer'
        },
        {
          img: require('@/assets/img/team-2.png'),
          name: 'Таня',
          position: 'EXPERIENCES MANAGER'
        },
        {
          img: require('@/assets/img/team-3.png'),
          name: 'Евгений',
          position: 'Senior Full Stack Developer'
        },
        {
          img: require('@/assets/img/team-4.png'),
          name: 'Юлия',
          position: 'Senior Front-end Developer'
        },
        {
          img: require('@/assets/img/team-4.png'),
          name: 'Юлия',
          position: 'Senior Front-end Developer'
        },
      ]

      switch (this.lang) {
        case 'en':
          this.team = teamEN
        break

        case 'ru':
          this.team = teamRU
        break
      }
    },
    team: function() {
      this.renderTeam = true;
    }
  },
  mounted() {
    anime({
      targets: '.page_about',
      opacity: [0, 1],
      easing: 'linear',
      duration: 1000,
      delay: 1000
    })

    setTimeout(() => {
      this.clients = [
        {
          url: 'http://some_link.com',
          img: require('@/assets/img/7color.svg')
        },
        {
          url: 'http://some_link.com',
          img: require('@/assets/img/VisitUA.svg')
        },
        {
          url: 'http://some_link.com',
          img: require('@/assets/img/Bitmarkets.svg')
        },
        {
          url: 'http://some_link.com',
          img: require('@/assets/img/Chill&Play.svg')
        },
        {
          url: 'http://some_link.com',
          img: require('@/assets/img/inizio.svg')
        },
        {
          url: 'http://some_link.com',
          img: require('@/assets/img/maramax.svg')
        },
        {
          url: 'http://some_link.com',
          img: require('@/assets/img/FAV.svg')
        },
        {
          url: 'http://some_link.com',
          img: require('@/assets/img/Bafa.svg')
        },
        {
          url: 'http://some_link.com',
          img: require('@/assets/img/Reqves.svg')
        },
        {
          url: 'http://some_link.com',
          img: require('@/assets/img/TheRide.svg')
        },
        {
          url: 'http://some_link.com',
          img: require('@/assets/img/StarFish.svg')
        },
        {
          url: 'http://some_link.com',
          img: require('@/assets/img/Place-to-boost.svg')
        },
        {
          url: 'http://some_link.com',
          img: require('@/assets/img/StroyFormat.svg')
        },
        {
          url: 'http://some_link.com',
          img: require('@/assets/img/RealTasker.svg')
        },
        {
          url: 'http://some_link.com',
          img: require('@/assets/img/ArchService.svg')
        },
        {
          url: 'http://some_link.com',
          img: require('@/assets/img/Akirama.svg')
        },
      ]

      this.officeImages = [
        require('@/assets/img/office-1.png'),
        require('@/assets/img/office-2.png'),
        require('@/assets/img/office-3.png'),
        require('@/assets/img/office-4.png'),
        require('@/assets/img/office-1.png'),
        require('@/assets/img/office-2.png'),
      ]

      const teamEN = [
        {
          img: require('@/assets/img/team-1.png'),
          name: 'Sergey',
          position: 'CEO,  senior UX/UI Designer'
        },
        {
          img: require('@/assets/img/team-2.png'),
          name: 'Tania',
          position: 'EXPERIENCES MANAGER'
        },
        {
          img: require('@/assets/img/team-3.png'),
          name: 'Eugene',
          position: 'Senior Full Stack Developer'
        },
        {
          img: require('@/assets/img/team-4.png'),
          name: 'Jully',
          position: 'Senior Front-end Developer'
        },
        {
          img: require('@/assets/img/team-4.png'),
          name: 'Jully',
          position: 'Senior Front-end Developer'
        },
      ]
      const teamRU = [
        {
          img: require('@/assets/img/team-1.png'),
          name: 'Сергей',
          position: 'CEO,  senior UX/UI Designer'
        },
        {
          img: require('@/assets/img/team-2.png'),
          name: 'Таня',
          position: 'EXPERIENCES MANAGER'
        },
        {
          img: require('@/assets/img/team-3.png'),
          name: 'Евгений',
          position: 'Senior Full Stack Developer'
        },
        {
          img: require('@/assets/img/team-4.png'),
          name: 'Юлия',
          position: 'Senior Front-end Developer'
        },
        {
          img: require('@/assets/img/team-4.png'),
          name: 'Юлия',
          position: 'Senior Front-end Developer'
        },
      ]

      switch (this.lang) {
        case 'en':
          this.team = teamEN
        break

        case 'ru':
          this.team = teamRU
        break
      }
      
    }, 1000)
    // anime({
    //   targets: '.preload_bg_green',
    //   points: [
    //     { value: '1920,1080 0,1080 0,0 432.1,0 1920,0' },
    //     { value: '1920,1080 0,1080 0,0 0,0 0,1080' },
    //   ],
    //   easing: 'easeOutQuad',
    //   duration: 1000,
    // });
    // let delta = 0
    // window.addEventListener('wheel', function (e) {
    //   e.preventDefault();
    //   delta += e.deltaY
    //   console.log(delta)
    //   setTimeout(function() {
    //     window.scrollTo({
    //       top: delta,
    //       behavior: "smooth"
    //     })
    //   }, 200)
    // }, { passive: false });
  },
  beforeRouteLeave (to, from, next) {
    if (!this.isMobDevice) {
      anime({
        targets: '.page_about',
        opacity: [1, 0],
        easing: 'linear',
        duration: 1000,
        complete: function() { 
          next();
        }
      })
      // let preloader = document.querySelector('.page_change_preloader')
      // let random = Math.random() * 2
      // if (random < 1) {
      //   preloader.classList.add('green')
      //   preloader.classList.remove('orange')
      // } else {
      //   preloader.classList.add('orange')
      //   preloader.classList.remove('green')
      // }
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
    } else {
      anime({
        targets: '.page_about',
        opacity: [1, 0],
        easing: 'linear',
        duration: 1000,
        complete: function() { 
          next();
        }
      })

      // setTimeout(() => {
      //   next();
      // },1000)
    }
  },
}
</script>

<style lang="scss">
.page_about {
  padding-top: 10.2rem;
  color: #000;
  .s_top {
    padding-bottom: 11.5rem;
    font-size: 2rem;
    line-height: 143.2%;
    p {
      opacity: 0.5;
    }
    .text-1 {
      margin-bottom: 4rem;
      font-weight: 500;
      font-size: 3.2rem;
      line-height: 4.8rem;
      opacity: 1;
      text-transform: uppercase;
    }
  }
  .banner {
    position: relative;
    margin-bottom: 9.5rem;
    padding: 3.2rem 1.8rem 3.2rem 15rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #F8F8F8;
  }
  .bg_trgl {
    position: absolute;
    top: 2.8rem;
    left: -6rem;
    width: 64.1rem;
    img {
      width: 100%;
    }
  }
  .page_header {
    position: relative;
    z-index: 10;
    margin-bottom: 0;
  }
  .page_title {
    font-size: 7rem;
    line-height: 6rem;
  }
  .s_title {
    font-size: 7rem;
    line-height: 6rem;
    text-align: center;
  }
  .page_title_caption {
    font-size: 2.5rem;
    line-height: 4rem;
    text-transform: uppercase;
  }
  .papaya_img {
    position: relative;
    width: 69.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    .text {
      position: absolute;
      // top: 50%;
      right: 9.6rem;
      font-size: 14px;
      text-transform: uppercase;
      color: #000000;
      opacity: 0.5;
      img {
        margin-bottom: 5px;
      }
    }
  }
}
.clients {
  padding-top: 11.5rem;
  .s_title {
    margin-bottom: 9rem;
  }
}
.clients_wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}
.clients_item {
  margin-bottom: 4rem;
  width: 23.6rem;
  margin-right: 12rem;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  &:nth-child(4n) {
    margin-right: 0;
  }
}
.office {
  padding-top: 15rem;
  padding-bottom: 14rem;
  .s_title {
    margin-bottom: 10rem;
  }
  .caption {
    margin-top: 1.7rem;
  }
}
.office_gallery {
  width: 100%;
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  cursor: grab;
  &::-webkit-scrollbar {
    height: 0px;
  }
  // align-items: flex-start;
  img {
    flex-shrink: 0;
  }
}
.team {
  padding-top: 14rem;
  padding-bottom: 7rem;
  .s_title {
    margin-bottom: 9rem;
  }
}
.team_gallery {
  position: relative;
  padding-top: 6.5rem;
  width: 100%;
  display: flex;
  &:before {
    position: absolute;
    display: block;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 40.3rem;
    background: #F8F8F8;
  }
  .agile {
    width: 100%;
    .agile__nav-button {
      position: absolute;
      outline: none !important;
      width: 3rem;
      height: 3rem;
      font-size: 0;
      top: 50%;
      margin-top: -7rem;
    }
    .agile__nav-button--prev {
      left: -6rem;
      background: url(../assets/img/arrow_left.svg) no-repeat center;
      transform: none;
    }
    .agile__nav-button--next {
      right: -6rem;
      background: url(../assets/img/arrow_right.svg) no-repeat center;
      transform: none;
    }
  }

}
.team_item {
  padding-left: 4rem;
  padding-right: 4rem;
  // width: 25%;
  display: flex;
  flex-direction: column;
  .image {
    height: 33.8rem;
    display: flex;
    align-items: flex-end;
    img {
      // width: 100%;
      max-height: 100%;
      mix-blend-mode: multiply;
    }
  }
  .info {
    padding-top: 2.5rem;
    text-align: center;
    white-space: nowrap;
  }
  .name {
    margin-bottom: 2rem;
    font-size: 2rem;
    line-height: 143.2%;
  }
  .position {
    font-size: 1.6rem;
    line-height: 143.2%;
    text-transform: uppercase;
    color: #888;
  }
}
@media (max-width: 1660px) {
  .clients_item {
    margin-right: 9rem;
    &:nth-child(4n) {
      margin-right: 0;
    }
  }
}
@media (max-width: 1365px) {
  .page_about .papaya_img {
    width: 52rem;
  }
  .page_about .banner {
    padding-left: 8rem;
  }
  .clients_item {
    margin-right: 11rem;
  }
  .team_item {
    display: flex;
    .image {
      justify-content: center;
      img {
        width: auto;
        max-height: 100%;
      }
    }
  }
}
@media (max-width: 1199px) {
  .clients_item {
    margin-right: 0;
    width: 50%;
  }
}
@media (min-width: 992px) and (max-width: 1366px) {
  .tablet {
    .page {
      padding-left: 40px;
      padding-right: 40px;
    }
    .page_about {
      padding-top: 115px;
      padding-bottom: 80px;
      .s_top {
        font-size: 24px;
        line-height: 35px;
        .text-1 {
          margin-bottom: 45px;
          font-weight: 500;
          font-size: 30px;
          line-height: 42px;
          opacity: 1;
        }
      }
      .banner {
        margin-bottom: 60px;
        padding: 46px 0 46px 35px;
        height: 263px;
      }
      .bg_trgl {
        top: 15px;
        left: 0px;
        width: 156px;
      }
      .page_title {
        margin-bottom: 8px;
        font-size: 45px;
        line-height: 45px;
        white-space: nowrap;
      }
      .s_title {
        font-size: 45px;
        line-height: 45px;
      }
      .page_title_caption {
        font-size: 24px;
        line-height: 29px;
        white-space: nowrap;
      }
      .papaya_img {
        width: 186px;
        right: 0;
      }
    }

    .clients {
      padding-top: 127px;
      .s_title {
        margin-bottom: 75px;
      }
    }
    .clients_item {
      margin-bottom: 0;
      width: 50%;
      margin-right: 0;
      flex-shrink: 0;
    }

    .office {
      padding-top: 150px;
      padding-bottom: 0;
      .s_title {
        margin-bottom: 105px;
      }
      .caption {
        margin-top: 30px;
        text-align: center;
      }
    }
    .office_gallery {
      height: 240px;
      // align-items: flex-start;
      img {
        height: 100%;
        width: auto;
        flex-shrink: 0;
      }
    }

    .team {
      padding-top: 150px;
      padding-bottom: 0;
      .s_title {
        margin-bottom: 80px;
      }
    }
    .team_gallery {
      padding-top: 45px;
      &::before {
        height: 345px;
      }
    }
    .team_item {
      padding-left: 1rem;
      padding-right: 1rem;
      .image {
        height: 300px;
      }
    }
  }
}
@media (max-width: 991px) {
  .page_about {
    padding-top: 115px;
    padding-bottom: 2.5rem;
    .s_top {
      padding-bottom: 0;
      font-size: 1.6rem;
      line-height: 2.3rem;
      p {
        opacity: 1;
      }
      .text-1 {
        margin-bottom: 3rem;
        font-weight: 500;
        font-size: 2rem;
        line-height: 2.8rem;
        opacity: 1;
      }
    }
    .banner {
      margin-bottom: 4rem;
      padding: 3.1rem 0 3.1rem 2.3rem;
      height: 17.5rem;
    }
    .bg_trgl {
      top: 1rem;
      left: -1.8rem;
      width: 10.4rem;
    }
    .page_title {
      margin-bottom: 0.5rem;
      font-size: 3rem;
      line-height: 3rem;
      white-space: nowrap;
    }
    .s_title {
      font-size: 3rem;
      line-height: 3rem;
    }
    .page_title_caption {
      font-size: 1.6rem;
      line-height: 1.9rem;
      white-space: nowrap;
    }
    .papaya_img {
      width: 12.4rem;
      right: 0;
    }
  }

  .clients {
    padding-top: 8.5rem;
    .s_title {
      margin-bottom: 5rem;
    }
  }
  .clients_item {
    margin-bottom: 0;
    width: 50%;
    margin-right: 0;
    flex-shrink: 0;
  }

  .office {
    padding-top: 10rem;
    padding-bottom: 0;
    .s_title {
      margin-bottom: 7rem;
    }
    .caption {
      margin-top: 3rem;
      text-align: center;
    }
  }
  .office_gallery {
    height: 18rem;
    // align-items: flex-start;
    img {
      height: 100%;
      width: auto;
      flex-shrink: 0;
    }
  }

  .team {
    padding-top: 10rem;
    padding-bottom: 0;
    .s_title {
      margin-bottom: 5.5rem;
    }
  }
  .team_gallery {
    padding-top: 3rem;
    &::before {
      height: 29rem;
    }
    
    .agile {
      .agile__nav-button {
        width: 30px;
        height: 30px;
      }
      .agile__nav-button--prev {
        left: 10px;
      }
      .agile__nav-button--next {
        right: 10px;
      }
    }
  }
  .team_item {
    padding-left: 1rem;
    padding-right: 1rem;
    .image {
      height: 26rem;
    }
  }
}

@media (max-width: 767px) {
  .page_about {
    padding-top: 70px;
  }
}
</style>