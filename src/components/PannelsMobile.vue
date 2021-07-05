<template>
  <div class="papaya_ui_wrap" v-bind:class="{ 'home_page_nav': $route.path == '/' }">
    <div class="panel--top" :class="{'top_view' : pageTop}">
      <router-link to="/" class="logo" @click.native="scrollTop"><img src="@/assets/img/logo_papaya.svg" alt=" "></router-link>
      <div class="contacts">
        <ul>
          <li class="phones">
            <a href="tel:+380630305858" class="icon ic-phone">
              <img src="@/assets/img/phone.svg" alt=" ">
              <img src="@/assets/img/phone-white.svg" alt=" ">
            </a>
            <!-- <div class="info-hover">
              <a href="tel:+380630305858">+38 (063)030-58-58</a>
            </div> -->
          </li>
          <li class="skype">
            <a href="https://t.me/serg_papaya" class="icon ic-skype">
              <img src="@/assets/img/tg.svg" alt=" ">
              <img src="@/assets/img/tg-white.svg" alt=" ">
            </a>
            <!-- <div class="info-hover">
              <a href="skype:papaya_web?call">papaya_web</a>
            </div> -->
          </li>
          <li class="chat">
            <a href="#" class="icon ic-chat" @click.prevent="openRequestForm">
              <img src="@/assets/img/chat.svg" alt=" ">
              <img src="@/assets/img/chat-white.svg" alt=" ">
            </a>
            <!-- <div class="info-hover">
              <a href="#">Chat</a>
            </div> -->
          </li>
        </ul>
      </div>
      <a href="#" class="menu_btn" @click.prevent="menuToggle"><img src="@/assets/img/burger.svg" alt=" "></a>
    </div>

    
    <transition @enter="menuFadeIn" @leave="menuFadeOut" appear>
      <MenuMainMobile v-show="isMenuOpen" :class="{'active' : isMenuOpen}"></MenuMainMobile>
    </transition>
  </div>
</template>

<script>
import MenuMainMobile from '@/components/MenuMainMobile'
import anime from 'animejs/lib/anime.es.js'

export default {
  components: { 
    MenuMainMobile 
  },
  data: () => {
    return {
      pageTop: true,
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
    }
  },
  methods: {
    menuToggle() {
      this.$store.commit('menuToggle');
    },
    scrollDown() {
      this.$store.commit('activeScreenIncr');
    },
    scrollTop() {
      this.$store.commit('activeScreenSetter', 1)
    },
    paginationHandler(index) {
      index += 1
      this.$store.commit('activeScreenSetter', index)
    },
    menuFadeOut(el, done) {
      document.body.style.height = 'auto'
      document.body.style.overflow = 'visible'
      anime({
        targets: '.main_menu_wrap',
        opacity: [1, 0],
        easing: 'linear',
        duration: 500,
        complete: function() {
          done()
        }
      })
    },
    menuFadeIn(el) {
      document.body.style.height = '100vh'
      document.body.style.overflow = 'hidden'
      anime({
        targets: '.main_menu_wrap',
        opacity: [0, 1],
        easing: 'linear',
        duration: 500,
        delay: 500
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
  },

  mounted() {
    let st = window.scrollY
    document.addEventListener('scroll', function() {
      if (window.scrollY > st && st > 200) {
        document.querySelector('.panel--top').classList.remove('top_view')
      } else if (window.scrollY < st && st < 400) {
        document.querySelector('.panel--top').classList.add('top_view')
      }
      st = window.scrollY
    })
  }
}
</script>

<style lang="scss">
.mobile {
  .home_page_nav {
    .panel--top.top_view .contacts {
      left: 40px;
      // margin-left: -35px;
    }
  }
  .panel--top {
    padding: 0 20px;
  }
  .home_page_nav {
    .panel--top.top_view .logo {
      opacity: 1;
      transform: translateX(-100px);
      z-index: 20;
      margin-right: 0;
      transition: all .5s;
    }
    .panel--top.top_view .contacts {
      transition: all .5s;
    }
  }
  .papaya_ui_wrap {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 120;
    background-color: #fff;
  }
  .panel--top {
    position: relative;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 50;
    .logo {
      width: 3.7rem;
      opacity: 1;
      transform: translateX(0);
      transition: all .5s;
      &.fixed {
        width: 3.7rem;
        opacity: 1;
        transform: translate3d(0, 0, 0);
        transition: all 0s;
      }
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
      margin-left: -130px;
      transition: all .5s ease-out;
    }
  }
}


@media (max-width: 1900px) {

}
@media (max-width: 1599px) {

}
@media (max-width: 1439px) {

}
@media (max-width: 1366px) {
.mobile {
    .home_page_nav .panel--top.top_view .contacts {
    // left: -2.2rem;
    }
    .panel--top {
      height: 70px;
      justify-content: flex-start;
    }
    .panel--top .logo {
      width: 2.2rem;
      margin-right: 5rem;
    }
    .panel--top .logo.fixed {
      width: 2.1rem;
    }
    .panel--top .menu_btn {
      width: 2.8rem;
      margin-left: auto;
      img {
        width: 100%;
      }
    }
  }
}

@media (min-width: 992px) and (max-width: 1366px) {
.mobile {
    .home_page_nav .panel--top.top_view .contacts {
      // left: -4.2rem;
    }
    .panel--top {
      padding-left: 40px;
      padding-right: 40px;
      height: 70px;
      justify-content: flex-start;
    }
    .panel--top .logo {
      width: 30px;
      margin-right: 100px;
    }
    .panel--top .logo.fixed {
      width: 30px;
    }
    .panel--top .menu_btn {
      width: 40px;
      margin-left: auto;
      img {
        width: 100%;
      }
    }
  }
}
@media (max-width: 991px) {
  .mobile .home_page_nav .panel--top.top_view .contacts {
    left: 20px;
    margin-left: 0;
  }
  .mobile .panel--top .contacts {
    margin-left: -7.3rem;
  }
}
@media (max-width: 767px) {
  .mobile {
    .panel--top {
      height: 56px;
    }
  }
}
</style>