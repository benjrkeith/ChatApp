import { Socket } from 'socket.io'
import { z } from 'zod'

import { prisma, users } from '@/main.js'

const schema = z.object({
  chat_id: z.string().length(36),
  content: z.string().min(1).max(1024),
})

export function onMessage(socket: Socket) {
  return async (payload: z.infer<typeof schema>) => {
    const parsed = schema.safeParse(payload)
    if (!parsed.success) {
      socket.emit('error', parsed.error.flatten().fieldErrors)
      return
    }

    const user_id = users.get(socket)
    if (!user_id) {
      socket.emit('error', { message: 'Unauthorized' })
      return
    }

    const message = await prisma.message.create({
      data: {
        author_id: user_id,
        chat_id: parsed.data.chat_id,
        content: parsed.data.content,
      },
    })

    socket.emit('message', message)
  }
}
