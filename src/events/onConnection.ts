import { Socket } from 'socket.io'

import { onChat } from '@/events/onChat.js'
import { onHistory } from '@/events/onHistory.js'
import { onMessage } from '@/events/onMessage.js'
import { getChats } from '@/lib/getChats.js'
import { users } from '@/main.js'
import { isBodyJson } from '@/middleware/isBodyJSON.js'

export async function onConnection(socket: Socket) {
  const user = users.getUser(socket)
  if (!user?.id) return socket.disconnect()

  const chats = await getChats(user.id)
  for (const chat of chats) socket.join(chat.id)
  socket.emit('sync', { user, chats })

  console.log(`${user?.username} - Client connected`)
  socket.on('disconnect', () => {
    console.log(`${user?.username} - Client disconnected`)
  })

  socket.use(isBodyJson(socket))
  socket.on('chat', onChat(socket))
  socket.on('message', onMessage(socket))
  socket.on('history', onHistory(socket))
}
