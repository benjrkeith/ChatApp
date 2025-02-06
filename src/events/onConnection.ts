import { Socket } from 'socket.io'

import { onMessage } from '@/events/onMessage.js'

export async function onConnection(socket: Socket) {
  console.log('Client connected')

  socket.on('disconnect', () => console.log('Client disconnected'))

  socket.on('join', (room) => {
    socket.join(room)
    console.log(`Client joined room ${room}`)
  })

  socket.on('leave', (room) => {
    socket.leave(room)
    console.log(`Client left room ${room}`)
  })

  socket.on('message', onMessage(socket))
}
