<template>
  <div class="main_menu" :class="{'on_home_top' : activeScreen == 1}">
    <div class="trgl-1"><img src="@/assets/img/trgl-19.svg" alt=" "></div>
    <div class="trgl-2"><img src="@/assets/img/trgl-20.svg" alt=" "></div>
    <div class="main_menu_wrap">
      <div class="header">
        <div class="panel--top">
          <div class="contacts">
            <ul>
              <li class="phones">
                <a href="tel:+380630305858" class="icon ic-phone">
                  <img src="@/assets/img/phone.svg" alt=" ">
                  <img src="@/assets/img/phone-white.svg" alt=" ">
                </a>
              </li>
              <li class="skype">
                <a href="https://t.me/serg_papaya" class="icon ic-skype">
                  <img src="@/assets/img/tg.svg" alt=" ">
                  <img src="@/assets/img/tg-white.svg" alt=" ">
                </a>
              </li>
              <li class="chat">
                <a href="#" class="icon ic-chat" @click.prevent="openRequestForm">
                  <img src="@/assets/img/chat.svg" alt=" ">
                  <img src="@/assets/img/chat-white.svg" alt=" ">
                </a>
              </li>
              <li class="brief">
                <router-link class="icon ic-brief" to="/brief" @click.native="menuToggle">
                  <img src="@/assets/img/brief.svg" alt=" ">
                  <img src="@/assets/img/brief-white.svg" alt=" ">
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <a href="#" class="menu_close" @click.prevent="menuToggle"><span></span><span></span></a>
      </div>
      <nav class="navigation">
        <ul>
          <li><router-link to="/" @click.native="menuToggle">{{ $t('pannels.t1') }}</router-link></li>
          <li><router-link to="/services" @click.native="menuToggle">{{ $t('menu.menu1') }}</router-link></li>
          <li><router-link to="/portfolio" @click.native="menuToggle">{{ $t('menu.menu2') }}</router-link></li>
          <li><router-link to="/about" @click.native="menuToggle">{{ $t('menu.menu3') }}</router-link></li>
          <li><router-link to="/contact" @click.native="menuToggle">{{ $t('menu.menu4') }}</router-link></li>
          <li><router-link to="/blog" @click.native="menuToggle">{{ $t('menu.menu5') }}</router-link></li>
        </ul>
      </nav>
    </div>
    
    <div class="main_menu_bottom">
      <LangSelect></LangSelect>
      <div class="social">
        <ul>
          <li>
            <a href="https://www.facebook.com/groups/1594771644150298/" class="icon ic-fb" target="_blank" @click="menuToggle"><img src="@/assets/img/facebook.svg" alt=" "></a>
          </li>
          <li>
            <a href="https://www.instagram.com/papaya_web_agency/" class="icon ic-inst" target="_blank" @click="menuToggle"><img src="@/assets/img/instagram.svg" alt=" "></a>
          </li>
          <li>
            <a href="https://twitter.com/web_papaya?lang=en" class="icon ic-tw" target="_blank" @click="menuToggle"><img src="@/assets/img/twitter.svg" alt=" "></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import LangSelect from '@/components/LangSelect'

export default {
  components: { 
    LangSelect
  },
  computed: {
    activeScreen() {
      return this.$store.state.activeScreen
    },
  },
  methods: {
    menuToggle() {
      this.$store.commit('menuToggle')
    },
    openRequestForm() {
      this.$store.commit('menuToggle')

      if (this.$route.path == '/') {
        this.$store.commit('activeScreenSetter', 5)
        this.$store.commit('showRequestFormToggler')
      } else {
        this.$store.commit('showRequestFormToggler')
        this.$router.push('/contact')
      }
    }
  },
}
</script>

<style lang="scss" scoped>
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
      transform: translateX(1000px);
      opacity: 0;
    }
    100% {
      transform: translateX(0px);
      opacity: 1;
    }
  }
  @keyframes fadeInRight2{
    0% {
      transform: translateX(32vw);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
  .main_menu.on_home_top.active .contacts {
    animation: none;
    opacity: 1;
  }
  .main_menu.active {
    animation: fadeIn .5s ease-out forwards;
    .navigation {
      // opacity: 1;
      // transition: all 1s 1s;
      li {
        // animation: fadeInRight 1s ease-out forwards;
        opacity: 1;
        transition: all 1s 0s;
      }
      @for $i from 1 through 10 {
        li:nth-child(#{$i}) {
          animation-delay: 0.1s*$i;
        }
      }
    }
    .contacts {
      animation: fadeInRight2 1s ease-out forwards;
    }
  }

  .papaya_moving {
    position: absolute;
    top: 10px;
    left: 60px;
    width: 250px;
    height: 150px;
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
    .trgl-1 {
      position: absolute;
      top: 50%;
      right: 1rem;
      margin-top: -18rem;
    }
    .trgl-2 {
      position: absolute;
      bottom: 50%;
      left: 1rem;
      margin-bottom: -13rem;
    }
    .header {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 56px;
    }
    .panel--top .contacts {
      position: relative;
      left: auto;
      margin-left: 0;
      opacity: 0;
      transition: all 1s;
    }
  }
  .main_menu_wrap {
    padding-right: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    text-align: center;
  }
  .navigation {
    margin-bottom: 3rem;
    font-family: 'Sf Pro Display', sans-serif;
    font-size: 3rem;
    line-height: 3rem;
    font-weight: 700;
    text-transform: uppercase;
    // opacity: 0;
    // transition: all 1s 1s;
    li {
      margin-bottom: 4rem;
      // transform: translateX(1000px);
      opacity: 0;
      transition: all 1s .3s;
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
    padding: 5rem 0 3rem 0;
    position: absolute;
    bottom: 0;
    right: 4rem;
    // border-top: 1px solid silver;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .social {
      margin-right: 6.5rem;
      margin-left: auto;
    }
  }
  .menu_close {
    display: block;
    position: absolute;
    top: 1.7rem;
    right: 24px;
    width: 30px;
    height: 30px;
    z-index: 50;
    span {
      position: absolute;
      top: 16px;
      display: block;
      height: 2px;
      width: 32px;
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
  @media (max-width: 1439px) {

  }
  @media (max-width: 1365px) {
    .main_menu_bottom {
      right: 20px;
      padding-top: 2rem;
      padding-bottom: 3rem;
      width: calc(100% - 40px);
    }
    .main_menu_bottom .social {
      margin-left: 0;
      margin-right: 0;
    }
  }
  @media (min-width: 992px) and (max-width: 1366px) {
    .main_menu_bottom {
      right: 40px;
      padding-top: 20px;
      padding-bottom: 30px;
      width: calc(100% - 80px);
    }
    
    .main_menu_bottom .social {
      margin-left: 0;
      margin-right: 0;
    }
    
    .menu_close {
      top: 19px;
      right: 40px;
    }
    .navigation {
      font-size: 40px;
      line-height: 40px;
      li {
        margin-bottom: 40px;
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }

  @media (max-width: 991px) {
    .menu_close {
      top: 19px;
    }
  }
  @media (max-width: 767px) {
    .menu_close {
      top: 11px;
      width: 23px;
      span {
        width: 26px;
      }
    }
  }
</style>