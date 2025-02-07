import { Socket } from 'socket.io'
import { z } from 'zod'

import { createMessage } from '@/lib/createMessage.js'
import { users } from '@/main.js'

const schema = z.object({
  chat_id: z.string().length(36),
  content: z.string().min(1).max(1024),
})

export function onMessage(socket: Socket) {
  return async (payload: z.infer<typeof schema>) => {
    const parsed = schema.safeParse(payload)
    if (!parsed.success)
      return socket.emit('error', parsed.error.flatten().fieldErrors)

    const user_id = users.get(socket)
    if (!user_id) return socket.emit('error', { message: 'Unauthorized' })

    const { chat_id, content } = parsed.data
    const message = await createMessage(user_id, chat_id, content)
    socket.to(chat_id).emit('message', message)
  }
}
