import { Socket } from 'socket.io'

export function isBodyJson(socket: Socket) {
  return (packet: Array<string>, next: () => void) => {
    if (typeof packet[1] === 'object') next()
    else socket.emit('error', { message: 'Bad request' })
  }
}
