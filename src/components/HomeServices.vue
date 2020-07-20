<template>
  <section id="screen_3" class="section s_third">
    <h2 class="s_title">What we do</h2>
    <div class="s_content">
      <div class="block--left">
        <div class="categories">

          <ul class="cat_list">
            <li class="cat_list_tab strategy" @mouseenter="catClassToggler($event)" @mouseleave="catClassToggler($event)">
              <a href="#" class="cats">
                <span class="cat_text">STRATEGY</span>
                <span class="cat_icon"><img src="@/assets/img/marketing.svg" alt=" "></span>
              </a>
              <div class="sub_cats_wrap">
                <ul>
                  <li><a href="#">Research, Analysis and Insights</a></li>
                  <li><a href="#">Strategic Planning</a></li>
                  <li><a href="#">Brand Developmetn & Positioning</a></li>
                  <li><a href="#">Digital Strategy</a></li>
                  <li><a href="#">Content Strategy</a></li>
                  <li><a href="#">Inovation Architecture & User Experience</a></li>
                  <li><a href="#">Product Strategy</a></li>
                </ul>
              </div>
            </li>
            <li class="cat_list_tab creative" @mouseenter="catClassToggler($event)" @mouseleave="catClassToggler($event)">
              <a href="#" class="cats">
                <span class="cat_text">CREATIVE</span>
                <span class="cat_icon"><img src="@/assets/img/design.svg" alt=" "></span>
              </a>
              <div class="sub_cats_wrap">
                <ul>
                </ul>
              </div>
            </li>
            <li class="cat_list_tab technology" @mouseenter="catClassToggler($event)" @mouseleave="catClassToggler($event)">
              <a href="#" class="cats">
                <span class="cat_icon"><img src="@/assets/img/code.svg" alt=" "></span>
                <span class="cat_text">TECHNOLOGY</span>
              </a>
              <div class="sub_cats_wrap">
                <ul>
                </ul>
              </div>
            </li>
          </ul>

          <div class="cat_canvas">
          </div>
        </div>
      </div>
      <div class="block--right">
        <div class="chosen_cat">
          <img src="@/assets/img/graph-tablet2.png" alt=" ">
          <div class="chosen_cat_name">
            <p>strategy</p>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
import anime from 'animejs/lib/anime.es.js'

export default {
  methods: {
    catClassToggler: function(e) {
      e.target.classList.toggle('active')
    }
  },
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
          padding-left: 30px;
          transform: rotateZ(-15deg);
        }
      }
    }
  }
  .categories {
    position: relative;
    height: 100%;
    text-align: left;
  }
  .cat_list {
    display: flex;
  }
  .cat_list_tab {
    position: relative;
    margin-right: 20px;
    &.active, &:hover {
      &.strategy {
        margin-right: 14.8rem;
        transition: all .2s;
      }
      .sub_cats_wrap {
        opacity: 1;
        pointer-events: unset;
        transition: all .2s;
      }
    }
  }
  .strategy {
    top: 13.6rem;
    margin-right: 0.8rem;
    transition: all .3s;
  }
  .creative {
    top: 28.5rem;
    margin-right: 18.9rem;
  }
  .technology {
    top: 15.4rem;
    .cats .cat_icon {
      margin-left: 0;
      margin-right: 3rem;
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
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .sub_cats_wrap {
    padding-top: 4.5rem;
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
      margin-bottom: 3rem;
    }
    a {
      position: relative;
      font-size: 1.8rem;
      line-height: 2.1rem;
      font-weight: 400;
      white-space: nowrap;
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
  @media (max-width: 1439px) {
  }
</style>