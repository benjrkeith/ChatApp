import { useParams } from 'react-router'

import { useStore } from '@/hooks/useStore'

export function useChat() {
  const chat_id = useParams()['*']
  const { chats } = useStore()
  return chats.get(chat_id || '')
}
