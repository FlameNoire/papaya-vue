<template>
  <div class="lang_select">
    <transition  name="fade">
      <ul v-show="langsOpen">
        <li v-for="(lang, i) in langs" :key="`Lang${i}`" :class="{ 'selected': $i18n.locale == lang }"><a class="lang_select_option" href="#" @click.prevent="clickLang(lang)">{{lang}}</a></li>
      </ul>
    </transition>
    <a href="#" @click.prevent="langsHandler" class="lang_btn">{{$i18n.locale}}</a>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      langsOpen: false,
      langs: ['en', 'ru']
    }
  },
  methods: {
    langsHandler() {
      this.langsOpen = !this.langsOpen
      console.log(this.$i18n.locale)
    },
    clickLang(lang) {
      this.langsOpen = false
      this.$i18n.locale = lang
      console.log(this.$i18n.locale)
      this.$store.commit('menuClose')
    },
  }
}
</script>

<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.lang_select {
  position: relative;
  display: flex;
  font-size: 1.7rem;
  line-height: 20px;
  text-transform: uppercase;
  ul {
    position: absolute;
    right: 100%;
    top: 0;
    padding-left: 1.5rem;
    display: flex;
  }
  .selected {
    display: none;
  }
  li {
    margin-right: 1.5rem;
  }
}
.lang_btn {
  display: block;
  text-transform: uppercase;
  font-size: 1.7rem;
  line-height: 20px;
}
.main_menu_bottom {
  .lang_select {
    order: 3;
    ul {
      background-color: #fff;
    }
  }
  .lang_btn {
    font-family: 'SF Pro Display', sans-serif;
    font-size: 1.7rem;
    line-height: 20px;
    text-transform: uppercase;
  }
}

@media (max-width: 1900px) {
  .lang_btn {
    font-size: 15px;
  }
}
@media (max-width: 1439px) {
  .lang_select {
    font-size: 16px;
  }
  .lang_btn {
    font-size: 16px;
  }
}
@media (min-width: 992px) and (max-width: 1366px) {
  .main_menu_bottom  .lang_select {
    font-size: 16px;
  }
  .main_menu_bottom .lang_btn {
    font-size: 16px;
  }
}
</style>