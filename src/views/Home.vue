<template>
  <div class="home">

    <transition @enter="enterFirstScreen" @leave="leaveFirstScreen" appear>
      <HomeWelcom v-if="activeScreen == 1"></HomeWelcom>
    </transition>

    <transition @enter="enterSecondScreen" @leave="leaveSecondScreen" appear>
      <HomePortfolio v-if="activeScreen == 2"></HomePortfolio>
    </transition>
    
    <transition @enter="enterThirdScreen" @leave="leaveThirdScreen" appear>
      <HomeServices v-if="activeScreen == 3"></HomeServices>
    </transition>
    
    <transition @enter="enterFoursScreen" @leave="leaveFoursScreen" appear>
      <HomeAbout v-if="activeScreen == 4"></HomeAbout>
    </transition>

    <transition @enter="enterFifthScreen" @leave="leaveFifthScreen" appear>
      <HomeContact v-if="activeScreen == 5"></HomeContact>
    </transition>
    
  </div>
</template>

<script>
import HomeWelcom from '@/components/HomeWelcom'
import HomePortfolio from '@/components/HomePortfolio'
import HomeServices from '@/components/HomeServices'
import HomeAbout from '@/components/HomeAbout'
import HomeContact from '@/components/HomeContact'
import { debounce } from "@/mixins/debounce"
import anime from 'animejs/lib/anime.es.js'

export default {
  name: 'Home',
  // mixins: [ debounce ],
  components: {
    HomeWelcom, HomePortfolio, HomeServices, HomeAbout, HomeContact
  },
  data: () => {
    return {
    }
  },
  computed: {
    activeScreen() {
      return this.$store.state.activeScreen
    },
    fadeValueComp() {
      return this.fadeValue
    }
  },
  methods: {

    scrollTop: debounce(function() {
      this.$store.commit('activeScreenDecr');
    }, 500),

    scrollBottom: debounce(function() {
      this.$store.commit('activeScreenIncr');
    }, 500),

    enterFirstScreen: function (el, done) {
      const logoText = document.querySelector('.logo_text')
      anime({
        targets: el,
        opacity: [0, 1],
        easing: 'linear',
        duration: 500,
        // delay: 100,
      })
      anime({
        targets: logoText,
        translateY: ['-100px', 0],
        translateX: ['100px', 0],
        opacity: [0, 1],
        easing: 'linear',
        duration: 300,
        delay: 500,
        complete: function() {
          done()
        }
      })
    },
    leaveFirstScreen: function (el, done) {
      anime({
        targets: el,
        opacity: 0,
        easing: 'linear',
        duration: 500,
        complete: function() {
          done()
        }
      });
    },

    enterSecondScreen: function (el, done) {
      anime({
        targets: el,
        opacity: [0, 1],
        easing: 'linear',
        duration: 300,
        delay: 100,
        complete: function() {
          done()
        }
      });
    },
    leaveSecondScreen: function (el, done) {
      anime({
        targets: el,
        opacity: 0,
        easing: 'linear',
        duration: 500,
        complete: function() {
          done()
        }
      });
    },

    enterThirdScreen: function (el, done) {
      const servicesBlock = document.querySelector('.categories')
      anime({
        targets: el,
        opacity: [0, 1],
        easing: 'linear',
        duration: 300,
        // delay: 100,
      })
      anime({
        targets: servicesBlock,
        translateX: ['60rem', 0],
        rotate: ['180deg', '0deg'],
        opacity: [0, 1],
        easing: 'linear',
        duration: 500,
        // delay: 200,
        complete: function() {
          done()
        }
      })
    },
    leaveThirdScreen: function (el, done) {
      const servicesBlock = document.querySelector('.categories')
      anime({
        targets: el,
        opacity: 0,
        easing: 'linear',
        duration: 500,
        // delay: 100,
      })
      anime({
        targets: servicesBlock,
        translateX: [0, '-5rem'],
        translateY: [0, '-15rem'],
        opacity: 0,
        easing: 'linear',
        duration: 500,
        complete: function() {
          done()
        }
      })
    },

    enterFoursScreen: function (el, done) {
      const aboutContent = document.querySelector('.s_fours .s_content')
      anime({
        targets: el,
        opacity: [0, 1],
        easing: 'linear',
        duration: 300,
      })
      anime({
        targets: aboutContent,
        translateX: ['5rem', 0],
        translateY: ['15rem', 0],
        opacity: [0, 1],
        easing: 'linear',
        duration: 500,
        delay: 100,
        complete: function() {
          done()
        }
      })
    },
    leaveFoursScreen: function (el, done) {
      const papaya = document.querySelector('.s_fours .bg_image')
      anime({
        targets: papaya,
        opacity: [1, 0],
        easing: 'linear',
        duration: 100,
      })
      anime({
        targets: el,
        opacity: 0,
        easing: 'linear',
        duration: 500,
        complete: function() {
          done()
        }
      });
    },

    enterFifthScreen: function (el, done) {
      const smoke = document.querySelector('.s_contact_us .bg_image')
      const btn = document.querySelector('.s_contact_us .btn_request')
      anime({
        targets: el,
        opacity: [0, 1],
        easing: 'linear',
        duration: 300,
      })
      anime({
        targets: btn,
        width: ['20rem', '23rem'],
        easing: 'linear',
        duration: 500,
        delay: 0
      })
      anime({
        targets: smoke,
        translateY: ['100vh', 0],
        // opacity: [0, 1],
        easing: 'linear',
        duration: 500,
        complete: function() {
          done()
        }
      })
    },
    leaveFifthScreen: function (el, done) {
      anime({
        targets: el,
        opacity: 0,
        easing: 'linear',
        duration: 500,
        complete: function() {
          done()
        }
      });
    },

  },
  mounted() {
    // let logo = document.querySelector('.logo_img_clone')
    // let logoMoved = document.querySelector('.logo_img_clone')
    const screenChangeHandler = function(e) {
      // let slider = document.querySelector('.VueCarousel')
      // console.log(slider)
      // console.log(e.path)
      // if (e.target == slider || slider.contains(target)){
      //     console.log('scroll on slider')
      // }
      console.log(e.deltaY)
      if (e.deltaY == 100) {
          //scroll down
          this.scrollBottom()
          console.log('Down')
      } else {
          //scroll up
          this.scrollTop()
          console.log('Up')
      }
    }
    document.querySelector('.home').addEventListener('wheel', screenChangeHandler.bind(this))
    // document.onwheel = function(e) {
    //   console.log(e.deltaY)
    //   if (e.deltaY > 0) {
    //       //scroll down
    //       this.scrollBottom();
    //       console.log('Down');
    //   } else {
    //       //scroll up
    //       this.scrollTop();
    //       console.log('Up');
    //   }
    // }.bind(this);
  },
  beforeDestroy() {
    // document.querySelector('.home').removeEventListener('wheel', screenChangeHandler)
  }
}
</script>

<style lang="scss">
  .home {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background-color: #fff;
  }
</style>
