import { Socket } from 'socket.io'
import { z } from 'zod'

import { prisma, users } from '@/main.js'

const schema = z.object({
  name: z.string().min(1).max(64),
  users: z.array(z.string().length(36)).min(1),
})

export function onChat(socket: Socket) {
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

    const members = new Set([user_id, ...parsed.data.users])
    if (members.size <= 1) {
      socket.emit('error', { message: 'Bad request' })
      return
    }

    const chat = await prisma.chat.create({
      data: {
        name: parsed.data.name,
        memberships: {
          create: [...members].map((user_id) => ({ user_id })),
        },
      },
    })

    socket.emit('chat', chat)
  }
}
