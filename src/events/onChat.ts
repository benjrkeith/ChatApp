import { Socket } from 'socket.io'
import { z } from 'zod'

import { createChat } from '../lib/createChat.js'
import { users } from '../main.js'
import { chatSchema } from '../schemas/chat.js'

export function onChat(socket: Socket) {
  return async (payload: z.infer<typeof chatSchema>) => {
    const user = users.getUser(socket)
    if (!user?.id) return socket.disconnect()

    const parsed = chatSchema.safeParse(payload)
    if (!parsed.success)
      return socket.emit('error', parsed.error.flatten().fieldErrors)

    const members = new Set([user.id, ...parsed.data.users])
    if (members.size <= 1)
      return socket.emit('error', { message: 'Bad request' })

    const chat = await createChat(user.id, members, parsed.data.name)
    for (const id of members.entries()) {
      const targetSocket = users.getSocket(id[0])
      if (targetSocket) targetSocket.join(chat.id)
    }

    if (!chat.name) chat.name = chat.memberships[0].user.username
    socket.emit('chat', chat)

    if (chat.name === chat.memberships[0].user.username)
      chat.name = user.username || 'New chat'

    socket.to(chat.id).emit('chat', chat)
  }
}
