<template>
  <section id="screen_4" class="section s_fours">
    <div class="s_content">
      <h2 class="s_title">{{ $t('about.t1') }}</h2>
      <div class="text_wrap">
        <!-- <p class="text-1">
          {{ $t('about.t2') }}
          <br>
          {{ $t('about.t3') }}
        </p> -->
        <div class="text-1">
          <p>{{ $t('about.t2') }}</p>
          <p>{{ $t('about.t3') }}</p>
        </div>
        <div class="text-2">
          <p>{{ $t('about.t4') }}</p>
          <br>
          <p>{{ $t('about.t5') }}</p>
          <br>
          <p>{{ $t('about.t6') }}</p>
        </div>
      </div>
      <router-link to="/about" class="buttons btn_more">
        <i class="icon">
          <img src="@/assets/img/eye-white.svg" alt=" ">
          <img src="@/assets/img/eye.svg" alt=" ">
        </i>
        <span>{{ $t('buttons.btn4') }}</span>
      </router-link>
    </div>
    <div class="bg_image">
      <img v-if="isMobDevice" src="@/assets/img/papaya_bg-sm.png" alt=" ">
      <img v-else src="@/assets/img/papaya_bg.png" alt=" ">
      <div class="papaya_info">
        <a href="#" class="link"></a>
        <p class="text">
          Special taste for those who want to stand out in the market
        </p>
      </div>
    </div>
  </section>
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
    anime({
      targets: '.s_first',
      translateY: 0,
      duration: 500
    });
  },
  beforeDestroy() {
    anime({
      targets: '.s_first',
      translateY: '-100%',
      duration: 500
    });
  }
}
</script>

<style lang="scss">
.s_fours {
  z-index: 21;
  // position: relative;
  padding-left: 25rem;
  padding-right: 1rem;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  .bg_image {
    position: absolute;
    bottom: -87rem;
    right: 1rem;
    z-index: 0;
    width: 94.5rem;
    // opacity: 0;
    .papaya_info {
      position: absolute;
      top: 5%;
      left: 57%;
      .link {
        display: block;
        width: 15px;
        height: 15px;
        background: url("../assets/img/dot.png") no-repeat;

        &:hover ~ .text {
          display: block;
        }
      }
      .text {
        display: none;
        padding: 1rem;
        padding-left: 1.5rem;
        position: absolute;
        min-width: 15rem;
        color: #000;
        font-size: 1.8rem;
        line-height: 2.1rem;
        font-weight: 300;
        top: 7px;
        right: 2rem;
        background-color: #fff;
        border-radius: 3px;
        box-shadow: -7px 7px 16px -5px rgba(40,40,40,0.5);
      }
    }
  }
  .s_title {
    margin-bottom: 5rem;
  }
  p {
    font-weight: 200;
    font-size: 2rem;
    line-height: 2.4rem;
  }
  .text-1 {
    margin-bottom: 5rem;
    p {
      font-weight: 400;
      font-size: 2.5rem;
      line-height: 3.6rem;
    }
  }

  .btn_more {
    margin-top: 8.5rem;
    padding-left: 2.6rem;
    padding-right: 3.6rem;
    opacity: 0;
    transition: background-color .3s;
    .icon {
      top: 1px;
      width: 22px;
      margin-right: 2rem;
    }
    span {
      transition: color .3s;
    }
  }

  .s_content {
    align-self: center;
    max-width: 55%;
    max-height: 95%;
    z-index: 50;
  }
}
@media (min-width: 1900px) and (min-height: 1100px) {
  .s_fours .bg_image {
    width: 98rem;
    bottom: -90rem;
    img {
      width: 100%;
    }
  }
}
@media (max-width: 1365px) {
  .s_fours {
    padding-left: 100px;
  }
  .s_fours .bg_image {
    width: 80rem;
    bottom: -74rem;
  }
}

@media (max-width: 1199px) {

}
@media (min-width: 992px) and (max-width: 1366px) {
  .mobile {
    .s_fours {
      position: relative;
      padding-left: 40px;
      padding-right: 40px;
      height: auto;
      height: 100vh;
      overflow: visible;
      .bg_image {
        position: absolute;
        bottom: auto;
        top: 2vh;
        right: 0;
        z-index: 0;
        width: auto;
        height: 198vh;
        pointer-events: none;
        img {
          height: 100%;
          width: auto;
        }
        .papaya_info {
          display: none;
        }
      }
      .s_title {
        margin-bottom: 45px;
      }
      p {
        font-weight: 200;
        font-size: 24px;
        line-height: 144%;
      }
      .text-1 {
        margin-bottom: 27px;
        p {
          width: 100%;
          font-size: 27px;
          line-height: 128%;
          font-weight: 400;
        }
      }

      .btn_more {
        margin-top: 45px;
        padding: 15px 25px;
        width: 300px;
        opacity: 1;
        .icon {
          width: 35px;
          height: 23px;
          margin-right: 45px;
        }
      }
      .s_content {
        width: 70vw;
        position: relative;
        max-width: none;
        max-height: none;
        z-index: 50;
      }
    }
  }
}
@media (max-width: 991px) {
  .s_fours {
    position: relative;
    padding-left: 40px;
    padding-right: 40px;
    height: auto;
    // height: 100vh;
    overflow: visible;
    .bg_image {
      position: absolute;
      bottom: auto;
      top: 2rem;
      right: 0;
      z-index: 0;
      width: auto;
      height: 198vh;
      pointer-events: none;
      display: none;
      img {
        height: 100%;
        width: auto;
      }
      .papaya_info {
        display: none;
      }
    }
    .s_title {
      margin-bottom: 3rem;
    }
    p {
      font-weight: 200;
      font-size: 1.6rem;
      line-height: 144%;
    }
    .text-1 {
      width: 24rem;
      margin-bottom: 1.8rem;
      p {
        font-size: 1.8rem;
        line-height: 128%;
        font-weight: 400;
      }
    }

    .btn_more {
      margin-top: 3rem;
      padding: 1rem 1.7rem;
      // width: 20rem;
      display: inline-flex;
      opacity: 1;
      .icon {
        width: 2.2rem;
        margin-right: 3rem;
      }
    }
    .s_content {
      width: 27rem;
      position: relative;
      max-width: none;
      max-height: none;
      z-index: 50;
    }
  }
  .s_fours .btn_more .icon {
    top: 0;
    margin-right: 1.5rem;
  }
}

@media (max-width: 767px) {
  .s_fours {
    padding-left: 30px;
    padding-right: 30px;
  }
}
@media (max-width: 375px) {
  .s_fours {
    min-height: 100vh;
    height: auto;
    .s_content {
      width: 25rem;
    }
  }
}
</style>