// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/font/fonts.css'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import '@/assets/icon/iconfont.css'
import 'swiper/dist/css/swiper.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/font/fonts.css'
Vue.use(iView)
=======
import 'swiper/dist/css/swiper.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/font/fonts.css'
// import $ from 'jquery'
import 'bootstrap/dist/js/bootstrap.min'

>>>>>>> master
Vue.config.productionTip = false
// Vue.component("Swiper",Swiper);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
