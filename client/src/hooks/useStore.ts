import { create } from 'zustand'

import * as types from '@/types'

export const useStore = create<types.Store>((set) => ({
  user: null,
  setUser: (user) => set({ user }),

  chats: [],
  setChats: (chats) => set({ chats }),
  addChat: (chat) => set((state) => ({ chats: [chat, ...state.chats] })),

  addMessage: (message) =>
    set((state) => {
      const chat = state.chats.filter((chat, idx, arr) => {
        if (chat.id === message.chat.id) {
          arr.splice(idx, 1)
          return true
        }
        return false
      })

      chat[0].messages = [message, ...chat[0].messages]
      return { chats: [chat[0], ...state.chats] }
    }),
}))
