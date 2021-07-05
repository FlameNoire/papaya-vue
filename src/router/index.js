import Vue from 'vue'
import VueRouter from 'vue-router'
import i18n from '@/i18n'
import Home from '../views/Home.vue'
// import anime from 'animejs'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { breadcrumbs: true, breadcrumb: 'Home' }
  },
  {
    path: '/services',
    name: 'Services',
    component: () => import('../views/Services.vue'),
    meta: { breadcrumbs: true, breadcrumb: 'menu.menu1' }
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: () => import('../views/Portfolio.vue'),
    meta: { breadcrumbs: true, breadcrumb: 'menu.menu2' },
    // children: [
    //   {
    //     path: '/portfolio/:id',
    //     name: 'portfolio-work',
    //     component: () => import('../views/PortfolioWork.vue'),
    //     meta: { breadcrumbs: false }
    //   },
    // ]
  },
  {
    path: '/portfolio/works',
    name: 'PortfolioWork',
    component: () => import('../views/PortfolioWork.vue'),
    meta: { breadcrumbs: false }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    meta: { breadcrumbs: true, breadcrumb: 'menu.menu3' }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue'),
    meta: { breadcrumbs: true, breadcrumb: 'menu.menu4' }
  },
  {
    path: '/brief',
    name: 'Brief',
    component: () => import('../views/Brief.vue'),
    meta: { breadcrumbs: true, breadcrumb: 'brief.t3' }
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('../views/Blog.vue'),
    meta: { breadcrumbs: true, breadcrumb: 'menu.menu5' }
  },
  {
    path: '/blog/:postId',
    name: 'BlogPost',
    component: () => import('../views/BlogPost.vue'),
    meta: { breadcrumbs: false }
  },
  // {
  //   path: '/msgresp',
  //   component: () => import('../views/MsgResponse.vue'),
  // },
  { 
    path: '*', 
    component: () => import('../views/NotFound.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

// router.beforeEach((to, from, next) => {
  // let preloader = document.querySelector('.page_change_preloader')
  // console.log(preloader)
  // let random = Math.random() * 2
  // if (random < 1) {
  //   preloader.classList().add('green')
  //   preloader.classList().remove('orange')
  // } else {
  //   preloader.classList().add('orange')
  //   preloader.classList().remove('green')
  // }
  // next(false)
  // anime({
  //   targets: '.preload_bg_green',
  //   points: [
  //     { value: '1920,1080 0,1080 0,0 0,0 0,1080' },
  //     { value: '1920,1080 0,1080 0,0 0,0 677,710' },
  //     { value: '1920,1080 0,1080 0,0 432.1,0 677,710' },
  //     { value: '1920,1080 0,1080 0,0 432.1,0 1920,0' },
  //     { value: '1920,1080 0,1080 0,0 432.1,0 1920,0' },
  //     // { value: '1920,1080 0,1080 0,0 432.1,0 677,710' },
  //     // { value: '1920,1080 0,1080 0,0 0,0 677,710' },
  //     { value: '1920,1080 0,1080 0,0 0,0 0,1080' },
  //   ],
  //   easing: 'easeOutQuad',
  //   duration: 3000,
  //   complete: function () {
  //     next();
  //   }
  // });
// })

export default router
