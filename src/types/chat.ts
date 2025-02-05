import { Message } from '@/types/message'

export type Chat = {
  name: string
  avatar: string
  notifications?: number
  lastMessage?: Message
}
