import Vue from 'vue'
import Vuex from 'vuex'
import { chats, John, ChatType } from '@/data.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    winHeight: 0,
    winWidth: 0,
    // activeChat: 3,
    placeHolderChat: null,
    activeChat: null,
    chats,
    currentUser: John
  },
  mutations: {
    activateChat(state, payload) {
      state.activeChat = payload.id
    },
    addChat(state, payload) {
      state.chats.push(payload.newchat)
      state.activeChat = payload.newchat.id
      state.placeHolderChat = ''
    },
    placeHolderChat(state, payload) {
      const newchat = {
        messages: [],
        users: [state.currentUser, payload.user],
        type: ChatType.user,
        chatImg: payload.user.avatar,
        name: payload.user.name
      }
      state.placeHolderChat = newchat
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
    createChat({ commit }, user) {
      commit('addChat', { user })
    },
    startChat({ commit, state }, user) {
      const chat = state.chats.find(
        chat => user.name.toLowerCase() === chat.name.toLowerCase()
      )

      if (chat) {
        commit('activateChat', { id: chat.id })
      } else {
        commit('placeHolderChat', { user })
      }
    },
    createMessage({ commit, state }, message) {
      let chatId, NewMessageId
      if (state.placeHolderChat) {
        const newchat = {
          id: state.chats[state.chats.length - 1].id + 2,
          messages: [{ id: NewMessageId, ...message }],
          users: [state.currentUser, state.placeHolderChat.users[1]],
          type: ChatType.user,
          chatImg: state.placeHolderChat.chatImg,
          name: state.placeHolderChat.name
        }
        commit('addChat', { newchat })
      } else if (state.activeChat) {
        chatId = state.activeChat
        const chat = state.chats.find(chat => `${chat.id}` === `${chatId}`)

        NewMessageId = [chat.messages.length - 1] + 1
        commit('newMessage', {
          chatId: chatId,
          message: { id: NewMessageId, ...message }
        })
      }
    },
    updateHeight({ commit }, { height, width }) {
      commit('windowSize', { height, width })
    }
  },
  getters: {
    conversation: state => {
      const chat = state.chats.find(chat => chat.id === state.activeChat)
      if (state.placeHolderChat) {
        return state.placeHolderChat
      } else if (chat) {
        return chat
      } else {
        return null
      }
    },
    isMobile: state => {
      return state.winWidth < 1200
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
