<template>
  <div class="main_menu">
    <div class="bg_grad">
    </div>
    <div class="bg_papaya"><img src="@/assets/img/papaya_big.svg" alt=" "></div>
    <transition @enter="trglsMove">
      <div v-if="isMenuOpen" class="bg_trgls">
        <img class="trgl trgl_1" src="@/assets/img/trgl-16.svg" alt=" ">
        <svg class="path path_1" version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          viewBox="0 0 1920 1080" enable-background="new 0 0 1920 1080" preserveAspectRatio="none">
          <path fill="none" stroke="#000000" stroke-miterlimit="10" d="M-0.5,808.5c63,8,355-28,498-67c104.6-28.5,247.2-142.8,239-227 c-4-41-78.8-211.6-185.5-229.5c-88-14.7-96.1-4.9-263-14C84.9,260-43.4,252.2-51,213c-4.8-24.7,40.2-52.4,86-80 c70.8-42.6,165.6-84.3,361-117c22.8-3.8,164.5-26.5,342-9c49.2,4.9,92.7,12,108,42c25.8,50.6-44.9,133.7-69,162 c0,0-182.7,214.6-577,272c-46,6.7-75.7,11.8-135,22c-63.6,10.9-95.6,16.5-105,21C-148.3,577.7-63.8,800.5-0.5,808.5z"/>
        </svg>

        <img class="trgl trgl_2" src="@/assets/img/trgl-17.svg" alt=" ">
        <svg class="path path_2" version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          viewBox="0 0 1920 1080" enable-background="new 0 0 1920 1080" preserveAspectRatio="none">
          <path fill="none" stroke="#000000" stroke-miterlimit="10" d="M245,39c7.4,7.2,41.9,55.8,111,153c67.4,94.9,79.5,114.1,93,141 c32,64.1,55.4,110.9,55,174c-0.8,108.2-71.3,208.3-141,246c-15.1,8.2-56.6,27.7-79,38c-59.8,27.6-64.3,27-83,37 c-18.9,10.2-87.2,46.8-118,123c-4.4,10.9-41.1,101.7-2,152c59.1,75.9,281.4,47.1,381-80c61.1-78,59.9-172.5,59-238 C-8.9-97.8,153.2-50.3,245,39z"/>
        </svg>

        <img class="trgl trgl_3" src="@/assets/img/trgl-18.svg" alt=" ">
        <svg class="path path_3" version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          viewBox="0 0 1920 1080" enable-background="new 0 0 1920 1080" preserveAspectRatio="none">
          <path fill="none" stroke="#000000" stroke-miterlimit="10" d="M1559,119c-8.4,20.6-13.5,32.5-62,142c-35.3,79.9-53,119.8-54,122 c-17.4,38-72,157.6-142,244c-25.4,31.4-184.7,227.9-417,221c-34.3-1-123.5-3.3-210-63c-25-17.2-91.9-63.4-120-146 c-56.9-167.4,98.7-328.7,106-336c98.1-98.7,222.1-113.9,305-124c24.1-3,139-15.7,300,27c254.7,67.5,263.6,249.4,450.5,252.5 c44.6,0.7,99.6-23,170-115c74.9-97.9,68.8-216.1-60-299C1715.4-26.4,1607.1,0.5,1559,119z"/>
        </svg>
      </div>
    </transition>
    <div class="image_text">
      <img src="@/assets/img/papaya_title.svg" alt=" ">
    </div>
    <div class="main_menu_wrap">
      <nav class="navigation">
        <ul>
          <li><router-link to="/services" @click.native="menuToggle">{{ $t('menu.menu1') }}</router-link></li>
          <li><router-link to="/portfolio" @click.native="menuToggle">{{ $t('menu.menu2') }}</router-link></li>
          <li><router-link to="/about" @click.native="menuToggle">{{ $t('menu.menu3') }}</router-link></li>
          <li><router-link to="/contact" @click.native="menuToggle">{{ $t('menu.menu4') }}</router-link></li>
          <li><router-link to="/blog" @click.native="menuToggle">{{ $t('menu.menu5') }}</router-link></li>
        </ul>
      </nav>
    </div>
    <a href="#" class="menu_close" @click.prevent="menuToggle"><span></span><span></span></a>
    <div class="main_menu_bottom clearfix">
      <div class="contacts">
        <ul>
          <li class="phones">
            <a href="tel:+380630305858" class="icon ic-phone">
              <img src="@/assets/img/phone.svg" alt=" ">
              <img src="@/assets/img/phone-white.svg" alt=" ">
            </a>
            <div class="info-hover">
              <!-- <span>VIBER:</span> -->
              <a href="tel:+380630305858">+38 (063)030-58-58</a>
              <!-- <span class="slash">\</span> -->
            </div>
          </li>
          <li class="skype">
            <a href="skype:papaya_web?call" class="icon ic-skype">
              <img src="@/assets/img/skype.svg" alt=" ">
              <img src="@/assets/img/skype-white.svg" alt=" ">
            </a>
            <div class="info-hover">
              <a href="skype:papaya_web?call">papaya_web</a>
            </div>
          </li>
          <li  class="email h-sm">
            <a href="mailto:info@papaya-it.com" class="icon ic-mail">
              <img src="@/assets/img/mail.svg" alt=" ">
              <img src="@/assets/img/mail-white.svg" alt=" ">
            </a>
            <div class="info-hover">
              <a href="mailto:info@papaya-it.com">papaya-it.com</a>
            </div>
          </li>
          <li class="chat">
            <a href="#" class="icon ic-chat">
              <img src="@/assets/img/chat.svg" alt=" ">
              <img src="@/assets/img/chat-white.svg" alt=" ">
            </a>
            <div class="info-hover">
              <a href="#">{{ $t('pannels.t7') }}</a>
            </div>
          </li>
          <li class="brief h-sm">
            <a href="#" class="icon ic-brief">
              <img src="@/assets/img/brief.svg" alt=" ">
              <img src="@/assets/img/brief-white.svg" alt=" ">
            </a>
            <div class="info-hover">
              <a href="#">{{ $t('pannels.t8') }}</a>
            </div>
          </li>
        </ul>
      </div>
      <LangSelect></LangSelect>
      <div class="social">
        <ul>
          <li>
            <a href="https://www.facebook.com/" class="icon ic-fb" target="_blank" @click="menuToggle"><img src="@/assets/img/facebook.svg" alt=" "></a>
          </li>
          <li>
            <a href="https://www.instagram.com/" class="icon ic-inst" target="_blank" @click="menuToggle"><img src="@/assets/img/instagram.svg" alt=" "></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import anime from 'animejs/lib/anime.es.js'
import LangSelect from '@/components/LangSelect'

export default {
  components: { 
    LangSelect
  },
  computed: {
    isMenuOpen() {
      return this.$store.state.isMenuOpen
    },
  },
  methods: {
    menuToggle() {
      this.$store.commit('menuToggle');
    },
    trglsMove() {
      const trgl_1 = document.querySelector('.trgl_1')
      const trgl_2 = document.querySelector('.trgl_2')
      const trgl_3 = document.querySelector('.trgl_3')

          let path = anime.path('.path_1 path');

          anime({
            targets: trgl_1,
            translateX: path('x'),
            translateY: path('y'),
            rotateZ: '720deg',
            easing: 'linear',
            duration: 100000,
            delay: -100,
            loop: true,
          });

          let path2 = anime.path('.path_2 path');

          anime({
            targets: trgl_2,
            translateX: path2('x'),
            translateY: path2('y'),
            rotateZ: '720deg',
            easing: 'linear',
            duration: 100000,
            delay: -100,
            loop: true,
          });
          
          let path3 = anime.path('.path_3 path');

          anime({
            targets: trgl_3,
            translateX: path3('x'),
            translateY: path3('y'),
            rotateZ: '720deg',
            easing: 'linear',
            duration: 100000,
            delay: -100,
            loop: true,
          });

      
    }
  },
  // beforeUpdate() {
  //   if (this.$store.state.isMenuOpen) {
  //     const trgl_1 = document.querySelector('.trgl_1')
  //     const trgl_2 = document.querySelector('.trgl_2')
  //     const trgl_3 = document.querySelector('.trgl_3')

          

  //     anime({
  //       targets: '.trgl_1',
  //       opacity: [0, 1],
  //       easing: 'easeOutQuad',
  //       duration: 10,
  //       complete: function() {
  //         let path = anime.path('.path_1 path');

  //         anime({
  //           targets: trgl_1,
  //           translateX: path('x'),
  //           translateY: path('y'),
  //           rotateZ: '720deg',
  //           easing: 'linear',
  //           duration: 100000,
  //           delay: -100,
  //           loop: true,
  //         });
  //       }
  //     })
  //     anime({
  //       targets: '.trgl_2',
  //       opacity: [0, 1],
  //       easing: 'easeOutQuad',
  //       duration: 10,
  //       complete: function() {
  //         let path = anime.path('.path_2 path');

  //         anime({
  //           targets: trgl_2,
  //           translateX: path('x'),
  //           translateY: path('y'),
  //           rotateZ: '720deg',
  //           easing: 'linear',
  //           duration: 100000,
  //           delay: -100,
  //           loop: true,
  //         });
  //       }
  //     })
  //     anime({
  //       targets: '.trgl_3',
  //       opacity: [0, 1],
  //       easing: 'easeOutQuad',
  //       duration: 10,
  //       complete: function() {
  //         let path = anime.path('.path_3 path');

  //         anime({
  //           targets: trgl_3,
  //           translateX: path('x'),
  //           translateY: path('y'),
  //           rotateZ: '720deg',
  //           easing: 'linear',
  //           duration: 100000,
  //           delay: -100,
  //           loop: true,
  //         });
  //       }
  //     })
  //   }
  // }
}
</script>

<style lang="scss" scoped>

  .papaya_moving_img{
    animation: animationFrames linear 100s;
    animation-iteration-count: infinite;
    transform-origin: 50% 50%;
    animation-fill-mode:forwards;
  }

  @keyframes animationFrames{
    0% {
      transform:  translate(16px,10px)  ;
    }
    5% {
      transform:  translate(65px,127px)  ;
    }
    9% {
      transform:  translate(118px,2px)  ;
    }
    14% {
      transform:  translate(229px,45px)  ;
    }
    19% {
      transform:  translate(194px,116px)  ;
    }
    25% {
      transform:  translate(100px,64px)  ;
    }
    31% {
      transform:  translate(197px,8px)  ;
    }
    37% {
      transform:  translate(245px,141px)  ;
    }
    44% {
      transform:  translate(157px,112px)  ;
    }
    50% {
      transform:  translate(39px,148px)  ;
    }
    56% {
      transform:  translate(3px,79px)  ;
    }
    61% {
      transform:  translate(22px,13px)  ;
    }
    66% {
      transform:  translate(183px,32px)  ;
    }
    71% {
      transform:  translate(228px,107px)  ;
    }
    75% {
      transform:  translate(249px,58px)  ;
    }
    79% {
      transform:  translate(157px,3px)  ;
    }
    84% {
      transform:  translate(47px,57px)  ;
    }
    89% {
      transform:  translate(4px,147px)  ;
    }
    94% {
      transform:  translate(78px,135px)  ;
    }
    100% {
      transform:  translate(0px,0px)  ;
    }
    100% {
      transform:  translate(0px,0px)  ;
    }
  }

  @keyframes bounceInDown {
    from, 60%, 75%, 90%, to {
      animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    }

    0% {
      opacity: 0;
      transform: translate3d(0, -3000px, 0);
    }

    60% {
      opacity: 1;
      transform: translate3d(0, 25px, 0);
    }

    75% {
      transform: translate3d(0, -10px, 0);
    }

    90% {
      transform: translate3d(0, 5px, 0);
    }

    to {
      transform: none;
    }
  }
  @keyframes bgGradient{
    0% {
      background-position-x: -40vw;
    }
    100% {
      background-position-x: center;
    }
  }
  @keyframes fadeIn{
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes fadeInRight{
    0% {
      transform: translateX(500px);
      opacity: 0;
    }
    100% {
      transform: translateX(0px);
      opacity: 1;
    }
  }
  .main_menu.active {
    .bg_grad {
      animation: bgGradient 1s ease-in forwards;
    }
    .navigation {
      li {
        animation: fadeInRight .8s .3s ease-out forwards;
      }
      @for $i from 1 through 10 {
        li:nth-child(#{$i}) {
          animation-delay: 0.1s*$i;
        }
      }
    }
    .image_text {
      animation: fadeIn 1.3s ease-in forwards;
    }
  }
  .bg_grad {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #fff url("../assets/img/menu_bg.svg") no-repeat center;
    background-size: cover;
    img {
      width: 100%;
      height: 779px;
    }
    svg {
      width: 100%;
      height: 100%;
    }
  }
  .bg_papaya {
    position: absolute;
    z-index: 20;
    width: 23.9rem;
    top: 50%;
    left: 50%;
    margin-top: -15.5rem;
    margin-left: -12rem;
    transform: translateY(-100vh);
    animation: bounceInDown 1s .3s forwards;
  }

  .bg_trgls {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 10;
    .trgl {
      position: absolute;
      left: 0;
      top: 0;
    }
    .trgl_1 {
      width: 11.3rem;
    }
    .trgl_2 {
      width: 12.8rem;
    }
    .trgl_3 {
      width: 10.2rem;
    }
    .path {
      position: absolute;
      left: 0;
      top: 0;
      path {
        stroke: none;
      }
    }
    // .path_2 {
    //   top: -5rem;
    // }
    // .trgl_2 {
    //   top: -15rem;
    // }
  }


  .main_menu {
    position: fixed;
    padding: 3rem 4rem;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    background-color: #fff;
    //will-change: ;

    .image_text {
      padding: 3rem;
      position: absolute;
      top: calc(47% - 5rem);
      left: 8.8vw;
      // opacity: 0;
      z-index: 20;
      img {
        width: 43rem;
      }
    }

    .contacts li {
      z-index: 10;
      &:hover {
        z-index: 20;
        .info-hover {
          padding-right: 10px;
          pointer-events: unset;
        }
      }
      .icon {
        z-index: 20;
      }
      .info-hover {
        position: absolute;
        left: 19px;
        top: -13px;
        z-index: 10;
        background-color: #fff;
        pointer-events: none;
      }
    }
    
    .contacts .phones {
      &:hover {
        .info-hover {
          width: 45vw;
        }
      }
    }
    .contacts .skype {
      &:hover {
        .info-hover {
          width: 18rem;
        }
      }
    }
    .contacts .email {
      &:hover {
        .info-hover {
          width: 20rem;
        }
      }
    }
    .contacts .brief {
      &:hover {
        .info-hover {
          width: 15rem;
        }
      }
    }
  }
  .main_menu_wrap {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-end;
    align-items: center;
    padding-right: 14rem;
    position: absolute;
    z-index: 30;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    text-align: right;
  }
  .navigation {
    margin-bottom: 4rem;
    font-family: 'Sf Pro Display', sans-serif;
    font-size: 6rem;
    line-height: 7.2rem;
    font-weight: 700;
    text-transform: uppercase;
    li {
      margin-bottom: 4rem;
      // transform: translateX(500px);
      // opacity: 0;
      &:last-child {
        margin-bottom: 0;
      }
      a {
        position: relative;
        display: inline-block;
        &:after {
          display: block;
          position: absolute;
          content: '';
          width: 0%;
          height: 2px;
          bottom: 0;
          left: 0;
          background-color: #98bc24;
          transition: all .5s;
        }
        &:hover {
          &:after {
            width: 100%;
          }
        }
      }
    }
    
  }

  .main_menu_bottom {
    padding: 4.2rem 0 3.5rem 0;
    position: absolute;
    z-index: 30;
    bottom: 0;
    right: 4rem;
    width: 40.5vw;
    border-top: 1px solid silver;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .social {
      margin-right: 6.5rem;
      margin-left: auto;
    }
    .lang_btn {
      font-family: 'SF Pro Display', sans-serif;
      font-size: 1.7rem;
      line-height: 20px;
      text-transform: uppercase;
      order: 3;
    }
  }
  .menu_close {
    display: block;
    position: absolute;
    top: 3.4rem;
    right: 4rem;
    width: 22px;
    height: 22px;
    z-index: 50;
    span {
      position: absolute;
      top: 10px;
      left: -1px;
      display: block;
      height: 2px;
      width: 28px;
      background-color: #282828;
      &:nth-child(1) {
        transform: rotateZ(45deg);
      }
      &:nth-child(2) {
        transform: rotateZ(-45deg);
      }
    }
    &:hover {
      span {
        transition: all .5s;
        &:nth-child(1) {
          transform: rotateZ(315deg);
        }
        &:nth-child(2) {
          transform: rotateZ(-315deg);
        }
      }
    }
  }
  @media (max-width: 1900px) {
    .main_menu_bottom .lang_btn {
      font-size: 15px;
    }
  }
  @media (max-width: 1439px) {
    .main_menu_bottom .lang_btn {
      font-size: 14px;
    }
    .main_menu_wrap .navigation {
      font-size: 6rem;
      line-height: 7.4rem;
    }
    .main_menu .contacts .email:hover .info-hover {
      width: 35rem;
    }
    .main_menu .contacts .skype:hover .info-hover {
      width: 22rem;
    }
  }
  @media (max-width: 1365px) {
    .main_menu .contacts li:last-child {
      margin-left: 0;
    }
    .main_menu_bottom .social {
      margin-right: 4.5rem;
    }
    .main_menu .image_text img {
      width: 35rem;
    }
    .main_menu_wrap {
      padding-right: 91px;
    }
  }
</style>