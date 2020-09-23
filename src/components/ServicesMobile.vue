<template>
  <div class="page page_services">
    <section class="screen s_top">
      <h1 class="page_title">{{$t('services.t1')}}</h1>
      <ul class="tabs">
        <li v-for="(item, index) in services_desc" :class="{'active' : index == activeTab}" :key="index">
          <div class="tabs_header">
            <div class="tab_title" @click="activeTab = index">{{item.title}}</div>
          </div>
          <div class="tab_body" v-if="index == activeTab">
            <p v-html="item.text"></p>
          </div>
        </li>
      </ul>
    </section>
    <section class="screen strategy">
      <div class="description">
        <!-- <h2 class="s_title"><span>S</span>TRATEGY</h2> -->
        <h2 class="s_title"><img src="@/assets/img/strategy.svg" alt="strategy"></h2>
        <ul class="list_default">
          <li v-for="(item, index) in strategy_list" :key="index">{{item}}</li>
        </ul>
      </div>
    </section>
    <section class="screen creative">
      <div class="description">
        <h2 class="s_title"><img src="@/assets/img/creative-2.svg" alt="creative"></h2>
        <ul class="list_default">
          <li v-for="(item, index) in creative_list" :key="index">{{item}}</li>
        </ul>
        <!-- <h2 class="s_title"><span>C</span>reative</h2> -->
      </div>
    </section>
    <section class="screen technology">
      <div class="description">
        <!-- <h2 class="s_title"><span>T</span>echnology</h2> -->
        <h2 class="s_title"><img src="@/assets/img/technology.svg" alt="technology"></h2>
        <ul class="list_default">
          <li v-for="(item, index) in tech_list" :key="index">{{item}}</li>
        </ul>
      </div>
    </section>
    <section class="screen how_it_works">
      <div class="hiw_items">
        <div class="hiw_item" v-for="(item, index) in how_it_works" :key="index">
          <img :src="item.img" alt=" ">
          <p v-html="item.text"></p>
        </div>
      </div>
      <div class="bottom">
        <div class="bottom">
        <a href="#" class="buttons btn_order">
          <i class="icon">
            <img src="@/assets/img/brief-white.svg" alt=" ">
            <img src="@/assets/img/brief.svg" alt=" ">
          </i>
          <span>{{$t('buttons.btn8')}}</span>
        </a>
      </div>
      </div>
    </section>
    
  </div>
</template>

<script>
import anime from 'animejs/lib/anime.es.js'

export default {
  props: ['services_desc', 'strategy_list', 'creative_list', 'tech_list', 'how_it_works'],
  data: () => {
    return {
      activeTab: 0,
    }
  },
  mounted() {
    anime({
      targets: '.page_services',
      opacity: [0, 1],
      easing: 'linear',
      duration: 1000,
      delay: 300
    })
  }
}
</script>

<style lang="scss" scoped>
.page_services {
  // padding-top: 85px;
  padding-bottom: 9rem;
  color: #000;
  .page_title {
    margin-bottom: 5rem;
  }
  .s_title {
    font-weight: bold;
    font-size: 8rem;
    line-height: 9.5rem;
  }
  .list_default {
    li:last-child {
      margin-bottom: 0;
    }
  }
}
.screen {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.s_top {
  margin-bottom: 8rem;
  display: block;
  .inner {
    display: flex;
    // align-items: center;
  }
  .tabs {
    width: 100%;
    li {
      margin-bottom: 3rem;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  .tabs_header {
    display: flex;
    margin-bottom: 2rem;
  }
  .tab_title {
    position: relative;
    font-size: 2.5rem;
    line-height: 3.6rem;
    text-transform: uppercase;
    color: rgba(#000, .6);
    cursor: pointer;
    &:last-child {
      margin-right: 0;
    }
    &:hover, &.active {
      &::after {
        width: 100%;
      }
    }
    &::before {
      position: absolute;
      display: block;
      content: '';
      bottom: -2px;
      left: 0;
      height: 2px;
      width: 100%;
      background: #C4C4C4;
    }
    &::after {
      position: absolute;
      display: block;
      content: '';
      bottom: -2px;
      left: 0;
      height: 2px;
      width: 0;
      background: #000;
      z-index: 10;
      transition: width .3s;
    }
  }
  .tab_body {
    font-size: 1.6rem;
    line-height: 144%;
    color: rgba(#000, .5);
  }
}
.strategy {
  margin-bottom: 8rem;
  .s_title {
    margin-right: 4rem;
    margin-left: calc(-20px - 2rem);
    flex-shrink: 0;
    img {
      width: 5rem;
      flex-shrink: 0;
      display: block;
    }
    span {
      color: #FF6900;
    }
  }
  .description {
    position: relative;
    display: flex;
    align-items: center;
  }
  .list_default {
    li {
      &::before {
        background: #FA7C0D;
      }
    }
  }
}
.creative {
  margin-bottom: 8rem;
  .s_title {
    margin-right: 4rem;
    margin-left: calc(-20px - 2rem);
    flex-shrink: 0;
    img {
      width: 5rem;
    }
    span {
      color: #F7DD00;
    }
  }
  .description {
    position: relative;
    display: flex;
    align-items: center;
  }
}
.technology {
  margin-bottom: 8rem;
  .s_title {
    margin-right: 4rem;
    margin-left: calc(-20px - 2rem);
    flex-shrink: 0;
    img {
      width: 5rem;
    }
    span {
      color: #95B540;
    }
  }
  .description {
    position: relative;
    display: flex;
    align-items: center;
  }
  .list_default {
    li {
      &::before {
        background: #95B540;
      }
    }
  }
}
.how_it_works {
  display: block;
  .bottom {
    display: flex;
    justify-content: center;
  }
}
.hiw_items {
  margin-bottom: 13.5rem;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.hiw_item {
  margin-bottom: 16.5rem;
  position: relative;
  text-align: center;
  font-size: 2.5rem;
  line-height: 120%;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  &:last-child {
    margin-bottom: 0;
  }
  &:nth-child(1) {
    img {
      left: -3.8rem;
      top: -7.3rem;
      width: 18.8rem;
    }
  }
  &:nth-child(2) {
    img {
      left: -2.9rem;
      top: -7.3rem;
      width: 18.2rem;
    }
  }
  &:nth-child(3) {
    img {
      left: -6rem;
      top: -3.8rem;
      width: 16.9rem;
    }
  }
  &:nth-child(4) {
    img {
      left: -1rem;
      top: -6rem;
      width: 15.8rem;
    }
  }
  &:nth-child(5) {
    img {
      left: -5.2rem;
      top: -4.8rem;
      width: 18.8rem;
    }
  }
  img {
    position: absolute;
    flex-shrink: 0;
    max-width: none;
  }
  p {
    position: relative;
    z-index: 10;
  }
}
.btn_order {
  padding-left: 2rem;
  padding-right: 2rem;
  width: 20rem;
  .icon {
    margin-right: 2.5rem;
  }
}

@media (max-width: 1365px) {
  .creative .image span {
    font-size: 14rem;
    line-height: 17rem;
    margin-top: -8.5rem;
    left: 3rem;
  }
  .creative .image .image_inner {
    padding-left: 0;
  }
  .creative .image img {
    width: 37rem;
  }
  .creative .image img + img {
    width: 31.6rem;
  }
}

@media (min-width: 992px) and (max-width: 1366px) {
  .page_services {
    padding-bottom: 135px;
    padding-left: 40px;
    padding-right: 40px;
    .page_title {
      margin-bottom: 75px;
    }
    .s_title {
      margin-bottom: 0;
      font-size: 120px;
      line-height: 118%;
    }
  }
  .s_top {
    margin-bottom: 120px;
    .tabs {
      li {
        margin-bottom: 45px;
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
    .tabs_header {
      margin-bottom: 30px;
    }
    .tab_title {
      font-size: 37px;
      line-height: 54px;
    }
    .tab_body {
      font-size: 24px;
    }
  }
  .list_default {
    font-size: 30px;
    line-height: 40px;
    li {
      margin-bottom: 40px;
      padding-left: 65px;
      &::before {
        height: 3px;
        width: 35px;
      }
    }
  }
  .strategy {
    margin-bottom: 160px;
    .s_title {
      margin-bottom: 0;
      margin-right: 80px;
      margin-left: calc(-80px);
      img {
        width: 100px;
      }
    }
  }
  .creative {
    margin-bottom: 160px;
    .s_title {
      margin-bottom: 0;
      margin-right: 80px;
      margin-left: calc(-80px);
      img {
        width: 100px;
      }
    }
  }
  .technology {
    margin-bottom: 160px;
    .s_title {
      margin-bottom: 0;
      margin-right: 80px;
      margin-left: calc(-80px);
      img {
        width: 100px;
      }
    }
  }
  .hiw_items {
    margin-bottom: 200px;
  }
  .hiw_item {
    margin-bottom: 240px;
    position: relative;
    text-align: center;
    font-size: 37px;
    line-height: 120%;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    &:last-child {
      margin-bottom: 0;
    }
    &:nth-child(1) {
      img {
        left: -57px;
        top: -109px;
        width: 282px;
      }
    }
    &:nth-child(2) {
      img {
        left: -43px;
        top: -109px;
        width: 273px;
      }
    }
    &:nth-child(3) {
      img {
        left: -90px;
        top: -57px;
        width: 253px;
      }
    }
    &:nth-child(4) {
      img {
        left: -15px;
        top: -90px;
        width: 237px;
      }
    }
    &:nth-child(5) {
      img {
        left: -78px;
        top: -72px;
        width: 282px;
      }
    }
  }

  .buttons {
    padding: 15px 45px;
    height: 63px;
    width: 300px;
    font-size: 21px;
    line-height: 26px;
    img {
      width: 25px;
    }
  }
  .btn_order {
    padding-left: 30px;
    padding-right: 30px;
    .icon {
      margin-right: 37px;
    }
  }
}

@media (max-width: 991px) {
  .page_services {
    .s_title {
      margin-bottom: 0;
    }
    .strategy {
      .s_title {
        margin-bottom: 0;
      }
    }
    .creative {
      .s_title {
        margin-bottom: 0;
      }
    }
    .technology {
      .s_title {
        margin-bottom: 0;
      }
    }
  }
}
</style>