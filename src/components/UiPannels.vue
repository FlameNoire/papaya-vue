<template>
  <div class="papaya_ui_wrap">
    <div class="panel--fixed panel--top" :class="{'top_view' : activeScreen == 1}">
      <router-link to="/" class="logo"><img src="@/assets/img/logo_papaya.svg" alt=" "></router-link>
      <div class="contacts">
        <ul>
          <li class="phones">
            <a href="#" class="icon ic-phone"></a>
            <div class="info-hover">
              <span>VIBER:</span>
              <a href="tel:+380630305858">+38(063)030-58-58</a>
              <span class="slash">\</span>
              <a href="tel:+380965507129">+38(096)550-71-29</a>
              <span class="slash">\</span>
              <a href="tel:+380996550686">+38(099)655-06-86</a>
            </div>
          </li>
          <li class="skype">
            <a href="tel:papaya_web" class="icon ic-skype"></a>
            <div class="info-hover">
              <a href="tel:papaya_web">papaya_web</a>
            </div>
          </li>
          <li  class="email h-sm">
            <a href="#" class="icon ic-mail"></a>
            <div class="info-hover">
              <a href="mailto:info@papaya.net.ua">info@papaya.net.ua</a>
            </div>
          </li>
          <li class="chat">
            <a href="#" class="icon ic-chat"></a>
            <div class="info-hover">
              <a href="#">Chat</a>
            </div>
          </li>
          <li class="brief h-sm">
            <a href="#" class="icon ic-brief"></a>
            <div class="info-hover">
              <a href="#">Online Brief</a>
            </div>
          </li>
        </ul>
      </div>
      <a href="#" class="menu_btn" @click.prevent="menuToggle"><img src="@/assets/img/burger.svg" alt=" "></a>
    </div>
    <div class="panel--fixed panel--right">
      <ul class="pagination">
        <li v-for="(item, index) in pagination" :key="item" :class="{ active: paginationActive - 1 == index }">
          <a :href="'#screen_' + index" @click.prevent="paginationHandler(index)">{{item}}</a>
        </li>
        <!-- <li><a href="#screen_2">02</a></li>
        <li class="active"><a href="#screen_3">03</a></li>
        <li><a href="#screen_4">04</a></li>
        <li><a href="#screen_5">05</a></li> -->
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
      <a href="#" v-if="paginationActive == 5" class="down_btn down_btn--up scroll-btn" @click="scrollTop"><img src="@/assets/img/arrow_down.svg" alt=" "></a>
      <a href="#" v-if="paginationActive < 5" class="down_btn scroll-btn" @click="scrollDown"><img src="@/assets/img/arrow_down.svg" alt=" "></a>
      <a href="#" class="lang_btn">En</a>
    </div>
    <div class="panel--fixed panel--left">
      <ul class="breadcrumb">
        <li><a href="home.html">home</a></li>
        <!-- <li><a href="home.html">portfolio</a></li> -->
      </ul>
    </div>
    <MenuMain v-show="isMenuOpen"></MenuMain>
  </div>
</template>

<script>
import MenuMain from '@/components/MenuMain'

export default {
  components: { 
    MenuMain 
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
    }
  }
}
</script>

<style lang="scss">

  
  .panel {
    &--fixed {
      position: fixed;
    }
    &--top {
      position: relative;
      padding: 3rem 4rem;
      height: 10.8rem;
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
        transform: translate3d(0, 0, 0);
        transition: all .5s;
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
        transition: all .5s ease-out;
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
        padding-right: 40px;
        font-size: 2rem;
        font-weight: 200;
        li {
          position: relative;
          padding: 2rem 0;
          &:after {
            display: block;
            position: absolute;
            content: '';
            width: 2rem;
            height: 1rem;
            top: -4px;
            left: 1px;
            background: url("../assets/img/palochka_malenkaya.svg") no-repeat center;
            background-size: cover;
          }
          &:first-child:after {
            display: none;
          }
          &.active {
            padding-top: 0px;
            padding-bottom: 0;
            padding-left: 1px;
            font-weight: 300;
            &:after {
              display: none;
            }
            a {
              padding-top: 2px;
              padding-bottom: 0;
              transform: rotateZ(0deg);
              font-size: 2rem;
              transition: all .1s;
              padding-left: 2px;
            }
            &+li:after {
              display: none;
            }
          }
          a {
            display: inline-block;
            line-height: 2.7rem;
            transform: rotateZ(90deg);
          }
          span {
            font-size: 14px;
          }
        }
      }
    }
    &--bottom {
      padding: 3rem 4rem;
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      justify-content: space-between;
      bottom: 0;
      left: 0;
      width: 100%;
      z-index: 50;
      .lang_btn {
        display: block;
        text-transform: uppercase;
        font-size: 1.7rem;
        line-height: 20px;
      }
    }
    &--left {
      top: 0;
      left: 0;
      width: 19rem;
      height: 100vh;
      z-index: 40;
      overflow: hidden;
      pointer-events: none;
      .breadcrumb {
        padding-top: 2.3rem;
        white-space: nowrap;
        max-width: 500%;
        width: auto;
        transform: rotateZ(-90deg) translateY(-6rem);
        pointer-events: auto;
        li {
          display: inline-block;
          padding-left: 1.5rem;
          padding-right: 1.5rem;
          position: relative;
          font-weight: 300;
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
          a {
            display: inline-block;
          }
        }
      }
    }
    &--right, &--left {
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      justify-content: space-around;
    }
  }
  .panel--top {
    &.top_view {
      .logo {
        width: 6.1rem;
        opacity: 1;
        transform: translateY(100px);
        transform: translate3d(46.2vw, 19.8rem, 0);
      }
      .contacts {
        left: 4rem;
        margin-left: 0;
      }
    }
  }
  
  .down_btn {
    position: absolute;
    left: calc(50% - 14px);
    height: 20px;
    z-index: 999;
    display: flex;
    align-items: center;
    &--up {
      transform: rotateZ(180deg);
    }
    img {
      width: 2.9rem;
    }
  }
  @media (max-width: 1900px) {
    .panel--right .pagination li {
    }
  }
  @media (max-width: 1599px) {
    .panel--right .pagination li {
    }
  }

  @media (max-width: 1439px) {
    .panel--bottom .lang_btn {
      font-size: 14px;
    }
  }
</style>