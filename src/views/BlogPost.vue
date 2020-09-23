<template>
  <div class="page page_blog">
    <div class="page_header">
      <router-link to="/blog"><img src="@/assets/img/arrow-3-left.svg" alt=" "></router-link>
    </div>
    <div class="page_content">
      <div class="blog_post">
        <div class="post_top_image"><img :src="post.img" alt=" "></div>
        <div class="post_title">{{post.title}}</div>
        <div class="post_date">{{post.date}}</div>
        <div class="post_content" v-html="post.content"></div>
      </div>
      <div class="similar_posts">
        <h2 class="s_title">{{ $t('text8') }}</h2>
        <carousel v-if="isMobDevice" :per-page="1" :loop="true" :navigate-to="1" :navigation-enabled="false" :pagination-enabled="false">
          <slide v-for="post in similarPosts" v-bind:key="post.id">
            <router-link :to="`/blog/:${post.id}`" class="similar_post" @mouseenter.native="activeToggler($event)" @mouseleave.native="activeToggler($event)">
              <div class="post_img"><img :src="post.image" alt=" "></div>
              <div class="post_desc">
                <h2 class="post_title">{{post.title}}</h2>
                <div class="post_date">{{post.date}}</div>
                <div class="post_caption">{{post.caption}}</div>
              </div>
            </router-link>
          </slide>
        </carousel>
        <div v-else class="inner">
          <router-link :to="`/blog/:${post.id}`" class="similar_post" v-for="post in similarPosts" v-bind:key="post.id" @mouseenter.native="activeToggler($event)" @mouseleave.native="activeToggler($event)">
            <div class="post_img"><img :src="post.image" alt=" "></div>
            <div class="post_desc">
              <h2 class="post_title">{{post.title}}</h2>
              <div class="post_date">{{post.date}}</div>
              <div class="post_caption">{{post.caption}}</div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import anime from 'animejs/lib/anime.es.js'
import { isMobile, isTablet } from "mobile-device-detect"
import { Carousel, Slide } from 'vue-carousel'

export default {
  components: {
    Carousel,
    Slide
  },
  data: () => {
    return {
      post: {
        id: '',
        title: '',
        date: '',
        img: '',
        content: ''
      },
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
    similarPosts() {
      return this.posts
    }
  },
  methods: {
    activeToggler: function(e) {
      e.target.classList.toggle('active')
    }
  },
  
  watch: {
    lang: function() {
      let title = this.post.title
      let sliced = title.slice(0, 20)
      if (sliced.length < title.length) {
        sliced += '...';
      }
      this.$route.params.postTitle = sliced

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

          // let id = this.$route.params.id.replace(/\:/, "")
      let id = this.$route.params.postId
      
      // There should be request on the server to recieve Product data

      this.post.id = id

      if (this.lang == 'en') {
        
        switch (id) {
          case 'post_1':
            this.post.title = 'Tesla claims it can drive battery costs down even lower with new material science innovations'
            this.post.date = 'September 23, 2020'
            this.post.img = require('@/assets/img/post-img-3.png')
          break
          case 'post_2':
            this.post.title = 'Pinterest breaks daily download record due to user interest in iOS 14 design ideas'
            this.post.date = 'September 22, 2020'
            this.post.img = require('@/assets/img/post-img-1.png')
          break
          case 'post_3':
            this.post.title = 'Four perspectives on Apple’s new service bundle'
            this.post.date = 'September 16, 2020'
            this.post.img = require('@/assets/img/post-img-2.png')
          break
          case 'post_4':
            this.post.title = 'Facebook tests a new Page design with a cleaner layout and no more ‘Like’ button'
            this.post.date = 'July 23, 2020'
            this.post.img = require('@/assets/img/post-img-4.png')
          break
        }

        this.post.content = `<p><b>Amber Bravo:</b> What do you see as the through line—the values, parameters, or qualities—that you’re starting to establish as art directors charged with making Google products look like Google? How do you push the boundaries of what kind of art belongs in our ecosystem, while avoiding the purgatory of everything looking the same?</p>

        <p><b>Jefferson Cheng, co-runs the Material Design Imagery Program:</b> We don’t really prescribe a one-size-fits-all style for all of Google. One of our main principles when making decisions is keeping things Googley, which essentially means being intelligent and optimistic.</p>

        <p><b>Emily Blank, co-runs the Material Design Imagery Program:</b> For one of our design sprints we went to the Walt Disney Museum in San Francisco, and I thought it was so fascinating how through a variety of visual, stylistic elements, you can always tell a Disney movie from another animated film. Still, each movie had its own message, its own creative vision. Something similar is happening right now at Google: We’re creating these suites of imagery to amplify products belonging to several teams, but when they share a quality they fit into a larger story, like a book of chapters. </p>

        <p><b>Shannon May, Art Director and Creative Producer for Ads:</b> But, to your point, you do have to continually pull this lever to find that special weirdness, because otherwise everything does end up looking the same. A lot of other companies look to larger companies like Google or Apple for inspiration and trend-setting. This can water down our visual voice, so it’s our job to keep evolving it, to keep it distinct. For our Stickers program, which runs within messaging apps, we worked with artists from all across the world. What’s great about that is we engaged with artists in different regions and countries, to speak to the specific themes we wanted to communicate.</p>
        
        <img src="${require('@/assets/img/image-2.png')}" alt=" ">

        <p><b>Amber Bravo:</b> What do you see as the through line—the values, parameters, or qualities—that you’re starting to establish as art directors charged with making Google products look like Google? How do you push the boundaries of what kind of art belongs in our ecosystem, while avoiding the purgatory of everything looking the same?</p>
        <p><b>Jefferson Cheng, co-runs the Material Design Imagery Program:</b> We don’t really prescribe a one-size-fits-all style for all of Google. One of our main principles when making decisions is keeping things Googley, which essentially means being intelligent and optimistic.</p>`

      } else if (this.lang == 'ru') {

        switch (id) {
          case 'post_1':
            this.post.title = 'Tesla утверждает, что может снизить стоимость аккумуляторов с помощью новых инноваций в области материаловедения'
            this.post.date = '23 сентября 2020 г.'
            this.post.img = require('@/assets/img/post-img-3.png')
          break
          case 'post_2':
            this.post.title = 'Pinterest побил ежедневный рекорд загрузок из-за интереса пользователей к дизайнерским идеям iOS 14'
            this.post.date = '22 сентября 2020 г.'
            this.post.img = require('@/assets/img/post-img-1.png')
          break
          case 'post_3':
            this.post.title = 'Четыре точки зрения на новый пакет услуг Apple'
            this.post.date = '16 сентября 2020 г.'
            this.post.img = require('@/assets/img/post-img-2.png')
          break
          case 'post_4':
            this.post.title = 'Facebook тестирует новый дизайн страницы с более понятным макетом и без кнопки «Нравится»'
            this.post.date = '23 июля 2020 г.'
            this.post.img = require('@/assets/img/post-img-4.png')
          break
        }

        this.post.content = `<p> <b> Янтарное браво: </b> Что вы видите в качестве сквозной линии - ценности, параметры или качества, - которые вы начинаете утверждать в качестве арт-директоров, которым поручено сделать продукты Google похожими на Google? Как раздвинуть границы того, какой вид искусства принадлежит нашей экосистеме, избегая при этом чистилища, где все выглядит одинаково? </p>

        <p> <b> Джефферсон Ченг, со-руководитель программы Material Design Imagery. </b> На самом деле мы не предписываем единый стиль для всех сотрудников Google. Один из наших основных принципов при принятии решений - придерживаться Google, что, по сути, означает быть умным и оптимистичным. </p>

        <p> <b> Эмили Бланк, соучредитель программы Material Design Imagery. </b> На одном из наших дизайнерских спринтов мы пошли в Музей Уолта Диснея в Сан-Франциско, и я подумал, что это было так увлекательно, как через разнообразие визуальных, стилистических элементов, вы всегда можете отличить фильм Диснея от другого мультфильма. И все же в каждом фильме было свое послание, свое творческое видение. Нечто подобное происходит прямо сейчас в Google: мы создаем эти наборы изображений, чтобы усилить продукцию, принадлежащую нескольким командам, но когда они разделяют качество, они вписываются в большую историю, например, в книгу глав. </p>

        <p> <b> Шеннон Мэй, арт-директор и креативный продюсер рекламы: </b> Но, к вашему мнению, вам нужно постоянно дергать за этот рычаг, чтобы обнаружить эту особенную странность, потому что в противном случае все будет выглядеть одинаково . Многие другие компании обращаются к более крупным компаниям, таким как Google или Apple, в поисках вдохновения и определения тенденций. Это может приглушить наш визуальный голос, поэтому наша задача - продолжать его развивать, чтобы он отличался. Для нашей программы стикеров, которая работает в приложениях для обмена сообщениями, мы работали с художниками со всего мира. Что в этом хорошего, так это то, что мы взаимодействуем с артистами из разных регионов и стран, чтобы обсудить конкретные темы, которые мы хотели донести. </p>
        
        <img src = "$ {require ('@ / assets / img / image-2.png')}" alt = "">

        <p> <b> Янтарное браво: </b> Что вы видите в качестве сквозной линии - ценности, параметры или качества, - которые вы начинаете утверждать в качестве арт-директоров, которым поручено сделать продукты Google похожими на Google? Как раздвинуть границы того, какой вид искусства принадлежит нашей экосистеме, избегая при этом чистилища, где все выглядит одинаково? </p>
        <p> <b> Джефферсон Ченг, со-руководитель программы Material Design Imagery. </b> На самом деле мы не предписываем единый стиль для всех сотрудников Google. Один из наших основных принципов при принятии решений - придерживаться Google, что означает быть умным и оптимистичным. </p>`

      }
    },
  },
  mounted() {
    let title = this.post.title
    let sliced = title.slice(0, 20)
    if (sliced.length < title.length) {
      sliced += '...';
    }
    this.$route.params.postTitle = sliced
    // anime({
    //   targets: '.preload_bg_green',
    //   points: [
    //     { value: '1920,1080 0,1080 0,0 432.1,0 1920,0' },
    //     { value: '1920,1080 0,1080 0,0 0,0 0,1080' },
    //   ],
    //   easing: 'easeOutQuad',
    //   duration: 1000,
    // });
    anime({
      targets: document.querySelector('.page_header'),
      opacity: [0, 1],
      easing: 'linear',
      duration: 700,
    })
    anime({
      targets: document.querySelector('.page_content'),
      opacity: [0, 1],
      easing: 'linear',
      duration: 700,
      delay: 200,
    });
    anime({
      targets: document.querySelector('.text_bottom'),
      opacity: [0, 1],
      easing: 'linear',
      duration: 700,
      delay: 500
    })
  },
  
  beforeRouteLeave (to, from, next) {
    anime({
      targets: document.querySelector('.page_header'),
      opacity: [1, 0],
      easing: 'linear',
      duration: 700,
    })
    anime({
      targets: document.querySelector('.page_content'),
      opacity: [1, 0],
      easing: 'linear',
      duration: 700,
      delay: 200,
    });
    anime({
      targets: document.querySelector('.text_bottom'),
      opacity: [1, 0],
      easing: 'linear',
      duration: 700,
      delay: 500,
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
        date: '22 сентября 2020 г.',
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

    // let id = this.$route.params.id.replace(/\:/, "")
    let id = this.$route.params.postId
    
    // There should be request on the server to recieve Product data

    this.post.id = id

    if (this.lang == 'en') {
      
      switch (id) {
        case 'post_1':
          this.post.title = 'Tesla claims it can drive battery costs down even lower with new material science innovations'
          this.post.date = 'September 23, 2020'
          this.post.img = require('@/assets/img/post-img-3.png')
        break
        case 'post_2':
          this.post.title = 'Pinterest breaks daily download record due to user interest in iOS 14 design ideas'
          this.post.date = 'September 22, 2020'
          this.post.img = require('@/assets/img/post-img-1.png')
        break
        case 'post_3':
          this.post.title = 'Four perspectives on Apple’s new service bundle'
          this.post.date = 'September 16, 2020'
          this.post.img = require('@/assets/img/post-img-2.png')
        break
        case 'post_4':
          this.post.title = 'Facebook tests a new Page design with a cleaner layout and no more ‘Like’ button'
          this.post.date = 'July 23, 2020'
          this.post.img = require('@/assets/img/post-img-4.png')
        break
      }

      this.post.content = `<p><b>Amber Bravo:</b> What do you see as the through line—the values, parameters, or qualities—that you’re starting to establish as art directors charged with making Google products look like Google? How do you push the boundaries of what kind of art belongs in our ecosystem, while avoiding the purgatory of everything looking the same?</p>

      <p><b>Jefferson Cheng, co-runs the Material Design Imagery Program:</b> We don’t really prescribe a one-size-fits-all style for all of Google. One of our main principles when making decisions is keeping things Googley, which essentially means being intelligent and optimistic.</p>

      <p><b>Emily Blank, co-runs the Material Design Imagery Program:</b> For one of our design sprints we went to the Walt Disney Museum in San Francisco, and I thought it was so fascinating how through a variety of visual, stylistic elements, you can always tell a Disney movie from another animated film. Still, each movie had its own message, its own creative vision. Something similar is happening right now at Google: We’re creating these suites of imagery to amplify products belonging to several teams, but when they share a quality they fit into a larger story, like a book of chapters. </p>

      <p><b>Shannon May, Art Director and Creative Producer for Ads:</b> But, to your point, you do have to continually pull this lever to find that special weirdness, because otherwise everything does end up looking the same. A lot of other companies look to larger companies like Google or Apple for inspiration and trend-setting. This can water down our visual voice, so it’s our job to keep evolving it, to keep it distinct. For our Stickers program, which runs within messaging apps, we worked with artists from all across the world. What’s great about that is we engaged with artists in different regions and countries, to speak to the specific themes we wanted to communicate.</p>
      
      <img src="${require('@/assets/img/image-2.png')}" alt=" ">

      <p><b>Amber Bravo:</b> What do you see as the through line—the values, parameters, or qualities—that you’re starting to establish as art directors charged with making Google products look like Google? How do you push the boundaries of what kind of art belongs in our ecosystem, while avoiding the purgatory of everything looking the same?</p>
      <p><b>Jefferson Cheng, co-runs the Material Design Imagery Program:</b> We don’t really prescribe a one-size-fits-all style for all of Google. One of our main principles when making decisions is keeping things Googley, which essentially means being intelligent and optimistic.</p>`

    } else if (this.lang == 'ru') {

      switch (id) {
        case 'post_1':
          this.post.title = 'Tesla утверждает, что может снизить стоимость аккумуляторов с помощью новых инноваций в области материаловедения'
          this.post.date = '23 сентября 2020 г.'
          this.post.img = require('@/assets/img/post-img-3.png')
        break
        case 'post_2':
          this.post.title = 'Pinterest побил ежедневный рекорд загрузок из-за интереса пользователей к дизайнерским идеям iOS 14'
          this.post.date = '22 сентября 2020 г.'
          this.post.img = require('@/assets/img/post-img-1.png')
        break
        case 'post_3':
          this.post.title = 'Четыре точки зрения на новый пакет услуг Apple'
          this.post.date = '16 сентября 2020 г.'
          this.post.img = require('@/assets/img/post-img-2.png')
        break
        case 'post_4':
          this.post.title = 'Facebook тестирует новый дизайн страницы с более понятным макетом и без кнопки «Нравится»'
          this.post.date = '23 июля 2020 г.'
          this.post.img = require('@/assets/img/post-img-4.png')
        break
      }

      this.post.content = `<p> <b> Янтарное браво: </b> Что вы видите в качестве сквозной линии - ценности, параметры или качества, - которые вы начинаете утверждать в качестве арт-директоров, которым поручено сделать продукты Google похожими на Google? Как раздвинуть границы того, какой вид искусства принадлежит нашей экосистеме, избегая при этом чистилища, где все выглядит одинаково? </p>

      <p> <b> Джефферсон Ченг, со-руководитель программы Material Design Imagery. </b> На самом деле мы не предписываем единый стиль для всех сотрудников Google. Один из наших основных принципов при принятии решений - придерживаться Google, что, по сути, означает быть умным и оптимистичным. </p>

      <p> <b> Эмили Бланк, соучредитель программы Material Design Imagery. </b> На одном из наших дизайнерских спринтов мы пошли в Музей Уолта Диснея в Сан-Франциско, и я подумал, что это было так увлекательно, как через разнообразие визуальных, стилистических элементов, вы всегда можете отличить фильм Диснея от другого мультфильма. И все же в каждом фильме было свое послание, свое творческое видение. Нечто подобное происходит прямо сейчас в Google: мы создаем эти наборы изображений, чтобы усилить продукцию, принадлежащую нескольким командам, но когда они разделяют качество, они вписываются в большую историю, например, в книгу глав. </p>

      <p> <b> Шеннон Мэй, арт-директор и креативный продюсер рекламы: </b> Но, к вашему мнению, вам нужно постоянно дергать за этот рычаг, чтобы обнаружить эту особенную странность, потому что в противном случае все будет выглядеть одинаково . Многие другие компании обращаются к более крупным компаниям, таким как Google или Apple, в поисках вдохновения и определения тенденций. Это может приглушить наш визуальный голос, поэтому наша задача - продолжать его развивать, чтобы он отличался. Для нашей программы стикеров, которая работает в приложениях для обмена сообщениями, мы работали с художниками со всего мира. Что в этом хорошего, так это то, что мы взаимодействуем с артистами из разных регионов и стран, чтобы обсудить конкретные темы, которые мы хотели донести. </p>
      
      <img src = "$ {require ('@ / assets / img / image-2.png')}" alt = "">

      <p> <b> Янтарное браво: </b> Что вы видите в качестве сквозной линии - ценности, параметры или качества, - которые вы начинаете утверждать в качестве арт-директоров, которым поручено сделать продукты Google похожими на Google? Как раздвинуть границы того, какой вид искусства принадлежит нашей экосистеме, избегая при этом чистилища, где все выглядит одинаково? </p>
      <p> <b> Джефферсон Ченг, со-руководитель программы Material Design Imagery. </b> На самом деле мы не предписываем единый стиль для всех сотрудников Google. Один из наших основных принципов при принятии решений - придерживаться Google, что означает быть умным и оптимистичным. </p>`

    }
    

    /////////////////////////////////////////////////////////////////////
  }
}
</script>

<style lang="scss" scoped>
.page_blog {
  padding-bottom: 14rem;
}
.blog_post {
  position: relative;
  margin-bottom: 10rem;
  .post_top_image {
    margin-bottom: 5rem;
    width: 100%;
    height: 40rem;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  .post_title {
    margin-bottom: 4rem;
    font-weight: 700;
    font-size: 7rem;
    line-height: 8.4rem;
  }
  .post_date {
    margin-bottom: 3rem;
    font-size: 1.8rem;
    line-height: 143.2%;
    color: #E56915;
  }
  .post_content {
    position: relative;
    z-index: 10;
    font-size: 2rem;
    line-height: 2.9rem;
    /deep/ p {
      margin-bottom: 5.5rem;
      &:last-child {
        margin-bottom: 0;
      }
    }
    /deep/ img {
      margin-bottom: 3rem;
    }
  }
}
.similar_posts {
  .s_title {
    margin-bottom: 7rem;
    font-size: 5rem;
    line-height: 6rem;
  }
}
.similar_post {
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
    transform: scale(1);
    will-change: transform;
    transition: all 1s;
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
  .similar_post .post_img {
    width: 58rem;
  }
}

@media (min-width: 992px) and (max-width: 1366px) {
  .similar_posts {
    .s_title {
      display: none;
    }
    /deep/ .VueCarousel-wrapper {
      overflow: visible;
    }
  }
  .similar_post {
    padding-left: 20px;
    padding-right: 20px;
    .post_title {
      font-size: 4rem;
      line-height: 5rem;
    }
    .post_img {
      width: 440px;
    }
  }
}

@media (max-width: 991px) {
  .page_blog {
    padding-bottom: 4rem;
  }
  .page_title {
    margin-bottom: 1rem;
  }
  .page_header {
    margin-bottom: 2rem;
  }
  .blog_post .post_content >>> p {
    margin-bottom: 2.3rem;
  }
  .blog_post {
    margin-bottom: 7.5rem;
    .post_top_image {
      margin-bottom: 1.2rem;
      height: auto;
    }
    .post_title {
      margin-bottom: 1.2rem;
      font-size: 3rem;
      line-height: 3.5rem;
    }
    .post_date {
      margin-bottom: 2rem;
      font-size: 1.4rem;
      line-height: 143.2%;
    }
    .post_content {
      position: relative;
      z-index: 10;
      font-size: 1.6rem;
      line-height: 2.3rem;
      /deep/ p {
        margin-bottom: 2.3rem;
        &:last-child {
          margin-bottom: 0;
        }
      }
      /deep/ img {
        margin-bottom: 2rem;
      }
    }
  }
  .similar_posts {
    .s_title {
      display: none;
    }
    /deep/ .VueCarousel-wrapper {
      overflow: visible;
    }
  }
  .similar_post {
    padding-left: 10px;
    padding-right: 10px;
    margin-bottom: 0;
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
</style>