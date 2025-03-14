import { useCallback, useEffect } from 'react'
import { Navigate } from 'react-router'

import CreateMessage from '@/ui/chats/chat/CreateMessage'
import MessageList from '@/ui/chats/chat/MessageList'
import TitleBar from '@/ui/chats/chat/TitleBar'

import { useStore } from '@/hooks/useStore'
import { getHistory } from '@/lib/getHistory'
import * as types from '@/types'

type ChatProps = {
  chat: types.Chat
}

export default function Chat({ chat }: ChatProps) {
  const { setFetched, addMessages } = useStore()

  const fetchMore = useCallback(async () => {
    if (!chat.fetched) {
      const messages = await getHistory(chat.id, chat.messages.length)
      if (messages.length < 12) setFetched(chat.id)
      if (messages.length > 0) addMessages(chat.id, messages)
    }
  }, [setFetched, addMessages, chat.fetched, chat.id, chat.messages.length])

  useEffect(() => {
    if (chat.messages.length <= 1) fetchMore()
  }, [fetchMore, chat.messages.length, chat.id])

  if (!chat) return <Navigate to="/chats" />
  return (
    <div className="relative z-20 flex h-full w-full flex-col overflow-hidden">
      <div className="absolute z-10 h-full w-full bg-[url(/chat-bg.svg)] opacity-5" />
      <TitleBar data={chat} />

      {(chat.messages.length > 1 || chat.fetched) && (
        <MessageList messages={chat.messages} fetchMore={fetchMore} />
      )}

      <CreateMessage />
    </div>
  )
}
