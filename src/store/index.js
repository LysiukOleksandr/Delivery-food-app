import Vue from "vue";
import Vuex from "vuex";
import home from './home'
import restraunt from './restraunt'
import cart from './cart'
Vue.use(Vuex);

export default new Vuex.Store({
  modules:{
    home,
    restraunt,
    cart
  }
});
