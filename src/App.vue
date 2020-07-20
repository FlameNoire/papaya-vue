<template>
  <div id="app">
    <UiPannels></UiPannels>
    <router-view/>
  </div>
</template>

<script>
import UiPannels from '@/components/UiPannels'

export default {
  components: {
    UiPannels,
  },
  mounted() {
    
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
    font-size: 10px;
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
    background-color: #fff; }

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
    transition: all .2s;
    &:hover {
      transition: all .2s;
    }
  }
  p, h1,h2,h3,h4,h5 {
    margin: 0;
  }
  input {
    outline: none;
  }
  button {
    border: none;
    outline: none;
  }

  .wrapper {
    min-width: 320px;
  }

  .block_title {
    font-weight: 600;
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
  }
  .buttons {
    padding: 1rem 3rem;
    height: 5.6rem;
    color: #fff;
    font-size: 1.8rem;
    line-height: 2.1rem;
    text-transform: uppercase;
    text-align: center;
    background-color: #000;
    border: 1px solid #000;
    border-radius: 10em;
    white-space: nowrap;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    &:hover, &:focus {
      color: #000;
      background-color: #fff;
    }
    & > span {
      display: inline-block;
      padding-left: 3rem;
    }
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
      margin-right: 4.5rem;
      display: flex;
      align-items: center;
      &:last-child {
        margin-left: 6.5rem;
        margin-right: 0;
      }
      &:hover {
        .info-hover {
          width: 53rem;
          transition: width .3s .1s;
        }
        .icon {
          &:after {
            background-size: 3.8rem auto;
          }
        }
        .ic-phone {
          &:after {
            background-image: url(assets/img/phone_hov.svg);
          }
        }
        .ic-skype {
          &:after {
            background-image: url(assets/img/skype_hov.svg);
          }
        }
        .ic-mail {
          &:after {
            background-image: url(assets/img/mail_hov.svg);
          }
        }
        .ic-chat {
          &:after {
            background-image: url(assets/img/chat_hov.svg);
          }
        }
        .ic-brief {
          &:after {
            background-image: url(assets/img/brief_hov.svg);
          }
        }
      }
      &.skype {
        .info-hover {
          // margin-top: -2px;
        }
        &:hover {
          .info-hover {
            width: 13rem;
            // margin-top: -2px;
          }
        }
      }
      &.email {
        .info-hover {
          // margin-top: -2px;
        }
        &:hover {
          .info-hover {
            width: 16rem;
            // margin-top: -2px;
          }
        }
      }
      &.chat {
        .info-hover {
          // margin-top: -2px;
        }
        &:hover {
          .info-hover {
            width: 5rem;
            // margin-top: -2px;
          }
        }
      }
      &.brief {
        .info-hover {
          // margin-top: -3px;
        }
        &:hover {
          .info-hover {
            width: 13rem;
            // margin-top: -3px;
          }
        }
      }
      .info-hover {
        display: inline-block;
        width: 0.1px;
        overflow: hidden;
        vertical-align: top;
        height: 22px;
        font-size: 1.5rem;
        line-height: 22px;
        white-space: nowrap;
        transition: width .3s;
        a {
          margin-left: 6px;
        }
      }
      span {
        margin-left: 6px;
        display: inline-block;
      }
      .slash {
        color: #999;
      }
    }

    .icon {
      margin-right: 1rem;
      position: relative;
      display: inline-block;
      height: 1.5rem;
      width: 1.5rem;
      &:after {
        position: absolute;
        display: block;
        content: '';
        width: 4rem;
        height: 4rem;
        top: calc(50% - 2rem);
        left: calc(50% - 2rem);
        background: url("assets/img/phone.svg") no-repeat center;
        background-size: 1.5rem auto;
        transition: background .15s;
        will-change: transform;
      }
    }
    .ic-phone:after {
      background-image: url(assets/img/phone.svg);
    }
    .ic-skype:after {
      background-image: url(assets/img/skype.svg);
    }
    .ic-mail:after {
      background-image: url(assets/img/mail.svg);
    }
    .ic-chat:after {
      background-image: url(assets/img/chat.svg);
    }
    .ic-brief:after {
      background-image: url(assets/img/brief.svg);
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
      width: 1.5rem;
      height: 1.5rem;
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
    left: 0;
    padding: 0px 6rem;
    height: 100vh;
    width: 100%;
    z-index: 10;
    overflow: hidden;
  }
  .s_title {
    position: relative;
    font-size: 6rem;
    line-height: 7.2rem;
    font-weight: 700;
    text-transform: uppercase;
  }
  @media (max-width: 1900px) {
    html {
      font-size: 8.5px;
    }

    .panel--top .menu_btn {
      width: 25px;
    }
  }

  @media (max-width: 1599px) {
    html {
      font-size: 8px;
    }
    .contacts .icon:after {
      background-size: 13px;
    }
    .social .icon {
      height: 13px;
      img {}
    }
  }

  @media (max-width: 1439px) {
    html {
      font-size: 7.1px;
    }
  }
</style>
