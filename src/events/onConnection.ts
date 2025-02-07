import { Socket } from 'socket.io'

import { onChat } from '@/events/onChat.js'
import { onMessage } from '@/events/onMessage.js'
import { users } from '@/main.js'
import { verifyJSON } from '@/middleware/verifyJSON.js'

export async function onConnection(socket: Socket) {
  const user_id = users.get(socket)
  console.log(`${user_id} - Client connected`)

  socket.on('disconnect', () => {
    console.log(`${user_id} - Client disconnected`)
  })

  socket.use(verifyJSON(socket))
  socket.on('chat', onChat(socket))
  socket.on('message', onMessage(socket))
}
