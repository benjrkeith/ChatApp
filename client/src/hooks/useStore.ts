import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

import * as types from '@/types'

export const useStore = create<types.Store>()(
  immer((set) => ({
    user: null,
    setUser: (user) => set({ user }),

    chats: new Map<string, types.Chat>(),
    addChat: (chat) => set((state) => state.chats.set(chat.id, chat)),
    setChats: (chats) =>
      set({ chats: new Map(chats.map((chat) => [chat.id, chat])) }),

    setFetched: (chat_id: string) =>
      set((state) => {
        const chat = state.chats.get(chat_id)
        if (chat) chat.fetched = true
      }),

    addMessage: (message) =>
      set((state) => {
        const chat = state.chats.get(message.chat.id)
        if (!chat) return
        chat.messages.unshift(message)
      }),

    addMessages: (chat_id, messages) =>
      set((state) => {
        const chat = state.chats.get(chat_id)
        if (!chat) return

        if (messages.length === 0) chat.fetched = true
        else chat.messages.push(...messages)
      }),
  })),
)
