<template>
  <component 
    :is="componentInstance" 
    :services_desc="services_desc" 
    :strategy_list="strategy_list" 
    :creative_list="creative_list" 
    :tech_list="tech_list" 
    :how_it_works="how_it_works" 
  />
</template>

<script>
import { isMobile, isTablet } from "mobile-device-detect"
import anime from 'animejs/lib/anime.es.js'

export default {
  data: () => {
    return {
      activeTab: 0,
      services_desc: [
        // {
        //   title: 'STRATEGY',
        //   text: 'Getting the right answers begins with asking the right questions. While there is no pre-determined process for creativity, excellent work is born from a true understanding of where you are, where you’ve been and where you’re going. From comprehensive digital and brand assessments to market research, competitor analysis and analytical reports, our in-depth discovery process means no stone is unturned and every opportunity is explored.'
        // },
        // {
        //   title: 'Create',
        //   text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores unde totam veniam deserunt fugit in tempore quae impedit dolorum blanditiis vitae doloribus vel ipsum ratione architecto, reiciendis pariatur excepturi sapiente officiis perferendis quos tenetur aperiam ducimus! Molestias maxime et ea dolorem exercitationem vero dicta. Commodi minima animi ipsa eaque neque vel ab, modi unde quaerat officia! Excepturi odit commodi pariatur necessitatibus accusantium voluptatibus praesentium, incidunt quia perspiciatis quo in ducimus.'
        // },
        // {
        //   title: 'Technology',
        //   text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae expedita blanditiis consequatur odio! Velit culpa nostrum molestias consequatur. Voluptatibus nihil expedita vel sequi doloribus modi praesentium animi, veniam, perspiciatis veritatis obcaecati! Sapiente doloremque, molestiae illum mollitia consectetur consequuntur et ratione quasi saepe. Totam voluptatum dolore minima voluptatibus ipsa? Ad, cum.'
        // },
      ],
      strategy_list: [
        // 'Research, Analysis and Insights',
        // 'Strategic Planning',
        // 'Brand Developmetn & Positioning',
        // 'Digital Strategy',
        // 'Content Strategy',
        // 'Inovation Architecture & User Experience',
        // 'Product Strategy',
      ],
      creative_list: [
        // 'Brand Identity Development',
        // 'Art Direction',
        // 'Visual Design',
        // 'UX & UI  Content Creation',
        // 'Asset Production',
        // 'Marketing Campaigns',
        // 'E-commerce Development',
        // 'Interior Design',
      ],
      tech_list: [
        // 'Website Design & Development',
        // 'Front-End Development',
        // 'Prototype Development',
        // 'Content Management Systems',
        // 'Managed Services & Website Hosting',
        // 'Product Development',
        // 'Mobile APP Development',
      ],
      how_it_works: [
        // {
        //   img: require('@/assets/img/trgl-11.svg'),
        //   text: `Research <br> and strategy`
        // },
        // {
        //   img: require('@/assets/img/trgl-12.svg'),
        //   text: 'Wireframing <br> and strategy'
        // },
        // {
        //   img: require('@/assets/img/trgl-13.svg'),
        //   text: 'Visual <br> design'
        // },
        // {
        //   img: require('@/assets/img/trgl-14.svg'),
        //   text: 'UI <br> development'
        // },
        // {
        //   img: require('@/assets/img/trgl-15.svg'),
        //   text: 'Usability <br> testing'
        // },
      ]
      
    }
  },
  computed: {
    lang() {
      return this.$i18n.locale
    },
    isMobDevice() {
      return isMobile || isTablet ? true : false
    },
    componentInstance () {
      const name = this.isMobDevice ? 'ServicesMobile' : 'ServicesDesctop'
      return () => import(`../components/${name}`)
    }
  },
  watch: {
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

      switch (this.lang) {
        case 'en':
          this.services_desc = [
            {
              title: servicesEN[0].title,
              text: servicesEN[0].text
            },
            {
              title: servicesEN[1].title,
              text: servicesEN[1].text
            },
            {
              title: servicesEN[2].title,
              text: servicesEN[2].text
            },
          ],
          this.strategy_list = servicesEN[0].list
          this.creative_list = servicesEN[1].list
          this.tech_list = servicesEN[2].list
          this.how_it_works = [
            {
              img: require('@/assets/img/trgl-11.svg'),
              text: `Research <br> and strategy`
            },
            {
              img: require('@/assets/img/trgl-12.svg'),
              text: 'Wireframing <br> and strategy'
            },
            {
              img: require('@/assets/img/trgl-13.svg'),
              text: 'Visual <br> design'
            },
            {
              img: require('@/assets/img/trgl-14.svg'),
              text: 'UI <br> development'
            },
            {
              img: require('@/assets/img/trgl-15.svg'),
              text: 'Usability <br> testing'
            },
          ]
        break

        case 'ru':
          this.services_desc = [
            {
              title: servicesRU[0].title,
              text: servicesRU[0].text
            },
            {
              title: servicesRU[1].title,
              text: servicesRU[1].text
            },
            {
              title: servicesRU[2].title,
              text: servicesRU[2].text
            },
          ],
          this.strategy_list = servicesRU[0].list
          this.creative_list = servicesRU[1].list
          this.tech_list = servicesRU[2].list
          this.how_it_works = [
            {
              img: require('@/assets/img/trgl-11.svg'),
              text: `Исследования <br> и стратегия`
            },
            {
              img: require('@/assets/img/trgl-12.svg'),
              text: 'Вайрфрейминг <br> и стратегия'
            },
            {
              img: require('@/assets/img/trgl-13.svg'),
              text: 'Визуальное <br> Оформление'
            },
            {
              img: require('@/assets/img/trgl-14.svg'),
              text: 'Разработка <br> UI'
            },
            {
              img: require('@/assets/img/trgl-15.svg'),
              text: 'Тестирование <br> юзабилити'
            },
          ]
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

      switch (this.lang) {
        case 'en':
          this.services_desc = [
            {
              title: servicesEN[0].title,
              text: servicesEN[0].text
            },
            {
              title: servicesEN[1].title,
              text: servicesEN[1].text
            },
            {
              title: servicesEN[2].title,
              text: servicesEN[2].text
            },
          ],
          this.strategy_list = servicesEN[0].list
          this.creative_list = servicesEN[1].list
          this.tech_list = servicesEN[2].list
          this.how_it_works = [
            {
              img: require('@/assets/img/trgl-11.svg'),
              text: `Research <br> and strategy`
            },
            {
              img: require('@/assets/img/trgl-12.svg'),
              text: 'Wireframing <br> and strategy'
            },
            {
              img: require('@/assets/img/trgl-13.svg'),
              text: 'Visual <br> design'
            },
            {
              img: require('@/assets/img/trgl-14.svg'),
              text: 'UI <br> development'
            },
            {
              img: require('@/assets/img/trgl-15.svg'),
              text: 'Usability <br> testing'
            },
          ]
        break

        case 'ru':
          this.services_desc = [
            {
              title: servicesRU[0].title,
              text: servicesRU[0].text
            },
            {
              title: servicesRU[1].title,
              text: servicesRU[1].text
            },
            {
              title: servicesRU[2].title,
              text: servicesRU[2].text
            },
          ],
          this.strategy_list = servicesRU[0].list
          this.creative_list = servicesRU[1].list
          this.tech_list = servicesRU[2].list
          this.how_it_works = [
            {
              img: require('@/assets/img/trgl-11.svg'),
              text: `Исследования <br> и стратегия`
            },
            {
              img: require('@/assets/img/trgl-12.svg'),
              text: 'Вайрфрейминг <br> и стратегия'
            },
            {
              img: require('@/assets/img/trgl-13.svg'),
              text: 'Визуальное <br> Оформление'
            },
            {
              img: require('@/assets/img/trgl-14.svg'),
              text: 'Разработка <br> UI'
            },
            {
              img: require('@/assets/img/trgl-15.svg'),
              text: 'Тестирование <br> юзабилити'
            },
          ]
        break
      }

    }, 300)
    
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
    if (!this.isMobDevice) {
      anime({
        targets: '.page_services',
        opacity: [1, 0],
        easing: 'linear',
        duration: 1000,
        complete: function() { 
          next();
        }
      })
      // let preloader = document.querySelector('.page_change_preloader')
      // let random = Math.random() * 2
      // if (random < 1) {
      //   preloader.classList.add('green')
      //   preloader.classList.remove('orange')
      // } else {
      //   preloader.classList.add('orange')
      //   preloader.classList.remove('green')
      // }
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
    } else {
      anime({
        targets: '.page_services',
        opacity: [1, 0],
        easing: 'linear',
        duration: 500,
        complete: function() { 
          next();
        }
      })
      // setTimeout(() => {
      //   next();
      // },1000)
    }
  },
}
</script>