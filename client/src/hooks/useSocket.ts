import { useEffect, useState } from 'react'

import { useStore } from '@/hooks/useStore'
import { socket } from '@/lib/socket'
import * as types from '@/types'

export function useSocket() {
  const { setUser, setChats, addChat, addMessage, addMessages } = useStore()
  const [isSuccessfull, setIsSuccessfull] = useState(true)

  useEffect(() => {
    socket.connect()

    socket.on('connect', () => {
      console.debug('Socket connected')
    })

    socket.on('disconnect', () => {
      console.debug('Socket disconnected')
    })

    socket.on('connect_error', () => {
      if (!socket.active) setIsSuccessfull(false)
    })

    socket.on('sync', (payload: types.SyncPayload) => {
      setUser(payload.user)
      setChats(payload.chats)
    })

    socket.on('chat', (payload: types.Chat) => {
      addChat(payload)
    })

    socket.on('message', (payload: types.Message) => {
      addMessage(payload)
    })

    return () => {
      socket.removeAllListeners()
      socket.disconnect()
    }
  }, [addChat, addMessage, setChats, addMessages, setUser])

  return isSuccessfull
}
