import MQ from 'vue-match-media/src'
import Vue from 'vue'
import 'cleave.js/dist/addons/cleave-phone.i18n.js'

const VueMQ = {
  install(Vue, options){
    Vue.use(MQ)
  }
}
Vue.use(VueMQ)
export default VueMQ;