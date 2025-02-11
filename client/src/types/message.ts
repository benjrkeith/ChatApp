import { User } from '@/types/user'

export type Message = {
  id: string
  created_at: string
  updated_at?: string
  content: string
  system: boolean
  author: User
  chat_id: string
}
