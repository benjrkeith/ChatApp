import { Chat } from '@/types/chat'
import { Message } from '@/types/message'
import { User } from '@/types/user'

type State = {
  user: User | null
  chats: Map<string, Chat>
}

type Actions = {
  setUser: (user: User) => void

  addChat: (chat: Chat) => void
  setChats: (chats: Chat[]) => void

  setFetched: (chat_id: string) => void

  addMessage: (message: Message) => void
  addMessages: (chat_id: string, messages: Message[]) => void
}

export type Store = State & Actions
