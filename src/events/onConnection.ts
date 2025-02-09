import { Socket } from 'socket.io'

import { onChat, onMessage, onSync } from '@/events/index.js'
import { users } from '@/main.js'
import { isBodyJson } from '@/middleware/index.js'

export async function onConnection(socket: Socket) {
  const user_id = users.get(socket)
  console.log(`${user_id} - Client connected`)

  socket.on('disconnect', () => {
    console.log(`${user_id} - Client disconnected`)
  })

  socket.use(isBodyJson(socket))
  socket.on('sync', onSync(socket))
  socket.on('chat', onChat(socket))
  socket.on('message', onMessage(socket))
}
