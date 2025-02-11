import { Chat } from '@/types/chat'
import { User } from '@/types/user'

export type SyncPayload = {
  user: User
  chats: Chat[]
}
