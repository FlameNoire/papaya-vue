import Vue from 'vue'
import App from './App.vue'
import i18n from './i18n'
import router from './router'
import store from './store'
import './registerServiceWorker'
// import firebase from "firebase/app"
// require("firebase/auth");
// require("firebase/database");

Vue.config.productionTip = false

// firebase.initializeApp({
//   apiKey: "AIzaSyDUcNbX4M6VxiXF0rLP8wROEKcSiema070",
//   authDomain: "vue-papaya.firebaseapp.com",
//   databaseURL: "https://vue-papaya.firebaseio.com",
//   projectId: "vue-papaya",
//   storageBucket: "vue-papaya.appspot.com",
//   messagingSenderId: "811920637155",
//   appId: "1:811920637155:web:159c37797dec5aadf259d6"
// })

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
