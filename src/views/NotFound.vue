<template>
  <div class="page page_404">
    <div class="inner">
      <h1 class="page_title">{{$t('text4')}}</h1>
      <p>{{$t('text5')}}</p>
      <div class="image"><span>4</span><img src="@/assets/img/Papaya-Transparent-PNG.png" alt=" "><span>4</span></div>
      <a href="#" class="back_btn" @click.prevent="goBack"><img src="@/assets/img/arrow-3-left.svg" alt=" ">{{$t('buttons.btn10')}}</a>
    </div>
  </div>
</template>

<script>
import anime from 'animejs/lib/anime.es.js'

export default {
  methods: {
    goBack() {
      this.$router.go(-1)
    }
  },
  mounted() {
    anime({
      targets: '.page_404',
      opacity: [0, 1],
      easing: 'linear',
      duration: 1000,
      delay: 300
    })
    // anime({
    //   targets: '.preload_bg_green',
    //   points: [
    //     { value: '1920,1080 0,1080 0,0 432.1,0 1920,0' },
    //     { value: '1920,1080 0,1080 0,0 0,0 0,1080' },
    //   ],
    //   easing: 'easeOutQuad',
    //   duration: 1000,
    // });
  },
  beforeRouteLeave (to, from, next) {
    anime({
      targets: '.page_404',
      opacity: [1, 0],
      easing: 'linear',
      duration: 1000,
      complete: function() { 
        next();
      }
    })
    // anime({
    //   targets: '.preload_bg_green',
    //   points: [
    //     { value: '1920,1080 0,1080 0,0 0,0 0,1080' },
    //     { value: '1920,1080 0,1080 0,0 0,0 677,710' },
    //     { value: '1920,1080 0,1080 0,0 432.1,0 677,710' },
    //     { value: '1920,1080 0,1080 0,0 432.1,0 1920,0' },
    //   ],
    //   easing: 'easeOutQuad',
    //   duration: 2000,
    //   complete: function() {
    //     next();
    //   }
    // });
  },
}
</script>

<style lang="scss" scoped>
.page_404 {
  position: relative;
  height: 100vh;
  width: 100%;
  font-size: 2.5rem;
  line-height: 3.6rem;
  color: #000000;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  .inner {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .page_title {
    margin-bottom: 2rem;
    font-weight: 700;
    font-size: 6rem;
    line-height: 7.2rem;
    text-transform: none;
  }
  .image {
    margin-top: 9rem;
    padding-bottom: 11rem;
    width: 100%;
    font-weight: 700;
    font-size: 25rem;
    line-height: 30rem;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      position: relative;
      width: 21.6rem;
      margin-top: -1.8rem;
      margin-left: -3.2rem;
      display: block;
      & + span {
        margin-left: -3.5rem;
      }
    }
    span {
      position: relative;
    }
  }
  .back_btn {
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 1.9rem;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      margin-right: 2rem;
      width: 5.7rem;
    }
  }
}

@media (max-width: 991px) {
  .page_404 {
    padding-top: 70px;
    padding-bottom: 70px;
    font-size: 1.4rem;
    line-height: 2rem;
    .page_title {
      margin-bottom: 1rem;
      font-size: 3rem;
      line-height: 3.6rem;
    }
    .image {
      margin-top: 4.5rem;
      padding-bottom: 5.5rem;
      font-size: 12rem;
      line-height: 14.5rem;
      img {
        width: 10.8rem;
        margin-top: -0.9rem;
        margin-left: -1.6rem;
        & + span {
          margin-left: -1.75rem;
        }
      }
    }
    .back_btn {
      font-size: 1.4rem;
      line-height: 1.7rem;
      img {
        margin-right: 1.5rem;
        width: 4rem;
      }
    }
  }
}
@media (max-height: 450px) and (orientation: landscape) {
  .page_404 {
    padding-top: 90px;
    padding-bottom: 50px;
    .page_title {
      font-size: 25px;
      line-height: 30px;
    }
    .image {
      margin-top: 30px;
      padding-bottom: 30px;
      font-size: 100px;
      line-height: 120px;
      img {
        width: 80px;
        margin-top: -5px;
        margin-left: -5px;
        & + span {
          margin-left: -7px;
        }
      }
    }
    .back_btn {
      font-size: 14px;
      line-height: 17px;
      img {
        margin-right: 15px;
        width: 40px;
      }
    }
  }
}
</style>