import { Socket } from 'socket.io'
import { z } from 'zod'

import { createChat } from '@/lib/index.js'
import { users } from '@/main.js'

const schema = z.object({
  name: z.string().min(1).max(64),
  users: z.array(z.string().length(36)).min(1),
})

export function onChat(socket: Socket) {
  return async (payload: z.infer<typeof schema>) => {
    const parsed = schema.safeParse(payload)
    if (!parsed.success)
      return socket.emit('error', parsed.error.flatten().fieldErrors)

    const user_id = users.get(socket)
    if (!user_id) return socket.emit('error', { message: 'Unauthorized' })

    const members = new Set([user_id, ...parsed.data.users])
    if (members.size <= 1)
      return socket.emit('error', { message: 'Bad request' })

    const chat = createChat(parsed.data.name, members)
    socket.emit('chat', chat)
  }
}
