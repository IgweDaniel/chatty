import Vue from 'vue'
import Vuex from 'vuex'
import { chats, John } from '@/data.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    winHeight: 0,
    winWidth: 0,
    // activeChat: 3,
    activeChat: null,
    chats,
    currentUser: John
  },
  mutations: {
    activateChat(state, payload) {
      state.activeChat = payload.id
    },
    newMessage(state, payload) {
      const chatIdx = state.chats.findIndex(
        chat => `${chat.id}` === `${payload.chatId}`
      )
      state.chats[chatIdx].messages.push(payload.message)
    },
    windowSize(state, payload) {
      state.winHeight = payload.height
      state.winWidth = payload.width
    }
  },
  actions: {
    setActiveChat({ commit }, id) {
      commit('activateChat', { id })
    },
    createMessage({ commit }, message) {
      commit('newMessage', { chatId: message.chatId, message })
    },
    updateHeight({ commit }, { height, width }) {
      commit('windowSize', { height, width })
    }
  },
  getters: {
    conversation: state => {
      return state.chats.find(chat => chat.id === state.activeChat)
    },
    vH: state => {
      return `${state.winHeight}px`
    },
    vW: state => {
      return `${state.winWidth}px`
    }
  },
  modules: {}
})
