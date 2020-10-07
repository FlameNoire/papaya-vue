<template>
  <div id="app" v-bind:class="{ 'mobile': isMobile, 'tablet': isTablet }">
    <SitePreloader v-if="!isVisited" />
    <!-- <div v-if="!isMobDevice" id="page_change_preloader" class="page_change_preloader">
      <svg version="1.1" id="layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 1920 1080" style="enable-background:new 0 0 1920 1080;" preserveAspectRatio="none">
        <g>
          <polygon class="preload_bg_green" points="1920,1080 0,1080 0,0 0,0 0,1080 "/>
        </g>
      </svg>
    </div> -->
    <Pannels v-if="!isMobDevice"></Pannels>
    <PannelsMobile v-else></PannelsMobile>
    <router-view/>
  </div>
</template>

<script>
import SitePreloader from '@/components/SitePreloader'
import MenuMainMobile from '@/components/MenuMainMobile'
import Pannels from '@/components/Pannels'
import PannelsMobile from '@/components/PannelsMobile'
import { isMobile, isTablet } from "mobile-device-detect"

export default {
  data: () => {
    return {
    }
  },
  components: {
    SitePreloader, Pannels, PannelsMobile, MenuMainMobile
  },
  computed: {
    isMobDevice() {
      return isMobile || isTablet ? true : false
    },
    isMobile() {
      return isMobile
    },
    isTablet() {
      return isTablet
    },
    isVisited() {
      return this.$store.state.isVisited
      // return true
    },
    isMenuOpen() {
      return this.$store.state.isMenuOpen
    }
  },
  mounted() {
    // const app = document.getElementById('app')
  }
}
</script>

<style lang="scss">
@import 'assets/scss/fonts.scss';

$accent-color: #e84c3d;
$main-color: #4c4c4c;
$bg-color: #292929;
$bg-acc: #f7f7f7;
$border-color: #666666;
$text-color: #ffffff;
$title_color: #4b4b4b;
$select_color: #9d9d9d;

html, body {
  height: 100%;
}
html {
  font-size: 10px !important;
  scroll-behavior: smooth;
}
body {
  //display: flex;
  //flex-direction: column;
  margin: 0;
  width: 100%;
  font-family: 'Sf Pro Display', 'Arial', sans-serif;
  font-size: 14px;
  line-height: 1.2;
  font-weight: 400;
  color: #000;
  background-color: #fff;
  scroll-behavior: smooth;
  scrollbar-width: none;
  /* width */
  &::-webkit-scrollbar {
    width: 0;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #a1a1a1;
    border-radius: 10px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #999;
  }
}

* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.wrapper {
  position: relative;
  overflow: hidden;
  //flex: 1 0 auto;
}

img {
  max-width: 100%;
  height: auto;
}
ul {
  padding: 0;
  margin: 0; }
ul li {
  list-style: none; }

a {
  color: inherit;
  text-decoration: none;
  &:hover, &:focus {
    text-decoration: none;
    color: inherit;
    outline: none;
  }
  transition: all .3s;
  &:hover {
    transition: all .3s;
  }
}
p, h1,h2,h3,h4,h5 {
  margin: 0;
}
input, textarea {
  padding: 1rem;
  outline: none;
  border: none;
  border-bottom: 1px solid #000;
  border-radius: 0px!important;
  background-color: transparent;
}
button {
  border: none;
  outline: none;
}
img {
  min-height: 1px;
  min-width: 1px;
}

.wrapper {
  min-width: 320px;
}
.line-through {
  text-decoration: line-through;
}
.underline {
  text-decoration: underline;
}
.uppercase {
  text-transform: uppercase;
}
.bold {
  font-weight: 900;
}
.text-light {
  font-weight: 300;
}
.text-thin {
  font-weight: 200;
}

.buttons_wrap {
  display: flex;
  align-items: center;
}
.buttons {
  padding: 1rem 3rem;
  height: 5.6rem;
  color: #fff;
  font-size: 1.8rem;
  line-height: 21px;
  text-transform: uppercase;
  text-align: center;
  background-color: #000;
  border: 1px solid #000;
  border-radius: 10em;
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  // backface-visibility: hidden;
  // justify-content: center;
  &:hover, &:focus {
    color: #000;
    background-color: #fff;
    .icon {
      flex-shrink: 0;
      img {
        display: block;
        transition: all .2s;
        &:nth-child(1) {
          opacity: 0;
        }
        &:nth-child(2) {
          opacity: 1;
        }
      }
    }
  }
  .icon {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    height: 15px;
    width: 15px;
    margin-right: 3rem;
    img {
      max-width: 99%;
      position: absolute;
      top: 0;
      left: 0;
      flex-shrink: 0;
      transition: all .2s;
      &:nth-child(1) {
        opacity: 1;
      }
      &:nth-child(2) {
        opacity: 0;
      }
    }
  }
}

#app {
  width: 100%;
  overflow: hidden;
  // opacity: 0;
}

.page_change_preloader {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
  z-index: 1000;
  // opacity: 0;
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
    position: relative;
    width: 100%;
    height: 100%;
  }
}
.preload_bg_green {
  fill:#B4CE0D;
}

.contacts {
  img {
    display: block;
  }
  ul {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
  }
  li {
    position: relative;
    margin-right: 4.5rem;
    display: flex;
    align-items: center;
    &:last-child {
      margin-left: 6.5rem;
      margin-right: 0;
    }
    &:hover {
      .info-hover {
        width: 185px;
        opacity: 1;
        transition: width .5s;
      }
      .icon {
        &::before {
          opacity: 1;
          transition: all .5s;
        }
        img {
          transition: all .5s;
          &:nth-child(1) {
            opacity: 0;
          }
          &:nth-child(2) {
            opacity: 1;
          }
        }
      }
    }
    &.skype {
      &:hover {
        .info-hover {
          width: 125px;
        }
      }
    }
    &.email {
      &:hover {
        .info-hover {
          width: 135px;
        }
      }
    }
    &.chat {
      &:hover {
        .info-hover {
          width: 70px;
        }
      }
    }
    &.brief {
      .info-hover {
        // margin-top: -3px;
      }
      &:hover {
        .info-hover {
          width: 185px;
          // margin-top: -3px;
        }
      }
    }
    .info-hover {
      padding-left: 2rem;
      height: 40px;
      width: 0.1px;
      overflow: hidden;
      font-size: 15px;
      line-height: 22px;
      white-space: nowrap;
      transition: width .5s;
      opacity: 0;
      display: flex;
      align-items: center;
      a {
        margin-left: 6px;
      }
    }
    span {
      margin-left: 6px;
    }
  }

  .icon {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 15px;
    width: 15px;
    &::before {
      position: absolute;
      display: block;
      content: '';
      height: 31px;
      width: 31px;
      top: 50%;
      left: 50%;
      margin-top: -16px;
      margin-left: -16px;
      background: #282828;
      border-radius: 50%;
      opacity: 0;
      transition: all .5s;
    }
    img {
      position: absolute;
      z-index: 10;
      max-width: none;
      top: 50%;
      left: 50%;
      flex-shrink: 0;
      transition: all .5s;
      &:nth-child(1) {
        opacity: 1;
        margin-top: -8px;
        margin-left: -8px;
      }
      &:nth-child(2) {
        opacity: 0;
        margin-top: -8px;
        margin-left: -8px;
      }
    }
  }
}

.social {
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    li {
      margin-right: 4.5rem;
      &:last-child {
        margin-right: 0;
      }
    }
  }
  .icon {
    margin-right: 15px;
    display: block;
    width: 15px;
    height: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      height: 100%;
      width: auto;
    }
  }
}

.section {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 0px 6rem;
  z-index: 20;
}
.s_title {
  position: relative;
  font-size: 6rem;
  line-height: 7.2rem;
  font-weight: 700;
  text-transform: uppercase;
}
.page {
  padding: 11rem 24rem 11.5rem;
  font-size: 1.8rem;
}
.page_header {
  margin-bottom: 6rem;
}
.page_title {
  margin-bottom: 1px;
  font-weight: bold;
  font-size: 6rem;
  line-height: 7.2rem;
  text-transform: uppercase;
}
.page_title_caption {
  font-size: 2.5rem;
  line-height: 3.6rem;
}

.list_default {
  font-size: 1.8rem;
  line-height: 2.1rem;
  color: #000;
  li {
    position: relative;
    margin-bottom: 2.5rem;
    padding-left: 6.3rem;
    &:last-child {
      margin-bottom: 0;
    }
    &::before {
      position: absolute;
      display: block;
      content: '';
      top: 50%;
      left: 0;
      margin-top: -1px;
      height: 2px;
      width: 2.3rem;
      background: #000;
    }
  }
}

@media (max-width: 1900px) {
  html {
    font-size: 8.5px !important;
  }

}

@media (max-width: 1599px) {
  html {
    font-size: 8px !important;
  }
  .contacts .icon:after {
    background-size: 13px;
  }
  .social .icon {
    // height: 13px;
    img {}
  }
}

@media (max-width: 1439px) {
  html {
    font-size: 7.1px !important;
  }
}

@media (max-width: 1365px) {
  .page {
    padding-left: 100px;
    padding-right: 100px;
  }
  .social .icon {
    margin-right: 0;
  }
  .social ul li {
    margin-right: 20px;
  }

  .mobile, .tablet {
    
    .contacts li {
      margin-right: 3rem;
      .info-hover {
        display: none;
      }
    }
    .contacts li:last-child {
      margin-left: 0;
      margin-right: 0;
    }
    .contacts {
      position: relative;
      left: auto;
      margin-left: 0;
      li {
        margin-right: 5rem;
      }

      .icon {
        height: 1.5rem;
        width: 1.5rem;
        &::before {
          width: 3.1rem;
          height: 3.1rem;
          margin-left: -1.6rem;
          margin-top: -1.6rem;
        }
        img {
          position: absolute;
          max-width: none;
          width: 100%;
          top: 50%;
          left: 50%;
          flex-shrink: 0;
          &:nth-child(1) {
            opacity: 1;
            margin-top: -0.8rem;
            margin-left: -0.8rem;
          }
          &:nth-child(2) {
            opacity: 0;
            margin-top: -0.8rem;
            margin-left: -0.8rem;
          }
        }
      }
    }

    .social {
      ul {
        li {
          margin-right: 5rem;
          &:last-child {
            margin-right: 0;
          }
        }
      }
      .icon {
        height: 1.5rem;
        width: 1.5rem;
      }
    }
    
  }
}
@media (min-width: 992px) and (max-width: 1366px) {
  .mobile, .tablet {
    .section {
      padding-left: 40px;
      padding-right: 40px;
      padding-top: 70px;
      padding-bottom: 70px;
      height: 100vh;
    }
    .s_title {
      font-size: 45px;
      line-height: 45px;
      margin-bottom: 45px;
    }
    .buttons {
      padding: 15px 45px;
      height: 63px;
      width: 300px;
      font-size: 21px;
      line-height: 26px;
      .icon {
        height: 25px;
        width: 25px;
      }
      img {
        width: 25px;
      }
    }
    .page {
      padding-top: 100px;
    }
    .contacts li {
      margin-right: 3rem;
      .info-hover {
        display: none;
      }
    }
    .contacts li:last-child {
      margin-left: 0;
      margin-right: 0;
    }
    .contacts {
      position: relative;
      left: auto;
      margin-left: 0;
      li {
        margin-right: 100px;
      }

      .icon {
        height: 20px;
        width: 20px;
        &::before {
          width: 41px;
          height: 41px;
          margin-left: -21px;
          margin-top: -20px;
        }
        img {
          position: absolute;
          max-width: none;
          width: 100%;
          top: 50%;
          left: 50%;
          flex-shrink: 0;
          &:nth-child(1) {
            opacity: 1;
            margin-top: -10px;
            margin-left: -10px;
          }
          &:nth-child(2) {
            opacity: 0;
            margin-top: -10px;
            margin-left: -10px;
          }
        }
      }
    }

    .social {
      ul {
        li {
          margin-right: 100px;
          &:last-child {
            margin-right: 0;
          }
        }
      }
      .icon {
        height: 20px;
        width: 20px;
      }
    }
  }
}
@media (max-width: 991px) {
  html {
    height: auto;
    font-size: 15px !important;
  }
  body {
    height: auto;
  }
  .section {
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 70px;
    padding-bottom: 70px;
    height: 100vh;
  }
  .s_title {
    font-size: 3rem;
    line-height: 3rem;
    margin-bottom: 3rem;
  }
  .buttons {
    height: 4.2rem;
    // width: 20rem;
    font-size: 1.4rem;
    line-height: 1.7rem;
    display: flex;
    .icon {
      height: 1.5rem;
      width: 1.5rem;
    }
    img {
      width: 100%;
    }
  }
  .page {
    padding-top: 115px;
    padding-left: 20px;
    padding-right: 20px;
  }
  .page_title {
    font-size: 3rem;
    line-height: 3rem;
    margin-bottom: 5rem;
  }
  .page_title_caption {
    font-size: 1.8rem;
    line-height: 120%;
  }
  .list_default {
    font-size: 1.6rem;
    line-height: 1.9rem;
    li {
      margin-bottom: 2rem;
      padding-left: 4.3rem;
    }
  }
}
@media (max-width: 767px) {
  html {
    font-size: 10px !important;
  }
  .page {
    padding-top: 70px;
  }
  .section {
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 56px;
    padding-bottom: 56px;
  }
}
@media (max-width: 370px) {
  html {
    font-size: 8px !important;
  }
}
</style>
