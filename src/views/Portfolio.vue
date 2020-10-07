<template>
  <div class="page page_portfolio">
    <div class="page_header">
      <div class="left">
        <h1 class="page_title">{{ $t('portfolio.t1') }}</h1>
        <p class="page_title_caption" v-html="$t('portfolio.t6')"></p>
      </div>
      <div class="right">
        <!-- <p>All works are unique, <br>in every pixel</p> -->
        <p v-html="$t('portfolio.t5')"></p>
      </div>
    </div>
    <div class="page_content">
      <!-- <router-link :to="`/portfolio/:${item.id}`" class="portfolio_thumb" v-for="(item, index) in portfolio_list" :key="item.id" @mouseenter.native="mouseoverHandler($event)" @mouseleave.native="mouseleaveHandler($event)" @click.native="clickHandler(index)"> -->
      <router-link :to="{ name: 'PortfolioWork', params: { slideIndex: index }}" class="portfolio_thumb" v-for="(item, index) in portfolio_list" :key="item.id" @mouseenter.native="mouseoverHandler($event)" @mouseleave.native="mouseleaveHandler($event)" @click.native="clickHandler(index)">
        <div class="portfolio_img">
          <img :src="item.img" alt=" ">
          <div class="mask"></div>
        </div>
        <div class="portfolio_caption">
          <div class="bg_overlay">
            <div class="bg_overlay-1"></div>
            <div class="bg_overlay-2"></div>
          </div>
          <h2 class="portfolio_title">
            <span>{{item.title}}</span>
            <div class="arrow"><img src="@/assets/img/arrow-2-right.svg" alt=" "></div>
          </h2>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import anime from 'animejs/lib/anime.es.js'
import { isMobile, isTablet } from "mobile-device-detect"

export default {
  data: () => {
    return {
      portfolio_list: [
        // {
        //   id: 'star-fish',
        //   img: require('@/assets/img/work-1.jpg'),
        //   title: 'Star Fish'
        // },
        // {
        //   id: 'reqves',
        //   img: require('@/assets/img/work-2.jpg'),
        //   title: 'Reqves'
        // },
        // {
        //   id: 'bafa',
        //   img: require('@/assets/img/work-4.jpg'),
        //   title: 'Bafa Doors'
        // },
        // {
        //   id: 'radiologia',
        //   img: require('@/assets/img/work-3.jpg'),
        //   title: 'Radiologia'
        // },
      ]
    }
  },
  computed: {
    isMobDevice() {
      return isMobile || isTablet ? true : false
    },
  },
  methods: {
    mouseoverHandler(e) {
      if (true) {
        e.target.classList.toggle('active')
      }
    },
    mouseleaveHandler(e) {
      if (true) {
        e.target.classList.toggle('active')
      }
    },
    clickHandler(index) {
      if (this.isMobDevice) {}
      document.querySelectorAll('.portfolio_thumb')[index].classList.toggle('open')
    }
  },
  mounted() {
    // anime({
    //   targets: '.preload_bg_green',
    //   points: [
    //     { value: '1920,1080 0,1080 0,0 432.1,0 1920,0' },
    //     { value: '1920,1080 0,1080 0,0 0,0 0,1080' },
    //   ],
    //   easing: 'easeOutQuad',
    //   duration: 1000,
    // });
    if (this.isMobDevice) {
      anime({
        targets: document.querySelector('.page_header'),
        opacity: [0, 1],
        easing: 'linear',
        duration: 500,
        delay: 200,
      })
      anime({
        targets: document.querySelector('.page_content'),
        opacity: [0, 1],
        easing: 'linear',
        duration: 500,
        delay: 500,
      })
    } else {
      anime({
        targets: document.querySelector('.page_header'),
        opacity: [0, 1],
        easing: 'linear',
        duration: 1000,
        delay: 500,
      })
      anime({
        targets: document.querySelector('.page_content'),
        opacity: [0, 1],
        easing: 'linear',
        duration: 1000,
        delay: 800,
      })
    }
    
  },
  beforeMount() {

    setTimeout(() => {
      this.portfolio_list = [
        {
          id: 'star-fish',
          img: require('@/assets/img/work-1.jpg'),
          title: 'Star Fish'
        },
        {
          id: 'reqves',
          img: require('@/assets/img/work-2.jpg'),
          title: 'Reqves'
        },
        {
          id: 'bafa',
          img: require('@/assets/img/work-4.jpg'),
          title: 'Bafa Doors'
        },
        {
          id: 'radiologia',
          img: require('@/assets/img/work-3.jpg'),
          title: 'Radiologia'
        },
      ]
    })

  },
  beforeRouteLeave (to, from, next) {
    anime({
      targets: document.querySelector('.page_header'),
      opacity: [1, 0],
      easing: 'linear',
      duration: 800,
      delay: 200,
      // complete: function() { 
      //   next();
      // }
    })
    anime({
      targets: document.querySelector('.page_content'),
      opacity: [1, 0],
      easing: 'linear',
      duration: 800,
      delay: 200,
      complete: function() { 
        next();
      }
    });

    // if (!this.isMobDevice) {
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
    // } else {
      // setTimeout(() => {
      //   next();
      // },1500)
    // }
  },
}
</script>

<style lang="scss" scoped>
.page_portfolio {
  .page_header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    .right {
      margin-bottom: 0.6rem;
      font-weight: 200;
      font-size: 2rem;
      line-height: 3rem;
      text-align: right;
      white-space: nowrap;
      flex-shrink: 0;
    }
  }
  .page_content {
    width: 100%;
    overflow: hidden;
  }
  .page_title_caption {
    // padding-right: 15rem;
  }
}
.portfolio_thumb {
  position: relative;
  margin-bottom: 3rem;
  height: 40rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  &.open {
    .portfolio_caption {
      background: #000;
      width: 100%;
    }
    .portfolio_img {
      img {
        transform: scale(1.1);
        opacity: 1;
      }
    }
    .portfolio_caption {
      .bg_overlay {
        transform: translateX(0);
      }
      .bg_overlay-1 {
        width: 20rem;
      }
      .bg_overlay-2 {
        width: 30rem;
      }
    }
    .portfolio_title {
      .arrow {
        transform: translateX(0);
      }
    }
  }
  &.active {
    .portfolio_img {
      img {
        transform: scale(1.1);
        opacity: 1;
        transition: all .5s;
      }
    }
    .portfolio_caption {
      .bg_overlay {
        // transform: translateX(0);
        width: 50rem;
        transition: all .5s;
      }
      // .bg_overlay-1 {
      //   width: 20rem;
      //   transition: all .5s;
      // }
      // .bg_overlay-2 {
      //   width: 30rem;
      //   transition: all .5s;
      // }
    }
    .portfolio_title {
      .arrow {
        transform: translateX(0);
        transition: all .5s;
      }
    }
  }
  .portfolio_img {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    img {
      position: relative;
      width: 100%;
      opacity: 0.3;
      z-index: 10;
      transform: scale(1);
      transition: all .5s;
    }
    .mask {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: #000;
    }
  }
  .portfolio_caption {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 50rem;
    z-index: 20;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: width .5s;
    .bg_overlay {
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 0;
      background-color: #000;
      // transform: translateX(-10rem);
      transition: all .5s;
    }
    // .bg_overlay-1 {
    //   position: absolute;
    //   right: 30rem;
    //   top: 0;
    //   width: 0;
    //   height: 100%;
    //   background-color: #000;
    //   transition: all .5s;
    // }
    // .bg_overlay-2 {
    //   position: absolute;
    //   left: 20rem;
    //   top: 0;
    //   width: 0;
    //   height: 100%;
    //   background-color: #000;
    //   transition: all .5s;
    // }
  }
  .portfolio_title {
    position: relative;
    z-index: 20;
    font-weight: bold;
    font-size: 6rem;
    line-height: 7.2rem;
    color: #FFF;
    .arrow {
      position: absolute;
      left: 50%;
      bottom: -6.4rem;
      margin-left: -38px;
      width: 76px;
      transform: translateX(-31rem);
      transition: all .5s;
    }
  }
}

@media (max-width: 991px) {
  .page_portfolio {
    padding-bottom: 1rem;
    .page_title {
      margin-bottom: 1rem;
    }
    .page_header {
      margin-bottom: 1.2rem;
      display: block;
      .right {
        margin-top: 1.8rem;
        font-size: 1.6rem;
        line-height: 2.1rem;
        text-align: left;
        br {
          display: none;
        }
      }
    }
  }
  .portfolio_thumb {
    margin-bottom: 1rem;
    height: 9.5rem;
    &.open {
      .portfolio_caption {
        background: transparent;
        justify-content: center;
        width: 100%;
      }
      .portfolio_img {
        img {
          transform: scale(1);
          opacity: 0.3;
        }
      }
      .portfolio_caption {
        .bg_overlay {
          transform: translateX(0);
        }
      }
      .portfolio_title {
        .arrow {
          transform: translateX(0);
        }
      }
    }
    .portfolio_caption {
      padding-left: 3rem;
      padding-right: 3rem;
      white-space: nowrap;
      width: 40%;
      z-index: 20;
      transform: translateX(0);
      justify-content: flex-start;
    }
    .portfolio_title {
      font-size: 2rem;
      line-height: 2.4rem;
      .arrow {
        position: absolute;
        left: 50%;
        margin-left: -22px;
        bottom: -2rem;
        width: 45px;
        transform: translateX(-31rem);
        transition: all .4s;
      }
    }
  }
}
</style>