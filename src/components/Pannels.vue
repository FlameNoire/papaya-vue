<template>
  <div class="papaya_ui_wrap" v-bind:class="{ 'home_page_nav': $route.path == '/', 'page_contacts_nav': $route.path == '/contact' }">

    <div class="panel--fixed panel--top" :class="{'top_view' : activeScreen == 1}">
      <!-- <router-link to="/" class="logo" @click.native="scrollTop"><img src="@/assets/img/logo_papaya.svg" alt=" "></router-link> -->
      <router-link to="/" class="logo" @click.native="scrollTop"><img src="@/assets/img/logo_papaya.svg" alt=" "></router-link>
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
            <a href="#" class="icon ic-chat" @click.prevent="openRequestForm">
              <img src="@/assets/img/chat.svg" alt=" ">
              <img src="@/assets/img/chat-white.svg" alt=" ">
            </a>
            <div class="info-hover">
              <a href="#" @click.prevent="openRequestForm">{{ $t('pannels.t7') }}</a>
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
      <a href="#" class="menu_btn" @click.prevent="menuToggle"><img src="@/assets/img/burger.svg" alt=" "></a>
    </div>

    <div v-if="$route.path == '/'" class="panel--fixed panel--right">
      <ul class="pagination">
        <li v-for="(item, index) in pagination" :key="item" :class="{ active: paginationActive - 1 == index }">
          <a :href="'#screen_' + index" @click.prevent="paginationHandler(index)">{{item}}</a>
        </li>
      </ul>
    </div>

    <div class="panel--fixed panel--bottom">
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
      <a href="#" v-if="paginationActive == 5" class="down_btn down_btn--up scroll-btn" @click.prevent="scrollTop"><img src="@/assets/img/arrow_down.svg" alt=" "></a>
      <a href="#" v-if="paginationActive < 5" class="down_btn scroll-btn" @click.prevent="scrollDown"><img src="@/assets/img/arrow_down.svg" alt=" "></a>
      <LangSelect></LangSelect>
    </div>

    <div v-if="$route.path != '/portfolio/works'" class="panel--fixed panel--left">
      <ul v-if="$route.path == '/'" class="breadcrumb">
        <li><a href="/" @click.prevent="$store.commit('activeScreenSetter', 1)">{{ $t('pannels.t1') }}</a></li>
        <li v-if="activeScreen == 2"><a href="/" @click.prevent>{{ $t('pannels.t2') }}</a></li>
        <li v-if="activeScreen == 3"><a href="/" @click.prevent>{{ $t('pannels.t3') }}</a></li>
        <li v-if="activeScreen == 4"><a href="/" @click.prevent>{{ $t('pannels.t4') }}</a></li>
        <li v-if="activeScreen == 5"><a href="/" @click.prevent>{{ $t('pannels.t5') }}</a></li>
      </ul>
      <ul v-else-if="$route.path.indexOf('/blog/') == 0" class="breadcrumb blog">
        <li><router-link to="/" @click="$store.commit('activeScreenSetter', 1)">{{ $t('pannels.t1') }}</router-link></li>
        <li><router-link to="/blog">{{ $t('pannels.t6') }}</router-link></li>
        <li v-if="$route.params.postTitle"><a href="#" @click.prevent>{{$route.params.postTitle}}</a></li>
        <!-- <li><a href="#" @click.prevent>{{$route.meta.breadcrumb}}</a></li> -->
      </ul>
      <ul v-else class="breadcrumb">
        <li><router-link to="/" @click="$store.commit('activeScreenSetter', 1)">{{ $t('pannels.t1') }}</router-link></li>
        <li><a href="#" @click.prevent>{{breadcrumb}}</a></li>
      </ul>
    </div>
    <transition @enter="menuFadeIn" @leave="menuFadeOut" appear>
      <MenuMain v-show="isMenuOpen" :class="{'active' : isMenuOpen}"></MenuMain>
    </transition>
  </div>
</template>

<script>
import MenuMain from '@/components/MenuMain'
import LangSelect from '@/components/LangSelect'
import anime from 'animejs/lib/anime.es.js'

export default {
  components: { 
    MenuMain, LangSelect
  },
  data: () => {
    return {
      pagination: ['01', '02', '03', '04', '05']
    }
  },
  computed: {
    isMenuOpen() {
      return this.$store.state.isMenuOpen
    },
    activeScreen() {
      return this.$store.state.activeScreen
    },
    paginationActive() {
      return this.$store.state.activeScreen
    },
    breadcrumb() {
      return this.$i18n.t(this.$route.meta.breadcrumb)
    },
    postTitle() {}
  },
  methods: {
    menuToggle() {
      this.$store.commit('menuToggle');
    },
    scrollDown() {
      this.$store.commit('scrollHashPush', this.activeScreen)
      this.$store.commit('activeScreenIncr');
    },
    scrollTop() {
      this.$store.commit('scrollHashPush', this.activeScreen)
      this.$store.commit('activeScreenSetter', 1)
    },
    paginationHandler(index) {
      this.$store.commit('scrollHashPush', this.activeScreen)
      index += 1
      this.$store.commit('activeScreenSetter', index)
    },

    menuFadeOut(el, done) {
      // document.querySelector('.main_menu').classList.remove('active')
      anime({
        targets: '.main_menu_wrap',
        opacity: [1, 0],
        easing: 'linear',
        duration: 1000,
        complete: function() {
          done()
        }
      })
      anime({
        targets: '.bg_papaya',
        opacity: [1, 0],
        easing: 'linear',
        duration: 1000,
      })
      anime({
        targets: '.image_text',
        opacity: [1, 0],
        easing: 'linear',
        duration: 1000,
      })
      
      anime({
        targets: '.bg_grad',
        opacity: [1, 0],
        easing: 'linear',
        duration: 1000,
      })
    },
    menuFadeIn(el) {
      // el.classList.add('active')
      anime({
        targets: '.main_menu_wrap',
        opacity: [0, 1],
        easing: 'linear',
        duration: 500,
        delay: 500
      })
      
      anime({
        targets: '.bg_papaya',
        opacity: [0, 1],
        easing: 'linear',
        duration: 100,
      })
      anime({
        targets: '.image_text',
        opacity: [0, 1],
        easing: 'linear',
        duration: 100,
      })
      
      anime({
        targets: '.bg_grad',
        opacity: [0, 1],
        easing: 'linear',
        duration: 100,
      })
    },
    openRequestForm() {
      if (this.$route.path == '/') {
        this.$store.commit('activeScreenSetter', 5)
        this.$store.commit('showRequestFormToggler')
      } else {
        this.$store.commit('showRequestFormToggler')
        this.$router.push('/contact')
      }
    }
  }
}
</script>

<style lang="scss">
  .home_page_nav {
    .panel--top.top_view .logo {
      opacity: 1;
      transform: translateX(-150px);
      z-index: 20;
      transition: all .6s .5s;
    }
    .panel--top.top_view .contacts {
      left: 4rem;
      margin-left: 0;
      transition: all .7s 0s ease-out;
    }
    .down_btn {
      display: flex;
    }
    // .panel--top.top_view .logo {
    //   transform: none !important;
    //   width: 3.7rem;
    // }
    // .panel--top.top_view .contacts {
    //   left: 50%;
    //   margin-left: -18.5rem;
    // }
    // .down_btn {
    //   display: none !important;
    // }
  }
  .papaya_ui_wrap {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 50;
    background-color: #fff;
    &.home_page_nav, &.page_contacts_nav {
      background-color: transparent;
    }
  }
  .panel {
    &--fixed {
      position: fixed;
    }
    &--top {
      position: relative;
      padding: 2rem 4rem;
      height: 9.5rem;
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      justify-content: space-between;
      top: 0;
      right: 0;
      left: 0;
      z-index: 50;
      .logo {
        width: 3.7rem;
        opacity: 1;
        transform: translateX(0);
        transition: all 1s .3s;
        img {
          display: block;
        }
      }
      .menu_btn {
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .contacts {
        position: absolute;
        left: 50%;
        margin-left: -18.5rem;
        transition: all .7s .6s ease-in-out;
      }
    }
    &--right {
      top: 0;
      right: 0;
      height: 100vh;
      width: 7.2rem;
      padding-left: 4px;
      z-index: 40;
      .pagination {
        padding-left: 1.2rem;
        font-size: 14px;
        font-weight: 200;
        display: flex;
        flex-direction: column;
        li {
          position: relative;
          margin: 2rem 0;
          width: 17px;
          height: 2.4rem;
          display: flex;
          &:after {
            display: block;
            position: absolute;
            content: '';
            width: 2rem;
            height: 1rem;
            top: -2.5rem;
            left: -2px;
            background: url("../assets/img/palochka_malenkaya.svg") no-repeat center;
            background-size: cover;
          }
          &:first-child:after {
            display: none;
          }
          &.active {
            margin-top: 0;
            margin-bottom: 0.5rem;
            padding-top: 0px;
            padding-bottom: 0;
            padding-left: 1px;
            font-weight: 300;
            font-size: 2rem;
            &:after {
              display: none;
            }
            a {
              transform: rotateZ(0deg) translateX(-6px);
              font-size: 2rem;
              transition: all .2s;
            }
            &+li:after {
              display: none;
            }
          }
          a {
            position: absolute;
            top: 50%;
            left: 50%;
            margin-left: -8px;
            margin-top: -7px;
            line-height: 2rem;
            display: inline-block;
            line-height: 1;
            transform: rotateZ(90deg) translateX(0);
          }
          span {
            font-size: 14px;
          }
        }
      }
    }
    &--bottom {
      padding: 3rem 4rem 3.5rem;
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      justify-content: space-between;
      bottom: 0;
      left: 0;
      width: 100%;
      z-index: 50;
    }
    &--left {
      top: 0;
      left: 0;
      width: 16.9rem;
      height: 100vh;
      z-index: 40;
      overflow: hidden;
      pointer-events: none;
      .breadcrumb {
        padding-right: 3rem;
        padding-top: 4.3rem;
        white-space: nowrap;
        width: auto;
        max-width: none;
        text-transform: lowercase;
        transform: rotateZ(-90deg) translateY(-6rem);
        pointer-events: auto;
        display: flex;
        justify-content: center;
        li {
          padding-left: 1.5rem;
          padding-right: 1.5rem;
          position: relative;
          font-weight: 200;
          font-size: 2rem;
          line-height: 24px;
          &:after {
            display: block;
            position: absolute;
            content: '';
            width: 17px;
            height: 17px;
            top: 6px;
            left: -8px;
            background: url("../assets/img/palochka_malenkaya.svg") no-repeat center;
            background-size: cover;
            transform: rotateZ(-40deg)
          }
          &:first-child:after {
            display: none;
          }
          &:last-child {
            a {
              cursor: default;
              &:after {
                display: none;
              }
            }
          }
          a {
            position: relative;
            display: block;
            &:after {
              display: block;
              position: absolute;
              content: '';
              width: 0;
              height: 1px;
              bottom: 0;
              left: 0;
              background: #999;
              transition: all .5s;
              // transform: rotateZ(-40deg)
            }
            &:hover {
              &:after {
                width: 100%;
                transition: all .5s;
              }
            }
          }
        }
      }
    }
    &--right, &--left {
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      justify-content: center;
    }
  }
  
  .down_btn {
    position: absolute;
    left: calc(50% - 14px);
    height: 20px;
    z-index: 999;
    display: none;
    align-items: center;
    &--up {
      transform: rotateZ(180deg);
    }
    img {
      width: 2.9rem;
    }
  }
  
  @media (max-width: 1599px) {

  }
  @media (max-width: 1439px) {
    .panel--bottom .lang_btn {
      font-size: 16px;
    }
  }
  @media (max-width: 1365px) {

  }
</style>