import { socket } from '@/lib/socket'

export function sendMessage(chat_id: string, content: string) {
  socket.emit('message', { chat_id, content })
}
