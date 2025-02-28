import { socket } from '@/lib/socket'

export function createChat(name: string, users: string[]) {
  socket.emit('chat', { name, users })
}
