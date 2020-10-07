<template>
  <div class="page page_blog">
    <div class="page_header">
      <h1 class="page_title">{{ $t('text6') }}</h1>
      <p class="page_title_caption">{{ $t('text7') }}</p>
    </div>
    <div class="page_content">
      <div class="posts_list" ref="blog">
        <!-- <router-link :to="`/blog/:${post.id}`" class="post_preview" v-for="post in postsList" v-bind:key="post.id" @mouseenter.native="activeToggler($event)" @mouseleave.native="activeToggler($event)"> -->
        <router-link :to="{ name: 'BlogPost', params: { postId: post.id, postTitle: post.title }}" class="post_preview" v-for="post in postsList" v-bind:key="post.id" @mouseenter.native="activeToggler($event)" @mouseleave.native="activeToggler($event)">
          <div class="post_img"><img :src="post.image" alt=" "></div>
          <div class="post_desc">
            <h2 class="post_title">{{post.title}}</h2>
            <div class="post_date">{{post.date}}</div>
            <div class="post_caption">{{post.caption}}</div>
          </div>
        </router-link>
      </div>
      <div class="page_bottom">
        <a href="#" class="buttons btn_more" @click.prevent="loadPosts">
          <i class="icon">
            <img src="@/assets/img/eye-white.svg" alt=" ">
            <img src="@/assets/img/eye.svg" alt=" ">
          </i>
          <span>{{ $t('buttons.btn9') }}</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import anime from 'animejs/lib/anime.es.js'
import { isMobile, isTablet } from "mobile-device-detect"

export default {
  data: () => {
    return {
      posts: []
    }
  },
  computed: {
    lang() {
      return this.$i18n.locale
    },
    isMobDevice() {
      return isMobile || isTablet ? true : false
    },
    postsList() {
      return this.posts
    },
    // reInit() {
    //   let currIndex = this.$refs.slick.currentSlide()
    //   this.$refs.slick.destroy()
    //   this.$nextTick(() => {
    //     this.$refs.slick.create()
    //     this.$refs.slick.goTo(currIndex, true)
    //   })
    // },
  },
  methods: {
    activeToggler: function(e) {
      e.target.classList.toggle('active')
    },
    loadPosts: function() {
      console.log(this)
      
      const postsEN = [
        {
          id: 'post_1',
          date: 'September 23, 2020',
          image: require('@/assets/img/post-img-3.png'),
          title: 'Tesla claims it can drive battery costs down even lower ...',
          caption: 'Amid a packed afternoon of announcements from Tesla around innovations the company is pursuing to slash the cost of electric vehicles and energy storage ...',
        },
        {
          id: 'post_2',
          date: 'September 22, 2020',
          image: require('@/assets/img/post-img-1.png'),
          title: 'Pinterest breaks daily download record due to ...',
          caption: 'The excitement around the ability to customize your iPhone home screen following the release of iOS 14 has been paying off for Pinterest ...',
        },
        {
          id: 'post_3',
          date: 'September 16, 2020',
          image: require('@/assets/img/post-img-2.png'),
          title: 'Four perspectives on Apple’s new service bundle',
          caption: 'Apple’s hardware event yesterday wasn’t particularly eventful for its most popular devices, bringing only iterative changes to Apple  Watch and ...',
        },
      ]
      const postsRU = [
        {
          id: 'post_1',
          date: '23 сентября 2020 г.',
          image: require('@/assets/img/post-img-3.png'),
          title: 'Tesla утверждает, что может снизить стоимость ...',
          caption: 'После полудня, когда Tesla объявила об инновациях, которые компания стремится сократить стоимость электромобилей и накопителей энергии ...',
        },
        {
          id: 'post_2',
          date: '21 сентября 2020 г.',
          image: require('@/assets/img/post-img-1.png'),
          title: 'Pinterest побил ежедневный рекорд загрузок из-за ...',
          caption: 'Волнение вокруг возможности настраивать домашний экран iPhone после выпуска iOS 14 окупилось для Pinterest ...',
        },
        {
          id: 'post_3',
          date: '16 сентября 2020 г.',
          image: require('@/assets/img/post-img-2.png'),
          title: 'Четыре точки зрения на новый пакет услуг Apple',
          caption: 'Вчерашнее мероприятие, посвященное аппаратному обеспечению Apple, не было особенно насыщенным для его самых популярных устройств: в Apple Watch и ...',
        },
      ]

      switch (this.lang) {
        case 'en':
          this.posts.push(...postsEN)
        break

        case 'ru':
          this.posts.push(...postsRU)
        break
      }
    }
  },
  watch: {
    lang: function() {
      const postsEN = [
        {
          id: 'post_1',
          date: 'September 23, 2020',
          image: require('@/assets/img/post-img-3.png'),
          title: 'Tesla claims it can drive battery costs down even lower ...',
          caption: 'Amid a packed afternoon of announcements from Tesla around innovations the company is pursuing to slash the cost of electric vehicles and energy storage ...',
        },
        {
          id: 'post_2',
          date: 'September 22, 2020',
          image: require('@/assets/img/post-img-1.png'),
          title: 'Pinterest breaks daily download record due to ...',
          caption: 'The excitement around the ability to customize your iPhone home screen following the release of iOS 14 has been paying off for Pinterest ...',
        },
        {
          id: 'post_3',
          date: 'September 16, 2020',
          image: require('@/assets/img/post-img-2.png'),
          title: 'Four perspectives on Apple’s new service bundle',
          caption: 'Apple’s hardware event yesterday wasn’t particularly eventful for its most popular devices, bringing only iterative changes to Apple  Watch and ...',
        },
        {
          id: 'post_4',
          date: 'July 23, 2020',
          image: require('@/assets/img/post-img-4.png'),
          title: 'Facebook tests a new Page design with a cleaner layout ...',
          caption: 'Facebook  is testing a new design for Facebook Pages that will, among other things, remove the “Like” count, offer a cleaner and more  ...',
        },
      ]
      const postsRU = [
        {
          id: 'post_1',
          date: '23 сентября 2020 г.',
          image: require('@/assets/img/post-img-3.png'),
          title: 'Tesla утверждает, что может снизить стоимость ...',
          caption: 'После полудня, когда Tesla объявила об инновациях, которые компания стремится сократить стоимость электромобилей и накопителей энергии ...',
        },
        {
          id: 'post_2',
          date: '21 сентября 2020 г.',
          image: require('@/assets/img/post-img-1.png'),
          title: 'Pinterest побил ежедневный рекорд загрузок из-за ...',
          caption: 'Волнение вокруг возможности настраивать домашний экран iPhone после выпуска iOS 14 окупилось для Pinterest ...',
        },
        {
          id: 'post_3',
          date: '16 сентября 2020 г.',
          image: require('@/assets/img/post-img-2.png'),
          title: 'Четыре точки зрения на новый пакет услуг Apple',
          caption: 'Вчерашнее мероприятие, посвященное аппаратному обеспечению Apple, не было особенно насыщенным для его самых популярных устройств: в Apple Watch и ...',
        },
        {
          id: 'post_4',
          date: '23 июля 2020 г.',
          image: require('@/assets/img/post-img-4.png'),
          title: 'Facebook тестирует новый дизайн страницы ...',
          caption: 'Facebook тестирует новый дизайн страниц Facebook, который, среди прочего, удалит счетчик «Нравится», предложит более чистый и ...',
        },
      ]

      switch (this.lang) {
        case 'en':
          this.posts = postsEN
        break

        case 'ru':
          this.posts = postsRU
        break
      }
    },
  },
  beforeMount() {
    const postsEN = [
        {
          id: 'post_1',
          date: 'September 23, 2020',
          image: require('@/assets/img/post-img-3.png'),
          title: 'Tesla claims it can drive battery costs down even lower ...',
          caption: 'Amid a packed afternoon of announcements from Tesla around innovations the company is pursuing to slash the cost of electric vehicles and energy storage ...',
        },
        {
          id: 'post_2',
          date: 'September 22, 2020',
          image: require('@/assets/img/post-img-1.png'),
          title: 'Pinterest breaks daily download record due to ...',
          caption: 'The excitement around the ability to customize your iPhone home screen following the release of iOS 14 has been paying off for Pinterest ...',
        },
        {
          id: 'post_3',
          date: 'September 16, 2020',
          image: require('@/assets/img/post-img-2.png'),
          title: 'Four perspectives on Apple’s new service bundle',
          caption: 'Apple’s hardware event yesterday wasn’t particularly eventful for its most popular devices, bringing only iterative changes to Apple  Watch and ...',
        },
        {
          id: 'post_4',
          date: 'July 23, 2020',
          image: require('@/assets/img/post-img-4.png'),
          title: 'Facebook tests a new Page design with a cleaner layout ...',
          caption: 'Facebook  is testing a new design for Facebook Pages that will, among other things, remove the “Like” count, offer a cleaner and more  ...',
        },
      ]
    const postsRU = [
      {
        id: 'post_1',
        date: '23 сентября 2020 г.',
        image: require('@/assets/img/post-img-3.png'),
        title: 'Tesla утверждает, что может снизить стоимость ...',
        caption: 'После полудня, когда Tesla объявила об инновациях, которые компания стремится сократить стоимость электромобилей и накопителей энергии ...',
      },
      {
        id: 'post_2',
        date: '21 сентября 2020 г.',
        image: require('@/assets/img/post-img-1.png'),
        title: 'Pinterest побил ежедневный рекорд загрузок из-за ...',
        caption: 'Волнение вокруг возможности настраивать домашний экран iPhone после выпуска iOS 14 окупилось для Pinterest ...',
      },
      {
        id: 'post_3',
        date: '16 сентября 2020 г.',
        image: require('@/assets/img/post-img-2.png'),
        title: 'Четыре точки зрения на новый пакет услуг Apple',
        caption: 'Вчерашнее мероприятие, посвященное аппаратному обеспечению Apple, не было особенно насыщенным для его самых популярных устройств: в Apple Watch и ...',
      },
      {
        id: 'post_4',
        date: '23 июля 2020 г.',
        image: require('@/assets/img/post-img-4.png'),
        title: 'Facebook тестирует новый дизайн страницы ...',
        caption: 'Facebook тестирует новый дизайн страниц Facebook, который, среди прочего, удалит счетчик «Нравится», предложит более чистый и ...',
      },
    ]

    switch (this.lang) {
      case 'en':
        this.posts = postsEN
      break

      case 'ru':
        this.posts = postsRU
      break
    }
  },
  mounted() {
    // anime({
    //   targets: '.preload_bg_green',
    //   points: [
    //     { value: '1920,1080 0,1080 0,0 432.1,0 1920,0' },
    //     { value: '1920,1080 0,1080 0,0 0,0 0,1080' },
    //   ],
    //   easing: 'easeOutQuad',
    //   duration: 1000,
    // });
    // const header = document.querySelector('.page_header')
    // const content = document.querySelector('.page_content')
    // const panelTop = document.querySelector('.panel--top')
    // const panelBottom = document.querySelector('.panel--bottom')
    // const panelLeft = document.querySelector('.panel--left')

    if (this.isMobDevice) {
      anime({
        targets: '.page_blog',
        opacity: [0, 1],
        easing: 'linear',
        duration: 500,
        delay: 700
      })

    } else {
      anime({
        targets: '.page_blog',
        opacity: [0, 1],
        easing: 'linear',
        duration: 500,
        delay: 300
      })
      anime({
        targets: '.page_header',
        translateX: [-200, 0],
        opacity: [0, 1],
        easing: 'easeOutQuad',
        duration: 1000,
        delay: 500,
      })
      anime({
        targets: '.post_preview',
        opacity: [0, 1],
        easing: 'easeOutQuad',
        duration: 1000,
        delay: anime.stagger(500, {start: 700}),
      })
    }
    
    // anime({
    //   targets: panelTop,
    //   translateX: ['100vw', 0],
    //   // opacity: [0, 1],
    //   easing: 'linear',
    //   duration: 800,
    // })
    // anime({
    //   targets: panelLeft,
    //   translateX: ['-200px', 0],
    //   opacity: [0, 1],
    //   easing: 'easeOutQuad',
    //   duration: 1000,
    // })
    // anime({
    //   targets: header,
    //   translateX: ['80vw', 0],
    //   opacity: [0, 1],
    //   easing: 'easeOutQuad',
    //   duration: 1000,
    //   delay: 200,
    // })
    // anime({
    //   targets: content,
    //   opacity: [0, 1],
    //   easing: 'easeOutQuad',
    //   duration: 700,
    //   delay: 800,
    // })
    // anime({
    //   targets: panelBottom,
    //   translateY: ['200px', 0],
    //   opacity: [0, 1],
    //   easing: 'linear',
    //   duration: 300,
    //   delay: 1300,
    // })
  },
  beforeRouteLeave (to, from, next) {
    if (this.isMobDevice) {
      anime({
        targets: '.page_blog',
        opacity: [1, 0],
        easing: 'linear',
        duration: 500,
        complete: function() { 
          next();
        }
      })
      
    } else {
      anime({
        targets: '.page_blog',
        opacity: [1, 0],
        easing: 'linear',
        duration: 1000,
        complete: function() { 
          next();
        }
      })
    }
  },
}
</script>

<style lang="scss" scoped>
.page_blog {
  .page_header {}
  .page_bottom {
    display: flex;
    justify-content: center;
  }
  .btn_more {
    padding-left: 2.6rem;
    padding-right: 3.6rem;
    .icon {
      width: 22px;
      margin-right: 2rem;
    }
  }
}
.posts_list {
  padding-bottom: 3rem;
}
.post_preview {
  position: relative;
  margin-bottom: 5rem;
  height: 33.5rem;
  display: flex;
  &.active, &:hover {
    .post_img {
      img {
        transform: scale(1.15);
        transition: all 1s;
      }
    }
    .post_desc::before {
      width: 100%;
      transition: all 1s;
    }
    .post_title {
      color: #fff;
      transition: all 1s;
    }
    .post_caption {
      color: #fff;
      opacity: 1;
      transition: all 1s;
    }
  }
  .post_img {
    width: 64rem;
    height: 100%;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    img {
      width: 100%;
      transform: scale(1);
      will-change: transform;
      transition: all 1s;
    }
  }
  .post_desc {
    position: relative;
    padding-left: 6rem;
    padding-right: 2rem;
    width: 100%;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    &::before {
      position: absolute;
      display: block;
      content: '';
      top: 0;
      left: 0;
      width: 0;
      height: 100%;
      background-color: #000;
      transition: all 1s;
    }
  }
  .post_title {
    position: relative;
    z-index: 10;
    margin-bottom: 2rem;
    font-weight: 700;
    font-size: 5rem;
    line-height: 6rem;
    transition: all 1s;
  }
  .post_date {
    position: relative;
    z-index: 10;
    margin-bottom: 1.6rem;
    font-size: 1.8rem;
    line-height: 143.2%;
    color: #E56915;
  }
  .post_caption {
    position: relative;
    z-index: 10;
    font-size: 2rem;
    line-height: 143.2%;
    color: #000000;
    opacity: 0.5;
    transition: all 1s;
  }
}
@media (max-width: 1365px) {
  .post_preview .post_img {
    width: 58rem;
  }
}
@media (max-width: 1366px) and (min-width: 992px) {
  .page_blog {
    padding-bottom: 5rem;
    .btn_more {
      padding-left: 30px;
      padding-right: 30px;
      .icon {
        width: 22px;
        margin-right: 50px;
      }
    }
  }
  .post_preview .post_title {
    font-size: 4rem;
    line-height: 5rem;
  }
}
@media (max-width: 991px) {
  .page_blog {
    padding-bottom: 5rem;
    .btn_more {
      padding-left: 1.7rem;
      padding-right: 2rem;
      // width: 20rem;
      display: inline-flex;
      .icon {
        width: 35px;
        margin-right: 2rem;
      }
    }
  }
  .page_title {
    margin-bottom: 1rem;
  }
  .page_header {
    margin-bottom: 3rem;
  }
  .posts_list {
    padding-bottom: 1rem;
  }
  .post_preview {
    margin-bottom: 3rem;
    display: block;
    height: auto;
    &.active, &:hover {
      .post_img {
        img {
          transform: none;
        }
      }
      .post_title {
        color: #000;
      }
      .post_caption {
        color: #808080;
      }
    }
    .post_img {
      margin-bottom: 1.2rem;
      width: 100%;
      height: auto;
    }
    .post_desc {
      padding: 0;
      &::before {
        display: none;
      }
    }
    .post_title {
      margin-bottom: 1.1rem;
      font-size: 2rem;
      line-height: 2.3rem;
    }
    .post_date {
      margin-bottom: 1rem;
      font-size: 1.4rem;
      line-height: 143.2%;
    }
    .post_caption {
      font-size: 1.6rem;
      line-height: 2.3rem;
      color: #808080;
      opacity: 1;
    }
  }
  
}

@media (max-width: 767px) {
  .page_blog .btn_more .icon {
    width: 22px;
  }
}
</style>