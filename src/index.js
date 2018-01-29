/*
 * @Author: slimcheng 
 * @Date: 2018-01-26 16:07:47 
 * @Last Modified by: slimcheng
 * @Last Modified time: 2018-01-26 16:08:51
 */


import vueDateFormat from './vue-date-format.vue'

const dateFormat = {
  install: function (Vue) {
    if (typeof window !== 'undefined' && window.Vue) {
      Vue = window.Vue
    }
    Vue.component(vueDateFormat.name, vueDateFormat)
  }
}

export default dateFormat