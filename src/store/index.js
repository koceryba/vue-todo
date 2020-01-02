import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [
      {
        id: 1,
        text: "Test item 1",
        items: null,
      },
      {
        id: 2,
        text: "Test item 2",
        items: null,
      },
      {
        id: 3,
        text: "Test item 3",
        items: null,
      },
    ]
  },
  mutations: {
    ADD_ITEM (state, text) {
      state.items.push(
        {
          id: `f${(+new Date).toString(16)}`,
          text: text,
          items: null,
        }
      );
    },
    REMOVE_ITEM (state, item) {
      state.items.splice( state.items.indexOf(item), 1 );
    },
    ADD_SUBLIST (state, itemAdd) {
      state.items[state.items.indexOf(itemAdd)].items = [];
    },
    REMOVE_SUBLIST (state, item) {
      state.items[state.items.indexOf(item)].items = null;
    },
    ADD_SUBLIST_ITEM (state, payload) {
      state.items[state.items.indexOf(payload.itemTo)].items.push(
        {
          id: `f${(+new Date).toString(16)}`,
          text: payload.text,
        }
      );
    },
  },
  actions: {
  },
  modules: {
  }
})
