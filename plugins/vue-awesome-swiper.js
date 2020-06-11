import Vue from 'vue'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

const VueAwesomeSwiper = {
    install(Vue, options){
        Vue.component('swiper',swiper)
        Vue.component('swiperSlide',swiperSlide)
    }
}
Vue.use(VueAwesomeSwiper);
export default VueAwesomeSwiper;