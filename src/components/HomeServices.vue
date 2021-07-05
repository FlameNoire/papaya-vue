<template>
  <section id="screen_3" class="section s_third">
    <h2 class="s_title">{{$t('services.t1')}}</h2>
    <div class="s_content">
      <div class="block--left">
        <div v-if="renderServices">
          <div v-if="isMobDevice" class="bg_trgl"><img src="@/assets/img/trgl-2.svg" alt=" "></div>

          <div v-if="!isMobDevice" class="categories">

            <div class="bg_lines">
              <svg version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 930 530" style="enable-background:new 0 0 930 530;" xml:space="preserve">
                <polyline class="st0" points="666.3,245.1 439.7,365.9 252.1,215.5 "/>
              </svg>
            </div>

            <ul class="cat_list">
              <li class="cat_list_tab strategy" @click.prevent="catClick1($event)" @mouseover.stop="catHover($event, services_cats[0].title)">
                <a href="#" class="cats">
                  <span class="cat_text">{{services_cats[0].title}}</span>
                  <span class="cat_icon">
                    <img :src="services_cats[0].icon" alt=" ">
                    <img :src="services_cats[0].icon2" alt=" ">
                  </span>
                </a>
                <div class="sub_cats_wrap">
                  <ul>
                    <li v-for="(item, index) in services_cats[0].list" :key="index" @mouseover.stop="catHover($event, item)"><router-link to="/services">{{item}}</router-link></li>
                  </ul>
                </div>
              </li>
              <li class="cat_list_tab creative" @click.prevent="catClick2($event)" @mouseover.stop="catHover($event, services_cats[1].title)">
                <a href="#" class="cats">
                  <span class="cat_text">{{services_cats[1].title}}</span>
                  <span class="cat_icon">
                    <img :src="services_cats[1].icon" alt=" ">
                    <img :src="services_cats[1].icon2" alt=" ">
                  </span>
                </a>
                <div class="sub_cats_wrap">
                  <ul>
                    <li v-for="(item, index) in services_cats[1].list" :key="index" @mouseover.stop="catHover($event, item)"><router-link to="/services">{{item}}</router-link></li>
                  </ul>
                </div>
              </li>
              <li class="cat_list_tab technology" @click.prevent="catClick3($event)" @mouseover.stop="catHover($event, services_cats[2].title)">
                <a href="#" class="cats">
                  <span class="cat_icon">
                    <img :src="services_cats[2].icon" alt=" ">
                    <img :src="services_cats[2].icon2" alt=" ">
                  </span>
                  <span class="cat_text">{{services_cats[2].title}}</span>
                </a>
                <div class="sub_cats_wrap">
                  <ul>
                    <li v-for="(item, index) in services_cats[2].list" :key="index" @mouseover.stop="catHover($event, item)"><router-link to="/services">{{item}}</router-link></li>
                  </ul>
                </div>
              </li>
            </ul>

            <div class="cat_canvas">
            </div>
          </div>

          <div v-else class="categories mob">

            <ul class="cat_list">
              <li v-for="(cat, index) in services_cats" :key="cat.title" class="cat_list_tab strategy" :class="{'active' : index == activeTab}" @click.prevent="catClickHandler($event, index)">
                <a @click.prevent href="#" class="cats">
                  <span class="cat_icon">
                    <img :src="cat.icon" alt=" ">
                    <img :src="cat.icon2" alt=" ">
                  </span>
                  <span class="cat_text">{{cat.title}}</span>
                </a>
                
                  <transition @after-enter="openTab" @leave="closeTab" appear>
                    <div v-show="activeTab == index" class="sub_cats_wrap">
                    <ul>
                      <li v-for="(item, index) in cat.list" :key="index"><router-link to="/services">{{item}}</router-link></li>
                    </ul>
                    </div>
                  </transition>
                
              </li>
            </ul>

            
          </div>
        </div>
      </div>
      <div v-if="!isMobDevice" class="block--right">
        <div class="chosen_cat">
          <img src="@/assets/img/graph-tablet2.png" alt=" ">
          <div class="chosen_cat_name">
            <p>{{services_cats[0].title}}</p>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
import anime from 'animejs/lib/anime.es.js'
import { isMobile, isTablet } from "mobile-device-detect"

export default {
    data: () => {
    return {
      activeTab: null,
      currentTab: '',
      renderServices: false,
      services_cats: [
        {
          title: 'strategy',
          icon: require('@/assets/img/marketing.svg'),
          icon2: require('@/assets/img/marketing-white.svg'),
          list: [
            'Target Customer Segment Research',
            'Expert Strategic Planning',
            'Brand Development & Positioning Strategy',
            'Digital Strategy',
            'Content Management Strategy',
            'Innovation App&Web Architecture',
            'Web Hosting Installation & Management',
          ]
        },
        {
          title: 'Creativity',
          icon: require('@/assets/img/design.svg'),
          icon2: require('@/assets/img/design-white.svg'),
          list: [
            'Brand Identity Development',
            'Art Direction',
            'Visual Design',
            'UX & UI  Content Creation',
            'Marketing Campaigns',
            'E-commerce Website Development'
          ],
        },
        {
          title: 'technology',
          icon: require('@/assets/img/code.svg'),
          icon2: require('@/assets/img/code-white.svg'),
          list: [
            'Website Design & Development',
            'Front-End Development',
            'Prototype Development',
            'Content Management Systems',
            'Managed Services & Website Hosting',
            'Full-Cycle Product Development',
            'Custom-Fit Mobile App Development',
            'Server Configuration',
            'Web Asset Allocation and Quality Insurance',
          ],
        },
      ],
    }
  },
  computed: {
    lang() {
      return this.$i18n.locale
    },
    isMobDevice() {
      return isMobile || isTablet ? true : false
    },
  },
  methods: {
    catClick1(e) {
      let isOpen = false
      if (!this.isMobDevice) {

        if (this.currentTab == this.services_cats[0].title) {
          this.currentTab = ''
          const el = e.target.closest('.cat_list_tab')

          el.classList.remove('active')

          anime({
            targets: '.bg_lines .st0',
            points: [
              // { value: '666.3,245.1 539.7,415.9 150.3,163.7' },
              { value: '666.3,245.1 439.7,365.9 252.1,215.5' },
            ],
            easing: 'linear',
            duration: 800,
          });

          anime({
            targets: el,
            translateX: 0,
            translateY: 0,
            easing: 'linear',
            duration: 800,
          });
          anime({
            targets: '.cat_list_tab:nth-child(2)',
            translateX: 0,
            translateY: 0,
            easing: 'linear',
            duration: 800,
          });
          
        } else {
          this.currentTab = this.services_cats[0].title

          const el = e.target.closest('.cat_list_tab')
          document.querySelectorAll('.cat_list_tab').forEach(function(el) { el.classList.remove('active') })
          el.classList.add('active')

          let morfing = anime({
            targets: '.bg_lines .st0',
            points: [
              // { value: '666.3,245.1 439.7,365.9 252.1,215.5' },
              { value: '666.3,245.1 539.7,415.9 150.3,163.7' },
            ],
            easing: 'linear',
            duration: 800,
            delay: 0
          });

          anime({
            targets: el,
            translateX: '-10rem',
            translateY: '-5rem',
            easing: 'linear',
            duration: 800,
          })
          anime({
            targets: '.cat_list_tab:nth-child(2)',
            translateX: '10rem',
            translateY: '5rem',
            easing: 'linear',
            duration: 800,
          })
          anime({
            targets: '.cat_list_tab:nth-child(3)',
            translateX: 0,
            translateY: 0,
            easing: 'linear',
            duration: 800,
          });
        }
      }
    },
    catClick2(e) {
      let isOpen = false
      if (!this.isMobDevice) {
        if (this.currentTab == this.services_cats[1].title) {
          this.currentTab = ''
          const el = e.target.closest('.cat_list_tab')

          el.classList.remove('active')

          anime({
            targets: '.bg_lines .st0',
            points: [
              // { value: '716.3,195.1 589.7,315.9 252.1,215.5' },
              { value: '666.3,245.1 439.7,365.9 252.1,215.5' },
            ],
            easing: 'linear',
            duration: 800,
          });

          anime({
            targets: el,
            translateX: 0,
            translateY: 0,
            easing: 'linear',
            duration: 800,
          });
          anime({
            targets: '.cat_list_tab:nth-child(3)',
            translateX: 0,
            translateY: 0,
            easing: 'linear',
            duration: 800,
          });
        } else {
          this.currentTab = this.services_cats[1].title

          const el = e.target.closest('.cat_list_tab')

          document.querySelectorAll('.cat_list_tab').forEach(function(el) { el.classList.remove('active') })
          el.classList.add('active')

          let morfing = anime({
            targets: '.bg_lines .st0',
            points: [
              // { value: '666.3,245.1 439.7,365.9 252.1,215.5' },
              { value: '716.3,195.1 589.7,315.9 252.1,215.5' },
            ],
            easing: 'linear',
            duration: 800,
          });

          anime({
            targets: el,
            translateX: '15rem',
            translateY: '-5rem',
            easing: 'linear',
            duration: 800,
          })
          anime({
            targets: '.cat_list_tab:nth-child(3)',
            translateX: '5rem',
            translateY: '-5rem',
            easing: 'linear',
            duration: 800,
          })
          anime({
            targets: '.cat_list_tab:nth-child(1)',
            translateX: 0,
            translateY: 0,
            easing: 'linear',
            duration: 800,
          })
        }
      }
    },
    catClick3(e) {
      let isOpen = false
      if (!this.isMobDevice) {
        if (this.currentTab == this.services_cats[2].title) {
          this.currentTab = ''
          const el = e.target.closest('.cat_list_tab')

          el.classList.remove('active')

          anime({
            targets: '.bg_lines .st0',
            points: [
              // { value: '716.3,195.1 389.7,415.9 252.1,215.5' },
              { value: '666.3,245.1 439.7,365.9 252.1,215.5' },
            ],
            easing: 'linear',
            duration: 800,
          });

          anime({
            targets: el,
            translateX: 0,
            translateY: 0,
            easing: 'linear',
            duration: 800,
          });
          anime({
            targets: '.cat_list_tab:nth-child(2)',
            translateX: 0,
            translateY: 0,
            easing: 'linear',
            duration: 800,
          });
        } else {
          this.currentTab = this.services_cats[2].title
          const el = e.target.closest('.cat_list_tab')

          document.querySelectorAll('.cat_list_tab').forEach(function(el) { el.classList.remove('active') })
          el.classList.add('active')

          let morfing = anime({
            targets: '.bg_lines .st0',
            points: [
              // { value: '666.3,245.1 439.7,365.9 252.1,215.5' },
              { value: '716.3,195.1 389.7,415.9 252.1,215.5' },
            ],
            easing: 'linear',
            duration: 800,
            delay: 0
          });

          anime({
            targets: el,
            translateX: '5rem',
            translateY: '-5rem',
            easing: 'linear',
            duration: 800,
          })
          anime({
            targets: '.cat_list_tab:nth-child(2)',
            translateX: '-5rem',
            translateY: '5rem',
            easing: 'linear',
            duration: 800,
          })
          anime({
            targets: '.cat_list_tab:nth-child(1)',
            translateX: 0,
            translateY: 0,
            easing: 'linear',
            duration: 800,
          })
        }
      }
    },
    catHover(e, text) {
      if (!this.isMobDevice) {
        const ctn = document.querySelector('.chosen_cat_name p')

        ctn.innerHTML = text
      }
    },
    openTab(el, done) {
      const currSub = document.querySelector('.cat_list_tab.active .sub_cats_wrap')
      const currSubHeight = currSub.scrollHeight
      // console.log(currSubHeight)

      anime({
        targets: currSub,
        height: [0, currSubHeight + 'px'],
        duration: 300,
        delay: 0,
        easing: 'linear',
        // complete: function() {
        // }
      });
    },
    closeTab(el, done) {
      // const currSub = document.querySelector('.cat_list_tab.active .sub_cats_wrap')
      const currSubHeight = el.scrollHeight
      console.log(currSubHeight)

      anime({
        targets: el,
        height: [currSubHeight + 'px' , 0],
        duration: 300,
        delay: 0,
        easing: 'easeInOutQuad',
        complete: function() {
          done()
        }
        // complete: function() {
        //   const st = window.pageYOffset
        //   const ctn = document.querySelector('.s_third')
        //   const ctnPosY = ctn.getBoundingClientRect().top + st

        //   const scrollElement = window.document.scrollingElement || window.document.body || window.document.documentElement;

        //   anime({
        //     targets: scrollElement,
        //     scrollTop: ctnPosY,
        //     duration: 500,
        //     easing: 'linear',
        //     complete: function() {
        //     }
        //   });
        // }
      });
    },
    catClickHandler(el, index) {
      // const st = window.pageYOffset
      // const ctn = document.querySelector('.cat_list')
      // console.log(el)
      // const cat = el.target.closest('.cat_list_tab')
      // const currSub = cat.querySelector('.sub_cats_wrap')
      // const currSubHeight = currSub.scrollHeight
      // const allSub = document.querySelectorAll('.sub_cats_wrap')
      // console.log(currSubHeight)
      // anime({
      //   targets: currSub,
      //   height: [0, currSubHeight + 'px'],
      //   duration: 1000,
      //   easing: 'lnear',
      // });
      // console.log(currSub)
      // const ctnPosY = ctn.getBoundingClientRect().top + st - 70

      if (this.activeTab == index) {
        this.activeTab = null
      } else {
        this.activeTab = index
      }

      // const scrollElement = window.document.scrollingElement || window.document.body || window.document.documentElement;

      // Velocity(allSub, "slideUp", { duration: 500, easing: 'easeOutQuart' });
      // Velocity(currSub, "slideDown", { delay: 500, duration: 2000, easing: 'easeOutQuart' });

      // anime({
      //   targets: scrollElement,
      //   scrollTop: ctnPosY,
      //   duration: 500,
      //   easing: 'easeInOutQuad',
      //   complete: function() {
      //   }
      // });
      
    },
    morfingHover_1(el) {
      
    }
  },
  watch: {
    services_cats: function() {
      this.renderServices = true
    },
    lang() {
      const servicesEN = [
        {
          title: 'strategy',
          icon: require('@/assets/img/marketing.svg'),
          icon2: require('@/assets/img/marketing-white.svg'),
          text: 'The search for the right answers starts with the right questions. Our primary strategy is to ensure communication between the customer and developers so that the final result meets all requirements. <br> From comprehensive brand assessment to market research, competitor analysis, and analytical reports, our in-depth discovery process sets the task of exploring every last detail to craft a well-performing website.',
          list: [
            'Target Customer Segment Research',
            'Expert Strategic Planning',
            'Brand Development & Positioning Strategy',
            'Digital Strategy',
            'Content Management Strategy',
            'Innovation App&Web Architecture',
            'Web Hosting Installation & Management',
          ]
        },
        {
          title: 'Creativity',
          icon: require('@/assets/img/design.svg'),
          icon2: require('@/assets/img/design-white.svg'),
          text: 'As creativity is not a predetermined process, and an excellent project is a result of a true understanding of what you want and how you see your product. <br> Take advantage of creative solutions, uniform website style crafting, multiple interface design options, exclusive color design and much more. <br> Our experienced designers come up with the best way to attract customers from the opposite side of the screen. <br> With customer satisfaction and end user in mind,  Papaya Web Agency products always exceed all expectations.',
          list: [
            'Brand Identity Development',
            'Art Direction',
            'Visual Design',
            'UX & UI  Content Creation',
            'Marketing Campaigns',
            'E-commerce Website Development'
          ],
        },
        {
          title: 'technology',
          icon: require('@/assets/img/code.svg'),
          icon2: require('@/assets/img/code-white.svg'),
          text: 'We are always one step ahead by providing reliable, advanced software development solutions that meet all technical requirements and assure excellent customer service. You do not need to know the intricacies of website creation; we are ready to implement your most ambitious ideas. With the latest technologies, even the most complex tasks are no longer a limit.',
          list: [
            'Website Design & Development',
            'Front-End Development',
            'Prototype Development',
            'Content Management Systems',
            'Managed Services & Website Hosting',
            'Full-Cycle Product Development',
            'Custom-Fit Mobile App Development',
            'Server Configuration',
            'Web Asset Allocation and Quality Insurance',
          ],
        },
      ]
      const servicesRU = [
        {
          title: 'Стратегия',
          icon: require('@/assets/img/marketing.svg'),
          icon2: require('@/assets/img/marketing-white.svg'),
          text: 'Поиск правильных ответов начинается с постановки правильных вопросов. Нашей главной стратегией является обеспечение коммуникации между заказчиком и разработчиками, чтобы итоговый результат соответствовал всем требованиям. <br> От всесторонней оценки бренда до исследования рынка, анализа конкурентов и аналитических отчетов, наш комплексный мониторинг ставит задачу изучить все до мельчайших деталей для создания функционирующего вебсайта.',
          list: [
            'Исследование Целевого Клиентского Сегмента',
            'Грамотное Стратегическое Планирование',
            'Стратегия Развития и Продвижения Бренда',
            'Цифровая Стратегия',
            'Стратегия Управления Контентом',
            'Передовая Архитектура Приложений и сайтов',
            'Установка и Управление Веб-Хостингом',
          ]
        },
        {
          title: 'Креативность',
          icon: require('@/assets/img/design.svg'),
          icon2: require('@/assets/img/design-white.svg'),
          text: 'Творчество - это не предопределенный процесс, а выдающийся проект это результат истинного понимания чего вы хотите и каким видите ваш продукт. <br> Воспользуйтесь преимуществами нестандартных решений, созданием единого стиля сайта, множеством вариантов дизайна интерфейса, эксклюзивным цветовым оформлением и многим другим. <br> Наши опытные дизайнеры используют лучшие способы привлечения клиентов по ту сторону экрана. <br> Учитывая пожелания клиентов и потребителей, продукты, разработанные веб-агентством Papaya, всегда превосходят все ожидания.',
          list: [
            'Разработка Фирменного Стиля',
            'Художественное Направление',
            'Визуальное Оформление',
            'Проектирование и Оформление Пользовательского Интерфейса',
            'Маркетинговые Кампании',
            'Разработка Коммерческих Сайтов'
          ],
        },
        {
          title: 'Технологии',
          icon: require('@/assets/img/code.svg'),
          icon2: require('@/assets/img/code-white.svg'),
          text: 'Мы всегда на шаг впереди, предоставляя надежные, передовые решения для разработки программного обеспечения, которые отвечают всем техническим требованиям и обеспечивают отличное обслуживание клиентов. Вам не нужно знать тонкости создания сайтов, мы готовы воплотить в жизнь ваши самые амбициозные идеи за вас. С использованием новейших технологий, даже самые сложные задачи больше не являются для нас преградой.',
          list: [
            'Дизайн и Верстка Веб-сайтов',
            'Фронтенд Разработка',
            'Создание Прототипа',
            'Система Управления Контентом',
            'Услуги Администрирования и Хостинг Сайтов',
            'Полный Цикл Разработки Продукта',
            'Индивидуальная Разработка Мобильных Приложений',
            'Серверная Настройка',
            'Размещение Веб-Активов и Обеспечение Контроля Качества',
          ],
        },
      ]
      const servicesUK = [
        {
          title: 'Стратегия',
          icon: require('@/assets/img/marketing.svg'),
          icon2: require('@/assets/img/marketing-white.svg'),
          text: 'Поиск правильных ответов начинается с постановки правильных вопросов. Нашей главной стратегией является обеспечение коммуникации между заказчиком и разработчиками, чтобы итоговый результат соответствовал всем требованиям. <br> От всесторонней оценки бренда до исследования рынка, анализа конкурентов и аналитических отчетов, наш комплексный мониторинг ставит задачу изучить все до мельчайших деталей для создания функционирующего вебсайта.',
          list: [
            'Исследование Целевого Клиентского Сегмента',
            'Грамотное Стратегическое Планирование',
            'Стратегия Развития и Продвижения Бренда',
            'Цифровая Стратегия',
            'Стратегия Управления Контентом',
            'Передовая Архитектура Приложений и сайтов',
            'Установка и Управление Веб-Хостингом',
          ]
        },
        {
          title: 'Креативность',
          icon: require('@/assets/img/design.svg'),
          icon2: require('@/assets/img/design-white.svg'),
          text: 'Творчество - это не предопределенный процесс, а выдающийся проект это результат истинного понимания чего вы хотите и каким видите ваш продукт. <br> Воспользуйтесь преимуществами нестандартных решений, созданием единого стиля сайта, множеством вариантов дизайна интерфейса, эксклюзивным цветовым оформлением и многим другим. <br> Наши опытные дизайнеры используют лучшие способы привлечения клиентов по ту сторону экрана. <br> Учитывая пожелания клиентов и потребителей, продукты, разработанные веб-агентством Papaya, всегда превосходят все ожидания.',
          list: [
            'Разработка Фирменного Стиля',
            'Художественное Направление',
            'Визуальное Оформление',
            'Проектирование и Оформление Пользовательского Интерфейса',
            'Маркетинговые Кампании',
            'Разработка Коммерческих Сайтов'
          ],
        },
        {
          title: 'Технологии',
          icon: require('@/assets/img/code.svg'),
          icon2: require('@/assets/img/code-white.svg'),
          text: 'Мы всегда на шаг впереди, предоставляя надежные, передовые решения для разработки программного обеспечения, которые отвечают всем техническим требованиям и обеспечивают отличное обслуживание клиентов. Вам не нужно знать тонкости создания сайтов, мы готовы воплотить в жизнь ваши самые амбициозные идеи за вас. С использованием новейших технологий, даже самые сложные задачи больше не являются для нас преградой.',
          list: [
            'Дизайн и Верстка Веб-сайтов',
            'Фронтенд Разработка',
            'Создание Прототипа',
            'Система Управления Контентом',
            'Услуги Администрирования и Хостинг Сайтов',
            'Полный Цикл Разработки Продукта',
            'Индивидуальная Разработка Мобильных Приложений',
            'Серверная Настройка',
            'Размещение Веб-Активов и Обеспечение Контроля Качества',
          ],
        },
      ]

      switch (this.lang) {
        case 'en':
          this.services_cats = servicesEN
        break

        case 'ru':
          this.services_cats = servicesRU
        break

        case 'uk':
          this.services_cats = servicesUK
        break
      }

    },
  },
  mounted() {
    setTimeout(() => {
      
      const servicesEN = [
        {
          title: 'strategy',
          icon: require('@/assets/img/marketing.svg'),
          icon2: require('@/assets/img/marketing-white.svg'),
          text: 'The search for the right answers starts with the right questions. Our primary strategy is to ensure communication between the customer and developers so that the final result meets all requirements. <br> From comprehensive brand assessment to market research, competitor analysis, and analytical reports, our in-depth discovery process sets the task of exploring every last detail to craft a well-performing website.',
          list: [
            'Target Customer Segment Research',
            'Expert Strategic Planning',
            'Brand Development & Positioning Strategy',
            'Digital Strategy',
            'Content Management Strategy',
            'Innovation App&Web Architecture',
            'Web Hosting Installation & Management',
          ]
        },
        {
          title: 'Creativity',
          icon: require('@/assets/img/design.svg'),
          icon2: require('@/assets/img/design-white.svg'),
          text: 'As creativity is not a predetermined process, and an excellent project is a result of a true understanding of what you want and how you see your product. <br> Take advantage of creative solutions, uniform website style crafting, multiple interface design options, exclusive color design and much more. <br> Our experienced designers come up with the best way to attract customers from the opposite side of the screen. <br> With customer satisfaction and end user in mind,  Papaya Web Agency products always exceed all expectations.',
          list: [
            'Brand Identity Development',
            'Art Direction',
            'Visual Design',
            'UX & UI  Content Creation',
            'Marketing Campaigns',
            'E-commerce Website Development'
          ],
        },
        {
          title: 'technology',
          icon: require('@/assets/img/code.svg'),
          icon2: require('@/assets/img/code-white.svg'),
          text: 'We are always one step ahead by providing reliable, advanced software development solutions that meet all technical requirements and assure excellent customer service. You do not need to know the intricacies of website creation; we are ready to implement your most ambitious ideas. With the latest technologies, even the most complex tasks are no longer a limit.',
          list: [
            'Website Design & Development',
            'Front-End Development',
            'Prototype Development',
            'Content Management Systems',
            'Managed Services & Website Hosting',
            'Full-Cycle Product Development',
            'Custom-Fit Mobile App Development',
            'Server Configuration',
            'Web Asset Allocation and Quality Insurance',
          ],
        },
      ]
      const servicesRU = [
        {
          title: 'Стратегия',
          icon: require('@/assets/img/marketing.svg'),
          icon2: require('@/assets/img/marketing-white.svg'),
          text: 'Поиск правильных ответов начинается с постановки правильных вопросов. Нашей главной стратегией является обеспечение коммуникации между заказчиком и разработчиками, чтобы итоговый результат соответствовал всем требованиям. <br> От всесторонней оценки бренда до исследования рынка, анализа конкурентов и аналитических отчетов, наш комплексный мониторинг ставит задачу изучить все до мельчайших деталей для создания функционирующего вебсайта.',
          list: [
            'Исследование Целевого Клиентского Сегмента',
            'Грамотное Стратегическое Планирование',
            'Стратегия Развития и Продвижения Бренда',
            'Цифровая Стратегия',
            'Стратегия Управления Контентом',
            'Передовая Архитектура Приложений и сайтов',
            'Установка и Управление Веб-Хостингом',
          ]
        },
        {
          title: 'Креативность',
          icon: require('@/assets/img/design.svg'),
          icon2: require('@/assets/img/design-white.svg'),
          text: 'Творчество - это не предопределенный процесс, а выдающийся проект это результат истинного понимания чего вы хотите и каким видите ваш продукт. <br> Воспользуйтесь преимуществами нестандартных решений, созданием единого стиля сайта, множеством вариантов дизайна интерфейса, эксклюзивным цветовым оформлением и многим другим. <br> Наши опытные дизайнеры используют лучшие способы привлечения клиентов по ту сторону экрана. <br> Учитывая пожелания клиентов и потребителей, продукты, разработанные веб-агентством Papaya, всегда превосходят все ожидания.',
          list: [
            'Разработка Фирменного Стиля',
            'Художественное Направление',
            'Визуальное Оформление',
            'Проектирование и Оформление Пользовательского Интерфейса',
            'Маркетинговые Кампании',
            'Разработка Коммерческих Сайтов'
          ],
        },
        {
          title: 'Технологии',
          icon: require('@/assets/img/code.svg'),
          icon2: require('@/assets/img/code-white.svg'),
          text: 'Мы всегда на шаг впереди, предоставляя надежные, передовые решения для разработки программного обеспечения, которые отвечают всем техническим требованиям и обеспечивают отличное обслуживание клиентов. Вам не нужно знать тонкости создания сайтов, мы готовы воплотить в жизнь ваши самые амбициозные идеи за вас. С использованием новейших технологий, даже самые сложные задачи больше не являются для нас преградой.',
          list: [
            'Дизайн и Верстка Веб-сайтов',
            'Фронтенд Разработка',
            'Создание Прототипа',
            'Система Управления Контентом',
            'Услуги Администрирования и Хостинг Сайтов',
            'Полный Цикл Разработки Продукта',
            'Индивидуальная Разработка Мобильных Приложений',
            'Серверная Настройка',
            'Размещение Веб-Активов и Обеспечение Контроля Качества',
          ],
        },
      ]
      const servicesUK = [
        {
          title: 'Стратегия',
          icon: require('@/assets/img/marketing.svg'),
          icon2: require('@/assets/img/marketing-white.svg'),
          text: 'Поиск правильных ответов начинается с постановки правильных вопросов. Нашей главной стратегией является обеспечение коммуникации между заказчиком и разработчиками, чтобы итоговый результат соответствовал всем требованиям. <br> От всесторонней оценки бренда до исследования рынка, анализа конкурентов и аналитических отчетов, наш комплексный мониторинг ставит задачу изучить все до мельчайших деталей для создания функционирующего вебсайта.',
          list: [
            'Исследование Целевого Клиентского Сегмента',
            'Грамотное Стратегическое Планирование',
            'Стратегия Развития и Продвижения Бренда',
            'Цифровая Стратегия',
            'Стратегия Управления Контентом',
            'Передовая Архитектура Приложений и сайтов',
            'Установка и Управление Веб-Хостингом',
          ]
        },
        {
          title: 'Креативность',
          icon: require('@/assets/img/design.svg'),
          icon2: require('@/assets/img/design-white.svg'),
          text: 'Творчество - это не предопределенный процесс, а выдающийся проект это результат истинного понимания чего вы хотите и каким видите ваш продукт. <br> Воспользуйтесь преимуществами нестандартных решений, созданием единого стиля сайта, множеством вариантов дизайна интерфейса, эксклюзивным цветовым оформлением и многим другим. <br> Наши опытные дизайнеры используют лучшие способы привлечения клиентов по ту сторону экрана. <br> Учитывая пожелания клиентов и потребителей, продукты, разработанные веб-агентством Papaya, всегда превосходят все ожидания.',
          list: [
            'Разработка Фирменного Стиля',
            'Художественное Направление',
            'Визуальное Оформление',
            'Проектирование и Оформление Пользовательского Интерфейса',
            'Маркетинговые Кампании',
            'Разработка Коммерческих Сайтов'
          ],
        },
        {
          title: 'Технологии',
          icon: require('@/assets/img/code.svg'),
          icon2: require('@/assets/img/code-white.svg'),
          text: 'Мы всегда на шаг впереди, предоставляя надежные, передовые решения для разработки программного обеспечения, которые отвечают всем техническим требованиям и обеспечивают отличное обслуживание клиентов. Вам не нужно знать тонкости создания сайтов, мы готовы воплотить в жизнь ваши самые амбициозные идеи за вас. С использованием новейших технологий, даже самые сложные задачи больше не являются для нас преградой.',
          list: [
            'Дизайн и Верстка Веб-сайтов',
            'Фронтенд Разработка',
            'Создание Прототипа',
            'Система Управления Контентом',
            'Услуги Администрирования и Хостинг Сайтов',
            'Полный Цикл Разработки Продукта',
            'Индивидуальная Разработка Мобильных Приложений',
            'Серверная Настройка',
            'Размещение Веб-Активов и Обеспечение Контроля Качества',
          ],
        },
      ]

      switch (this.lang) {
        case 'en':
          this.services_cats = servicesEN
        break

        case 'ru':
          this.services_cats = servicesRU
        break

        case 'uk':
          this.services_cats = servicesUK
        break
      }

    }, 300)
    
  }
}
</script>

<style lang="scss">
.s_third {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  .s_title {
    margin-top: 0;
    margin-bottom: 4.7rem;
  }
  .s_content {
    padding-left: 12rem;
    padding-right: 12rem;
    width: 100%;
    display: flex;
    // align-items: center;
    justify-content: space-between;
  }
  .bg_lines {
    position: relative;
    top: -9.5rem;
    left: -4rem;
    .st0 {
      fill: none;
      stroke: #333333;
    }
  }
  .block--left {
    position: relative;
    z-index: 10;
    margin-right: 6rem;
    width: 100%;
  }
  .block--right {
    position: relative;
    vertical-align: top;
    width: 66.5rem;
    flex-shrink: 0;
    .chosen_cat_name {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      font-family: "Desyrel", sans-serif;
      font-weight: 400;
      color: #6b6b72;
      text-transform: uppercase;
      p {
        margin-left: 5rem;
        margin-bottom: 4rem;
        width: 15rem;
        transform: rotateZ(-15deg);
      }
    }
  }
}
.categories {
  margin-left: 3rem;
  position: relative;
  height: 100%;
  text-align: left;
  width: 93rem;
  height: 53rem;
}
.cat_list {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
}
.cat_list_tab {
  position: absolute;
  margin-right: 20px;
  &.active {
    &.strategy {
      // transform: translate3d(-14.2rem, -5rem, 0);
    }
    &.creative {
      // transform: translate3d(1rem, 1rem, 0);
    }
    &.technology {
      // transform: translate3d(1rem, 1rem, 0);
    }
    .cat_icon {
      background-color: #000;
      transition: background-color .5s .3s;
      &::before {
        opacity: 1;
        transition: all .3s .3s;
      }
      img {
        display: block;
        transition: all .3s .3s;
        &:nth-child(1) {
          opacity: 0;
        }
        &:nth-child(2) {
          opacity: 1;
        }
      }
    }
    .sub_cats_wrap {
      opacity: 1;
      pointer-events: unset;
      transition: all .3s;
    }
  }
}
.strategy {
  top: 10rem;
  right: 68rem;
  .sub_cats_wrap {
    width: 30rem;
  }
}
.creative {
  top: 24.5rem;
  right: 49rem;
}
.technology {
  top: 13.3rem;
  right: 7.2rem;
  .cats .cat_icon {
    margin-left: 0;
    margin-right: 3rem;
  }
  .sub_cats_wrap {
    width: 40rem;
    padding-left: calc(3rem + 37px);
  }
}
.cats {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 2.5rem;
  line-height: 3rem;
  font-weight: 600;
  text-transform: uppercase;
  .cat_icon {
    position: relative;
    margin-left: 3rem;
    width: 37px;
    height: 37px;
    border: 1px solid #000000;
    border-radius: 50%;
    background-color: #fff;
    transition: background-color .5s .3s;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    &::before {
      display: none;
      position: absolute;
      content: '';
      top: -4px;
      left: -4px;
      width: calc(100% + 6px);
      height: calc(100% + 6px);
      border: 1px solid #000000;
      border-radius: 50%;
      opacity: 0;
      transition: all .3s .3s;
    }
    img {
      position: absolute;
      flex-shrink: 0;
      transition: all .3s .3s;
      &:nth-child(1) {
        opacity: 1;
      }
      &:nth-child(2) {
        opacity: 0;
      }
    }
  }
}

.sub_cats_wrap {
    width: 30rem;
  padding-top: 3.5rem;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 10;
  opacity: 0;
  pointer-events: none;
  transition: all .3s;
  ul {
    display: inline-block;
  }
  li {
    padding-bottom: 2rem;
    // margin-bottom: 2rem;
  }
  a {
    position: relative;
    font-size: 1.8rem;
    line-height: 2.1rem;
    font-weight: 400;
    // white-space: nowrap;
    &:after {
      position: absolute;
      display: block;
      content: '';
      left: 0;
      bottom: -3px;
      height: 1px;
      width: 0;
      background: #FA7C0D;
      transition: width .2s;
    }
    &:hover {
      &:after {
        width: 100%;
      }
    }
  }
}
@media (max-width: 1900px) {
  .s_third {}
  .strategy {
    right: 67rem;
  }
  .creative {
    top: 24rem;
    right: 48rem;
  }
  .technology {
    top: 13rem;
  }
}

@media (max-width: 1439px) {
  .strategy {
    right: 66rem;
  }
  .creative {
    top: 24rem;
    right: 47rem;
  }
  .technology {
    top: 13rem;
    right: 7rem;
  }
}
@media (min-width: 992px) and (max-width: 1365px) {
  .s_third {
    .s_content {
      padding-left: 0;
      padding-right: 0;
      width: 100%;
      display: flex;
      justify-content: center;
    }
    .block--left {
      position: relative;
      z-index: 10;
      margin-right: 0;
      width: 93rem;
      margin-right: 3rem;
    }
    .block--right {
      display: none;
    }
  }
  
}
@media (min-width: 992px) and (max-width: 1366px) {
  .mobile {
    .s_third {
      height: auto;
      // min-height: 100vh;
      padding-left: 40px;
      padding-right: 40px;
      justify-content: flex-start;
      .s_title {
        margin-top: 75px;
        margin-bottom: 120px;
        text-align: center;
        font-size: 45px;
        line-height: 45px;
      }
      .bg_trgl {
        position: absolute;
        z-index: 10;
        left: -105px;
        top: -105px;
        width: 225px;
        filter: blur(10px);
        transform: rotateZ(0deg);
        img {
          width: 100%;
        }
      }
      .s_content {
        padding-left: 0;
        padding-right: 0;
        width: 100%;
        display: flex;
        justify-content: center;
      }
      .block--left {
        position: relative;
        z-index: 10;
        margin-right: 0;
        width: 500px;
      }
      .block--right {
        display: none;
      }
    }
    .categories {
      margin-left: 0;
      height: auto;
      width: 100%;
    }
    .cat_list {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      overflow: hidden;
      position: static;
    }
    .cat_list_tab {
      position: relative;
      top: auto!important;
      right: auto!important;
      margin-right: 0!important;
      padding-bottom: 60px;
      &::after {
        position: absolute;
        display: block;
        content: '';
        top: 0;
        left: 28px;
        margin-left: -1px;
        width: 1px;
        height: 100%;
        background-color: #000;
      }
      &:nth-child(1) {
        z-index: 10;
      }
      &:nth-child(2) {
        z-index: 20;
      }
      &:nth-child(3) {
        z-index: 30;
        &::after {
          display: none;
        }
      }
      &.active, &:hover {
        &.strategy {
          margin-right: 0;
        }
        .sub_cats_wrap {
          opacity: 1;
          transition: opacity .6s;
        }
        .cat_icon {
          transition-delay: .6s;
          img {
            transition-delay: .6s;
          }
        }
      }
    }
    .cats {
      font-size: 37px;
      line-height: 45px;
      font-weight: 600;
      position: relative;
      z-index: 20;
      .cat_icon {
        position: relative;
        margin-left: 0;
        margin-right: 45px;
        width: 55px;
        height: 55px;
        transition-delay: .6s;
        img {
          transition-delay: .6s;
        }
        &::before {
          display: none;
        }
      }
    }

    .sub_cats_wrap {
      width: 100%!important;
      height: 0;
      padding-top: 0;
      padding-left: 102px;
      position: relative;
      top: auto;
      left: auto;
      overflow: hidden;
      z-index: 10;
      opacity: 0;
      pointer-events: none;
      transition: opacity .6s;
      ul {
        padding-top: 30px;
        display: block;
      }
      li {
        padding-bottom: 0;
        margin-bottom: 45px;
        &:last-child {
          margin-bottom: 0;
        }
        a {
          white-space: normal;
          font-size: 27px;
          line-height: 31px;
        }
      }
    }
  }
}
@media (max-width: 991px) {
  .s_third {
    height: auto;
    // min-height: 100vh;
    padding-left: 4rem;
    padding-right: 4rem;
    justify-content: flex-start;
    .s_title {
      margin-top: 5rem;
      margin-bottom: 8rem;
      text-align: center;
      font-size: 3rem;
      line-height: 3rem;
    }
    .bg_trgl {
      position: absolute;
      z-index: 10;
      left: -7rem;
      top: -7rem;
      width: 15rem;
      filter: blur(10px);
      transform: rotateZ(0deg);
      img {
        width: 100%;
      }
    }
    .s_content {
      padding-left: 0;
      padding-right: 0;
      width: 100%;
      display: flex;
      justify-content: center;
    }
    .block--left {
      position: relative;
      z-index: 10;
      margin-right: 0;
      width: 64vw;
    }
    .block--right {
      display: none;
    }
  }
  .categories {
    margin-left: 0;
    height: auto;
    width: 100%;
  }
  .cat_list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    overflow: hidden;
    position: static;
  }
  .cat_list_tab {
    position: relative;
    top: auto!important;
    right: auto;
    margin-right: 0!important;
    padding-bottom: 4rem;
    &::after {
      position: absolute;
      display: block;
      content: '';
      top: 0;
      left: 1.9rem;
      margin-left: -1px;
      width: 1px;
      height: 100%;
      background-color: #000;
    }
    &:nth-child(1) {
      z-index: 10;
    }
    &:nth-child(2) {
      z-index: 20;
    }
    &:nth-child(3) {
      z-index: 30;
      &::after {
        display: none;
      }
    }
    &.active, &:hover {
      &.strategy {
        margin-right: 0;
      }
      .sub_cats_wrap {
        opacity: 1;
        transition: opacity .6s;
      }
      .cat_icon {
        transition-delay: .6s;
        img {
          transition-delay: .6s;
        }
      }
    }
  }
  .cats {
    font-size: 2.5rem;
    line-height: 3rem;
    font-weight: 600;
    z-index: 10;
    position: relative;
    .cat_icon {
      position: relative;
      margin-left: 0;
      margin-right: 3rem;
      width: 3.7rem;
      height: 3.7rem;
      transition-delay: .6s;
      &::before {
        display: none;
      }
      img {
        transition-delay: .6s;
      }
    }
  }

  .sub_cats_wrap {
    width: 100%!important;
    // display: none;
    height: 0;
    overflow: hidden;
    padding-top: 0;
    padding-left: 6.7rem;
    position: relative;
    top: auto;
    left: auto;
    // height: 1px;
    overflow: hidden;
    z-index: 10;
    opacity: 0;
    pointer-events: none;
    transition: opacity .6s;
    ul {
      padding-top: 2rem;
      display: block;
    }
    li {
      padding-bottom: 0;
      margin-bottom: 2rem;
      &:last-child {
        margin-bottom: 0;
      }
      a {
        white-space: normal;
      }
    }
  }
}

@media (max-width: 767px) {
  .s_third {
    padding-left: 30px;
    padding-right: 30px;
  }
}
@media (max-width: 375px) {}
</style>