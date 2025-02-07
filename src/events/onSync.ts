import { Socket } from 'socket.io'
import { z } from 'zod'

import { getChats } from '@/lib/index.js'
import { users } from '@/main.js'

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

    const chats = await getChats(user_id, parsed.data.last_sync)
    socket.emit('sync', chats)
  }
}
