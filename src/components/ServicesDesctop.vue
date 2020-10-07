<template>
  <div class="page page_services">
    <section id="scene1" class="screen s_top">
      <h1 class="page_title">{{$t('services.t1')}}</h1>
      <div class="inner">
        <div class="image">
          <div class="bg_trgl"><img src="@/assets/img/trgl-7.svg" alt=" "></div>
          <img src="@/assets/img/dct.svg" alt=" ">
        </div>
        <div class="tabs">
          <div class="tabs_header">
            <div class="tab_title" v-for="(item, index) in services_desc" :class="{'active' : index == activeTab}" :key="index" @click="activeTab = index">{{item.title}}</div>
          </div>
          <div class="tab_body" v-for="(item, index) in services_desc" :key="index">
            <p v-if="index == activeTab" v-html="item.text"></p>
          </div>
        </div>
      </div>
    </section>
    <section id="scene2" class="screen strategy">
      <div class="description">
        <!-- <h2 class="s_title"><span>S</span>TRATEGY</h2> -->
        <h2 class="s_title"><img src="@/assets/img/strategy.svg" alt="strategy"></h2>
        <ul class="list_default">
          <li v-for="(item, index) in strategy_list" :key="index">{{item}}</li>
        </ul>
      </div>
      <div class="image">
        <div class="bg_trgl"><img src="@/assets/img/trgl-8.svg" alt=" "></div>
        <img src="@/assets/img/chess.png" alt=" ">
      </div>
    </section>
    <section id="scene3" class="screen creative">
      <div class="image">
        <div class="image_inner">
          <img src="@/assets/img/puzzle-2.png" alt=" ">
          <img src="@/assets/img/puzzle-1.png" alt=" ">
          <span>CREATIVE</span>
        </div>
      </div>
      <div class="description">
        <ul class="list_default">
          <li v-for="(item, index) in creative_list" :key="index">{{item}}</li>
        </ul>
        <!-- <h2 class="s_title"><span>C</span>reative</h2> -->
        <h2 class="s_title"><img src="@/assets/img/creative.svg" alt="creative"></h2>
      </div>
    </section>
    <section id="scene4" class="screen technology">
      <div class="description">
        <!-- <h2 class="s_title"><span>T</span>echnology</h2> -->
        <h2 class="s_title"><img src="@/assets/img/technology.svg" alt="technology"></h2>
        <ul class="list_default">
          <li v-for="(item, index) in tech_list" :key="index">{{item}}</li>
        </ul>
      </div>
      <div class="image">
        <div class="bg_trgl"><img src="@/assets/img/trgl-9.svg" alt=" "></div>
        <div class="bg_trgl-2"><img src="@/assets/img/trgl-10.svg" alt=" "></div>
        <img src="@/assets/img/screen-technologies.png" alt=" ">
      </div>
    </section>
    <section id="scene5" class="screen how_it_works">
      <h2 class="s_title">{{$t('services.t2')}}</h2>
      <transition @enter="parallaxInit">
        <div v-if="render_hiw" id="parallax_scene" class="hiw_items">
          <div class="hiw_item" v-for="(item, index) in how_it_works" :key="index" data-depth="0.4">
            <img :src="item.img" alt=" " data-depth="0.2">
            <p v-html="item.text"></p>
          </div>
        </div>
      </transition>
      <div class="bottom">
        <a href="#" class="buttons btn_order" @click.prevent="openRequestForm">
          <i class="icon">
            <img src="@/assets/img/brief-white.svg" alt=" ">
            <img src="@/assets/img/brief.svg" alt=" ">
          </i>
          <span>{{$t('buttons.btn8')}}</span>
        </a>
      </div>
    </section>
    
  </div>
</template>

<script>
import { isMobile, isTablet } from "mobile-device-detect"
import anime from 'animejs/lib/anime.es.js'
import ScrollMagic from 'scrollmagic'
import Parallax from 'parallax-js'

export default {
  props: ['services_desc', 'strategy_list', 'creative_list', 'tech_list', 'how_it_works'],
  data: () => {
    return {
      activeTab: 0,
      render_hiw: false
    }
  },
  computed: {
    isMobDevice() {
      return isMobile || isTablet ? true : false
    },
  },
  methods: {
    forceRerender() {
      this.render_hiw = false;

      this.$nextTick(() => {
        this.render_hiw = true;
      });
    },
    parallaxInit() {
      let scene = document.getElementById('parallax_scene');
      let parallaxInstance = new Parallax(scene, {
        hoverOnly: true,
        selector: '.hiw_item img'
      });
    },
    openRequestForm() {
      this.$store.commit('showRequestFormToggler')
      this.$router.push('/contact')
    }
  },
  watch: {
    how_it_works: function () {
      this.render_hiw = true;
    }
  },
  mounted() {

    let controller = new ScrollMagic.Controller()
    let storeCommit = this.$store.commit

    if (!this.isMobDevice) {
      anime({
        targets: '.page_services',
        opacity: [0, 1],
        easing: 'linear',
        duration: 1000,
        delay: 500
      })
      
      // anime({
      //   targets: '.page_title',
      //   translateX: [-200, 0],
      //   opacity: [0, 1],
      //   easing: 'easeOutQuad',
      //   duration: 1000,
      //   delay: 500,
      // })
      // anime({
      //   targets: '.s_top .image',
      //   opacity: [0, 1],
      //   easing: 'linear',
      //   duration: 1000,
      //   delay: 700
      // })
      // anime({
      //   targets: '.tab_title',
      //   translateX: [-100, 0],
      //   opacity: [0, 1],
      //   easing: 'easeOutQuad',
      //   duration: 500,
      //   delay: anime.stagger(200, {start: 700}),
      // })
      // anime({
      //   targets: '.tab_body',
      //   opacity: [0, 1],
      //   easing: 'linear',
      //   duration: 1000,
      //   delay: 1000
      // })
      // anime({
      //   targets: '.screen.strategy',
      //   opacity: [0, 1],
      //   easing: 'linear',
      //   duration: 800,
      //   delay: 1200
      // })

    } else {
      anime({
        targets: '.page_services',
        opacity: [0, 1],
        easing: 'linear',
        duration: 1000,
        delay: 1000
      })
    }

    let s1tween1 = anime({
      targets: '.s_top .bg_trgl',
      rotate: -60,
      easing: 'linear',
      autoplay: false
    })
    let s2tween1 = anime({
      targets: '.strategy .bg_trgl',
      // rotate: 120,
      translateY: 100,
      scale: 1.1,
      elasticity: 1000,
      easing: 'linear',
      autoplay: false
    })
    let s2tween2 = anime({
      targets: '.strategy .s_title',
      translateY: -80,
      elasticity: 1000,
      easing: 'linear',
      autoplay: false
    })
    let s3tween1 = anime({
      targets: '.creative .image_inner span',
      translateX: 60,
      elasticity: 1000,
      easing: 'linear',
      autoplay: false
    })
    let s3tween2 = anime({
      targets: '.creative .s_title',
      translateY: -100,
      elasticity: 1000,
      easing: 'linear',
      autoplay: false
    })
    let s4tween1 = anime({
      targets: '.technology .bg_trgl',
      translateY: 100,
      scale: 1.1,
      elasticity: 1000,
      easing: 'linear',
      autoplay: false
    })
    let s4tween2 = anime({
      targets: '.technology .s_title',
      translateY: -80,
      elasticity: 1000,
      easing: 'linear',
      autoplay: false
    })

    let scene1 = new ScrollMagic.Scene({
      triggerElement: '#scene1', // starting scene, when reaching this element
      duration: '100%',
      offset: 200
    }).on("progress", function (event) {
        // console.log("Scene progress changed to " + event.progress);
        s1tween1.seek(s1tween1.duration * event.progress)
    }).on("enter", function() {
        // storeCommit('activeScreenSetter', 1)
    })

    let scene2 = new ScrollMagic.Scene({
      triggerElement: '#scene2',
      duration: '100%',
      offset: 0
    })
    scene2.on("progress", function (event) {
        s2tween1.seek(s2tween1.duration * event.progress)
        s2tween2.seek(s2tween2.duration * event.progress)
    }).on("enter", function() {
        // storeCommit('activeScreenSetter', 2)
    })

    let scene3 = new ScrollMagic.Scene({
      triggerElement: '#scene3',
      duration: '100%', 
      offset: 0
    })
    scene3.on("progress", function (event) {
        s3tween1.seek(s3tween1.duration * event.progress)
        s3tween2.seek(s3tween2.duration * event.progress)
    }).on("enter", function() {
        // storeCommit('activeScreenSetter', 3)
    })

    let scene4 = new ScrollMagic.Scene({
      triggerElement: '#scene4',
      duration: '100%', 
      offset: 0
    })
    scene4.on("progress", function (event) {
        s4tween1.seek(s4tween1.duration * event.progress)
        s4tween2.seek(s4tween2.duration * event.progress)
    }).on("enter", function() {
        // storeCommit('activeScreenSetter', 4)
    })

    controller.addScene([
      scene1,
      scene2,
      scene3,
      scene4,
    ]);
 
    // let cursorPos = function () {
    //   const ctn = document.querySelector('.hiw_items')
    //   const ctnY = getCoords(ctn).top
    //   const ctnX = getCoords(ctn).left
    //   console.log(ctnY + ' - ' + ctnX)

    //   ctn.addEventListener('mousemove', (e) => {
    //     console.log(e.offsetY + ' - ' + e.offsetX)
    //   })
    // }

    // function getCoords(elem) {
    //   let box = elem.getBoundingClientRect()

    //   return {
    //     top: box.top + pageYOffset,
    //     left: box.left + pageXOffset
    //   }
    // }
  }
}
</script>

<style lang="scss" scoped>
.page_services {
  padding-bottom: 17.5rem;
  color: #000;
  .page_title {
    margin-bottom: 18.5rem;
  }
  .s_title {
    flex-shrink: 0;
    font-weight: bold;
    font-size: 8rem;
    line-height: 9.5rem;
  }
  .description {
    width: 60rem;
  }
}
.screen {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.s_top {
  // padding-bottom: 8rem;
  display: block;
  .inner {
    display: flex;
    // align-items: center;
  }
  .image {
    position: relative;
    margin-right: 12rem;
    width: 46.4rem;
    flex-shrink: 0;
    .bg_trgl {
      position: absolute;
      top: -21rem;
      left: -8.2rem;
      width: 53.8rem;
      z-index: 10;
      transform-origin: center center;
      will-change: transform; 
    }
    img {
      z-index: 20;
      position: relative;
    }
  }
  .tabs {
    padding-top: 0.8rem;
    width: 100%;
  }
  .tabs_header {
    display: flex;
    margin-bottom: 4rem;
  }
  .tab_title {
    position: relative;
    margin-right: 7.5rem;
    font-size: 2.5rem;
    line-height: 3.6rem;
    text-transform: uppercase;
    color: rgba(#000, .6);
    cursor: pointer;
    &:last-child {
      margin-right: 0;
    }
    &:hover, &.active {
      &::after {
        width: 100%;
      }
    }
    &::before {
      position: absolute;
      display: block;
      content: '';
      bottom: -2px;
      left: 0;
      height: 2px;
      width: 100%;
      background: #C4C4C4;
    }
    &::after {
      position: absolute;
      display: block;
      content: '';
      bottom: -2px;
      left: 0;
      height: 2px;
      width: 0;
      background: #000;
      z-index: 10;
      transition: width .3s;
    }
  }
  .tab_body {
    font-size: 1.8rem;
    line-height: 143.2%;
    color: rgba(#000, .5);
    p {
      height: 23rem;
    }
  }
}
.strategy {
  padding: 17rem 0;
  .s_title {
    position: relative;
    margin-bottom: -80px;
    margin-right: 15rem;
    will-change: transform; 
    img {
      width: 5.9rem;
    }
    span {
      color: #FF6900;
    }
  }
  .image {
    position: relative;
    width: 35.2rem;
    margin-right: 12rem;
    .bg_trgl {
      position: absolute;
      margin-top: -30px;
      top: -7rem;
      left: -5.9rem;
      width: 43.6rem;
      z-index: 10;
      transform-origin: center center;
      will-change: transform; 
    }
    img {
      z-index: 20;
      position: relative;
    }
  }
  .description {
    position: relative;
    display: flex;
    align-items: center;
  }
  .list_default {
    li {
      &::before {
        background: #FA7C0D;
      }
    }
  }
}
.creative {
  padding: 17rem 0;
  .s_title {
    position: relative;
    margin-bottom: -100px;
    margin-left: 15rem;
    will-change: transform; 
    img {
      width: 5.9rem;
    }
    span {
      color: #F7DD00;
    }
  }
  .image {
    position: relative;
    margin-left: -8rem;
    .image_inner {
      padding-left: 3rem;
      display: flex;
      align-items: center;
    }
    span {
      position: absolute;
      left: 0;
      top: 50%;
      margin-left: -20px;
      margin-top: -10.7rem;
      font-weight: bold;
      font-size: 18rem;
      line-height: 21.5rem;
      text-transform: uppercase;
      color: #F7DD00;
      z-index: 20;
      will-change: transform; 
    }
    img {
      position: relative;
      width: 40.9rem;
      z-index: 10;
      & + img {
        margin-left: -7.5rem;
        margin-top: -2rem;
        width: 35.8rem;
        z-index: 30;
      }
    }
  }
  .description {
    width: 54rem;
    position: relative;
    display: flex;
    align-items: center;
  }
}
.technology {
  padding: 17rem 0;
  .s_title {
    position: relative;
    margin-bottom: -80px;
    margin-right: 15rem;
    will-change: transform; 
    img {
      width: 5.9rem;
    }
    span {
      color: #95B540;
    }
  }
  .description {
    position: relative;
    display: flex;
    align-items: center;
  }
  .list_default {
    li {
      &::before {
        background: #95B540;
      }
    }
  }
  .image {
    position: relative;
    margin-right: 5.5rem;
    width: 52rem;
    .bg_trgl {
      position: absolute;
      margin-bottom: 50px;
      bottom: -10rem;
      right: -9rem;
      width: 77.6rem;
      z-index: 10;
      will-change: transform; 
    }
    .bg_trgl-2 {
      position: absolute;
      bottom: -7.4rem;
      left: -5.4rem;
      z-index: 30;
    }
    img {
      z-index: 20;
      position: relative;
    }
  }
}
.how_it_works {
  padding-top: 17rem;
  display: block;
  .s_title {
    margin-bottom: 0;
    text-align: center;
  }
  .bottom {
    display: flex;
    justify-content: center;
  }
}
.hiw_items {
  // margin-bottom: 20.5rem;
  position: relative;
  padding-top: 20.5rem;
  padding-bottom: 20.5rem;
  padding-left: 24rem;
  padding-right: 24rem;
  margin-right: -24rem;
  margin-left: -24rem;
  width: calc(100% + 48rem);
  display: flex;
  justify-content: space-between;
}
.hiw_item {
  pointer-events: none;
  position: relative;
  text-align: center;
  font-size: 2.5rem;
  line-height: 120%;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  &:nth-child(1) {
    img {
      left: -3.8rem !important;
      top: -7.3rem !important;
      width: 18.8rem;
    }
  }
  &:nth-child(2) {
    img {
      left: -2.9rem !important;
      top: -7.3rem !important;
      width: 18.2rem;
    }
  }
  &:nth-child(3) {
    img {
      left: -6rem !important;
      top: -3.8rem !important;
      width: 16.9rem;
    }
  }
  &:nth-child(4) {
    img {
      left: -1rem !important;
      top: -6rem !important;
      width: 15.8rem;
    }
  }
  &:nth-child(5) {
    img {
      left: -5.2rem !important;
      top: -4.8rem !important;
      width: 18.8rem;
    }
  }
  img {
    position: absolute !important;
    flex-shrink: 0;
    max-width: none;
  }
  p {
    position: relative;
    z-index: 10;
  }
}
.btn_order {
  padding-left: 2.8rem;
  padding-right: 3.3rem;
  .icon {
    margin-right: 2rem;
  }
}

@media (max-width: 1365px) {
  .creative .image span {
    font-size: 14rem;
    line-height: 17rem;
    margin-top: -8.5rem;
    left: 3rem;
  }
  .creative .image .image_inner {
    padding-left: 0;
  }
  .creative .image img {
    width: 37rem;
  }
  .creative .image img + img {
    width: 31.6rem;
  }
  .strategy .s_title {
    margin-right: 12rem;
  }
  .creative .s_title {
    margin-left: 12rem;
  }
  .technology .s_title {
    margin-right: 12rem;
  }
}


</style>