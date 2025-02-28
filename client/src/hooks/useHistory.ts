import { useCallback, useEffect } from 'react'

import { useStore } from '@/hooks/useStore'
import { getHistory } from '@/lib/getHistory'
import * as types from '@/types'

export function useHistory(chat: types.Chat) {
  const { addMessages, setFetched, setRead } = useStore()

  useEffect(() => {
    if (!chat.isRead) setRead(chat.id)
  }, [setRead, chat.id, chat.isRead])

  const fetchMore = useCallback(async () => {
    if (!chat.fetched) {
      const messages = await getHistory(chat.id, chat.messages.length)
      if (messages.length < 12) setFetched(chat.id)
      if (messages.length > 0) addMessages(chat.id, messages)
    }
  }, [setFetched, addMessages, chat.fetched, chat.id, chat.messages.length])

  return fetchMore
}
