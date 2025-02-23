import { Socket } from 'socket.io'

import { getMessages } from '../lib/getMessages.js'
import { users } from '../main.js'

type HistoryQuery = {
  chat_id: string
  skip: number
}

export function onHistory(socket: Socket) {
  return async (payload: HistoryQuery) => {
    const user = users.getUser(socket)
    if (!user?.id) return socket.disconnect()

    const messages = await getMessages(user.id, payload.chat_id, payload.skip)
    socket.emit('history', { chat_id: payload.chat_id, messages })
  }
}
