import { Socket } from 'socket.io'
import { z } from 'zod'

import { prisma, users } from '@/main.js'

const schema = z.object({
  last_sync: z.coerce.date(),
})

export function onSync(socket: Socket) {
  return async (payload: z.infer<typeof schema>) => {
    const parsed = schema.safeParse(payload)
    if (!parsed.success)
      return socket.emit('error', parsed.error.flatten().fieldErrors)

    const user_id = users.get(socket)
    if (!user_id) return socket.emit('error', { message: 'Unauthorized' })

    const chats = await prisma.chat.findMany({
      where: {
        memberships: {
          some: { user_id },
        },
        OR: [
          {
            created_at: {
              gte: parsed.data.last_sync,
            },
          },
          {
            messages: {
              some: {
                created_at: {
                  gte: parsed.data.last_sync,
                },
              },
            },
          },
        ],
      },
      include: {
        messages: {
          where: {
            created_at: {
              gte: parsed.data.last_sync,
            },
          },
        },
        memberships: {
          select: {
            user: {
              select: {
                id: true,
                username: true,
                avatar: true,
              },
            },
          },
        },
      },
    })

    // Remove nesting caused by user-chats many-many relation
    const result = [...chats].map((chat) => {
      const { memberships, ...rest } = chat
      return {
        ...rest,
        users: [...memberships].map((m) => m.user),
      }
    })

    socket.emit('sync', result)
  }
}
