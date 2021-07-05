<template>
  <div class="msg_response">
    <div class="inner">
      <div class="image"><img src="@/assets/img/check_trgl.svg" alt=" "></div>
      <p class="text-1">{{$t('text9')}}</p>
      <p class="text-2" v-html="$t('text10')"></p>
      <p class="text-2" v-html="$t('text11')"></p>
      <a href="#" class="buttons back_btn" @click.prevent="$emit('close-popup')">{{$t('buttons.btn7')}}</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.msg_response {
  position: fixed;
  z-index: 40;
  left: 0;
  right: 0;
  top: 0;
  height: 100vh;
  font-size: 2.5rem;
  line-height: 3.6rem;
  color: #000000;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  &.fade-enter-active {
    animation: fade-in .5s forwards;
  }
  &.fade-leave-active {
    animation: fade-in .5s .3s reverse forwards;
  }
  .inner {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fff;
  }
  .text-1 {
    margin-bottom: 2rem;
    width: 110rem;
    font-weight: 700;
    font-size: 5rem;
    line-height: 6rem;
    text-transform: none;
  }
  .text-2 {
    margin-bottom: 2rem;
    width: 90rem;
    font-weight: 100;
    font-size: 4rem;
    line-height: 4.8rem;
    text-transform: none;
  }
  .image {
    margin-bottom: 8rem;
    width: 17.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .back_btn {
    margin-top: 6rem;
    width: 17rem;
    height: 5.6rem!important;
    font-size: 1.8rem;
    line-height: 2.2rem;
    text-transform: none;
    justify-content: center;
  }
}

@media (max-width: 991px) {
  .msg_response {
    padding-top: 70px;
    font-size: 1.4rem;
    line-height: 2rem;
    z-index: 110;
    .inner {
      padding-left: 20px;
      padding-right: 20px;
      padding-bottom: 70px;
    }
    .text-1 {
      width: 100%;
      font-size: 2.5rem;
      line-height: 3rem;
    }
    .text-2 {
      width: 90%;
      font-weight: 300;
      font-size: 1.8rem;
      line-height: 2.1rem;
    }
    .image {
      margin-bottom: 5rem;
      width: 14rem;
    }
    .back_btn {
      height: 4.2rem!important;
      font-size: 1.4rem;
      line-height: 1.7rem;
    }
  }
}
@media (max-width: 767px) {
  .msg_response {
    padding-top: 56px;
    .inner {
      padding-bottom: 56px;
    }
  }
}
@media (max-height: 450px) and (orientation: landscape) {
  .msg_response {
    padding-top: 60px;
    padding-bottom: 50px;
    .image {
      margin-bottom: 2rem;
      width: 10rem;
    }
    .text-1 {
      font-size: 25px;
      line-height: 30px;
    }
    .text-2 {
      font-size: 18px;
      line-height: 21px;
    }
    .back_btn {
      font-size: 14px;
      line-height: 17px;
    }
  }
}
</style>