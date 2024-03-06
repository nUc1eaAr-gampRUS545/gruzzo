import { createStore } from 'vuex';

export default createStore({
  state: {
    info:{},
    orders:[]
  },
  mutations: {
    updateUser(state, newUser) {
      state.info = newUser;

    },
    getOrders(state, newOrders) {
      state.orders = newOrders;

    },
  },
  
  getters: {
    getInfo(state) {
      return state.info;
    },
  },
});