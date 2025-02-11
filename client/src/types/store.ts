import { Chat } from '@/types/chat'
import { Message } from '@/types/message'
import { User } from '@/types/user'

export type Store = {
  user: User | null
  setUser: (user: User | null) => void

  chats: Chat[]
  setChats: (chats: Chat[]) => void
  addChat: (chat: Chat) => void

  addMessage: (message: Message) => void
}
