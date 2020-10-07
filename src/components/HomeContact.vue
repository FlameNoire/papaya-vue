<template>
  <section id="screen_5" class="section s_contact_us">
    <transition name="fade">
      <MsgResponse v-show="showResponsePopup" @close-popup="msgResponsePopup = false"></MsgResponse>
    </transition>
 
    <div class="s_content">
      <h2 class="s_title">{{$t('text1')}}</h2>
      <div class="our_contacts">
        <transition name="fade">
          <div v-if="showRequestForm" class="make_request">
            <a v-if="isMobDevice" href="#" class="close"><img src="@/assets/img/close.svg" alt=" " width="18" @click.prevent="closeRequest"></a>
            <div class="make_request_wrap">
              <h2 v-if="isMobDevice" class="s_title">{{$t('text1')}}</h2>
              <a v-if="!isMobDevice" href="#" class="close"><img src="@/assets/img/close.svg" alt=" " width="18" @click.prevent="closeRequest"></a>
              <form>
                <input 
                  v-model="name" 
                  @blur="$v.name.$touch()" 
                  type="text" 
                  name="Name" 
                  class="name" 
                  :class="{'error' : $v.name.$error}" 
                  :placeholder="$t('pannels.t9')" 
                  required
                >
                <input 
                  v-model="phone" 
                  @blur="$v.phone.$touch()" 
                  type="text" 
                  name="Phone" 
                  class="phone" 
                  :class="{'error' : $v.phone.$error}" 
                  :placeholder="$t('pannels.t10')" 
                  required
                >
                <input 
                  v-model="mail" 
                  @blur="$v.mail.$touch()" 
                  type="text" 
                  name="Email" 
                  class="email" 
                  :class="{'error' : $v.mail.$error}" 
                  :placeholder="$t('pannels.t11')" 
                  required
                >
                <textarea v-model="message" name="Message" id="customerMessage" :placeholder="$t('pannels.t12')" class="message" style="overflow:hidden"></textarea>
                <a href="#" class="buttons btn_request--send" @click.prevent="sendRequest">
                  <i class="icon">
                    <img src="@/assets/img/send.svg" alt=" ">
                    <img src="@/assets/img/send.svg" alt=" ">
                  </i>
                  <span v-if="isMobDevice">{{$t('buttons.btn5')}}</span>
                  <span v-else>{{$t('buttons.btn6')}}</span>
                </a>
              </form>
            </div>
          </div>
        </transition>

        <div class="contacts_wrap">
          <p class="contacts_item phones">
            <a href="tel:+380630305858"><img src="@/assets/img/phone.svg" alt=" ">063 030-58-58</a>
          </p>
          <p class="contacts_item skype">
            <a href="tel:papaya_web"><img src="@/assets/img/skype.svg" alt=" ">papaya_web</a>
          </p>
          <p class="contacts_item mail">
            <a href="mailto:info@papaya.net.ua"><img src="@/assets/img/mail.svg" alt=" ">info@papaya.net.ua </a>
          </p>
          <p class="contacts_item logo">
            <img src="@/assets/img/UkraineKyiv.svg" alt=" ">
          </p>
          <a href="#" class="buttons btn_request" @click.prevent="openRequest">
            <i class="icon">
              <img src="@/assets/img/send.svg" alt=" ">
              <img src="@/assets/img/send.svg" alt=" ">
            </i>
            <span>{{$t('buttons.btn5')}}</span>
          </a>
        </div>
        
      </div>

    </div>
    <div v-if="!isMobDevice" class="bg_image">
      <img src="@/assets/img/papaya_bg-2.png" alt=" ">
    </div>
    <div v-if="isMobDevice" class="bg_image">
      <img src="@/assets/img/papaya_bg-sm.png" alt=" ">
    </div>
  </section>
</template>

<script>
import { isMobile, isTablet } from "mobile-device-detect"
import MsgResponse from '@/components/MsgResponse'
import anime from 'animejs/lib/anime.es.js'
import axios from "axios"
import { required, minLength, email } from 'vuelidate/lib/validators'

export default {
  components: {
    MsgResponse
  },
  data: () => {
    return {
      name: '',
      phone: '',
      mail: '',
      message: '',
      msgResponsePopup: false,
      // requestForm: false
    }
  },
  validations: {
    name: {
      required,
      minLength: minLength(2)
    },
    phone: {
      required,
    },
    mail: {
      required,
      email,
    },
  },
  computed: {
    isMobDevice() {
      return isMobile || isTablet ? true : false
    },
    showRequestForm() {
      return this.$store.state.showRequestForm
    },
    showResponsePopup() {
      return this.msgResponsePopup
    }
  },
  methods: {
    fadeIn(duration) {
      anime({
        targets: this,
        opacity: [0, 1],
        duration: duration
      });
    },
    openRequest() {
      this.$store.commit('showRequestFormToggler')
    },
    closeRequest() {
      this.$store.commit('showRequestFormToggler')
    },
    sendRequest() {
      // const url = process.env.VUE_APP_API_URL ;
      // const url = 'http://papaya.com' ;
      this.$v.$touch()
      if(!this.$v.$invalid) {

        setTimeout(() => {
          this.msgResponsePopup = true
          this.$store.commit('showRequestFormToggler')
        }, 300)
        
        /* axios
          .post(url + '/sendContactForm', {
              name: this.name,
              email: this.email,
              phone: this.phone,
              message: this.message,
          })
          .then(response => {
              const {data:{status}} = response;
              if (status === 'ok') {
                  this.msgResponsePopup = true
                  this.requestForm = false
              }else alert('An unknown error has occurred, please try again.') ;
          })
          .catch(error => {
              alert('An unknown error has occurred, please try again.') ;
          }) */

      }

    },
    clear() {
      this.$v.$reset()
      this.name = ''
      this.phone = ''
      this.mail = ''
      this.message = ''
    },
  },
  mounted() {
    console.log('mount')
    anime({
      targets: '.s_first',
      translateY: 0,
      duration: 500
    });
  },
}
</script>

<style lang="scss">
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.s_contact_us {
  padding-left: 25rem;
  padding-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: visible;
  .bg_image {
    position: absolute;
    top: -20rem;
    right: 1rem;
    z-index: 0;
    width: 94.5rem;
  }
  .s_title {
    margin-top: 0;
    margin-bottom: 5rem;
    white-space: nowrap;
  }
  .btn_request {
    margin-top: 3.4rem;
    padding-left: 3rem;
    padding-right: 3.6rem;
    .icon {
      margin-right: 2rem;
      width: 21px;
      height: 21px;
    }
    &:hover, &:focus {
      background: #F15000;
      border-color: #F15000;
      color: #fff;
    }
  }
  .btn_request--send {
    margin-top: 6.3rem;
    // width: 17rem;
    .icon {
      margin-right: 2.5rem;
      width: 21px;
      height: 21px;
    }
    &:hover, &:focus {
      background: #F15000;
      border-color: #F15000;
      color: #fff;
    }
  }
  .s_content {
    width: 50rem;
  }
  .our_contacts {
    position: relative;
  }
  .contacts_item {
    margin-bottom: 4rem;
    font-weight: 300;
    font-size: 2.5rem;
    line-height: 3.6rem;
    &.logo {
      img {
        height: 3.6rem;
      }
    }
    a {
      position: relative;
      display: flex;
      align-items: center;
    }
    img {
      display: block;
      margin-right: 20px;
    }
  }
  .contacts_wrap {
    padding-top: 5rem;
    &.fade-enter-active {
      animation: fade-in .5s forwards;
    }
    &.fade-leave-active {
      animation: fade-in .5s reverse forwards;
    }
  }
  .make_request {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    padding-top: 2rem;
    max-width: 100%;
    z-index: 100;
    background-color: #fff;
    &.fade-enter-active {
      animation: fade-in .5s forwards;
    }
    &.fade-leave-active {
      animation: fade-in .5s reverse forwards;
    }
    .make_request_wrap {
      padding-top: 1.8rem;
      padding-right: 5rem;
      position: relative;
    }
    .close {
      position: absolute;
      display: block;
      top: 0;
      right: 0;
    }
    form {
      width: 100%;
    }
    input, textarea {
      font-family: 'SF Pro Display', sans-serif;
      padding: 1rem;
      width: 100%;
      font-size: 2.5rem;
      line-height: 143.2%;
      border: none;
      border-bottom: 1px solid #000;
      border-radius: 0px!important;
      background-color: transparent;
    }
    .error {
      border-color: #DC143C;
    }
    input {
      margin-bottom: 2rem;
      height: 5.6rem;
    }
    textarea {
      height: 5.6rem;
      outline: none;
      resize: none;
    }
    .company {
      margin-bottom: 17px;
    }
    input::placeholder, textarea::placeholder {
      font-family: 'SF Pro Display', sans-serif;
      font-weight: 300;
      font-size: 2.5rem;
      line-height: 143.2%;
      color: rgba(#000, .5);
    }

  }
}
@media (min-width: 1900px) and (min-height: 1100px) {
  .s_contact_us .bg_image {
    width: 98rem;
    top: -21rem;
    img {
      width: 100%;
    }
  }
}
@media (max-width: 1599px) {
  .s_contact_us .btn_request--send {
    margin-top: 6rem;
  }
}
@media (max-width: 1365px) {
  .s_contact_us {
    padding-left: 100px;
    .btn_request--send {
      margin-top: 6rem;
    }
  }
  .s_contact_us .bg_image {
    width: 73rem;
    top: -17rem;
  }
}

@media (max-width: 1199px) {

}
@media (min-width: 992px) and (max-width: 1366px) {
  .mobile {
    .s_contact_us {
      position: static!important;
      padding-left: 40px;
      padding-right: 40px;
      height: 100vh;
      .bg_image {
        display: none;
      }
      .s_title {
        margin-top: 0;
        margin-bottom: 90px;
      }
      .contacts_item img {
        position: relative;
        top: 2px;
        width: 22px;
      }
      .contacts_item.logo {
        img {
          top: 0;
          width: auto;
          height: 42px;
        }
      }
      .btn_request {
        margin-top: 60px;
        padding-left: 30px;
        width: 300px;
        .icon {
          margin-right: 25px;
        }
      }
      .btn_request--send {
        margin-top: 75px;
        margin-left: auto;
        margin-right: auto;
        padding-left: 30px;
        width: 300px;
        .icon {
          margin-right: 25px;
        }
      }
      .s_content {
        width: 375px;
      }
      .our_contacts {
        position: relative;
      }
      .contacts_item {
        margin-bottom: 30px;
        font-weight: 300;
        font-size: 30px;
        line-height: 143.2%;
      }
      .contacts_wrap {
        padding-top: 0;
      }
      .make_request {
        padding-top: 70px;
        z-index: 100;
        position: fixed;
        top: 0;
        left: 0;
        bottom: auto;
        background-color: transparent;
        width: 100%;
        height: 100%;
        pointer-events: none;
        .s_title {
          margin-bottom: 60px;
          text-align: center;
        }
        .make_request_wrap {
          padding-top: 0;
          padding-right: 50px;
          padding-left: 50px;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background-color: #fff;
          pointer-events: auto;
        }
        .close {
          position: absolute;
          display: block;
          top: 0;
          right: 27px;
          height: 68px;
          width: 65px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #fff;
          pointer-events: auto;
          img {
            width: 24px;
          }
        }
        input, textarea {
          font-size: 24px;
        }
        input {
          margin-bottom: 30px;
          height: 60px;
        }
        textarea {
          height: 60px;
        }
        .company {
          margin-bottom: 17px;
        }
        input::placeholder, textarea::placeholder {
          font-size: 24px;
        }

      }
    }
  }
}
@media (max-width: 991px) {
  .s_contact_us {
    position: static!important;
    padding-left: 40px;
    padding-right: 40px;
    .bg_image {
      display: none;
    }
    .bg_image {
      display: block;
      bottom: 0;
      right: 0;
      top: auto;
      width: auto;
      height: 200vh;
      pointer-events: none;
      img {
        height: 100%;
        width: auto;
        max-width: none;
      }
    }
    .s_title {
      margin-top: 0;
      margin-bottom: 6rem;
    }
    .contacts_item img {
      position: relative;
      top: 1px;
      width: 1.5rem;
    }
    .contacts_item.logo {
      img {
        top: 0;
        width: auto;
        height: 2.9rem;
      }
    }
    .btn_request {
      margin-top: 4rem;
      padding-left: 2rem;
      // width: 20rem;
      display: inline-flex;
      .icon {
        margin-right: 1.7rem;
      }
    }
    .btn_request--send {
      margin-top: 5rem;
      margin-left: auto;
      margin-right: auto;
      padding-left: 2rem;
      // width: 20rem;
      display: inline-flex;
      .icon {
        margin-right: 1.7rem;
      }
    }
    .s_content {
      width: 25rem;
    }
    .our_contacts {
      position: relative;
    }
    .contacts_item {
      margin-bottom: 2rem;
      font-weight: 300;
      font-size: 2rem;
      line-height: 143.2%;
    }
    .contacts_wrap {
      padding-top: 0;
    }
    .make_request {
      padding-top: 70px;
      z-index: 100;
      position: fixed;
      top: 0;
      left: 0;
      bottom: auto;
      background-color: transparent;
      width: 100%;
      height: 100%;
      pointer-events: none;
      .s_title {
        margin-bottom: 4rem;
        text-align: center;
      }
      .make_request_wrap {
        padding-top: 0;
        padding-right: 5rem;
        padding-left: 5rem;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: #fff;
        pointer-events: auto;
      }
      .close {
        position: absolute;
        display: block;
        top: 0;
        right: 0;
        height: 68px;
        width: 65px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #fff;
        pointer-events: auto;
      }
      input, textarea {
        font-size: 1.8rem;
      }
      input {
        margin-bottom: 2rem;
        height: 4.6rem;
      }
      textarea {
        height: 4.6rem;
      }
      .company {
        margin-bottom: 17px;
      }
      input::placeholder, textarea::placeholder {
        font-size: 1.8rem;
      }

    }
  }
}

@media (max-width: 767px) {
  .s_contact_us {
    padding-left: 30px;
    padding-right: 30px;
  }
  .s_contact_us .make_request {
    padding-top: 56px;
    .close {
      height: 56px;
    }
  }
}
@media (max-width: 375px) {
  .s_contact_us {
    position: relative;
    height: 95vh;
    .s_content {
      position: relative;
      z-index: 10;
    }
    .bg_image {
      display: block;
      bottom: 0;
      right: 0;
      top: auto;
      width: auto;
      height: 200vh;
      pointer-events: none;
      img {
        height: 100%;
        width: auto;
        max-width: none;
      }
    }
  }
}
</style>