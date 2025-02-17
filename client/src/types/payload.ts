import { Chat } from '@/types/chat'
import { Message } from '@/types/message'
import { User } from '@/types/user'

export type SyncPayload = {
  user: User
  chats: Chat[]
}

export type HistoryPayload = {
  chat_id: string
  messages: Message[]
}
