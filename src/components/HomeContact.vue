<template>
  <section id="screen_5" class="section s_contact_us">
    <div class="s_content">
      <h2 class="s_title">contact us</h2>
      <div class="contacts">
        <div class="make_request">
          <div class="make_request_wrap">
            <a href="#" class="close"><img src="@/assets/img/close.svg" alt=" " width="18" @click.prevent="closeRequest"></a>
            <form>
              <input type="text" id="customerName" class="name" placeholder="name / company name">
              <input type="text" id="customerPhone" class="phone" placeholder="phone">
              <input type="text" id="customerEmail" class="email" placeholder="e-mail">
              <textarea name="customerMessage" id="customerMessage" placeholder="Text" class="message" style="overflow:hidden"></textarea>
              <a href="#" class="buttons btn_request--send" @click.prevent="sendRequest"><span>Send</span></a>
            </form>
          </div>
        </div>
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
          <a href="#" class="buttons btn_request" @click.prevent="openRequest"><span>Make request</span></a>
        </div>
      </div>

    </div>
    <div class="bg_image">
      <img src="@/assets/img/papaya_bg-2.png" alt=" ">
    </div>
  </section>
</template>

<script>
import anime from 'animejs/lib/anime.es.js'

export default {
  methods: {
    fadeIn(duration) {
      anime({
        targets: this,
        opacity: [0, 1],
        duration: duration
      });
    },
    openRequest() {
      console.log(this.fadeIn)
      const requestForm = document.querySelector('.make_request')
      const contacts = document.querySelector('.contacts_wrap')

      requestForm.style.display = 'block'
      anime({
        targets: requestForm,
        opacity: [0, 1],
        duration: 300
      });
      contacts.style.display = 'none';
    },
    closeRequest() {
      const requestForm = document.querySelector('.make_request')
      const contacts = document.querySelector('.contacts_wrap')

      contacts.style.display = 'block'
      anime({
        targets: contacts,
        opacity: [0, 1],
        duration: 300
      });
      requestForm.style.display = 'none';
    },
    sendRequest() {
      const requestForm = document.querySelector('.make_request')
      const contacts = document.querySelector('.contacts_wrap')

      contacts.style.display = 'block'
      anime({
        targets: contacts,
        opacity: [0, 1],
        duration: 300
      });
      requestForm.style.display = 'none';
    }
  },
  mounted() {
    console.log('mount')
    anime({
      targets: '.s_first',
      translateY: 0,
      duration: 500
    });
  },
  beforeDestroy() {
    console.log('destroy')
    anime({
      targets: '.s_first',
      translateY: '-100%',
      duration: 500
    });
  }
}
</script>

<style lang="scss">
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
      img {
      }
    }
    .s_title {
      margin-top: 0;
      margin-bottom: 5rem;
    }
    .btn_request {
      margin-top: 11rem;
      padding: 0.5rem;
      width: 20rem;
      & > span {
        padding-left: 4rem;
        background: url("../assets/img/send.svg") no-repeat left center;
        transition: background .2s;
      }
      &:hover, &:focus {
        background: #F15000;
        border-color: #F15000;
        color: #fff;
        & > span {
          background: url("../assets/img/send.svg") no-repeat left center;
          transition: background .2s;
        }
      }
    }
    .btn_request--send {
      margin-top: 6.3rem;
      & > span {
        padding-left: 4rem;
        background: url("../assets/img/send.svg") no-repeat left center;
        transition: background .2s;
      }
      &:hover, &:focus {
        background: #F15000;
        border-color: #F15000;
        color: #fff;
        & > span {
          background: url("../assets/img/send.svg") no-repeat left center;
          transition: background .2s;
        }
      }
    }
    .s_content {
      width: 50rem;
    }
    .contacts {
      position: relative;
    }
    .contacts_item {
      margin-bottom: 4rem;
      font-weight: 300;
      font-size: 2.5rem;
      line-height: 3.6rem;
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
    }
    .make_request {
      padding-top: 2rem;
      display: none;
      max-width: 100%;
      z-index: 100;
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
        padding: 1rem;
        width: 100%;
        font-size: 2.5rem;
        line-height: 143.2%;
        border: none;
        border-bottom: 1px solid #000;
        background-color: transparent;
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
        font-weight: 300;
        font-size: 2.5rem;
        line-height: 143.2%;
        color: rgba(#000, .5);
      }

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
</style>