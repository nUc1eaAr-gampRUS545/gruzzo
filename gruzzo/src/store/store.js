import { createStore } from 'vuex';

export default createStore({
  state: {
    info:{},
    orders:[],
    isLoginedIn:false
  },
  mutations: {
    updateUser(state, newUser) {
      state.info = newUser;

    },
    getOrders(state, newOrders) {
      state.orders = newOrders;
    },
    logined(state, boolean){
      state.isLoginedIn = boolean;
    }
  },
  
  getters: {
    getInfo(state) {
      return state.info;
    },
  },
});