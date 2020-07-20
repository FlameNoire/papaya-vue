<template>
  <section id="screen_1" class="section s_first">

    <div class="content">
      <a href="#" class="logo">
        <span class="logo_img"><img src="@/assets/img/logo_papaya.svg" alt=" "></span>
        <span class="logo_text"><img src="@/assets/img/logo_papaya_text.svg" alt=" "></span>
      </a>
      <div class="main_title_wrap">
        <h2 class="main_title">Development of unique sites
        <span class="sm">And other web solutions for your business</span></h2>
      </div>
      <div class="buttons_wrap">
        <a href="#" class="buttons btn_ask"><span>Ask</span></a>
        <a href="#" class="buttons btn_brief"><span>Online briefcase</span></a>
      </div>
    </div>

  </section>
</template>

<script>

export default {
  
}
</script>

<style lang="scss">
  .s_first {
    padding-top: 34rem;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    z-index: 20;
    transform: translateY(0) !important;
    .content {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .logo {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-bottom: 6rem;
      .logo_img {
        margin-right: 0.4rem;
        margin-bottom: 3.4rem;
        width: 6.1rem;
        display: none;
      }
      .logo_text {
        margin-right: 0;
        margin-bottom: 0;
        width: 23.1rem;
      }
    }
    .main_title {
      margin-top: 0;
      margin-bottom: 13rem;
      color: #000;
      font-size: 7rem;
      line-height: 8.4rem;
      font-weight: 700;
      text-align: center;
      text-transform: uppercase;
      .sm {
        display: block;
        font-weight: 100;
        font-size: 4rem;
        line-height: 4.8rem;
        text-align: center;
        text-transform: none;
      }
    }
    .buttons_wrap {
      //margin-bottom: 100px;
    }
    .btn_ask {
      margin-right: 32px;
      & > span {
        background: url("../assets/img/chat-white.svg") no-repeat left center;
        transition: background .2s;
      }
      &:hover, &:focus {
        & > span {
          background: url("../assets/img/chat.svg") no-repeat left center;
          transition: background .2s;
        }
      }
    }
    .btn_brief {
      & > span {
        background: url("../assets/img/brief-white.svg") no-repeat left center;
        transition: background .2s;
      }
      &:hover, &:focus {
        & > span {
          background: url("../assets/img/brief.svg") no-repeat left center;
          transition: background .2s;
        }
      }
    }
  }
  @media (max-width: 1900px) {
    .panel--top.top_view .logo {
      transform: translate3d(46.2vw, 168px, 0);
    }
  }
  @media (max-width: 1599px) {
    .panel--top.top_view .logo {
      transform: translate3d(46.2vw, 160px, 0);
    }
  }
  @media (max-width: 1439px) {
    .panel--top.top_view .logo {
      transform: translate3d(46.2vw, 140px, 0);
    }
  }
  @media (max-width: 1365px) {
    .panel--top.top_view .logo {
      transform: translate3d(45.2vw, 70px, 0);
    }
    .s_first {
      padding-top: 24rem;
    }
  }
</style>