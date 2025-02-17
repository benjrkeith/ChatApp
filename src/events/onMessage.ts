import { Socket } from 'socket.io'
import { z } from 'zod'

import { createMessage } from '@/lib/createMessage.js'
import { users } from '@/main.js'
import { messageSchema } from '@/schemas/message.js'

// users can create messages in chats they aren't apart of !
export function onMessage(socket: Socket) {
  return async (payload: z.infer<typeof messageSchema>) => {
    const user = users.getUser(socket)
    if (!user?.id) return socket.disconnect()

    const parsed = messageSchema.safeParse(payload)
    if (!parsed.success)
      return socket.emit('error', parsed.error.flatten().fieldErrors)

    const { chat_id, content } = parsed.data
    const message = await createMessage(user.id, chat_id, content)

    socket.broadcast.to(chat_id).emit('message', message[0])
    socket.emit('message', message[0])
  }
}
