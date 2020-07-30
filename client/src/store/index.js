import Vue from 'vue'
import Vuex from 'vuex'
import { chats } from '@/data.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeChat: 1,
    // activeChat: null,
    chats,
    currentUser: {
      id: 1,
      name: 'John Doe',
      email: 'johnny@gmail.com',
      state: 'Kogi',
      avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }
  },
  mutations: {
    activateChat (state, payload) {
      state.activeChat = payload.id
    },
    newMessage (state, payload) {
      const chatIdx = state.chats.findIndex(chat => `${chat.id}` === `${payload.chatId}`)
      state.chats[chatIdx].messages.push(payload.message)
    }
  },
  actions: {
    setActiveChat ({ commit }, id) {
      commit('activateChat', { id })
    },
    createMessage ({ commit }, message) {
      commit('newMessage', { chatId: message.chatId, message })
    }
  },
  getters: {
    conversation: state => {
      return state.chats.find(chat => chat.id === state.activeChat)
    }
  },
  modules: {
  }
})
