import { Message } from '@/types/message'
import { User } from '@/types/user'

export type Chat = {
  id: string
  created_at?: string
  updated_at?: string
  name: string
  avatar: string
  users?: User[]
  messages: Message[]
}
