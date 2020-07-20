<template>
  <div class="main_menu">
    <div class="bg_grad">
    </div>
    <div id="bg_particles_3"></div>
    <div class="bg_papaya"><img src="@/assets/img/papaya_big.svg" alt=" "></div>
    <div class="papaya_moving">
      <img class="papaya_moving_img" src="@/assets/img/papaya_blur.png" alt=" ">
    </div>
    <div class="image_text">
      <img src="@/assets/img/papaya_title.svg" alt=" ">
    </div>
    <div class="main_menu_wrap">
      <nav class="navigation">
        <ul>
          <li><router-link to="/services" @click.native="menuToggle">what we do</router-link></li>
          <li><router-link to="/portfolio" @click.native="menuToggle">Portfolio</router-link></li>
          <li><router-link to="/about" @click.native="menuToggle">about us</router-link></li>
          <li><router-link to="/contacts" @click.native="menuToggle">contacts</router-link></li>
          <li><router-link to="/blog" @click.native="menuToggle">Blog</router-link></li>
        </ul>
      </nav>
    </div>
    <a href="#" class="menu_close" @click.prevent="menuToggle"><span></span><span></span></a>
    <div class="main_menu_bottom clearfix">
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
      <a href="#" class="lang_btn">En</a>
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
export default {
  methods: {
    menuToggle() {
      console.log('close menu');
      this.$store.commit('menuToggle');
    }
  }
}
</script>

<style lang="scss">

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

  .bg_grad {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #f1b8e7;
    background: url("../assets/img/menu_bg.svg") no-repeat center;
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
    width: 23.9rem;
    top: 50%;
    left: 50%;
    margin-top: -15.5rem;
    margin-left: -12rem;
    transform: translateY(-100vh);
    animation: bounceInDown 1s forwards;
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

  .papaya_moving {
    position: absolute;
    top: 10px;
    left: 60px;
    width: 250px;
    height: 150px;
  }


  .main_menu {
    // display: none;
    position: fixed;
    padding: 3rem 4rem;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    //will-change: ;

    .image_text {
      padding: 3rem;
      position: absolute;
      top: calc(47% - 5rem);
      left: 8.8vw;
      img {
        width: 43rem;
        // height: 105.14px;
      }
    }
  }
  .main_menu_wrap {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-end;
    align-items: center;
    padding-right: 16rem;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    text-align: right;
    .navigation {
      //color: #282828;
      margin-bottom: 3rem;
      font-family: 'Sf Pro Display', sans-serif;
      font-size: 7rem;
      line-height: 8.4rem;
      font-weight: 700;
      text-transform: uppercase;
      li {
        margin-bottom: 4rem;
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
        //&.active {
        //  a:after {
        //    width: 100%;
        //  }
        //}
      }
    }
  }

  .main_menu_bottom {
    padding: 5rem 0 3rem 0;
    position: absolute;
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
    top: 3rem;
    right: 4rem;
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
    .main_menu_bottom .lang_btn {
      font-size: 14px;
    }
    .main_menu_wrap .navigation {
      font-size: 6rem;
      line-height: 7.4rem;
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