import { useEffect, useState } from 'react'

import { useStore } from '@/hooks/useStore'
import { socket } from '@/lib/socket'
import * as types from '@/types'

export function useSocket() {
  const [active, setActive] = useState(true)
  const [connected, setConnected] = useState(false)

  const { setUser, setChats, addChat, addMessage, addMessages } = useStore()

  useEffect(() => {
    socket.connect()

    socket.on('connect', () => {
      console.debug('Socket connected')
      setConnected(true)
    })

    socket.on('disconnect', () => {
      console.debug('Socket disconnected')
    })

    socket.on('connect_error', () => {
      if (!socket.active) setActive(false)
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

  return [active, connected]
}
