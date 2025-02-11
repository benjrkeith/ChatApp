import { useEffect } from 'react'
import { useNavigate } from 'react-router'

import { useStore } from '@/hooks/useStore'
import { socket } from '@/lib/socket'
import * as types from '@/types'

export function useSocket() {
  const navigate = useNavigate()
  const { setUser, setChats, addChat, addMessage } = useStore()

  useEffect(() => {
    socket.connect()

    socket.on('connect', () => {
      console.debug('Socket connected')
    })

    socket.on('disconnect', () => {
      console.debug('Socket disconnected')
    })

    socket.on('connect_error', () => {
      if (!socket.active) navigate('/auth')
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
  }, [addChat, addMessage, navigate, setChats, setUser])
}
