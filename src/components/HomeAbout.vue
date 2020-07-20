<template>
  <section id="screen_4" class="section s_fours">
    <div class="s_content">
      <h2 class="s_title">about us</h2>
      <div class="text_wrap">
        <p class="text-1">
          Web-agency "Papaya" is a professional team of programmers, designers, <br> advertisers and consultants, who has come a long way from a digital<br>
          market beginner with never fading enthusiasm,
          <br>
          to an experienced professional who can perform any task assigned to him.
        </p>
        <p>
          We specialize in creating unique Internet projects with their subsequent promotion, <br>
          as well as developing mobile applications of any complexity.
        </p>
        <br>
        <p>
          This was made possible through the harmonious introduction of innovative digital thinking <br>
          into the rather ordinary digital mastery.
        </p>
      </div>
      <a href="#" class="buttons btn_more"><span>read MORE</span></a>
    </div>
    <div class="bg_image">
      <img src="@/assets/img/papaya_bg.png" alt=" ">
      <div class="papaya_info">
        <a href="#" class="link"></a>
        <p class="text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur cumque et ipsa magnam neque veritatis.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import anime from 'animejs/lib/anime.es.js'

export default {
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
    position: relative;
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
          padding: 10px;
          padding-left: 20px;
          position: absolute;
          min-width: 15rem;
          color: #000;
          font-size: 14px;
          line-height: 17px;
          font-weight: 300;
          top: 7px;
          right: 17px;
          background-color: #fff;
          border-radius: 3px;
        }
      }
      img {
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
      font-weight: 400;
      font-size: 2.5rem;
      line-height: 3.6rem;
    }

    .btn_more {
      margin-top: 8.5rem;
      padding: 1rem;
      width: 20rem;
      & > span {
        padding-left: 4rem;
        background: url("../assets/img/eye-white.svg") no-repeat left center;
        transition: background .2s;
      }
      &:hover, &:focus {
        & > span {
          background: url("../assets/img/eye.svg") no-repeat left center;
          transition: background .2s;
        }
      }
    }

    .s_content {
      align-self: center;
      max-width: 55%;
      max-height: 95%;
      z-index: 50;
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
</style>