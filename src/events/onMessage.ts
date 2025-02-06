import { Socket } from 'socket.io'

export function onMessage(socket: Socket) {
  return async (message: string) => {
    socket.broadcast.emit('message', message)
  }
}
