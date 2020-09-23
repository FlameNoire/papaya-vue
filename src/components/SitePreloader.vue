<template>
  <div v-if="!isMobDevice" id="page_change_preloader" class="page_change_preloader">
    <svg version="1.1" id="layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      viewBox="0 0 1920 1080" style="enable-background:new 0 0 1920 1080;" preserveAspectRatio="none">
      <g>
        <!-- <polygon class="preload_bg_green" points="1920,1080 0,1080 0,0 432.1,0 1920,0 "/> -->
        <polygon class="preload_bg_green" points="1920,1080 0,1080 0,0 739.8,0 1723.9,0 1920,0 1920,796.8 "/>
      </g>
    </svg>
    <div class="logo">
      <img src="@/assets/img/logo_papaya.svg" alt=" ">
    </div>
  </div>
  <!-- <div class="site_preloader">
    <svg width="1920" height="1080" viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path class="st0" d="M977.5,553.6l4.8,16.5l6.2-13.4l1.1-12.4L977.5,553.6z" fill="#98BC24"/>
      <path class="st1" d="M985.1,507.4l-7.3,16l-5.7-19.7L985.1,507.4z" fill="#D0D821"/>
      <path class="st2" d="M989.6,544.3l-1.7-3.1l-10.1-18.2l-0.3,30.6L989.6,544.3z" fill="#B4CE0D"/>
      <path class="st3" d="M982.3,570.1l-4.8-16.6l-8.4,25.8L982.3,570.1z" fill="#7DA305"/>
      <path class="st0" d="M989.6,544.3l-4.7-21.6l0.2-15.4l-7.3,15.8L989.6,544.3z" fill="#98BC24"/>
      <path class="st4" d="M949.2,579.3l6.7-21.9l13.2,21.9H949.2z" fill="#A35F05"/>
      <path class="st5" d="M955.9,557.4l13.2,21.9l8.4-25.6L955.9,557.4z" fill="#99B22F"/>
      <path class="st6" d="M935.1,569.6l20.8-12.3l-6.7,21.9L935.1,569.6z" fill="#BC540D"/>
      <path class="st7" d="M942.4,543.7l13.5,13.7l-20.8,12.3L942.4,543.7z" fill="#E56915"/>
      <path class="st8" d="M929.2,555l13.2-11.3l-7.3,25.9L929.2,555" fill="#FA7C0D"/>
      <path class="st9" d="M964,530.8l-8.1,26.6l-13.5-13.5L964,530.8z" fill="#E6DF53"/>
      <path class="st2" d="M977.5,553.6L964,530.8l-8.1,26.6L977.5,553.6z" fill="#B4CE0D"/>
      <path class="st0" d="M977.8,523.2l-0.3,30.4L963.7,531L977.8,523.2z" fill="#98BC24"/>
      <path class="st10" d="M958.6,517.8l13.7-14.1l-8.4,27.5L958.6,517.8z" fill="#DCE939"/>
      <path class="st11" d="M942.4,543.9l16.2-26.1l5.3,13L942.4,543.9z" fill="#FBEF69"/>
      <path class="st12" d="M929.2,555l4-14l5-11.3l4.2,14.1L929.2,555" fill="#FFAE5B"/>
      <path class="st13" d="M958.6,517.8l-20.3,12l4.2,14.1L958.6,517.8z" fill="#C5DA13"/>
      <path class="st2" d="M962.9,501l-4.3,16.8l-20.3,12l16.3-15.5L962.9,501" fill="#B4CE0D"/>
      <path class="st14" d="M962.9,501l9.3,2.6l-13.7,14.1L962.9,501" fill="#CDD128"/>
      <path class="st15" d="M963.8,531l8.4-27.3l5.6,19.6L963.8,531z" fill="#B8CE19"/>
      <path class="st16" d="M971.5,501.2l5.1,1.4l0.8,2.6l-8.5-2.5L971.5,501.2" fill="#B08A1B"/>
    </svg>
  </div> -->
</template>

<script>
import { isMobile, isTablet } from "mobile-device-detect"
import anime from 'animejs/lib/anime.es.js'

export default {
  computed: {
    isMobDevice() {
      return isMobile || isTablet ? true : false
    },
  },
  mounted() {
    if (!this.isMobDevice) {
      const logo = document.querySelector('.page_change_preloader .logo img')

      let tl = anime.timeline({
        easing: 'easeInOutQuad',
        // duration: 750
      })
      tl
      .add({
        targets: logo,
        opacity: [0, 1],
        scale: [0.3, 1],
        // direction: 'alternate',
        // easing: 'easeOutQuad',
        duration: 1000,
        delay: 1000,
      })
      .add({
        targets: logo,
        opacity: [1, 0],
        scale: [1, 0],
        duration: 1000,
        delay: 300,
      })
      
      // anime({
      //   targets: '.preload_bg_green',
      //   points: [
      //     { value: '1920,1080 0,1080 0,0 432.1,0 1920,0' },
      //     { value: '1920,1080 0,1080 0,0 432.1,0 677,710' },
      //     { value: '1920,1080 0,1080 0,0 0,0 677,710' },
      //     { value: '1920,1080 0,1080 0,0 0,0 0,1080' },
      //   ],
      //   easing: 'easeOutQuad',
      //   duration: 2000,
      //   delay: 2700,
      // });

      anime({
        targets: '.preload_bg_green',
        points: [
          { value: '1920,1080 0,1080 0,0 739.8,0 1723.9,0 1920,0 1920,796.8' },
          { value: '1920,1080 0,1080 0,0 262.7,0 1060.8,0 1339.9,493.8 1920,637.8' },
          // { value: '1920,1080 0,1080 0,0 613.8,0 1102.8,0 1393.9,454.8 1920,682.8' },
          // { value: '1920,1080 0,1080 0,0 613.8,0 847.8,388.8 1393.9,454.8 1920,682.8' },
          { value: '1920,1080 0,1080 0,0 613.8,0 847.8,388.8 1393.9,454.8 1920,1080' },
          { value: '1920,1080 0,1080 0,0 613.8,0 847.8,388.8 1237.8,727.8 1920,1080' },
          { value: '1920,1080 0,1080 0,0 0,0 847.8,388.8 1237.8,727.8 1920,1080' },
          { value: '1920,1080 0,1080 0,0 0,0 391.8,607.8 1237.8,727.8 1920,1080' },
          { value: '1920,1080 0,1080 0,0 0,0 391.8,607.8 1090.8,1080 1920,1080' },
          { value: '1920,1080 0,1080 0,0 0,0 0,1080 1090.8,1080 1920,1080' },
        ],
        easing: 'easeOutQuad',
        duration: 2000,
        delay: 2700,
      });

    } else {
      
    }
    // let animation
    // setTimeout(() => {
    //   animation = anime({
    //     targets: '.site_preloader path',
    //     translateX: anime.stagger([-1000, 1000]),
    //     translateY: anime.stagger(100),
    //     rotateZ: anime.stagger([0, 270]),
    //     // delay: anime.stagger(200),
    //     easing: 'easeInOutQuad',
    //     complete: function () {
    //       animation.reverse
    //     }
    //   });
    // }, 1000)
  }
}
</script>


<style lang="scss" scoped>
.page_change_preloader {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
  z-index: 1000;
  // opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  &.green {
    .preload_bg_green {
      fill:#B4CE0D;
    }
  }
  &.orange {
    .preload_bg_green {
      fill:#FA7C0D;
    }
  }
  svg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
  .logo {
    position: relative;
    z-index: 10;
  }
}
.preload_bg_green {
  fill:#000;
}
// .site_preloader {
//   position: fixed;
//   z-index: 1000;
//   top: 0;
//   right: 0;
//   bottom: 0;
//   left: 0;
//   background-color: #fff;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   svg path {
//     perspective: 300px;
//     transform: rotateY(20deg);
//   }
// }
</style>